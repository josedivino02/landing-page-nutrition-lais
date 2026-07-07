# Landing Page — Nutrição Laís

Landing page profissional e otimizada para conversão, desenvolvida para uma nutricionista. Construída com **Next.js 15 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS**, com deploy automatizado via **GitHub Actions + Vercel CLI**.

## ✨ Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** com tipagem estrita
- **Tailwind CSS** (tokens customizados)
- **Framer Motion** para microinterações
- **React Hook Form + Zod** para validação de formulários
- **shadcn/ui** (Radix UI + Tailwind) para componentes acessíveis
- **Lucide React** para ícones
- **ESLint 9 + Prettier 3**
- **Vercel CLI** + **GitHub Actions** (CI/CD)

## 🚀 Getting Started

### Pré-requisitos

- Node.js 22 LTS ([download](https://nodejs.org))
- npm 10+

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/josedivino02/landing-page-nutrition-lais.git
cd landing-page-nutrition-lais

# 2. Instale as dependências
npm install

# 3. Copie as variáveis de ambiente
cp .env.example .env.local

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts disponíveis

| Comando            | Descrição                                       |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento            |
| `npm run build`    | Cria a build de produção                        |
| `npm run start`    | Inicia o servidor de produção                   |
| `npm run lint`     | Executa o linter (ESLint)                       |
| `npm run type-check` | Verifica a tipagem TypeScript sem emitir saída |
| `npm run format`   | Formata o código com Prettier                   |

## 🔐 Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local` e preencha os valores:

```env
NEXT_PUBLIC_SITE_NAME=Nutrição Laís
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/
NEXT_PUBLIC_EMAIL=contato@seudominio.com
```

> Todas as variáveis públicas devem começar com `NEXT_PUBLIC_` para serem acessíveis no client.

## ☁️ Deploy na Vercel

### 1. Configure o projeto na Vercel

```bash
# Instale a CLI
npm i -g vercel

# Login
vercel login

# Vincule o projeto (crie .vercel/project.json localmente)
vercel link
```

### 2. Configure as Secrets no GitHub

No repositório, vá em **Settings → Secrets and variables → Actions** e adicione:

| Secret              | Onde encontrar                                          |
| ------------------- | ------------------------------------------------------- |
| `VERCEL_TOKEN`      | Vercel Dashboard → Account Settings → Tokens            |
| `VERCEL_ORG_ID`     | `.vercel/project.json` (campo `orgId`)                  |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` (campo `projectId`)              |

### 3. Como funciona o CI/CD

O workflow em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) executa, a cada push na `main`:

1. ✅ Checkout do código
2. 📦 Instalação das dependências (`npm ci`)
3. 🔍 Lint (`npm run lint`)
4. 🔎 Type-check (`npm run type-check`)
5. 🏗️ Build (`npm run build`)
6. 🚀 Deploy via Vercel CLI (`vercel deploy --prebuilt --prod`)

### 4. Deploy manual via CLI

```bash
# Login
vercel login

# Deploy de produção (a partir do main)
vercel --prod

# Ou usando o fluxo prebuilt (igual ao CI)
npm run build
vercel deploy --prebuilt --prod
```

## 📁 Estrutura de Pastas

```
.
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx          # Layout raiz (fontes, metadata, JSON-LD)
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globais + tokens Tailwind
│   ├── robots.ts           # robots.txt dinâmico
│   └── sitemap.ts          # sitemap.xml dinâmico
├── components/             # Componentes organizados por domínio
│   ├── about/
│   ├── animations/
│   ├── before-after/
│   ├── benefits/
│   ├── cta/
│   ├── differentials/
│   ├── faq/
│   ├── footer/
│   ├── forms/
│   ├── header/
│   ├── hero/
│   ├── how-it-works/
│   ├── partners/
│   ├── plans/
│   ├── services/
│   ├── testimonials/
│   ├── trust/
│   ├── ui/                 # shadcn/ui components
│   └── whatsapp/
├── lib/                    # Utilitários, schemas, constantes
│   ├── constants.ts
│   ├── schema.ts
│   ├── seo.ts
│   └── utils.ts
├── public/                 # Assets estáticos
├── .github/workflows/      # CI/CD
└── ...
```

## 🎨 Customização

### Cores e tema

As cores estão definidas em [`tailwind.config.ts`](tailwind.config.ts) na seção `theme.extend.colors`:

- `brand` — verde principal (#3FA34D)
- `brand-50..950` — variações do verde
- `gold` — detalhes dourados
- `ink` — escala de cinzas

Para alterar a paleta, basta editar os valores hex e a aplicação inteira refletirá a mudança.

### Conteúdo

Os textos e dados (serviços, depoimentos, planos, etc.) estão centralizados em [`lib/constants.ts`](lib/constants.ts). Edite esse arquivo para customizar todo o conteúdo da página.

## 🔍 SEO

A página já entrega:

- ✅ Metadata completa (title, description, Open Graph, Twitter Card)
- ✅ Schema.org `LocalBusiness` + `Nutritionist`
- ✅ `robots.txt` dinâmico
- ✅ `sitemap.xml` dinâmico
- ✅ `manifest.json`
- ✅ Imagens otimizadas (AVIF/WebP) via `next/image`
- ✅ Fontes via `next/font`

## ♿ Acessibilidade

- ✅ HTML semântico
- ✅ ARIA labels em controles interativos
- ✅ Foco visível por teclado
- ✅ Contraste WCAG AA
- ✅ Suporte a `prefers-reduced-motion`

## 📊 Performance

- ✅ Lighthouse Score alvo: **≥ 95**
- ✅ Imagens em AVIF/WebP
- ✅ Lazy loading nativo
- ✅ Fontes auto-hospedadas
- ✅ Tree-shaking automático
- ✅ Code splitting por rota

## 📝 Licença

Código proprietário. © 2026 Nutrição Laís. Todos os direitos reservados.