import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Header = () => {
	const menuRef = useRef();
	const router = useRouter();

	return (
		<div className='md:bg-[#F4F2EE] md:px-[80px] px-[20px] pt-[30px]'>
			<div className='flex justify-between border-transparent border-[0.5px] border-b-[#9F9F9F] pb-[30px] items-center fadein '>
				<h1 className="font-bold text-2xl text-[#DE3F3B]">
					MIT_AKR
				</h1>

				<ul className=' space-x-[48px] items-center hidden md:flex neuereg'>
					<a
						href='#works'
						className='text-[16px] text-[#202020] cursor-pointer '
					>
						WORK
					</a>
					<a
						href='#about'
						className='text-[16px] text-[#202020] cursor-pointer '
					>
						ABOUT ME
					</a>
				</ul>

				<a
					href='#contact'
					className='text-[16px] text-[#202020] hidden md:block neuereg cursor-pointer'
				>
					CONTACT ME
				</a>

				<Image
					src='/menu.svg'
					width={32}
					height={32}
					alt='menu'
					className='block md:hidden'
					onClick={() => {
						document.getElementById("menu").style = "right: 0px;";
					}}
				/>
			</div>

			<div
				ref={menuRef}
				className=' w-screen px-[20px] py-[104px] h-screen bg-[#EAE8E4] z-30 fixed top-0 right-[100%] flex-col space-y-[24px] anim '
				id='menu'
			>
				<div
					className='absolute top-[40px] right-[20px] '
					onClick={() => {
						document.getElementById("menu").style = "right: 100%;";
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M29.3346 16C29.3346 23.3638 23.3651 29.3333 16.0013 29.3333C8.63751 29.3333 2.66797 23.3638 2.66797 16C2.66797 8.63619 8.63751 2.66666 16.0013 2.66666C23.3651 2.66666 29.3346 8.63619 29.3346 16ZM11.9608 11.9595C12.3513 11.569 12.9845 11.569 13.375 11.9595L16.0013 14.5858L18.6275 11.9595C19.018 11.569 19.6512 11.569 20.0417 11.9595C20.4322 12.3501 20.4322 12.9832 20.0417 13.3738L17.4155 16L20.0417 18.6262C20.4322 19.0167 20.4322 19.6499 20.0417 20.0404C19.6511 20.4309 19.018 20.4309 18.6274 20.0404L16.0013 17.4142L13.375 20.0404C12.9845 20.4309 12.3514 20.4309 11.9608 20.0404C11.5703 19.6499 11.5703 19.0167 11.9608 18.6262L14.587 16L11.9608 13.3737C11.5703 12.9832 11.5703 12.35 11.9608 11.9595Z'
							fill='#1C1B1F'
						/>
					</svg>
				</div>
				<div className='flex flex-col space-y-[24px] '>
					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							document.getElementById("menu").style = "display:none";
							setTimeout(() => {
								document.getElementById("menu").style = "right:100%";
								// window.location.href = "/#works";
							}, 1000);
							router.push("/#works");
							//     setTimeout(() => {
							//         window.location.href="/#works"
							//     }, 1000);
						}}
					>
						Works
					</a>

					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							document.getElementById("menu").style = "display:none";
							router.push("/#about");
							setTimeout(() => {
								document.getElementById("menu").style = "right:100%";
								// window.location.href = "/#contact";
							}, 1000);
						}}
					>
						About me
					</a>

					<a
						className='text-[20px] leading-[24px] uppercase text-[#202020] border-[0.5px] pb-[16px] px-[8px] border-transparent border-b-[#6d6b6b94] neue-md '
						onClick={() => {
							document.getElementById("menu").style = "display:none";
							router.push("/#contact");
							setTimeout(() => {
								document.getElementById("menu").style = "right:100%";
								// window.location.href = "/#contact";
							}, 1000);
						}}
					>
						contact me
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
