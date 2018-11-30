// tslint:disable:no-http-string
import * as React from 'react';

interface PropTypes {
  className?: string;
  test: string;
  friends: number[];
}

const Playground: React.SFC<PropTypes> = ({className}) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={className}>
      {count}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Playground;

