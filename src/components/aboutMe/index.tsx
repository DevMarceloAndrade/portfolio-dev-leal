import Image from 'next/image'
import aboutMeImg from '../../../public/aboutMe.svg'
const AboutMe = ()=>{

    return(
        <>
            <div className='p-8 flex justify-center flex-wrap md:flex-nowrap md:justify-between md:p-0'>
                <div className='md:w-1/2'>

                    <img className='mt-8' src="https://readme-typing-svg.herokuapp.com/?color=0073fa&size=40&vCenter=true&width=1000&lines=Olá,+Meu+nome+é+Marcelo;Eu+tenho+26+anos,+sou+do+Brasil;Desenvolvedor+FullStack+Web;Seja+Bem+Vindo!+:%29" alt="Typing SVG">
                    </img>
                    <h1 className='text-4xl mt-12'>Desenvolvedor Web|</h1>
                    <p className='mt-4'>
                        Sou Desenvolvedor Full Stack e acadêmico em Análise e Desenvolvimento de Sistemas, com
                        experiencia em desenvolvimento web, minhas principais skills estão ligadas ao desenvolvimento 
                        de API Rest e criação de Websites.
                    </p>
                    <h2 className='text-3xl mt-6'>Skills</h2>
                    <div>

                    </div>
                </div>
                <Image src={aboutMeImg} alt='logo' width={400} height={600}/>
            </div>
        </>
    )
}

export default AboutMe