/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{subclass as r}from"./accessorSupport/decorators/subclass.js";let t=0;const s=s=>{let i=class extends s{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+t++})}};return i=e([r("esri.core.Identifiable")],i),i},i=s=>{let i=class extends s{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:t++})}};return i=e([r("esri.core.NumericIdentifiable")],i),i};let o=class extends(s(class{})){};o=e([r("esri.core.Identifiable")],o);export{o as Identifiable,s as IdentifiableMixin,i as NumericIdentifiableMixin};
