let output1=document.getElementById('output');
function cal1(value)
{
    output1.value += value;
}
function clear1()
{
    output1.value= '';
}
function res1()
{
    try{
        output1.value=eval(output1.value);
    }
    catch(error){
        output1.value='Error';
    }
}