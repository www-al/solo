
import Bt from "../blocs/bt.js"
import Footer from "../blocs/foot.js"
import Lista from "../blocs/lista.js"
import Info from "../blocs/info.js"

export default class Home {


    constructor(_c, _s, x, y) {

        this.infoTienda = new Info(_c, _s, x, y)
        this.bt_domicilio = new Bt(_c, _s, x, y + 190, 'SERVICIO A DOMICILIO', 'TEPOZTLÁN Y CUERNAVACA', () => { _s.view = 't'; _c.resizeCanvas(_s.w, 700);_c.in() })
        this.listaTienda = new Lista(_c, _s, x, y + 320)
        this.foot = new Footer(_c, _s, x, y + 1350)

    }



    draw = (_c, _s) => {

        this.infoTienda.draw(_c, _s)
        this.bt_domicilio.draw(_c, _s)
        this.listaTienda.draw(_c, _s)
        this.foot.draw(_c, _s)

    }

    pressed = (_c, _s) => {
        this.bt_domicilio.pressed(_c, _s)
        this.foot.pressed(_c, _s)
    }

    up(_c, _s) {
        this.bt_domicilio.up(_c, _s)
        this.foot.up(_c, _s)
    }

    in = ()=>{
        gsap.from(this.infoTienda, { x: - 500 , duration: 1 , delay:.2 , ease: "elastic.out(1,0.75)" });
        gsap.from(this.bt_domicilio, { x: - 300 , duration: 1 , delay:.7, ease: "elastic.out(1,0.75)" });
        gsap.from(this.listaTienda, { x: - 800 , duration: 1 , delay:1, ease: "elastic.out(1,0.75)" });
    }

}

