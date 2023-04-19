import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartType {
  id: string;
  name: string;
  image: string;
  color: string;
  price: number;
  stock: number;
  quantity: number;
  total: number;
}

interface CartStore {
  carts: CartType[];
  userID: string;
  addCarts: (data: CartType) => void;
  addUserID: (userid: string) => void;
  addQuantity: (id: string) => void;
  removeQuantity: (id: string) => void;
  removeCart: (id: string) => void;
}

let store = create<CartStore>()(
  persist(
    (set) => ({
      carts: [],
      userID: "",
      addCarts: (data: CartType) =>
        set((state) => ({ carts: [...state.carts, data] })),
      addUserID: (userid: string) => set((state) => ({ userID: userid })),
      addQuantity: (id: string) =>
        set((state) => {
          let edit = state.carts.find((item) => item.id === id) as CartType;
          let res = state.carts.filter((item) => item.id !== id);

          let newQuantity =
            edit.quantity === edit.stock ? edit.stock : edit.quantity + 1;

          return { carts: [...res, { ...edit, quantity: newQuantity }] };
        }),
      removeQuantity: (id: string) =>
        set((state) => {
          let edit = state.carts.find((item) => item.id === id) as CartType;
          let res = state.carts.filter((item) => item.id !== id);

          let newQuantity = edit.quantity === 1 ? 1 : edit.quantity - 1;

          return { carts: [...res, { ...edit, quantity: newQuantity }] };
        }),
      removeCart: (id: string) =>
        set((state) => {
          let res = state.carts.filter((item) => item.id !== id);

          return { carts: [...res] };
        }),
    }),
    { name: "carts-store" }
  )
);

export default store;
