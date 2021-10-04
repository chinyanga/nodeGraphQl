import express from "express";
import { graphqlHTTP  } from "express-graphql";
import cors from "cors";
import { graphql } from "graphql";
import { schema } from "./Schema/index";

const main = async ()=>{
    const app = express();
    app.use(cors())
    app.use(express.json())
   app.use("/graphql",graphqlHTTP({
        schema,
        graphiql:true
    }))
    app.listen(3005,()=>{
        console.log("Backend Server Running On localhost:3005");
    })
};

main().catch((err)=>{
    console.log(err);
});