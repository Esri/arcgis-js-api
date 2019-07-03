// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/jsonMap","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./MarkerSymbol","./SimpleLineSymbol"],function(e,t,r,o,i,s,l,p,n,a,c){var y=new s.default({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});return function(e){function t(t,r,o,s){var l=e.call(this,t)||this;return l.color=new i([255,255,255,.25]),l.type="simple-marker",l.size=12,l.style="circle",l.outline=new c,l}r(t,e),s=t,t.prototype.normalizeCtorArgs=function(e,t,r,o){if(e&&"string"!=typeof e)return e;var i={};return e&&(i.style=e),null!=t&&(i.size=p.toPt(t)),r&&(i.outline=r),o&&(i.color=o),i},t.prototype.writeColor=function(e,t){e&&"x"!==this.style&&"cross"!==this.style&&(t.color=e.toJSON())},Object.defineProperty(t.prototype,"path",{set:function(e){this.style="path",this._set("path",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new s({angle:this.angle,color:l.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})};var s;return o([n.property()],t.prototype,"color",void 0),o([n.writer("color")],t.prototype,"writeColor",null),o([n.enumeration.serializable()({esriSMS:"simple-marker"})],t.prototype,"type",void 0),o([n.property()],t.prototype,"size",void 0),o([n.property({type:y.apiValues,json:{read:y.read,write:y.write}})],t.prototype,"style",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"path",null),o([n.property({type:c,json:{default:null,write:!0}})],t.prototype,"outline",void 0),t=s=o([n.subclass("esri.symbols.SimpleMarkerSymbol")],t)}(n.declared(a))});