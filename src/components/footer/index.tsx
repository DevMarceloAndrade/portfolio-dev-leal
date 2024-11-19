import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Image from 'next/image'

const Footer = ()=>{

    const positionCookie = parseInt(cookies().get('position')?.value || '0') 

    const pathLinks =[['/','INICIO'],['/projects','PROJETOS'],['/about','SOBRE MIM'],['/contact','CONTATOS']]

    const setPosition = async(form:FormData)=>{
        'use server'
        let newPosition:number = 0
        const condition = form.get('condition')?.toString()

        console.log(condition)
        if(condition === 'next'){
            newPosition = positionCookie + 1
            cookies().set('position',String(newPosition))
        }else if(condition === 'prev'){
            newPosition = positionCookie - 1
            cookies().set('position',String(newPosition))
        }

        redirect(pathLinks[newPosition][0])
    }
    return (
        <>
            <footer className="m-2 md:mt-16 flex gap-12 md:gap-32 justify-center">
                <form action={setPosition}>
                    <input name="condition" type="hidden" value={"prev"} />
                    {
                        positionCookie > 0? 
                            <button type="submit" className="pageLink">
                                <Image src={'/positionIcons/prev.svg'} alt='arrow' width={50} height={50}/>
                                {pathLinks[positionCookie -1][1]}
                            </button>
                        :<></>
                    }
                </form>
                <form action={setPosition}>
                    <input name="condition" type="hidden" value={"next"} />
                    {
                        positionCookie < 3? 
                            <button type="submit" className="pageLink">
                                {pathLinks[positionCookie +1][1]}
                                <Image src={'/positionIcons/nex.svg'} alt='arrow' width={50} height={50}/>
                            </button>
                        :<></>
                    }
                </form>
            </footer>
        </>
    )
}


export default Footer