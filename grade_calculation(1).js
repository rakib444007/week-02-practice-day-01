

const check_grade=(res)=>{


    if(res<0 || res>100){
        console.log("Invalid!!");

    }
    else if(res>=0 && res<33){
        console.log("You are fail.\n you got grade: F ");
    
    }
    else if(res>=33 && res<40){
        console.log("you got grade: D");
    }
    else if(res>=40 && res<50){
        console.log("you got grade: C");
    }
    else if(res>=50 && res<60){
        console.log("you got grade: B");
    }
    else if(res>=60 && res<70){
        console.log("you got grade: A-");
    }
    else if(res>=70 && res<80){
        console.log("you got grade: A");
    }
    else{

        console.log("you got grade: A+");
    }

}


const result =22;
check_grade(result);