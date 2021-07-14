import React, {FC, ReactNode} from 'react';

interface props {
  ViewComponent:any
}

const DefaultLayout : FC<{}> = (ViewComponent) => {
      return (
        <>
          {ViewComponent}
        </>
      );
};

export default DefaultLayout;