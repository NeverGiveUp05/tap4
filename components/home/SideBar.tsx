'use client';

import Link from 'next/link';
import { NavigationCategory } from '@/db/supabase/types';

interface SideBarProps {
  data: NavigationCategory[];
  currentId: number;
}

function SideBar({ data, currentId }: SideBarProps) {
  return (
    <nav className='sticky top-[88px] hidden h-fit w-[238px] shrink-0 rounded-2xl bg-[#2C2D36] p-3 text-sm text-[#A5A3AC] lg:block'>
      <ol className='flex flex-col text-base'>
        {data.map((item) => (
          <li
            key={item.id}
            className={`line-clamp-1 flex h-10 w-full items-center justify-start rounded-xl border ${item.id === currentId ? 'border-white/70' : 'border-transparent'} px-5`}
          >
            <Link href={`#${item.name}`} className='w-full text-nowrap'>
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SideBar;
