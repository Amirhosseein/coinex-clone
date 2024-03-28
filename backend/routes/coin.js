import express from "express";
import getData from "../functions/getLastcoinsData.js";

const router = express.Router();


router.get("/", async (req, res) => {

  const firstdata = await getData();
  console.log(firstdata);
  res.json(firstdata);

});

export default router;
