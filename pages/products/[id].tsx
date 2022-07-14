import { useRouter } from 'next/router'
import React from 'react'
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'



type ProductProps = {
  product: any;
}

const ProductDetail = ({ product }: ProductProps) => {
  if (!product) return null;
  return (
    <div>{product.title}</div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`https://61e7aa5ae32cd90017acbc44.mockapi.io/post
  `)).json();
  const paths = data.map(product => (
    { params: { id: product.id } }
  ))
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const product = await (await fetch(`https://61e7aa5ae32cd90017acbc44.mockapi.io/post/${context.params?.id}`)).json();
  return {
    props: { product },
    revalidate: 6
  }

}
export default ProductDetail