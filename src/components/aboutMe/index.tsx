import Image from 'next/image'
import aboutMeImg from '../../../public/aboutMe.svg'
const AboutMe = ()=>{

    return(
        <>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div>
                    <h3>BEM VINDO!</h3>
                    <h1>Eu Sou Desenvolvedor Web|</h1>
                    <p >
                        Sou Desenvolvedor Full Stack e acadêmico em Análise e Desenvolvimento de Sistemas, com
                        experiencia em desenvolvimento web, minhas principais skills estão ligadas ao desenvolvimento 
                        de API Rest e criação de Websites.
                    </p>
                    <h2>Skills</h2>
                    <div>

                    </div>
                </div>
                <Image src={aboutMeImg} alt='logo' width={400} height={600}/>
            </div>
        </>
    )
}

export default AboutMe