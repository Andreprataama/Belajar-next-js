import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(1, "Title wajib diisi !"),
  description: z.string().min(1, "Description wajib diisi !"),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const result = FormSchema.parse(req.body);
    const response = await fetch(`${process.env.API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    }).then((res) => res.json());

    if (response.success) {
      return res.redirect(307, `/notes`);
    }

    return res.status(200).json({ message: "Submit success", data: result });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      const errors = Object.keys(fieldErrors).reduce((acc, key) => {
        acc[key] = fieldErrors[key]?.[0] || "Unknown error";
        return acc;
      }, {} as Record<string, string>);
      return res.status(400).json({ errors });
    }
    return res.status(500).json({ errors: (error as Error).message });
  }
}
