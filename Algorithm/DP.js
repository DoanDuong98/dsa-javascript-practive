/**
 *
 *
 *
 * Thuật toán quy hoạch động giống như các thuật toán Chia để trị ở chỗ chúng chia nhỏ vấn đề thành các bài toán con nhỏ hơn và sau đó thành các bài toán con thậm chí có thể nhỏ hơn.
 * Nhưng không giống như Chia để trị, các bài toán con này không thể được giải quyết một cách độc lập.
 * Thay vào đó, kết quả của các bài toán con này được lưu và sử dụng cho các bài toán con tương tự hoặc các bài toán con gối nhau.
 * Chúng ta sử dụng quy hoạch động khi chúng ta gặp bài toán có thể được chia nhỏ thành các bài toán con tương tự để có thể sử dụng lại kết quả. Thường thì các thuật toán này được sử dụng để tối ưu hóa.
 * Trước khi giải bài toán con, thuật toán quy hoạch động sẽ thử kiểm tra kết quả của các bài toán con đã giải trước đó.
 * Các giải pháp của các bài toán con được kết hợp để có được giải pháp tối ưu.
 */

function dynamicProgramming(a) {
  let l = [],
    n = a.length,
    count = 1,
    maxLength = 0;
  l[0] = a[0];
  for (let i = 1; i < n; i++) {
    if (a[i] >= a[i - 1]) {
      console.log("i::", i, a[i]);
      l.push(a[i]);
      count++;
    } else {
      console.log("max::", maxLength, count);
      if (!maxLength || maxLength > count) {
        console.log("=====", l);
        l = [a[i]];
        maxLength = count;
        count = 1;
      }
    }
  }
  console.log("Result:::", l.join(" "));
  return l;
}

// dynamicProgramming([
//   1, 2, 4, 6, 7, 4, 3, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4,
// ]);

function check(n, edges, u, v) {
  // Step 1: Build the adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  // Step 2: Perform DFS to check for a path
  const visited = new Array(n + 1).fill(false);

  function dfs(node) {
    if (node === v) return true; // Found the target node
    visited[node] = true;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor] && dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }

  return dfs(u);
}

// check(3, [[1, 2],[2, 3]],1,3);

function graphFunction(n, e, u, v) {
  console.log("u:::", u);
  console.log("v:::", v);
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of e) {
    graph[from].push(to);
  }
  let max = -1;

  const visited = new Array(n + 1).fill(false);
  console.log(graph);
  let count = 0;
  function dfs(node) {

    console.log("node:::", node);
    if (node === v) {
      console.log("count - max:::", count, max, count < max || max == -1);
      if (count < max || max == -1) {
        max = count;
        console.log("11111", max);
      }
      count = 1;
      // return max;
    } else {
        count++;
    }
    // visited[node] = true;
    for (const neighbor of graph[node]) {
      console.log("neighbor:::", neighbor);
      //   if (!visited[neighbor]) {
      dfs(neighbor);
      //   } else count = 1;
    }
    return -1;
  }

  dfs(u);
  return max;
}

console.log("RESULT::",
  graphFunction(
    6,
    [
      [1, 3],
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
      [6, 5],
      [4, 5],
    ],
    2,
    3
  )
);
