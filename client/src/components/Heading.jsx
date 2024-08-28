import PropTypes from "prop-types";

const Heading = ({ children, className }) => {
    return (
        <h1 className={`text-4xl font-semibold text-center ${className}`}>{children}</h1>
    );
}

Heading.propTypes = {
    className: PropTypes.string
}

export default Heading;