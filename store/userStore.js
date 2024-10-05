import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const userStore = (set) => ({
    user: {
        firstName: '',
        lastName: '',
        email: '',
        personalImage: '',
        age: '',
        fullAddress: '',
        companyName: '',
        logo: '',
        coverPhoto: '',
        vendorType: '',
        area: '',
        tradeLicenseNumber: '',
        mobile: '',
        gender: '',
        dateOfBirth: '',
        gender: '',
        isProfileCompleted: '',
    },
    setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
    removeUser: () => set({ user: {} }),
});

const useUserStore = create(devtools(persist(userStore, { name: 'user' })));
export default useUserStore;
