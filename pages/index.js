import React from 'react'
import { Product, HeroBanner, FooterBanner, Layout } from '../components';
import { client } from '../lib/client';
const index = ({ products, banners }) => {
  return (
    <>

      <HeroBanner heroBanners={banners.length && banners[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations!</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banners.length && banners[0]} />


    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners }
  }
}
export default index
