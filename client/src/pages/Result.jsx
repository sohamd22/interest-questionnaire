import PropTypes from "prop-types";
import Heading from "../components/Heading";

const Result = ({ children, submitters }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <Heading>We think you would be a great fit for {children}!</Heading>

            <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold ${localStorage.getItem('domain') !== "Web Development" ? "opacity-60" : ""}`}>Web Development</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Web Development").map(submitter => <li className={`${localStorage.getItem('email') !== submitter.email ? "opacity-70" : ""}`} key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold ${localStorage.getItem('domain') !== "App Development" ? "opacity-60" : ""}`}>App Development</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="App Development").map(submitter => <li className={`${localStorage.getItem('email') !== submitter.email ? "opacity-70" : ""}`} key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold ${localStorage.getItem('domain') !== "AI/ML" ? "opacity-60" : ""}`}>AI/ML</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="AI/ML").map(submitter => <li className={`${localStorage.getItem('email') !== submitter.email ? "opacity-70" : ""}`} key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold ${localStorage.getItem('domain') !== "Cybersecurity" ? "opacity-60" : ""}`}>Cybersecurity</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Cybersecurity").map(submitter => <li className={`${localStorage.getItem('email') !== submitter.email ? "opacity-70" : ""}`} key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold ${localStorage.getItem('domain') !== "UI/UX Design" ? "opacity-60" : ""}`}>UI/UX Design</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="UI/UX Design").map(submitter => <li className={`${localStorage.getItem('email') !== submitter.email ? "opacity-70" : ""}`} key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

Result.propTypes = {
    submitters: PropTypes.array.isRequired
}

export default Result;