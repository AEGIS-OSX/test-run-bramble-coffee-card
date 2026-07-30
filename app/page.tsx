import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <div className="mx-auto max-w-[800px] px-[16px] md:px-[24px]">
        {/* Hero section */}
        <section className="pt-[64px] pb-[88px]">
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            <Image
              src="https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/test-run-bramble-coffee-card/cleo/1785451589236-hero-TEST-PLACEHOLDER.png"
              alt="A ceramic cup of black coffee on a worn wooden counter"
              fill
              className="object-cover"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <h1 className="absolute bottom-0 left-0 p-[24px] text-[44px] md:text-[64px] leading-[1.0] tracking-[-0.03em] font-[700] font-[family-name:var(--font-display)] text-[var(--color-bg)] overflow-wrap-anywhere min-w-0">
              Bramble Coffee
            </h1>
          </div>
          <p className="mt-[24px] font-[family-name:var(--font-body)] text-[18px] leading-[1.7] font-[400] text-[var(--color-text-muted)]">
            Good coffee, made carefully.
          </p>
        </section>

        {/* About section */}
        <section className="pb-[64px]">
          <p className="font-[family-name:var(--font-body)] text-[18px] leading-[1.7] font-[400] text-[var(--color-text-primary)]">
            A cart, a grinder, and a reason to be here. We serve simple coffee from a wooden counter at the edge of the market. No rush, just the morning and a clean cup.
          </p>
        </section>

        {/* Menu section */}
        <section className="bg-[var(--color-surface)] px-[24px] py-[32px] mb-[64px]">
          <div className="flex justify-between items-center py-[12px]">
            <span className="font-[family-name:var(--font-body)] text-[18px] font-[400] text-[var(--color-text-primary)]">Black Coffee</span>
            <span className="font-[family-name:var(--font-body)] text-[15px] font-[400] tracking-[0.02em] text-[var(--color-text-muted)]">4</span>
          </div>
          <hr className="border-0 h-[1px] bg-[var(--color-divider)]" />
          <div className="flex justify-between items-center py-[12px]">
            <span className="font-[family-name:var(--font-body)] text-[18px] font-[400] text-[var(--color-text-primary)]">Espresso</span>
            <span className="font-[family-name:var(--font-body)] text-[15px] font-[400] tracking-[0.02em] text-[var(--color-text-muted)]">3</span>
          </div>
          <hr className="border-0 h-[1px] bg-[var(--color-divider)]" />
          <div className="flex justify-between items-center py-[12px]">
            <span className="font-[family-name:var(--font-body)] text-[18px] font-[400] text-[var(--color-text-primary)]">Macchiato</span>
            <span className="font-[family-name:var(--font-body)] text-[15px] font-[400] tracking-[0.02em] text-[var(--color-text-muted)]">4</span>
          </div>
          <hr className="border-0 h-[1px] bg-[var(--color-divider)]" />
          <div className="flex justify-between items-center py-[12px]">
            <span className="font-[family-name:var(--font-body)] text-[18px] font-[400] text-[var(--color-text-primary)]">Flat White</span>
            <span className="font-[family-name:var(--font-body)] text-[15px] font-[400] tracking-[0.02em] text-[var(--color-text-muted)]">5</span>
          </div>
        </section>

        {/* Hours section */}
        <section className="pb-[64px]">
          <p className="font-[family-name:var(--font-body)] text-[15px] font-[400] tracking-[0.02em] text-[var(--color-text-muted)]">
            Tuesday–Sunday, 7am–1pm
          </p>
        </section>

        {/* Footer */}
        <footer className="pb-[64px]">
          <p className="font-[family-name:var(--font-body)] text-[14px] font-[400] tracking-[0.03em] text-[var(--color-text-muted)]">
            1242 Bramble Lane
          </p>
          <p className="font-[family-name:var(--font-body)] text-[14px] font-[400] tracking-[0.03em] text-[var(--color-text-muted)]">
            555-0124
          </p>
        </footer>
      </div>
    </main>
  );
}
