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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/accessorSupport/decorators","./ClipArea"],(function(t,e,r,o,p,n){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}var n;return o(e,t),n=e,e.prototype.clone=function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([p.property({type:[Number,String],json:{write:!0}})],e.prototype,"left",void 0),r([p.property({type:[Number,String],json:{write:!0}})],e.prototype,"right",void 0),r([p.property({type:[Number,String],json:{write:!0}})],e.prototype,"top",void 0),r([p.property({type:[Number,String],json:{write:!0}})],e.prototype,"bottom",void 0),r([p.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],e.prototype,"version",null),e=n=r([p.subclass("esri.views.layers.support.ClipRect")],e)}(p.declared(n))}));