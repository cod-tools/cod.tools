import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://top.gg/bot/1100937871969501364/vote');
    });
  }, []);

  return <div>Redirecting...</div>;
}