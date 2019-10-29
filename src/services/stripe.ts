import Stripe from 'stripe';
import {stripeKey} from '../credentials/stripe.credentials';
 
export const stripe = new Stripe(stripeKey);