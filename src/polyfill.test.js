import './polyfill';
const { log } = console;

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
const cheer = (string, { times }) => string + '🍻'.repeat(times);
const exclaim = (string, { times }) => string + '!'.repeat(times);

test('a value can be chained', () => {
  expect(
    'Hello'
      .let(capitalize)
      .let(exclaim, { times: 2 })
      .also(log)
      .get(cheer, { times: 2 }),
  ).toBe('Hello!!🍻🍻');
});
