"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-slate-950 font-bold text-xl">E</span>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Eminenture
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-semibold transition-colors">Home</Link>
            <Link href="#" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-semibold transition-colors">Services</Link>
            <Link href="#" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-semibold transition-colors">Solutions</Link>
            <Link href="#" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-semibold transition-colors">About</Link>
            <Link href="/admin" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-semibold transition-colors">Admin</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="#" className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg shadow-emerald-500/10 transform hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-slate-950 border-b border-slate-900`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-emerald-400 block px-3 py-2.5 rounded-md text-base font-semibold transition-colors">Home</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-emerald-400 block px-3 py-2.5 rounded-md text-base font-semibold transition-colors">Services</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-emerald-400 block px-3 py-2.5 rounded-md text-base font-semibold transition-colors">Solutions</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-emerald-400 block px-3 py-2.5 rounded-md text-base font-semibold transition-colors">About</Link>
          <Link href="/admin" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-emerald-400 block px-3 py-2.5 rounded-md text-base font-semibold transition-colors">Admin</Link>
          <div className="pt-4 pb-2 border-t border-slate-900 px-3">
            <Link href="#" onClick={() => setIsOpen(false)} className="w-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 block text-center py-3 rounded-full text-base font-bold transition-all shadow-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
