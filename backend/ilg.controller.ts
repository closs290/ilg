import { ILGSchema } from "./ilg.model";

export const defaultCallback = (req: any, res: any) => (
    err: any,
    data: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  };

  export const optsCallback = (req: any, res: any) => (options: {msg?: string}) => (
    err: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(options);
  };

  export const getAllILGs = (req: any, res: any) => {
    console.log("Loading characters");
    ILGSchema.find({}, defaultCallback(req, res));
  };