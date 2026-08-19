/*Assignment Details:  
Write a JavaScript function that evaluates a student's score
 and returns their grade using a switch statement 
to assess score ranges. 
 Assignment Requirements:  
1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result. 
 Hints to Solve:  
Use a `switch` statement with `true` for score range checks to assign grades.*/
function gradeCalculation(marks) {
    switch (true) {
        case (marks >= 90 && marks <= 100):
            return "A";

        case (marks >= 80 && marks < 90):
            return "B";

        case (marks >= 70 && marks < 80):
            return "C";

        case (marks >= 60 && marks < 70):
            return "D";

        case (marks >= 0 && marks < 60):
            return "F";

        default:
            return "Invalid marks";
    }
}

let marks = 2345;
console.log(gradeCalculation(marks));
