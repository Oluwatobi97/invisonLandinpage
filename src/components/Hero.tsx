"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type {Variants } from 'framer-motion'

/* ---------------------------------------------------------
 * Variants
 * --------------------------------------------------------- */
export type HeroVariant =
	| "split"
	| "centered"
	| "full-screen"
	| "minimal"
	| "marketing-bank"
	| "video";

/* ---------------------------------------------------------
 * CTA type
 * --------------------------------------------------------- */
interface HeroCTA {
	label: string;
	href: string;
	variant?: "primary" | "secondary";
}

/* ---------------------------------------------------------
 * Props
 * --------------------------------------------------------- */
interface HeroProps {
	variant?: HeroVariant;
	headline: React.ReactNode;
	subheadline?: React.ReactNode;
	cta?: HeroCTA[];
	media?: React.ReactNode;
	backgroundDecoration?: React.ReactNode;
	videoSrc?: string;
	className?: string;
}

/* ---------------------------------------------------------
 * Variant style map
 * --------------------------------------------------------- */
const HERO_VARIANTS: Record<HeroVariant, string> = {
	split: "md:flex-row md:items-center md:justify-between",
	centered: "items-center text-center",
	"full-screen": "min-h-screen items-center justify-center",
	minimal: "",
	video: "min-h-[80vh] items-center justify-center",
	"marketing-bank":
		"bg-gray-50 md:flex-row md:items-center md:justify-between lg:min-h-[700px]"
};

/* ---------------------------------------------------------
 * Motion presets
 * --------------------------------------------------------- */
const heroContainer = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } }
};

const heroItem:Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

const heroMedia:Variants = {
	hidden: { opacity: 0, scale: 0.96 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.16, 1, 0.3, 1]
		}
	}
};

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */
export function Hero({
	variant = "split",
	headline,
	subheadline,
	cta,
	media,
	backgroundDecoration,
	videoSrc,
	className
}: HeroProps) {
	return (
		<section
			role="region"
			aria-label="Hero section"
			className={cn(
				"relative w-full overflow-hidden px-6 md:px-12",
				"flex flex-col",
				HERO_VARIANTS[variant],
				className
			)}
		>
			{/* Background decoration */}
			{backgroundDecoration &&
				<div className="absolute inset-0 -z-10">
					{backgroundDecoration}
				</div>}

			{/* Background video */}
			{variant === "video" &&
				videoSrc &&
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 -z-10 h-full w-full object-cover"
					aria-hidden
				>
					<source src={videoSrc} type="video/mp4" />
				</video>}

			{/* Content */}
			<motion.div
				initial="hidden"
				animate="show"
				variants={heroContainer}
				className={cn(
					"mx-auto flex w-full max-w-7xl flex-col gap-10 py-16",
					variant === "split" || variant === "marketing-bank"
						? "md:flex-row"
						: "items-center"
				)}
			>
				{/* Text */}
				<motion.div
					variants={heroItem}
					className={cn(
						"flex flex-col gap-6",
						variant === "centered" && "items-center text-center",
						(variant === "split" || variant === "marketing-bank") && "md:w-1/2"
					)}
				>
					<motion.h1
						variants={heroItem}
						className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
					>
						{headline}
					</motion.h1>

					{subheadline &&
						<motion.p
							variants={heroItem}
							className="max-w-xl text-base text-slate-600 sm:text-lg"
						>
							{subheadline}
						</motion.p>}

					{/* CTAs */}
					{cta &&
						cta.length > 0 &&
						<motion.div variants={heroItem} className="flex flex-wrap gap-4">
							{cta.map((btn, index) =>
								<a
									key={index}
									href={btn.href}
									className={cn(
										"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold",
										"transition-all duration-300",
										"hover:-translate-y-px active:translate-y-0",
										btn.variant === "secondary"
											? "bg-slate-200 text-slate-900 hover:bg-slate-300"
											: "bg-linear-to-r from-emerald-400 to-cyan-500 text-white hover:opacity-90"
									)}
								>
									{btn.label}
								</a>
							)}
						</motion.div>}
				</motion.div>

				{/* Media */}
				{media &&
					<motion.div
						variants={heroMedia}
						className={cn(
							"relative flex justify-center",
							(variant === "split" || variant === "marketing-bank") &&
								"md:w-1/2"
						)}
					>
						{media}
					</motion.div>}
			</motion.div>
		</section>
	);
}
