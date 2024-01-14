import { User } from '../../shared/models/user.model';

export interface UserProfileState {
  lookups: User[];
  currentUser: User;
  newDataCount: number;
}

const userState: UserProfileState = {
  lookups: [
    {
      id: '1',
      label: 'Max Mustermann',
    },
    {
      id: '2',
      label: 'Erika Mustermann',
    },
    {
      id: '3',
      label: 'John Doe',
    },
    {
      id: '4',
      label: 'Jane Doe',
    },
    {
      id: '5',
      label: 'Necati Meral',
    },
    {
      id: '6',
      label: 'Project collection Build Service',
      isBot: true,
    },
  ],
  currentUser: {
    id: '5',
    label: 'Necati Meral',
  },
  newDataCount: 0,
};

export default userState;
