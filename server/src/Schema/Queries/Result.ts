import { GraphQLList, GraphQLString } from "graphql";
import { Listing } from "../../models/Listing";
import { ResultType } from "../TypeDef/Result";

export const GET_DIRECTORY_LISTINGS = {
  type: new GraphQLList(ResultType),
  args: { directory: { type: GraphQLString } },
  resolve(parent: any, args: any) {
    console.log(args.directory)
    const fs = require('fs');
    var filesList = [];
    var files = fs.readdirSync(args.directory);
    var listingResults: Listing[] = [];
    for (var i in files) {
      var listingElement: Listing = {};
      var fullPath = args.directory + '/' + files[i];
      if (fs.statSync(fullPath).isDirectory()) {
        listingElement.fullpath = fullPath;
        listingElement.isdirectory = true;
      } else {

        listingElement.filename = files[i];
        listingElement.isdirectory = false;
        listingElement.datecreated = fs.statSync(fullPath).ctime.toString();
        listingElement.filesize = (fs.statSync(fullPath).size / (1024 * 1024)).toString() + " Mb";
        listingElement.fullpath = fullPath;
        listingElement.type = files[i].split(".").pop();
        listingElement.fileCanReadOrWrite = readOrWrite(fullPath,fs);
      }

      listingResults.push(listingElement);
    }
    return listingResults;
  }
}

function readOrWrite(fullPath: string, fs: any): Boolean | undefined {
  return fs.accessSync(fullPath, fs.constants.R_OK | fs.constants.W_OK,
    (err: any) => {
      if (err) {
        return false;
      }
      return true;
    }
  );
}
