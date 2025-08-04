import "./intersectionOb.css";
import {useInView} from "react-intersection-observer";

export default function IntersetionObser() {

    const { ref: sliding, inView: slidingIsVisible } = useInView({
        triggerOnce: true, // 👈 This ensures it only triggers once
        threshold: 0.2     // Optional: how much of the element must be visible
    });

    return(
        <div className="card-container">
            <div className={`card ${slidingIsVisible ? "sliding" : ""}`} ref={sliding}>This is a card</div>
        </div>
    );
}