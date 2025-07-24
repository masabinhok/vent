'use client'
import { useAuth } from '@/store/authStore'
import { RegisterInput } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const RegisterPage = () => {
  const { register, isLoading, error, clearError, isAuthenticated } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterInput>({
    email: '',
    fullName: '',
    password: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated])

  const handleChange = (field: keyof RegisterInput, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear any existing error when user starts typing
    if (error) clearError();
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(formData);
      router.push('/login');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join MyVent</h1>
          <p className="text-gray-600">Start your anonymous journey</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

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
              placeholder="Choose a secure password"
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
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage