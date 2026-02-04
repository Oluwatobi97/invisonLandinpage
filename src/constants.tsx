import { DoorOpen, NotebookPen, School2 } from "lucide-react";
import type { HowWeWorkStep } from "./components/HowWeWork";
import type { TeamMember } from "./components/MeetOurTeams";

export const links = [
	{ href: "#about", label: "About" },
	{ href: "#feature", label: "Feature" },
	{ href: "#faq", label: "Faq" },
	{ href: "#pricing", label: "Pricing" }
];

export const features = [
	{
		title: "High-Converting Landing Pages",
		description:
			"Conversion-focused landing pages designed to turn visitors into customers using clear messaging, speed optimization, and modern UI/UX practices",
		icon: <School2 />
	},
	{
		title: "Full-Stack Solutions",
		description:
			"End-to-end web applications built with scalable architecture, secure authentication, and optimized databases.",
		icon: <NotebookPen />
	},
	{
		title: "Web, Mobile & Desktop Applications",
		description:
			"Custom applications tailored to your business needs, available across web, mobile, and desktop platforms",
		icon: <DoorOpen />
	},
	{
		title: "Business Automation Solutions",
		description:
			"We automate repetitive business processes to reduce manual work, improve accuracy, and save operational time.",
		icon: <DoorOpen />
	},
	{
		title: "E-Services for Schools",
		description:
			"Digital platforms for schools including admissions systems, online exams, portals, result management, and internal administration tool",
		icon: <DoorOpen />
	},
	{
		title: "Enterprise & Financial Solutions",
		description:
			"Business-focused solutions for banking-related operations, internal management systems, reporting tools, and secure data workflows.",
		icon: <DoorOpen />
	}
];

export const pricingPlan = [
	{
		name: "free",
		price: "0$",
		billingCycle: "Montly",
		features: [
			"Register 10 students at the same time",
			"Set 10 exam questions",
			"can manage only one school"
		],
		cta: { label: "Get Started", href: "#", varaint: "primary" }
	},
	{
		name: "Basic",
		price: "30$",
		billingCycle: "Montly",
		features: [
			"Register 20 students at the same time",
			"Set 20 exam questions",
			"can manage only one school"
		],
		cta: { label: "Get Started", href: "#", varaint: "primary" },
		recommended: true
	},
	{
		name: "Premuim",
		price: "40$",
		billingCycle: "Montly",
		features: [
			"Register 30 students at the same time",
			"Set 30 exam questions",
			"can manage only five school"
		],
		cta: { label: "Get Started", href: "#", varaint: "primary" }
	}
	// {
	// 	name: "Advance",
	// 	price: "60$",
	// 	billingCycle: "Montly",
	// 	features: [
	// 		"Register unlimited students at the same time",
	// 		"Set unlimted exam questions",
	// 		"can manage only 10 school"
	// 	],
	// 	cta: { label: "Get Started", href: "#", varaint: "primary" }
	// }
];




export const faqs = [
	{
		question: "What types of businesses do you work with?",
		answer:
			"We work with startups, growing businesses, agencies, schools, and enterprises looking to improve efficiency and conversions."
	},
	{
		question: "Do you build custom solutions or templates?",
		answer:
			"Timelines depend on project scope, but we prioritize fast and efficient delivery without compromising quality"
	},
	{
		question: " How long does project delivery take?",
		answer:
			"Timelines depend on project scope, but we prioritize fast and efficient delivery without compromising quality."
	},
	{
		question: "Can you handle long-term projects or ongoing support?",
		answer:
			"Yes. We offer optional long-term support, monitoring, and system improvements"
	},
	{
		question: "Do you focus on design or functionality?",
		answer:
			"We focus on business solutions first—design and functionality work together to solve real problems"
	},
	{
		question: "Can you integrate with existing systems?",
		answer:
			"Yes. We integrate with existing tools, databases, and third-party services when required"
	}
];


export const howWeWork: HowWeWorkStep[] = [
    {
        title: "Project Briefing",
        description:"We discuss your business goals, challenges, and expectations in detail",

    },
      {
        title: "Timeline & Scope Definition",
        description:"We define the project scope, delivery timeline, and milestones clearly.",
        
    },
        {
        title: "Development & Updates",
        description:"We build your solution using scalable and maintainable code while providing regular progress update",
        
    },
    {
        title: "Final Delivery",
        description:"The completed solution is delivered, tested, and prepared for real-world use",
        
    },
      {
        title: "Optional Long-Term Support",
        description:"Continuous monitoring, updates, and improvements based on business growth",
        
    }
]

export const ourProcess: HowWeWorkStep[] = [
    {
        title: "We discover and analyze your business problems",

    },
      {
        title: "We research available and proven solutions",
        
    },
        {
            title: "We design the most efficient system for your needs",
        
    },
    {
        title: "We build scalable, clean, and high-quality code",
        
    },
      {
        title: "Optional continuous monitoring and performance updates",
        
    }
]



export const teamMember: TeamMember[] = [
    {
        name: "Kayode Odufote",
        bio: "kayode odufote is fullstack developer with strong expertise in the backend field, he has built multiple projects",
        role: "Ceo",
        
    },
     {
        name: "Tobi Syanbola",
        bio: " fullstack developer with strong expertise in the backend field, he has built multiple projects",
        role: "Project Manager/software egnr",
        
    },
      {
        name: "Demilade Eniade",
        bio: "is fullstack developer with strong expertise in the backend field, he has built multiple projects",
        role: "Software/engr",
        
    },
       {
        name: "Inioluwa Oluwafemi",
        bio: "kayode odufote is fullstack developer with strong expertise in the backend field, he has built multiple projects",
        role: "Graphics Designer",
        
    }
]