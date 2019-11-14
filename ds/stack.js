// // stack{
// //     push(n){
// //         //n Should be added to stack
// //     }
// //     pop() {

// //     }
// //     peek(){

// //     }
// //     print() {

// //     }
// // }

// function Stack {
//     function push()

// }
// function stack()

// {
// console.log("hey you are invited for performing stack operations")
// var stack=[]
//
//        console.log(




        
//        )
        

//     }
//     else{
//         console.log("stack is overflow")
//     }

// }
// function pop(){
//  console.log(" element that is going to pop is"+stack[stack.length-1])
//  stack.length=stack.length-1
// }
// function peek(){
//     console.log(" element on the top of the list is"+stack[stack.length-1])
// }
// function print(){
//     console.log("hey current depth is"+stack.length)
//     console.log("hey you are left with  "+stack.length-20+"depth")

// }


// }







// stack implement
var stack=[]
function push(element){
        if(stack.length<20){
            //console.log("stack is vacant "+stack)
    
            stack[stack.length]=element
        }else{
            getstackstatus()
        }}
function getstackstatus(){
    if(stack.length===0){
        console.log("heystack is empty you can fill 20 item")
        
        
    }
    else{
        if(stack.length>=20){
            console.log("stack is full")
            
        }
        else{
            
            var depth=stack.length-20
        console.log("your are left with depth :  "+Math.abs(depth))
        
        }
    }
}
   function pop(){
       if(stack.length==0){
           getstackstatus()
           console.log(" there is no element to pop ")
       }
       console.log("element you are going to pop is "+stack[stack.length-1])
       stack.length=stack.length-1
   } 
   function peek(){
       if(stack.length==0){
           getstackstatus()
       }
       else
       console.log("element at top of the stack is"+stack[stack.length-1])
   }
   function print(){
       console.log(stack)
   }


//push(100)
push(200)
push(400)
push(700)
pop()
print()

getstackstatus()
