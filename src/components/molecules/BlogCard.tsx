import { FaCircleArrowRight } from "react-icons/fa6";
import blog from "/src/assets/img/blog.png";
import { Link } from "react-router-dom";

const BlogCard = () => {
	return (
		<div className="items-center rounded-[30px] bg-neutral-950">
			<div className="flex flex-col items-center rounded-[30px] bg-neutral-950 w-full max-w-full">
				<div className="flex flex-col items-center rounded-[30px] bg-gradient-to-r from-white/10 to-transparent w-full">
					<div className="relative z-0 flex w-full flex-col items-start justify-center gap-y-4 rounded-[30px] px-6 pb-8 pt-6">
						<div className="w-full flex flex-col items-center">
							<div>
								<img
									src={blog}
									className="w-52 h-52 md:w-48 md:h-32 object-cover"
									alt="Blog"
								/>
							</div>
							<div className="flex justify-between items-center w-full mt-4">
								<div className="flex flex-col">
									<div className="text-xs leading-[14px] text-[silver]">
										My Journey in Development
									</div>
									<div className="text-xl leading-6 text-white">Blog</div>
								</div>
								<Link
									to="https://createdaam.blogspot.com/"
									target="_blank"
									className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-500"
								>
									<FaCircleArrowRight className="w-6 h-6" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
