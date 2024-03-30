import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'

/**
 * This component is for desing Carousel Section on HomePage
 */

export const CarouselSection = () => {
  return (
    <Swiper
    spaceBetween={50}
    navigation={true}
    modules={[Navigation]}
    className='w-full cursor-grab'
  >
    <SwiperSlide className='p-4 md:p-12'>
      <div >
        <h2 className='text-Blue text-[36px] font-bold text-center'>PENSANDO ECONOMÍA</h2>
        <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
          <div className='border-Blue border-8 h-[360px] w-[100%] lg:w-[60%]'>
            <Image width={2000} height={2000} src={'/images/landscape.jpg'} alt='imageLandscape' className='h-full' />
          </div>
          <div className='w-[100%] lg:w-[400px]'>
            <h3 className='text-Red font-bold text-[24px]'>Subtitulo correspondiente...</h3>
            <p className='text-base text-Blue italic'>Tiene por objetivo estudiar los problemas económicos de Venezuela y estudiar propuestas de solución. Se enfoca en la macroeconomía y el comercio internacional, en especial en el manejo de las políticas cambiarias, política monetarias, inflación, el Banco Central, los impuestos, el entorno regulatorio, el mercado laboral, los sectores petroleros, mineros, agrícolas, turísticos, ganaderos, comerciales, financiero, tecnológico y bancario. Incluye asuntos demográficos, de pobreza, presupuesto del Estado, mercado inmobiliario, consumo y economía informal.</p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='p-4 md:p-12'>
      <div >
        <h2 className='text-Blue text-[36px] font-bold text-center'>PENSANDO ECONOMÍA</h2>
        <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
          <div className='border-Blue border-8 h-[360px] w-[100%] lg:w-[60%]'>
            <Image width={2000} height={2000} src={'/images/landscape.jpg'} alt='imageLandscape' className='h-full' />
          </div>
          <div className='w-[100%] lg:w-[400px]'>
            <h3 className='text-Red font-bold text-[24px]'>Subtitulo correspondiente...</h3>
            <p className='text-base text-Blue italic'>Tiene por objetivo estudiar los problemas económicos de Venezuela y estudiar propuestas de solución. Se enfoca en la macroeconomía y el comercio internacional, en especial en el manejo de las políticas cambiarias, política monetarias, inflación, el Banco Central, los impuestos, el entorno regulatorio, el mercado laboral, los sectores petroleros, mineros, agrícolas, turísticos, ganaderos, comerciales, financiero, tecnológico y bancario. Incluye asuntos demográficos, de pobreza, presupuesto del Estado, mercado inmobiliario, consumo y economía informal.</p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='p-4 md:p-12'>
      <div >
        <h2 className='text-Blue text-[36px] font-bold text-center'>PENSANDO ECONOMÍA</h2>
        <div className='flex flex-col justify-center items-center lg:flex-row gap-4'>
          <div className='border-Blue border-8 h-[360px] w-[100%] lg:w-[60%]'>
            <Image width={2000} height={2000} src={'/images/landscape.jpg'} alt='imageLandscape' className='h-full' />
          </div>
          <div className='w-[100%] lg:w-[400px]'>
            <h3 className='text-Red font-bold text-[24px]'>Subtitulo correspondiente...</h3>
            <p className='text-base text-Blue italic'>Tiene por objetivo estudiar los problemas económicos de Venezuela y estudiar propuestas de solución. Se enfoca en la macroeconomía y el comercio internacional, en especial en el manejo de las políticas cambiarias, política monetarias, inflación, el Banco Central, los impuestos, el entorno regulatorio, el mercado laboral, los sectores petroleros, mineros, agrícolas, turísticos, ganaderos, comerciales, financiero, tecnológico y bancario. Incluye asuntos demográficos, de pobreza, presupuesto del Estado, mercado inmobiliario, consumo y economía informal.</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
