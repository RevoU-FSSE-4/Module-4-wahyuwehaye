// src/components/Form/FormProgress.js

import React from 'react';

const FormProgress = ({ step }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: `${(step / 3) * 100}%` }}>
                    Step {step} of 3
                </div>
            </div>
        </div>
    );
};

export default FormProgress;
