/**
 * Add code for your class constructor in this file
 */
function Sprite (tempX, tempY){ 
    // this constructor expects two arguments
    // all object properties and methods begin with "this."
    this.x = tempX; // assign 1st argument to this.x 
    this.y = tempY; // assign 2nd argument to this.y
    this.xSpeed = random(-2, 2); // initialize .d property to 50
    this.ySpeed = random(-2, 2); // initialize .speed to a random number between 1 and -1
  
    // methods are functions that are assigned to property names
    this.move = function() {
    // define how the object will change location on screen each frame
      this.x += this.xSpeed; // move by the value of .speed
      this.y += this.ySpeed;
      if (this.x > width || this.x < 0){ // if the object reaches the right edge OR left edge
        this.xSpeed *= -1; // reverse polarity!
      }
      if (this.y > height || this.y < 0){ // if the object reaches the right edge OR left edge
          this.ySpeed *= -1; // reverse polarity!
        }
    }
    this.display = function(){ 
      // define how the object will look
      push();
      translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
      //body
      fill(28,172,120); // yellow
      ellipse(100,100,50,30);
      //tail
      triangle(75,100,60, 85,60,115)
      curve(95, 85, 100, 100, 100,110, 95, 120);// , curve arch up,
      //eyes
      fill(0)//black
      ellipse(115, 95, 10, 10); //    
      //tie
      fill(255,0,0)   
      rect(110,109,10,30);
      rect(110,120,10,35);
      triangle(115,165,110,155,120,155);//,150 up or down point,
      pop();
    }
  } //end of MyClass() constructor