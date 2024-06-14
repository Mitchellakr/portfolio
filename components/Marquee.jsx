import React, { useEffect, useRef } from "react";

const Marquee = () => {
	const marqueeRef = useRef();

	const addText = () => {
		marqueeRef?.current?.insertAdjacentHTML(
			"beforeend",
			"GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT MEGOT A GIG FOR ME? - CONTACT ME",
		);
	};

	useEffect(() => {
		setInterval(() => {
			addText();
		}, 3000);
	});

	return (
		<div className='md:text-[96px] text-[40px] leading-[52px] tracking-[-1px] md:leading-[100px] md:tracking-[-3px] text-[#9F9F9F] border-transparent border-[0.5px] border-y-[#9F9F9F] py-[24px] md:py-[20px] mt-[80px] md:mt-[120px] whitespace-nowrap overflow-hidden marquee-container'>
			<p className='marquee recolreg' ref={marqueeRef}>
				GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG
				FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? -
				CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME
				GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG
				FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? -
				CONTACT ME GOT A GIG FOR ME? - CONTACT MEGOT A GIG FOR ME? - CONTACT ME
			</p>
		</div>
	);
};

export default Marquee;
