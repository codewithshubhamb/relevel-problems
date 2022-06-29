function printTable(n,i)
{
    if (i > 10){
        return 0;
    }
    else
    {
        console.log(`${n} * ${i} = ${n * i}`);
        i++;
    }
    printTable(n,i)
}
printTable(10,1);