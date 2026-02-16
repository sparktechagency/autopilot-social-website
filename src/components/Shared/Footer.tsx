import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Music
} from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)" }} className="gradient-bg text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="logo-circle">C</div>
              <span className="text-2xl font-bold">AMPSOCIAL</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              The Growth Operating System for SMBs. Powered by AI.
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Features</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Integrations</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Updates</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-blue-200 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-blue-200 hover:text-white text-sm">Terms of Service</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white text-sm">Cookie Policy</Link></li>
              <li><Link href="/faqs" className="text-blue-200 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>


        <div className="border-t border-blue-600 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-blue-200 text-sm">
            © 2026 AmpSocial. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0077b5] text-white transition-transform duration-200 hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-transform duration-200 hover:-translate-y-1"
            >
              <Instagram size={18} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1877f2] text-white transition-transform duration-200 hover:-translate-y-1"
            >
              <Facebook size={18} />
            </a>

            {/* TikTok (Lucide alternative) */}
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white transition-transform duration-200 hover:-translate-y-1"
            >
              <Music size={18} />
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white transition-transform duration-200 hover:-translate-y-1"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
