// ('use client');
import { CustomeFilter, SearchBar, Hero, CarCard } from '@/components';
import { fetchCars } from '../utils';
export default async function Home() {
    const allCars = await fetchCars();
    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main>
            <Hero />
        </main>
    );
}
