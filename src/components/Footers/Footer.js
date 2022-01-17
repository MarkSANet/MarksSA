import React from "react";
import BrandIcon from "components/SVGR/Brand-Icon";

export default function Footer() {
	return (
		<>
			<footer className="relative pt-8 pb-6">
				<div className="mx-auto">
					<div className="flex flex-wrap text-center lg:text-right">
						<div className="w-full h-64 lg:w-6/12 px-4 bg-black-dark flex flex-col justify-center lg:pr-16">
							<p className="text-xl leading-8 text-tritary font-medium">مؤسسة علامات لخدمات الأعمال</p>
							<p className="text-xl leading-8 text-white font-medium">سجل تجاري 4030403889</p>
							<p className="text-xl leading-8 text-white font-medium">الرقم الضريبي 3022615781</p>
						</div>
						<div className="w-full lg:w-6/12 px-4">
							<div className="grid flex-wrap items-top mb-6">
								<div className="w-full lg:w-4/12 px-4 ml-auto">
									<span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
									<ul className="list-unstyled">
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="#">
												About Us
											</a>
										</li>
									</ul>
								</div>
								<div className="w-full lg:w-4/12 px-4">
									<span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
									<ul className="list-unstyled">
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="#">
												Terms & Conditions
											</a>
										</li>
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="#">
												Privacy Policy
											</a>
										</li>
										<li>
											<a
												className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
												href="#">
												Contact Us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center h-40">
						<div className="w-5/6 pr-4 md:pr-16">
							<div className="text-base leading-7 text-black-soft py-1">
								جميع الحقوق محفوظة لمارك لخدمات الأعمال {new Date().getFullYear()}
							</div>
						</div>
						<div className="w-1/6 pl-10" dir="ltr">
							<BrandIcon />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
