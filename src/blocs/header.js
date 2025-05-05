
export default class Head {

    constructor(_c, _s, x, y) {

        this.x = x
        this.y = y

        this.textHeight = 60
        this.padding = 20
        this.imgHeight = _s.imgs[0].height * (_c.width / _s.imgs[0].width)
        this.w = _c.width
        this.h = y + this.textHeight + this.imgHeight + (this.padding * 2)

        this.color = _s.c.uno

    }

    draw(_c, _s) {

        push()
        
        if (_s.view == 'h') _c.image(_s.imgs[0], 0, 20 + this.textHeight + this.padding, this.w * .95, this.imgHeight)

        _s.style(_c, 800, this.textHeight, this.textHeight, this.color)
        _c.text('SOLOVINO', this.x, this.y)

        pop()

    }

    pressed(_c, _s) {
        if (_c.mouseX > this.x && _c.mouseY > this.y && _c.mouseX < this.w && _c.mouseY < this.y + this.textHeight) {
            this.color = 200
        }
    }

    up(_c, _s) {
        if (_c.mouseX > this.x && _c.mouseY > this.y && _c.mouseX < this.w && _c.mouseY < this.y + this.textHeight) {
            if (_s.view != 'h') {
                _s.view = 'h'
                _c.resizeCanvas(_s.w, 2000)
                _c.in()
            }
        }
        this.color = _s.c.uno
    }

}



