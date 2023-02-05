import React from 'react';

const useUpdateLogger = (watchValue) => {
  React.useEffect(() => {
    console.log(watchValue);
  }, [watchValue]);
};

export default useUpdateLogger;
