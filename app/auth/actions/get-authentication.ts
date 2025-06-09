'use server';

import { CookieNames } from '@/app/common/enums/cookie-names.enum';
import { cookies } from 'next/headers';

export default async function getAuthentication() {
  const cookieStore = await cookies();
  return cookieStore.get(CookieNames.Authentication_Cookie);
}
