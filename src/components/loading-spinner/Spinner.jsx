import "./spinner.css";

export default function Spinner({ scale }) {
	return (
		<div className="lds-ring" style={{ transform: `scale(${scale})` }}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
