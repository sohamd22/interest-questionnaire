import PropTypes from "prop-types";

import logo from "../assets/images/logo.svg";

const Admin = ({ submitters }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <img src={logo} alt="devlabs-logo" />
            <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold`}>Web Development</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Web Development").map(submitter => <li key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold`}>App Development</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="App Development").map(submitter => <li key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold`}>AI/ML</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="AI/ML").map(submitter => <li key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold`}>Cybersecurity</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Cybersecurity").map(submitter => <li key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className={`text-lg font-semibold`}>UI/UX Design</p>
                    <hr />
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="UI/UX Design").map(submitter => <li key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

Admin.propTypes = {
    submitters: PropTypes.array.isRequired
}

export default Admin;