var solution = function (isBadVersion) {
    return function (n) {
        let start = 1;
        let end = n;
        while (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};