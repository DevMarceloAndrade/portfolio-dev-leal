import Link from "next/link";
import { ProjectBodyProps } from "@/components/pages/project"; 

export const projects: ProjectBodyProps[] = [
    {
        projectName: "WebSite E-Commerce|",
        images: [
            {
                src: '/projects/01/home.png',
                alt: 'home'
            },
            {
                src: '/projects/01/products.png',
                alt: 'products'
            },
            {
                src: '/projects/01/product.png',
                alt: 'product'
            },
            {
                src: '/projects/01/cart.png',
                alt: 'cart'
            },
            {
                src: '/projects/01/userHome.png',
                alt: 'userHome'
            },
            {
                src: '/projects/01/purchase.png',
                alt: 'purchase'
            },
            {
                src: '/projects/01/register.png',
                alt: 'register'
            },
            {
                src: '/projects/01/login.png',
                alt: 'login'
            }
        ],
        links: [
            {
                href: 'https://github.com/Ellucidator/project_sst_v.3_front',
                text: 'Acesse o Repositório'
            },
            {
                href: 'https://project-sst-v-3-front.vercel.app/',
                text: 'Acesse o Beta'
            }
        ],
        descriptionChildren: (
            <div>
                O projeto WebSite E-Commerce foi desenvolvido com o objetivo de fornecer uma plataforma para venda de produtos online.
                <br />
                Procurando sempre oferecer aos clientes uma experiencia de compra agradavel e confortavel foi implementado diversas funcionalidades, dentre as principais podemos destacar:
                <ol className='list-disc list-inside flex flex-col gap-2 mt-2'>
                    <li className='ml-4'><strong>Pagina inicial:</strong> Que oferece uma visao geral da loja e os principais produtos disponiveis. </li>
                    <li className='ml-4'><strong>Pagina de produtos:</strong> Onde o cliente pode filtrar,buscar e ordenar os produtos de acordo com suas necessidades.</li>
                    <li className='ml-4'><strong>Pagina de detalhes:</strong> Que apresenta os detalhes do produto selecionado, produtos recomendados, avaliacoes e comentarios além da possibilidade de verificar o preço do frete.</li>
                    <li className='ml-4'><strong>Carrinho/checkout/pagamento:</strong> Que permite ao cliente adicionar, remover, conferir ou alterar as informacoes pessoais e seguir para o pagamento via MercadoPago.</li>
                    <li className='ml-4'><strong>Painel de usuario:</strong> Painel de usuario completo com funcoes de gerenciamento de informações pessoais e vizualizacao de historico de compras.</li>
                </ol>
                <p className='mt-4 font-bold'>
                    Tecnologias: Typescript, React, Next.js, Scss, SplideJs API Melhor Envio, API MercadoPago, 
                    <Link className="text-blue-400 underline" href="/projects/2"> Rest API E-commerce</Link>.
                </p>
            </div>
        )
    },
    {
        projectName: "Rest API + Painel Administrativo|",
        images: [
            {
                src: '/projects/02/project_sst.svg',
                alt: 'userHome'
            },
            {
                src: '/projects/02/products.png',
                alt: 'products'
            },
            {
                src: '/projects/02/createProduct.png',
                alt: 'product'
            },
            {
                src: '/projects/02/promotion.png',
                alt: 'cart'
            },
            {
                src: '/projects/02/purchase.png',
                alt: 'userHome'
            },
            {
                src: '/projects/02/login.png',
                alt: 'purchase'
            },
            {
                src: '/projects/02/postman.png',
                alt: 'purchase'
            }
        ],
        links: [
            {
                href: 'https://github.com/Ellucidator/project_sst_V.3',
                text: 'Acesse o Repositório'
            },
            {
                href: 'https://devleal.com.br/admin',
                text: 'Acesse o Beta'
            }
        ],
        descriptionChildren: (
            <div>
                O sistema Rest API E-Commerce foi desenvolvido com o objetivo de fornecer uma plataforma para gerenciamento de produtos online e os end points necessarios para o funcionamento da loja.
                <br />
                Procurando oferecer uma experiencia completa e intuitiva foi implementado diversas funcionalidades, dentre as principais podemos destacar:
                <ol className='list-disc list-inside flex flex-col gap-2 mt-2'>
                    <li className='ml-4'><strong>Pagina inicial:</strong> Com graficos indicativos de vendas e valor arrecadado no periodo de um ano. </li>
                    <li className='ml-4'><strong>Paginas de gerenciamento CRUD:</strong> Onde o administrador pode cadastrar, editar e deletar produtos com diversas marcações e filtros.</li>
                    <li className='ml-4'><strong>Sistema de pagamentos:</strong> Sistema seguro de pagamento via MercadoPago interagindo diretamento com as informações e atualizações do banco de dados.</li>
                    <li className='ml-4'><strong>Notificação em tempo real:</strong> Notificação em tempo real para o cliente e o administrador, sobre alterações no sistema de pagamento via whatsapp.</li>
                </ol>
                <p className='mt-4 font-bold'>
                    Tecnologias: TypeScript, Sequelize, Express, PostgresSQL, bcrypt, JWT, AdminJs e API MercadoPago. 
                </p>
            </div>
        )
    },
    {
        projectName: "Portifolio|",
        images: [
            {
                src: '/projects/03/home.png',
                alt: 'home'
            },
            {
                src: '/projects/03/project.png',
                alt: 'products'
            }
        ],
        links: [
            {
                href: 'https://github.com/Ellucidator/portfolio-dev-leal',
                text: 'Acesse o Repositório'
            },
            {
                href: '/',
                text: 'Acesse o Beta'
            }
        ],
        descriptionChildren: (
            <div>
                O Portifolio foi desenvolvido com o objetivo de apresentar o meu trabalho e meus projetos.
                <br />
                Procurando oferecer uma interface elegante e intuitiva foi construido de maneira que seja facil de navegar e entender o conteudo apresentado.
                <ol className='list-disc list-inside flex flex-col gap-2 mt-2'>
                    <li className='ml-4'><strong>Pagina inicial:</strong> Com uma breve apresentação sobre mim e meus projetos. </li>
                    <li className='ml-4'><strong>Paginas de projeto:</strong> Onde são apresentados os principais projetos desenvolvidos e suas principais caracteristicas.</li>
                </ol>
                <p className='mt-4 font-bold'>
                    Tecnologias: TypeScript, React, Next.js, Tailwind, CSS, Swiper. 
                </p>
            </div>
        )
    }
]