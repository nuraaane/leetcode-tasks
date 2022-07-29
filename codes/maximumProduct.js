var maximumProduct = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    });
    let result= Math.max(nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3],nums[0]*nums[nums.length - 1]*nums[1]);
    return result;
};
