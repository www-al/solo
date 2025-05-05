import Card from "../blocs/card.js"
import Bt from "../blocs/bt.js"
import BtIco from "../blocs/btIco.js"
import VonBotella from "../blocs/vonbot.js"


export default class Tienda {
    constructor(_c, _s, x, y) {

        this.x = x
        this.y = y

        this.view = 't'
        this.id = 1

        this.d = _s.d.data

        this.card = new Card(_c, _s, x, y + 340)

        this.bt_cats = new BtIco(_c, _s, 2, 50, 150, 15, () => { _s.view = 'c' })
    
        this.bt_kart = new BtIco(_c, _s, 3, _c.width - 65, 150, 15, () => { _s.view = 'm' })
        this.bt_prev = new BtIco(_c, _s, 4, 50, 350, 15, () => { this.id--; if (this.id < 0) this.id = _s.d.data.length - 1 })
        this.bt_next = new BtIco(_c, _s, 5, _c.width - 65, 350, 15, () => { this.id++; if (this.id == _s.d.data.length) this.id = 0 })
        
        this.bt_agregar = new Bt(_c, _s, x, y + 500, 'AGREGAR', '', () => {
            _s.kart[0].push([this.von_botella.id, this.d[this.id]])
            _s.kart[1] = _s.kart[1] + (this.d[this.id].price * this.von_botella.id)
            this.bt_kart.color = _s.c.tres
        })
        this.von_botella = new VonBotella(_c, _s, x + this.bt_agregar.w + 60, y + 500)

    }

    draw(_c, _s) {

        _c.image(_s.imgs[2][this.d[this.id].id], _c.width / 2 - 90 / 2, this.y, 94, 310)

        this.card.draw(_c, _s, this.d[this.id].name, this.d[this.id].sub, this.d[this.id].description)

        this.bt_agregar.draw(_c, _s)
        this.von_botella.draw(_c, _s)

        this.bt_cats.draw(_c, _s)
        this.bt_kart.draw(_c, _s)
        this.bt_prev.draw(_c, _s)
        this.bt_next.draw(_c, _s)
    }

    pressed = (_c, _s) => {
        this.bt_agregar.pressed(_c, _s)
        this.bt_cats.pressed(_c, _s)
        this.bt_kart.pressed(_c, _s)
        this.bt_prev.pressed(_c, _s)
        this.bt_next.pressed(_c, _s)
        this.von_botella.pressed(_c, _s)
    }


    up(_c, _s) {
        this.bt_agregar.up(_c, _s)
        this.bt_cats.up(_c, _s)
        this.bt_kart.up(_c, _s)
        this.bt_prev.up(_c, _s)
        this.bt_next.up(_c, _s)
        this.von_botella.up(_c, _s)
    }


    in = ()=>{
        gsap.from(this.card, { x: - 500 , duration: 1 , delay:0 , ease: "elastic.out(1,0.75)" });
        gsap.from(this.bt_agregar, { y: + 900 , duration: 1 , delay:.5, ease: "elastic.out(1,0.75)" });
        gsap.from(this.von_botella, { y: + 800 , duration: 1 , delay:.7, ease: "elastic.out(1,0.75)" });
        gsap.from(this.von_botella.bt_mas, { y: + 800 , duration: 1 , delay:.7, ease: "elastic.out(1,0.75)" });
        gsap.from(this.von_botella.bt_menos, { y: + 800 , duration: 1 , delay:.7, ease: "elastic.out(1,0.75)" });

        gsap.from(this.bt_cats, { x: - 300 , duration: 1 , delay:1, ease: "elastic.out(1,0.75)" });
        gsap.from(this.bt_prev, { x: - 300 , duration: 1 , delay:1.2, ease: "elastic.out(1,0.75)" });

        gsap.from(this.bt_kart, { x: + 800 , duration: 1 , delay:1, ease: "elastic.out(1,0.75)" });
        gsap.from(this.bt_next, { x: + 800 , duration: 1 , delay:1.2, ease: "elastic.out(1,0.75)" });

    }




}








