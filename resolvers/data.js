import { data } from "../models/data.js";
import { getUsers, getUser } from "../models/users.js";

export const resolvers = {
  Query: {
    notes: (obj, args, context, info) => data.notes,
    users: async () => {
      const data = await getUsers();

      return JSON.parse(data);
    },
    user: async (obj, { id = "" }) => {
      const data = await getUser(id);

      return JSON.parse(data);
    },
  },
};
