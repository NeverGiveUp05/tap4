import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/db/supabase/client';
import { CircleArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import splitDetailSections from '@/lib/utils/splitDetailSections';
import BaseImage from '@/components/image/BaseImage';
import MarkdownProse from '@/components/MarkdownProse';

export async function generateMetadata({
  params: { locale, websiteName },
}: {
  params: { locale: string; websiteName: string };
}): Promise<Metadata> {
  const supabase = createClient();
  const t = await getTranslations({
    locale,
    namespace: 'Metadata.ai',
  });
  const { data } = await supabase.from('web_navigation').select().eq('name', websiteName);

  if (!data || !data[0]) {
    notFound();
  }

  return {
    title: `${data[0].title} | ${t('titleSubfix')}`,
    description: data[0].content,
  };
}

export default async function Page({ params: { websiteName } }: { params: { websiteName: string } }) {
  const supabase = createClient();
  const t = await getTranslations('Startup.detail');
  const { data: dataList } = await supabase.from('web_navigation').select().eq('name', websiteName);
  if (!dataList) {
    notFound();
  }
  const data = dataList[0];
  const dataEdit = splitDetailSections(data.detail);

  return (
    <div className='w-full'>
      {/* Content */}
      <div className='flex flex-col px-6 py-5 lg:h-[323px] lg:flex-row lg:justify-between lg:px-0 lg:py-10'>
        <div className='flex flex-col items-center lg:items-start'>
          <div className='space-y-1 text-balance lg:space-y-3'>
            <h1 className='text-2xl lg:text-5xl'>{data.title}</h1>
            <h2 className='text-xs lg:text-sm'>{data.content}</h2>
          </div>
          {/* <Link
            href={data.url}
            target='_blank'
            rel='noreferrer'
            className='flex-center mt-5 min-h-5 w-full gap-1 rounded-[8px] bg-white p-[10px] text-sm capitalize text-black hover:opacity-80 lg:mt-auto lg:w-[288px]'
          >
            {t('visitWebsite')} <CircleArrowRight className='size-[14px]' />
          </Link> */}
        </div>
        <a
          href={data.url}
          target='_blank'
          rel='noreferrer'
          className='flex-center group relative h-[171px] w-full flex-shrink-0 lg:h-[234px] lg:w-[466px]'
        >
          <BaseImage
            title={data.title}
            alt={data.title}
            fill
            src={data.thumbnail_url || ''}
            className='absolute mt-3 aspect-[466/234] w-full rounded-[16px] border border-[#424242] bg-[#424242] bg-cover lg:mt-0'
          />
          <div className='absolute inset-0 z-10 hidden items-center justify-center gap-1 rounded-[16px] bg-black bg-opacity-50 text-2xl text-white transition-all duration-200 group-hover:flex'>
            {t('visitWebsite')} <CircleArrowRight className='size-5' />
          </div>
        </a>
      </div>

      {/* Sticky Navbar */}
      <div className='bg-light sticky top-16 my-5 h-10 bg-tap4-balck after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-white/70 after:content-[""]'>
        <nav className='no-scrollbar relative flex h-full space-x-5 overflow-x-auto px-3 lg:px-0'>
          <Link
            href='#introduction'
            className='relative flex h-full items-center justify-center text-nowrap px-3 font-semibold text-tap4-gold transition-colors duration-150 hover:text-white'
          >
            Introduction
            <div className='absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-tap4-gold' />
          </Link>
          <Link
            href='#features'
            className='relative flex h-full items-center justify-center text-nowrap px-3 font-semibold text-white/70 transition-colors duration-150 hover:text-white'
          >
            Features
          </Link>
          <Link
            href='#faq'
            className='relative flex h-full items-center justify-center text-nowrap px-3 font-semibold text-white/70 transition-colors duration-150 hover:text-white'
          >
            Frequently Asked Questions
          </Link>
          <Link
            href='#analysis'
            className='relative flex h-full items-center justify-center text-nowrap px-3 font-semibold text-white/70 transition-colors duration-150 hover:text-white'
          >
            Data Analysis
          </Link>
        </nav>
      </div>

      <div className='mb-5 px-3 lg:px-0'>
        <MarkdownProse content={dataEdit} slug={data.name} />
      </div>

      <Link
        href={data.url}
        target='_blank'
        rel='noreferrer'
        className='flex-center my-5 min-h-5 w-full gap-1 rounded-[8px] bg-white p-[10px] text-sm capitalize text-black hover:opacity-80 lg:my-8 lg:w-[288px]'
      >
        {t('visitWebsite')} <CircleArrowRight className='size-[14px]' />
      </Link>
    </div>
  );
}
