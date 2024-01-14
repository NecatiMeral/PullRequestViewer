import electron, { BrowserWindow } from 'electron';
import { PrVote } from '../../shared/constants/pr-vote.constants';
import { PullRequest } from '../../shared/models/pull-request.model';

export interface PullRequestState {
  data: PullRequest[];
  newDataCount: number;
}

export const initialState: PullRequestState = {
  data: [
    {
      author: { id: '1', label: 'Max Mustermann' },
      lastUpdated: { label: 'Updated 7h ago', timestamp: 3 },
      details: {
        label: 'Implement something',
        number: 123,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 1,
        automated: 0,
        user: 1,
      },
      reviewers: [],
    },
    {
      author: { id: '2', label: 'Erika Mustermann' },
      lastUpdated: { label: 'Updated Yesterday at 1:45 PM', timestamp: 2 },
      details: {
        label: 'Fix something very dangerous',
        number: 456,
        branch: 'dev',
        repository: 'Something.UI',
        isDraft: true,
      },
      comments: {
        total: 3,
        automated: 1,
        user: 2,
      },
      reviewers: [
        {
          user: { id: '1', label: 'CodeReview_Architecture' },
          vote: PrVote.Approved,
          isRequired: true,
        },
        {
          user: { id: '2', label: 'Max Meier' },
          vote: PrVote.NoVote,
        },
      ],
    },
    {
      author: { id: '3', label: 'John Doe' },
      lastUpdated: { label: 'Updated Yesterday at 1:45 PM', timestamp: 2 },
      details: {
        label: 'Do something different than before',
        number: 789,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 3,
        automated: 3,
        user: 0,
      },
      reviewers: [
        {
          user: { id: '1', label: 'CodeReview_Architecture' },
          vote: PrVote.Approved,
        },
      ],
    },
    {
      author: { id: '4', label: 'Jane Doe' },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Making the world a better place',
        number: 963,
        branch: 'dev',
        repository: 'Something.UI',
        isConflict: true,
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: { id: '5', label: 'Necati Meral' },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'My very first PR',
        number: 741,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
    {
      author: {
        id: '6',
        label: 'Project collection Build Service',
        isBot: true,
      },
      lastUpdated: { label: 'Updated Tue at 9:30 AM', timestamp: 1 },
      details: {
        label: 'Update dependencies',
        number: 951,
        branch: 'dev',
        repository: 'Something.UI',
      },
      comments: {
        total: 0,
        automated: 0,
        user: 0,
      },
      reviewers: [],
    },
  ],
  newDataCount: 0,
};

class PullRequestService {
  public pullRequests: PullRequestState = initialState;

  constructor(private window: BrowserWindow) {
    setTimeout(
      () => {
        this.pullRequests.data.push({});
      },
      1000 * 60 * 60 * 24,
    );
  }
}
