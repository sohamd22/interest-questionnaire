import Heading from "../components/Heading";
import logo from "../assets/images/logo.svg";

const Result = ({ children }) => {
    return (
        <div className="flex flex-col items-center gap-8 text-center">
            <img src={logo} alt="devlabs-logo" />
            <Heading>We think you would be a great fit for <mark className="bg-transparent font-semibold text-white bg-orange-500">{children}</mark>!</Heading>

            <p className="text-2xl">Look at the big screen to see your group members!</p>
        </div>
    );
}

export default Result;