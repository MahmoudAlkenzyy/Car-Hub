import { MouseEventHandler } from 'react';

export interface customeButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyle?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface SearchmenufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: 31;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface optionProps {
    title: string;
    value: string;
}
export interface customeFilterProps {
    title: string;
    options: optionProps[];
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
