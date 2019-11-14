// queue operations{
//     enqueue{

//     }
//     dequeue{

//     }
//     peek{

//     }
//     print{

//     }
//     getstatus{

//     }
// }
var queue=[]

function enqueue(element){
    if(queue.length<=20){
       queue[queue.length]=element
        

    }
    else{
       getqueuestatus()

}}
function dequeue(){
    if(queue.length!=0){
        console.log("element you are going to dequeue is "+queue[0])
    console.log(queue.length)
    // for(i=queue.length;i>=3;i--){
    //     queue[i]=queue[i-1]
    //     console.log("hiiiiii")


    for(i=1;i<queue.length-2;i++){
        //console.log(queue[i],queue[i-1])
        queue[i-1]=queue[i]
    }
    }
    else{
        getqueuestatus()
    }
    }

//}
function peek(){
    if(queue.length!=0){
        console.log("element at the begining of the queue is : "+queue[0])
    console.log("element at the end of the queue is : "+queue[queue.length-1] )
    }
    else{
        getqueuestatus()
    }
}

function getqueuestatus(){

    if(queue.length===0){
        console.log("hey queue is empty you can fill 20 item")
        
        
    }
    else{
        if(queue.length>=20){
            console.log("queue is full")
            
        }
        else{
            
            var depth=queue.length-20
        console.log("your are left with depth :  "+Math.abs(depth))
        
        }
    }
    
}
function print(){
    console.log(queue)
}


enqueue(100)
enqueue(200)
enqueue(300)
enqueue(400)
enqueue(500)
enqueue(600)
dequeue()
dequeue()
peek()
//print()



//print()
