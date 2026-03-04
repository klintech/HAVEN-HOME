import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowDown, Instagram, Star } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCard } from "@/components/CollectionCard";
import { collections, getNewProducts, products, getFeaturedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const newProducts = getNewProducts();
  const featuredProducts = getFeaturedProducts();
  const latestProducts = products.slice(0, 8);
  const displayedCollections = collections.slice(0, 6);
  const featuredCollection = collections[0]; // Lighting
  const secondFeaturedCollection = collections[2]; // Furniture
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Instagram placeholder images
  const instagramImages = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
    "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&q=80",
  ];

  return (
    <Layout>
      {/* Hero Section — Full Viewport with Parallax */}
      <section ref={heroRef} className="relative h-[100svh] -mt-16 md:-mt-20 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY, scale: heroScale }}>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Curated home lifestyle"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/5 to-charcoal/60" />
        </motion.div>

        <motion.div
          className="relative container-full h-full flex flex-col justify-end pb-16 md:pb-24 pt-16 md:pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[10px] md:text-[11px] font-semibold tracking-[0.35em] uppercase text-white/60 mb-5 md:mb-7"
            >
              Curated for Considered Living
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] text-white mb-6 md:mb-8 leading-[0.88] tracking-tight"
            >
              Objects of
              <br />
              <span className="italic font-normal">Quiet Beauty</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm md:text-base text-white/70 mb-8 md:mb-10 leading-relaxed max-w-md"
            >
              Handcrafted home goods and lifestyle pieces designed to bring
              warmth and intention to everyday moments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 py-6 text-[11px] tracking-[0.2em] uppercase btn-premium"
              >
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-10 py-6 text-[11px] tracking-[0.2em] uppercase border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/40">Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Editorial Quote Strip */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container-narrow">
          <FadeInSection className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.35] tracking-tight italic">
              "Every piece tells a story of patience and craft—objects that grow more beautiful with time."
            </blockquote>
            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              — The Maker's Journal
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Collection — Split Layout */}
      <section className="py-20 md:py-32">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-0 md:gap-0 items-stretch">
            <FadeInSection className="relative aspect-[4/5] md:aspect-auto overflow-hidden group">
              <img
                src={featuredCollection.heroImage || featuredCollection.image}
                alt={featuredCollection.name}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/10" />
            </FadeInSection>

            <FadeInSection delay={0.15} className="flex items-center bg-card p-10 md:p-16 lg:p-24">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-4">
                  Featured Collection
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-[0.95]">
                  {featuredCollection.name}
                </h2>
                <div className="w-16 h-px bg-primary/30 mb-6" />
                <p className="text-muted-foreground leading-[1.8] mb-8 max-w-sm">
                  {featuredCollection.description}. Discover sculptural forms that cast warmth and shadow, 
                  designed to transform any space into a sanctuary of light.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-[11px] tracking-[0.2em] uppercase btn-premium"
                >
                  <Link to={`/products?collection=${featuredCollection.slug}`}>
                    Explore Collection
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <FadeInSection>
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-3">
                Just Arrived
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Latest Products
              </h2>
              <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed">
                Our newest additions, carefully selected for their artistry and character.
              </p>
            </FadeInSection>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {latestProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-14 text-center md:hidden">
            <Button
              asChild
              variant="outline"
              className="rounded-none px-8 py-5 text-[11px] tracking-[0.15em] uppercase"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Second Featured Collection — Reversed */}
      <section className="py-20 md:py-32">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <FadeInSection delay={0.15} className="flex items-center p-10 md:p-16 lg:p-24 order-2 md:order-1 bg-card">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-4">
                  Signature Pieces
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-[0.95]">
                  {secondFeaturedCollection.name}
                </h2>
                <div className="w-16 h-px bg-primary/30 mb-6" />
                <p className="text-muted-foreground leading-[1.8] mb-8 max-w-sm">
                  {secondFeaturedCollection.description}. Built to become heirlooms, each piece embodies 
                  the art of joinery and the beauty of natural wood grain.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-none px-10 py-6 text-[11px] tracking-[0.2em] uppercase btn-premium"
                >
                  <Link to={`/products?collection=${secondFeaturedCollection.slug}`}>
                    Discover More
                    <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>

            <FadeInSection className="relative aspect-[4/5] md:aspect-auto overflow-hidden group order-1 md:order-2">
              <img
                src={secondFeaturedCollection.heroImage || secondFeaturedCollection.image}
                alt={secondFeaturedCollection.name}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-charcoal/10" />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="container-full">
          <FadeInSection className="text-center mb-16">
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-3">
              Browse By
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Collections
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Each collection is a story—materials, makers, and the moments they're made for.
            </p>
          </FadeInSection>

          {/* Asymmetric grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            {/* First row: 2 items */}
            <div className="md:col-span-7">
              <CollectionCard
                collection={displayedCollections[0]}
                index={0}
                variant="wide"
              />
            </div>
            <div className="md:col-span-5">
              <CollectionCard
                collection={displayedCollections[1]}
                index={1}
              />
            </div>

            {/* Second row: 3 items */}
            <div className="md:col-span-4">
              <CollectionCard
                collection={displayedCollections[2]}
                index={2}
              />
            </div>
            <div className="md:col-span-4">
              <CollectionCard
                collection={displayedCollections[3]}
                index={3}
              />
            </div>
            <div className="md:col-span-4">
              <CollectionCard
                collection={displayedCollections[4]}
                index={4}
              />
            </div>

            {/* Third row: 1 wide item */}
            <div className="md:col-span-12">
              <CollectionCard
                collection={displayedCollections[5]}
                index={5}
                variant="wide"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section — Full-Width Image Background */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
        </div>
        <div className="relative container-narrow text-center">
          <FadeInSection>
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/50 mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.3] mb-8">
              We believe in the beauty of slow living—in objects made with care,
              materials that age gracefully, and spaces that invite{" "}
              <span className="italic">pause</span>.
            </h2>
            <p className="text-white/50 leading-relaxed max-w-2xl mx-auto mb-10 text-sm">
              Every piece in our collection is selected for its material integrity, 
              its maker's story, and its ability to endure beautifully.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-[11px] tracking-[0.2em] uppercase bg-white text-charcoal hover:bg-white/90"
            >
              <Link to="/about">
                Read Our Story
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Follow Us / Instagram Section */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <FadeInSection className="text-center mb-12">
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-3">
              Follow Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              @maisonhome
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Join our community and get inspired by curated spaces and behind-the-scenes moments.
            </p>
          </FadeInSection>

          {/* Instagram Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-3">
            {instagramImages.map((image, index) => (
              <motion.a
                key={index}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
