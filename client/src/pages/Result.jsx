import Heading from "../components/Heading";

const Result = ({ children }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <Heading>We think you would be a great fit for {children}!</Heading>

            <p>Look at the big screen to see your group members!</p>
        </div>
    );
}

export default Result;