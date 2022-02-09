import React from "react";
import Lottie from "react-lottie";
import animationData from "assets/Lotties/Splash";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Splash() {
	const defaultOptions = {
		loop: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid meet",
            className: "cursor-default",
		},
	};

	const events = [
		{
			eventName: "complete",
			callback: () => {},
		},
	];

	return (
		<div className="w-full h-screen relative">
			<Lottie options={defaultOptions} isClickToPauseDisabled eventListeners={events} />
			<button className="absolute none bottom-10 left-1/2 -translate-x-1/2 font-bold border border-secondary hover:border-primary uppercase focus:outline-none focus:shadow-none transition-all duration-300 rounded-full p-0 text-white bg-secondary hover:bg-primary active:bg-primary shadow-md hover:shadow-lg text-2xl leading-none">
				<Link to="Landing" smooth="easeInOutQuad" duration={1500}>
					<BsArrowDownCircle />
				</Link>
			</button>
		</div>
	);
}
