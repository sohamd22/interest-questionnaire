import PropTypes from "prop-types";

const TextArea = ({ label, placeholder, setFormValues }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="other" className="font-medium">{label}</label>
            <textarea placeholder={placeholder} id="other" onInput={(e) => setFormValues(formValues => {return {...formValues, [label]: e.target.value}})} className="h-20 rounded-sm text-neutral-900 px-3 py-2"></textarea>
        </div>       
    );
}

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    setFormValues: PropTypes.func.isRequired
}

export default TextArea;