import Button from "../ui/Button";

export default function ContactCTASection() {
  return (
    <section className="py-28 bg-[#F4F4F4] relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="bg-black text-white p-10 sm:p-16 lg:p-20 relative overflow-hidden border border-neutral-800">
          
          {/* Subtle Orange Accent Mesh in background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FE8301]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl flex flex-col items-start gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FE8301] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FE8301]" />
              Ready For Transformation?
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Have a Brand Ready <br className="hidden sm:block" />
              <span className="highlight-text-orange">to Grow?</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              Let's turn your growth goals into market dominance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Start a Conversation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
