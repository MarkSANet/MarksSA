import NewBrand from "components/SVGR/NewBrand";
import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";

export default function Landing() {
	return (
        <>
			<div className="flex flex-col h-screen justify-center items-center text-center">
				<div >
					<img
						alt="..."
						src={require("assets/img/Landing.png").default}
					/>
				</div>
                <div className="text-trueGray-500">
                    <p className="text-lg " >To get out of the box you must work on the inside of the box<br/> and that’s what we are currently doing</p>
                    <p className="text-xl font-semibold pt-6 ">See you soon</p>
                </div>
			</div>
            <div className=" absolute top-1 right-0">
                <NewBrand/>
            </div>
        </>
	);
}
