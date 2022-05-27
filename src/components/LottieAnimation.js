import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

function LottieAnimation({
	source,
	duration = 1000,
	animateOnScroll = false,
	loop = false,
	autoplay = false,
	className,
}) {
	const lottieRef = useRef();

	useEffect(() => {
		const observerRefValue = lottieRef.current;
		const anim = lottie.loadAnimation({
			container: observerRefValue,
			renderer: "canvas",
			loop,
			autoplay,
			animationData: source,
		});
		if (animateOnScroll) {
			const animDuration = duration;
			// eslint-disable-next-line no-inner-declarations
			function animatebodymovin(duration) {
				const scrollPosition = window.scrollY;
				const maxFrames = anim.totalFrames;

				const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

				anim.goToAndStop(frame, true);
			}
			const onScroll = () => {
				animatebodymovin(animDuration);
			};

			document.addEventListener("scroll", onScroll);
		} else {
			anim.play();
		}
		return () => {
			anim.destroy();
			document.removeEventListener("scroll", onScroll);
		};
	}, [animateOnScroll, autoplay, duration, loop, source]);

	return (
		<div
			className={`canvas-animation ${className ?? ""}`}
			ref={lottieRef}
		/>
	);
}

export default LottieAnimation;
