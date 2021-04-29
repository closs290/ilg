import { ILGs } from "../models/ilg.model";

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
    console.log("Loading ILGs");
    ILGs.find({}, defaultCallback(req, res));
  };
  
  export const getILG = (req: any, res: any) => {
    console.log("Looking for ILG: " + req.params.characterId);
    ILGs.findById(req.params.characterId, defaultCallback(req, res));
  };
  
  export const createILG = (req: any, res: any) => {
    console.log("Creating " + req.body.characterName);
    const ilgToCreate = {
      language: req.body.language,
      author: req.body.author,
      year: req.body.year,
      phrases: req.body.phrases,
      freeTranslation: req.body.freeTranslation
    }
    
    const newILG = new ILGs(ilgToCreate);
    newILG.save(defaultCallback(req, res));
  };
  
  export const updateILG = (req: any, res: any) => {
    
    const charToUpdate = {
      language: req.body.language,
      author: req.body.author,
      year: req.body.year,
      phrases: req.body.phrases,
      freeTranslation: req.body.freeTranslation
    }
    
    ILGs.findOneAndUpdate(
      { _id: req.params.characterId },
      charToUpdate,
      defaultCallback(req, res)
    );
  };
  
  export const deleteILG = (req: any, res: any) => {
    console.log("Trying to delete: " + req.params.characterId);
    ILGs.deleteOne(
      {_id: req.params.characterId},
      optsCallback(req, res)({msg: "Deleted successfully"})
    );
  };