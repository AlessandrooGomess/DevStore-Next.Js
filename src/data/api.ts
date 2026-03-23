import { env } from '@/env' // <-- Você já tinha essa importação na linha 1!

export function api(path: string, init?: RequestInit) {
  // Use o objeto 'env' validado pelo Zod em vez do process.env
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL; 
  const apiPrefix = '/api';
  
  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
}