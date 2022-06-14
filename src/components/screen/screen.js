import "./screen.css";

const Screen = (props) => {
	return (
		<div className="screenContainer">
			<p style={{ marginTop: "10px", marginBottom: "10px" }}>
                {props.screen}
            </p>
		</div>
	);
};

export default Screen;
