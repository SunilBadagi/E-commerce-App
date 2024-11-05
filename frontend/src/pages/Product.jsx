import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {

    window.scrollTo(0, 0);
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex flex-col sm:flex-row gap-12'>
        {/* Product images */}
        <div className='flex flex-col sm:flex-row gap-4'>
          {/* Image thumbnails */}
          <div className='flex sm:flex-col gap-2 sm:w-[15%]'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt='Product thumbnail'
                className='w-20 sm:w-full cursor-pointer rounded border border-gray-300'
              />
            ))}
          </div>

          {/* Main image */}
          <div className='w-full sm:w-[85%]'>
            <img className='w-full h-auto rounded border border-gray-300' src={image} alt='Selected product' />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl text-gray-900 mb-4 whitespace-nowrap overflow-hidden text-ellipsis'>
            {productData.name}
          </h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
            <p className='pl-2 '>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`size-button border py-2 px-4 text-gray-700 rounded-md focus:outline-none hover:bg-gray-200 active:bg-gray-300 transition-all ${item === size ? 'border-orange-500' : ''}`} key={index}>
                    {item}
                  </button>
                ))
              }
            </div>

            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-40'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'></hr>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className='mt-10'>
        <div className='flex border-b'>
          <button className='border px-5 py-3 text-sm font-semibold border-b-2'>Description</button>
          <button className='border px-5 py-3 text-sm'>Reviews (122)</button>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus id excepturi quis enim voluptates a delectus architecto voluptate laboriosam veritatis laborum, molestiae quos doloribus animi, magni aliquam sit ipsa nobis minima, dolor expedita. Nemo iusto perspiciatis corrupti illum et, est a, deleniti aperiam consequuntur expedita modi nisi esse adipisci voluptatem?</p> {/* This assumes you have a longer description field */}

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta assumenda, delectus sunt facilis provident maiores aut reprehenderit numquam ducimus facere praesentium eos dicta nam. Architecto sit ex assumenda dolorum accusamus.</p>
        </div>
        {/* display related product */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}></RelatedProducts>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
