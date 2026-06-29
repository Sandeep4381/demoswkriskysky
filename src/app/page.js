
import CoreServices from "@/components/CoreServices";
import Hero from "@/components/Hero";
import HowSwarikaroWorks from "@/components/HowSwarikaroWorks";
import OurPresence from "@/components/OurPresence";
import PlatformStatistics from "@/components/PlatfromStatistics";
import WhySwarikaro from "@/components/WhySwarikaro";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySwarikaro/>
      <CoreServices />
      <HowSwarikaroWorks />
      <OurPresence />
      <PlatformStatistics />
     
      
    </>
  );
}
