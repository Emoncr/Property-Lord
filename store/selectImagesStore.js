import { create } from 'zustand';

const selectedIamgesStore = (set) => ({
    checkedImages: [],
    setcheckedImages: (images) =>
        set((state) => ({
            checkedImages: [...state.checkedImages, ...images],
        })),
    deleteCheckedImage: (image) =>
        set((state) => ({
            checkedImages: state.checkedImages.filter((i) => i !== image),
        })),
    emptyCheckedImages: () => set({ checkedImages: [] }),
});

const useSelectImagesStore = create(selectedIamgesStore);

export default useSelectImagesStore;
