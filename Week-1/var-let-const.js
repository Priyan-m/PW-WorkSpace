/*Assignment Details:   
Declare a global variable and shadow it inside a function using both
`var` and `let` to see how they behave 
differently when printed.  
  Assignment Requirements:   
1. Declare a const name as browserName (global)  
2. Assign value as Chrome  
3. Create a function by name getBrowserName  
4. Create if condition inside function to check if browser is chrome, then  
5. Declare a local variable (browserName) and print that variable inside function
 (outside block) 
6. Call that function from the javascript  
  Hints to Solve:   - Use 'var' first as block variable and then convert that as 'let' - 
Confirm how it works*/
const browserName = "chrome"; 
function getBrowserName(){
    if(browserName==="chrome"){
        var browserName="Firefox"; //hoisting property only carries the declaration
    }
    console.log(browserName);
}
getBrowserName();