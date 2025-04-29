import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id?: string | string[] | undefined;
  name?: string;
  age?: number;
  massage?: string;
  data?: object;
  headers?: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    res.status(200).json({
      id: req?.query?.id,
      name: "Andre",
      age: 20,
      data: req.body,
      // headers: req.headers["postman-token"],
    });
  } else {
    res.status(403).json({ massage: `Forbidden` });
  }
}
