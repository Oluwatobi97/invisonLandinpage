import { AboutSection } from "./components/About";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/Faq";
import { Features } from "./components/Feature";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { FooterSection } from "./components/footer";
import { HowWeWorkSection } from "./components/HowWeWork";
import {
	links,
	features,
	faqs,
	howWeWork,
	ourProcess,
	teamMember
} from "./constants";
import reactSvg from "./assets/react.svg";
import { MeetOurTeamSection } from "./components/MeetOurTeams";
function App() {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<div>
				<Navbar
					links={links}
					cta={{ href: "#", label: "Get Started", variant: "primary" }}
					logo={
						<h1 className="text-3xl font-bold text-slate-700">Inovation Hub</h1>
					}
					variant="sticky"
				/>
			</div>
			<div className="w-full h-full md:h-screen  bg-slate-50">
				<Hero
					headline="Build Your Web Solution With Inovation Hub"
					subheadline="We design and develop business-focused digital solutions that increase conversions, automate processes, and help your business scale faster"
					variant="full-screen"
					cta={[{ href: "#", label: "Start Your Project", variant: "primary" }]}
				/>
			</div>
			<AboutSection
				headline="ABOUT INVISONHUB"
				variant="centered"
				subheadline={`We focus on building digital solutions for businesses, not just applications.
							Our approach is centered on increasing business conversions, automating repetitive business processes, and simplifying complex workflows to save time and improve efficiency.
							Rather than focusing only on design or features, we identify the real problems within your business operations and build scalable, high-quality solutions that solve them.
							Our goal is to help businesses grow faster by delivering reliable systems with speed, clarity, and long-term value.`}
			/>
			<Features
				features={features}
				variant="grid"
				headline="SERVICES"
				subheadline="Our Services"
			/>
			<HowWeWorkSection
				steps={howWeWork}
				headline="HOW WE WORK"
				subheadline="How We Work"
				variant="cards"
			/>
			<HowWeWorkSection
				steps={ourProcess}
				headline="OUR PROCESS"
				subheadline="Our Problem-Solving Approach"
				variant="centered"
				media={<img src={reactSvg} alt="" />}
			/>
			<FAQ
				items={faqs}
				headline={"FAQS"}
				subheadline="Frequently Asked Questions"
				variant="accordion"
			/>
			<MeetOurTeamSection
				headline={"MEET OUR TEAM"}
				subheadline="Meet Our Team"
				members={teamMember}
				variant="cards"
			/>
			<div className="mb-10">
				<CTA
					ctaPrimary={{ href: "#", label: "Start Your Project" }}
					headline="Ready to Build a Solution for Your Business?"
					subheadline="Let’s turn your business challenges into scalable digital solutions"
				/>
			</div>
			<FooterSection
				companyName="TWT SCHOOL SOFTWARE"
				links={links}
				variant="simple"
			/>
		</div>
	);
}

export default App;
