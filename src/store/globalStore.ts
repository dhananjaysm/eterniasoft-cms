import { create } from "zustand";
import { RequestType } from "../components/requests/RequestsTable";

interface ProductStoreState {
  selectedProductIds: string[];
  addProductId: (productId: string) => void;
  removeProductId: (productId: string) => void;
  clearSelectedProductIds: () => void;
  selectProductIds: (productIds: string[]) => void;
}

const useProductStore = create<ProductStoreState>((set) => ({
  selectedProductIds: [],

  addProductId: (productId) =>
    set((state) => ({
      selectedProductIds: [...state.selectedProductIds, productId],
    })),

  removeProductId: (productId) =>
    set((state) => ({
      selectedProductIds: state.selectedProductIds.filter(
        (id) => id !== productId
      ),
    })),

  clearSelectedProductIds: () => set({ selectedProductIds: [] }),

  selectProductIds: (productIds) => set({ selectedProductIds: productIds }),
}));

interface RequestStoreState {
  selectedRequest: RequestType | null;
  setSelectedRequest: (request: RequestType | null) => void;
  clearSelectedRequest: () => void;
}

// Create the store
const useRequestStore = create<RequestStoreState>((set) => ({
  selectedRequest: null, // Initial state is no request selected

  // Method to set the selected request
  setSelectedRequest: (request) => set({ selectedRequest: request }),

  // Method to clear the selected request
  clearSelectedRequest: () => set({ selectedRequest: null }),
}));

export { useProductStore, useRequestStore };
