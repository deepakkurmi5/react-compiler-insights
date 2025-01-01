import { Button } from '@nextui-org/react';
import React from 'react';
import ServerComponent from './server-component';

const Contact = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleChange() {
    console.log(inputRef.current?.value);
  }

  return (
    <div>
      <ServerComponent />
      <input ref={inputRef} type="text" />
      <Button onPress={handleChange}>submit</Button>
    </div>
  );
};

export default Contact;
