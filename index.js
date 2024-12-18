const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//mongoDB useName: xayaanhussain542
//password: rUB87Hy2bw7eocTh


// mongoDB copy pest code.
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://xayaanhussain542:<db_password>@cluster0.s5ifh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('SIMPLE CRUD IS running')
})

app.listen(port, () => {
    console.log(`simple crud is running on port: ${port}`)
})