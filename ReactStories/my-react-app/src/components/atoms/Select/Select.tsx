import React from "react";
export interface SelectProp{
    options : string[];
    value : string;
    onChange : React.ChangeEventHandler<HTMLSelectElement>
}

const Select : React.FC<SelectProp> = ({options, value, onChange}) => {
    return(
        <select value={value} onChange={onChange}>
            {
                options.map((value, index) =>(
                    <option key={index} value={value}>{value}</option>
                ))
            };
        </select>
    );
};
export default Select;