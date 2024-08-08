import About from "@/components/About";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-hidden flex-col items-center justify-between">
        <Hero/>
        <About/>
        <BlogList/>
        <Team/>
    </main>
  );
}
