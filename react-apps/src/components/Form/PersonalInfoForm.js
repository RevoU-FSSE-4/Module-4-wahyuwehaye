// src/components/Form/PersonalInfoForm.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonalInfoForm = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            dob: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            dob: Yup.date().required('Date of Birth is required')
        }),
        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name:</label>
                <input id="fullName" name="fullName" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('fullName')} />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.fullName}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address:</label>
                <input id="email" name="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
                <input id="dob" name="dob" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('dob')} />
                {formik.touched.dob && formik.errors.dob ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.dob}</p>
                ) : null}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button>
        </form>
    );
};

export default PersonalInfoForm;
