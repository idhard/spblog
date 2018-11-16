// tslint:disable:no-http-string
import * as React from 'react';

interface PropTypes {
  className?: string;
  test: string;
  friends: number[];
}

const Facebook: React.SFC<PropTypes> = (props:PropTypes) => {
  const [count,setCount] = React.useState(0);

  return (
    <div>
      <svg
        className="something"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{ height: '1.5rem' }}
      >
        <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
      </svg>
      {count}

      <button onClick={() => setCount(count + 1)}>Click me</button>

    </div>
  );
};

export default Facebook;
