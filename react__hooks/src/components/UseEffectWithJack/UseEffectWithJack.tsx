import React from 'react';
import useFetch from './useFetch';
import { Options } from './types';

enum LINK {
  FIRST_POST = 'https://jsonplaceholder.typicode.com/posts/1',
  SECOND_POST = 'https://jsonplaceholder.typicode.com/posts/2',
}

const UseEffectWithJack = () => {
  const [url, setUrl] = React.useState<LINK | null>(null);
  const options: Options = {
    url: url,
    onSuccess: (): void => {
      console.log('success function');
    },
  };
  const { data } = useFetch(options);
  console.log(data);

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <button
        onClick={(): void => {
          setUrl(LINK.FIRST_POST);
        }}
      >
        Product 1
      </button>
      <button
        onClick={(): void => {
          setUrl(LINK.SECOND_POST);
        }}
      >
        Product 2
      </button>
    </div>
  );
};

export default UseEffectWithJack;
