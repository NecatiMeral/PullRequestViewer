import * as React from 'react';
import { ChatRegular, CheckmarkRegular } from '@fluentui/react-icons';
import {
  Avatar,
  TableColumnDefinition,
  TableCellLayout,
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridRow,
  DataGridCell,
  DataGridProps,
  AvatarGroup,
  AvatarGroupItem,
  PresenceBadgeStatus,
  Tooltip,
} from '@fluentui/react-components';
import { PullRequest } from '../../../shared/models/pull-request.model';
import PrVote from '../../../shared/constants/pr-vote.constants';
import ZeroData from '../zero-data/zero-data.component';
import emptyImage from '../../../../assets/emptyPRList.svg';

function voteToBadge(vote: PrVote): PresenceBadgeStatus {
  switch (vote) {
    case PrVote.Approved:
      return 'available';
    case PrVote.Rejected:
      return 'busy';
    case PrVote.WaitingForAuthor:
      return 'away';
    default:
      return 'unknown';
  }
}

const columns: TableColumnDefinition<PullRequest>[] = [
  createTableColumn<PullRequest>({
    columnId: 'author',
    compare: (a, b) => {
      return a.author.label.localeCompare(b.author.label);
    },
    renderHeaderCell: () => '',
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              color="colorful"

              // badge={{
              //   status: item.author.status as PresenceBadgeStatus,
              // }}
            />
          }
        />
      );
    },
  }),
  createTableColumn<PullRequest>({
    columnId: 'details',
    compare: (a, b) => {
      return a.details.label.localeCompare(b.details.label);
    },
    renderHeaderCell: () => '',
    renderCell: (item) => {
      return (
        <TableCellLayout
          description={`
          ${item.author.label} requests !${item.details.number} into ${item.details.repository} (${item.details.branch})`}
          appearance="primary"
        >
          {item.details.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<PullRequest>({
    columnId: 'reviewers',
    compare: (a, b) => {
      return a.reviewers.length - b.reviewers.length;
    },
    renderHeaderCell: () => '',
    renderCell: (item) => {
      if (item.reviewers.length === 0) {
        return <CheckmarkRegular />;
      }

      return (
        <TableCellLayout>
          <AvatarGroup layout="stack">
            {item.reviewers.map((review) => (
              <Tooltip
                key={review.user.id}
                content={review.user.label}
                relationship="label"
                withArrow
              >
                <AvatarGroupItem
                  name={review.user.label}
                  key={review.user.id}
                  badge={{ status: voteToBadge(review.vote) }}
                />
              </Tooltip>
            ))}
          </AvatarGroup>
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<PullRequest>({
    columnId: 'commments',
    compare: (a, b) => {
      return a.comments.total - b.comments.total;
    },
    renderHeaderCell: () => '',
    renderCell: (item) => {
      if (item.comments.total === 0) {
        return <CheckmarkRegular />;
      }

      const desc =
        item.comments.automated > 0
          ? `${item.comments.automated} from bots`
          : '';
      return (
        <TableCellLayout description={desc} media={<ChatRegular />}>
          {item.comments.user.toString()}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<PullRequest>({
    columnId: 'lastUpdated',
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
];

const columnSizingOptions = {
  author: {
    defaultWidth: 30,
    minWidth: 30,
  },
  details: {
    idealWidth: 300,
  },
  comments: {
    defaultWidth: 20,
    idealwidth: 20,
  },
  lastUpdated: {},
};

type Props = {
  data: PullRequest[];
};

export default function PrList(props: Props) {
  const defaultSortState = React.useMemo<
    Parameters<NonNullable<DataGridProps['onSortChange']>>[1]
  >(() => ({ sortColumn: 'details', sortDirection: 'ascending' }), []);

  const { data } = props;

  if (data.length === 0) {
    return (
      <ZeroData
        primaryText="Currently, no pull requests need your attention"
        secondaryText="Pull requests allow you to review code and help ensure quality before merge."
        imagePath={emptyImage}
      />
    );
  }

  return (
    <DataGrid
      items={data}
      columns={columns}
      defaultSortState={defaultSortState}
      columnSizingOptions={columnSizingOptions}
      selectionMode="multiselect"
      subtleSelection
      resizableColumns
    >
      <DataGridBody<PullRequest>>
        {({ item, rowId }) => (
          <DataGridRow<PullRequest> key={rowId}>
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
}
