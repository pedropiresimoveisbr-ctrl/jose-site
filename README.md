# Parque Ilhabela — MRV + Minha Casa Minha Vida — Landing Page

Landing page de captação de leads (corretor/imobiliária parceira MRV) para o
empreendimento **Parque Ilhabela**, em Campos dos Goytacazes-RJ.

## ⚠️ Antes de publicar

Já está configurado com o WhatsApp real: **+55 22 99997-3444** (em `script.js` e nos
links do `index.html`).

Só falta trocar a URL de SEO:

- Em `index.html` (`<link rel="canonical">`), `robots.txt` e `sitemap.xml`, troque
  `SEU-USUARIO.github.io/SEU-REPOSITORIO` pela URL real do seu GitHub Pages.

Também revise antes de divulgar:

- Os textos da seção "Conheça o Parque Ilhabela" estão genéricos (não incluem
  metragens, número exato de unidades ou preço), porque esses dados não foram
  fornecidos nesta rodada — confirme com o seu gerente MRV e atualize o texto em
  `index.html` (seção `#empreendimento`).
- **Autorização de uso de imagem:** confirme que há autorização dos clientes cujas
  fotos aparecem na seção "Clientes" antes de publicar (uso comercial de imagem de
  terceiros).

## Estrutura

- `index.html` — estrutura da página
- `styles.css` — layout, responsividade e identidade visual (verde/laranja MRV)
- `script.js` — WhatsApp, máscara de telefone, menu mobile, validação do formulário
- `privacidade.html` — política de privacidade (LGPD)
- `assets/banner-pc.webp` / `assets/banner-mobile.webp` — banner do hero (desktop/mobile)
- `assets/cliente-1.webp` a `cliente-6.webp` — fotos reais de clientes na entrega das chaves
- `robots.txt`, `sitemap.xml` — SEO básico

## O que tem nesta versão

- **Hero** usando o banner de referência enviado (desktop e mobile via `<picture>`),
  com uma barra de ação fixa logo abaixo contendo os botões reais de WhatsApp e o
  link para o formulário (o banner em si é só a imagem — os botões funcionais ficam
  na barra de HTML, então nada de botão "morto" dentro da imagem).
- **Seção "Conheça o Parque Ilhabela"** com uma introdução do empreendimento em
  Campos dos Goytacazes/RJ (texto genérico — ver aviso acima sobre dados a confirmar).
- **Seção "Clientes"** com as 6 fotos reais de clientes recebendo as chaves — prova
  social autêntica, em grid tipo mosaico.
- **Botões de WhatsApp** no header, no hero, na seção do empreendimento, no botão
  flutuante e no formulário — todos com o número real e mensagens contextualizadas
  ao Parque Ilhabela.
- **Rodapé com avisos legais** da MRV (imagens ilustrativas, registro de incorporação,
  responsáveis técnicos CAU/CREA, central 0800).
- **LGPD:** checkbox de consentimento obrigatório + política de privacidade.
- **SEO:** Open Graph, `robots.txt`, `sitemap.xml`, `rel="canonical"`.
- **Acessibilidade:** foco visível, alt em todas as imagens, `prefers-reduced-motion`,
  link "pular para o conteúdo".

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta mantendo a pasta `assets`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o GitHub publicar.

A página não depende de framework ou build: é HTML/CSS/JS puro.

> Observação: confira sempre com seu gerente MRV se os dados do empreendimento
> (preço, estoque, condições) seguem válidos antes de divulgar.
