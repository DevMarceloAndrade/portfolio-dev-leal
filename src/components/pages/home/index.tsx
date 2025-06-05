import Image from 'next/image'
import MoveDown from "@/components/common/moveDown";
import ProjectsSection from './projectsSection';
import BtnCurriculum from './btnCurriculum'
const HomeBody = () => {

    return (
        <div className="flex flex-col items-center">
            <div className='p-8 flex justify-center items-center flex-wrap-reverse lg:flex-nowrap md:justify-between md:p-0'>
                <div className='lg:w-1/2'>
                    <img className='mt-8' src="https://readme-typing-svg.herokuapp.com/?color=0073fa&size=40&vCenter=true&width=1000&lines=Ol%C3%A1,+Meu+nome+%C3%A9+Marcelo;Tenho+26+anos;Sou+Desenvolvedor+FullStack+Web;Seja+Bem+Vindo!+:%29" alt="Typing SVG">
                    </img>
                    <h1 className='titleH1'>Desenvolvedor Web|</h1>
                    <p className='textParagraph'>
                        Muito prazer! Sou um desenvolvedor Full Stack Web com foco na criação de aplicações modernas, com código limpo, escalável e colaborativo, sempre visando uma experiência otimizada e agradável para o usuário final.
                        <br />
                        Movido pela curiosidade, gosto de resolver problemas de forma inteligente e eficiente, buscando constantemente soluções claras e performáticas.
                        <br />
                        Sou grato por poder me expressar por meio do código e apaixonado por tecnologia e pelo impacto positivo que ela pode gerar na vida das pessoas.
                        <br />
                        Minha meta? Aprender um pouco mais todos os dias e contribuir com projetos que façam a diferença.
                        <br />
                        Ademais fico feliz em apresentar meus projetos e trabalhos, que podem ser acessados logo abaixo.
                    </p>
                    <h2 className='titleH1 md:mt-28'>Principais Competencias|</h2>
                    <div className='flex flex-wrap justify-between gap-4 mt-8'>
                        <Image className='techIcon' src={'/techIcons/ts.svg'} alt='typeScript' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/react.svg'} alt='react' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/next.svg'} alt='next' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/node.svg'} alt='node' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/postgres.svg'} alt='postgres' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/java.svg'} alt='java' width={80} height={80} />
                        <Image className='techIcon' src={'/techIcons/spring.svg'} alt='spring' width={80} height={80} />
                    </div>
                    <BtnCurriculum />
                </div>
                    <Image className='w-4/6 rounded-b-full md:w-1/2 md:mx-auto lg:m-0 lg:self-start xl:w-1/3' src='/common/aboutMe.svg' alt='logo' width={500} height={550} />
            </div>
            <MoveDown idTarget="projects">
                <Image
                    className='animate-bounce'
                    src={'/positionIcons/down.svg'} alt='logo' width={100} height={100}
                />
            </MoveDown>
            <ProjectsSection />
        </div>
    )
}

export default HomeBody
