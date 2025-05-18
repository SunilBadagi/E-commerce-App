import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoutes.js'

//App config

const app =express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(cors({
  origin: [
    'https://e-commerce-app-1-nkm9.onrender.com',
    'https://e-commerce-app-2-i8hq.onrender.com'
  ],
  credentials: true
}));


//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send("Api working")

})

app.listen(port,()=>console.log("server started on PORT:"+port))
