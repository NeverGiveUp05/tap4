import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/db/supabase/client';
import { CircleArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Markdown from 'react-markdown';

import splitDetailSections from '@/lib/utils/splitDetailSections';
import ExploreBreadcrumb from '@/components/explore/ExploreBreadcrumb';
import BaseImage from '@/components/image/BaseImage';

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

export default async function Page({
  params: { websiteName, detail },
}: {
  params: { websiteName: string; detail: 'feature' | 'introduction' };
}) {
  const supabase = createClient();
  const t = await getTranslations('Startup.detail');
  const { data: dataList } = await supabase.from('web_navigation').select().eq('name', websiteName);
  if (!dataList) {
    notFound();
  }
  const data = dataList[0];
  const dataInfo = splitDetailSections(data.detail)[detail];

  return (
    <div className='w-full'>
      {/* Content */}
      <div className='mx-auto max-w-pc'>
        <div className='my-5 flex flex-col gap-5 px-3 lg:my-10 lg:px-0'>
          <div className='flex flex-col items-center gap-5'>
            <div className='mx-auto flex flex-col gap-3'>
              <h1 className='text-center text-[28px] font-bold lg:text-5xl'>
                {data.name} - {detail}
              </h1>
              <h2 className='text-balance text-center font-bold'>{data.name}</h2>
              <div className='mx-auto'>
                <ExploreBreadcrumb
                  linkList={[
                    {
                      href: '/',
                      title: 'Home',
                    },
                    {
                      href: `/ai/${data.name}`,
                      title: data.name,
                    },
                    {
                      title: `${detail === 'introduction' ? 'Detail Introduction' : 'Core Features'}`,
                      isLast: true,
                    },
                  ]}
                />
              </div>
            </div>
            <Link
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
            </Link>
          </div>
        </div>
      </div>

      <div className='mb-5 px-3 lg:px-0'>
        <div className='mt-1 flex w-full flex-col gap-0.5 overflow-hidden rounded-2xl rounded-tl-none border-2 border-[#2C2D36] bg-[#1F1D25]'>
          <div className='flex w-full flex-col gap-4 rounded-2xl rounded-tl-none bg-[#1F1D25] px-5 py-4'>
            <Markdown className='prose prose-invert max-w-full'>{dataInfo}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
