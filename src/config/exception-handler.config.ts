/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function exceptionHandler(error: Error, isFatal: boolean) {
  console.error('Error: ' + error);
}

export default exceptionHandler;
