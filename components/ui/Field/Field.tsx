import React, { ChangeEvent} from 'react';

interface Props {
    fieldName?: string
    text: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: any
    required?: boolean
    autoComplete?: string | undefined
    className?: string
}

const Field = ({ fieldName, text, placeholder, onChange, value, required = false, autoComplete, className }: Props) => {
    return (
        <>
            <div className={className}>
                <label htmlFor={fieldName} className="mb-1 ml-2 text-sm text-left text-gray-600">{text} {required ? <span className="text-red-500 border border-red-500 px-1 py-0.5 rounded-full"> 必須</span> : "" }</label>
                <input value={value} autoComplete={autoComplete} onChange={(e) => onChange(e)} type={fieldName} id={fieldName} className="bg-indigo-50 rounded-md w-full p-2.5 focus:outline-none" placeholder={placeholder} required />
            </div>
        </>
    );
};

export default Field;
