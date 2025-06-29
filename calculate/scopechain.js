function a(){
    console.log("This is the function a ");
    console.log(b);
  
    function c(){
        console.log("This is the function c ");
        
        console.log(b);
        
    }
    c();
    
}
let b = 10;

a();