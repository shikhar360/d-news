import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-black to-zinc-700 w-full min-h-screen overflow-x-hidden">
      <Hero/>
    </div>
  )
}
