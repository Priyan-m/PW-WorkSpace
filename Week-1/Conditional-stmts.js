/*Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with 
`if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript 
 
Hints to Solve:  
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For 
`runTests`, use a `switch` statement to handle different `testType` values, including a default case.*/
function launchBrowser(browserName){
    if(browserName==="chrome"){
        console.log("The searched browser name: " + browserName+ " is correct");
    }
    else{
        console.log("The searched browser name: " + browserName+ " is incorrect");
    }
}
launchBrowser("chrome");
function runTests(testType){
    switch (testType) {
        case "sanity":
            console.log("The testing type is sanity ");
            break;  
        case "regression":
            console.log("The testing type is regression");
            break;      
        default:
            console.log("The testing type is smoke");
            break;
    }
}
runTests("non-functional");
