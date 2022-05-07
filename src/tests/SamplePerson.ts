export class SamplePerson {
  constructor(
    private _age = 41,
    private _name = 'Jens'
  ){}

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  speak(): string{
    return `Hi, I am ${this._name} and I am ${this._age} years old`;
  }
}