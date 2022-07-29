var containsDuplicate = function(nums) {
    nums.sort();
    for (i = 1; i < nums.length; i++){
        if (nums[i] == nums[i - 1]){
            return true;
        }   
    }
    return false;
};

