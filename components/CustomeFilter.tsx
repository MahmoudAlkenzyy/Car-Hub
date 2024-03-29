'use client';
import { Fragment, useState } from 'react';
import { customeFilterProps } from '@/types';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { updateSearchParams } from '@/utils';

const CustomeFilter = ({ title, options }: customeFilterProps) => {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0]);

    const handleUpdateParams = (e: { title: string; value: string }) => {
        const newPathname = updateSearchParams(title, e.value.toLowerCase());
        router.push(newPathname);
    };
    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e);
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>

                        <Image
                            src="/chevron-up-down.svg"
                            alt="chevron up down"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leaveTo="opacity-0"
                        leaveFrom="opacity-100"
                        leave="transition ease-in duration-100"
                    >
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option) => (
                                <Listbox.Option
                                    value={option}
                                    key={option.title}
                                    className={({ active }) =>
                                        ` cursor-default select-none py-2 px-4 ${
                                            active ? `bg-primary-blue text-white` : `text-gray-900`
                                        }`
                                    }
                                >
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomeFilter;
