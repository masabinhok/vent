'use client';

import { useAuth } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null; // Prevent flicker

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Welcome back, {user?.fullName} 👋</h1>
        <p className="text-gray-600">Here’s your dashboard overview. Let’s build something cool.</p>

        {/* Placeholder for future dashboard widgets */}
        <section className="bg-white shadow rounded-lg p-6 border border-gray-200">
          <p className="text-gray-500">Dashboard content coming soon...</p>
        </section>

        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Logout
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
