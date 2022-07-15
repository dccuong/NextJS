import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from "next"
import useSWR from 'swr'
import Link from 'next/link'

type ProductProps = {
  products: any[]
}



const Products = ({ products }: ProductProps) => {
  const url = `https://61e7aa5ae32cd90017acbc44.mockapi.io/post`;

  // lấy dữ liệu từ api
  const fetcher = async (url) => await (await fetch(url)).json();
  const { data, error } = useSWR(url, fetcher, { dedupingInterval: 3000 })

  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>


  console.log('Product component', products)
  if (!data) return null;
  return (
    <div>{data.map(item => (
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.title}</Link></div>
    ))}</div>
  )
}

// export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
//   console.log('getStaticProps');
//   const response = await fetch(`https://61e7aa5ae32cd90017acbc44.mockapi.io/post`);
//   const data = await response.json();

//   return {
//     props: {
//       products: data.map(item => ({ id: item.id, title: item.title }))
//     },
//     revalidate: 6
//   }
// }
// getStaticProps without data
// getStaticProps with data

// SSR - Server Side rendering
// SSG - Sever site generation
// ISG - incremental site generation
// CSR - Client Side Rendering
export default Products