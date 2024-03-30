
const arrayWorkingPositions = [
    { id: 1, position: 'Director General', name: 'Rafael Punceles Loynaz' },
    { id: 2, position: 'Director de IT', name: 'Braulio Chávez' },
    { id: 3, position: 'Directora de Comunicaciones', name: 'Claudia García' },
]

const arrayWorkingPositions2 = [
    { id: 1, position: 'Coordinador General', name: 'Antonio Frangie' },
    { id: 2, position: 'Departamento de Políticas Públicas', name: 'César Salgado' }
]

/**
 * This component is the desing for Our Team Section on HomePage
 */

export const OurTeamSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center gap-6 md:gap-12 min-h-[260px] p-4'>

            <div className='flex flex-col justify-center items-center '>
                <h2 className='text-[30px] text-Blue font-bold'>
                    NUESTRO EQUIPO
                </h2>
                <div className="bg-[url('/images/team.png')] bg-cover bg-center bg-no-repeat w-[300px] h-[160px]" />
            </div>

            <div className='flex flex-col text-center gap-6'>
                {arrayWorkingPositions.map(({ id, position, name }) => {
                    return (
                        <div key={id}>
                            <p className='text-Blue font-bold'>{position}</p>
                            <p className='text-LightBlue'>{name}</p>
                        </div>
                    )
                })}
            </div>

            <div className='flex flex-col text-center gap-6'>
                {arrayWorkingPositions2.map(({ id, position, name }) => {
                    return (
                        <div key={id}>
                            <p className='text-Blue font-bold'>{position}</p>
                            <p className='text-LightBlue'>{name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
