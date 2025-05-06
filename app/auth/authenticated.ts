import { cookies } from 'next/headers';
import { CookieNames } from '../common/enums/cookie-names.enum';

export default async function authenticated() {
  const cookieStore = await cookies();
  return cookieStore.has(CookieNames.AUTHENTICATION_COOKIE);
}
