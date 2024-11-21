import Link from 'next/link'
import ProjectSlide from '@/components/projectSlide'
type Props = {
    params: Promise<{ id: string }>
}
export default async function Projects({ params }: Props) {
    const id = (await params).id

    return (
        <>
            <div>
                <h1 className='text-4xl mt-12'>Projeto {id}</h1>
                <div className='flex justify-between'>
                    <Link className='buttonBlue' target="_blank" rel="noopener noreferrer" href={"https://github.com/Ellucidator/project_sst_v.3_front"}>Acesse o Repositorio</Link>
                    <Link className='buttonBlue' target="_blank" rel="noopener noreferrer" href={"https://project-sst-v-3-front.vercel.app/"}>Acesse o Beta</Link>
                </div>
                <div className='flex justify-start mt-4'>
                    <ProjectSlide />
                    <div className='px-4 flex flex-col bg-opacity-35 rounded-2xl bg-black'>
                        <h2 className='text-2xl my-8 '>Descrição|</h2>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}