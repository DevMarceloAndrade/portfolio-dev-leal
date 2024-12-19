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
                        Olá muito prazer! Eu sou o Marcelo, Desenvolvedor Full Stack e acadêmico em Análise e Desenvolvimento de Sistemas, com experiencia em desenvolvimento web.
                        <br />
                        Minhas principais competencias estão ligadas a criação de API Rest e Websites.
                        <br />
                        <br />
                        Sou pessoalmente apaixonado por tecnologia, principalmente a area da computação, que sempre esteve presente em minha vida, estou sempre em busca de novos desafios, com o objetivo de me tornar um desenvolvedor melhor e buscar a solução de problemas de forma eficiente e criativa por meio da programação.
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