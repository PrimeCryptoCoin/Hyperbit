import { Common } from '../../types/base';

export const common: Common = {
  name: 'Qtum',
  unit: 'QTUM',
  decimalPlaces: 1e8,
  /** https://github.com/qtumproject/qtum/blob/631efb900d5372d957f66baa58cc800a460839ae/src/util/signstr.h#L14 */
  messagePrefix: 'Qtum Signed Message:\n',
};
