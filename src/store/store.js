import AsyncStorage from "@react-native-async-storage/async-storage";
import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import BeansData from "../data/BeansData";
import CoffeeData from "../data/CoffeeData";

function toggleFavourite(favoritesList, itemList, id) {
  const itemIndex = itemList.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    const currentItem = itemList[itemIndex];
    currentItem.favourite = !currentItem.favourite;

    if (currentItem.favourite) {
      favoritesList.unshift(currentItem);
    } else {
      const favoriteIndex = favoritesList.findIndex((item) => item.id === id);
      if (favoriteIndex !== -1) {
        favoritesList.splice(favoriteIndex, 1);
      }
    }
  }
}

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
      cleanCart: () =>
        set(
          produce((state) => {
            state.CartList = [];
            state.CartPrice = 0;
          })
        ),
      calculateCartPrice: () =>
        set(
          produce((state) => {
            const calculateItemPrice = (item) =>
              item.prices
                .reduce(
                  (acc, price) =>
                    acc + parseFloat(price.price) * price.quantity,
                  0
                )
                .toFixed(2);

            let totalprice = 0;
            state.CartList.forEach((cartItem) => {
              const tempprice = calculateItemPrice(cartItem);
              cartItem.ItemPrice = tempprice.toString();
              totalprice += parseFloat(tempprice);
            });

            state.CartPrice = totalprice.toFixed(2).toString();
          })
        ),
      addToFavoriteList: (type, id) =>
        set(
          produce((state) => {
            if (type === "Coffee") {
              toggleFavourite(state.FavoritesList, state.CoffeeList, id);
            } else if (type === "Bean") {
              toggleFavourite(state.FavoritesList, state.BeanList, id);
            }
          })
        ),
      deleteFromFavoriteList: (type, id) =>
        set(
          produce((state) => {
            if (type === "Coffee") {
              toggleFavourite(state.FavoritesList, state.CoffeeList, id);
            } else if (type === "Bean") {
              toggleFavourite(state.FavoritesList, state.BeanList, id);
            }

            const spliceIndex = state.FavoritesList.findIndex(
              (item) => item.id === id
            );
            if (spliceIndex !== -1) {
              state.FavoritesList.splice(spliceIndex, 1);
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
