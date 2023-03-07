/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface BarberModalAvailabilityProps {

  listHours: string[], 
  hour: string | null, 
  hourIndex: number,
  onSelectHour: (hour: string, index: number) => void
}

export default BarberModalAvailabilityProps;
