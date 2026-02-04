import React from "react";
import { motion } from "framer-motion";

export type ContentBlockVariant =
	| "image-left"
	| "image-right"
	| "full-width"
	| "minimal"
	| "highlight";

export interface ContentBlockProps {
	variant?: ContentBlockVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	body?: React.ReactNode;
	media?: React.ReactNode;
	backgroundColor?: string;
	cta?: { label: string; href: string; variant?: "primary" | "secondary" }[];
	className?: string;
}

export const ContentBlockSection: React.FC<ContentBlockProps> = ({
	variant = "image-left",
	headline,
	subheadline,
	body,
	media,
	backgroundColor,
	cta,
	className
}) => {
	const isImageLeft = variant === "image-left";
	const isImageRight = variant === "image-right";

	return (
		<motion.section
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			style={{ backgroundColor: backgroundColor || "#ffffff" }}
			className={`w-full py-16 px-6 md:px-12 ${className || ""}`}
		>
			<div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-10 items-center">
				{/* Media / Image */}
				{(isImageLeft || isImageRight) &&
					media &&
					<motion.div
						initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className={`md:w-1/2 ${isImageLeft ? "order-first" : "order-last"}`}
					>
						{media}
					</motion.div>}

				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className={`flex flex-col gap-4 md:w-1/2 ${variant === "full-width" ||
					variant === "highlight"
						? "text-center items-center md:w-full"
						: ""}`}
				>
					{headline &&
						<motion.h2
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className={`text-3xl font-bold text-slate-900 sm:text-4xl ${variant ===
							"highlight"
								? "text-white"
								: ""}`}
						>
							{headline}
						</motion.h2>}

					{subheadline &&
						<motion.p
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className={`text-base text-slate-600 sm:text-lg ${variant ===
							"highlight"
								? "text-white/80"
								: ""}`}
						>
							{subheadline}
						</motion.p>}

					{body &&
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className={`${variant === "highlight" ? "text-white/80" : ""}`}
						>
							{body}
						</motion.div>}

					{/* CTA Buttons */}
					{cta &&
						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
						>
							{cta.map((btn, i) =>
								<motion.a
									key={i}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									href={btn.href}
									className={`px-5 py-2 rounded-md font-semibold text-sm transition-all ${btn.variant ===
									"primary"
										? "bg-primary text-white hover:bg-primary/90"
										: "bg-accent text-white hover:bg-accent/90"}`}
								>
									{btn.label}
								</motion.a>
							)}
						</motion.div>}
				</motion.div>
			</div>
		</motion.section>
	);
};
