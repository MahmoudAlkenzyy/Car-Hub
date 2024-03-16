// ('use client');
import { CustomeFilter, SearchBar, Hero, CarCard, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
export default async function Home({ searchParams }) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2023,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        model: searchParams.model || '',
    });
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main>
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Expolore the cars you mighr like</p>
                </div>

                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomeFilter title="fuel" options={fuels} />
                        <CustomeFilter title="year" options={yearsOfProduction} />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car, idx) => (
                                <CarCard key={idx} car={car} />
                            ))}
                        </div>
                        <ShowMore
                            pageNumber={(searchParams.pageNumber || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>
                )}
            </div>
        </main>
    );
}
