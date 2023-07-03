import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import VideoGallery from '@/components/VideoGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadster',
  description: 'Leadster: Chatbot de Marketing para Aumentar Geração de Leads',
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoGallery />
      <Overview />
      <Footer />
    </>
  );
}
