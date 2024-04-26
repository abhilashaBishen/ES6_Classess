// creation using Constructor function

function IPhone3(ASIN,color,display,camera,bluetooth) {

//.call() method is used to invoke a function with a specified this value;

    this.ASIN = ASIN;
    this.color = color;
    this.display =display;
    this.camera = camera;
    this.bluetooth = bluetooth;
//defining methods inside the constructor
    this.dial = function(){
      return "tring..tring..." 
    }

    this.sendMessage = function(){
        return "Sending message...."
    }

    this.cameraClick = function(){
        return "Camera clicked"
    }

    this.connectBluetooth = function(){
        return "Bluetooth connected successfully"
    }
    
    
}


//creating a new IPhone3 object using .call()
let i3 = {};
IPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

console.log(i3.ASIN); 
console.log(i3.color); 
console.log(i3.display); 
console.log(i3.camera); 
console.log(i3.bluetooth); 


console.log(i3.dial()); 
console.log(i3.sendMessage()); 
console.log(i3.cameraClick()); 
console.log(i3.connectBluetooth());

