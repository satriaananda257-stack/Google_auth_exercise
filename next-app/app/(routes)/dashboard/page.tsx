"use client";

import React, { useEffect } from 'react'; // 1. 导入 useEffect
import { useAuth, UserButton } from '@clerk/nextjs';

const page = () => {
  const { getToken } = useAuth();

  const takeToken = async () => {
    try {
      const token = await getToken();
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  // 2. 使用 useEffect 包裹调用
  useEffect(() => {
    takeToken();
  }, []); // 空依赖数组，确保只在首次渲染时执行

  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton />
    </div>
  );
}

export default page;