# Tipografia

>"**No máximo três fontes** Combinar três fontes diferentes já é difícil, mais do que isso é demais! Variação demais cria inconsistência, portanto, na dúvida, escolha apenas duas e, se precisar, varie apenas entre pesos diferentes de uma mesma fonte (light, regular, bold, etc)."
Por que você utilizou mais de 3 fontes??? Porque estou praticando next/font com tailwind e queria combinar outras fontes.
>
## *Recursos*
 - NextJs 14
	 - Next/font
	 - Next/Image
 - TailwindCss
	 -  Tailwind Merge (Resolve conflito de classes existente)
	 - Tailwind Clsx (Classes condicionais)
	 - CVA 
	- adicionei mais telas de dispositivos para responsividade do site.
	- Classes personalizadas @layer(agrupar em uma camada que também permite responsividade, pseudo-classes pseud-elemento) @Camada @aplly (Invocar classes existente no arquivo de estilo)
	- Animações
 - FramerMotion 
   -  exemplos da documentação utilizada no projeto, como o componente de progress.
   - Gancho useScroll
   - useMotionValueEvent para capturar a rolagem do eixo Y
   - variants
   - AnimatePresense para componentes com desmontagem
 - Shadcn-ui & thema
 - Framer para fazer o wireframe do projeto.
> 
> Por que Framer ??? Porque queria experimentar os recursos interessantes como animações, hover, Inteligência artificial e mais...

### Dificuldades
 - grid-template-area na sessão de tipos de fontes, (Tem um [pacote grid-template-area com tailwind] (https://www.npmjs.com/package/@savvywombat/tailwindcss-grid-areas), mas optei fazer uma class personalizada.
 - Nomes para alguns componentes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
