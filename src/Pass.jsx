
function Pass({name='unknown',marks, color='green',}) {
    if(marks===undefined){
        return(
            <h1>marks not uplod!</h1>
        )
    }    
    
        return(
            <div>
            <h2 style={{color:color}}>Pass</h2>
        <h3>{name} your marks is {marks} </h3>
        </div>
        )
    
}
export default Pass;