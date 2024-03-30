
/**
 *  This component is for desing Us Section on HomePage
 */

import Image from "next/image"

export const UsSection = () => {
    return (
        <div className='w-full flex justify-center px-8 py-6'>
            <div className='w-[240px] min-h-full hidden lg:block'>
                <Image width={1000} height={1000} src={'/images/environment.png'} alt='imageEnvironment' className="h-full w-full"/>
            </div>

            <div className='flex flex-col items-center text-Blue max-w-[460px] border-l-2 border-r-2 border-Blue mx-8 px-8 lg:max-w-[560px]'>
                <h2 className='text-[32px] font-bold text-center'>NOSOTROS...</h2>
                <p className='text-md lg:text-xl mt-2'>Pensando Venezuela es una agrupación de jóvenes venezolanos profesionales y académicos fundada en 2024 con el objetivo de investigar, recolectar, discutir, formar, formular, promover y difundir propuestas de reformas legislativas y políticas públicas.</p>
            </div>

            <div className="">
                <Image width={2000} height={2000} src={'/images/interview.jfif'} alt='imagesInterview' className="h-full w-full"/>
            </div>
        </div>
    )
}
