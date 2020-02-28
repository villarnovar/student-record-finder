let record = document.getElementById("text2");
let submit = document.getElementById("button");
let result;
let wrong = false;

submit.addEventListener("click", show);
function show(event){
    event.preventDefault();
    result = record.value;
    printResults();
    result = "";

}

function printResults(){
    for(let i = 0; i < students.length;  i++){
       if(result.toLowerCase() === students[i].name.toLowerCase()){
            console.log(students[i].name);
            document.getElementById("demo").innerHTML = `"NAME: ${students[i].name} <br> COURSE: ${students[i].course} <br> SCORES: ${students[i].scores}<br> GPA: ${students[i].gpa} <br> GRADE: ${students[i].grade}"`;
            wrong = true;
            //console.log(result);//
       } else if(wrong === false){ 
           document.getElementById("demo").innerHTML = "NOT FOUND";
    }
}

            }
    

    



