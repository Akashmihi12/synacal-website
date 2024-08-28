'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const images = [
    { src: '/logo/whatsapp.svg', alt: 'whatsapp' },
    { src: '/logo/british.svg', alt: 'British council' },
    { src: '/logo/linkedin.svg', alt: 'Linkedin' },
    { src: '/logo/whatsapp.svg', alt: 'whatsapp' },
    { src: '/logo/yamaha.svg', alt: 'Yamaha' },
    { src: '/logo/redbull.svg', alt: 'Red Bull' },
    { src: '/logo/yamaha.svg', alt: 'Yamaha' },
];

function SponsorList() {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const ul = listRef.current;
        if (ul) {
            const clone = ul.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            ul.parentNode?.appendChild(clone);
        }
    }, []);

    return (
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden relative h-[33%] "
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 128px, black calc(100% - 128px), transparent 100%)',
            }}
        >
            <ul
                ref={listRef}
                className="flex items-center space-x-8 animate-infinite-scroll whitespace-nowrap  h-full"
                style={{ minWidth: '100%' }}
            >
                {[...images, ...images].map((image, index) => (
                    <li key={index} className="inline-block">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={154.54}
                            height={50}
                            layout="intrinsic"
                            className="object-contain"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SponsorList;
