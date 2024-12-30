const express = require('express')
const sql = require('./db')
const cors = require('cors')

//routes
const stdRoutes = require('./routes/stdRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))

//route
app.use('/api/students',stdRoutes)


app.listen(3000,async ()=>{
    try{
        await sql.getConnection()
        console.log('Database connection is successful')
    }catch(err){
        console.log(err)
    }
    console.log('Server is running on port 3000')
  })