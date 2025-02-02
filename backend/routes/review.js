import express from "express";
import {
  getAllReviews,
  createReview,
} from "../controllers/reviewControllers.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({
  mergeParams: true,
});

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["doctor"]), createReview);

export default router;
