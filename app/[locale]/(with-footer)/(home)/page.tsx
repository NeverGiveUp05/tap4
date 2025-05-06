import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { createClient } from '@/db/supabase/client';
import { CircleChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { RevalidateOneHour } from '@/lib/constants';
import Faq from '@/components/Faq';
import FAQAccordion from '@/components/FaqAccordion';
import SearchForm from '@/components/home/SearchForm';
import WebNavCardList from '@/components/webNav/WebNavCardList';

import { TagList } from './Tag';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.home',
  });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: './',
    },
  };
}

export const revalidate = RevalidateOneHour;

export default async function Page() {
  const supabase = createClient();
  const t = await getTranslations('Home');
  const [{ data: categoryList }, { data: navigationList }] = await Promise.all([
    supabase.from('navigation_category').select(),
    supabase.from('web_navigation').select().order('collection_time', { ascending: false }).limit(12),
  ]);

  return (
    <div className='relative w-full'>
      <div className='lg:gap-21 relative mx-auto flex w-full max-w-pc flex-1 flex-col gap-16 px-3 py-10 lg:px-0'>
        <div className='my-5 flex w-full flex-col items-center gap-5 text-center lg:mx-auto lg:mt-10'>
          <h1 className='text-2xl font-bold text-white lg:text-5xl'>{t('title')}</h1>
          <h2 className='text-balance text-xs font-bold text-white lg:text-sm'>{t('subTitle')}</h2>
          <a
            href='https://videoweb.ai/ai-face-rating/?utm_source=tap4-ai&utm_medium=referral'
            className='font-din mx-auto flex items-center justify-center gap-1.5 text-2xl font-bold hover:opacity-70'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Sponsored By</p>
            <span className='text-tap4-gold underline'>Free Face Rating</span>
          </a>
          <SearchForm />
          <ul className='flex w-full items-center gap-3'>
            <TagList
              data={categoryList!.map((item) => ({
                id: String(item.id),
                name: item.name,
                href: `/discover/#${item.name}`,
              }))}
            />
            <li>
              <Link href='/discover'>
                <div className='flex h-[38px] items-center justify-center gap-[2px] whitespace-nowrap rounded-full bg-[#2C2D36] px-3 text-xs'>
                  <span>More</span>
                  <CircleChevronRight />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-tap4-yellow text-left text-[18px] lg:text-2xl'>✨{t('ai-navigate')}</h2>
          <WebNavCardList dataList={navigationList!} />
          <Link
            href='/discover'
            className='mx-auto mb-5 flex w-fit items-center justify-center gap-5 rounded-[9px] border border-white p-[10px] text-sm leading-4 hover:opacity-70'
          >
            {t('exploreMore')}
            <CircleChevronRight className='mt-[0.5] h-[20px] w-[20px]' />
          </Link>
        </div>
        <FAQAccordion />
        <Faq />
        <ScrollToTop />
      </div>
    </div>
  );
}
