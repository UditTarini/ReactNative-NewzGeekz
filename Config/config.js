import {api}  from "./apikey";

export const articles_url = 'https://newsapi.org/v2';
export const end_point = 'top-headlines'
export const country_code = 'in';
export const category = 'general';
export const news_api = api.news_api;
export const language='en';

export const weather_api = api.weather_api

export const STRIPE = {
    PUBLIC_KEY: '',
    PLAN_NAME: '',
    SUCCESS_URL: 'https://yourwebsite/payment/success',
    CANCELED_URL: 'https://yourwebsite/payment/canceled',
  };