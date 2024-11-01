//flattening
let arrays = [[1,2,3],[4,5,6],[7,8,9]];

let flattened = arrays.reduce((list, array) =>{
    return list.concat(array);
});
console.log(flattened); //output - [1,2,3,4,5,6,7,8,9]
/*
The reduce is used to loop through the main array and 
get each element which are another array of numbers, then 
the concat is used to merge these branched arrays together.
*/

//Your own loop
function loop(value, testFunction, updateFunction, body)
{
   while(testFunction(value))
   {
    body(value);
    value = updateFunction(value);
   }
}
/*
This function takes in 4 parameters and creates a 
feedback loop to execute until the testFunction 
variable is met. 
*/
/*
Function to sort an array using a while loop to 
continuesly find the smallest element and pushes it 
to the keeper list
*/
function mySort(arr)
{
    let endArr = [];
    while(arr.length>0)
    {
        endArr.push(arr.getMinIndex())
        arr.splice(arr.getMinIndex(),1);
    }
    return endArr;
}
/*
Uses a nested for loop to access all elements 
within a 2d list and push them into one main central 
list
*/
function myConcat(twoD)
{
    let concat = [];
    for(let i = 0;i<twoD.length;i++)
    {
        for(let j = 0;j<twoD[i].length;j++)
        {
            concat.push(twoD[i][j]);
        }
    }
    return concat;
}
/*
Loops through every element in a given array and 
checks it with the given rule, if passes with no 
falses then returns true.
*/
function myEvery(arr,check)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(!check(arr[i]))
        {
            return false;
        }
    }
    return true;
}
/*
Same concept as myEvery though once one is true it 
returns true
*/
function mySome(arr,check)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(check(arr[i]))
        {
            return true;
        }
    }
    return false;
}
/*
Loops through each item in the array checking 
if it eqauls the searching item if true returns 
else if its not found returns false
*/
function myIncludes(arr, item)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == item)
        {
            return true;
        }
    }
    return false;
}

/*Loops throught the string and if it doesn't equal 
the operator then it adds it to the end string joining it
*/
function myJoin(arr, seperator)
{
    let endString=""
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i]!=seperator)
        {
            endString+=arr[i];
        }
    }
    return endString;
}
/*
Loops through each element if it matches return true
*/
function myFind(arr, item)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == item)
        {
            return true;
        }
    }
    return false;
}
/*
Loops through each element if it matches return the index
*/
function myFind(arr, item)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == item)
        {
            return i;
        }
    }
    return -1;
}
/*
Same as previous
*/
function myIndexOf(arr, item)
{
    for(let i = 0;i<arr.length;i++)
    {
        if(arr[i] == item)
        {
            return i;
        }
    }
    return -1;
}
/*
loops through the given array making all elements the parameter element
*/
function myFill(arr,element)
{
    for(let i = 0;i<arr.length;i++)
    {
        arr[i] = element;
    }
}
/*
loops throught the array starting from the highest index and pushes it to the new list reversing the list
*/
function myReverse(arr)
{
    let reversed = [];
    for(let i = arr.length-1;i>=0;i--)
    {
        reversed.push(arr[i]);
    }
    return reversed;
}
/*
lopps through and pushed all elements except the first removing it
*/
function myShift(arr)
{
    //splice would be easier but thats another method
    let shifted = [];
    for(let i = 1;i<arr.length;i++)
    {
        shifted.push(arr[i]);
    }
    return shifted;
}
/*
lopps through and pushed all elements except the last removing it
*/
function myUnShift(arr)
{
    let Unshifted = [];
    for(let i = 0;i<arr.length-1;i++)
    {
        Unshifted.push(arr[i]);
    }
    return Unshifted;
}




