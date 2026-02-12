class DrawElements {

  canvas;
  ctx;

  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext('2d');
  }

  drawRect(
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    return this.ctx.fillRect(x, y, width, height);
  }

}

export { DrawElements }
