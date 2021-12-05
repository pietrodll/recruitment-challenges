import { Router } from "express";
import { getFibonacciNumber } from "../controllers/fibonacci";

export const fibonacciRouter = Router();

fibonacciRouter.get('/number', getFibonacciNumber);
