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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","./materialUtils"],(function(e,t,r,o,n,p){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.screenLength=0,t.minWorldLength=0,t}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})},r.__decorate([n.property(p.screenSizeProperty)],t.prototype,"screenLength",void 0),r.__decorate([n.property({type:Number,json:{write:!0,default:0}})],t.prototype,"minWorldLength",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"maxWorldLength",void 0),t=o=r.__decorate([n.subclass("esri.symbols.support.Symbol3DVerticalOffset")],t)}(o.JSONSupport);t.Symbol3DVerticalOffset=s,t.default=s}));