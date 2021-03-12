function delivery(order, shoppers) {
  return shoppers.map(s => {
    const fulfill = (s[0] + order[0]) / s[1] + s[2];
    const wait = order[1] + order[2];
    if (fulfill < order[1]) return false;
    if (fulfill > wait) return false;
    return true;
  });
}
