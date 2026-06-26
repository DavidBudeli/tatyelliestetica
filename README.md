# Estética Tatyelli Cristina

Aplicação moderna em Next.js, React, TypeScript, Tailwind CSS, GSAP e Framer Motion para a clínica Estética Tatyelli Cristina.

## Stack

- Node.js
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion
- Estrutura de assets em `public/assets/tatyelli/`

## Desenvolvimento local

```bash
npm install
npm run dev
```

URL padrão:

```txt
http://localhost:3000
```

Também é possível usar uma porta específica:

```bash
npm run dev -- -p 5173
```

## Build

```bash
npm run build
npm start
```

O script `start` executa o servidor standalone gerado pelo Next.js, respeitando a variável `PORT` do ambiente:

```bash
PORT=3000 npm start
```

## Deploy na Hostinger com Node.js

Configuração recomendada no painel da Hostinger:

- App root: pasta do projeto
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Entry point: `.next/standalone/server.js`
- Node.js: usar uma versão atual compatível com Next.js

Se o painel fornecer uma variável `PORT`, o servidor já usa automaticamente.

## Pontos configuráveis

- Domínio final em `src/lib/constants.ts` (`siteConfig.domain`)
- Endereço e Google Maps em `src/lib/constants.ts`
- WhatsApp em `src/lib/constants.ts`
- Assets da marca em `public/assets/tatyelli/logo/`
- Imagens e feedbacks em `public/assets/tatyelli/images/`

## Responsabilidade

Os procedimentos são indicados após avaliação individual. Resultados podem variar de pessoa para pessoa.
