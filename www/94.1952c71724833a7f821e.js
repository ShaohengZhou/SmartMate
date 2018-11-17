(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{lTJq:function(t,e,o){"use strict";o.r(e),o.d(e,"IonToast",function(){return p}),o.d(e,"IonToastController",function(){return u});var n=o("B5Ai"),a=o("cBjU"),i=o("6Fnk"),s=o("HHlg");function r(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=s+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(a))}function c(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}function l(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","0%");break;case"middle":var s=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=s+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(a))}function d(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","0px","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}var p=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.present=function(){return n.a(this,void 0,void 0,function(){var t=this;return n.c(this,function(e){switch(e.label){case 0:return[4,Object(i.e)(this,"toastEnter",r,l,this.position)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.b)(this,t,e,"toastLeave",c,d,this.position)},t.prototype.onDidDismiss=function(){return Object(i.c)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(i.c)(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){var t=this.translucent?Object(s.k)(this.mode,"toast-translucent"):{};return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},t,Object(s.k)(this.mode,"toast"),Object(s.g)(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(a.b)("div",{class:o},Object(a.b)("div",{class:"toast-container"},void 0!==this.message&&Object(a.b)("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(a.b)("ion-button",{fill:"clear","ion-activatable":!0,class:"toast-button",onClick:function(){return e.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{--color:inherit;font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-md{--background:var(--ion-text-color-step-150, #262626);--color:var(--ion-background-color, #fff);font-size:15px}.toast-md .toast-wrapper{left:0;right:0;margin:auto;display:block;position:absolute;width:100%;max-width:700px;z-index:10}.toast-md .toast-wrapper.toast-top{padding-top:var(--ion-safe-area-top,0)}.toast-md .toast-wrapper.toast-bottom{padding-bottom:var(--ion-safe-area-bottom,0)}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{padding:19px 16px 17px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){}return t.prototype.create=function(t){return Object(i.f)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return Object(i.g)(this.doc,t,e,"ion-toast",o)},t.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(t){return[2,Object(i.h)(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);