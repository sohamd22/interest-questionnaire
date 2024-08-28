import PropTypes from "prop-types";

import logo from "../assets/images/logo.svg";

const Admin = ({ submitters }) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <img src={logo} alt="devlabs-logo" />
            <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-4xl font-bold`}>Web Dev.</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Web Development").map(submitter => <li className="text-3xl font-semibold" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-4xl font-bold`}>App Dev.</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="App Development").map(submitter => <li className="text-3xl font-semibold" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-4xl font-bold`}>AI/ML</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="AI/ML").map(submitter => <li className="text-3xl font-semibold" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-4xl font-bold`}>Cybersecurity</p>
                        <hr className="w-full" />
                    </div>
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="Cybersecurity").map(submitter => <li className="text-3xl font-semibold" key={submitter._id}>- {submitter.name}</li>)
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1 items-center">
                        <p className={`text-4xl font-bold`}>UI/UX</p>
                        <hr className="w-full" />
                    </div>
                    
                    <ul className="flex flex-col gap-1">
                        {
                            submitters.filter(submitter => submitter.domain==="UI/UX Design").map(submitter => <li className="text-3xl font-semibold" key={submitter._id}>- {submitter.name}</li>)
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