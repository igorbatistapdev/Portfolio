# Portfólio — Igor Batista Pereira

Site estático em HTML, CSS e JavaScript puro. Sem build e sem dependências.

## Como editar
Todo o conteúdo (textos, links, projetos, experiência, formação, tecnologias) fica em **`js/data.js`**.
Campos com `[ADICIONAR ...]` são placeholders: aparecem como "a adicionar" e não geram link até serem preenchidos.

- Currículo: coloque o PDF em `assets/` e preencha `perfil.curriculo` (o botão só aparece com o arquivo definido).
- Imagem de projeto: salve em `imagens/` e preencha `imagem` e `imagemAlt` no projeto.
- Cores e tema: variáveis no início de `css/style.css`.

## Como publicar
Funciona no GitHub Pages, Netlify ou Vercel (pasta raiz). Depois de publicar, troque `og:image` em `index.html` por uma URL absoluta.

## Estrutura
index.html · css/style.css · js/data.js · js/main.js · assets/favicon.svg · imagens/
