const cancel= document.getElementsByClassName('cancel-alert')[0]
const alert=document.getElementsByClassName('alert')[0]
const daily=document.getElementById('daily');
const weekly=document.getElementById("weekly");
const hourly=document.getElementById('hourly');
const monthly=document.getElementById("monthly");
const periods= document.getElementsByClassName("periods");
const userSearchButton=document.getElementById("user-search-button");
const userSearch=document.getElementById("user-search");
const mememail=document.getElementsByClassName('mememail');
const toggle=document.getElementsByClassName("toggle");
const container= document.getElementsByClassName('container')[0];
const save= document.getElementsByClassName("save")[0];
const cancelStorage= document.getElementsByClassName("cancel")[0];
const toggleNot= document.getElementById("toggleNot");
const sendEmail= document.getElementById('sendEmail');
const togglePub = document.getElementById("togglePub");
const proPub= document.getElementById("profPub");
const notificationDot= document.getElementById("notification-dot");
const bell= document.getElementsByClassName("profSvg")[0];



for(let i=0;i<periods.length;i++){
    let theperiods= document.getElementsByClassName("periods");
    let currperr=theperiods[i];
    currperr.addEventListener("click",(e)=>{
        theperiods[0].style.backgroundColor="white";
        theperiods[1].style.backgroundColor="white";
        theperiods[2].style.backgroundColor="white";
        theperiods[3].style.backgroundColor="white";

        e.target.style.backgroundColor="lightgreen"
       if(e.target.innerText==="Daily"){
        renderPeriod(dailyLabels,dailyData)
       }
       else if(e.target.innerText==="Hourly"){
        renderPeriod(hourlyLabels,hourlyData)
       }
       else if(e.target.innerText==="Monthly"){
        renderPeriod(monthlyLabels,monthlyData)
       }
       else{
        renderPeriod(weeklyLabels,weeklyData)
       }
    })
}



cancel.addEventListener('click',()=>{alert.style.display="none"

})

const weeklyLabels=["16-22","23-29","30-5","6-12","13-19","20-26","4-10","11-17","18-24","25-31"];
const weeklyData=[500,750,800,750,700,1000,900,1000,1500,1400,1600,2000];
const hourlyLabels=["0-3","3-04","04-12","12-16","16-20","20-23"];
const hourlyData=[500,1000,800,900,1500,2000];
const monthlyLabels=["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];
const monthlyData=[500,600,400,300,1500,7000,922,1100,1200,1100,1500,2500];
const dailyLabels=["mon","tue","web","thur","fri","sat","sun"];
const dailyData=[500,1000,800,900,1500,2000,2222,2500];

function renderPeriod(label,data){
    
    lineChart.data.labels=label;
    lineChart.data.datasets[0].data=data;
    lineChart.update()
}
window.onload=()=>{
    daily.click();
    if(localStorage.getItem("emailNotification")==="off"){
        toggleNot.click();
        
    }
    if(localStorage.getItem("public")==="off"){
        togglePub.click();
        console.log("jkl;m")
    }
}



let myChart=document.getElementById("myChart").getContext("2d");

let lineChart=new Chart("myChart",{
    type:"line",
    data:{
     labels:["16-22","23-29","30-5","6-12","13-19","20-26","4-10","11-17","18-24","25-31"],
     datasets:[{
         data:[
             500,1000,800,900,1500,2000,2222,2500],
         borderJoinStyle:"miter",
         lineTension:0,
     }]
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          display:false
      }
    }
})



// bar and dougnut charts
let myChartBar=document.getElementById("myChartBar").getContext("2d");

let barChart=new Chart("myChartBar",{
    type:"bar",
    data:{
     labels:["S","M","T","W","T","F","S"],
     datasets:[{
         data:[
            170,200,150,200,250,300,250],
         backgroundColor:"purple"

     }]
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          display:false
      }
    }
})



let myChartPie=document.getElementById("myChartPie").getContext("2d");

let roundChart=new Chart("myChartPie",{
    type:"doughnut",
    data:{
     labels:["Phones","Tablets","Desktop"],
     datasets:[{
         
         data:[
             60,20,20],
        backgroundColor:["red","blue","green"]
     }],
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          position:"right",
          display:true,
          labels:{
              boxWidth:30,
              fontSize:30
          }
          
      },
      
    }
})


for(let i=0;i<mememail.length;i++){
    userSearch.value="";
    let curr= mememail[i];
    curr.addEventListener("click",(e)=>{
     userSearch.value= e.currentTarget.firstElementChild.nextElementSibling.firstElementChild.innerText;
    })
}
let value=0;
let value2=0
toggle[0].addEventListener("click",(e)=>{
      value+=180;
      
      if(e.target.tagName==="I"){
      e.target.style.transform=`rotate(${value}deg)`;
      if(e.target.nextElementSibling.innerText==="ON"){
        e.target.nextElementSibling.innerText="OFF"
      }
      else{
        e.target.nextElementSibling.innerText="ON"
      }
     
      }
    })

    toggle[1].addEventListener("click",(e)=>{
      
        value2+=180;
       if(e.target.tagName==="I"){
       e.target.style.transform=`rotate(${value2}deg)`;
       if(e.target.nextElementSibling.innerText==="ON"){
         e.target.nextElementSibling.innerText="OFF"
       }
       else{
         e.target.nextElementSibling.innerText="ON"
         
       }
      
       }
     })




userSearchButton.addEventListener("click",(e)=>{

    e.preventDefault();
    if(!userSearch.value){
        return window.alert("Please enter an user to message")
    }
    else{
        userSearch.value="";
        window.alert("message sent")
    }
})


userSearch.addEventListener("keyup",(e)=>{
    let divTo=document.getElementsByClassName("last-left")[0];
    let auto=[];
    let names=document.getElementsByClassName('personName');
    for(let i=0;i<names.length;i++){
     let cur= names[i].innerText.toLowerCase();
     if(cur.includes(userSearch.value)){
         
         auto.push(names[i])
     }
    }

    const house=document.createElement("DIV");
    house.id="house";
    
    
     const listItems= auto.map(item=>`<p class=searchRes>${item.innerText}</p>`);
     if(userSearch.value&&auto.length){
    for(let i=0;i<auto.length;i++){
        let myNode= document.createElement("P");
        myNode.innerText=auto[i].innerText;
        myNode.className="searchRes";
        house.appendChild(myNode);
    }
}
    if(document.getElementById("house")){
        document.getElementById("house").remove();
    }
    
    
     divTo.appendChild(house);
    
     const options=document.getElementsByClassName("searchRes");
     for(let i=0;i<options.length;i++){
         let curr= options[i];
         curr.addEventListener("click",(e)=>{
          userSearch.value="";
          userSearch.value= e.target.innerText;
          house.style.display="none"
         })
     }




})

container.addEventListener("click",(e)=>{
if(document.getElementById("house")){
    document.getElementById("house").remove();
}
}
)


save.addEventListener("click",(e)=>{
    e.preventDefault();
    let emailNotification= sendEmail.innerText.toLowerCase();
    let public = proPub.innerText.toLowerCase();

    localStorage.setItem("emailNotification",emailNotification);
    localStorage.setItem("public",public);

    
  
})

cancelStorage.addEventListener("click",()=>{localStorage.clear()});

bell.addEventListener("click",(e)=>{
    const dropdown=document.createElement("DIV");
    dropdown.className="dropdown";
    const notificationsLi= document.createElement("P");
    notificationsLi.className="drop-item";
    const notificationsLi2=document.createElement("P");
    notificationsLi2.className="drop-item";

    const cancelModal= document.createElement('P');
    const can = document.createTextNode("X");
    cancelModal.className="drop-item";
    cancelModal.classList.add("cancelStyle");
    cancelModal.appendChild(can);


    const notificationText=document.createTextNode("You have a message!");
    const notificationText2=document.createTextNode("Your account is activated!");

    notificationsLi.appendChild(notificationText);
    notificationsLi2.appendChild(notificationText2)

    dropdown.appendChild(notificationsLi);
    dropdown.appendChild(notificationsLi2);
    dropdown .appendChild(cancelModal);

    cancelModal.addEventListener("click",()=>{
        dropdown.style.display="none";
    })


    bell.src="icons/dot.svg";
  
   document.getElementsByClassName("search")[0].appendChild(dropdown);


    


})

  
