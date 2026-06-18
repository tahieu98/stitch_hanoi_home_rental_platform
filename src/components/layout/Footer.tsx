import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-surface-container-highest border-t border-outline-variant">
      <div className="max-w-[80rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="font-semibold text-xl text-secondary block mb-3"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              AutumnHanoi
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              © 2024 AutumnHanoi Luxury Rentals. Curated hospitality in the Heart of Vietnam.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-on-surface mb-4" style={{ letterSpacing: "0.04em" }}>
              Destinations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/districts/hoan-kiem" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Hoan Kiem Stays
                </Link>
              </li>
              <li>
                <Link href="/districts/west-lake" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Tay Ho Lakeside
                </Link>
              </li>
              <li>
                <Link href="/districts/ba-dinh" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Ba Dinh Suites
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-on-surface mb-4" style={{ letterSpacing: "0.04em" }}>
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-on-surface mb-4" style={{ letterSpacing: "0.04em" }}>
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-outline-variant/30">
          <p className="text-xs text-on-surface-variant text-center">
            © 2024 AutumnHanoi Luxury Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
