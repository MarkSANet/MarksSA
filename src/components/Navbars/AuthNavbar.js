/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import Brand from "components/SVGR/Brand.js";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link className="text-primary text-sm font-medium leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase" to="/">
							<Brand />
						</Link>
						<PagesDropdown />
					</div>
					<div
						className={
							"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
							(navbarOpen ? " block rounded shadow-lg" : " hidden")
						}
						id="example-navbar-warning">
						<ul className="flex flex-col lg:flex-row list-none mr-auto">
							<li className="flex items-center">
								<a
									className="text-primary border-transparent border-b-2 transition duration-500 ease-out hover:border-secondary px-3 py-4 lg:py-2 flex items-center text-base uppercase font-medium"
									href="#"
									>
									الصفحة الرئيسية
								</a>
							</li>

							<li className="flex items-center">
								<a
									className="text-primary border-transparent border-b-2 transition duration-500 ease-out hover:border-secondary px-3 py-4 lg:py-2 flex items-center text-base uppercase font-medium"
									href="#"
									>
									الخدمات
								</a>
							</li>
							<li className="flex items-center">
								<a
									className="text-primary border-transparent border-b-2 transition duration-500 ease-out hover:border-secondary px-3 py-4 lg:py-2 flex items-center text-base uppercase font-medium"
									href="#"
									>
									الأعمال
								</a>
							</li>
							<li className="flex items-center">
								<a
									className="text-primary border-transparent border-b-2 transition duration-500 ease-out hover:border-secondary px-3 py-4 lg:py-2 flex items-center text-base uppercase font-medium"
									href="#"
									>
									العملاء
								</a>
							</li>
							<li className="flex items-center">
								<a
									className="text-primary border-transparent border-b-2 transition duration-500 ease-out hover:border-secondary px-3 py-4 lg:py-2 flex items-center text-base uppercase font-medium"
									href="#"
									>
									التواصل
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
