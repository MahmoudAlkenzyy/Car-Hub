'use client';
import React from 'react';
import Image from 'next/image';
import { CustomeButton } from '@/components';

export default function Hero() {
    const handleScroll = () => {};
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    find, book, or rent a car - quickly and super easy !
                </h1>

                <p className="hero__subtitle">
                    Stremline your car rental experience with our effortless
                    booking process
                </p>
                <CustomeButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
}
