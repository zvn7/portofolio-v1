import { FaCode } from "react-icons/fa6";
import avatar from "/src/assets/img/avatar.png";
import laptop from "/src/assets/img/laptop.png";
import Card from "@/components/molecules/Card";
import BlogCard from "@/components/molecules/BlogCard";
import ContactCard from "@/components/molecules/ContactCard";

function HomePage() {
	return (
		<div className="space-y-4 ">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-6 gap-y-6">
				<div className="flex items-center justify-center h-full bg-neutral-950 rounded-[30px] w-full max-w-full">
					<div className="flex flex-col items-center  h-full w-full max-w-full rounded-[30px] bg-[linear-gradient(109deg,_#ffffff14,_transparent)]">
						<div className="rounded-[30px] h-full flex flex-col  px-6 md:px-16 py-20 text-sm tracking-[0.3px]">
							<div className="font-medium leading-[17px] text-[silver]">
								Web Developer
							</div>
							<div className="text-3xl md:text-4xl font-medium leading-10 tracking-[0px] text-white mt-6">
								<span>
									<p>Ilham</p>
									<p>Maulana.</p>
								</span>
							</div>
							<div className="mt-6  text-neutral-400">
								<span>
									<p>Bringing Your Vision to Life Through Code.</p>
									<p>Designing with Purpose, Developing with Passion. 🚀</p>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-start gap-y-6 text-xs w-full">
					<div className="flex flex-col rounded-[30px] bg-neutral-950 w-full max-w-full">
						<div className="flex rounded-[30px] px-6 py-[17px] [background-image:linear-gradient(93deg,_#ffffff14,_transparent)]">
							<div className="flex h-[19px] items-center">
								<div className="flex h-full w-full flex-wrap items-center justify-center gap-x-[4.7px] gap-y-[4.7px] pb-[0.2px] leading-[19px]">
									<div className="mb-[0.2px] uppercase">
										<span className="font-medium leading-[19px]">
											<span className="text-neutral-400">
												Transforming ideas into reality
											</span>
											<span className="text-white italic"> Innovation</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-6 gap-y-6 font-medium">
						<Card
							title="About Me"
							image={avatar}
							imageAlt="Avatar"
							description="Explore the Path That Has Defined My Professional Growth and Personal Development"
							to="/about-me"
						/>
						<Card
							title="Projects"
							image={laptop}
							imageAlt="Laptop"
							description="Explore a Selection of My Projects That Reflect Innovation and Creativity"
							to="/projects"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-x-6 gap-y-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-x-6 gap-y-6">
					<BlogCard />
					<ContactCard />
				</div>
				<div className="items-center rounded-[30px] bg-neutral-950">
					<div className="rounded-[30px] bg-gradient-to-r from-white/10 to-transparent">
						<div className="relative flex flex-col items-center justify-center rounded-[30px] px-6 md:px-12 py-8 before:absolute before:inset-0 before:opacity-10 before:bg-no-repeat">
							<div className="w-full  flex-col items-center space-y-4">
								<FaCode className="w-16 h-16" />
								<div className="font-medium">
									<p className="text-white text-4xl">Let's Turn</p>
									<p className="text-white text-5xl">
										Ideas into
										<span className="text-blue-500 font-bold"> Reality.</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
