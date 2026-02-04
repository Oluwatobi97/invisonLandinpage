import React, { useState } from "react";
import { cn } from "../lib/utils"; // plain utility for classNames

export interface PricingPlan {
	name: string;
	price: string;
	billingCycle?: string; // e.g., "/mo", "/year"
	features: string[];
	cta?: { label: string; href: string; variant?: "primary" | "secondary" };
	recommended?: boolean;
}

export type PricingVariant =
	| "grid" // Simple side-by-side plan cards
	| "highlight" // Recommended plan emphasized
	| "minimal" // Single plan / simple CTA
	| "interactive"; // Plan calculator or dynamic selection

interface PricingProps {
	variant?: PricingVariant;
	plans: PricingPlan[];
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	showBillingToggle?: boolean;
	className?: string;
}

export const Pricing: React.FC<PricingProps> = ({
	variant = "grid",
	plans,
	headline,
	subheadline,
	showBillingToggle = false,
	className
}) => {
	const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

	return (
		<section
			className={cn("w-full flex flex-col items-center px-6 py-12", className)}
		>
			{/* Headline */}
			{headline &&
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					{headline}
				</h2>}
			{subheadline &&
				<p className="text-gray-600 text-center mb-8">
					{subheadline}
				</p>}

			{/* Billing Toggle */}
			{showBillingToggle &&
				<div className="flex items-center gap-2 mb-8 border rounded-full p-1 bg-gray-200">
					<button
						className={cn(
							"px-4 py-1 rounded-full transition",
							billing === "monthly" ? "bg-blue-600 text-white" : "text-gray-700"
						)}
						onClick={() => setBilling("monthly")}
					>
						Monthly
					</button>
					<button
						className={cn(
							"px-4 py-1 rounded-full transition",
							billing === "yearly" ? "bg-blue-600 text-white" : "text-gray-700"
						)}
						onClick={() => setBilling("yearly")}
					>
						Yearly
					</button>
				</div>}

			{/* Pricing Grid */}
			<div
				className={cn(
					"grid gap-6 w-full",
					plans.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-1"
				)}
			>
				{plans.map((plan, idx) =>
					<div
						key={idx}
						className={cn(
							"flex flex-col p-6 rounded-md border shadow transition hover:shadow-lg hover:scale-[1.02]",
							plan.recommended && variant === "highlight"
								? "border-blue-600 bg-blue-50"
								: "bg-white"
						)}
					>
						{/* Recommended Badge */}
						{plan.recommended &&
							variant === "highlight" &&
							<span className="text-sm text-blue-600 font-semibold mb-2">
								Recommended
							</span>}

						{/* Plan Name */}
						<h3 className="font-semibold text-xl">
							{plan.name}
						</h3>

						{/* Price */}
						<div className="flex items-baseline gap-1 mt-2">
							<span className="text-3xl font-bold">
								{plan.price}
							</span>
							{plan.billingCycle &&
								<span className="text-gray-500">
									{plan.billingCycle}
								</span>}
						</div>

						{/* Features */}
						<ul className="flex flex-col gap-2 mt-4">
							{plan.features.map((feature, fidx) =>
								<li key={fidx} className="flex items-center gap-2">
									<span className="w-4 h-4 bg-blue-600 rounded-full shrink-0" />
									<span className="text-sm text-gray-600">
										{feature}
									</span>
								</li>
							)}
						</ul>

						{/* CTA Button */}
						{plan.cta &&
							<a
								href={plan.cta.href}
								className={cn(
									"mt-6 px-4 py-2 rounded-md text-sm font-semibold text-center transition",
									plan.cta.variant === "primary"
										? "bg-blue-600 text-white hover:bg-blue-700"
										: "bg-gray-600 text-white hover:bg-gray-700"
								)}
							>
								{plan.cta.label}
							</a>}
					</div>
				)}
			</div>
		</section>
	);
};
