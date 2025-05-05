
export default class Card {

    constructor(_c, _s, x, y) {

        this.x = x
        this.y = y


        this.w = 0
        this.h = 0



    }

    draw(_c, _s, name = '', sub = '', info = '') {

        _c.push()
        _s.style(_c, 800, 25, 25, _s.c.uno)
        _c.text(name.toUpperCase(), this.x, this.y)
        _s.style(_c, 800, 20, 20, _s.c.uno)
        _c.text(sub.toUpperCase(), this.x, this.y + 30)
        _s.style(_c, 200, 15, 20, _s.c.uno)
        _c.text(info, this.x, this.y + 60, 55, 5)
        _c.pop()


    }

    update(_c) {

    }

    pressed(_c) {

    }

    up(_c) {

    }

}
