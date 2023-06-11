import { data } from "../models/data.js";

export const resolvers = {
  Query: {
    warriors: (obj, args, context, info) => data.warriors,
  },
};
