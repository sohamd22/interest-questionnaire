import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Heading from "../components/Heading.jsx";
import Input from "../components/Input.jsx";
import Dropdown from "../components/Dropdown.jsx";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";

import logo from "../assets/images/logo.svg";

const Form = ({ setResult }) => {
    const [formValues, setFormValues] = useState({});

    const submitForm = async (event) => {
        event.preventDefault();

        const result = (await axios.post("https://domain-questionnaire-backend.onrender.com/", formValues)).data;
        
        if (result) {
            setResult(result);

            localStorage.setItem('name', formValues.name);
            localStorage.setItem('email', formValues.email);
            localStorage.setItem('domain', result);
        }
    }

    return (
        <div className="container flex flex-col gap-12 justify-center items-center">
            <img src={logo} alt="devlabs-logo" />
            <Heading>Let's find you a domain!</Heading>
            <form onSubmit={submitForm} className="flex flex-col gap-4 w-full xl:w-1/2 lg:w-2/3 items-center">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <Input className="rounded-xl" label="Your Name" placeholder="E.g. Walter White" type="text" name="name" setFormValues={setFormValues} />
                    <Input label="Your ASU Email" placeholder="E.g. wwhite8@asu.edu" type="email" name="email" setFormValues={setFormValues} />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <Dropdown setFormValues={setFormValues} question="Which out of these was your favourite subject in school?" options={[
                        "Art / Design",
                        "Mathematics",
                        "Science (Bio / Chem / Phy)",
                        "Computer Science",
                        "Social Studies"
                    ]} />
                    <Dropdown setFormValues={setFormValues} question="Which non-software profession out of these can you see yourself in?" options={[
                        "Business / Marketing",
                        "Architect / Builder",
                        "Scientist / Researcher",
                        "Quality Assurance / Testing",
                        "Forensics"
                    ]} />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <Dropdown setFormValues={setFormValues} question="What kind of environment do you work best in?" options={[
                        "A creative, vibrant space",
                        "A quiet, structured environment",
                        "A lab so you can test things out",
                        "A collaborative focused workspace",
                        "A secure space with no interruptions"
                    ]} />
                    <Dropdown setFormValues={setFormValues} question="How do you prefer to learn new things / absorb info?" options={[
                        "Through hands-on activities",
                        "By working through exercises",
                        "By experimenting with ideas",
                        "Through projects",
                        "By reading up on the data available"
                    ]} />
                </div>
                <div className={`flex flex-col md:flex-row gap-4 w-full chosen-select`}>
                    <Dropdown setFormValues={setFormValues} question="Which software/languages are you familiar with? (Can pick multiple)" options={[
                        "Adobe Suite / Figma",
                        "HTML / CSS / JavaScript",
                        "Python",
                        "Java / Swift / Flutter",
                        "C / C++",
                        "I have used other programming languages / frameworks",
                        "I'm a beginner"
                    ]} multiple={true} />
                </div>

                <TextArea label="Anything else about you (optional)" placeholder="E.g. I've built a..." setFormValues={setFormValues}></TextArea>
                <Button className="w-full" />
            </form>
        </div>
    );
}

Form.propTypes = {
    setResult: PropTypes.func.isRequired,
}

export default Form;