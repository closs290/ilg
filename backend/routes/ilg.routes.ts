import * as express from 'express';
import {
  getAllILGs,
  createILG,
  getILG,
  updateILG,
  deleteILG
} from "../controller/ilg.controller";
  
export const ilgRoutes = express.Router();
/**
 * Express routes from character controller.
 *
 * RESTful endpoints make for easiily adding to existing API features.
 */

/**
 * Routes for all tasks. Evaluates to `/ILGs/`.
 */
  ilgRoutes
  .get("/", getAllILGs)
  .post("/", createILG);

/**
 * Routes for a character by id. Evalutes to `/characters/:characterId`.
 */
  ilgRoutes.get("/:IlgId", getILG);
  ilgRoutes.post("/:IlgId", updateILG);
  ilgRoutes.delete("/:IlgId", deleteILG);