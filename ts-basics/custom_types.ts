// you can define the shape of your input separately in an interface, then use it as your inline annotation
interface Point {
  x: number,
  y: number
}


let drawPoint = (point: Point) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2,
  // name: "tom" // not valid input bc of our inline annotation
})