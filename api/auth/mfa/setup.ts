export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Method not allowed"
      });
    }

    return res.status(200).json({
      message: "MFA setup endpoint working",
      status: "ok"
    });

  } catch (error) {
    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
