import { Metadata } from 'next';
import dynamic from 'next/dynamic';
// import { createClient } from '@/db/supabase/client';
import { getTranslations } from 'next-intl/server';

import { RevalidateOneHour } from '@/lib/constants';
import ExploreBreadcrumb from '@/components/explore/ExploreBreadcrumb';
import Loading from '@/components/Loading';

// import Main from '@/components/home/Main';

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

const Main = dynamic(() => import('@/components/home/Main'), {
  loading: () => <Loading />,
  ssr: false,
});

export default async function Page() {
  // const supabase = createClient();
  const t = await getTranslations('Home');
  // const [{ data: categoryList }, { data: navigationList }] = await Promise.all([
  //   supabase.from('navigation_category').select(),
  //   supabase.from('web_navigation').select().order('collection_time', { ascending: false }).limit(12),
  // ]);

  return (
    <div className='relative w-full'>
      <div className='relative mx-auto w-full max-w-pc flex-1 px-3'>
        <div className='my-5 flex flex-col text-center lg:mx-auto lg:gap-3'>
          <h1 className='text-2xl text-white lg:text-5xl'>{t('title')}</h1>
          <div className='mx-auto'>
            <ExploreBreadcrumb
              linkList={[
                { href: '/', title: 'Home' },
                { href: '/explore', title: 'All Categories', isLast: true },
              ]}
            />
          </div>
          <h2 className='text-xs lg:text-sm'>Over 230+ categories to meet your AI tools.</h2>
        </div>

        <hr className='mb-6 h-px w-full shrink-0 bg-[#414257]' />

        <Main />
      </div>
    </div>
  );
}
