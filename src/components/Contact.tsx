
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { Variants, } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};


export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface ContactCTA {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export type ContactVariant = "form" | "whatsapp-float" | "cards" | "banner" | "minimal";

export interface ContactSectionProps {
  variant?: ContactVariant;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  fields?: ContactField[];
  onSubmit?: (data: Record<string, any>) => void;
  cta?: ContactCTA[];
  whatsappNumber?: string;
  className?: string;
}

export function ContactSection({
  variant = "form",
  headline,
  subheadline,
  fields = [],
  onSubmit,
  cta,
  whatsappNumber,
  className
}: ContactSectionProps) {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  // Floating WhatsApp button
  if (variant === "whatsapp-float" && whatsappNumber) {
    return (
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        {/* You can replace this with a WhatsApp icon */}
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.921-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </motion.a>
    );
  }

  // Form Variant
  if (variant === "form") {
    return (
    <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
  className={cn("w-full py-16 px-6 bg-white", className)}
>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="show"
    className="mx-auto max-w-3xl space-y-6"
  >
    {headline && (
      <motion.h2 variants={fadeUp} className="text-3xl font-bold">
        {headline}
      </motion.h2>
    )}

    {subheadline && (
      <motion.p variants={fadeUp} className="text-slate-600">
        {subheadline}
      </motion.p>
    )}

    <motion.form
      variants={staggerContainer}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {fields.map((field) => (
        <motion.div key={field.name} variants={fadeUp}>
          <FieldRenderer
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </motion.div>
      ))}

      <motion.button
        variants={scaleIn}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="mt-6 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-sm"
      >
        Submit
      </motion.button>
    </motion.form>
  </motion.div>
</motion.section>

    );
  }

  // Cards / Banner / Minimal
  return (
    <section className={cn("w-full py-16 px-6 md:px-12", className)}>
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        {headline && <h2 className="text-3xl font-bold text-slate-900">{headline}</h2>}
        {subheadline && <p className="text-base text-slate-600">{subheadline}</p>}
        {cta && (
          <div className="flex flex-wrap gap-4 mt-6">
            {cta.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-full hover:opacity-90 transition"
              >
                {c.icon && <span>{c.icon}</span>}
                {c.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


function FieldRenderer({
  field,
  value,
  onChange
}: {
  field: ContactField;
  value: string | boolean;
  onChange: (name: string, value: string | boolean) => void;
}) {
  const base =
    "mt-1 border rounded-md p-2 transition focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {field.label}
      </label>

      {field.type === "textarea" && (
        <textarea
          className={base}
          value={value as string}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      )}

      {field.type === "select" && (
        <select
          className={base}
          value={value as string}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          {field.options?.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      )}

      {["text", "email", "tel"].includes(field.type) && (
        <input
          type={field.type}
          className={base}
          value={value as string}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      )}

      {field.type === "checkbox" && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={value as boolean}
            onChange={(e) => onChange(field.name, e.target.checked)}
          />
          {field.label}
        </label>
      )}
    </div>
  );
}
