// CHECK IF ARRAY HAS A NUMBER APPEARED TWICE OR EACH ONE IS DISTINCT - [1,2,3,1] OR [1,2,3,4]

// Using SET ( it only stores unique value )
// Beats 97.28%

function containsdouble(nums){
    const seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}

console.log(containsdouble([1,2,3,1])); // true

console.log(containsdouble([1,2,3,4])); // false
