// src/components/Form/AddressInfoForm.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressInfoForm = ({ onNext, onPrevious }) => {
    const formik = useFormik({
        initialValues: {
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        },
        validationSchema: Yup.object({
            streetAddress: Yup.string().required('Street Address is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid Zip Code').required('Zip Code is required')
        }),
        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label htmlFor="streetAddress" className="block text-gray-700 font-bold mb-2">Street Address:</label>
                <input id="streetAddress" name="streetAddress" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('streetAddress')} />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.streetAddress}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City:</label>
                <input id="city" name="city" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('city')} />
                {formik.touched.city && formik.errors.city ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.city}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700 font-bold mb-2">State:</label>
                <input id="state" name="state" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('state')} />
                {formik.touched.state && formik.errors.state ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.state}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">Zip Code:</label>
                <input id="zipCode" name="zipCode" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('zipCode')} />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.zipCode}</p>
                ) : null}
            </div>
            <div className="flex justify-between">
                <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onPrevious}>Previous</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button>
            </div>
        </form>
    );
};

export default AddressInfoForm;
