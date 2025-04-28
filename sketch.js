
import Solovino from "./src/oink.js";
import Tienda from "./src/tienda.js";

/////////////////////////////////////////////////////////////////////////////////////////////

let q = await new Q5();
let s = new Solovino(q)
let t = new Tienda( q , s )

s.arrow = await q.loadImage('./img/arrow.png')
s.arrowl = await q.loadImage('./img/arrowL.png')
s.phone = await q.loadImage('./img/phone.png')
s.b1 = await q.loadImage('./img/1.png')
s.b2 = await q.loadImage('./img/2.png')
s.b3 = await q.loadImage('./img/3.png')
s.b4 = await q.loadImage('./img/4.png')

s.burger = await q.loadImage('./img/burger.png')
s.bag = await q.loadImage('./img/bag.png')
s.solo = await q.loadImage('./img/solo.png')

q.setup = () => {
  stopTouchScrolling(q.createCanvas(innerWidth, innerHeight))
  q.textFont("agenda")
  q.noStroke()
  q.textAlign(q.LEFT , q.TOP)
}

let view = 'h'

/////////////////////////////////////////////////////////////////////////////////////////////

q.draw = () => {
  
  q.clear()
  if(innerWidth!=q.width || innerHeight!=q.height) q.resizeCanvas(innerWidth,innerHeight)
  
  s.logo( q , s.w(.02) , 0 )
  
  switch(view){
    case 'h' : s.home(q, s.w(.05) , s.h(.15));        break
    case 'm' : s.local(q , s.w(.05) , s.h(.15));      break
    case 'e' : s.evento( q , s.w(.05) , s.h(.15) );   break
    case 't' : t.tienda( q , s , s.w(.05) , s.h(.15) ); break
  }
  
}

/////////////////////////////////////////////////////////////////////////////////////////////

q.mouseReleased = () => {

  if(view=='h' && q.mouseX > s.w(.02) && q.mouseY > s.h(.3) && q.mouseX < s.w(.6) && q.mouseY < s.h(.4) ) view = 'm'
  else if(view=='h' && q.mouseX > s.w(.02) && q.mouseY > s.h(.41) && q.mouseX < s.w(.6) && q.mouseY < s.h(.51) ) view = 'e'
  else if(view=='h' && q.mouseX > s.w(.02) && q.mouseY > s.h(.52) && q.mouseX < s.w(.6) && q.mouseY < s.h(.58) ) view = 't'
  else if(view!='h' && view != 't' && q.mouseX > 0 && q.mouseY > 0 && q.mouseX < s.w() && q.mouseY < s.h() ) view = 'h'
  else if(view== 't' && q.mouseX > 0 && q.mouseY > 0 && q.mouseX < s.w() && q.mouseY < s.h(.1) ) view = 'h'
  else if(view== 't' && q.mouseX > s.w(.8) && q.mouseY > s.h(.2) && q.mouseX < (s.w(.8)+30) && q.mouseY < (s.h(.2)+30)){ 
    if(t.view == 't') t.view = 'kart'
    else t.view = 't'
  }else if(view== 't' && q.mouseX > s.w(.1) && q.mouseY > s.h(.2) && q.mouseX < (s.w(.1)+30) && q.mouseY < (s.h(.2)+30)){
    if(t.view == 't') t.view = 'menu'
    else t.view = 't'
  }else if(view== 't' && q.mouseX > s.w(.1) && q.mouseY > s.h(.5) && q.mouseX < s.w(.2) && q.mouseY < s.h(.6)) t.menos()
  else if(view== 't' && q.mouseX > s.w(.8) && q.mouseY > s.h(.5) && q.mouseX < s.w(.9) && q.mouseY < s.h(.6)) t.mas()

}

function stopTouchScrolling(canvas){
  document.body.addEventListener("touchstart", function (e) {if (e.target == canvas) {e.preventDefault()}}, { passive: false })
  document.body.addEventListener("touchend", function (e) {if (e.target == canvas) {e.preventDefault()}}, { passive: false })
  document.body.addEventListener("touchmove", function (e) {if (e.target == canvas) {e.preventDefault()}}, { passive: false })
}
  
  
    








