import { create } from "zustand";

interface ProductStoreState {
    selectedProductIds: string[];
    addProductId: (productId: string) => void;
    removeProductId: (productId: string) => void;
    clearSelectedProductIds: () => void;
    selectProductIds: (productIds: string[]) => void;
  }
  
  const useProductStore = create<ProductStoreState>((set) => ({
    selectedProductIds: [],
  
    addProductId: (productId) => set((state) => ({
      selectedProductIds: [...state.selectedProductIds, productId],
    })),
  
    removeProductId: (productId) => set((state) => ({
      selectedProductIds: state.selectedProductIds.filter((id) => id !== productId),
    })),
  
    clearSelectedProductIds: () => set({ selectedProductIds: [] }),
  
    selectProductIds: (productIds) => set({ selectedProductIds: productIds }),
  }));
export default useProductStore;
