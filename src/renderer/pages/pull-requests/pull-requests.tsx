import * as React from 'react';
import { CounterBadge, Tab, TabList } from '@fluentui/react-components';
import type {
  SelectTabData,
  SelectTabEvent,
  TabValue,
} from '@fluentui/react-components';
import PrList from '../../components/pr-list/pr-list';
import PrProfile from '../../../shared/models/pr-profile';
import './pull-requests.scss';
import PR_PROFILE from '../../../shared/constants/pr-profile.constants';
import filterByProfile from '../../services/filter';

type Props = {
  profiles: PrProfile[];
};

export default function PullRequestsOverview(props: Props) {
  const { profiles } = props;

  const defaultProfileId =
    profiles.find((profile) => profile.isDefault)?.id || 'builtin:all';

  const [selectedValue, setSelectedValue] =
    React.useState<TabValue>(defaultProfileId);
  const [pullRequestState] = React.useState(prStore);
  const [users] = React.useState(userState);

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const tabs = profiles.map((profile) => {
    const profileFiltered = filterByProfile(
      profile.id,
      pullRequestState.data,
      users,
    );
    const badge = <CounterBadge>{profileFiltered.length}</CounterBadge>;
    return (
      <Tab key={profile.id} value={profile.id}>
        {profile.label}
        {profile.id !== PR_PROFILE.All && badge}
      </Tab>
    );
  });

  const contents = profiles.map((profile) => {
    const profileFiltered = filterByProfile(
      profile.id,
      pullRequestState.data,
      users,
      use,
    );

    return (
      selectedValue === profile.id && (
        <PrList key={profile.id} data={profileFiltered} />
      )
    );
  });

  return (
    <div className="container">
      <div className="section">
        <div className="content header">
          <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
            {tabs}
          </TabList>
        </div>
        <div className="content scrollable-content">{contents}</div>
      </div>
    </div>
  );
}
