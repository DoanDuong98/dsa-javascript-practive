

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // cách 1::
    const mi = -(2 ** 31);
    const mx = 2 ** 31 - 1;
    let ans = 0;
    for (; x != 0; x = ~~(x / 10)) {
        if (ans < ~~(mi / 10) || ans > ~~(mx / 10)) {
            return 0;
        }
        ans = ans * 10 + (x % 10);
    }
    return ans;
    // cách 2::
    let s = x.toString().split('');
    let left = 0, right = s.length;
    while(left < right) {
        if (isNaN(Number(s[left]))) {
            // left++;
        } else {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            right--;
        }
        left++;
    }
    let res = Number(s.join(''))
    if ((res > Math.pow(2, 31) -1) || (res < Math.pow(-2, 31))) return 0;
    return res;
};

console.log(reverse(42804));
