"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const ilg_controller_1 = require("../controller/ilg.controller");
exports.ilgRoutes = express.Router();
/**
 * Express routes from character controller.
 *
 * RESTful endpoints make for easiily adding to existing API features.
 */
/**
 * Routes for all tasks. Evaluates to `/ILGs/`.
 */
exports.ilgRoutes
    .get("/", ilg_controller_1.getAllILGs)
    .post("/", ilg_controller_1.createILG);
/**
 * Routes for a character by id. Evalutes to `/characters/:characterId`.
 */
exports.ilgRoutes.get("/:IlgId", ilg_controller_1.getILG);
exports.ilgRoutes.post("/:IlgId", ilg_controller_1.updateILG);
exports.ilgRoutes.delete("/:IlgId", ilg_controller_1.deleteILG);
