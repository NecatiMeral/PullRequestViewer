import { PR_PROFILE } from '../../shared/constants/pr-profile.constants';
import PrProfile from '../../shared/models/pr-profile';

export interface PrProfileState {
  data: PrProfile[];
  newDataCount: number;
}

const initialState: PrProfileState = {
  data: [
    {
      id: PR_PROFILE.All,
      label: 'All',
    },
    {
      id: PR_PROFILE.MyTeam,
      label: 'My Team',
      isDefault: true,
    },
    {
      id: PR_PROFILE.MyPrs,
      label: 'My PRs',
    },
    {
      id: PR_PROFILE.MyReviews,
      label: 'My Reviews',
    },
    {
      id: PR_PROFILE.Automations,
      label: 'Automations',
    },
  ],
  newDataCount: 0,
};

export default initialState;
