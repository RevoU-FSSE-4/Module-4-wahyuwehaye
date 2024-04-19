// src/components/Form/AccountInfoForm.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AccountInfoForm = ({ formData, onPrevious }) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required').matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
            )
        }),
        onSubmit: values => {
            alert(JSON.stringify({ ...formData, ...values }));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
                <input id="username" name="username" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('username')} />
                {formik.touched.username && formik.errors.username ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
                ) : null}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input id="password" name="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                ) : null}
            </div>
            <div className="flex justify-between">
                <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onPrevious}>Previous</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
        </form>
    );
};

export default AccountInfoForm;
