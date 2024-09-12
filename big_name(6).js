
const check_big_name=(friends)=>{
    let result = friends[0];
    for(let i=0;i<friends.length;i++)
    {
        if(result.length < friends[i].length)
        {
            result=friends[i];
        }
    }
    return result;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const ans = check_big_name(friends);
console.log(ans);