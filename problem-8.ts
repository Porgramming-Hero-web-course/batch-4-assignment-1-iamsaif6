{
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }
  const user: { name: string; age: number; email: string } = {
    name: 'Saif Hasan',
    age: 40,
    email: 'demo@mail.com',
  };
  const isValid = validateKeys(user, ['name', 'age', 'email']);
  console.log(isValid);
}
