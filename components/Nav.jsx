"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { signIn,signOut, useSession, getProviders } from 'next-auth/react'
const nav = () => {
  const isUserLoggedIn = true;
  const[Providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect (()=>{
    const setProviders = async()=>{
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
            <Link href="/" className='flex gap-2 flex-center'>
        <Image 
      src='/assets/images/logo.svg' 
      alt='Prompty Logo'
      width={30}
      height={30}
      className='object-contain'
      />
    
      <p className="logo_text">
        Prompty
      </p>
      </Link>
      <div className="sm:flex hidden">
        {
          isUserLoggedIn?(
          <div className='flex gap-3 md:gap-5'>
            
            <Link href="/create" className='black_btn'>
              Create Post
            </Link>

            <Link href="/profile" >
             <Image 
             src='/assets/images/logo.svg'
             width={37}
             height={37}
             className='rounded-full'
             alt='Profile'
             />
            </Link>
            
            <button onClick={signOut} type='button' className="outline_btn">
              Sign Out
            </button>
          </div>
          ):(
            <>
            {
              Providers && Object.values
              (Providers).map((provider) => {
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    type='button'
                    className='black_btn'
                  >
                    Sign In                 
                     </button>
                )
              })
            }
            </>
          )
        }
      </div>
    <div className="sm:hidden flex relative">
      {isUserLoggedIn ? (
        <div className="flex">
           <Image 
             src='/assets/images/logo.svg'
             width={37}
             height={37}
             className='rounded-full'
             alt='Profile'
             onClick={()=>setToggleDropdown((prev) => !prev)}
             />
             {toggleDropdown && (
              <div className="dropdown">
               
                <Link href="/profile" 
                className='dropdown_link'
                onClick={()=> setToggleDropdown(false)}>
                 My Profile
                </Link>

                <Link href="/create-prompt" 
                className='dropdown_link'
                onClick={()=> setToggleDropdown(false)}>
                 Create Prompt
                </Link>
                <button type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
                
              </div>
             )}
        </div>
      ):(
        <>
        {
          Providers && Object.values
          (Providers).map((provider) => {
            return (
              <button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                type='button'
                className='black_btn'
              >
                Sign In                 
                 </button>
            )
          })
        }
        </>
      )}
    </div>
    </nav>
  )
}

export default nav
