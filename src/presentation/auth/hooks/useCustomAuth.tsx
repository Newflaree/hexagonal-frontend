// React
import { useState } from 'react';


export const useCustomHook = () => {
  const [ text, setText ] = useState( 'initialText' );
  const customHookText = 'updatedText';

  const handleSetText = () => {
    return setText( customHookText );
  }

  return {
    customHookText,
    text,
    handleSetText
  }
}
