import { useState } from 'react';
import { SearchIcon, Input, InputWrapper } from './style';

export default function OrdemServicoInput({ placeholder, onChange }) {
    const [value, setValue] = useState('');
    const handleChange = event => {
        setValue(event.target.value);
        onChange?.(event.target.value);
    };

    return (    
    <InputWrapper>
        <SearchIcon />
        <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    </InputWrapper>
    ); 
}