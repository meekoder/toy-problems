function domainType(domains) {
  const tldomains = {
    'org': 'organization',
    'net': 'network',
    'info': 'information',
    'com': 'commercial',
  };
  return domains.map(d => tldomains[d.substring(d.lastIndexOf('.') + 1)]);
}
