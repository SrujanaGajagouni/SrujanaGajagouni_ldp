import React from 'react';

export interface FormFieldProp {
  label: string;
  id: string;
  type: 'text' | 'email' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
  error?: string; 
}

const FormField: React.FC<FormFieldProp> = ({ label, id, type, value, onChange, options, error }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {type === 'select' ? (
        <select id={id} value={value} onChange={onChange}>
          {options && options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} />
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;
