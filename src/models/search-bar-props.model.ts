/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface SearchBarProps {
  
  onTextChange: (value: string) => void, 
  onEndEditing: () => void, 
  value: string, 
  placeholder: string
}

export default SearchBarProps;
