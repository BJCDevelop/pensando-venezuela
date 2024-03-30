
const arrayPurposes = [
    { id: 1, title: 'MISIÓN', text: 'Nuestra misión consiste en promover y fomentar la elaboración de recomendaciones e ideas de reformas legislativas y políticas públicas, a través de un enfoque multidisciplinario desde áreas como Derecho, Economía, Ciencias Políticas, Políticas Públicas, por mencionar algunas.', text2: 'Pensando Venezuela se nutre del aporte académico y profesional de sus miembros, así como del intercambio con otras instituciones, académicos reconocidos y profesores, generando conexiones y debates inter-generacionales con el fin de preparar y explorar ideas para la transformación de Venezuela.', color: 'bg-Red', textColor: 'text-Blue' },

    { id: 2, title: 'VISIÓN', text: 'Es nuestra visión convertirnos en una organización capaz de elaborar y acumular reformas legislativas y políticas públicas, para aportarlas, sin política partidista, a Venezuela, de cara a su transformación en un Estado de Derecho, republicano, democrático y federal, que sea capaz de vencer la pobreza, la crisis humanitaria y el rentismo petrolero, con plena vigencia de los derechos humanos, la libertad individual, la libertad económica, el bien común, la institucionalidad democrática, la honestidad, la transparencia, la justicia y el debido cumplimiento del ordenamiento jurídico.', color: 'bg-Yellow', textColor: 'text-Red' },

    { id: 3, title: 'LABOR', text: 'En nuestra labor, identificamos y nos acercamos a los problemas del país para abordarlos con soluciones legislativas y de políticas públicas, promoviendo la discusión con instituciones, académicos, profesionales y profesores, para generar un ecosistema tendiente a la producción de entrevistas, debates, foros, publicaciones, propuestas y escritos sobre los temas tratados.', color: 'bg-Blue', textColor: 'text-Yellow' },
];

/**
 *  This component is for desing of Bussines Purpose Section on HomePage 
 */

export const BusinessPurposeSection = () => {
    return (
        <div className='w-full'>
            {arrayPurposes.map((purpose) => {
                return (
                    <div key={purpose.id} className={`w-full h-[400px] sm:h-[300px] lg:h-[200px] flex flex-col md:flex-row justify-center items-center p-4 gap-4 ${purpose.color}`}>
                        <h3 className={`text-[32px] font-bold textShadow ${purpose.textColor}`}>{purpose.title}</h3>
                        <p className='max-w-[900px] text-sm md:text-base'>
                            {purpose.text}
                            <br />
                            <br />
                            {purpose?.text2}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
