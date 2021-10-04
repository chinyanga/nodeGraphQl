import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_DIRECTORY_LISTING } from "./Mutations/Result";
import { GET_DIRECTORY_LISTINGS } from "./Queries/Result";

const Query = new GraphQLObjectType({
    name: "Query",
    fields:{
        getAllListings: GET_DIRECTORY_LISTINGS
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        createDirectoryListing: CREATE_DIRECTORY_LISTING
    }
});
export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});