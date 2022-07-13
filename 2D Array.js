// Problem-1- Print Array in spiral form
// output = 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10

let Matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function spiralmatrix(Matrix)
{
    MinRow = 0;
    MinColumn = 0;
    MaxRow = Matrix.length -1;
    MaxColumn = Matrix[0].length - 1;
    No_OfElement = Matrix.length * Matrix[0].length;
    // console.log(No_OfElement);
    ElementCount = 0;

    while(ElementCount < No_OfElement)
    {
        // Print Top wall 
        for(let i = MinColumn; i <= MaxColumn && ElementCount < No_OfElement; i++ )
        {
            console.log(Matrix[MinRow][i]);
            ElementCount++;
        }
        MinRow++;

        // print Right wall
        for(let i = MinRow; i<= MaxRow && ElementCount < No_OfElement; i++ )
        {
            console.log(Matrix[i][MaxColumn]);
            ElementCount++;
        }
        MaxColumn--;
        
        // print bottom wall
        for(let i = MaxColumn; i>= MinColumn && ElementCount < No_OfElement; i-- )
        {
            console.log(Matrix[MaxRow][i]);
            ElementCount++;
        }
        MaxRow--

        // print left wall
        for(let i = MaxRow; i>=MinRow && ElementCount < No_OfElement; i-- )
        {
            console.log(Matrix[i][MinColumn]);
            ElementCount++;
        }
        MinColumn++;
    }
}
console.log(spiralmatrix(Matrix));
