// "use client"
export const dynamic = "force-dynamic";
import HomePage from "@/components/homepage/HomePage";
import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

export default function Home() {
  return (
    <main >
      <HomePage></HomePage>
    </main>
  );
}
