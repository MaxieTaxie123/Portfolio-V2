import { ArrowDown } from "lucide-react";

export function ScrollDownAnim() {
    return (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform flex-col items-center text-center">
            <p className="text-xl">Scroll down to see projects I've worked on</p>
            <ArrowDown className="mt-12 p-2 animate-bounce" size={28} />
        </div>
    );
}