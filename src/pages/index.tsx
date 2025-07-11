import { useEffect } from 'react';
import { useRouter } from 'next/router';


const HomePage = () => {
  const navigate = useRouter();

  useEffect( () => {
    navigate.push( '/auth' )
  }, [] );

  return (
    <div>HomePage</div>
  );
}

export default HomePage;
