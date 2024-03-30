import Image from "next/image";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className='w-full min-h-[240px] flex flex-col md:flex-row justify-center items-center py-6 gap-8 bg-Blue'>
            <div className='w-[200px] h-full flex flex-col'>
                <Image width={200} height={100} src={'/images/logo.png'} alt="logoPensandoVenezuela" className="mt-[-50px]"/>
                <p className="text-[28px] text-center flex flex-col mt-[-40px]">
                    <span className="font-bold mb-[-15px]">PENSANDO</span>
                    VENEZUELA
                </p>
            </div>

            <div className='flex flex-col gap-5 font-bold text-lg md:text-[22px]'>
                <p>Nosotros</p>
                <p>Áreas</p>
                <p>Artículos</p>
                <p>Publicaciones</p>
            </div>

            <div className='flex flex-col text-[24px] justify-center items-center md:items-start'>
                <p className="font-bold">Contáctanos</p>
                <p>pensandovzla@gmail.com</p>
                <p>@pensandovenezuela</p>
                <div className="flex flex-col md:flex-row gap-4 mt-10">
                    <div className="flex  md:flex-row justify-center items-center text-[40px] gap-4">
                        <AiFillYoutube />
                        <AiOutlineInstagram />
                    </div>
                    <p className="text-[14px] text-center">2024 © PENSANDO VENEZUELA  I Todos los derechos reservados I Desarrollado por</p>
                </div>
            </div>

        </footer>
    )
}
