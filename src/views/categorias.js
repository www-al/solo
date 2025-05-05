import BtIco from "../blocs/btIco.js"

export default class Cats {

	constructor(_c, _s, x, y) {


		this.x = x
		this.y = y

		this.color = _s.c.uno

		this.categories = _s.d.categories

		this.back = new BtIco(_c, _s, 4, 50, this.y, 15, () => { _s.view = 't' })

	}

	draw(_c, _s) {

		_c.push()
		_s.style(_c, 800, 40, 70, _s.c.tres)
		for(var i=0;i<this.categories.length;i++){
			_c.text(this.categories[i].name, this.x + 80, this.y - 20 + (i * 70))
		}		
		_c.pop()
		this.back.draw(_c, _s)

	}

	pressed(_c, _s) {
		this.back.pressed(_c, _s)
	}

	up(_c, _s) {
		this.back.up(_c, _s)
	}

}












