import { get } from '../../sdk';

export const columnsList = async () => {
  const url = 'columns/';

  return await get(url);
}
