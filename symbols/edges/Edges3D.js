// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators","../support/materialUtils"],function(e,r,o,t,n,p,i,s,c,l,u){return function(e){function r(r){var o=e.call(this)||this;return o.color=new p([0,0,0,1]),o.extensionLength=0,o.size=c.px2pt(1),o}return o(r,e),r.prototype.normalizeCtorArgs=function(e){if(e&&e.type){var r=n({},e);return delete r.type,r}return e},r.prototype.clone=function(){},r.prototype.cloneProperties=function(){return{color:s.clone(this.color),size:this.size,extensionLength:this.extensionLength}},t([l.property({type:["solid","sketch"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"type",void 0),t([l.property(u.colorAndTransparencyProperty)],r.prototype,"color",void 0),t([l.property(n({},u.screenSizeProperty,{json:{write:{overridePolicy:function(e){return{enabled:!!e}}}}}))],r.prototype,"extensionLength",void 0),t([l.property(u.screenSizeProperty)],r.prototype,"size",void 0),r=t([l.subclass("esri.symbols.edges.Edges3D")],r)}(l.declared(i.JSONSupport))});