// 首页 - 组装所有板块

import Hero from '@/components/sections/Hero';
import Materials from '@/components/sections/Materials';
import Applications from '@/components/sections/Applications';
import Capabilities from '@/components/sections/Capabilities';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Materials />
      <Applications />
      <Capabilities />
      <CTA />
    </>
  );
}
