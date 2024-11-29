// Ο(log n)

function search(a,x) {
    // arg1.sort((a,b) => a - b)
    let n = a.length, l = 0, r = n-1;
	while (l < r){
		let mid = Math.floor((l+r)/2);
        console.log(mid, a[mid])
		if (a[mid] < x){
			l = mid+1;
		}
		else{
			r = mid;
		}
	}
	if (a[l] == x){
		return l;
	}
	return -1;
}

console.log(search([2,2,2,2], 2))
