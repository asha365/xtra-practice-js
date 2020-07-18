//You javascript code will go here
//problem solving-1
var age = 15;
if (age > 18){
    if(age > 30){
        console.log('You are a complete man!');
    }else if(age > 60){
        console.log('you are old man');
    } else{
        console.log('you are young man');
    } 
}else {
        console.log('you are child!');
    }

   //problem solving-2 (running)
    var age = 31;
    if(age >= 18){
        console.log('you are a adult man');
    }else if(age >= 30){
        console.log('you are a complete man');
    }else if(age >= 60){
        console.log('you are a old man');
    }
    else{
        console.log('you are a child!');
    }

    //problem solving-3
    var myAge = 19;
    if(myAge > 20 && myAge < 40){
        console.log('you are a young person');
    }else if(myAge > 40 && myAge < 60){
        console.log('you are old person');
    }
    else if(myAge > 15 && myAge < 20){
        console.log('you are child');
    }

    //problem solving-4
    var age = 17;
    if(age > 18){
        console.log('now you are adult');
    }
    else{
        console.log('no you are not aged enough to be a adult');
    }

    
    //problem solving-5
    var todayDate = 'Thursday';
    if(todayDate == 'Friday'){
        console.log('It is closed today');
    }else if(todayDate == 'Thursday'){
        console.log('It is partially closed');
    }else if(todayDate == 'saturday'){
        console.log('Some office are closed');
    }else{
        console.log('It is normal working day');
    }

    //problem solving-6
    //nesting conditional statemant 
    var num = 11;
    if(num > 1){
        if(num > 10){
            console.log('Greater then 10');
        }else{
            console.log('Somewhere between 2-10');
        }
    }

    //problem solving-7
    //bigest number using function and array
    function largesNumber(numbers){
        var largest = numbers[0]; 
        for(i = 1; i < numbers.length; i++){
            var currentNumber = numbers[i];
            if(currentNumber > largest){
                largest = currentNumber;
            }
        }
        return largest;
    }
    var largesNum = largesNumber([34, 45, 79, 59, 100]);
    console.log(largesNum);


