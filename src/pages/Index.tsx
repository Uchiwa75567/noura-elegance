import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Scissors, Users, Truck, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import collectionVeiled from "@/assets/collection-veiled.jpg";
import collectionModern from "@/assets/collection-modern.jpg";
import collectionMen from "@/assets/collection-men.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* ① Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="NOURA - Mode pudique et élégante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-background tracking-tight leading-tight"
          >
            L'élégance,{" "}
            <em className="italic">sans compromis.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-background/80 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Des tenues modernes et pudiques pour toutes les femmes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/boutique"
              className="bg-primary text-primary-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
            >
              Découvrir la boutique
            </Link>
            <Link
              to="/collections"
              className="border border-background/60 text-background px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-background/10 transition-colors rounded-sm backdrop-blur-sm"
            >
              Nos collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ② Brand Introduction */}
      <section className="bg-secondary/15 py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-6">
                La mode pudique,{" "}
                <em className="italic">réinventée.</em>
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-prose">
                NOURA est née de la conviction que l'élégance et la pudeur ne sont pas contradictoires. 
                Chaque pièce est pensée pour sublimer la femme moderne, qu'elle porte le voile ou non, 
                avec des matières nobles et des coupes contemporaines.
              </p>
            </motion.div>
            <div className="grid gap-6">
              {[
                { icon: "✦", title: "Élégance", desc: "Des coupes raffinées inspirées de la haute couture." },
                { icon: "◇", title: "Pudeur", desc: "Des tenues qui respectent et célèbrent la modestie." },
                { icon: "○", title: "Modernité", desc: "Un design contemporain pour la femme d'aujourd'hui." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 p-4"
                >
                  <span className="text-primary text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ③ Featured Collections */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">
              Nos <em className="italic">Collections</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: collectionVeiled, name: "Femmes Voilées", desc: "Élégance et pudeur au quotidien" },
              { img: collectionModern, name: "Femmes Modernes", desc: "Style contemporain et raffiné" },
              { img: collectionMen, name: "Hommes", desc: "L'homme élégant et moderne" },
            ].map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link to="/collections" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                    <img
                      src={col.img}
                      alt={col.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl text-background font-light">{col.name}</h3>
                      <p className="font-sans text-xs text-background/70 mt-1">{col.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs tracking-widest uppercase font-sans text-primary hover:text-primary/80 transition-colors">
                    Explorer →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Featured Products */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">
              Pièces <em className="italic">Phares</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-14">
            <Link
              to="/boutique"
              className="inline-block border border-foreground/20 text-foreground px-8 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
            >
              Voir toute la boutique
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ⑤ Why Choose NOURA */}
      <section className="py-20 md:py-28 bg-accent/10">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">
              Pourquoi <em className="italic">NOURA</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-6 h-6" strokeWidth={1} />, title: "Matières de qualité", desc: "Des tissus nobles sélectionnés avec soin." },
              { icon: <Scissors className="w-6 h-6" strokeWidth={1} />, title: "Coupes élégantes", desc: "Des silhouettes raffinées et modernes." },
              { icon: <Users className="w-6 h-6" strokeWidth={1} />, title: "Inclusive & pudique", desc: "Pour toutes les femmes, tous les styles." },
              { icon: <Truck className="w-6 h-6" strokeWidth={1} />, title: "Livraison rapide", desc: "Expédition sous 48h en France." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-primary mx-auto mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Social Proof / Reviews */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight">
              Rejoignez la communauté <em className="italic">NOURA</em>
            </h2>
          </motion.div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Amina K.", quote: "Les robes NOURA sont d'une qualité exceptionnelle. Enfin une marque qui comprend nos besoins.", stars: 5 },
              { name: "Sarah L.", quote: "Le blazer camel est devenu mon indispensable. Élégant et confortable, un vrai investissement.", stars: 5 },
              { name: "Fatima M.", quote: "Je recommande à toutes les femmes qui cherchent des tenues pudiques et modernes. Bravo NOURA !", stars: 5 },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="border border-border/50 p-8 rounded-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{review.quote}"
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
