import axios from "axios";

import { PREFIX } from "../../../shared/api";

export const getCoffeList = async (type: string, text: string) => {
  console.log({ type: type, text: text });

  const { data } = await axios.get(PREFIX, {
    params: {
      ...(type !== "all" && { type }),
      ...(text?.length > 0 && { text }),
    },
  });
  return data;
};
