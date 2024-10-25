import Breadcrumbs from "@/components/breadcrumbs"

import type { Metadata } from 'next'
import CompaniesPage from "./CompaniesList"

 
export const metadata: Metadata = {
  title: 'Şirkətlər',
  description: '...',
  image: './about.jpg'
}

export default function About() {
    return (
        <>
            <Breadcrumbs title={metadata.title} image={metadata.image} />

            <div className="container my-10">
                <CompaniesPage/>
            </div>
        </>
    )
}