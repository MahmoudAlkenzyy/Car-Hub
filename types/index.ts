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
export interface customeFilterProps {
    title: string;
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
