

const monthlySavings=(arr,cost)=>{

    if(typeof arr != "object")
        return "invalid input";
    if(typeof cost != "number")
        return "invalid input";
    let ans = 0;
    for(let i=0;i<arr.length;i++)
    {
       
        if(arr[i] >= 3000)
        {
           
            ans = ans + arr[i];
        }
    }

    let res = (20/100) * ans;


    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let overall = Math.abs(sum - res);
    

    if(overall >= cost)
    {
        let saving = Math.abs(cost - overall);
        if(saving >= 0)
            return saving;
    }
    else
    {
        return "earn more";
    }

}




let all_payment = [900,2700,3400];
const living_cost = 10000;


let ans = monthlySavings(all_payment,living_cost);

console.log(ans);