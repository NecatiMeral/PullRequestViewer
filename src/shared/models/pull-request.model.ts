import { PrVote } from '../constants/pr-vote.constants';
import { User } from './user.model';

export type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

export type CommentsCell = {
  total: number;
  automated: number;
  user: number;
};

export type DetailsCell = {
  label: string;
  number: number;
  repository: string;
  branch: string;
  isDraft?: boolean;
  isConflict?: boolean;
};

export type Reviewer = {
  user: User;
  isRequired?: boolean;
  vote: PrVote;
};

export type ReviewerState = {
  id: string;
  state: string;
};

export type PullRequest = {
  author: User;
  lastUpdated: LastUpdatedCell;
  comments: CommentsCell;
  details: DetailsCell;
  reviewers: Reviewer[];
};
