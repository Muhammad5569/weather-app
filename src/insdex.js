const express = require('express');
const userRouter = require('./routers/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});