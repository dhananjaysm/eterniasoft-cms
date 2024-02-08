import { create } from "zustand";
import { RequestType } from "../components/requests/RequestsTable";
import { User } from "../components/users/UsersTable";

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


// Interface for the User Store State
interface UserStoreState {
  selectedUser: User | null; // The currently selected user or null if no user is selected
  setSelectedUser: (user: User | null) => void; // Function to set the selected user
  clearSelectedUser: () => void; // Function to clear the selected user
}

// Create the user store
const useUserStore = create<UserStoreState>((set) => ({
  selectedUser: null, // Initial state is no user selected

  // Method to set the selected user
  setSelectedUser: (user) => set({ selectedUser: user }),

  // Method to clear the selected user
  clearSelectedUser: () => set({ selectedUser: null }),
}));

export default useUserStore;
export { useProductStore, useRequestStore,useUserStore };
