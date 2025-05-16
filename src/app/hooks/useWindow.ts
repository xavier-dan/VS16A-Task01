'use client';

import { useState, useEffect } from 'react';

interface UseWindowType {
    width: number;
    height: number;
}

const UseWindow = (): UseWindowType => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const redimensionar = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', redimensionar);

        return () => {
            window.removeEventListener('resize', redimensionar);
        }
    
    }, []);

    return { width, height };
}

export default UseWindow;