'use server';

import { cookies } from 'next/headers';
import { CookieNames } from '../common/enums/cookie-names.enum';
import { redirect } from 'next/navigation';

export default async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(CookieNames.AUTHENTICATION_COOKIE);
  redirect('/auth/login');
}
