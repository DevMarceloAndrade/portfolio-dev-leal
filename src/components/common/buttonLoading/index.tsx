'use client'
import { useFormStatus } from "react-dom"

type Props = {
    text:string
}
const ButtonLoading = ({text}: Props) => {
    const { pending } = useFormStatus()

    return(
        <>
            <button type="submit" className='buttonBlue w-1/2 justify-center self-center mt-3'>
                {
                    pending ? 
                        <div className="self-center border-4 border-t-blue-600 rounded-full h-8 animate-rotate" ></div>
                    : text
                }
            </button>
        </>
    )
}

export default ButtonLoading