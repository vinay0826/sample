"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Sweet } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";

type CartItem = {
  sweet: Sweet;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (sweet: Sweet, quantity: number) => void;
  removeFromCart: (sweetId: number) => void;
  updateQuantity: (sweetId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (sweet: Sweet, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.sweet.id === sweet.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.sweet.id === sweet.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { sweet, quantity }];
    });
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${sweet.name}`,
    });
  };

  const removeFromCart = (sweetId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.sweet.id !== sweetId));
  };

  const updateQuantity = (sweetId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(sweetId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.sweet.id === sweetId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.sweet.price * item.quantity, 0);
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
