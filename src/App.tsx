import { DoorOpen, NotebookPen, School2 } from "lucide-react";
import { AboutSection } from "./components/About";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/Faq";
import { Features } from "./components/Feature";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
	const links = [
		{ href: "#about", label: "About" },
		{ href: "#feature", label: "Feature" },
		{ href: "#faq", label: "Faq" },
		{ href: "#pricing", label: "Pricing" }
	];

	const features = [
		{
			title: "School Creation",
			description:
				"Owner are able to create schools, then students can register",
			icon: <School2 />
		},
		{
			title: "Exams",
			description:
				"Owners are able to create exams for registered students to write",
			icon: <NotebookPen />
		},
		{
			title: "Admission",
			description: "Owner of the creates schools can manage admission status",
			icon: <DoorOpen />
		}
	];

	// const pricingPlan = [
	// 	{
	// 		name: "free",
	// 		price: "0$",
	// 		billingCycle: "Montly",
	// 		features: [
	// 			"Register 10 students at the same time",
	// 			"Set 10 exam questions",
	// 			"can manage only one school"
	// 		],
	// 		cta: { label: "Get Started", href: "#", varaint: "primary" }
	// 	},
	// 	{
	// 		name: "Basic",
	// 		price: "30$",
	// 		billingCycle: "Montly",
	// 		features: [
	// 			"Register 20 students at the same time",
	// 			"Set 20 exam questions",
	// 			"can manage only one school"
	// 		],
	// 		cta: { label: "Get Started", href: "#", varaint: "primary" },
	// 		recommended: true
	// 	},
	// 	{
	// 		name: "Premuim",
	// 		price: "40$",
	// 		billingCycle: "Montly",
	// 		features: [
	// 			"Register 30 students at the same time",
	// 			"Set 30 exam questions",
	// 			"can manage only five school"
	// 		],
	// 		cta: { label: "Get Started", href: "#", varaint: "primary" }
	// 	}
	// 	// {
	// 	// 	name: "Advance",
	// 	// 	price: "60$",
	// 	// 	billingCycle: "Montly",
	// 	// 	features: [
	// 	// 		"Register unlimited students at the same time",
	// 	// 		"Set unlimted exam questions",
	// 	// 		"can manage only 10 school"
	// 	// 	],
	// 	// 	cta: { label: "Get Started", href: "#", varaint: "primary" }
	// 	// }
	// ];

	const faqs = [
		{
			question: "What is school software",
			answer:
				"School software is a solution built for school owners or managers to simplify and make easy complex school proccess. School software provides tools that are accecible and affordable, also removes the cost of maintaince."
		},
		{
			question: "Can i recive payments through school software",
			answer:
				"No, you can't just do that. in the upcoming updates thos features would be avaliable"
		},
		{
			question: "Can each student have an account",
			answer:
				"No, you can't just do that. in the upcoming updates thos features would be avaliable"
		},
		{
			question: "Can each student have an account",
			answer:
				"No, you can't just do that. in the upcoming updates thos features would be avaliable"
		},
		{
			question: "Can studnents check thier results",
			answer:
				"No, you can't just do that. in the upcoming updates thos features would be avaliable"
		},
		{
			question: "Can teachers also manage academic affairs",
			answer:
				"No, you can't just do that. in the upcoming updates thos features would be avaliable"
		}
	];
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<div>
				<Navbar
					links={links}
					cta={{ href: "#", label: "Get Started", variant: "primary" }}
					logo={
						<h1 className="text-3xl font-bold text-slate-700">
							School Software
						</h1>
					}
					variant="sticky"
				/>
			</div>
			<div className="w-full h-full md:h-screen pt-28 bg-slate-50">
				<Hero
					headline="Build Your Online School"
					subheadline="Transfer repated tasks or school processes with the provided tools we provide"
					variant="centered"
					cta={[{ href: "#", label: "Get Started", variant: "primary" }]}
				/>
			</div>
			<AboutSection
				headline="About School Software"
				variant="centered"
				subheadline={
					"School software is a solution built for school owners or managers to simplify and make easy complex school proccess. School software provides tools that are accecible and affordable, also removes the cost of maintaince."
				}
			/>
			<Features
				features={features}
				variant="grid"
				headline="Features"
				subheadline="create your school with schooic"
			/>
			<FAQ items={faqs} headline={"Faqs"} variant="grid" />
			<div className="mb-10">
				<CTA
					ctaPrimary={{ href: "#", label: "Get Started" }}
					headline="Build Your Online Admission System Now"
				/>
			</div>
		</div>
	);
}

export default App;
