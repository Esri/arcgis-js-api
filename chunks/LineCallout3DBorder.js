/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import r from"../Color.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{clone as s}from"../core/lang.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{colorAndTransparencyProperty as c}from"../symbols/support/materialUtils.js";var l;let a=l=class extends e{constructor(){super(...arguments),this.color=new r("white")}clone(){return new l({color:s(this.color)})}};o([t(c)],a.prototype,"color",void 0),a=l=o([p("esri.symbols.callouts.LineCallout3DBorder")],a);const i=a,m=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));export{m as L,i as a};
