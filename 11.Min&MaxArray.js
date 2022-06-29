// simple for loop

// let numArray = [2,43,35]
// for (i = 0; i <= numArray.length -1 ; i++)
// {
//     console.log(numArray[i]);
// }

// 

// let ArrayDefine = [242,34,55,77,22,8,5]

// let minvalue = ArrayDefine[0];
// for (i = 0; i<= ArrayDefine.length - 1; i++)
// {
//     if (ArrayDefine[i] < minvalue)
//     {
//         minvalue = ArrayDefine[i];
//     }
// }
// console.log(minvalue);


// let ArrayDefine = [242,34,55,77,22,8,5]

// let maxvalue = ArrayDefine[0];
// for (i = 0; i<= ArrayDefine.length - 1; i++)
// {
//     if (ArrayDefine[i] > maxvalue)
//     {
//         maxvalue = ArrayDefine[i];
//     }
// }
// console.log(maxvalue);

// 
let Array1 = [12,35,75,187,33,2,1,5]
let MinVal = Array1[0];
let MaxVal = Array1[0];
for (i = 0; i <=Array1.length - 1; i++)
{
    if(Array1[i] < MinVal)
    {
        MinVal = Array1[i];
    }
    else if ( Array1[i] > MaxVal )
    {
        MaxVal = Array1[i];
    }
}

console.log(MinVal);
console.log(MaxVal);
