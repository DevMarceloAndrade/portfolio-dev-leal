import { sendEmail } from '@/service/resendServices';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLoading from '../buttonLoading';


const ContactModal = async () => {
    const cookieConfirmEmail = (await cookies()).get('sendEmail')?.value
    const cookieControl = (await cookies()).get('contactModal')?.value

    const classModal = `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl trasition-all duration-500 ease-in-out ${cookieControl === 'open' ? 'p-8 w-5/6 md:w-1/2 h-auto bg-[#2e3038] flex flex-col gap-4' : 'bg-transparent w-80 h-px'} `

    const modalAction = async () => {
        'use server'

        if (cookieControl === 'open') (await cookies()).set('contactModal', 'close', { maxAge: 60 * 5 })
        else (await cookies()).set('contactModal', 'open', { maxAge: 60 * 5 })

    }

    const emailAction = async (form: FormData) => {
        'use server'
        const email = form.get('email')?.toString()
        const message = form.get('message')?.toString()

        if (message && email) {
            await sendEmail(email, message).then(async() => {
                (await cookies()).set('sendEmail', 'true', { maxAge: 60 * 5 })
            }).catch(async(error) => {
                (await cookies()).set('sendEmail', JSON.stringify(error), { maxAge: 60 * 5 })
            })
        }
    }
    return (
        <div>
            <form action={modalAction}>
                <button type="submit" className='buttonBlue '>ENTRE EM CONTATO</button>
            </form>
            <form action={emailAction} className={classModal}>
                {cookieControl === 'open' ?
                    <>
                        <h1 className='text-2xl'>Entre em contato pela minhas redes ou envie um email|</h1>
                        <p className='textParagraph'>Ficarei feliz em receber seu contato, e retornarei o mais breve possivel.</p>
                        <div className="flex flex-wrap gap-4 justify-end">
                            <Link
                                href={'https://www.instagram.com/marcelo0.0'} target="_blank" rel="noopener noreferrer"
                                className='buttonTransparent'
                            >
                                <Image src={'/commonIcons/instagram.svg'} alt='pdf' width={25} height={25} />
                                marcelo0.0
                            </Link>
                            <Link
                                href={'https://www.linkedin.com/in/dev-marcelo-leal/'} target="_blank" rel="noopener noreferrer"
                                className='buttonTransparent'
                            >
                                <Image src={'/commonIcons/linkedin.svg'} alt='pdf' width={25} height={25} />
                                dev-marcelo-leal
                            </Link>
                        </div>
                        <h2>Envie seu e-mail aqui:</h2>
                        <input type="email" className='textInput max-h-10' name='email' placeholder='Seu email' required />
                        <textarea className='textInput min-h-24' name='message' placeholder='Mensagem' required />
                        <ButtonLoading text={'ENVIAR'} />
                        {
                            cookieConfirmEmail === 'true' ?
                                <p className='textParagraph text-center text-green-400'>E-mail enviado com sucesso!</p>
                                : <></>
                        }
                    </>
                    : <></>
                }
            </form>
            {cookieControl === 'open' ?
                <>
                    <form action={modalAction}>
                        <button type="submit" className='fixed top-0 left-0 right-0 bottom-0 z-10'></button>
                    </form>
                </>
                : <></>
            }
        </div>
    )
}

export default ContactModal