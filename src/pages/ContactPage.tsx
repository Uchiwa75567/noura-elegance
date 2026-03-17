import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="relative h-[30vh] flex items-center justify-center bg-secondary/20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight"
        >
          Nous <em className="italic">Contacter</em>
        </motion.h1>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-light tracking-tight mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Nom", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "subject", label: "Sujet", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition-colors rounded-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm font-sans focus:outline-none focus:border-primary transition-colors rounded-sm resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-4 text-xs tracking-widest uppercase font-sans font-medium hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-serif font-light tracking-tight mb-8">Nos coordonnées</h2>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" strokeWidth={1} />, label: "Email", value: "contact@noura.com" },
                  { icon: <Phone className="w-5 h-5" strokeWidth={1} />, label: "Téléphone", value: "+33 1 23 45 67 89" },
                  { icon: <MapPin className="w-5 h-5" strokeWidth={1} />, label: "Adresse", value: "12 Rue de la Paix, 75002 Paris" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="text-primary mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-sans text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 aspect-video bg-muted rounded-sm flex items-center justify-center">
                <p className="font-sans text-sm text-muted-foreground">Carte interactive</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
