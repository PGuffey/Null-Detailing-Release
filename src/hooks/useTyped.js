import { useState, useEffect, useRef } from "react";

export function useTyped(messages) {
    const [display, setDisplay] = useState("");
    const state = useRef({ mi: 0, ci: 0, erasing: false });

    useEffect(() => {
        let timer;
        function tick() {
            const { mi, ci, erasing } = state.current;
            const msg = messages[mi];
            if (!erasing) {
                if (ci < msg.length) {
                    setDisplay(msg.slice(0, ci + 1));
                    state.current.ci++;
                    timer = setTimeout(tick, 30);
                } else {
                    timer = setTimeout(() => { state.current.erasing = true; tick(); }, 2500);
                }
            } else {
                if (ci > 0) {
                    setDisplay(msg.slice(0, ci - 1));
                    state.current.ci--;
                    timer = setTimeout(tick, 15);
                } else {
                    state.current = { mi: (mi + 1) % messages.length, ci: 0, erasing: false };
                    timer = setTimeout(tick, 400);
                }
            }
        }
        timer = setTimeout(tick, 900);
        return () => clearTimeout(timer);
    }, [messages]);

    return display;
}
