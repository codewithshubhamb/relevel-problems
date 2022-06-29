let Array1 = [12,35,75,87,33,2,1,5]
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
