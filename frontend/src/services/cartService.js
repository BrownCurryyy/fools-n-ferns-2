// src/services/cartService.js
import { supabase } from "../supabaseClient";

/**
 * Fetch products from Supabase
 * Returns array of { id, title, price, img_url }
 */
export async function fetchProducts() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data.map((p) => ({ ...p, price: Number(p.price) }));
}

/**
 * Checkout: create an order and insert order_items linked to it
 * cartItems: [{ id, title, price, qty }, ...]
 */
export async function checkoutOrder(cartItems) {
  if (!cartItems || cartItems.length === 0) throw new Error("Cart empty");

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  // 1) create order
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .insert([{ total }])
    .select()
    .single();

  if (orderError) throw orderError;
  const orderId = orderData.id;

  // 2) create order items
  const orderItemsToInsert = cartItems.map((i) => ({
    order_id: orderId,
    product_id: i.id,
    qty: i.qty,
    price: i.price,
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItemsToInsert);

  if (itemsError) {
    await supabase.from("orders").delete().eq("id", orderId);
    throw itemsError;
  }

  return orderData;
}
