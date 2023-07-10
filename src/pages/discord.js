import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://discord.com/invite/X4h7cjPzgh');
    });
  }, []);

  return <div>Redirecting...</div>;
}