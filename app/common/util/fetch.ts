import { cookies } from 'next/headers';
import { API_URL } from '../constants/environment';
import { getErrorMessage } from './errors';

const getHeaders = async () => {
  const cookieStore = await cookies();
  const requestHeaders = new Headers();
  requestHeaders.set('Cookie', cookieStore.toString());
  requestHeaders.set('Content-Type', 'application/json');
  return requestHeaders;
};

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(Object.fromEntries(formData)),
    cache: 'no-store',
  });

  const parsedRes = await res.json();

  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }

  return { error: '' };
};

export const get = async (path: string) => {
  const res = await fetch(`${API_URL}/${path}`, {
    headers: await getHeaders(),
    cache: 'no-store',
  });

  return res.json();
};
