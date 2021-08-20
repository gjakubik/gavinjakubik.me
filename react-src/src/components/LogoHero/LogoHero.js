import './LogoHero.css';
import Rive from "rive-react";

function LogoHero() {
    return (
        <div className="animation">
            <Rive src="portfolioanimations.riv" artboard="LogoAnimation" animations="Entry" autoPlay />
        </div>
    );
}

export default LogoHero;