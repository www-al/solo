
export default class Oink {

    constructor(q) {
        this.view = 'h'
        this.imgs = []
        this.c = { bg: [255, 255, 255], uno: [0, 0, 0], dos: [142, 190, 117], cuatro: [223, 47, 119] , tres: [208, 44, 44] }
        this.d = {}
        this.kart = [[], 0]

    }

    loadAssets = async (q) => {
        this.imgs[0] = await q.loadImage('./img/solo4.png')
        this.imgs[1] = await q.loadImage('./img/solo2.png')

        this.d = await q.loadJSON('./src/data.json', () => {
            this.loadImages(q)
        })

    }

    loadImages = async (q) => {
        this.imgs[2] = []
        for (var i = 0; i < this.d.data.length; i++) {
            this.imgs[2][i + 1] = await q.loadImage(this.d.data[i].img)
        }
    }


    style = (_c, _tw, _ts, _tl, _color) => {
        _c.textWeight(_tw)
        _c.textSize(_ts)
        _c.textLeading(_tl)
        _c.fill(_color)
    }

    ico = (_t, _c, _s, _x, _y, _color) => {

        switch (_t) {
            case 1:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(3)
                _c.line(_x, _y, _x + _s, _y)
                _c.line(_x + _s, _y, _x + _s, _y + _s)
                _c.line(_x, _y + _s, _x + _s, _y)
                _c.pop()
                break;

            case 2:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x, _y, _x + _s, _y)
                _c.line(_x, _y + (_s / 2), _x + _s, _y + (_s / 2))
                _c.line(_x, _y + _s, _x + _s, _y + _s)
                _c.pop()
                break;

            case 3:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x + _s * .05, _y, _x + _s * .95, _y)
                _c.line(_x + _s * .35, _y + 4, _x + _s * .65, _y + 4)
                _c.line(_x, _y + _s, _x + _s, _y + _s)
                _c.line(_x + _s * .05, _y, _x, _y + _s)
                _c.line(_x + _s * .95, _y, _x + _s, _y + _s)
                _c.curve(_x, _y + 25, _x + (_s * .25), _y - 1, _x + _s - (_s * .25), _y - 1, _x + _s, _y + 25)

                _c.pop()
                break;

            case 4:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x, _y + _s / 2, _x + _s * 1.5, _y + _s / 2)
                _c.line(_x + _s / 2, _y, _x, _y + _s / 2)
                _c.line(_x + _s / 2, _y + _s, _x, _y + (_s / 2))
                _c.pop()
                break;

            case 5:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x - _s / 2, _y + (_s / 2), _x + _s, _y + (_s / 2))
                _c.line(_x + _s / 2, _y, _x + _s, _y + _s / 2)
                _c.line(_x + _s / 2, _y + _s, _x + _s, _y + (_s / 2))
                _c.pop()
                break;

            case 6:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x, _y + _s / 2, _x + _s, _y + _s / 2)
                _c.pop()
                break;

            case 7:
                _c.push()
                _c.stroke(_color)
                _c.strokeWeight(2)
                _c.line(_x, _y + _s / 2, _x + _s, _y + _s / 2)
                _c.line(_x + _s / 2, _y, _x + _s / 2, _y + _s)
                _c.pop()
                break;

        }
    }

}
