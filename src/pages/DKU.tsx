import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";

const DKU = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              DIIG at Duke Kunshan University (DKU)
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              In 2025, DIIG became the first international Duke-founded club by
              opening a branch at Duke University's sister campus in Kunshan,
              China. The DKU branch serves impactful international clients by
              providing pro bono consulting and data analytics services and will
              soon add on investing capacities.
            </p>
          </div>
        </section>

        <Roster division="dku" />
      </main>
      <Footer />
    </div>
  );
};

export default DKU;
