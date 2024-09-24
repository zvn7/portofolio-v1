import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

interface CardProps {
	title: string;
	image: string;
	imageAlt: string;
	description: string;
	to: string;
}

export default function Card({
	title,
	image,
	imageAlt,
	description,
	to,
}: CardProps) {
	return (
		<div className="flex flex-col items-center rounded-[30px] bg-neutral-950 w-full max-w-full">
			<div className="flex flex-col items-center rounded-[30px] bg-gradient-to-r from-white/10 to-transparent w-full">
				<div className="relative z-0 flex w-full flex-col items-start justify-center gap-y-4 rounded-[30px] px-6 pb-8 pt-6">
					<div className="w-full">
						<div className="flex justify-between items-center">
							<div className="text-xl leading-6 text-white">{title}</div>
							<Link
								to={to}
								className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-500"
							>
								<FaCircleArrowRight className="w-6 h-6" />
							</Link>
						</div>
						<div>
							<img
								src={image}
								className="w-24 h-24 md:w-32 md:h-32 object-cover"
								alt={imageAlt}
							/>
							<p className="text-neutral-400 mt-2">{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
