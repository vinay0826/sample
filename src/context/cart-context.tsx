"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Dish } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";

type CartItem = {
  dish: Dish;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (dish: Dish, quantity: number) => void;
  removeFromCart: (dishId: number) => void;
  updateQuantity: (dishId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (dish: Dish, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { dish, quantity }];
    });
    toast({
      title: "Added to your order!",
      description: `${quantity} x ${dish.name}`,
    });
  };

  const removeFromCart = (dishId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.dish.id === dishId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.dish.price * item.quantity, 0);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
