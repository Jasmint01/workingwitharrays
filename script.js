var wrapper= document.body.querySelector(".wrapper");
// Beginning of list, let's hope for the best..
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];

// ...beginning of for statement, setting up the warriors based on health & damagw
for (var i=0; i< warriors.length; i++){
 if(warriors[i].warrior===true && warriors[i].damage >= 2 && warriors[i].health >= 10){
 var element = document.createElement("div");
 var nameElement = document.createElement("h1");
 var damageElement = document.createElement("h2");
 var healthElement = document.createElement("h2");
//  Setting up text to show the warriors that have 10 or more health, and deal 2 or more damage 
// Remember to use >= , and === in which the value and type HAVE to match for it to be true
 nameElement.innerHTML = "Name: " + warriors[i].name;
 damageElement.innerHTML = "Damage: " + warriors[i].damage;
 healthElement.innerHTML = "Health: " + warriors[i].health;
// Setting the color red for names that contain the letter "A"
 if(warriors[i].name.includes("a")){
 element.style.color="red";

}
  
element.appendChild(nameElement);     
element.appendChild(damageElement);
element.appendChild(healthElement); 
}    
wrapper.appendChild(element);  
}
// The End, code is sucessful if it runs....