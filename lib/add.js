
function add(n1, n2) {
  var a1 = n1.split('').reverse();
  var a2 = n2.split('').reverse();
  var c1 = [];
  var l = a1.length > a2.length ? a1.length : a2.length;
  var flag = 0;
  for (var i = 0; i < l; i++) {
    var n = (+a1[i] || 0) + (+a2[i] || 0) + flag;
    flag = 0;
    if (n > 10) {
      n -= 10
      flag = 1;
    }
    c1.push(n);
  }

  return c1.reverse().join('');
}

module.exports = add