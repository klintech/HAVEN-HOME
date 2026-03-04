import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import { collections } from "@/data/products";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Top bar */}
      <div className="border-b border-background/10">
        <div className="container-full py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
            <div>
              <Link
                to="/"
                className="font-serif text-4xl md:text-5xl tracking-tight text-background block mb-4"
              >
                Maison
              </Link>
              <p className="text-sm text-background/40 leading-relaxed max-w-sm">
                Curated home objects and lifestyle pieces for considered living. 
                Each piece selected for craft, material integrity, and enduring beauty.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="p-2 border border-background/15 hover:border-background/40 hover:bg-background/5 transition-all duration-300">
                  <Instagram className="w-4 h-4 text-background/50 hover:text-background" />
                </a>
                <a href="#" className="p-2 border border-background/15 hover:border-background/40 hover:bg-background/5 transition-all duration-300">
                  <Facebook className="w-4 h-4 text-background/50 hover:text-background" />
                </a>
                <a href="#" className="p-2 border border-background/15 hover:border-background/40 hover:bg-background/5 transition-all duration-300">
                  <Twitter className="w-4 h-4 text-background/50 hover:text-background" />
                </a>
              </div>
            </div>

            {/* Newsletter in footer */}
            <div className="max-w-sm w-full md:ml-auto">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-background/30 mb-2">
                Stay Connected
              </p>
              <p className="text-xs text-background/40 mb-4">
                Receive updates on new collections, artisan stories, and exclusive offerings.
              </p>
              <form className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 h-12 px-4 text-sm bg-background/5 border border-background/15 text-background placeholder:text-background/25 focus:outline-none focus:border-background/40 transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-5 text-sm font-medium bg-background text-foreground hover:bg-background/90 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Collections */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/30 mb-5">
              Collections
            </h4>
            <ul className="space-y-3">
              {collections.slice(0, 6).map((collection) => (
                <li key={collection.id}>
                  <Link
                    to={`/products?collection=${collection.slug}`}
                    className="text-sm text-background/50 hover:text-background transition-colors duration-300"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/30 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/30 mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-background/50 hover:text-background transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-background/50 hover:text-background transition-colors duration-300">Care Guide</a></li>
              <li><a href="#" className="text-sm text-background/50 hover:text-background transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-background/30 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@maison.com" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                  hello@maison.com
                </a>
              </li>
              <li>
                <p className="text-sm text-background/30 leading-relaxed">
                  Mon–Fri, 9am–6pm CET
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/8">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-background/25">
            © {new Date().getFullYear()} Maison. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] text-background/25 hover:text-background/50 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-background/25 hover:text-background/50 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-[11px] text-background/25 hover:text-background/50 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
