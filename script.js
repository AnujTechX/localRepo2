let str='Anuj';

setInterval(()=>{
    let last=str[str.length-1];
    str=last+str.substring(0,str.length-1);
    console.log(str)
  },1000)

  


