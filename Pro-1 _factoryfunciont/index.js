


//Problem 1: factory function iPhone1

function iPhone1(ASIN,color,display,camera) {
    let obj ={};
    obj.ASIN = ASIN,
    obj.color = color,
    obj.display =display,
    obj.camera = camera
//defining methods
    obj.dial = function(){
      return (console.log('tring..tring...'))  
    }

    obj.sendMessage = function(){
        return (console.log("Sending message...."))
    }

    obj.cameraClick = function(){
        return( console.log("Camera clicked"))
    }
    //returning the obj
    return obj;
}



let firstiphone1 = iPhone1("122we",'blue',"90mm","2.0mm")
let secondiphone1 = iPhone1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
firstiphone1.dial() 
firstiphone1.sendMessage()
firstiphone1.cameraClick() 


//Problem 2: factory function iPhone2


function iPhone2(ASIN,color,display,camera,bluetooth) {
    let obj ={};

    obj.ASIN = ASIN,
    obj.color = color,
    obj.display =display,
    obj.camera = camera,
    obj.bluetooth = bluetooth
//defining methods
    obj.dial = function(){
      return(console.log( "tring..tring..."  ))
    }

    obj.sendMessage = function(){
        return (console.log("Sending message...."))
    }

    obj.cameraClick = function(){
        return (console.log("Camera clicked"))
    }

    obj.connectBluetooth = function(){
        return (console.log("Bluetooth connected successfully"))
    }
     //returning the obj
  
    return obj;
}



let firstiphone2 = iPhone2("122we",'blue',"90mm","2.0mp")
firstiphone2.dial() 
firstiphone2.sendMessage()
firstiphone2.cameraClick() 
firstiphone2.connectBluetooth() 

