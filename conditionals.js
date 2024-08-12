// if - else
// nested if
// switch case

function positive_negative(number){
    if(number > 0) {
        console.log('positive');
    }
    else if(number < 0){
        console.log('negative');
    }
    else{
        console.log('zero found');
    }
}

positive_negative(5);

function show_grade(mark){
    if(mark >= 90){
        console.log('A');
    }
    else{
        if(mark >= 80){
            console.log('B');
        }
        else{
            if(mark >= 70){
                console.log('C');
            }
            else{
                if(mark >= 60){
                    console.log('D');
                }
                else{
                    if(mark >= 50){
                        console.log('E');
                    }
                    else{
                        console.log('ReAppear');
                    }
                }
            }
        }
    }
}

show_grade(90);

// switch case

function day(dayNumber){    
    
    switch(dayNumber){
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday')
            break;                
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friday');
            break;
        case 7:
            console.log('Saturday')
            break;
            
        default:
            console.log('Enter a valid day')
    }
}

day(4);