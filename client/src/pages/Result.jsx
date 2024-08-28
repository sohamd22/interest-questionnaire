import Heading from "../components/Heading";
import logo from "../assets/images/logo.svg";

const Result = ({ children }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <img src={logo} alt="devlabs-logo" />
            <Heading>We think you would be a great fit for {children}!</Heading>

            <p>Look at the big screen to see your group members!</p>
        </div>
    );
}

export default Result;