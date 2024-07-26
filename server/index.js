import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion } from 'mongodb';
import postRoutes from './routes/posts.js'

const app = express();

// Middleware to connect this to our application
// Gives the prefix '/posts' to all routes in postRoutes
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())


const uri = "mongodb+srv://shannonkaluki:shannonkaluki123@cluster0.rklzg94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

// Connection to MongoDB
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

