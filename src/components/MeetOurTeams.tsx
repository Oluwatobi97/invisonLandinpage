import * as React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import clsx from "clsx";

/* ---------------------------------------------------------
 * Types
 * --------------------------------------------------------- */

export type TeamVariant =
	| "grid"
	| "cards"
	| "carousel"
	| "minimal"
	| "centered";

export interface TeamSocial {
	type: string;
	href: string;
}

export interface TeamMember {
	name: string;
	role?: string;
	photoSrc?: string;
	bio?: string;
	social?: TeamSocial[];
}

export interface MeetOurTeamSectionProps {
	variant?: TeamVariant;
	headline?: React.ReactNode;
	subheadline?: React.ReactNode;
	members: TeamMember[];
	className?: string;
}

/* ---------------------------------------------------------
 * Layout Styles
 * --------------------------------------------------------- */

const VARIANT_STYLES: Record<TeamVariant, string> = {
	grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
	cards: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
	carousel: "flex gap-6 overflow-x-auto snap-x snap-mandatory",
	minimal: "flex flex-col gap-4",
	centered: "flex flex-wrap justify-center gap-8"
};

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
			ease: easeOut
		}
	}
};

/* ---------------------------------------------------------
 * Component
 * --------------------------------------------------------- */

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({
	variant = "grid",
	headline,
	subheadline,
	members,
	className
}) => {
	return (
		<section
			role="region"
			aria-label="Meet our team"
			className={clsx("w-full py-16 px-6 md:px-12 bg-white", className)}
		>
			<div className="mx-auto max-w-7xl flex flex-col gap-12">
				{/* Headline */}
				{(headline || subheadline) &&
					<motion.div
						variants={itemVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className={clsx(
							"flex flex-col gap-4",
							variant === "centered" && "items-center text-center"
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
					</motion.div>}

				{/* Members */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className={clsx(VARIANT_STYLES[variant])}
				>
					{members.map((member, index) =>
						<TeamMemberCard key={index} member={member} variant={variant} />
					)}
				</motion.div>
			</div>
		</section>
	);
};

/* ---------------------------------------------------------
 * Member Renderer
 * --------------------------------------------------------- */

interface TeamMemberCardProps {
	member: TeamMember;
	variant: TeamVariant;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, variant }) => {
	const avatar =
		member.photoSrc &&
		<img
			src={member.photoSrc}
			alt={member.name}
			className={clsx(
				"rounded-full object-cover",
				variant === "cards" ? "w-28 h-28" : "w-32 h-32"
			)}
		/>;

	if (variant === "minimal") {
		return (
			<motion.p
				variants={itemVariants}
				className="text-sm font-medium text-slate-700"
			>
				{member.name}
				{member.role && ` — ${member.role}`}
			</motion.p>
		);
	}

	return (
		<motion.div
			variants={itemVariants}
			whileHover={variant === "cards" ? { y: -6 } : undefined}
			className={clsx(
				"flex flex-col items-center text-center gap-3",
				variant === "cards" &&
					"rounded-lg border p-6 bg-white shadow-sm hover:shadow-lg transition",
				variant === "carousel" && "shrink-0 snap-start w-64"
			)}
		>
			{avatar}

			<h3 className="text-lg font-semibold text-slate-900">
				{member.name}
			</h3>

			{member.role &&
				<p className="text-sm text-slate-600">
					{member.role}
				</p>}

			{variant === "cards" &&
				member.bio &&
				<p className="text-sm text-slate-500">
					{member.bio}
				</p>}

			{variant === "cards" &&
				member.social &&
				<div className="flex gap-3 mt-2">
					{member.social.map((s, i) =>
						<a
							key={i}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-400 hover:text-slate-700 transition"
						>
							{s.type}
						</a>
					)}
				</div>}
		</motion.div>
	);
};
