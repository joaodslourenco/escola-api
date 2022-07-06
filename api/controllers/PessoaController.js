import { Request, Response } from "express";
import database from "../models";

class PessoaController {
  static async getAllPeople(req, res) {
    const allPeople = await database;
  }
}
