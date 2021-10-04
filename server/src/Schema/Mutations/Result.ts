import { Console } from "console";
import { GraphQLList, GraphQLString } from "graphql";
import { ResultType } from "../TypeDef/Result";

export const CREATE_DIRECTORY_LISTING = {
  type: new GraphQLList( ResultType ),
  args:{ directory: {type: GraphQLString} },
  resolve(){
      console.log(" TO DO MUTATIONS");
    return [];
  }
}