/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";



const About = () => {
	return (
		<div className='pt-[80px] md:pt-[120px]'>
			<h1 className='text-[#202020] text-[32px] leading-[36px] tracking-[-1px] md:text-[64px] md:leading-[76px] md:tracking-[-2px] mb-[40px] md:mb-[80px] w-[90%] recolmd'>
				Your friendly neighbourhood <br className="hidden md:block"/>
				<span className='text-[#9F9F9F]'>
					<strike>Spiderman</strike>
				</span>{" "}
				web dev.
			</h1>

			<div className='flex flex-col md:flex-row justify-between'>
				<div className=' w-[180px] h-[200px] md:w-[240px] md:h-[300px] mb-[24px] '>
				<motion.div
                initial={{height:0}}
                whileInView={{height:"100%"}}
                className='w-[180px] h-[200px] md:w-[240px] md:h-[300px] bg-[#9F9F9F] anim'
                style={{
                    backgroundImage:'url("/pc.jpg")',
                    backgroundPosition:"cover",
                    backgroundSize:"cover",
                }}
                ></motion.div>

                </div>

				<div className=" w-full md:w-[50%]">
					<div className=' border-transparent border-[0.5px] border-b-[#9F9F9F] pb-[16px]'>
						<h1 className='text-[#606060] text-[20px] md:text-[24px] md:leading-[40px] leading-normal md:tracking-[0.5px] mb-[10px] recolmd'>
							Technologies
						</h1>

						<p className='text-[#202020] text-[16px] md:text-[18px] md:leading-[28px] leading-[24px] neuereg'>
							JavaScript, React.js, Next.js, Tailwindcss, Node.js, Express.js, MongoDB, HTML, CSS and more.
						</p>
					</div>

					<div className=' border-transparent border-[0.5px] md:border-b-[#9F9F9F] pb-[16px] mt-[32px]'>
						<h1 className='text-[#606060] text-[20px] md:text-[24px] md:leading-[40px] leading-normal md:tracking-[0.5px] mb-[10px] recolmd'>
							Personal Interest
						</h1>


						<p className='text-[#202020] text-[16px] md:text-[18px] md:leading-[28px] leading-[24px] neuereg'>
							I thrive on a vibrant blend of movies, music, conversations and
							video games. It's my perfect recipe for a good time.
						</p>
					</div>
{/* 
                    <a href="/EG RESUME.pdf" download="ezomon glory resume" className='bg-[#DE3F3B]   text-white px-[64px] py-[12px] md:px-[32px] text-[16px] md:text-[20px] md:leading-[32px] leading-[24px]  inline-block rounded-full mt-[24px] neuemd '>
							Resume
						</a> */}
				</div>
			</div>
		</div>
	);
};

export default About;
