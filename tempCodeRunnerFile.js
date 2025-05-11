let str='Anuj';
let count=0;
 let stop=setInterval(()=>{
    let last=str[str.length-1];
    str=last+str.substring(0,str.length-1);
    console.log(str);
    count++;
    if(count===8){
      clearInterval(stop)
      console.log("Rotation end")
    }

  },1000)