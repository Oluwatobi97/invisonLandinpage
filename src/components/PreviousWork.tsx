"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type WorkVariant =
	| "grid"
	| "carousel"
	| "masonry"
	| "highlight"
	| "minimal";

export interface WorkItem {
	title: string;
	description?: string;
	imageSrc?: string;
	projectUrl?: string;
	tags?: string[];
}

export interface PreviousWorkSectionProps {
	variant?: WorkVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	items: WorkItem[];
	className?: string;
}

const VARIANT_STYLES: Record<WorkVariant, string> = {
	grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
	carousel: "flex overflow-x-auto gap-6 snap-x snap-mandatory",
	masonry: "columns-1 sm:columns-2 md:columns-3 gap-6",
	highlight: "flex flex-col gap-10",
	minimal: "flex flex-col gap-4"
};

export function PreviousWorkSection({
	variant = "grid",
	headline,
	subheadline,
	items,
	className
}: PreviousWorkSectionProps) {
	return (
		<section
			role="region"
			aria-label="Previous Work / Portfolio Section"
			className={cn("w-full py-16 px-6 md:px-12 bg-gray-50", className)}
		>
			<div className="mx-auto max-w-7xl flex flex-col gap-10">
				{(headline || subheadline) &&
					<div
						className={cn(
							"flex flex-col gap-4",
							variant === "highlight" && "items-center text-center"
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
					</div>}

				<div className={cn(VARIANT_STYLES[variant])}>
					{items.map((item, index) =>
						<WorkItemRenderer key={index} item={item} variant={variant} />
					)}
				</div>
			</div>
		</section>
	);
}

/* ---------------------------------------------------------
 * Work Item Renderer
 * --------------------------------------------------------- */
function WorkItemRenderer({
	item,
	variant
}: {
	item: WorkItem;
	variant: WorkVariant;
}) {
	switch (variant) {
		case "grid":
		case "highlight":
			return (
				<Link
					href={item.projectUrl || "#"}
					className="flex flex-col gap-3 group"
				>
					{item.imageSrc &&
						<img
							src={item.imageSrc}
							alt={item.title}
							className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform"
						/>}
					<h3 className="text-lg font-semibold text-slate-900">
						{item.title}
					</h3>
					{item.description &&
						<p className="text-sm text-slate-600">
							{item.description}
						</p>}
				</Link>
			);

		case "carousel":
			return (
				<Link
					href={item.projectUrl || "#"}
					className="shrink-0 w-72 flex flex-col gap-3 snap-start group"
				>
					{item.imageSrc &&
						<img
							src={item.imageSrc}
							alt={item.title}
							className="w-full h-40 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform"
						/>}
					<h3 className="text-lg font-semibold text-slate-900">
						{item.title}
					</h3>
				</Link>
			);

		case "masonry":
			return (
				<Link
					href={item.projectUrl || "#"}
					className="mb-6 break-inside-avoid rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
				>
					{item.imageSrc &&
						<img
							src={item.imageSrc}
							alt={item.title}
							className="w-full h-auto object-cover"
						/>}
					<h3 className="mt-2 text-lg font-semibold text-slate-900">
						{item.title}
					</h3>
				</Link>
			);

		case "minimal":
			return (
				<Link
					href={item.projectUrl || "#"}
					className="text-slate-700 hover:text-slate-900 transition"
				>
					{item.title}
				</Link>
			);

		default:
			return null;
	}
}
