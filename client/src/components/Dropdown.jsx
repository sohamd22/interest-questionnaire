import PropTypes from "prop-types";
import Select from 'react-select'

const Dropdown = ({ question, options, setFormValues, multiple }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="font-medium">{question}</label>
            <Select onChange={e => setFormValues(formValues => 
                { return !multiple ? {...formValues, [question]: e.label} : {...formValues, [question]: e.map(option => option.label).join(', ')}}
                )} {...({isMulti: multiple})} className="text-neutral-900" options={options.map(option => { return {value: option.toLowerCase(), label: option} })} />
        </div>        
    );
}

Dropdown.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    setFormValues: PropTypes.func.isRequired,
    multiple: PropTypes.bool.isRequired
}

export default Dropdown;