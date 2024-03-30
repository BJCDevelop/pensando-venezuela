
const arrayAreas = [
    { id: 1, title: ' DERECHO', color: 'bg-Red' },
    { id: 2, title: ' ECONOMÍA', color: 'bg-Blue' },
    { id: 3, title: ' POLÍTICAS PÚBLICAS', color: 'bg-Yellow' },
    { id: 4, title: ' CIENCIAS POLÍTICAS', color: 'bg-LightBlue' }
]

/**
 * This component is for desing of areas section on HomePage
 */
export const AreasSection = () => {
    return (
        <div className='w-full bg-white mt-5 flex flex-col justify-center items-center px-4 pt-8 pb-16 gap-4'>
            <h2 className='text-Blue text-[32px] font-bold'>ÁREAS</h2>

            <div className='flex flex-wrap gap-[100px] w-[80%] m-auto  '>
                {arrayAreas.map(({ id, title, color }) => {
                    return (
                        <div key={id} className={`w-[210px] min-h-[264px] m-auto p-2 ${color}`}>
                            <h3 className='text-2xl'>
                                PENSANDO
                                <span className='text-2xl font-bold'>
                                    {title}
                                </span>
                            </h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
