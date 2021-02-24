function findEmailDomain(address) {
  const idx = address.lastIndexOf('@');
  return address.slice(idx + 1);
}
