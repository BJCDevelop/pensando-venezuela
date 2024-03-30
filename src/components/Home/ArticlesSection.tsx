import Image from "next/image"

const arrayArticles = [
    { id: 1, title: "Título abreviado del artículo de interés...", autor: "Nombre del Autor", image: "/images/paisaje.jpg" },
    { id: 2, title: "Título abreviado del artículo de interés...", autor: "Nombre del Autor", image: "/images/paisaje.jpg" },
    { id: 3, title: "Título abreviado del artículo de interés...", autor: "Nombre del Autor", image: "/images/paisaje.jpg" },
    { id: 4, title: "Título abreviado del artículo de interés...", autor: "Nombre del Autor", image: "/images/paisaje.jpg" },
]

/**
 *  This component is for Outstanding Articles Section on HomePage 
 */
export const ArticlesSection = () => {
    return (
        <div className='bg-LightBlue w-full min-h-[340px] py-2 px-4'>
            <h2 className='text-[32px] font-bold mb-6'>Artículos destacados</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around px-4'>
                {arrayArticles.map(({ id, title, autor, image }) => {
                    return (
                        <div key={id} className='flex flex-col items-center justify-center'>
                            <div className='w-[80%] h-[150px]'>
                                <Image width={2000} height={2000} src={image} alt="foto" className="w-full h-full"/>
                            </div>
                            <p className='text-[20px] w-[80%] font-bold'>{title}</p>
                            <p className='text-[20px] w-[80%]'>-{autor}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
