{
  function getProperty<T, K extends keyof T>(obj: T, property: K): T[K] {
    return obj[property];
  }
  const user = { name: 'Saif', age: 30 };
  console.log(getProperty(user, 'name'));
}
