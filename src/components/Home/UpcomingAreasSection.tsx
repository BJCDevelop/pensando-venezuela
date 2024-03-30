import Image from "next/image"

const arrayUpcomingAreas = [
    { id: 1, title: 'AMBIENTE', color: 'bg-Green' },
    { id: 2, title: 'SEGURIDAD', color: 'bg-Grey' },
    { id: 3, title: 'INNOVACIÓN', color: 'bg-LightGrey' },
    { id: 4, title: 'EDUCACIÓN', color: 'bg-Orange' },
    { id: 5, title: 'SALUD', color: 'bg-Cyan' },
    { id: 6, title: 'CULTURA', color: 'bg-Violet' },

]

export const UpcomingAreasSection = () => {
    return (
        <div className='w-full min-h-[400px] bg-white mt-6 py-4 px-6'>
            <h2 className='text-[32px] text-Blue font-bold '>Próximas Áreas...</h2>
            <div className='w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-auto'>
                {arrayUpcomingAreas.map(({ id, title, color }) => {
                    return (
                        <div key={id} className={`flex flex-col items-center h-[200px] mx-12 my-4 ${color}`}>
                            <Image width={160} height={50} src={'/images/logo.png'} alt='logoPensandoVenezuela' className='mt-[-10px] sm:mt-[-30px]' />

                            <div className='flex flex-col text-center text-[20px] sm:text-[24px] mt-[-30px]'>
                                <span>PENSANDO</span>
                                <span className='font-bold'>{title}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
