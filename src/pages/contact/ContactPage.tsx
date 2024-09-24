import Header from "@/components/molecules/Header";
import {
	ArrowUpRight,
	Github,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/organisms/ContactForm";

const ContactPage = () => {
	return (
		<div className="min-h-screen space-y-6">
			<Header title="Contact Me" backLink="/" />
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-2">Get in touch</h2>
					<p className="text-gray-400">
						If you have any questions or comments, please don't hesitate to
						contact me. I'll do my best to get back to you as soon as possible.
					</p>
				</div>

				<div className="mt-6">
					<h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
					<ContactForm />
				</div>

				<div className="space-y-4">
					<p className="text-xl font-bold mt-6">Find me on</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
						{/* GitHub */}
						<a
							href="https://github.com/zvn7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-[linear-gradient(109deg,_#ffffff14,_transparent)] p-6 rounded-lg shadow-md flex justify-between items-center">
								<div className="text-left">
									<h3 className="text-lg font-bold ">Explore the code</h3>
									<p className="text-sm text-gray-500">
										Dive into the source code of my projects and see what I'm
										building on GitHub.
									</p>
									<Button className="mt-4 bg-black text-white">
										Go to GitHub <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-black rounded-full p-4">
									<Github className="w-8 h-8 text-white" />
								</div>
							</div>
						</a>

						{/* LinkedIn */}
						<a
							href="https://www.linkedin.com/in/ilham-maul"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-[linear-gradient(109deg,_#ffffff14,_transparent)] p-6 rounded-lg shadow-md flex justify-between items-center">
								<div className="text-left">
									<h3 className="text-xl font-bold">Connect Professionally</h3>
									<p className="text-sm text-gray-500">
										Join my network on LinkedIn to collaborate and explore my
										professional journey.
									</p>
									<Button className="mt-4 bg-black">
										Go to LinkedIn <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-blue-600 rounded-full p-4 mt-4 md:mt-0 md:ml-4">
									<Linkedin className="w-8 h-8 text-white" />
								</div>
							</div>
						</a>

						{/* Twitter */}
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-[linear-gradient(109deg,_#ffffff14,_transparent)] p-6 rounded-lg shadow-md flex justify-between items-center">
								<div className="text-left">
									<h3 className="text-xl font-bold ">Follow Me on Twitter</h3>
									<p className="text-sm text-gray-500">
										Stay updated with my latest projects and thoughts by
										following me on Twitter.
									</p>
									<Button className="mt-4 bg-black">
										Go to Twitter <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-blue-700 rounded-full p-4 mt-4 md:mt-0 md:ml-4">
									<Twitter className="w-8 h-8 text-white" />
								</div>
							</div>
						</a>

						{/* Instagram */}
						<a
							href="https://www.instagram.com/ilhammaul7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="bg-[linear-gradient(109deg,_#ffffff14,_transparent)] p-6 rounded-lg shadow-md flex justify-between items-center">
								<div className="text-left">
									<h3 className="text-xl font-bold ">Follow My Journey</h3>
									<p className="text-sm text-gray-500">
										Follow me on Instagram for behind-the-scenes looks and
										updates on my latest projects.
									</p>
									<Button className="mt-4 bg-black">
										Go to Instagram <ArrowUpRight className="ml-2" />
									</Button>
								</div>
								<div className="text-4xl bg-red-700 rounded-full p-4 mt-4 md:mt-0 md:ml-4">
									<Instagram className="w-8 h-8 text-white" />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
