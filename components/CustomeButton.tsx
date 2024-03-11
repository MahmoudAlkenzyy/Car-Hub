'use client';
import React from 'react';
import { customeButtonProps } from '@/types';
import Image from 'next/image';

const CustomeButton = ({
    title,
    containerStyles,
    handleClick,
    textStyle,
    rightIcon,
}: customeButtonProps) => {
    return (
        <button
            className={`custom-btn ${containerStyles}`}
            type={`button`}
            disabled={false}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyle}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
};
export default CustomeButton;
