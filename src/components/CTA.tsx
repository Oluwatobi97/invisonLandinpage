import React from "react";
import { motion } from "framer-motion";

interface CTAProps {
	headline: string | React.ReactNode;
	subheadline?: string | React.ReactNode;
	ctaPrimary: { label: string; href: string };
	ctaSecondary?: { label: string; href: string };
	variant?: "solid" | "outline" | "minimal";
	className?: string;
}

export const CTA: React.FC<CTAProps> = ({
	headline,
	subheadline,
	ctaPrimary,
	ctaSecondary,
	variant = "solid",
	className
}) => {
	const getButtonClasses = (isPrimary: boolean) => {
		switch (variant) {
			case "solid":
				return isPrimary
					? "bg-primary text-white hover:bg-primary/90"
					: "bg-accent text-white hover:bg-accent/90";
			case "outline":
				return isPrimary
					? "border border-primary text-primary hover:bg-primary/10"
					: "border border-accent text-accent hover:bg-accent/10";
			case "minimal":
				return isPrimary
					? "text-primary hover:underline"
					: "text-accent hover:underline";
			default:
				return "";
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`w-full flex flex-col items-center text-center px-6 md:px-12 py-16 bg-accent/5 rounded-lg ${className ||
				""}`}
		>
			{/* Headline */}
			<motion.h2
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="text-3xl md:text-4xl font-bold mb-4"
			>
				{headline}
			</motion.h2>

			{/* Subheadline */}
			{subheadline &&
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-muted-foreground mb-8"
				>
					{subheadline}
				</motion.p>}

			{/* Buttons */}
			<div className="flex flex-wrap gap-4 justify-center">
				<motion.a
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					href={ctaPrimary.href}
					className={`px-6 py-3 rounded-md font-semibold transition ${getButtonClasses(
						true
					)}`}
				>
					{ctaPrimary.label}
				</motion.a>

				{ctaSecondary &&
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href={ctaSecondary.href}
						className={`px-6 py-3 rounded-md font-semibold transition ${getButtonClasses(
							false
						)}`}
					>
						{ctaSecondary.label}
					</motion.a>}
			</div>
		</motion.section>
	);
};
