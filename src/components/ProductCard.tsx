import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Product, collections } from "@/data/products";
import { useWishlist } from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: "default" | "large";
}

export const ProductCard = ({ product, index = 0, variant = "default" }: ProductCardProps) => {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const collection = collections.find((c) => c.id === product.collection);
  const hasSecondImage = product.images.length > 1;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden bg-muted/30 mb-4",
            variant === "large" ? "aspect-[3/4]" : "aspect-[3/4]"
          )}
        >
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-all duration-[0.8s] ease-out",
              hasSecondImage
                ? "group-hover:opacity-0 group-hover:scale-[1.03]"
                : "group-hover:scale-[1.03]"
            )}
          />

          {/* Secondary Image (hover) */}
          {hasSecondImage && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.03] transition-all duration-[0.8s] ease-out group-hover:opacity-100 group-hover:scale-100"
            />
          )}

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Wishlist button */}
          <button
            onClick={handleWishlistToggle}
            className={cn(
              "absolute top-4 right-4 p-2 rounded-full transition-all duration-400",
              "bg-background/80 backdrop-blur-sm hover:bg-background",
              "opacity-0 group-hover:opacity-100",
              inWishlist && "opacity-100"
            )}
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-all duration-300",
                inWishlist ? "fill-primary text-primary" : "text-foreground/70"
              )}
            />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {product.new && (
              <span className="px-2.5 py-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-foreground text-background">
                New
              </span>
            )}
            {product.featured && (
              <span className="px-2.5 py-1 text-[9px] font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground">
                Featured
              </span>
            )}
          </div>

          {/* Quick View */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-semibold tracking-[0.15em] uppercase bg-background/95 backdrop-blur-sm text-foreground shadow-md">
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1.5">
          {/* Collection label */}
          {collection && (
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
              {collection.name}
            </p>
          )}

          <h3 className="font-serif text-lg md:text-xl text-foreground transition-colors duration-300 group-hover:text-primary leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-1 leading-relaxed hidden md:block">
            {product.description}
          </p>

          <p className="text-sm font-medium text-foreground tracking-wide pt-0.5">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
