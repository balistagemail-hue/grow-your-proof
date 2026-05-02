'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Contact', href: '#contact' },
  ];

  React.useEffect(() => {
    if (open) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={cn(
      'sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
      {
        'bg-[#050a14]/95 supports-[backdrop-filter]:bg-[#050a14]/85 border-white/10 backdrop-blur-lg md:top-4 md:max-w-5xl md:shadow': scrolled && !open,
        'bg-[#050a14]/95': open,
      },
    )}>
      <nav className={cn(
        'flex h-16 w-full items-center justify-between px-6 md:h-14 md:transition-all md:ease-out',
        { 'md:px-3': scrolled },
      )}>
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-[#fefefe]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="GYP" className="h-8 w-8 flex-shrink-0 rounded-full transition-opacity hover:opacity-80" />
          <span className="hidden sm:inline">Grow Your Proof</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, i) => (
            <a key={i} className={buttonVariants({ variant: 'ghost', className: 'text-white/70 hover:text-[#fefefe]' })} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#concept-form" className="ml-2 inline-flex h-10 items-center justify-center rounded-md bg-[#2684ef] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#1a74db] transition-colors">
            Free Concept
          </a>
        </div>
        <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div className={cn(
        'bg-[#050a14]/98 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 md:hidden',
        open ? 'block' : 'hidden',
      )}>
        <div data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-6',
          )}>
          <div className="grid gap-y-2">
            {links.map((link) => (
              <a key={link.label}
                className={buttonVariants({ variant: 'ghost', className: 'justify-start text-lg' })}
                href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a href="#concept-form" onClick={() => setOpen(false)}
              className="w-full inline-flex h-12 items-center justify-center rounded-md bg-[#2684ef] px-5 text-base font-semibold text-white shadow hover:bg-[#1a74db] transition-colors">
              Free Concept Request
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
