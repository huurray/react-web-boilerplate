export function isDomain(url: string) {
  const reg = /(http(s)?:\/\/)/gi;
  return reg.test(url);
}
