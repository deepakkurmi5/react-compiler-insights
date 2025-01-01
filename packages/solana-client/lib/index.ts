export function addFn(a: number) {
  return a + 9;
}

export class Account {
  constructor(public name: string) {}

  getName(): string {
    return this.name;
  }
}
