"use strict"
import { PraiseButton } from "PraiseButton-es.js";
class Thumb extends PraiseButton {
    constructor(handDom) {
        super();
        this.hand = handDom;
        this.hand.onclick = (e) => this.dianzan()
    }
    dianzan() {
        super.zan()
        $(this.hand).removeClass("bgcolor");
        console.log(this.num);
        $(this.hand).addClass("addOne");
        setTimeout(() => {
            $(this.hand).removeClass("addOne");
        }, 1000);
        if (this.num >= 10) {
            $(this.hand).addClass("bgcolor");
            this.num = 0;
        }
    }
}

export { Thumb }