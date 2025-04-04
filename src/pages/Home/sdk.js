import { get } from '../../sdk';

export const columnsList = async () => {
  const url = 'columns/';
  const response = await get(url);

  return await response.json();
}
