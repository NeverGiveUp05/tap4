/* eslint-disable react/jsx-props-no-spreading */
import { WebNavigation } from '@/db/supabase/types';
import { useTranslations } from 'next-intl';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Empty from '@/components/Empty';
import ExploreBreadcrumb from '@/components/explore/ExploreBreadcrumb';
import BasePagination from '@/components/page/BasePagination';
import WebNavCard from '@/components/webNav/WebNavCard';

export default function Content({
  headerTitle,
  navigationList,
  currentPage,
  total,
  pageSize,
  route,
}: {
  headerTitle: string;
  navigationList: WebNavigation[];
  currentPage: number;
  total: number;
  pageSize: number;
  route: string;
}) {
  const t = useTranslations('Category');

  return (
    <>
      <div className='mx-auto flex flex-col gap-3 py-5 lg:pt-10'>
        <h1 className='text-center text-[28px] font-bold lg:text-5xl'>{headerTitle}</h1>
        <div className='mx-auto'>
          <ExploreBreadcrumb
            linkList={[
              {
                href: '/',
                title: t('home'),
              },
              {
                href: '/discover',
                title: 'All Categories',
              },
              {
                title: headerTitle,
                isLast: true,
              },
            ]}
          />
        </div>
        <h2 className='text-balance text-center text-sm'>{t('subTitle')}</h2>
      </div>
      <Select defaultValue='best'>
        <SelectTrigger className='flex h-10 w-[125px] items-center justify-between rounded-lg border border-white/40 bg-transparent px-3 py-2 text-sm text-white/40 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-[220px] [&>span]:line-clamp-1'>
          <SelectValue placeholder='Recent' />
        </SelectTrigger>
        <SelectContent className='rounded-lg border border-white/40 bg-dark-bg p-1 text-white/40 shadow-md'>
          <SelectGroup>
            <SelectItem
              value='best'
              className='relative flex w-full cursor-default select-none items-center rounded-sm !bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none hover:cursor-pointer hover:text-white focus:bg-white/10 focus:text-white'
            >
              Best
            </SelectItem>
            <SelectItem
              value='recent'
              className='relative flex w-full cursor-default select-none items-center rounded-sm !bg-transparent py-1.5 pl-8 pr-2 text-sm outline-none hover:cursor-pointer hover:text-white focus:bg-white/10 focus:text-white'
            >
              Recent
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className='mt-3'>
        {navigationList && !!navigationList?.length ? (
          <>
            <div className='grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4'>
              {navigationList.map((item) => (
                <WebNavCard key={item.id} {...item} />
              ))}
            </div>
            <div className='my-5 flex items-center justify-center lg:my-10'>
              <BasePagination
                currentPage={currentPage}
                total={total}
                pageSize={pageSize}
                route={route}
                subRoute='/page'
              />
            </div>
          </>
        ) : (
          <div className='mb-3 lg:mb-5'>
            <Empty title={t('empty')} />
          </div>
        )}
      </div>
    </>
  );
}
