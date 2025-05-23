import { loadStripe, Stripe } from '@stripe/stripe-js';
import { STRIPE_PUBLIC_KEY } from '../common/constants/environment';

let stripePromise: Stripe | null = null;

export const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(String(STRIPE_PUBLIC_KEY));
  }

  return stripePromise;
};
