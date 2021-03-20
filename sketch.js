var dog,sadDog,happyDog;
var database
var foodStock, foodS, fedTime, lastFed
var foodOBJ

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on('value', readStock)
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodOBJ=new Food()
  feed= createButton('Feed the dog')
  feed.position(700,100)
  feed.mousePressed(feedDog)
  addFood= createButton('Add food')
  addFood.position(900,100)
  addFood.mousePressed(addFoods)
}
function feedDog(){
  dog.addImage(happyDog)
  if(foodOBJ.getFood()>0){
    foodOBJ.updateFood(foodOBJ.getFood()-1)
  }
  database.ref('/').update({
    Food:foodOBJ.getFood(),
    FeedTime:hour()
  })
}
function addFoods(){
foodS++
database.ref('/').update({
  Food:foodS
})


}
function readStock(data){
  foodS=data.val()
  foodOBJ.updateFood(foodS);
}

function draw() {
  background(46,139,87);
  drawSprites();
  foodOBJ.display();
  fedTime=database.ref('FeedTime')
  fedTime.on('value', function(data){
    lastFed=data.val();
  })
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
}

//function to update food stock and last fed time


//function to add food in stock
