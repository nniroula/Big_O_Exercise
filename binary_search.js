
// this is a binary search algorithm, search for num
function binary_search(arr, num){
    // array must be sorted
    // let middle_value = 0;
    // let middle_index = 0;
    let upper_index = arr.length - 1;
    let lower_index = 0;

    // for(let i = 0; i< arr.length; i++){
    while(lower_index <= upper_index){
        let middle_index = Math.floor((lower_index + upper_index)/2);
        let middle_value = (arr[middle_index]);
        // compare
        if(num === middle_value){
            return `Found at index ${middle_index}`;
        }
        else if (num > middle_value){
            // shift lower index to the middle value, slice and get new array
            lower_index = middle_index + 1;
            // arr = arr.slice(lower_index);  // slices an array at lower index
            // now get middle index again at the top of the loop 
            // continue;
        }
        else if (num < middle_value){
            upper_index = middle_index;
            // arr = arr.slice(0, upper_index);
            // continue;
        }
    }
    return "Not found"
}

let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(binary_search(arr, 6));   // this works
console.log(binary_search(arr, 3));     // this does not work

// node filename.js in terminal