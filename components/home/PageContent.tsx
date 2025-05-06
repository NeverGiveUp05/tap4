'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';

import { Category, DataItem } from '@/lib/data';

interface PageContentProps {
  data: DataItem[];
  onChangeId: (id: number) => void;
}

const categories: Category[] = [
  { id: 1, name: 'AI Photo Restoration', link: '/', count: 65 },
  { id: 2, name: 'AI Landscape Generator', link: '/', count: 51 },
  { id: 3, name: 'AI Image Recognition', link: '/', count: 218 },
  { id: 4, name: 'AI Charting', link: '/', count: 63 },
  { id: 5, name: 'AI Image Segmentation', link: '/', count: 132 },
  { id: 6, name: 'Image to Image', link: '/', count: 133 },
];

function PageContent({ data, onChangeId }: PageContentProps) {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (scrolling) return;

    setScrolling(true);

    requestAnimationFrame(() => {
      const sections = document.querySelectorAll('section');
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.7;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          const id = section.getAttribute('data-id');
          if (id) {
            onChangeId(Number(id));
          }
        }
      });

      setScrolling(false);
    });
  }, [onChangeId, scrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const { hash } = window.location;
    const targetId = hash.slice(1);

    const observer = new MutationObserver(() => {
      const element = document.getElementById(targetId);
      if (element) {
        observer.disconnect();
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });

    const container = document.getElementById('discoverContent');
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id='discoverContent' className='flex flex-col gap-10'>
      {data.map((item) => (
        <section key={item.id} data-id={`${item.id}`} className='flex flex-col gap-3'>
          <h2 id={`${item.name}`} className='scroll-mt-[88px] text-[20px]'>
            <a href={`#${item.name}`}>{item.title} | ⭐️️Featured</a>
          </h2>
          <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
            <div className='flex h-[210px] flex-col gap-3 rounded-xl bg-[#2C2D36] p-1 lg:h-[343px]'>
              <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='group relative'>
                <Image
                  src='https://img.tap4.ai/tools/2024/6/27/undress-vip-thumbnail-1719493217.png'
                  alt='Undress VIP'
                  width={310}
                  height={174}
                  className='aspect-[310/174] w-full rounded-lg bg-white/40 hover:opacity-70'
                />
                <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-lg bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
                  View Detail
                  <CircleArrowRight className='size-4' />
                </div>
              </Link>
              <div className='flex items-center justify-between px-[6px]'>
                <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='hover:opacity-70'>
                  <p className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>Undress VIP</p>
                </Link>
                <Link href='/' title='VIP Undress - Exclusive Luxury Undress AI Service' className='hover:opacity-70'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-square-arrow-out-up-right size-5'
                  >
                    <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                    <path d='m21 3-9 9' />
                    <path d='M15 3h6v6' />
                  </svg>
                  <span className='sr-only'>VIP Undress - Exclusive Luxury Undress AI Service</span>
                </Link>
              </div>
              <p className='line-clamp-5 px-[6px] text-xs text-white/70 lg:line-clamp-3 lg:text-sm'>
                Undress.vip: Immerse yourself in the opulent and extravagant realm of Undress VIP, a state-of-the-art
                application harnessing AI technology for clothing removal in images. Discover its exceptional
                attributes, safety protocols, and ethical ramifications.
              </p>
              <div className='mt-auto flex h-9 w-fit items-center justify-center gap-1 rounded-full bg-[#1E1E25] px-3.5 text-sm text-white/70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-line-chart size-4'
                >
                  <path d='M3 3v18h18' />
                  <path d='m19 9-5 5-4-4-3 3' />
                </svg>
                <div>86.4 K</div>
              </div>
            </div>
            <div className='flex h-[210px] flex-col gap-3 rounded-xl bg-[#2C2D36] p-1 lg:h-[343px]'>
              <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='group relative'>
                <Image
                  src='https://img.tap4.ai/tools/2024/6/27/undress-vip-thumbnail-1719493217.png'
                  alt='Undress VIP'
                  width={310}
                  height={174}
                  className='aspect-[310/174] w-full rounded-lg bg-white/40 hover:opacity-70'
                />
                <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-lg bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
                  View Detail
                  <CircleArrowRight className='size-4' />
                </div>
              </Link>
              <div className='flex items-center justify-between px-[6px]'>
                <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='hover:opacity-70'>
                  <p className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>Undress VIP</p>
                </Link>
                <Link href='/' title='VIP Undress - Exclusive Luxury Undress AI Service' className='hover:opacity-70'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-square-arrow-out-up-right size-5'
                  >
                    <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                    <path d='m21 3-9 9' />
                    <path d='M15 3h6v6' />
                  </svg>
                  <span className='sr-only'>VIP Undress - Exclusive Luxury Undress AI Service</span>
                </Link>
              </div>
              <p className='line-clamp-5 px-[6px] text-xs text-white/70 lg:line-clamp-3 lg:text-sm'>
                Undress.vip: Immerse yourself in the opulent and extravagant realm of Undress VIP, a state-of-the-art
                application harnessing AI technology for clothing removal in images. Discover its exceptional
                attributes, safety protocols, and ethical ramifications.
              </p>
              <div className='mt-auto flex h-9 w-fit items-center justify-center gap-1 rounded-full bg-[#1E1E25] px-3.5 text-sm text-white/70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-line-chart size-4'
                >
                  <path d='M3 3v18h18' />
                  <path d='m19 9-5 5-4-4-3 3' />
                </svg>
                <div>86.4 K</div>
              </div>
            </div>
            <div className='flex h-[210px] flex-col gap-3 rounded-xl bg-[#2C2D36] p-1 lg:h-[343px]'>
              <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='group relative'>
                <Image
                  src='https://img.tap4.ai/tools/2024/6/27/undress-vip-thumbnail-1719493217.png'
                  alt='Undress VIP'
                  width={310}
                  height={174}
                  className='aspect-[310/174] w-full rounded-lg bg-white/40 hover:opacity-70'
                />
                <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-lg bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
                  View Detail
                  <CircleArrowRight className='size-4' />
                </div>
              </Link>
              <div className='flex items-center justify-between px-[6px]'>
                <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='hover:opacity-70'>
                  <p className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>Undress VIP</p>
                </Link>
                <Link href='/' title='VIP Undress - Exclusive Luxury Undress AI Service' className='hover:opacity-70'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-square-arrow-out-up-right size-5'
                  >
                    <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                    <path d='m21 3-9 9' />
                    <path d='M15 3h6v6' />
                  </svg>
                  <span className='sr-only'>VIP Undress - Exclusive Luxury Undress AI Service</span>
                </Link>
              </div>
              <p className='line-clamp-5 px-[6px] text-xs text-white/70 lg:line-clamp-3 lg:text-sm'>
                Undress.vip: Immerse yourself in the opulent and extravagant realm of Undress VIP, a state-of-the-art
                application harnessing AI technology for clothing removal in images. Discover its exceptional
                attributes, safety protocols, and ethical ramifications.
              </p>
              <div className='mt-auto flex h-9 w-fit items-center justify-center gap-1 rounded-full bg-[#1E1E25] px-3.5 text-sm text-white/70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-line-chart size-4'
                >
                  <path d='M3 3v18h18' />
                  <path d='m19 9-5 5-4-4-3 3' />
                </svg>
                <div>86.4 K</div>
              </div>
            </div>
            <div className='flex h-[210px] flex-col gap-3 rounded-xl bg-[#2C2D36] p-1 lg:h-[343px]'>
              <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='group relative'>
                <Image
                  src='https://img.tap4.ai/tools/2024/6/27/undress-vip-thumbnail-1719493217.png'
                  alt='Undress VIP'
                  width={310}
                  height={174}
                  className='aspect-[310/174] w-full rounded-lg bg-white/40 hover:opacity-70'
                />
                <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-lg bg-black bg-opacity-50 text-xl text-white transition-all duration-200 group-hover:flex'>
                  View Detail
                  <CircleArrowRight className='size-4' />
                </div>
              </Link>
              <div className='flex items-center justify-between px-[6px]'>
                <Link title='VIP Undress - Exclusive Luxury Undress AI Service' href='/' className='hover:opacity-70'>
                  <p className='line-clamp-1 flex-1 text-sm font-bold lg:text-base'>Undress VIP</p>
                </Link>
                <Link href='/' title='VIP Undress - Exclusive Luxury Undress AI Service' className='hover:opacity-70'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-square-arrow-out-up-right size-5'
                  >
                    <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                    <path d='m21 3-9 9' />
                    <path d='M15 3h6v6' />
                  </svg>
                  <span className='sr-only'>VIP Undress - Exclusive Luxury Undress AI Service</span>
                </Link>
              </div>
              <p className='line-clamp-5 px-[6px] text-xs text-white/70 lg:line-clamp-3 lg:text-sm'>
                Undress.vip: Immerse yourself in the opulent and extravagant realm of Undress VIP, a state-of-the-art
                application harnessing AI technology for clothing removal in images. Discover its exceptional
                attributes, safety protocols, and ethical ramifications.
              </p>
              <div className='mt-auto flex h-9 w-fit items-center justify-center gap-1 rounded-full bg-[#1E1E25] px-3.5 text-sm text-white/70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-line-chart size-4'
                >
                  <path d='M3 3v18h18' />
                  <path d='m19 9-5 5-4-4-3 3' />
                </svg>
                <div>86.4 K</div>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center justify-center gap-3'>
            <div className='h-[1px] w-1/4 shrink-0 bg-[#414257] lg:w-[300px]' />
            <h2 className='text-sm text-[#696B79]'>More Category</h2>
            <div className='h-[1px] w-1/4 shrink-0 bg-[#414257] lg:w-[300px]' />
          </div>
          <ul className='grid grid-cols-1 gap-x-4 gap-y-3 lg:grid-cols-3'>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={category.link}
                  className='flex h-[34px] w-full items-center justify-between rounded-lg bg-[#2C2D36] px-3 text-sm'
                >
                  <div>{category.name}</div>
                  <div className='text-tap4-gold'>{category.count}</div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default PageContent;
