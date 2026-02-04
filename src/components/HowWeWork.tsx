import * as React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import clsx from "clsx"

/* ---------------------------------------------------------
 * Types
 * --------------------------------------------------------- */

export type HowWeWorkVariant =
  | "horizontal"
  | "vertical"
  | "split"
  | "cards"
  | "centered"

export interface HowWeWorkStep {
  title: string
  description?: string
  icon?: React.ReactNode
  imageSrc?: string
}

export interface HowWeWorkSectionProps {
  variant?: HowWeWorkVariant
  headline?: React.ReactNode
  subheadline?: React.ReactNode
  steps: HowWeWorkStep[]
  media?: React.ReactNode
  backgroundDecoration?: React.ReactNode
  className?: string
}

/* ---------------------------------------------------------
 * Layout Styles
 * --------------------------------------------------------- */

const VARIANT_STYLES: Record<HowWeWorkVariant, string> = {
  horizontal: "flex flex-col md:flex-row md:justify-between gap-8",
  vertical: "flex flex-col gap-6",
  split: "flex flex-col md:flex-row md:items-center gap-10",
  cards: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
  centered: "flex flex-col items-center text-center gap-6"
}

/* ---------------------------------------------------------
 * Motion Variants
 * --------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  variant = "horizontal",
  headline,
  subheadline,
  steps,
  media,
  backgroundDecoration,
  className
}) => {
  return (
    <section
      role="region"
      aria-label="How we work section"
      className={clsx(
        "relative w-full py-16 px-6 md:px-12",
        className
      )}
    >
      {/* Background decoration */}
      {backgroundDecoration && (
        <div className="absolute inset-0 -z-10">
          {backgroundDecoration}
        </div>
      )}

      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        {/* Headline */}
        {(headline || subheadline) && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={clsx(
              "flex flex-col gap-4",
              variant === "centered" && "items-center text-center",
              (variant === "split" || variant === "horizontal") && "md:max-w-xl"
            )}
          >
            {headline && (
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {headline}
              </h2>
            )}
            {subheadline && (
              <p className="text-base text-slate-600 sm:text-lg">
                {subheadline}
              </p>
            )}
          </motion.div>
        )}

        {/* Split media */}
        {variant === "split" && media && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {media}
          </motion.div>
        )}

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={clsx(VARIANT_STYLES[variant])}
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              step={step}
              variant={variant}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------
 * Step Renderer
 * --------------------------------------------------------- */

interface StepProps {
  step: HowWeWorkStep
  variant: HowWeWorkVariant
}

const Step: React.FC<StepProps> = ({ step, variant }) => {
  const base = (
    <>
      {step.icon && (
        <div className="text-3xl text-blue-500">
          {step.icon}
        </div>
      )}

      {step.imageSrc && (
        <img
          src={step.imageSrc}
          alt={step.title}
          className="h-20 object-contain"
        />
      )}

      <h3 className="text-lg font-semibold text-slate-900">
        {step.title}
      </h3>

      {step.description && (
        <p className="text-sm text-slate-600">
          {step.description}
        </p>
      )}
    </>
  )

  if (variant === "cards") {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="flex flex-col gap-3 rounded-lg border p-6 bg-white shadow-sm hover:shadow-lg transition"
      >
        {base}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={itemVariants}
      className={clsx(
        "flex flex-col gap-2",
        variant === "centered"
          ? "items-center text-center"
          : "items-center md:items-start md:text-left"
      )}
    >
      {base}
    </motion.div>
  )
}
