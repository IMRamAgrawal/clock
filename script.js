setInterval (()=>{
let d = new Date();
hours = d.getHours();
Minutes = d.getMinutes();
Seconds = d.getSeconds();
hour1 = 30*hours + Minutes/2;
Minute1 = 6*Minutes;
Second1 = 6*Seconds;

   hour.style.transform = `rotate(${hour1}deg)`;
   minute.style.transform = `rotate(${Minute1}deg)`;
   second.style.transform = `rotate(${Second1}deg)`},1000);

   for(let i=0; i<24;i++){
      Hours.innerHTML = Hours.innerHTML + `option${i}`
   }
   