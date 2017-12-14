// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/Collection","../core/watchUtils","../core/HandleRegistry"],function(e,r,t,o,n,s,i,p,d){var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.handles=new d,r.layerViews=new i,r}return t(r,e),r.prototype.initialize=function(){this.handles.add(p.when(this,"view.map.ground",function(e){return e.load()}))},r.prototype.destroy=function(){this.view=null,this.handles&&(this.handles.destroy(),this.handles=null)},Object.defineProperty(r.prototype,"suspended",{get:function(){return!this.view||this.view.suspended},enumerable:!0,configurable:!0}),o([n.property()],r.prototype,"view",void 0),o([n.property({type:i})],r.prototype,"layerViews",void 0),o([n.property()],r.prototype,"suspended",null),r=o([n.subclass("esri.views.GroundView")],r)}(n.declared(s));return l});