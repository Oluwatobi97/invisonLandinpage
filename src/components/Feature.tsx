import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import clsx from "clsx";

/* ---------------------------------------------------------
 * Types
 * --------------------------------------------------------- */

export interface FeatureItem {
	title: string;
	description: string;
	icon?: React.ReactNode;
	image?: string | React.ReactNode;
	video?: string;
}

export type FeaturesVariant =
	| "grid"
	| "split"
	| "list"
	| "carousel"
	| "timeline";

export interface FeaturesProps {
	variant?: FeaturesVariant;
	features: FeatureItem[];
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	className?: string;
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
};

const itemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut"
		}
	}
};

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */

export const Features: React.FC<FeaturesProps> = ({
	variant = "grid",
	features,
	headline,
	subheadline,
	className
}) => {
	return (
		<section
			className={clsx(
				"relative w-full flex flex-col items-center px-6 md:px-12 py-16",
				className
			)}
		>
			{/* Headline */}
			{headline &&
				<motion.h2
					variants={itemVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-center mb-4"
				>
					{headline}
				</motion.h2>}

			{subheadline &&
				<motion.p
					variants={itemVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="text-base md:text-lg text-gray-500 text-center mb-10"
				>
					{subheadline}
				</motion.p>}

			{/* Features */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
				className={clsx(
					"w-full",
					variant === "grid" &&
						"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
					variant === "list" && "flex flex-col gap-6 max-w-2xl mx-auto",
					variant === "carousel" && "flex gap-6 overflow-x-auto py-4",
					variant === "split" && "flex flex-col md:flex-row gap-12",
					variant === "timeline" && "flex flex-col md:flex-row gap-12"
				)}
			>
				{features.map((feature, idx) =>
					<motion.div
						key={idx}
						variants={itemVariants}
						whileHover={{ scale: 1.04 }}
						className={clsx(
							"rounded-lg p-6 transition",
							variant === "grid" && "border shadow-sm hover:shadow-md",
							variant === "carousel" && "min-w-65 border shadow-sm",
							variant === "timeline" && "flex-1 text-center relative",
							variant === "list" && "flex gap-4",
							variant === "split" && "flex flex-col gap-3"
						)}
					>
						{/* Icon */}
						{feature.icon &&
							<div className="text-2xl text-blue-500 mb-2">
								{feature.icon}
							</div>}

						{/* Image */}
						{typeof feature.image === "string"
							? <img
									src={feature.image}
									alt={feature.title}
									className="h-16 w-16 object-contain mb-2"
								/>
							: feature.image}

						{/* Text */}
						<h3 className="font-semibold text-lg">
							{feature.title}
						</h3>

						<p className="text-sm text-gray-500">
							{feature.description}
						</p>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
};
