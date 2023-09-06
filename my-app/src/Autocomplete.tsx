import React, {useState, ChangeEvent} from 'react';
import './Autocomplete.css';
import data from './data.json';

interface DataCity {
    name:string;
}

export const Autocomplete: React.FC= () => {

    const [inputValue, setInputValue] = useState('');
    const [autocompleteData, setAutocompleteData] = useState<DataCity[]>([]);

    React.useEffect(() =>{
        setAutocompleteData(data);
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filteredData = data.filter ((DataCity) =>
        DataCity.name.toLowerCase().includes(value.toLowerCase()));
        setAutocompleteData(filteredData);

        return(
            <div className='App'>
                <header className='App-header'>
                    <h3 className='title'>Autocomplete component React - Typescript</h3>
                    <div>
                        <input
                        placeholder='Search City'
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                        />
                        <ul>
                            {autocompleteData.map((data) => (
                                <li key={data.name}>{data.name}</li>
                            ))}
                        </ul>
                    </div>
                </header>    
            </div>
        );
    };
};