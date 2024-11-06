const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iz3zu0d.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)

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
    // await client.connect();
    const fileCollection = client.db("SeotaskDetailsDB").collection("filesCount");


    app.get("/taskfile", async (req, res) => {
        const cursor = fileCollection.find();
        const result = await cursor.toArray();//find data in array
        res.send(result);
      })
  
      app.post("/taskfile", async (req, res) => {
        const uploadFile = req.body;
       
        // Insert the defined document into the "files" collection
        const result = await fileCollection.insertOne(uploadFile);
        res.send(result);
      })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('taskDetails server is running');
});

app.listen(port, () => {
    console.log(`Task server is running on port : ${port}`);
});