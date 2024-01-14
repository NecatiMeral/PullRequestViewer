import { PR_PROFILE } from '../../../shared/constants/pr-profile.constants';
import { PullRequest } from '../../../shared/models/pull-request.model';
import { User } from '../../../shared/models/user.model';

export function filterByProfile(
  profileId: string,
  pullRequests: PullRequest[],
  users: User[],
  currentUser: User,
): PullRequest[] {
  switch (profileId) {
    case PR_PROFILE.All:
      return pullRequests;
    case PR_PROFILE.MyTeam:
      return pullRequests;
    case PR_PROFILE.MyPrs:
      return pullRequests.filter((pr) => pr.author.id === currentUser.id);
    case PR_PROFILE.MyReviews:
      return pullRequests.filter((pr) =>
        pr.reviewers.some((r) => r.user.id === currentUser.id),
      );
    case PR_PROFILE.Automations:
      return pullRequests.filter((pr) => pr.author.isBot === true);
    default:
      return pullRequests;
  }
}

export default filterByProfile;
