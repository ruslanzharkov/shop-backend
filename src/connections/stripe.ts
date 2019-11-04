import Stripe from 'stripe';
import {stripeKey} from '../constants/stripe.credentials';

export const stripe = new Stripe(stripeKey);
