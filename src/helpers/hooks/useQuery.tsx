import { useLocation } from 'react-router';

const useQuery = () => {
  const { search } = useLocation();
  const startingPoint = new URLSearchParams(search);
  return startingPoint.get('starting-point');
};

export default useQuery;
