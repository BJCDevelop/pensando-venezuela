import { Inter } from 'next/font/google'
import { AreasSection, ArticlesSection, BusinessPurposeSection, OurTeamSection, UsSection, UpcomingAreasSection, CarouselSection } from '@/components/Home';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      {/* Carousel Section */}
     <CarouselSection />

      {/* Areas Section */}
      <AreasSection />

      {/* Us Section */}
      <UsSection />

      {/* Businnes Purpose Section */}
      <BusinessPurposeSection />

      {/* Our Team */}
      <OurTeamSection />

      {/* Outstanding Articles */}
      <ArticlesSection />

      {/* Upcoming Areas... */}
      <UpcomingAreasSection />

    </main>
  )
}
