import Link from 'next/link';
import React from 'react';

export default function Header() {
  const navItems = ['home', 'about', 'posts', 'contact'];

  return (
    <nav className="flex w-full h-12 border-slate-900 border-b-2 justify-between items-center p-8 mb-8">
      <h2>Jennifer Miller</h2>

      <ul className="flex">
        {navItems.map(navItem => (
          <li className="mx-2" key={navItem}>
            <Link href={`/${navItem}`}>{navItem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
