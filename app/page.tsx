import Image from 'next/image';

export default function Page() {
  return (
    <main className="max-w-[800px] mx-auto px-4 md:px-6 py-16 md:py-24 bg-[var(--color-bg)] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full mb-8">
        <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden">
          <Image
            src="https://zkvkbpxrxnfynqqeytke.supabase.co/storage/v1/object/public/marketing-assets/test-run-bramble-coffee-card/cleo/1785451589236-hero-TEST-PLACEHOLDER.png"
            alt="A ceramic cup of black coffee on a worn wooden counter"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 800px) 100vw, 800px"
          />
          <h1 className="absolute bottom-6 left-6 text-[44px] md:text-[64px] font-bold leading-[1.0] tracking-[-0.03em] text-[var(--color-bg)] font-[var(--font-display)]">
            Bramble Coffee
          </h1>
        </div>
        <p className="mt-4 text-[18px] font-normal leading-[1.7] text-[var(--color-text-muted)] font-[var(--font-body)]">
          Good coffee, made carefully.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <p className="text-[18px] font-normal leading-[1.7] text-[var(--color-text-primary)] font-[var(--font-body)]">
          A cart, a grinder, and a reason to be here. We serve simple coffee from a wooden counter at the edge of the market. No rush, just the morning and a clean cup.
        </p>
      </section>

      {/* Menu Section */}
      <section className="bg-[var(--color-surface)] p-8 mb-16">
        <div className="space-y-4">
          {[
            { name: 'Black Coffee', price: '4' },
            { name: 'Espresso', price: '3' },
            { name: 'Macchiato', price: '4' },
            { name: 'Flat White', price: '5' },
          ].map((item, i) => (
            <div key={item.name}>
              <div className="flex justify-between items-baseline py-2">
                <span className="text-[18px] font-normal text-[var(--color-text-primary)] font-[var(--font-body)]">
                  {item.name}
                </span>
                <span className="text-[15px] font-normal tracking-[0.02em] text-[var(--color-text-muted)] font-[var(--font-body)]">
                  {item.price}
                </span>
              </div>
              {i < 3 && <div className="h-[1px] bg-[var(--color-divider)] w-full" />}
            </div>
          ))}
        </div>
      </section>

      {/* Hours Section */}
      <section className="mb-16">
        <p className="text-[15px] font-normal tracking-[0.02em] text-[var(--color-text-muted)] font-[var(--font-body)]">
          Tuesday–Sunday, 7am–1pm
        </p>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-[var(--color-divider)] pt-8">
        <p className="text-[14px] font-normal tracking-[0.03em] text-[var(--color-text-muted)] font-[var(--font-body)]">
          1242 Bramble Lane
        </p>
        <p className="text-[14px] font-normal tracking-[0.03em] text-[var(--color-text-muted)] font-[var(--font-body)]">
          555-0124
        </p>
      </footer>
    </main>
  );
}
