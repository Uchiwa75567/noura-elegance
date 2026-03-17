import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collectionVeiled from "@/assets/collection-veiled.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionMen from "@/assets/collection-men.jpg";
import { products, collections } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const collectionImages: Record<string, string> = {
  "femmes-voilees": collectionVeiled,
  "femmes-modernes": collectionModern,
  hommes: collectionMen,
};

const CollectionsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-secondary/20">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-light tracking-tight"
          >
            Nos <em className="italic">Collections</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            Découvrez nos univers pensés pour sublimer chaque style.
          </motion.p>
        </div>
      </section>

      {/* Collections */}
      {collections.map((col, i) => {
        const colProducts = products.filter((p) => p.collection === col.id).slice(0, 3);
        const isReversed = i % 2 === 1;

        return (
          <section key={col.id} className="py-20 md:py-28">
            <div className="container">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isReversed ? "md:direction-rtl" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? "md:order-2" : ""}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={collectionImages[col.id]}
                      alt={col.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={isReversed ? "md:order-1" : ""}
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-4">{col.name}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-prose">{col.description}</p>
                  <Link
                    to="/boutique"
                    className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
                  >
                    Explorer la collection
                  </Link>
                </motion.div>
              </div>

              {/* Collection products */}
              {colProducts.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mt-16">
                  {colProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CollectionsPage;
