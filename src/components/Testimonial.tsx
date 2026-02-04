// motion.presets.ts (already aligned with your system)
import type {Variants} from "framer-motion";

export const sectionVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.12
		}
	}
};

export const testimonialItem: Variants = {
	hidden: { opacity: 0, y: 24, scale: 0.97 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
	}
};



"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";


/* ---------------------------------------------------------
 * Types
 * --------------------------------------------------------- */
export interface TestimonialItem {
	id: string;
	name: string;
	role?: string;
	quote: string;
	avatar?: string | React.ReactNode;
	rating?: number;
	video?: string;
}

export type TestimonialVariant =
	| "grid"
	| "carousel"
	| "hero"
	| "inline"
	| "video";

interface TestimonialProps {
	variant?: TestimonialVariant;
	testimonials: TestimonialItem[];
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	className?: string;
}

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */
export function TestimonialSection({
	variant = "grid",
	testimonials,
	headline,
	subheadline,
	className
}: TestimonialProps) {
	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-80px" }}
			className={cn(
				"w-full flex flex-col items-center px-6 md:px-12 py-16 md:py-24",
				className
			)}
		>
			{/* Headline */}
			{headline && (
				<motion.h2
					variants={testimonialItem}
					className="text-3xl md:text-4xl font-bold text-center mb-4"
				>
					{headline}
				</motion.h2>
			)}
			{subheadline && (
				<motion.p
					variants={testimonialItem}
					className="text-muted-foreground text-center mb-10"
				>
					{subheadline}
				</motion.p>
			)}

			{/* Variants */}
			{variant === "grid" && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{testimonials.map(t => (
						<TestimonialCard key={t.id} testimonial={t} />
					))}
				</div>
			)}

			{variant === "carousel" && (
				<div className="flex overflow-x-auto gap-6 w-full py-4 snap-x snap-mandatory">
					{testimonials.map(t => (
						<motion.div
							key={t.id}
							variants={testimonialItem}
							className="shrink-0 w-72 snap-start"
						>
							<TestimonialCard testimonial={t} centered />
						</motion.div>
					))}
				</div>
			)}

			{variant === "hero" && testimonials[0] && (
				<motion.div
					variants={testimonialItem}
					className="flex flex-col md:flex-row items-center gap-12 w-full"
				>
					<div className="flex-1">
						<p className="text-xl md:text-2xl italic text-muted-foreground">
							"{testimonials[0].quote}"
						</p>
						<div className="mt-4">
							<span className="font-semibold text-lg">
								{testimonials[0].name}
							</span>
							{testimonials[0].role && (
								<span className="text-muted-foreground text-sm ml-2">
									{testimonials[0].role}
								</span>
							)}
						</div>
					</div>
					{testimonials[0].avatar && (
						<div className="flex-1 flex justify-center">
							{typeof testimonials[0].avatar === "string" ? (
								<img
									src={testimonials[0].avatar}
									alt={testimonials[0].name}
									width={200}
									height={200}
									className="rounded-full"
								/>
							) : (
								testimonials[0].avatar
							)}
						</div>
					)}
				</motion.div>
			)}

			{variant === "video" && (
				<div className="flex flex-col md:flex-row gap-6">
					{testimonials.map(
						t =>
							t.video && (
								<motion.video
									key={t.id}
									variants={testimonialItem}
									controls
									src={t.video}
									className="rounded-lg shadow-lg w-full md:w-96"
								/>
							)
					)}
				</div>
			)}
		</motion.section>
	);
}

/* ---------------------------------------------------------
 * Card
 * --------------------------------------------------------- */
function TestimonialCard({
	testimonial,
	centered
}: {
	testimonial: TestimonialItem;
	centered?: boolean;
}) {
	return (
		<motion.div
			variants={testimonialItem}
			whileHover={{ y: -6, scale: 1.02 }}
			className={cn(
				"flex flex-col gap-3 p-6 rounded-lg border bg-white shadow-sm",
				centered && "items-center text-center"
			)}
		>
			{testimonial.avatar &&
				(typeof testimonial.avatar === "string" ? (
					<img
						src={testimonial.avatar}
						alt={testimonial.name}
						width={48}
						height={48}
						className="rounded-full"
					/>
				) : (
					testimonial.avatar
				))}

			<p className="text-sm italic text-muted-foreground">
				"{testimonial.quote}"
			</p>

			<div>
				<span className="font-semibold">{testimonial.name}</span>
				{testimonial.role && (
					<p className="text-xs text-muted-foreground">
						{testimonial.role}
					</p>
				)}
			</div>

			{testimonial.rating && (
				<div className="flex gap-1 mt-1">
					{Array.from({ length: 5 }).map((_, i) => (
						<StarIcon
							key={i}
							className={cn(
								"size-4",
								i < testimonial.rating!
									? "text-yellow-500"
									: "text-gray-300"
							)}
						/>
					))}
				</div>
			)}
		</motion.div>
	);
}
