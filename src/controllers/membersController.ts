import memberModel from "../models/memberModel";

export default class MembersController {
  public async get(req, res) {
    try {
      const data = await memberModel.find({});
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
