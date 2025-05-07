'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/db/supabase/client';
import { NavigationCategory, WebNavigation } from '@/db/supabase/types';

import PageContent from '@/components/home/PageContent';
import SideBar from '@/components/home/SideBar';

function Main() {
  const [currentId, setCurrentId] = useState<number>(0);
  const [data, setData] = useState<NavigationCategory[]>([]);
  const [data2, setData2] = useState<WebNavigation[]>([]);

  const handleChangeId = (id: number) => {
    setCurrentId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();

      const res = await supabase.from('navigation_category').select();
      const res2 = await supabase.from('web_navigation').select();
      res2?.data?.reduce(
        (acc, item) => {
          const category = item.category_name || 'uncategorized';
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item);
          return acc;
        },
        {} as Record<string, WebNavigation[]>,
      );

      if (res2.data) {
        setData2(res2.data);
      }

      if (res.data) {
        setData(res.data);
      }

      if (typeof window !== 'undefined') {
        const hash = window.location.hash.replace('#', '');
        const foundItem = res.data?.find((item) => item.name === hash);
        setCurrentId(foundItem ? foundItem.id : res.data?.[0].id ?? 0);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex gap-10'>
      <PageContent data={data} data2={data2} onChangeId={handleChangeId} />
      <SideBar data={data} currentId={currentId} />
    </div>
  );
}

export default Main;
