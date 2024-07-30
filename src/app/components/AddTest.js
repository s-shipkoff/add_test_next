"use client";

import React, { useState } from 'react';
import './AddTest.css';

const AddTest = () => {
    const [formData, setFormData] = useState({
        type: '',
        ct: '',
        mri: '',
        bloodTest: '',
        pathology: '',
        medication: '',
        genetic: '',
        specificTest: '',
        date: '',
        location: '',
        surgeon: '',
        notes: '',
        otherConditions: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setFormData((bkvFormData) => {
            if (checked) {
                return {
                    ...bkvFormData,
                    otherConditions: [...bkvFormData.otherConditions, value]
                };
            } else {
                return {
                    ...bkvFormData,
                    otherConditions: bkvFormData.otherConditions.filter((condition) => condition !== value)
                };
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="left-sidebar">
                <h1 className="sidebar-title">Add: Test</h1>
                <h2 className="sidebar-subtitle">All your data is PRIVATE and safe with us!</h2>
            </div>
            <div className="form-content-left">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h2>
                            <label className="required-title">Type<span className="text-red-500">*</span></label>
                        </h2>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="type" value="CT" onChange={handleChange} />
                                <span className='form-color'>CT</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="MRI" onChange={handleChange} />
                                <span className='form-color'>MRI</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="Blood Test" onChange={handleChange} />
                                <span className='form-color'>Blood Test</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="Pathology" onChange={handleChange} />
                                <span className='form-color'>Pathology</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="Medication" onChange={handleChange} />
                                <span className='form-color'>Medication</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="Genetic" onChange={handleChange} />
                                <span className='form-color'>Genetic</span>
                            </label>
                            <label>
                                <input type="radio" name="type" value="Other:" onChange={handleChange} />
                                <span className='form-color'>Other:</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-group-text-specific">
                        <div className="placeholder-heading">Specific Test<span className="text-red-500">*</span></div>
                        <bk className="gap"></bk>
                        <textarea
                            name="specificTest"
                            value={formData.specificTest}
                            onChange={handleChange}
                            placeholder="Enter Specific Test"
                            className="placeholder-input-specific"
                        />
                    </div>
                </form>
            </div>
            <div className="form-content-right">
                <form onSubmit={handleSubmit}>
                    <div className="form-group-text">
                        <div className="placeholder-heading">
                            <label className="required-title">Date<span className="text-red-500">*</span></label>
                        </div>
                        <bk className="gap"></bk>
                        <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="Enter Date"
                            className="placeholder-input"
                        />
                    </div>
                    <div className="form-group-text">
                        <div className="placeholder-heading">Location</div>
                        <bk className="gap"></bk>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter Location"
                            className="placeholder-input"
                        />
                    </div>
                    <div className="form-group-text">
                        <div className="placeholder-heading">Surgeon</div>
                        <bk className="gap"></bk>
                        <input
                            type="text"
                            name="surgeon"
                            value={formData.surgeon}
                            onChange={handleChange}
                            placeholder="Enter Surgeon Name"
                            className="placeholder-input"
                        />
                    </div>
                    <div className="form-group-text">
                        <div className="placeholder-heading">Notes</div>
                        <bk className="gap"></bk>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Enter Notes"
                            className="placeholder-input-last"
                        />
                    </div>
                </form>
            </div>
            <div className="button-div">
                <button type="submit"><em>Next</em></button>
            </div>
        </div>
    );
};

export default AddTest;