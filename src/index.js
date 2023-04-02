import Team, { Character } from './Team';
import ErrorRepository from './MapError';

const x = new Team();
const q = new Character(); const w = new Character(); const e = new Character(); const
  r = new Character();
x.add(q);
console.log(x);
console.log(x.members);
console.log(x.addAll(w, e, r));
console.log(x.toArray());

const er = new ErrorRepository();
er.addError('228', 'Новая ошибка');
const y = er.translate('228');
console.log(y);
