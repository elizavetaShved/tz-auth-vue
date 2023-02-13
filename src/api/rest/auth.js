import { makeRequest } from "@/api/requests";

export const sendAuth = (data) => {
  return makeRequest({
    url: `/api/user/auth`,
    method: "POST",
    data: data,
  });
};
