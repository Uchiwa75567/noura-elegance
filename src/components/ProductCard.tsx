import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4 bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-accent/20 text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest font-sans font-medium backdrop-blur-sm">
            Nouveau
          </span>
        )}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addItem(product)}
          className="absolute bottom-0 left-0 right-0 bg-foreground/90 text-background py-3.5 text-xs tracking-widest uppercase font-sans font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out text-center backdrop-blur-sm"
        >
          Ajouter au panier
        </motion.button>
      </div>
      <h3 className="font-serif text-lg font-light tracking-tight">{product.name}</h3>
      <p className="font-sans text-sm text-muted-foreground tabular-nums mt-1">{product.price},00 €</p>
    </motion.div>
  );
};

export default ProductCard;
