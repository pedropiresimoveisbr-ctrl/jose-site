# Parque Ilhabela — MRV + Minha Casa Minha Vida — Landing Page

Landing page de captação de leads para o empreendimento **Parque Ilhabela**
(Av. Presidente Vargas, 447 — Parque Pecuária, Campos dos Goytacazes-RJ),
com dados e fotos reais do material oficial de treinamento MRV.

## ⚠️ Antes de publicar

- WhatsApp já configurado: **+55 22 99997-3444**.
- Só falta trocar a URL de SEO: em `index.html` (`<link rel="canonical">`),
  `robots.txt` e `sitemap.xml`, troque `SEU-USUARIO.github.io/SEU-REPOSITORIO`
  pela URL real do seu GitHub Pages.
- **Autorização de uso de imagem:** confirme que há autorização dos clientes
  cujas fotos aparecem na seção "Clientes" antes de publicar.
- Preços e disponibilidade de unidades **não estão no site** (mudam com
  frequência) — o formulário e o WhatsApp direcionam isso para o consultor,
  como no material oficial.

## Estrutura

- `index.html` — estrutura da página
- `styles.css` — layout, responsividade e identidade visual (verde/laranja MRV)
- `script.js` — WhatsApp, máscara de telefone, menu mobile, validação do formulário
- `privacidade.html` — política de privacidade (LGPD)
- `assets/fachada-guarita.webp` — render real da fachada/guarita (hero)
- `assets/piscina.webp`, `salao-festas.webp`, `area-gourmet.webp`,
  `playground.webp`, `vista-lazer.webp` — fotos reais da área de lazer
- `assets/localizacao-aerea.webp` — imagem aérea com pontos de referência
- `assets/cliente-1.webp` a `cliente-6.webp` — fotos reais de clientes na entrega das chaves
- `robots.txt`, `sitemap.xml` — SEO básico

## O que mudou nesta versão

- **Hero real**: trocamos o banner genérico pela foto real da fachada/guarita
  do Parque Ilhabela, com o texto em HTML sobreposto (não mais preso dentro
  da imagem) e uma barra de destaques (320 unidades, 20 blocos, vagas etc.).
- **Ficha técnica real**: endereço, unidades, vagas de garagem, metragens e
  unidades PCD, extraídos do book oficial de treinamento MRV.
- **Diferenciais do empreendimento e do apartamento**: duas listas com os
  itens reais do material (medição individualizada de água, portão elétrico,
  piso laminado, pia em inox etc.).
- **Seção de lazer com fotos reais**: piscinas, salão de festas, área
  gourmet/churrasqueira e playground do próprio empreendimento.
- **Seção de localização**: imagem aérea real com os pontos de referência
  (Hospital Ferreira Machado, Partage Campos Shopping, Uniflu etc.), lista
  "pertinho de você" e vias de acesso.
- **Números atualizados** com os dados oficiais do book (1 a cada 125
  brasileiros mora em um MRV, +120 mil chaves entregues, +100 cidades, +45 anos).
- **Rodapé legal atualizado**: central 0800 728 9000, responsáveis técnicos
  (CAU/CREA) e registro de incorporação, conforme o rodapé do material oficial.
- Continuam: seção de clientes com fotos reais, formulário de lead com
  WhatsApp, LGPD, SEO e acessibilidade.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta mantendo a pasta `assets`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde o GitHub publicar.

A página não depende de framework ou build: é HTML/CSS/JS puro.
