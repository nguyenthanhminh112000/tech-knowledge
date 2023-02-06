import React from 'react';
import { Options } from './types';
interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const useFetch = (options: Options) => {
  const [data, setData] = React.useState<Data | null>(null);
  const refFnc = React.useRef<(() => void) | undefined>(options.onSuccess);

  React.useLayoutEffect(() => {
    console.log('assign onSuccess to refFnc');
    refFnc.current = options.onSuccess;
  }, [options.onSuccess]);

  React.useEffect((): void => {
    if (!options.url) return;

    fetch(options.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [options.url]);
  return { data };
};

export default useFetch;
