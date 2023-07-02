'use client';

import { List, ListItem } from '@/app/theme/shared';
import filters from './filters.json';
import { ButtonSecondary } from './styles';

type IOption = (typeof filters)[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const VideoFilter = ({ filter, setFilter }: Props) => {
  function selectFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <List $row $gap>
      {filters.map((option) => (
        <ListItem key={option.id}>
          <ButtonSecondary
            onClick={() => selectFilter(option)}
            className={filter === option.id ? 'selected' : ''}
          >
            {option.label}
          </ButtonSecondary>
        </ListItem>
      ))}
    </List>
  );
};

export default VideoFilter;
