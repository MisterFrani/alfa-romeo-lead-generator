import { apis } from "../modules/request";

export const sendLead = (email, data) => {
  return apis.zapier(`/hooks/catch/16422019/37w62x0/?em=${email}`, {
    method: "POST",
    mode: "no-cors",
    data,
  });
};
