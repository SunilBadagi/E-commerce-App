import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({token}) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      // connect with backend
      const response = await axios.get(backendUrl + "/api/product/list")
      
      
      if (response.data.success) {
        //products is my databse folder wher the items are stored
        setList(response.data.products) // Ensure the correct path to the data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

const removeProduct =async(id)=>{
   try {
    
    const response = await axios.post(backendUrl + "/api/product/remove",{id},{headers:{token}})
    if(response.data.success){
      toast.success(response.data.message)
      await fetchList()
    }else{
      toast.error(response.data.message)
    }

   } catch (error) {
    console.log(error)
    toast.error(error.message)
   }
}

  useEffect(() => {
    fetchList()
  }, [])  // Run only once when the component mounts

  return (
    <>
      <p className='mb-2'>All Product List</p>
      <div className='flex flex-col gap-2'>
        {/* --------list Table title---- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ----product list---- */}
        {
          list && list.length > 0 ? ( // Ensure list exists and is not empty
            list.map((item, index) => (
              <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-white text-sm'>
                <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover'/>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency}{item.price}</p>
                <button onClick={()=>removeProduct(item._id)} className='text-red-500'>X</button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )
        }
      </div>
    </>
  )
}

export default List
