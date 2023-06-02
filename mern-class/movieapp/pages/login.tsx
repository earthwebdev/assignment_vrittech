import React from 'react'
import { useRouter } from 'next/router'

const login = () => {
    const router = useRouter();

    function navigateToLogin(){
        router.push('/login');
    }
  return (
    <div>login</div>
  )
}

export default login