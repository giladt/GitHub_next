import nc from "next-connect";
import { data } from "../../../data/panels";

const handler = nc().get((req, res) => {
	res.json({ data: data });
});

export default handler;
