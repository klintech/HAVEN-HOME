import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Collection } from "@/data/products";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
  variant?: "default" | "wide" | "tall";
}

export const CollectionCard = ({ collection, index = 0, variant = "default" }: CollectionCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        to={`/products?collection=${collection.slug}`}
        className="group block relative"
      >
        <div
          className={`relative overflow-hidden bg-muted/30 ${
            variant === "wide" ? "aspect-[16/9] md:aspect-[2.5/1]" :
            variant === "tall" ? "aspect-[2/3]" :
            "aspect-[3/4]"
          }`}
        >
          {/* Image with zoom on hover */}
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          />

          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-charcoal/5" />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-700" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white mb-1.5 transform group-hover:-translate-y-1 transition-transform duration-500">
              {collection.name}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-xs">
              {collection.description}
            </p>

            {/* Arrow indicator */}
            <div className="flex items-center gap-2 mt-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80">
                Explore
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          {/* Top border accent on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </div>
      </Link>
    </motion.article>
  );
};
