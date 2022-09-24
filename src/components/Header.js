import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="shadow-sm py-4 ">
			<div className="max-width flex items-center justify-between">
				<Link to={"/"}>Where in the World?</Link>
				<div className="flex items-center justify-between cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
					<h3 className="mx-3">Dark Mode</h3>
				</div>
			</div>
		</div>
	);
};

export default Header;
