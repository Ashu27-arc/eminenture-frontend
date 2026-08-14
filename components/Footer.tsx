import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-slate-950 font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Eminenture</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A global pioneer in technology and digital solutions, empowering enterprise growth through innovation and digital transformation.
            </p>
          </div>

          {/* Services/Solutions Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Business Process Outsourcing</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Digital Marketing & Creative</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Enterprise Cloud Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Data Management & Analytics</Link></li>
            </ul>
          </div>

          {/* Quick Links / Navigation */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/admin" className="hover:text-emerald-400 transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>info@eminenture.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.242 1.242 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="leading-tight">100 Enterprise Way, Suite 400, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-550 flex-wrap">
          <p>&copy; {new Date().getFullYear()} Eminenture Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
