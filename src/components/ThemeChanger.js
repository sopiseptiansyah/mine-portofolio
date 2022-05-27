import { useRef, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import lottie from "lottie-web";
import animationData from 'assets/animations/light-dark.json';

const ThemeChanger = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const currentRef = useRef();

    useEffect(() => {
		const observerRefValue = currentRef.current;
		const anim = lottie.loadAnimation({
			container: observerRefValue,
			renderer: "svg",
            autoplay: false,
            loop: false,
			animationData,
		});

        anim.setSpeed(4);

        if(isDark){
            anim.playSegments([0, 280], true);
        }
        else{
            anim.playSegments([280, 480], true);
        }

		return () => {
			anim.destroy();
		};
	}, [type, isDark]);

    return (
        <button className="floating-theme-changer" onClick={()=>{setTheme(type === 'dark' ? 'light' : 'dark')}}>
            <div className="changer-wrapper" ref={currentRef}></div>
        </button>
      )
}

export default ThemeChanger;