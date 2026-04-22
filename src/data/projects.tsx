export interface ProjectImage {
    src: string
    alt: string
}

export interface ProjectMetric {
    label: string
    value: string
}

export interface ProjectLink {
    href: string
    text: string
}

export interface PortfolioProject {
    id: string
    title: string
    tagline: string
    summary: string
    role: string
    year: string
    stack: string[]
    overview: string[]
    highlights: string[]
    metrics: ProjectMetric[]
    links: ProjectLink[]
    images: ProjectImage[]
}

export const projects: PortfolioProject[] = [
    {
        id: "1",
        title: "E-Commerce Full Stack",
        tagline: "Plataforma de vendas com checkout completo e experiência orientada a conversão.",
        summary: "Loja online responsiva com catálogo, carrinho, checkout e painel de conta para clientes.",
        role: "Desenvolvedor Full Stack",
        year: "2025",
        stack: ["TypeScript", "React", "Next.js", "SCSS", "Mercado Pago", "Melhor Envio"],
        overview: [
            "A aplicação foi construída para oferecer uma jornada de compra fluida, com foco em performance, clareza visual e conversão.",
            "A arquitetura prioriza componentes reaproveitáveis, regras de negócio separadas por domínio e integração com serviços de pagamento e logística."
        ],
        highlights: [
            "Catálogo com filtros, busca e ordenação por critérios dinâmicos.",
            "Página de produto com recomendação, avaliações e simulação de frete.",
            "Fluxo completo de carrinho, checkout e pagamento via Mercado Pago.",
            "Painel do cliente com histórico, dados de conta e acompanhamento de pedidos."
        ],
        metrics: [
            { label: "Telas", value: "8+" },
            { label: "Integrações", value: "2" },
            { label: "Stack principal", value: "Next.js" }
        ],
        links: [
            { href: "https://github.com/Ellucidator/project_sst_v.3_front", text: "Ver repositório" },
            { href: "https://project-sst-v-3-front.vercel.app/", text: "Abrir demonstração" }
        ],
        images: [
            { src: "/projects/01/home.png", alt: "Página inicial do e-commerce" },
            { src: "/projects/01/products.png", alt: "Listagem de produtos" },
            { src: "/projects/01/product.png", alt: "Detalhes de produto" },
            { src: "/projects/01/cart.png", alt: "Carrinho de compras" },
            { src: "/projects/01/userHome.png", alt: "Painel de usuário" },
            { src: "/projects/01/purchase.png", alt: "Fluxo de compra" },
            { src: "/projects/01/register.png", alt: "Cadastro de usuário" },
            { src: "/projects/01/login.png", alt: "Tela de login" }
        ]
    },
    {
        id: "2",
        title: "REST API + Painel Admin",
        tagline: "Backoffice para operação de loja com monitoramento e automação de processos.",
        summary: "API robusta para e-commerce, conectada a um painel administrativo com rotinas de gestão.",
        role: "Backend + Plataforma",
        year: "2025",
        stack: ["TypeScript", "Express", "Sequelize", "PostgreSQL", "JWT", "AdminJS"],
        overview: [
            "Projeto desenhado para centralizar gestão de catálogo, pedidos e promoções em um único painel administrativo.",
            "A API expõe endpoints seguros e estruturados para consumo do front-end e integrações externas."
        ],
        highlights: [
            "Dashboard com indicadores de vendas e receita anual.",
            "CRUD completo de produtos com filtros e marcações comerciais.",
            "Integração de pagamento sincronizada com atualização de status no banco.",
            "Notificações em tempo real para cliente e operação."
        ],
        metrics: [
            { label: "Endpoints", value: "25+" },
            { label: "Módulos", value: "Admin + API" },
            { label: "Banco", value: "PostgreSQL" }
        ],
        links: [
            { href: "https://github.com/Ellucidator/project_sst_V.3", text: "Ver repositório" },
            { href: "https://devleal.com.br/admin", text: "Abrir demonstração" }
        ],
        images: [
            { src: "/projects/02/project_sst.svg", alt: "Identidade do projeto admin" },
            { src: "/projects/02/products.png", alt: "Gerenciamento de produtos" },
            { src: "/projects/02/createProduct.png", alt: "Criação de produto" },
            { src: "/projects/02/promotion.png", alt: "Configuração de promoção" },
            { src: "/projects/02/purchase.png", alt: "Gestão de pedidos" },
            { src: "/projects/02/login.png", alt: "Autenticação do painel" },
            { src: "/projects/02/postman.png", alt: "Coleção de testes da API" }
        ]
    },
    {
        id: "3",
        title: "Portfólio Pessoal",
        tagline: "Experiência digital para posicionamento profissional e apresentação de projetos.",
        summary: "Site institucional com foco em branding pessoal, narrativa técnica e contato profissional.",
        role: "Design + Front-end",
        year: "2026",
        stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Swiper"],
        overview: [
            "O portfólio foi pensado como uma peça de produto: conteúdo estratégico, design autoral e navegação objetiva.",
            "Além da vitrine de projetos, a estrutura prioriza leitura rápida para recrutadores, líderes técnicos e potenciais clientes."
        ],
        highlights: [
            "Página inicial com proposta de valor e provas de execução.",
            "Páginas individuais para cada case com contexto técnico.",
            "Sessão de contato direto com envio de mensagem.",
            "Layout responsivo e otimizado para mobile e desktop."
        ],
        metrics: [
            { label: "Velocidade", value: "Otimizada" },
            { label: "Arquitetura", value: "App Router" },
            { label: "Objetivo", value: "Conversão" }
        ],
        links: [
            { href: "https://github.com/Ellucidator/portfolio-dev-leal", text: "Ver repositório" },
            { href: "/", text: "Abrir site" }
        ],
        images: [
            { src: "/projects/03/home.png", alt: "Home do portfólio" },
            { src: "/projects/03/project.png", alt: "Página de projeto do portfólio" }
        ]
    }
]

function normalizeProjectId(id: string): string {
    const parsed = Number.parseInt(id, 10)

    if (Number.isNaN(parsed)) {
        return id
    }

    return String(parsed)
}

export function getProjectById(id: string): PortfolioProject | undefined {
    const normalizedId = normalizeProjectId(id)
    return projects.find((project) => project.id === normalizedId)
}

export function getProjectIndex(id: string): number {
    const normalizedId = normalizeProjectId(id)
    return projects.findIndex((project) => project.id === normalizedId)
}
