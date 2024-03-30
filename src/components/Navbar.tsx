import Link from 'next/link'

const navigation = [
    { name: 'Nosotros', href: '#', current: false },
    { name: 'Áreas', href: '#', current: false },
    { name: 'Publicaciones', href: '#', current: false },
    { name: 'Artículos', href: '#', current: false },
    { name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 justify-around space-x-4 px-4 py-2 bg-Blue sticky top-0 z-10">
            {/* Navbar Links */}
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current ? 'text-white' : 'text-white',
                        ' rounded-md text-lg text-center font-medium marginLeft0'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Link>
            ))}

            {/* Search Button */}
            <div className='flex justify-center w-full marginLeft0'>
                <button className='w-[120px] m-auto text-white font-bold px-3 py-1 rounded-3xl text-xl bg-Red'>Buscar</button>
            </div>

        </div>
    )
}
