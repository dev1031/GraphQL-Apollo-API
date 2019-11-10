const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema  = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://dheerudev:dheeru101@ds243518.mlab.com:43518/gql-react',{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open' , ()=>{
    console.log('Datbase Connected');
});

app.use(cors());
app.use('/graphql' , graphqlHTTP({
    schema : schema,
    graphiql : true
}))

app.listen(4000, (req, res)=>{
    console.log('now running at port 4000')
})