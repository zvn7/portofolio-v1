import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Header from "@/components/molecules/Header";
import { useEducations } from "@/hooks/useEducations";
import { formatMonthYear } from "@/utils/DateUtils";
import { useExperiences } from "@/hooks/useExperiences";
import { Loader2 } from "lucide-react";

function AboutPage() {
	const { data: educations, isLoading: isLoadingEducations } = useEducations();
	const { data: experiences, isLoading: isLoadingExperiences } =
		useExperiences();

	return (
		<div className="min-h-screen space-y-6">
			<Header title="About Me" backLink="/" />
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Who I Am</h2>
				<p className="text-white/80">
					Hi, I'm Ilham Maulana, a passionate web programmer and DevOps
					enthusiast with a strong interest in cybersecurity. I'm constantly
					learning and working on various projects that integrate technologies
					like Docker, Kubernetes, React, and TypeScript.
				</p>
			</section>

			<Separator className="mb-8" />

			{/* Education Section */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Education</h2>
				{isLoadingEducations ? (
					<div className="flex items-center justify-center text-white">
						<Loader2 className="h-6 w-6 animate-spin" />
					</div>
				) : (
					<ul className="text-white/80 space-y-4">
						{educations?.map((education) => (
							<div>
								<li key={education.id}>
									<strong>{education.institution}</strong> –{" "}
									{education.fieldOfStudy ?? "N/A"} (
									{formatMonthYear(education.startDate)} -{" "}
									{education.endDate
										? formatMonthYear(education.endDate)
										: "Present"}
									)
								</li>
								<li>{education.description}</li>
							</div>
						))}
					</ul>
				)}
			</section>

			<Separator className="mb-8" />

			{/* Experience Section */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Experience</h2>
				{isLoadingExperiences ? (
					<div className="flex items-center justify-center text-white">
						<Loader2 className="h-6 w-6 animate-spin" />
					</div>
				) : (
					<ul className="text-white/80 space-y-4">
						{experiences?.map((experiences) => (
							<div>
								<li key={experiences.id}>
									<strong>{experiences.company}</strong> –{" "}
									{experiences.position ?? "N/A"} (
									{formatMonthYear(experiences.startDate)} -{" "}
									{experiences.endDate
										? formatMonthYear(experiences.endDate)
										: "Present"}
									)
								</li>
								<li>{experiences.description}</li>
							</div>
						))}
					</ul>
				)}
			</section>

			<Separator className="mb-8" />

			{/* Social Media Section */}
			<section className="mb-8">
				<h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
				<div className="flex space-x-4">
					<a
						href="https://linkedin.com/in/ilham-maul"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white/80 hover:text-white transition"
					>
						<FaLinkedin className="h-6 w-6" />
					</a>
					<a
						href="https://github.com/zvn7"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white/80 hover:text-white transition"
					>
						<FaGithub className="h-6 w-6" />
					</a>
					<a
						href="https://instagram.com/ilhammaul7"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white/80 hover:text-white transition"
					>
						<FaInstagram className="h-6 w-6" />
					</a>
				</div>
			</section>
		</div>
	);
}

export default AboutPage;
