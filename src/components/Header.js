import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, showStatus }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showStatus ? "red" : "green"}
				text={showStatus ? "close" : "Add"}
				onClick={onShow}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string,
};

// variable css tyle
// const headingStyle = {
//   color: 'red',
// }

export default Header;
