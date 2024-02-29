import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    { name: 'Nosotros', href: '#', current: false },
    { name: 'Publicaciones', href: '#', current: false },
    { name: 'Areas', href: '#', current: false },
    { name: 'Entrevistas', href: '#', current: false },
    { name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl flex flex-row justify-between px-2 py-4 sm:px-6 lg:px-8">
            <Link href="/">
                <Image src="/logo.png" alt="Pensando Venezuela" width={150} height={80} />  
            </Link>
            <div className='flex flex-row items-center'>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
