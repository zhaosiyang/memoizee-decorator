import * as memoizee from 'memoizee';

export function memoize(options?: memoizee.Options) {
  return function(target: any, key: PropertyKey, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction, options);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
};
