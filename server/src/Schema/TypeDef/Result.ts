import {GraphQLBoolean, GraphQLFloat, GraphQLObjectType,GraphQLString} from "graphql";

export const ResultType =new GraphQLObjectType({
    name: "Result",
    fields:()=>({
        filename: {type:GraphQLString},
        fullpath: {type:GraphQLString},
        type: {type:GraphQLString},
        datecreated: {type:GraphQLString},
        filesize: {type:GraphQLString},
        fileCanReadOrWrite: {type:GraphQLBoolean},
        isdirectory:{type: GraphQLBoolean},
        directoryPath : {type:GraphQLString}
    })
});