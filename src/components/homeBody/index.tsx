import Image from 'next/image'
import aboutMeImg from '../../../public/aboutMe.svg'
const HomeBody = ()=>{

    return(
        <>
            <div className='p-8 flex justify-center flex-wrap md:flex-nowrap md:justify-between md:p-0'>
                <div className='md:w-1/2'>

                    <img className='mt-8' src="https://readme-typing-svg.herokuapp.com/?color=0073fa&size=40&vCenter=true&width=1000&lines=Olá,+Meu+nome+é+Marcelo;Eu+tenho+26+anos,+sou+do+Brasil;Desenvolvedor+FullStack+Web;Seja+Bem+Vindo!+:%29" alt="Typing SVG">
                    </img>
                    <h1 className='text-4xl mt-12'>Desenvolvedor Web|</h1>
                    <p className='mt-4'>
                        Sou Desenvolvedor Full Stack e acadêmico em Análise e Desenvolvimento de Sistemas, com
                        experiencia em desenvolvimento web, minhas principais skills estão ligadas a criação
                        de API Rest e de Websites.
                    </p>
                    <h2 className='text-3xl my-8 md:mt-28'>Principais Tecnologias|</h2>
                    <div className='flex flex-wrap justify-between gap-4 mt-4'>
                        <Image className='techIcon' src={'/techIcons/ts.svg'} alt='typeScript' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/react.svg'} alt='react' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/next.svg'} alt='next' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/node.svg'} alt='node' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/postgres.svg'} alt='postgres' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/java.svg'} alt='java' width={80} height={80}/>
                        <Image className='techIcon' src={'/techIcons/spring.svg'} alt='spring' width={80} height={80}/>
                    </div>
                </div>
                <Image src={aboutMeImg} alt='logo' width={400} height={600}/>
            </div>
        </>
    )
}

export default HomeBody