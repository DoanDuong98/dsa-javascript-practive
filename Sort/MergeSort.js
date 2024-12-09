/*
 * @param {*} a 
 * 
 * Sắp xếp trộn (Merge Sort) là một giải thuật sắp xếp dựa trên giải thuật Chia để trị (Divide and Conquer). 
 * Với độ phức tạp thời gian trường hợp xấu nhất là Ο(n log n) thì đây là một trong các giải thuật đáng được quan tâm nhất.
 * Đầu tiên, giải thuật sắp xếp trộn chia mảng thành hai nửa và sau đó kết hợp chúng lại với nhau thành một mảng đã được sắp xếp.
 * mergeSort(a[], l,  r)
    if r > l
     1. Tìm chỉ số nằm giữa mảng để chia mảng thành 2 nửa:
             middle m = (l+r)/2
     2. Gọi đệ quy hàm mergeSort cho nửa đầu tiên:  
             mergeSort(a, l, m)
     3. Gọi đệ quy hàm mergeSort cho nửa thứ hai:
             mergeSort(a, m+1, r)
     4. Gộp 2 nửa mảng đã sắp xếp ở (2) và (3):
             merge(a, l, m, r)
 */


function mergeSort(a) {
    let left = 0, right = a.length
    while (right >= left) {
        let middle = Math.floor((left+right)/2);
        // mergeSort(a, left, middle)
        // mergeSort(a, middle+1, middle)
    }
}

