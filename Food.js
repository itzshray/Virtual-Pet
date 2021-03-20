class Food{
    constructor(){
        this.foodStock=0
        this.lastFed
        this.image=loadImage('Images/Milk.png')

    }
    updateFood(food){
        this.foodStock=food
    }
    getFood(){
        return this.foodStock
    }
    getFeedTime(lastFed){
        this.ladtFed=lastFed
    }
    display(){
        var x = 50
        var y = 50
        imageMode(CENTER)
        image(this.image,700,200, 50, 50)
        if (this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=50
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }

        }
    }
}

