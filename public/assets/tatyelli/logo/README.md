# Estética Tatyelli Cristina — Logo Pack

Este pacote mantém a identidade atual da cliente e apenas refina a aplicação para o site.

## Caminho recomendado no projeto

Copie a pasta abaixo para o projeto:

`/public/assets/tatyelli/logo/`

## Arquivos principais

- `logo-tatyelli-horizontal.svg` — header desktop e footer claro
- `logo-tatyelli-vertical.svg` — hero e seções institucionais
- `logo-tatyelli-symbol.svg` — símbolo isolado
- `logo-tatyelli-light.svg` — uso em fundo verde escuro
- `logo-tatyelli-dark.svg` — uso em fundo claro/off-white
- `logo-tatyelli-mono.svg` — versão monocromática
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `og-tatyelli.png`

## Paleta

```css
--tatyelli-green: #062E26;
--tatyelli-green-dark: #031F1A;
--tatyelli-gold: #C8A24A;
--tatyelli-gold-soft: #D8C48A;
--tatyelli-beige: #E9DFC9;
--tatyelli-offwhite: #F7F2E8;
--tatyelli-graphite: #1D1D1B;
```

## Uso recomendado no site

Header desktop:

```tsx
<img
  src="/assets/tatyelli/logo/logo-tatyelli-horizontal.svg"
  alt="Estética Tatyelli Cristina"
  className="h-12 w-auto"
/>
```

Header mobile / favicon visual:

```tsx
<img
  src="/assets/tatyelli/logo/logo-tatyelli-symbol.svg"
  alt="Estética Tatyelli Cristina"
  className="h-10 w-auto"
/>
```

Footer escuro:

```tsx
<img
  src="/assets/tatyelli/logo/logo-tatyelli-light.svg"
  alt="Estética Tatyelli Cristina"
  className="h-14 w-auto"
/>
```

Metadata Next.js:

```ts
export const metadata = {
  title: "Estética Tatyelli Cristina | Estética Facial, Corporal e Depilação a Laser",
  description:
    "Clínica de estética com 10 anos de experiência em procedimentos faciais, corporais, depilação a laser e protocolos personalizados.",
  icons: {
    icon: "/assets/tatyelli/logo/favicon.ico",
    apple: "/assets/tatyelli/logo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Estética Tatyelli Cristina",
    description:
      "Estética facial, corporal, depilação a laser e protocolos personalizados.",
    images: ["/assets/tatyelli/logo/og-tatyelli.png"],
  },
};
```

## Observação

As versões SVG encapsulam a arte refinada para preservar visualmente a logo atual da cliente.  
Não é uma nova marca; é uma padronização para uso profissional no site.
