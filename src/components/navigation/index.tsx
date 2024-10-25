"use client";

import { usePathname } from 'next/navigation';
import NavigationComponent from './navigationComponent';



export default function NavigationSite() {

  const pathname = usePathname();
  const isHomePage = pathname === '/';

      
    return (
        <>

        {!isHomePage && <NavigationComponent />} {  }
            
        </>
    )
}