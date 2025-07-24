import api from "@/lib/apiClient";
import { LoginInput, RegisterInput, User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  user: Partial<User> | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  login: (credentials: LoginInput) => Promise<void>;
  register: (data: RegisterInput) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  setUser: (user: Partial<User>) => void;
  clearError: () => void;
}

export const useAuth = create<AuthStore>()(
  persist((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async ({ email, password }) => {
      set({ isLoading: true, error: null });
      try {
        const res = await api.post('/auth/login', { email, password });
        console.log(res.data);
        set({
          user: res.data.user,
          isAuthenticated: true,
          isLoading: false
        })
      } catch (err) {
        set({
          isLoading: false,
          error: 'Network Error: Failed to Login'
        });
        throw new Error('Network Error: Failed to Login');
      }
    },

    register: async ({ email, password, fullName }) => {
      set({ isLoading: true, error: null });
      try {
        const res = await api.post('/auth/signup', { email, password, fullName });
        console.log(res.data);
        // If registration is successful and returns user data, update state
        if (res.data?.user) {
          set({
            user: res.data.user,
            isAuthenticated: true,
            isLoading: false
          });
        } else {
          set({ isLoading: false });
        }
      }
      catch (error) {
        set({
          isLoading: false,
          error: 'Network Error: Failed to Register'
        });
        throw new Error('Network Error: Failed to Register')
      }
    },

    logout: async () => {
      try {
        const res = await api.post('auth/logout');
        console.log(res.data);
        set({
          user: null,
          isAuthenticated: false
        });
      } catch (error) {
        // Even if logout fails on server, clear local state
        set({
          user: null,
          isAuthenticated: false
        });
        throw new Error('Network Error: Failed to logout')
      }
    },

    refreshToken: async () => {
      try {
        const res = await api.post('auth/refresh');
        console.log(res.data);
        // If refresh returns updated user data, update state
        if (res.data?.user) {
          set({
            user: res.data.user,
            isAuthenticated: true
          });
        }
      } catch (error) {
        // If refresh fails, user needs to login again
        set({
          user: null,
          isAuthenticated: false
        });
        throw new Error('Network Error: Failed to refresh token')
      }
    },

    setUser: (user) => {
      set({ user })
    },

    clearError: () => {
      set({ error: null })
    }
  }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  ))