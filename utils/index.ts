import { FilterProps, carProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&manufacturer=${manufacturer}&limit=${limit}&fuel_type=${fuel}`;
    const headers = {
        'X-RapidAPI-Key': 'efb649e564msh86af3c56ca4aa62p17198bjsnd52ba137259f',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    try {
        const response = await fetch(url, { headers });
        const result = await response.json();
        console.log(url);
        // console.log(result)
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: carProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    angle && url.searchParams.append('angle', `${angle}`);
    // console.log(url);
    return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
};
