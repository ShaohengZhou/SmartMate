(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{KU0v:function(e,t,o){"use strict";o.r(t),o.d(t,"IonPopover",function(){return f}),o.d(t,"IonPopoverController",function(){return v});var n=o("B5Ai"),i=o("cBjU"),r=o("HHlg"),a=o("6Fnk"),s=o("cHb+");function l(e,t,o){var n="top",i="left",r=t.querySelector(".popover-content"),a=r.getBoundingClientRect(),s=a.width,l=a.height,c=window.innerWidth,d=window.innerHeight,m=o&&o.target&&o.target.getBoundingClientRect(),u=null!=m&&"top"in m?m.top:d/2-l/2,f=null!=m&&"left"in m?m.left:c/2,b=m&&m.width||0,v=m&&m.height||0,h=t.querySelector(".popover-arrow"),y=h.getBoundingClientRect(),g=y.width,w=y.height;null==m&&(h.style.display="none");var x={top:u+v,left:f+b/2-g/2},P={top:u+v+(w-1),left:f+b/2-s/2},D=!1,k=!1;P.left<p+25?(D=!0,P.left=p):s+p+P.left+25>c&&(k=!0,P.left=c-s-p,i="right"),u+v+l>d&&u-l>0?(x.top=u-(w+1),console.log(x),console.log(u),console.log(l),P.top=u-l-(w-1),t.className=t.className+" popover-bottom",n="bottom"):u+v+l>d&&(r.style.bottom=p+"%"),h.style.top=x.top+"px",h.style.left=x.left+"px",r.style.top=P.top+"px",r.style.left=P.left+"px",D&&(r.style.left="calc("+P.left+"px + var(--ion-safe-area-left, 0px))"),k&&(r.style.left="calc("+P.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=n+" "+i;var j=new e,O=new e;O.addElement(t.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var E=new e;return E.addElement(t.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(j.addElement(t).easing("ease").duration(100).add(O).add(E))}var p=5;function c(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(i))}function d(e,t,o){var n="top",i="left",r=t.querySelector(".popover-content"),a=r.getBoundingClientRect(),s=a.width,l=a.height,p=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),u=null!=d&&"top"in d?d.top:c/2-l/2,f=d&&d.height||0,b={top:u,left:null!=d&&"left"in d?d.left:p/2-s/2};b.left<m?b.left=m:s+m+b.left>p&&(b.left=p-s-m,i="right"),u+f+l>c&&u-l>0?(b.top=u-l,t.className=t.className+" popover-bottom",n="bottom"):u+f+l>c&&(r.style.bottom=m+"px"),r.style.top=b.top+"px",r.style.left=b.left+"px",r.style.transformOrigin=n+" "+i;var v=new e,h=new e;h.addElement(t.querySelector("ion-backdrop")),h.fromTo("opacity",.01,.08);var y=new e;y.addElement(t.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var g=new e;g.addElement(t.querySelector(".popover-content")),g.fromTo("scale",.001,1);var w=new e;return w.addElement(t.querySelector(".popover-viewport")),w.fromTo("opacity",.01,1),Promise.resolve(v.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(h).add(y).add(g).add(w))}var m=12;function u(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(i))}var f=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,a.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,o=b[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return n.a(this,void 0,void 0,function(){var e,t,o;return n.c(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(r.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(s.a)(this.usersElement)];case 2:return n.sent(),[2,Object(a.e)(this,"popoverEnter",l,d,this.event)]}})})},e.prototype.dismiss=function(e,t){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return[4,Object(a.b)(this,e,t,"popoverLeave",c,u,this.event)];case 1:return(o=n.sent())?[4,Object(r.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(a.c)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(a.c)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({"popover-translucent":this.translucent},Object(r.g)(this.cssClass))}},e.prototype.render=function(){return[Object(i.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i.b)("div",{class:"popover-wrapper"},Object(i.b)("div",{class:"popover-arrow"}),Object(i.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10;border-radius:2px;-webkit-transform-origin:left top;transform-origin:left top;width:250px;min-width:0;min-height:0;max-height:90%;background:var(--ion-background-color,#fff);color:var(--ion-text-color,#000);-webkit-box-shadow:0 3px 12px 2px rgba(0,0,0,.3);box-shadow:0 3px 12px 2px rgba(0,0,0,.3)}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},v=function(){function e(){}return e.prototype.create=function(e){return Object(a.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,o){return Object(a.g)(this.doc,e,t,"ion-popover",o)},e.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return[2,Object(a.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);