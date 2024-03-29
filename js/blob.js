class Blob {
  constructor(x, y, r, color) {
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0, 0);
    this.color = color;
    this.speed = 30;
  }
  
  update() {
    const newVel = createVector(
      mouseX - width / 2,
      mouseY - height / 2
    );
    newVel.setMag(this.speed);
    this.vel.lerp(newVel, 0.1);
    this.pos.add(this.vel);
  }
  
  eats(other) {
    const d = p5.Vector.dist(this.pos, other.pos);

    if(d < this.r + other.r) {
      const sum = PI * this.r**2 + PI * other.r**2;
      this.r = sqrt(sum /PI);
      if(this.speed > 16) {
        this.speed -= 0.1;
      }
      console.log(this.speed);

      return true;
    }
    return false;
  }

  show() {
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
