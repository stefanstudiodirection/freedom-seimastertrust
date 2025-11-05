import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export const useAccountCardsStagger = (
	containerRef: RefObject<HTMLElement>
) => {
	useGSAP(
		() => {
			const cards = containerRef.current?.querySelectorAll(".account-card");

			if (!cards || cards.length === 0) return;

			// const cards = Array.from(allCards).slice(1);

			if (cards.length === 0) return;

			gsap.set(cards, {
				// y: (index) => -65 * (index + 1), // 2. kartica: -65px, 3. kartica: -130px
				y: (index) => 20 * (index + 1), // 2. kartica: -65px, 3. kartica: -130px
			});

			gsap.to(cards, {
				y: 0,
				duration: 1,
				ease: "power2.out",
				stagger: -0.3,
        delay: 0.3,
			});
		},
		{ scope: containerRef }
	);
};