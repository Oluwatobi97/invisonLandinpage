"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";

// Types
export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
}

export type NavbarVariant =
	| "default"
	| "transparent"
	| "sticky"
	| "minimal"
	| "centered-logo";

interface NavbarProps {
	logo?: React.ReactNode;
	links: NavLink[];
	cta?: { label: string; href: string; variant?: "primary" | "secondary" };
	variant?: NavbarVariant;
	className?: string;
}

/* ----------------------------------
   Motion Presets (Calm & Premium)
-----------------------------------*/
const navbarMotion = {
	initial: { y: -8, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.35, ease: "easeOut" }
};

const menuMotion = {
	initial: { opacity: 0, y: -6 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -6 },
	transition: { duration: 0.25, ease: "easeOut" }
};

export const Navbar: React.FC<NavbarProps> = ({
	logo,
	links,
	cta,
	variant = "default",
	className
}) => {
	const [open, setOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	// Scroll detection
	React.useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Base styles
	const baseClasses = cn(
		"w-full z-50 flex items-center justify-between px-6 py-4 md:py-5",
		"transition-colors transition-shadow duration-300",
		variant === "transparent" &&
			(scrolled ? "bg-white shadow-md" : "bg-transparent")
	);

	// Variant styles
	const variantClasses = cn(
		variant === "default" && "bg-white shadow-sm",
		variant === "sticky" && "fixed top-0 left-0 bg-white shadow-md",
		variant === "minimal" && "bg-white shadow-none py-2",
		variant === "centered-logo" && "bg-white shadow-md justify-center"
	);

	return (
		<motion.nav
			initial="initial"
			animate="animate"
			variants={navbarMotion}
			className={cn(baseClasses, variantClasses, className)}
		>
			{/* Logo */}
			{logo && (
				<div
					className={cn(
						variant === "centered-logo" &&
							"absolute left-1/2 -translate-x-1/2"
					)}
				>
					{logo}
				</div>
			)}

			{/* Desktop Links */}
			<div className="hidden md:flex items-center gap-6">
				{links.map(link => (
					<a
						key={link.href}
						href={link.href}
						target={link.external ? "_blank" : "_self"}
						className="
							relative text-base font-medium text-foreground/80
							transition-colors hover:text-foreground
							after:absolute after:left-0 after:-bottom-1
							after:h-0.5 after:w-0 after:bg-primary
							after:transition-all after:duration-300
							hover:after:w-full
						"
					>
						{link.label}
					</a>
				))}
			</div>

			{/* CTA + Theme toggle (desktop) */}
			<div className="hidden md:flex items-center gap-3">
				{cta && (
					<a
						href={cta.href}
						className={cn(
							"inline-flex items-center justify-center",
							"px-4 py-2 rounded-md text-sm font-semibold",
							"transition-all duration-300",
							"hover:-translate-y-px active:translate-y-0",
							"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
							cta.variant === "primary"
								? "bg-primary text-white shadow-sm hover:shadow-md hover:bg-primary/90"
								: "bg-accent text-white shadow-sm hover:shadow-md hover:bg-accent/90"
						)}
					>
						{cta.label}
					</a>
				)}

				<ThemeToggleButton />
			</div>

			{/* Mobile Menu Button */}
			<button
				onClick={() => setOpen(!open)}
				aria-label="Toggle Menu"
				className="
					md:hidden flex items-center p-2 rounded-md
					transition-all duration-200
					hover:bg-accent/10 active:scale-95
				"
			>
				<Menu className="size-6" />
			</button>

			{/* Mobile Menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial="initial"
						animate="animate"
						exit="exit"
						variants={menuMotion}
						className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden"
					>
						{links.map(link => (
							<a
								key={link.href}
								href={link.href}
								target={link.external ? "_blank" : "_self"}
								onClick={() => setOpen(false)}
								className="
									px-6 py-3 text-base font-medium
									transition-colors hover:bg-accent/10
								"
							>
								{link.label}
							</a>
						))}

						{cta && (
							<a
								href={cta.href}
								onClick={() => setOpen(false)}
								className={cn(
									"m-4 py-3 rounded-md text-center font-semibold text-white",
									"transition-all hover:-translate-y-px",
									cta.variant === "primary"
										? "bg-primary hover:bg-primary/90"
										: "bg-accent hover:bg-accent/90"
								)}
							>
								{cta.label}
							</a>
						)}

						<div className="px-6 pb-4">
							<ThemeToggleButton />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};
