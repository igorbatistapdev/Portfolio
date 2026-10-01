/* ==========================================================================
   Portfólio — lógica da página (sem dependências).
   O conteúdo vem de js/data.js (window.PORTFOLIO).
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) { console.error("data.js não foi carregado."); return; }

  /* ---------- Utilitários ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  // Vazio ou "[ADICIONAR ...]" = ainda não preenchido
  function pending(v) { return !v || /\[\s*ADICIONAR/i.test(v) || /\[\s*CONFIRMAR/i.test(v); }

  function el(tag, opts, children) {
    var node = document.createElement(tag);
    opts = opts || {};
    Object.keys(opts).forEach(function (k) {
      if (k === "class") node.className = opts[k];
      else if (k === "text") node.textContent = opts[k];
      else node.setAttribute(k, opts[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  // Ícones (SVG estáticos e confiáveis; nenhum dado do usuário entra aqui)
  var ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.9.8a3.6 3.6 0 0 1-1.7-1.7l.8-.9-1-2L9 9.5z"/></svg>'
  };

  function iconEl(name) {
    var span = el("span", { class: "icon-wrap", "aria-hidden": "true" });
    span.style.display = "inline-flex";
    span.innerHTML = ICONS[name] || "";
    return span;
  }

  // Monta a lista de canais a partir de data.js
  function channels() {
    var L = D.links, wa = "https://wa.me/" + String(L.whatsapp).replace(/\D/g, "");
    return [
      { key: "github",   label: "GitHub",   icon: "github",   value: L.github,   href: L.github,   text: "GitHub" },
      { key: "linkedin", label: "LinkedIn", icon: "linkedin", value: L.linkedin, href: L.linkedin, text: "LinkedIn" },
      { key: "email",    label: "E-mail",   icon: "email",    value: L.email,    href: pending(L.email) ? "" : "mailto:" + L.email, text: L.email },
      { key: "whatsapp", label: "WhatsApp", icon: "whatsapp", value: L.whatsapp, href: pending(L.whatsapp) ? "" : wa, text: "Enviar mensagem" }
    ];
  }

  function externalAttrs(a, href) {
    a.setAttribute("href", href);
    if (/^https?:/i.test(href)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener noreferrer"); }
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    var P = D.perfil;
    $("#hero-status").textContent = P.disponibilidade;
    $("#hero-titulo").textContent = "Olá, eu sou " + P.nomeCurto + ".";
    $("#hero-cargo").textContent = P.cargo;
    $("#hero-resumo").textContent = P.resumoHero;

    var foto = $("#hero-foto");
    if (P.foto) foto.src = P.foto;
    if (P.fotoAlt) foto.alt = P.fotoAlt;

    var cv = $("#btn-curriculo");
    if (!pending(P.curriculo)) { cv.href = P.curriculo; cv.hidden = false; }

    var ul = $("#hero-social");
    channels().filter(function (c) { return c.key === "github" || c.key === "linkedin"; }).forEach(function (c) {
      var li = el("li");
      if (pending(c.href)) {
        var s = el("span", { class: "is-pending", title: "Link ainda não adicionado (edite js/data.js)" });
        s.appendChild(iconEl(c.icon)); s.appendChild(document.createTextNode(c.label + " (a adicionar)"));
        li.appendChild(s);
      } else {
        var a = el("a", { "aria-label": c.label + " (abre em nova aba)" });
        externalAttrs(a, c.href); a.appendChild(iconEl(c.icon)); a.appendChild(document.createTextNode(c.label));
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
  }

  /* ---------- Sobre ---------- */
  function renderAbout() {
    var wrap = $("#sobre-texto");
    D.sobre.paragrafos.forEach(function (t) { wrap.appendChild(el("p", { text: t })); });
    var dl = $("#sobre-destaques");
    D.sobre.destaques.forEach(function (f) {
      dl.appendChild(el("div", {}, [el("dt", { text: f.rotulo }), el("dd", { text: f.valor })]));
    });
  }

  /* ---------- Experiência ---------- */
  function renderExperience() {
    var root = $("#experiencia-lista");
    D.experiencia.forEach(function (j) {
      var period = el("strong", { text: j.periodo });
      if (pending(j.periodo)) period.className = "is-pending";
      var meta = el("div", { class: "job-meta" }, [period]);

      var list = el("ul", { class: "checklist" });
      j.atividades.forEach(function (t) { list.appendChild(el("li", { text: t })); });

      var body = el("div", { class: "job-body" }, [
        el("h3", { text: j.cargo }),
        el("p", { class: "job-org", text: j.organizacao }),
        list
      ]);
      if (j.observacao && pending(j.observacao)) {
        body.appendChild(el("p", { class: "form-note is-pending", text: j.observacao }));
      } else if (j.observacao) {
        body.appendChild(el("p", { class: "form-note", text: j.observacao }));
      }
      root.appendChild(el("article", { class: "job reveal" }, [meta, body]));
    });
  }

  /* ---------- Habilidades ---------- */
  function renderSkills() {
    var root = $("#habilidades-lista");
    D.habilidades.forEach(function (g) {
      var badges = el("ul", { class: "badges" });
      g.itens.forEach(function (item) { badges.appendChild(el("li", { class: "badge", text: item })); });
      root.appendChild(el("section", { class: "skill-group reveal", "aria-label": g.categoria }, [
        el("h3", { text: g.categoria }), badges
      ]));
    });
  }

  /* ---------- Projetos ---------- */
  function linkButton(label, href, ariaName, primary) {
    var cls = "btn " + (primary ? "btn-primary" : "btn-secondary");
    if (pending(href)) {
      return el("span", { class: cls + " is-pending", title: "Link ainda não adicionado (edite js/data.js)", text: label + " (a adicionar)" });
    }
    var a = el("a", { class: cls, text: label, "aria-label": label + " — " + ariaName + " (abre em nova aba)" });
    externalAttrs(a, href);
    return a;
  }

  function projectCard(p, featured) {
    var media = el("div", { class: "project-media" });
    if (p.imagem) {
      media.appendChild(el("img", { src: p.imagem, alt: p.imagemAlt || "", loading: "lazy", decoding: "async" }));
    } else {
      media.appendChild(el("div", { class: "media-placeholder", role: "img", "aria-label": "Captura de tela do projeto ainda não adicionada" }, [
        el("span", { text: p.imagemNota || "Adicione uma captura de tela deste projeto em imagens/" })
      ]));
    }

    var tags = el("ul", { class: "badges", "aria-label": "Tecnologias" });
    p.tecnologias.forEach(function (t) {
      tags.appendChild(el("li", { class: "badge" + (pending(t) ? " is-pending" : ""), text: t }));
    });

    var problem = el("p", { class: "project-problem" }, [
      el("strong", { text: "Problema que resolve" }),
      document.createTextNode(p.problema)
    ]);
    if (pending(p.problema)) problem.classList.add("is-pending");

    var links = el("div", { class: "project-links" }, [
      linkButton(featured ? "Ver no GitHub" : "GitHub", p.github, p.nome, true)
    ]);
    if (p.demo !== "" && p.demo != null) links.appendChild(linkButton("Ver demo", p.demo, p.nome, false));

    var body = el("div", { class: "project-body" });
    if (featured) body.appendChild(el("span", { class: "featured-tag", text: "Projeto em destaque" }));
    body.appendChild(el("h3", { text: p.nome }));
    body.appendChild(el("p", { class: "project-desc", text: p.descricao }));
    body.appendChild(problem);
    body.appendChild(tags);
    body.appendChild(links);

    return el("article", { class: "project reveal" + (featured ? " project--featured" : "") }, [media, body]);
  }

  function renderProjects() {
    D.projetos.forEach(function (p) {
      if (p.destaque) $("#projetos-destaque").appendChild(projectCard(p, true));
      else $("#projetos-lista").appendChild(projectCard(p, false));
    });
  }

  /* ---------- Formação ---------- */
  function renderEducation() {
    var root = $("#formacao-lista");
    D.formacao.forEach(function (f) {
      root.appendChild(el("article", { class: "edu reveal" }, [
        el("div", {}, [el("h3", { text: f.curso }), el("p", { text: f.instituicao })]),
        el("div", { class: "edu-status" }, [el("strong", { text: f.status }), el("span", { text: f.previsao })])
      ]));
    });
  }

  /* ---------- Contato e rodapé ---------- */
  function renderContact() {
    var ul = $("#contato-canais");
    channels().forEach(function (c) {
      var inner = [iconEl(c.icon), el("div", {}, [el("small", { text: c.label }), el("span", { text: pending(c.value) ? c.value : c.text })])];
      var li = el("li");
      if (pending(c.href)) {
        var box = el("div", { class: "contact-item is-pending", title: "Ainda não adicionado (edite js/data.js)" }, inner);
        li.appendChild(box);
      } else {
        var a = el("a", { class: "contact-item", "aria-label": c.label });
        externalAttrs(a, c.href);
        inner.forEach(function (n) { a.appendChild(n); });
        li.appendChild(a);
      }
      ul.appendChild(li);
    });

    var fl = $("#footer-links");
    channels().filter(function (c) { return c.key !== "whatsapp"; }).forEach(function (c) {
      var li = el("li");
      if (pending(c.href)) li.appendChild(el("span", { class: "is-pending", text: c.label }));
      else { var a = el("a", { text: c.label }); externalAttrs(a, c.href); li.appendChild(a); }
      fl.appendChild(li);
    });

    $("#ano").textContent = new Date().getFullYear();
  }

  /* ---------- Formulário → WhatsApp ---------- */
  function initForm() {
    var form = $("#form-contato");
    if (!form) return;
    var nome = $("#nome"), msg = $("#mensagem");

    function check(input, errId) {
      var bad = !input.value.trim();
      input.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad) input.setAttribute("aria-describedby", errId); else input.removeAttribute("aria-describedby");
      $("#" + errId).hidden = !bad;
      return !bad;
    }
    nome.addEventListener("input", function () { if (nome.getAttribute("aria-invalid") === "true") check(nome, "erro-nome"); });
    msg.addEventListener("input", function () { if (msg.getAttribute("aria-invalid") === "true") check(msg, "erro-mensagem"); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var okNome = check(nome, "erro-nome");
      var okMsg = check(msg, "erro-mensagem");
      if (!okNome) { nome.focus(); return; }
      if (!okMsg) { msg.focus(); return; }

      var numero = String(D.links.whatsapp).replace(/\D/g, "");
      var texto = "Olá, " + D.perfil.nomeCurto + "! Me chamo " + nome.value.trim() + ". " + msg.value.trim();
      var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  /* ---------- Navegação (menu mobile + link ativo) ---------- */
  function initNav() {
    var toggle = $("#nav-toggle"), nav = $("#menu");

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 860) setOpen(false); });

    // Destaca no menu a seção visível
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    $$(".nav-list a", nav).forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (id) {
          if (id === en.target.id) links[id].setAttribute("aria-current", "true");
          else links[id].removeAttribute("aria-current");
          links[id].classList.toggle("is-active", id === en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Tema claro/escuro ---------- */
  function initTheme() {
    var root = document.documentElement, btn = $("#theme-toggle");
    function label() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", dark ? "Mudar para tema claro" : "Mudar para tema escuro");
    }
    label();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* armazenamento indisponível */ }
      label();
    });
  }

  /* ---------- Revelar ao rolar (efeito único e sutil) ---------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (i) { i.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Inicialização ---------- */
  try {
    renderHero(); renderAbout(); renderExperience(); renderSkills();
    renderProjects(); renderEducation(); renderContact();
    initForm(); initNav(); initTheme();
  } catch (err) {
    console.error("Erro ao montar o portfólio:", err);
  }
  initReveal();
})();
