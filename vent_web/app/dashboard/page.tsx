'use client';

import Message from '@/components/Message';
import api from '@/lib/apiClient';
import { useAuth } from '@/store/authStore';
import { useMessage } from '@/store/messageStore';
import { useRouter } from 'next/navigation';
import { RequestStatus } from '@shared/types'
import React, { useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Dashboard = () => {
  const [requestStatus, setRequestStatus] = useLocalStorage<RequestStatus>('requestStatus', 'off');
  const { isAuthenticated } = useAuth();
  const { setMessage } = useMessage();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // Prevent flicker


  const handleMatchReq = async () => {
    try {
      const res = await api.post('match/request');
      setMessage({
        content: res.data.message,
        type: res.data.type
      });
      console.log(res.data)
      setRequestStatus(res.data.status);
    }
    catch (err) {
      setMessage({
        content: 'Failed to send request.',
        type: 'error'
      })
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      <Message />
      <button onClick={() => {
        requestStatus === 'off' ? handleMatchReq() : {}
      }} className='bg-green-500 px-6 py-2 rounded-sm text-white font-bold'>
        {requestStatus === 'off' ? 'Request' : requestStatus === 'pending' ? 'Pending request' : 'Sesssion Active'}
      </button>
    </main>
  );
};

export default Dashboard;
