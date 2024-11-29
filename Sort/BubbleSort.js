//  Ο(n^2)
// Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn
// Thuật toán cho cách sắp xếp này sẽ lần lượt đưa các số lớn nhất về ví trí cuối dãy bằng cách so sánh các cặp số kề nhau.

/**
 * Description placeholder
 *
 * @param {*} a array
 */
function bubbleSort(a) {
  let n = a.length, i =0, j= i+1;
  while (j <= n) {
    if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    i++;
    j++;
    if (j == n) {
        i = 0;
        j= i+1;
        n--;
    }
  }
  return a;
}

console.log(bubbleSort([1, 3, 45, 6, 2, 4]));
