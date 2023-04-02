import Team, { Character } from '../Team';
import ErrorRepository from '../MapError';

test('test Team', () => {
  const c1 = new Character(); const
    c2 = new Character();
  const team = new Team();
  const amount = new Set();
  amount.add(c1);
  team.add(c1);
  expect(team.members).toMatchObject(amount);
  amount.add(c2);
  team.addAll(c1, c2);
  expect(team.members).toMatchObject(amount);
  const amountArray = Array.from(amount);
  const res = team.toArray();
  expect(res).toMatchObject(amountArray);
});

test('test MapError', () => {
  const e = new ErrorRepository();
  const res1 = e.translate('');
  expect(res1).toBe('Unknown error');
  const res2 = e.translate('228');
  expect(res2).toBe('Пользовательская ошибка');
  e.addError('111', '111');
  const res3 = e.translate('111');
  expect(res3).toBe('111');
});
