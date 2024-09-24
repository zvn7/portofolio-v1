import { FaCircleArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProfileCard = () => {
	return (
		<div className="items-center rounded-[30px] bg-neutral-950">
			<div className="flex flex-col items-center rounded-[30px] [background-image:linear-gradient(119deg,_#ffffff14,_transparent)]">
				<div className="flex max-h-full max-w-full flex-col items-start gap-y-[15px] rounded-[30px] px-6 pb-8 pt-6 before:absolute before:inset-0 before:z-[-1] before:bg-no-repeat before:opacity-10 before:[background-position:-90.59px_0px] before:[background-size:169%_100%] before:[content:'']">
					<div className="flex h-32 flex-shrink-0 flex-col items-center rounded-[30px] bg-neutral-950">
						<div className="-mb-0.5 flex h-32 flex-shrink-0 flex-col items-center rounded-[30px] py-px [background-image:linear-gradient(109deg,_#ffffff0f,_transparent)]">
							<div className="grid grid-cols-2 items-center justify-center gap-x-5 rounded-[30px] px-[15px] py-[22px] [background-image:linear-gradient(109deg,_#ffffff07,_transparent)]">
								<div className="flex h-20 w-20 flex-shrink-0 items-center rounded-full">
									<Link to="https://github.com/zvn7" target="_blank">
										<div className="flex h-full w-full flex-shrink-0 flex-col items-center overflow-clip rounded-[41px] border border-solid border-x-white/10 border-y-white/10 bg-transparent [box-shadow:_0px_4px_24px_-1px_rgba(0,0,0,0.1)] hover:bg-white hover:text-black">
											<div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full p-6 backdrop-blur-[24] [background-image:linear-gradient(120deg,_#ffffff0c,_transparent)]">
												<FaGithub className="w-8 h-8" />
											</div>
										</div>
									</Link>
								</div>
								<div className="flex h-20 w-20 flex-shrink-0 items-center rounded-full">
									<Link to="https://www.linkedin.com/in/ilham-maul/" target="_blank">
										<div className="flex h-full w-full flex-shrink-0 flex-col items-center overflow-clip rounded-[41px] border border-solid border-x-white/10 border-y-white/10 bg-transparent [box-shadow:_0px_4px_24px_-1px_rgba(0,0,0,0.1)] hover:bg-white hover:text-black">
											<div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full p-6 backdrop-blur-[24] [background-image:linear-gradient(120deg,_#ffffff0c,_transparent)]">
												<FaLinkedinIn className="w-8 h-8" />
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full">
						<div className="flex justify-between items-center">
							<div className="text-xl leading-6 text-white">
								<div className="text-xs leading-[14px] text-[silver]">
									Stay Connect With Me
								</div>
								<div className="text-xl leading-6 text-white">Contact Me</div>
							</div>
							<Link
								to="/contact-me"
								className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-500"
							>
								<FaCircleArrowRight className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
