export const pipe = value => (...fn) => fn.reduce((acc, cur) => cur(acc), value);
