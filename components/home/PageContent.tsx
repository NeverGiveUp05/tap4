'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavigationCategory, WebNavigation } from '@/db/supabase/types';

import WebNavCardList from '@/components/webNav/WebNavCardList';

interface PageContentProps {
  data: NavigationCategory[];
  data2: WebNavigation[];
  onChangeId: (id: number) => void;
}

function PageContent({ data, data2, onChangeId }: PageContentProps) {
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
          <WebNavCardList dataList={data2.filter((nav) => nav.category_name === item.name)} />
          <div className='flex w-full items-center justify-center gap-3'>
            <div className='h-[1px] w-1/4 shrink-0 bg-[#414257] lg:w-[300px]' />
            <h2 className='text-sm text-[#696B79]'>More Category</h2>
            <div className='h-[1px] w-1/4 shrink-0 bg-[#414257] lg:w-[300px]' />
          </div>
          <ul className='grid grid-cols-1 gap-x-4 gap-y-3 lg:grid-cols-3'>
            {data.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/category/${category.name}`}
                  className='flex h-[34px] w-full items-center justify-between rounded-lg bg-[#2C2D36] px-3 text-sm'
                >
                  <div>{category.name}</div>
                  <div className='text-tap4-gold'>
                    {data2.reduce((count, i) => (i.category_name === category.name ? count + 1 : count), 0)}
                  </div>
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
