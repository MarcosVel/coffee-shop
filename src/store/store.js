import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import BeansData from "../data/BeansData";
import CoffeeData from "../data/CoffeeData";

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
      addToCart: (cartItem) =>
        set(
          produce((state) => {
            const existingCartItem = state.CartList.find(
              (item) => item.id === cartItem.id
            );

            if (existingCartItem) {
              const existingPrice = existingCartItem.prices.find(
                (price) => price.size === cartItem.prices[0].size
              );

              if (existingPrice) {
                existingPrice.quantity++;
              } else {
                existingCartItem.prices.push(cartItem.prices[0]);
                existingCartItem.prices.sort((a, b) => b.size - a.size);
              }
            } else {
              state.CartList.push(cartItem);
            }
          })
        ),
    }),
    {
      name: "coffee-app",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
