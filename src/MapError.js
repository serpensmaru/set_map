export default class ErrorRepository {
  constructor() {
    this.mapError = new Map([
      ['228', 'Пользовательская ошибка'],
    ]);
  }

  translate(code) {
    if (this.mapError.has(code)) {
      return this.mapError.get(code);
    }
    return 'Unknown error';
  }

  addError(code, description) {
    this.mapError.set(code, description);
    return this.mapError;
  }
}
