import Image from "next/image"
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai"

export default function Header () {
    return (
        <>
            <div className='w-[80%] m-auto flex justify-end pt-2 text-[40px] text-Red'>
                <AiFillYoutube />
                <AiOutlineInstagram />
            </div>

            <div className='w-[80%] m-auto justify-center pt-1 pb-4 '>
                <div className='flex flex-col md:flex-row justify-center items-center md:border-y-2 md:border-Blue my-4 py-4'>
                    <div className=' flex justify-center items-center w-[270px] h-100%'>
                        <Image width={120} height={100} src={'/images/logo-rojo.png'} alt="logoPensandoVenezuelaRojo"/>
                    </div>

                    <h1 className='flex flex-col text-[54px] justify-center items-center text-Blue border-x-2 border-Blue mx-4 px-4'>
                        <span className='font-bold mb-[-30px]'>PENSANDO</span>
                        VENEZUELA
                    </h1>

                    <div className='w-[270px] h-100% text-Blue hidden xl:block'>
                        <h3 className='text-[26px] font-bold'>QUIÉNES SOMOS...</h3>
                        <p>Pensando Venezuela es una agrupación de jóvenes venezolanos profesionales y académicos fundada en 2024 con el objetivo de investigar, recolectar, discutir, formar, formular, promover y difundir propuestas de reformas legislativas y políticas públicas.</p>
                    </div>
                </div>
            </div >
        </>
    )
}
