import express from 'express';
import { getIssues, getIssueById } from '../controllers/issuesController.js';

const issuesRouter = () => {
  const router = express.Router();

  router.route('/').get(getIssues);

  router.route('/:id').get(getIssueById);

  return router;
};

export default issuesRouter;