import "./keypad.css";
import { addOnButtons, buttons } from "./buttons";
import {
	CalcButton,
	EqualsButton,
	OpenAdditionalButton,
} from "./button.styles";
import { useState } from "react";
import { Collapse } from "react-collapse";

const Keypad = (props) => {
	const [viewAdditional, setViewAdditional] = useState(false);

	return (
		<div className="keypadContainer">
			{addOnButtons.map((value, index) => (
				<Collapse isOpened={viewAdditional}>
					<CalcButton name={value} key={index} onClick={props.onClick}>
						{value}
					</CalcButton>
				</Collapse>
			))}

			{buttons.map((value, index) => {
				if (value === "=") {
					return (
						<EqualsButton name={value} key={index} onClick={props.onClick}>
							{value}
						</EqualsButton>
					);
				} else if (value) {
					return (
						<CalcButton name={value} key={index} onClick={props.onClick}>
							{value}
						</CalcButton>
					);
				}
			})}
			<OpenAdditionalButton
				className="additionalContentButton"
				onClick={() => setViewAdditional(!viewAdditional)}
			>
				{viewAdditional ? "Ʌ" : "V"}
			</OpenAdditionalButton>
		</div>
	);
};

export default Keypad;
