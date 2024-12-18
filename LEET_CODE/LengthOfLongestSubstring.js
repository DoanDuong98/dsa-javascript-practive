/**
 * @param {string} s
 * @return {number}
 */

// Để giải quyết bài toán này, chúng ta có thể sử dụng phương pháp Sliding Window (cửa sổ trượt) kết hợp với một cấu trúc dữ liệu như Set hoặc Map để theo dõi các ký tự đã gặp và vị trí của chúng.

// Sử dụng hai con trỏ left và right để chỉ ra cửa sổ hiện tại đang xét.
// Duyệt qua chuỗi, nếu gặp ký tự đã xuất hiện trong cửa sổ hiện tại, di chuyển con trỏ left đến ngay sau vị trí của ký tự đó.
// Cập nhật độ dài của chuỗi con không lặp lại dài nhất trong quá trình duyệt.

var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Nếu ký tự đã có trong map và nằm trong khoảng cửa sổ hiện tại
        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1; // Di chuyển left đến ngay sau vị trí của ký tự lặp
        }

        // Cập nhật vị trí của ký tự hiện tại
        seen.set(char, right);

        // Tính độ dài của chuỗi con hiện tại và cập nhật maxLength
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


