import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
	title: string;
	backLink: string;
}

const Header = ({ title, backLink }: HeaderProps) => {
	return (
		<div className="flex h-full bg-neutral-950 rounded-[30px] w-full max-w-full">
			<div className="flex flex-col p-4 h-full w-full max-w-full rounded-[30px] bg-[linear-gradient(109deg,_#ffffff14,_transparent)]">
				<div className="flex items-center justify-between">
					<Link
						to={backLink}
						className="bg-white rounded-full p-2 cursor-pointer"
					>
						<ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-black" />
					</Link>
					<div className="flex-grow mx-4">
						<Separator />
					</div>
					<h1 className="font-bold text-2xl">{title}</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
