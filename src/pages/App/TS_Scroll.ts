export var initScroll = false;

class ScrollManager {

    scrollValTop = 0;
    scrollValLeft = 0;

    linkRefFooter?: HTMLAnchorElement;
    linkRefInicio?: HTMLAnchorElement;

    isScrollDownWait = false;
    isScrollTopWait = false;

    isDownScroll = false;
    isTopScroll = false;

    heightFooter = 0;
    heightTotal = 0;

    temHeightScroll = 0;

    root: HTMLElement;

    constructor() {
        initScroll = true;
        this.root = document.querySelector("body") as HTMLElement;

        this.root.addEventListener("scroll", (e) => {
            var event = e as any;

            this.onScroll(event);
        });
    }

    loadComponent() {
        this.linkRefFooter = document.querySelector("#btn_contacto") as HTMLAnchorElement;
        this.linkRefInicio = document.querySelector("#btn_inicio") as HTMLAnchorElement;
    }


    clickInicio() {
        if (this.linkRefInicio) {
            this.linkRefInicio.click();
        }
    }

    clickFooter() {
        if (this.linkRefFooter) {
            this.linkRefFooter.click();
        }
    }


    onScroll = (e: React.UIEvent<HTMLDivElement>, ) => {
        var target = e.target as any;

        this.heightTotal = target.scrollHeight;


        if (target) {

            var valCurrentScroll = target.scrollTop as number;

            this.isDownScroll = (valCurrentScroll - this.scrollValTop) >= 0;
            this.isTopScroll = (valCurrentScroll - this.scrollValTop) < 0;


            if (Math.abs(this.temHeightScroll - valCurrentScroll) > 30) {

                this.temHeightScroll = valCurrentScroll;

                if (this.isDownScroll && !this.isScrollDownWait && !this.isScrollTopWait) {

                    this.isScrollDownWait = true;

                    setTimeout(() => {
                        this.isScrollDownWait = false;
                    }, 600)


                    if (this.linkRefFooter != undefined) {
                        console.log("abajo")
                        this.clickFooter();
                    }

                } else if (this.isTopScroll && !this.isScrollTopWait && !this.isScrollDownWait) {

                    this.isScrollTopWait = true;

                    setTimeout(() => {
                        this.isScrollTopWait = false;
                    }, 600)


                    if (this.linkRefInicio != undefined) {
                        console.log("arriba")
                        this.clickInicio();
                    }

                }

            }


            this.scrollValTop = valCurrentScroll;
        }
    }




}

export default ScrollManager;