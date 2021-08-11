import { useRouter } from "next/router";
import { getSession } from 'next-auth/client'
import { useEffect, useState } from 'react';
import AuthForm from '../components/auth/auth-form';

function AuthPage() {
  const [isLoading, setIsLoadig] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSession().then(session => { 
      if (session) {
        console.log('aquieeee');
        console.log(session);
        router.replace('/')
      } else {
        setIsLoadig(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <AuthForm />;
}

export default AuthPage;
