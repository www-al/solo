//////////////////////////////////////////////////////////////////////////////////
// IMPORTS
//////////////////////////////////////////////////////////////////////////////////

import Oink from "./src/oink.js"
import Home from "./src/views/home.js";
import Head from "./src/blocs/header.js"
import Tienda from "./src/views/tienda.js";
import Cats from "./src/views/categorias.js";
import Mario from "./src/views/mario.js";

let head, home, tienda, cats, mario

let _c = await new Q5()
let _s = new Oink(_c)

_s.loadAssets(_c)

_s.w = innerWidth
if (_s.w > 500) _s.w = 500

//////////////////////////////////////////////////////////////////////////////////
// SETUP
//////////////////////////////////////////////////////////////////////////////////

_c.setup = () => {

	_c.createCanvas(_s.w, 2000)

	_c.textFont("agenda")
	_c.noStroke()
	_c.textAlign(_c.LEFT, _c.TOP)

	head = new Head(_c, _s, 20, 20)
	home = new Home(_c, _s, 20, head.h)
	tienda = new Tienda(_c, _s, 20, 100)
	cats = new Cats(_c, _s, 20, 150)
	mario = new Mario(_c, _s, 20, 150)

	_c.in(home)

}

_c.in = () => {
	
	switch (_s.view) {
		case 'h':	
			// gsap.from(head, { y: - 300 , duration: 1 , delay: .2 , ease: "elastic.out(1,0.75)"})
			home.in()
		break;
		case 't':	tienda.in();
		break;
		// case 'c':	cats.draw(_c, _s);break;
		// case 'm':	mario.draw(_c, _s);break;
	}
}

//////////////////////////////////////////////////////////////////////////////////
// DRAW
//////////////////////////////////////////////////////////////////////////////////

_c.draw = () => {

	_c.clear()
	_c.background(255)

	if (_s.w != _c.width && _s.view == 'h') _c.resizeCanvas(_s.w, 2000)
	else if (_s.w != _c.width && _s.view != 'h') _c.resizeCanvas(_s.w, 700)

	head.draw(_c, _s)

	switch (_s.view) {
		case 'h':	home.draw(_c, _s);break;
		case 't':	tienda.draw(_c, _s);break;
		case 'c':	cats.draw(_c, _s);break;
		case 'm':	mario.draw(_c, _s);break;
	}


}

//////////////////////////////////////////////////////////////////////////////////
// MOUSE
//////////////////////////////////////////////////////////////////////////////////

_c.mousePressed = () => {
	switch (_s.view) {
		case 'h':
			head.pressed(_c, _s)
			home.pressed(_c, _s)
			break
		case 't':
			head.pressed(_c, _s)
			tienda.pressed(_c, _s)
			break
		case 'c':
			head.pressed(_c, _s)
			cats.pressed(_c, _s)
			break
		case 'm':
			head.pressed(_c, _s)
			mario.pressed(_c, _s)
			break
	}
}

_c.mouseReleased = () => {
	switch (_s.view) {
		case 'h':
			head.up(_c, _s)
			home.up(_c, _s)
			break
		case 't':
			head.up(_c, _s)
			tienda.up(_c, _s)
			break
		case 'c':
			head.up(_c, _s)
			cats.up(_c, _s)
			break
		case 'm':
			head.up(_c, _s)
			mario.up(_c, _s)
			break
	}
}










