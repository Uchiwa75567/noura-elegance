import { motion } from "framer-motion";
import founderImage from "@/assets/founder.jpg";
import collectionVeiled from "@/assets/collection-veiled.jpg";
import { Leaf, Heart, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-secondary/20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight"
        >
          Notre <em className="italic">Histoire</em>
        </motion.h1>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src={founderImage} alt="Fondatrice de NOURA" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tight mb-6">
                La naissance de NOURA
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6 max-w-prose">
                NOURA est née en 2020 d'un constat simple : les femmes qui souhaitent s'habiller avec pudeur 
                ne devraient pas avoir à sacrifier leur style. Notre fondatrice a créé NOURA pour offrir des 
                vêtements qui célèbrent la féminité dans toute sa diversité.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed max-w-prose">
                Chaque collection est conçue à Paris et confectionnée dans des ateliers européens qui partagent 
                nos valeurs de qualité et de respect. Des matières nobles, des coupes réfléchies, une mode qui fait sens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 bg-secondary/15">
        <div className="container max-w-3xl text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-light italic leading-relaxed text-foreground/80">
              « La vraie élégance, c'est quand le vêtement sert la femme, et non l'inverse. 
              Chez NOURA, nous habillons des femmes qui savent qui elles sont. »
            </p>
            <footer className="mt-8 font-sans text-xs tracking-widest uppercase text-muted-foreground">
              — Fondatrice de NOURA
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-light tracking-tight text-center mb-14"
          >
            Nos <em className="italic">Valeurs</em>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Leaf className="w-8 h-8" strokeWidth={1} />, title: "Durabilité", desc: "Des matières durables et une production responsable pour réduire notre impact." },
              { icon: <Heart className="w-8 h-8" strokeWidth={1} />, title: "Inclusivité", desc: "Des collections pour toutes les femmes, qu'elles portent le voile ou non." },
              { icon: <Globe className="w-8 h-8" strokeWidth={1} />, title: "Savoir-faire", desc: "Confection européenne, matières nobles, finitions impeccables." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="text-primary mx-auto mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl font-medium mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-muted-foreground max-w-xs mx-auto">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={collectionVeiled} alt="Collection NOURA" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/20" />
      </section>
    </div>
  );
};

export default AboutPage;
