// React
import { useState } from 'react';


export const useCustomHook = () => {
  const [ text, setText ] = useState('');
  const customHookText = 'test';

  const handleSetText = () => {
    return setText( 'customHookText' );
  }

  return {
    customHookText,
    text,
    handleSetText
  }
}
