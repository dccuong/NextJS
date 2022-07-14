import React from 'react'
import { GetStaticProps, GetStaticPropsContext } from "next"
import Link from 'next/link'

type ProductProps = {
  products: any[]
}

const Products = ({ products }: ProductProps) => {
  console.log('Product component', products)
  if (!products) return null;
  return (
    <div>{products.map(item => (
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.title}</Link></div>
    ))}</div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  console.log('getStaticProps');
  const response = await fetch(`https://61e7aa5ae32cd90017acbc44.mockapi.io/post`);
  const data = await response.json();

  return {
    props: {
      products: data.map(item => ({ id: item.id, title: item.title }))
    },
    revalidate: 6
  }
}
export default Products