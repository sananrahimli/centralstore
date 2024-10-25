
import FourBlock from "@/components/home-blocks/four-block";
import OneBlock from "@/components/home-blocks/one-block";
import ThreeBlock from "@/components/home-blocks/three-block";
import TwoBlock from "@/components/home-blocks/two-block";



import Image from "next/image";
import Link from 'next/link'



export default function Home() {
  return (
    <main>
      <OneBlock></OneBlock>
      <TwoBlock></TwoBlock>
      <ThreeBlock></ThreeBlock>
      <FourBlock></FourBlock>
    </main>
  );
}
