import React, { useState } from "react";
import { cn } from "../lib/utils"; // simple className utility

export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterSocial {
	icon: React.ReactNode;
	href: string;
	label?: string;
}

export type FooterVariant =
	| "simple"
	| "columns"
	| "social-only"
	| "newsletter"
	| "full";

export interface FooterSectionProps {
	variant?: FooterVariant;
	companyName?: string;
	copyrightText?: string;
	links?: FooterLink[];
	columns?: { title: string; links: FooterLink[] }[];
	socials?: FooterSocial[];
	newsletterPlaceholder?: string;
	onNewsletterSubmit?: (email: string) => void;
	className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
	variant = "simple",
	companyName = "Company",
	copyrightText,
	links = [],
	columns = [],
	socials = [],
	newsletterPlaceholder = "Enter your email",
	onNewsletterSubmit,
	className
}) => {
	const [email, setEmail] = useState("");

	const handleNewsletterSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (onNewsletterSubmit) onNewsletterSubmit(email);
		setEmail(""); // clear input after submit
	};

	return (
		<footer
			className={cn("w-full bg-gray-900 text-white py-12 px-6", className)}
		>
			<div className="mx-auto max-w-7xl flex flex-col gap-10">
				{/* Columns Variant */}
				{(variant === "columns" || variant === "full") &&
					columns.length > 0 &&
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{columns.map((col, idx) =>
							<div key={idx}>
								<h4 className="font-semibold mb-4">
									{col.title}
								</h4>
								<ul className="flex flex-col gap-2">
									{col.links.map((link, i) =>
										<li key={i}>
											<a href={link.href} className="hover:underline">
												{link.label}
											</a>
										</li>
									)}
								</ul>
							</div>
						)}
					</div>}

				{/* Simple Links Variant */}
				{(variant === "simple" || variant === "full") &&
					links.length > 0 &&
					<div className="flex flex-wrap gap-6 justify-center md:justify-start">
						{links.map((link, i) =>
							<a key={i} href={link.href} className="hover:underline">
								{link.label}
							</a>
						)}
					</div>}

				{/* Social Links */}
				{(variant === "social-only" || variant === "full") &&
					socials.length > 0 &&
					<div className="flex gap-4 justify-center md:justify-start">
						{socials.map((social, i) =>
							<a
								key={i}
								href={social.href}
								aria-label={social.label || "social"}
								className="hover:opacity-80 transition transform hover:scale-110"
							>
								{social.icon}
							</a>
						)}
					</div>}

				{/* Newsletter */}
				{(variant === "newsletter" || variant === "full") &&
					onNewsletterSubmit &&
					<form
						onSubmit={handleNewsletterSubmit}
						className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
					>
						<input
							type="email"
							placeholder={newsletterPlaceholder}
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="rounded-md p-2 flex-1 text-black"
						/>
						<button
							type="submit"
							className="bg-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition transform hover:scale-[1.05]"
						>
							Subscribe
						</button>
					</form>}

				{/* Copyright */}
				<div className="text-sm text-gray-400 text-center md:text-left mt-6">
					{copyrightText ||
						`© ${new Date().getFullYear()} ${companyName}. All rights reserved.`}
				</div>
			</div>
		</footer>
	);
};
