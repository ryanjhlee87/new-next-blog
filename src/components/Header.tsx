import Link from 'next/link';
import React from 'react';
import { dancingScript } from '@/app/layout';

export default function Header() {
  const navItems = ['home', 'about', 'posts', 'contact'];

  return (
    <nav className="flex w-full max-w-screen-2xl mx-auto h-12 border-slate-900 border-b-2 justify-between items-center p-8 mb-8">
      <Link href="/" className={`${dancingScript.className} ml-3`}>
        <span className="text-md md:text-2xl">jennifer miller</span>
      </Link>

      <ul className="flex">
        {navItems.map(navItem => (
          <li className="mx-2 text-sm md:text-lg" key={navItem}>
            <Link href={`/${navItem}`}>{navItem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
