'use client';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
  amplitude?: number; // déplacement max en px (par défaut 36)
};

export default function ParallaxY({ children, amplitude = 36 }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [t, setT] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));

    const compute = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress 0..1 pendant que l'élément traverse la fenêtre
      // (prend en compte la hauteur de l'élément pour un mapping doux)
      const p = clamp((vh - r.top) / (vh + r.height), 0, 1);

      // décalage vertical centré sur 0 (ex: -36 .. +36)
      const ty = (p - 0.5) * (amplitude * 2);

      setT(ty);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    // init + listeners
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [amplitude]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${t}px)`,
        transition: 'transform 80ms linear',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
