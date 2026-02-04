import React from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------
 * Variants
 * --------------------------------------------------------- */
export type TrustBarVariant =
	| "logos"
	| "stats"
	| "certifications"
	| "ratings"
	| "minimal";

/* ---------------------------------------------------------
 * Types
 * --------------------------------------------------------- */
export interface TrustBarItem {
	label: string;
	value?: string;
	icon?: React.ReactNode;
	imageSrc?: string;
}

interface TrustBarProps {
	variant?: TrustBarVariant;
	title?: string;
	items: TrustBarItem[];
	className?: string;
}

/* ---------------------------------------------------------
 * Variant Styles
 * --------------------------------------------------------- */
const VARIANT_STYLES: Record<TrustBarVariant, string> = {
	logos: "grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6",
	stats: "grid grid-cols-2 gap-6 md:grid-cols-4",
	certifications: "flex flex-wrap items-center justify-center gap-6",
	ratings: "flex flex-wrap items-center justify-center gap-8",
	minimal: "flex flex-col items-center gap-4"
};

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */
export const TrustBar: React.FC<TrustBarProps> = ({
	variant = "logos",
	title,
	items,
	className = ""
}) => {
	return (
		<section
			role="region"
			aria-label="Trust indicators"
			className={`w-full bg-white py-12 ${className}`}
		>
			<div className="mx-auto max-w-7xl px-6">
				{title &&
					<p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-slate-500">
						{title}
					</p>}

				<div
					className={`items-center justify-center ${VARIANT_STYLES[variant]}`}
				>
					{items.map((item, index) =>
						<TrustBarItemRenderer key={index} item={item} variant={variant} />
					)}
				</div>
			</div>
		</section>
	);
};

/* ---------------------------------------------------------
 * Item Renderer
 * --------------------------------------------------------- */
const TrustBarItemRenderer: React.FC<{
	item: TrustBarItem;
	variant: TrustBarVariant;
}> = ({ item, variant }) => {
	switch (variant) {
		case "logos":
			return (
				<motion.div
					className="flex items-center justify-center opacity-70 grayscale hover:opacity-100 transition"
					whileHover={{ scale: 1.05, opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					{item.imageSrc &&
						<img
							src={item.imageSrc}
							alt={item.label}
							className="max-h-8 object-contain"
						/>}
				</motion.div>
			);

		case "stats":
			return (
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="text-3xl font-bold text-slate-900">
						{item.value}
					</p>
					<p className="mt-1 text-sm text-slate-600">
						{item.label}
					</p>
				</motion.div>
			);

		case "certifications":
			return (
				<motion.div
					className="flex items-center gap-3 rounded-md border px-4 py-2"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
				>
					{item.icon}
					<span className="text-sm font-medium text-slate-700">
						{item.label}
					</span>
				</motion.div>
			);

		case "ratings":
			return (
				<motion.div
					className="flex items-center gap-2"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
				>
					{item.icon}
					<span className="text-sm font-medium text-slate-700">
						{item.label}
					</span>
				</motion.div>
			);

		case "minimal":
			return (
				<motion.p
					className="text-sm font-medium text-slate-600"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.3 }}
				>
					{item.label}
				</motion.p>
			);

		default:
			return null;
	}
};
