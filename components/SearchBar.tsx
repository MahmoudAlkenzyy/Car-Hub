'use client';
import { useState } from 'react';
import Searchmanufacture from './Searchmanufacture';

const SearchBar = () => {
    const [manufacturers, setManufacturers] = useState('');
    const handleSearch = () => {};
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Searchmanufacture
                    manufacturer={manufacturers}
                    setManufacturer={setManufacturers}
                />
            </div>
        </form>
    );
};

export default SearchBar;
