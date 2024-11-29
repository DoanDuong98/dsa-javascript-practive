// độ phức tạp trường hợp xấu nhất và trường hợp trung bình là Ο(n^2)
// Giải thuật này không thích hợp sử dụng với các tập dữ liệu lớn
// Sắp xếp chèn là chèn thêm một phần tử vào danh sách con đã qua sắp xếp. Phần tử được chèn vào vị trí thích hợp sao cho vẫn đảm bảo rằng danh sách con đó vẫn sắp theo thứ tự.

function insertionSort(a) {
  for (let i = 0; i < a.length; i++) {
    let val = a[i], index = i;
    while (index > 0 && a[index -1] > val) {
        a[index] = a[index - 1];
        index--;
    }
    a[index] = val
  }
  return a;
}

console.log(insertionSort([4, 3, 1, 5, 7, 9, 6, 2]))
