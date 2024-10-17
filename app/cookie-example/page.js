import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

// We Use Next.js Cokkies from next/headers because of server side cookies (HTTP)

export default async function SetCookiePage() {
  const testCookie = (await cookies()).get('testCookie');

  console.log(testCookie);
  return (
    <>
      <div>CookieValue: {testCookie.value}</div>
      <SetCookieForm />
    </>
  );
}
