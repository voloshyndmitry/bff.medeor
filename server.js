import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers/data.js";
import { data } from "./models/data.js";

const app = express();
const port = 4000;

const typeDefs = `
type Warrior {
  id: ID!
  name: String!
}

type Query {
  warriors: [Warrior]
}
`;

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Hello, GraphQL!\n<br/> <a href='/graphql'>GraphQL</a>");
});

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
