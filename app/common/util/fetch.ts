import { cookies } from 'next/headers';
import { API_URL } from '../constants/environment';
import { getErrorMessage } from './errors';

export const getHeaders = async () => {
  const cookieStore = await cookies();
  const requestHeaders = new Headers();
  requestHeaders.append('Cookie', cookieStore.toString());
  return requestHeaders;
};

export const post = async (path: string, data: FormData | object) => {
  const headers = await getHeaders();
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  headers.append('Content-Type', 'application/json');

  const res = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });

  const parsedRes = await res.json();

  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }

  return { error: '', data: parsedRes };
};

export const get = async <T>(path: string, tags?: string[]) => {
  const res = await fetch(`${API_URL}/${path}`, {
    headers: await getHeaders(),
    next: { tags },
  });

  return res.json() as T;
};
