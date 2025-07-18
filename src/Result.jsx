

function Result(props){

    const{name,marks,color}=props;

       let grade = '';
      if (marks >= 90) grade = 'A';
      else if (marks >= 80) grade = 'B';
      else if (marks >= 70) grade = 'C';
      else if (marks >= 60) grade = 'D';
      else grade = 'F';


    if(marks>=60){
        return(
            <h1 style={{color:"green"}}>  name: {name} your marks: {marks} Pass |Grade: {grade}  </h1>
        )

        }else{
            return(
                <h1 style={{color:"red"}}> name: {name} your marks: {marks} Fail |Grade: {grade}</h1>
            );
        }
    
        }
    

export default Result;