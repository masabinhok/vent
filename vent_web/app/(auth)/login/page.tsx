'use client'
import { useAuth } from '@/store/authStore'
import { LoginInput } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BackNav from '@/components/BackNav';

const LoginPage = () => {
  const { login, isLoading, error, clearError, isAuthenticated } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<LoginInput>({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  const handleChange = (field: keyof LoginInput, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (error) clearError();
  }

  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      router.push('/dashboard')
    } catch (err) {
      console.error('Login failed:', err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <BackNav />
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your journey</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handlelogin} className="space-y-6">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              type="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
              minLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div >
  )
}

export default LoginPage