import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
const hander : NextApiHandler = async(req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send("John Doe")
}
export default hander