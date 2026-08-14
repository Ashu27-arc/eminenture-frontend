import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import RealTimeRefresher from "@/components/RealTimeRefresher";
import { getContent } from "@/services/api";

// ⚡ Force dynamic rendering — Next.js will NEVER cache this page.
// Without this, Next.js statically generates the page at build time
// and router.refresh() serves stale data even after socket event fires.
export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getContent();

  // Default fallback data if backend is down or empty
  const heroTitle = content?.heroTitle || "Transform Your Business With Digital Innovation";
  const heroSubtitle = content?.heroSubtitle || "We help enterprises build scalable and future-ready digital solutions.";
  const ctaText = content?.ctaText || "Get Started";
  const stats = content?.stats && content.stats.length > 0 ? content.stats : [
    { label: "Clients", value: "500+" },
    { label: "Projects", value: "1000+" },
    { label: "Countries", value: "20+" },
    { label: "Years Experience", value: "10+" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero title={heroTitle} subtitle={heroSubtitle} ctaText={ctaText} />
        <Stats stats={stats} />
      </main>
      <Footer />
      <RealTimeRefresher />
    </div>
  );
}
