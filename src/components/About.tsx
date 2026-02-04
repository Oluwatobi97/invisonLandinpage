import * as React from "react";
import { cn } from "@/lib/utils";
import {motion} from 'framer-motion'

import type {Variants } from 'framer-motion'

export type AboutVariant =
	| "split"
	| "centered"
	| "cards"
	| "minimal"
	| "illustration";

export interface AboutItem {
	title: string;
	description?: string;
	imageSrc?: string;
	icon?: React.ReactNode;
}

export interface AboutSectionProps {
	variant?: AboutVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	items?: AboutItem[];
	media?: React.ReactNode;
	backgroundDecoration?: React.ReactNode;
	className?: string;
}

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" // ✅ VALID
		}
	}
};


const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2
		}
	}
};


const VARIANT_STYLES: Record<AboutVariant, string> = {
	split: "md:flex-row md:items-center md:justify-between gap-10",
	centered: "flex-col text-center items-center gap-6",
	cards: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
	minimal: "flex flex-col gap-4",
	illustration: "md:flex-row-reverse md:items-center md:justify-between gap-10"
};

export function AboutSection({
	variant = "split",
	headline,
	subheadline,
	items,
	media,
	backgroundDecoration,
	className
}: AboutSectionProps) {
	return (
		<motion.section
			role="region"
			aria-label="About section"
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-80px" }}
			variants={containerVariants}
			className={cn("relative w-full py-16 px-6 md:px-12", className)}
		>
			{backgroundDecoration &&
				<div className="absolute inset-0 -z-10">
					{backgroundDecoration}
				</div>}

			<motion.div
				variants={containerVariants}
				className={cn(
					"mx-auto max-w-7xl flex flex-col",
					VARIANT_STYLES[variant]
				)}
			>
				{/* Headline */}
				{(headline || subheadline) &&
					<motion.div
						variants={fadeUp}
						className={cn(
							"flex flex-col gap-4",
							variant === "centered" && "items-center text-center",
							(variant === "split" || variant === "illustration") && "md:w-1/2"
						)}
					>
						{headline &&
							<h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
								{headline}
							</h2>}
						{subheadline &&
							<p className="text-base text-slate-600 sm:text-lg">
								{subheadline}
							</p>}
					</motion.div>}

				{/* Media */}
				{media &&
					(variant === "split" || variant === "illustration") &&
					<motion.div variants={fadeUp} className="relative md:w-1/2">
						{media}
					</motion.div>}

				{/* Items */}
				{items &&
					(variant === "cards" || variant === "minimal") &&
					<motion.div
						variants={containerVariants}
						className={cn(
							variant === "cards"
								? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
								: "flex flex-col gap-4"
						)}
					>
						{items.map((item, index) =>
							<AboutItemRenderer key={index} item={item} variant={variant} />
						)}
					</motion.div>}
			</motion.div>
		</motion.section>
	);
}

/* ---------------------------------------------------------
 * Item Renderer
 * --------------------------------------------------------- */
function AboutItemRenderer({
	item,
	variant
}: {
	item: AboutItem;
	variant: AboutVariant;
}) {
	if (variant === "cards") {
		return (
			<div className="flex flex-col gap-3 rounded-lg border p-6 hover:shadow-lg transition">
				{item.icon &&
					<div className="text-3xl">
						{item.icon}
					</div>}
				{item.imageSrc &&
					<img
						src={item.imageSrc}
						alt={item.title}
						className="h-20 object-contain"
					/>}
				<h3 className="text-lg font-semibold text-slate-900">
					{item.title}
				</h3>
				{item.description &&
					<p className="text-slate-600 text-sm">
						{item.description}
					</p>}
			</div>
		);
	}

	if (variant === "minimal") {
		return (
			<div>
				<h3 className="text-base font-semibold text-slate-900">
					{item.title}
				</h3>
				{item.description &&
					<p className="text-sm text-slate-600">
						{item.description}
					</p>}
			</div>
		);
	}

	return null;
}
