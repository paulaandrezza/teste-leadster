import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import VideoGallery from '@/components/VideoGallery';

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
