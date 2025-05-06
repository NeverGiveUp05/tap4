'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/db/supabase/client';

import { DataItem } from '@/lib/data';
import PageContent from '@/components/home/PageContent';
import SideBar from '@/components/home/SideBar';

function Main() {
  const [currentId, setCurrentId] = useState<number>(0);
  const [data, setData] = useState<DataItem[]>([]);

  const handleChangeId = (id: number) => {
    setCurrentId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();

      const res = await supabase.from('navigation_category').select();
      // const res2 = await supabase.from('web_navigation').select();

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
      <PageContent data={data} onChangeId={handleChangeId} />
      <SideBar data={data} currentId={currentId} />
    </div>
  );
}

export default Main;
