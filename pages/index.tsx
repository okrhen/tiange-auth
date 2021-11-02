import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] mx-auto grid grid-flow-row grid-rows-[80%,20%] bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full pt-16 md:pt-0 px-4 md:px-0 md:flex md:items-center">
        <section className="container max-w-screen-sm mx-auto">
          <div>
            <h4 className="text-4xl text-center">Tiange</h4>
          </div>
          <div className="py-2">
            <span className="block text-2xl">Welcome back</span>
          </div>
          <div className="flex flex-col gap-6">
            <span className="opacity-75">Sign in with your email address or mobile number</span>
            <input placeholder="Email address or mobile number" className="w-full min-h-[4rem] px-4 border-2 border-gray-200" />
            <button disabled className="bg-green-700 w-full py-4 text-white disabled:opacity-50">Sign in</button>
            <span className="text-center">New to Tyange? <Link href="/"><a className="text-green-700">Create an account</a></Link></span>
          </div>
        </section>

      </main>
      <footer className="w-screen bg-gray-700 flex self-end py-4 px-8">
        <div className="container mx-auto">
          <span className="text-white text-sm">&copy; 2021 Rhen Tech </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
