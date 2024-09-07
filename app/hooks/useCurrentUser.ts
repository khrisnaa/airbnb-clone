import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { currentUser, loading };
};

interface UserState {
  currentUser: any;
  loading: boolean;
}

export const useUserStore = create<UserState>((set) => {
  // Automatically fetch the user when the store is initialized
  const fetchUser = async () => {
    set({ loading: true });
    const user = await getCurrentUser();
    set({ currentUser: user, loading: false });
  };

  fetchUser();

  return {
    currentUser: null,
    loading: true,
  };
});
