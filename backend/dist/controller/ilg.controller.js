"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ilg_model_1 = require("../models/ilg.model");
exports.defaultCallback = (req, res) => (err, data) => {
    if (err) {
        res.send(err);
    }
    res.json(data);
};
exports.optsCallback = (req, res) => (options) => (err) => {
    if (err) {
        res.send(err);
    }
    res.json(options);
};
exports.getAllILGs = (req, res) => {
    console.log("Loading ILGs");
    ilg_model_1.ILGs.find({}, exports.defaultCallback(req, res));
};
exports.getILG = (req, res) => {
    console.log("Looking for ILG: " + req.params.characterId);
    ilg_model_1.ILGs.findById(req.params.characterId, exports.defaultCallback(req, res));
};
exports.createILG = (req, res) => {
    console.log("Creating " + req.body.characterName);
    const ilgToCreate = {
        language: req.body.language,
        author: req.body.author,
        year: req.body.year,
        phrases: req.body.phrases,
        freeTranslation: req.body.freeTranslation
    };
    const newILG = new ilg_model_1.ILGs(ilgToCreate);
    newILG.save(exports.defaultCallback(req, res));
};
exports.updateILG = (req, res) => {
    const charToUpdate = {
        language: req.body.language,
        author: req.body.author,
        year: req.body.year,
        phrases: req.body.phrases,
        freeTranslation: req.body.freeTranslation
    };
    ilg_model_1.ILGs.findOneAndUpdate({ _id: req.params.characterId }, charToUpdate, exports.defaultCallback(req, res));
};
exports.deleteILG = (req, res) => {
    console.log("Trying to delete: " + req.params.characterId);
    ilg_model_1.ILGs.deleteOne({ _id: req.params.characterId }, exports.optsCallback(req, res)({ msg: "Deleted successfully" }));
};
