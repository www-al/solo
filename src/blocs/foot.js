import Bt from "./bt.js"

export default class Footer {

    constructor(_c, _s, x, y) {

        this.x = x
        this.y = y


        this.w = 0
        this.h = 0

        this.tel = '55 3736 0277'
        this.mail = 'hola@solovino.mx'

        this.tel = new Bt(_c, _s, x, y + 260, 'TELÉFONO', '', () => { console.log('tel') })
        this.sms = new Bt(_c, _s, x, y + 170, 'SMS', '', () => { console.log('sms') })
        this.correo = new Bt(_c, _s, x, y + 60, 'CORREO', 'ELECTRONICO', () => { console.log('correo') })

    }

    draw(_c, _s) {

        _c.push()


        _s.style(_c, 700, 20, 30, _s.c.uno)
        _c.text('CONTÁCTANOS', this.x, this.y)

        _c.image(_s.imgs[1], this.tel.w - 20, this.correo.y - 10, 350 * .75, 350 * .75)

        _c.pop()

        this.tel.draw(_c, _s)
        this.sms.draw(_c, _s)
        this.correo.draw(_c, _s)

    }

    update(_c) {

    }

    pressed(_c, _s) {
        this.tel.pressed(_c, _s)
        this.sms.pressed(_c, _s)
        this.correo.pressed(_c, _s)
    }

    up(_c, _s) {
        this.tel.up(_c, _s)
        this.sms.up(_c, _s)
        this.correo.up(_c, _s)
    }

}
