'use client';

import { Text } from '@/app/theme/shared';
import options from './options.json';
import { Select, Wrapper } from './styles';

interface Props {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

const OrderBy = ({ order, setOrder }: Props) => {
  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
  };

  return (
    <Wrapper>
      <label htmlFor="orderBy">
        <Text fontWeight={'bold'}>Ordenar por</Text>
      </label>
      <Select name="orderBy" id="orderBy" onChange={handleOrderChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default OrderBy;
