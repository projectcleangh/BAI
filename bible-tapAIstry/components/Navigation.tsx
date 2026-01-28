'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Home, Sparkles } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { href: '/framework', label: 'Framework', icon: <BookOpen className="w-4 h-4" /> },
  { href: '/eden', label: 'Eden', icon: <Sparkles className="w-4 h-4" /> },
];

/**
 * Minimal, futuristic navigation bar
 * F1 dashboard inspired - clean, fast, precise
 */
export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-deep-black/80 backdrop-blur-md border-b border-slate-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center">
              <span className="text-deep-black font-bold text-sm">BT</span>
            </div>
            <span className="text-text-primary font-medium tracking-tight hidden sm:block group-hover:text-neon-green transition-colors">
              Bible TapAIstry
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'bg-charcoal text-neon-green'
                      : 'text-text-secondary hover:text-text-primary hover:bg-charcoal/50'
                    }
                  `}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Progress indicator placeholder */}
          <div className="w-8 h-8 rounded-full border border-slate-dark flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          </div>
        </div>
      </div>

      {/* Subtle bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
    </nav>
  );
}
