'use client';
import React, { useState } from 'react';
import Searchmanufacture from './Searchmanufacture';
import SearchButton from './SearchButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturers, setManufacturers] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturers === '' && model === '') {
            console.log(manufacturers, model);

            return alert('please fill in the search bar');
        }

        updateSearchParams(model, manufacturers);
    };

    const updateSearchParams = (model: string, manufacturers: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model);
        } else searchParams.delete('model');
        if (manufacturers) {
            searchParams.set('manufacturer', manufacturers);
        } else searchParams.delete('manufacturers');

        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;

        router.push(newPathname);
    };
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Searchmanufacture
                    manufacturer={manufacturers}
                    setManufacturer={setManufacturers}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="car model"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => {
                        setModel(e.target.value);
                    }}
                    placeholder="tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default SearchBar;
