function binarySearch(list, value) {
	// [1, 4, 7, 9, 10, 12]; 10
	let low = 0;
	let high = list.length;
	console.log('low', low);
	console.log('high', high);
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		console.log('mid', mid);
		if (list[mid] === value) {
			return mid;
		} else if (list[mid] > value) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}


console.log(binarySearch([1, 4, 7, 9, 10, 12], 1));
