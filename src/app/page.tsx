import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Services from "@/components/Services";
import StarBanner from "@/components/StarBanner/starBanner";
export const metadata: Metadata = {
  title: "Intelion",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services/>
      <Brands />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <Blog />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
