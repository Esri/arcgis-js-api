// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./MarkerSymbol","./SimpleLineSymbol"],(function(e,t,o,r,i,s,l,n,p,a){var c=new i.default({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});return function(e){function t(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var i=e.apply(this,t)||this;return i.color=new r([255,255,255,.25]),i.type="simple-marker",i.size=12,i.style="circle",i.outline=new a,i}var i;return o.__extends(t,e),i=t,t.prototype.normalizeCtorArgs=function(e,t,o,r){if(e&&"string"!=typeof e)return e;var i={};return e&&(i.style=e),null!=t&&(i.size=l.toPt(t)),o&&(i.outline=o),r&&(i.color=r),i},t.prototype.writeColor=function(e,t){e&&"x"!==this.style&&"cross"!==this.style&&(t.color=e.toJSON()),null===e&&(t.color=null)},Object.defineProperty(t.prototype,"path",{set:function(e){this.style="path",this._set("path",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({angle:this.angle,color:s.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},t.prototype.hash=function(){var t;return e.prototype.hash.call(this)+"."+(this.color&&this.color.hash())+"."+this.path+"."+this.style+"."+(null===(t=this.outline)||void 0===t?void 0:t.hash())},o.__decorate([n.property()],t.prototype,"color",void 0),o.__decorate([n.writer("color")],t.prototype,"writeColor",null),o.__decorate([n.enumeration({esriSMS:"simple-marker"})],t.prototype,"type",void 0),o.__decorate([n.property()],t.prototype,"size",void 0),o.__decorate([n.property({type:c.apiValues,json:{read:c.read,write:c.write}})],t.prototype,"style",void 0),o.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"path",null),o.__decorate([n.property({type:a,json:{default:null,write:!0}})],t.prototype,"outline",void 0),t=i=o.__decorate([n.subclass("esri.symbols.SimpleMarkerSymbol")],t)}(p)}));