import  { env } from '@/env'

export function api( path:string, init?: RequestInit ) {
    const baseUrl = 'NEXT_PUBLIC_API_BASE_URL'
    const url = new URL (path, baseUrl)

    return fetch(url, init)
}