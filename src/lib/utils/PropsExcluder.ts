export function excludeProps<T extends {}>(props: T, ...keys: string[]) {
  keys.push('children');
  return Object.fromEntries(Object.entries(props).filter((k) => !keys.includes(k[0])));
}
