import BtIco from "../blocs/btIco.js"
import Bt from "../blocs/bt.js"

export default class Mario {

	constructor(_c, _s, x, y) {

		this.x = x
		this.y = y
		this.cuantas = "1"
		this.deque = "Tinto No se que"
		this.sub = "$ 420"
		this.total = 0
		this.color = _s.c.uno
		this.back = new BtIco(_c, _s, 5, _c.width - 65, this.y, 15, () => { _s.view = 't' })
		this.tel = new Bt(_c, _s, x, y + 250, 'TELÉFONO', '', () => { console.log('tel') })
		this.sms = new Bt(_c, _s, x, y + 350, 'SMS', '', () => { console.log('sms') })
	}

	draw(_c, _s) {

		_c.push()
		_s.style(_c, 200, 20, 20, _s.c.uno)

		for (var i = 0; i < _s.kart[0].length; i++) {
			_c.text(_s.kart[0][i][0], this.x, this.y + 50 + (i * 25))
			_c.text(_s.kart[0][i][1].name, this.x + 30, this.y + 50 + (i * 25))
			_c.text('$ ' + _s.kart[0][i][1].price * _s.kart[0][i][0], this.x + 300, this.y + 50 + (i * 25))
		}
		_c.pop()

		this.total = _s.kart[1]

		if (this.total == 0) {
			_c.push()
			_s.style(_c, 200, 20, 20, 0)
			_c.text('No hay articulos que mostrar', this.x, this.y + 50 + (_s.kart[0].length * 25))
			_c.pop()
		} else {
			_c.push()
			_s.style(_c, 200, 20, 20, 0)
			_c.text('$ ' + this.total, this.x + 300, this.y + 50 + (_s.kart[0].length * 25))

			_c.text("CONFIRMA TU PEDIDO POR", this.x, this.y + 100 + (_s.kart[0].length * 25))
			_c.pop()
			this.tel.y = this.y + 180 + (_s.kart[0].length * 20)
			this.sms.y = this.y + 280 + (_s.kart[0].length * 20)
			this.tel.draw(_c, _s)
			this.sms.draw(_c, _s)
		}


		this.back.draw(_c, _s)


	}

	pressed(_c, _s) {
		this.back.pressed(_c, _s)
		this.tel.pressed(_c, _s)
		this.sms.pressed(_c, _s)
	}

	up(_c, _s) {
		this.back.up(_c, _s)
		this.tel.up(_c, _s)
		this.sms.up(_c, _s)
	}


	removeFromKart = (_c, _s) => {

	}

}






















