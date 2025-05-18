'use client';

import { useSearchParams } from 'next/navigation';
import MenuView from '../component/menuView';
import menuList from '@/data/menu.json';
import { notFound } from 'next/navigation';

export default function MenuViewPage() {
  const searchParams = useSearchParams();
  const menuId = Number(searchParams.get('menu'));
  const menu = menuList.find((item) => item.id === menuId);

  if (!menu) return notFound();

  return <MenuView menu={menu} />;
} 