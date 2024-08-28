import PropTypes from "prop-types";

import logo from "../assets/images/logo.svg";

const Admin = ({ submitters }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <img src={logo} alt="devlabs-logo" />
            <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-2xl font-semibold`}>Web Development</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Web Development").map(submitter => <li className="text-base" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-2xl font-semibold`}>App Development</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="App Development").map(submitter => <li className="text-base" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-2xl font-semibold`}>AI/ML</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="AI/ML").map(submitter => <li className="text-base" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-2xl font-semibold`}>Cybersecurity</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Cybersecurity").map(submitter => <li className="text-base" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-2xl font-semibold`}>UI/UX Design</p>
                        <hr className="w-full" />
                    </div>
                    
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="UI/UX Design").map(submitter => <li className="text-base" key={submitter._id}>- {submitter.name}</li>)
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