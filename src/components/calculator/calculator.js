import "./calculator.css";
import Screen from "../screen/screen";
import Keypad from "../keypad/keypad";
import { useState } from "react";
import Mexp from "math-expression-evaluator";

const Calculator = () => {
	const [screen, setScreen] = useState("");

	const handleClick = (e) => {
		e.preventDefault();

		let buttonValue = e.target.name;

		switch (buttonValue) {
			case "=":
				setScreen(Mexp.eval(screen));
				break;
			case "C":
				setScreen("");
				break;
			case "π":
				setScreen(screen + " pi");
				break;
			case "CE":
				setScreen(screen.slice(0, -1));
				break;
			default:
				setScreen(screen + buttonValue);
		}
	};

	return (
		<div className="calculatorContainer">
			<Screen screen={screen} />
			<Keypad onClick={handleClick} />
		</div>
	);
};

export default Calculator;
