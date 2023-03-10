import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		const handleClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};

		document.addEventListener("touchstart", handleClick);

		return () => document.removeEventListener("touchstart", handleClick);
	}, [ref, callback]);
};

export default useOutsideClick;
