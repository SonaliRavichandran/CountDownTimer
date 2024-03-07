 
const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")




function UpdateTime(){
const currentyear=new Date().getFullYear();
//console.log(currentyear+1)

const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`)
//console.log(newyear)
const currentdate=new Date()
//console.log(currentdate)
const diff=newyear-currentdate
const d=Math.floor(diff/1000/60/60/24)
const h=Math.floor((diff/1000/60/60)%24)
const m=Math.floor((diff/1000/60)%60)
const s=Math.floor((diff/1000)%60)

//console.log(d+" "+h+" "+m+" "+s)

days.innerHTML=d<10? "0"+d:d;
hours.innerHTML=h<10? "0"+h:h;
minutes.innerHTML=m<10? "0"+m:m;
seconds.innerHTML=s<10? "0"+s:s;
}
setInterval(UpdateTime,1000)

/*javascript date are in milliseconds
1s=1000ms
1m=60s
1hr=60m
1day=24hrs
*/