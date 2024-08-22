import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar bg-slate-800">
			<Link href="/" className="btn btn-ghost text-base">
				Next.js
			</Link>
			<Link href="/users" className="btn btn-ghost text-base">
				Users
			</Link>
			<Link href="/admin" className="btn btn-ghost text-base">
				Admin
			</Link>
			<div className="ms-auto">
				<button className="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block h-5 w-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
