const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000 ;

connectDB();

app.use(express.json());


app.get("/",(req,res) =>{
    res.send("Hey there !")
});


app.use('/api',bookRoutes);

app.listen(PORT,() =>{
    console.log(`Server running at https://localhost:${PORT}`);
});