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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./Content"],(function(t,e,r,o,n,s){return function(t){function e(e){var r=t.call(this,e)||this;return r.creator=null,r.destroyer=null,r.outFields=null,r.type="custom",r}var s;return r.__extends(e,t),s=e,e.prototype.clone=function(){return new s({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?o.clone(this.outFields):null})},r.__decorate([n.property()],e.prototype,"creator",void 0),r.__decorate([n.property()],e.prototype,"destroyer",void 0),r.__decorate([n.property()],e.prototype,"outFields",void 0),r.__decorate([n.property({type:["custom"],readOnly:!0})],e.prototype,"type",void 0),e=s=r.__decorate([n.subclass("esri.popup.content.CustomContent")],e)}(s)}));