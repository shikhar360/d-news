import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen">
      <Hero/>
    </div>
  )
}
