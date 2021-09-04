import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
	return (
		<>
			<Navbar transparent />
			<main>
				<div className="relative flex content-center items-center justify-center min-h-screen-50">
					<div className="absolute top-0 w-full h-full bg-center bg-cover"></div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
								<div className="pr-12">
									<h1 className="text-secondary font-black text-7.5xl leading-16 mb-8">
										علامة
										<br />
										في عالم الأعمال
									</h1>
									<h1 className="text-black-soft font-medium text-6xl leading-14">نجعل من إسمك علامة</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section className="pb-6">
					<div className="container mx-auto">
						<div className="flex flex-wrap mb-24">
							<div className="w-full px-4">
								<p className="mb-3 text-black-soft">رؤيتنا</p>
								<h2 className="text-4xl font-black text-black-dark leading-11 mb-10">العالم في رؤيتنا</h2>
								<p className="pr-14 text-lg leading-9 text-black-soft">
									نؤمن أن الهوية ليست فقط عنصرا واحدا بل هي مجموعة عناصر اجتمعت وترابطت ، لتصبح منظومة. متكاملة ترمز لجهة معينة
									ورؤيتها ومنتجاتها ..
									<br />
									فذالك العنصر الواحد يؤثر تأثيرا قويا على جميع العناصر الباقية
									<br />
									<br />
									لذلك إعتمدنا من خلال خبرات فريقنا المنتقى بعناية على قدرتنا لرؤية العلامات التجارية بشكل شامل فأصبحنا فريقاً واحد
									ذا نظرة 360 درجة لنتميز بذلك على فهم أشمل وأوضح لهويات شركائنا و عملائنا وتقديم حلول إبداعية.
									<br />
									ونضمن لك حضورا فريداً وراسخاً في عالم الأعمال، نمضي معاً في رحلة تبدأ من بداية سطر الحرف و إلى كيان متكامل، صانعين
									بذلك قوة إستراتيجية وتأثير يجسد تطلعاتكم و يجعلكم علامة فارقة في عالم الأعمال
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-48">
					<div className="container mx-auto">
						<div className="flex flex-wrap mb-16">
							<div className="w-full px-4">
								<p className="mb-3 text-black-soft">خدماتنا</p>
								<h2 className="text-4xl font-black text-black-dark leading-11 mb-10">
									نمضي معاً في رحلة تبدأ من بداية سطر الحرف إلى كيان متكامل
								</h2>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="w-full md:w-2/12 lg:mb-0 mb-12 px-4">
								<div className="text-right mt-6">
									<button
										className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button">
										Send Message
									</button>
								</div>
							</div>
							<div className="w-full md:w-10/12 lg:mb-0 mb-12 px-4">
								<div className="flex flex-wrap">
									<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
										<div className="px-6">
											<img
												alt="..."
												src={require("assets/img/team-1-800x800.jpg").default}
												className="shadow-lg rounded-full mx-auto max-w-120-px"
											/>
											<div className="pt-6 text-center">
												<h5 className="text-xl font-bold">Ryan Tompson</h5>
												<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Web Developer</p>
												<div className="mt-6">
													<button
														className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-twitter"></i>
													</button>
													<button
														className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-facebook-f"></i>
													</button>
													<button
														className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-dribbble"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
										<div className="px-6">
											<img
												alt="..."
												src={require("assets/img/team-2-800x800.jpg").default}
												className="shadow-lg rounded-full mx-auto max-w-120-px"
											/>
											<div className="pt-6 text-center">
												<h5 className="text-xl font-bold">Romina Hadid</h5>
												<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Marketing Specialist</p>
												<div className="mt-6">
													<button
														className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-google"></i>
													</button>
													<button
														className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-facebook-f"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
										<div className="px-6">
											<img
												alt="..."
												src={require("assets/img/team-3-800x800.jpg").default}
												className="shadow-lg rounded-full mx-auto max-w-120-px"
											/>
											<div className="pt-6 text-center">
												<h5 className="text-xl font-bold">Alexa Smith</h5>
												<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">UI/UX Designer</p>
												<div className="mt-6">
													<button
														className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-google"></i>
													</button>
													<button
														className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-twitter"></i>
													</button>
													<button
														className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-instagram"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
										<div className="px-6">
											<img
												alt="..."
												src={require("assets/img/team-4-470x470.png").default}
												className="shadow-lg rounded-full mx-auto max-w-120-px"
											/>
											<div className="pt-6 text-center">
												<h5 className="text-xl font-bold">Jenna Kardi</h5>
												<p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">Founder and CEO</p>
												<div className="mt-6">
													<button
														className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-dribbble"></i>
													</button>
													<button
														className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-google"></i>
													</button>
													<button
														className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-twitter"></i>
													</button>
													<button
														className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
														type="button">
														<i className="fab fa-instagram"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-48">
					<div className="mx-auto">
						<div className="flex flex-wrap mb-16">
							<div className="w-full md:w-5/12 px-4">
								<p className="mb-3 text-black-soft">أعمالنا</p>
								<h2 className="text-4xl font-black text-black-dark leading-11 mb-10">ما يحدث من خلال علامة مختلف</h2>
							</div>
							<div className="w-full md:w-7/12">
								<div className="bl-container-padding space-x-4 carousel carousel-end">
									<div className="carousel-item ml-4">
										<div className="w-361-px h-450-px bg-black-light hover:bg-secondary"></div>
									</div>
									<div className="carousel-item">
										<img src="https://picsum.photos/id/502/256/144" />
									</div>
									<div className="carousel-item">
										<img src="https://picsum.photos/id/503/256/144" />
									</div>
									<div className="carousel-item">
										<img src="https://picsum.photos/id/504/256/144" />
									</div>
									<div className="carousel-item">
										<img src="https://picsum.photos/id/505/256/144" />
									</div>
									<div className="carousel-item">
										<img src="https://picsum.photos/id/506/256/144" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-28">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap pr-14">
							<div className="w-full md:w-1/6">
								<h2 className="text-4xl font-black text-black-dark leading-11 mb-10">عملائنا</h2>
							</div>
							<div className="w-full md:w-5/6">
								<p className="text-lg leading-9 text-black-soft mb-28">
									لا ننكر من خلال تاريخنا التعاوني مع شركانا في القطاعات الحكومية و الخاصة أكسبنا الكثير من المهارات وفهم إطار العمل
									والنظرة الإستراتيجية التي تعول عليها تلك الجهات بشكل عام{" "}
									<b>و شركانا بشكل خاص ونعلم جيدا انها ميزة ثمينة تضيف لأعمالنا .. الإتقان .. الإبداع .. الإنجاز</b>
								</p>
							</div>

							<div className="w-full mx-auto md:pr-8">
								<img alt="Customers Logos" src={require("assets/img/Customers@2x.png").default}/>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-20">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center pr-14">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<h2 className="text-4xl font-black text-black-dark leading-11 mb-16">للتواصل معنا</h2>
								<p className="text-lg leading-9 text-black-soft mb-28">نسعد بتواصلكم معنا في اي وقت من خلال القنوات التالية</p>
								<div className="flex flex-wrap justify-evenly items-stretch content-evenly">
									<div className="w-1/2 mb-5">
										<p className="text-base leading-5 text-secondary">رقم الهاتف</p>
										<p className="text-xl leading-9 text-black-dark">0507800439</p>
									</div>
									<div className="w-1/2 mb-5">
										<p className="text-base leading-5 text-secondary">الإيميل</p>
										<p className="text-xl leading-9 text-black-dark">info@marksa.net</p>
									</div>
									<div className="w-1/2 mb-5">
										<p className="text-base leading-5 text-secondary">مواقع التواصل الإجتماعي</p>
										<p className="text-xl leading-9 text-black-dark">قريبًا</p>
									</div>
									<div className="w-1/2 mb-5">
										<p className="text-base leading-5 text-secondary">الموقع الإلكتروني</p>
										<p className="text-xl leading-9 text-black-dark">www.marksa.net</p>
									</div>
								</div>
							</div>

							<div className="w-full md:w-7/12">
								<img alt="contact picture" src={require("assets/img/Contact@2x.png").default} className="align-middle " />
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
