import PropTypes from "prop-types";

const Input = ({ label, placeholder, type, name, setFormValues }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="font-medium">{label}</label>
            <input required className="text-neutral-900 px-3 py-2 rounded-sm" placeholder={placeholder} id={name} type={type} name={name} onInput={(e) => setFormValues(formValues => {return {...formValues, [name]: e.target.value}})} />
        </div>
        
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    setFormValues: PropTypes.func.isRequired
}

export default Input;