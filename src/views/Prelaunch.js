import React from "react";

import Splash from "components/Prelaunch/Splash";
import Landing from "components/Prelaunch/Landing";

export default function Prelaunch() {
	
	
	return (
		<div className="flex flex-col w-full h-full overflow-hidden ">
			<section>
				< Splash />
			</section>

			<section Name="Landing" className="h-screen relative">
				

				<Landing />
				
			</section>
	  </div>
	);
  }
