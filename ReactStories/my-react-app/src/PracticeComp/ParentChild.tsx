import React, { useState } from 'react';

interface ChildProps {
    getData: (data: string) => void; 
}

const Child: React.FC<ChildProps> = ({ getData }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getData(name);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={handleChange} style={{width:'80%' , padding: '10px'}}/><br />< br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Child;
