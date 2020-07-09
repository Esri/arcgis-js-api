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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators","../support/materialUtils"],(function(e,r,o,t,n,i,s,p,c){return function(e){function r(r){var o=e.call(this,r)||this;return o.color=new t([0,0,0,1]),o.extensionLength=0,o.size=s.px2pt(1),o}return o.__extends(r,e),r.prototype.normalizeCtorArgs=function(e){if(e&&e.type){var r=o.__assign({},e);return delete r.type,r}return e},r.prototype.clone=function(){},r.prototype.cloneProperties=function(){return{color:i.clone(this.color),size:this.size,extensionLength:this.extensionLength}},o.__decorate([p.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"type",void 0),o.__decorate([p.property(c.colorAndTransparencyProperty)],r.prototype,"color",void 0),o.__decorate([p.property(o.__assign(o.__assign({},c.screenSizeProperty),{json:{write:{overridePolicy:function(e){return{enabled:!!e}}}}}))],r.prototype,"extensionLength",void 0),o.__decorate([p.property(c.screenSizeProperty)],r.prototype,"size",void 0),r=o.__decorate([p.subclass("esri.symbols.edges.Edges3D")],r)}(n.JSONSupport)}));