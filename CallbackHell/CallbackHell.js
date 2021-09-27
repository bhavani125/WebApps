const getRollNo = () => {
    setTimeout( () => {
        console.log('rollNo');
        let roll_no=[1,2,3,4,5];
        console.log(roll_no);
    
        setTimeout( (rollno) =>{
            const biodata = {
                name :'bhavani',
                age : 23
            }
            console.log(`my rollnumber is ${rollno} my name is ${biodata.name} and iam ${biodata.age} years old`);
              
            setTimeout( (name) =>{
                biodata.gender = 'female';
                console.log(`my rollnumber is ${rollno} my name is ${biodata.name} and iam ${biodata.age} years old and iam ${biodata.gender}`);
            },2000,biodata.name);
        
        }, 2000, roll_no[1])

    },2000);
}
getRollNo();
