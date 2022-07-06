/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{SingleKey as e}from"./SingleKey.js";class t extends e{constructor(e,t,i){super(t,i),this.view=e}activate(){this.view.goTo({heading:0}).catch((()=>{}))}}export{t as SingleKeyResetHeading};
