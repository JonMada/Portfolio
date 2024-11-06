import React, { useState } from 'react';
import Select from 'react-select';

const WorksFilter = ({ onFilterChange }) => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const technologies = [
        { value: "React", label: "React" },
        { value: "Python", label: "Python" },
        { value: "FastAPI", label: "FastAPI" },
        { value: "PostgreSQL", label: "PostgreSQL" },
        { value: "SCSS", label: "SCSS" },
        { value: "CSS", label: "CSS" },
        { value: "HTML", label: "HTML" },
        { value: "JavaScript", label: "JavaScript" },

    ];

    const handleTechnologyChange = (selectedOptions) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setSelectedTechnologies(values);
        onFilterChange(values);
    };


    // Estilos personalizados para react-select
    const customStyles = {
        control: (base) => ({
            ...base,
            borderColor: '#000',
            boxShadow: 'none',
            borderRadius: 0,
            '&:hover': {
                borderColor: '#1F42E3',
            },
            minWidth: '300px',
            minHeight: '50px'
        }),
        menu: (base) => ({
            ...base,
            zIndex: 100,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#1F42E3' : state.isFocused ? '#8bacee' : null,
            color: state.isSelected ? 'white' : '#333',
            cursor: 'pointer',
            '&:active': {
                backgroundColor: '#1F42E3',
                color: 'white',
            },
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: '#1F42E3',
            color: 'white',
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: 'white',
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: 'white',
            ':hover': {
                backgroundColor: '#8bacee',
                color: 'white',
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: '#000', 
        }),
    };

    return (
        <div className="works-filter">
            <Select
                isMulti
                options={technologies}
                value={technologies.filter(option => selectedTechnologies.includes(option.value))}
                onChange={handleTechnologyChange}
                placeholder="Filter By Technologies"
                styles={customStyles}
                className='select-filter'
            />

        </div>
    );
};

export default WorksFilter;
