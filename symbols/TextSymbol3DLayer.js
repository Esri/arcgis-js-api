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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/lang","../core/maybe","../core/accessorSupport/decorators","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo","./support/Symbol3DMaterial"],(function(e,t,o,r,n,i,s,l,a,p,u){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o._userSize=void 0,o.halo=null,o.material=null,o.text=void 0,o.type="text",o}var l;return o.__extends(t,e),l=t,Object.defineProperty(t.prototype,"font",{get:function(){return this._get("font")||null},set:function(e){e&&this._userSize&&(e.size=this._userSize),this._set("font",e)},enumerable:!1,configurable:!0}),t.prototype.writeFont=function(e,t,r,n){var i=o.__assign(o.__assign({},n),{textSymbol3D:!0});t.font=e.write({},i),delete t.font.size},Object.defineProperty(t.prototype,"size",{get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(e){this._userSize=e,this.font&&(this.font.size=this._userSize),this.notifyChange("size")},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new l({enabled:this.enabled,font:this.font&&r.clone(this.font),halo:this.halo&&r.clone(this.halo),material:n.isSome(this.material)?this.material.clone():null,size:this.size,text:this.text})},t.fromTextSymbol=function(e){var t=function(e,t){if(e&&t>0)return{color:r.clone(e),size:t};return null}(e.haloColor,e.haloSize),o=e.font?e.font.clone():new s;return new l({size:o.size,font:o,halo:t,material:e.color?{color:e.color.clone()}:null,text:e.text})},o.__decorate([i.property({type:s,json:{write:!0}})],t.prototype,"font",null),o.__decorate([i.writer("font")],t.prototype,"writeFont",null),o.__decorate([i.property({type:p.default,json:{write:!0}})],t.prototype,"halo",void 0),o.__decorate([i.property({type:u.default,json:{write:!0}})],t.prototype,"material",void 0),o.__decorate([i.property(a.screenSizeProperty),i.property({dependsOn:["font.size"]})],t.prototype,"size",null),o.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),o.__decorate([i.enumeration({Text:"text"},{readOnly:!0})],t.prototype,"type",void 0),t=l=o.__decorate([i.subclass("esri.symbols.TextSymbol3DLayer")],t)}(l)}));