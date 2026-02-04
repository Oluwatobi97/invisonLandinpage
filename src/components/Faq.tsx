import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
	question: string;
	answer: string | React.ReactNode;
}

export type FAQVariant = "accordion" | "grid";

interface FAQProps {
	items: FAQItem[];
	variant?: FAQVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
	items,
	variant = "accordion",
	headline,
	subheadline,
	className
}) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) =>
		setOpenIndex(openIndex === index ? null : index);

	return (
		<section
			className={`w-full px-6 md:px-12 py-12 md:py-24 ${className || ""}`}
		>
			{/* Headline */}
			{headline &&
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					{headline}
				</h2>}
			{subheadline &&
				<p className="text-muted-foreground text-center mb-8">
					{subheadline}
				</p>}

			{/* Accordion Variant */}
			{variant === "accordion" &&
				<div className="flex flex-col gap-4 max-w-3xl mx-auto">
					{items.map((item, idx) =>
						<div
							key={idx}
							className="border rounded-md overflow-hidden shadow-xs"
						>
							<button
								onClick={() => toggle(idx)}
								className="w-full flex justify-between items-center p-4 text-left bg-background hover:bg-accent/10 transition"
							>
								<span className="font-medium">
									{item.question}
								</span>
								<motion.span
									animate={{ rotate: openIndex === idx ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown size={20} />
								</motion.span>
							</button>

							<AnimatePresence initial={false}>
								{openIndex === idx &&
									<motion.div
										key="content"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="px-4 py-2 overflow-hidden"
									>
										<p className="text-muted-foreground">
											{item.answer}
										</p>
									</motion.div>}
							</AnimatePresence>
						</div>
					)}
				</div>}

			{/* Grid Variant */}
			{variant === "grid" &&
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
					{items.map((item, idx) =>
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="border rounded-md p-6 shadow-xs hover:shadow-md transition"
						>
							<h3 className="font-semibold mb-2">
								{item.question}
							</h3>
							<p className="text-muted-foreground">
								{item.answer}
							</p>
						</motion.div>
					)}
				</div>}
		</section>
	);
};
