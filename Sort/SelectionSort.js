// Giải thuật này không phù hợp với tập dữ liệu lớn khi mà độ phức tạp trường hợp xấu nhất và trường hợp trung bình là O(n2) với n là số phần tử.
// Giải thuật sắp xếp này là một giải thuật dựa trên việc so sánh in-place, 
// trong đó danh sách được chia thành hai phần, phần được sắp xếp (sorted list) ở bên trái và phần chưa được sắp xếp (unsorted list) ở bên phải.


function selectionSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                let temp = a[i];
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a;
}

console.log(selectionSort([3,2,1,3,4,5]))


