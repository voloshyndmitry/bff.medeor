import fetch from "node-fetch";

export const getUsers = async () => {
  const response = await fetch("https://api-medeor-one.vercel.app/users");
  const body = await response.text();

  return body;
};

export const getUser = async (id) => {
  const response = await fetch(
    "https://api-medeor-one.vercel.app/user?id=" + id,
    {}
  );
  const body = await response.text();

  return body;
};
