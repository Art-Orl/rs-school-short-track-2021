function isMAC48Address(n) {
  if (typeof n !== 'string') return false;
  const k = n.split('-');
  if (k.length < 6 || k.length > 6) return false;
  for (let h = 0; h < k.length; h++) {
    if (k[h].length !== 2) return false;
  }
  const z = n.split('');

  const a = [];
  for (let i = 0; i < z.length; i++) {
    if (
      z[i] >= 0 ||
      z[i] === '-' ||
      z[i] === 'A' ||
      z[i] === 'B' ||
      z[i] === 'C' ||
      z[i] === 'D' ||
      z[i] === 'E' ||
      z[i] === 'F'
    )
      a.push(z[i]);
  }

  if (n === a.join('')) return true;
  return false;
}

module.exports = isMAC48Address;
