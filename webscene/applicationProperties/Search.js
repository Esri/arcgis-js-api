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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Collection","../../core/JSONSupport","../../core/accessorSupport/decorators","./SearchLayer"],function(e,r,t,o,n,p,i,s){var l=n.ofType(s);return function(e){function r(r){var t=e.call(this,r)||this;return t.enabled=!1,t.hintText=null,t.layers=new l,t}return t(r,e),n=r,r.prototype.clone=function(){return new n({enabled:this.enabled,hintText:this.hintText,layers:this.layers?this.layers.clone():null})},o([i.property({type:Boolean,json:{write:!0}})],r.prototype,"enabled",void 0),o([i.property({type:String,json:{write:!0}})],r.prototype,"hintText",void 0),o([i.property({type:l,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"layers",void 0),r=n=o([i.subclass("esri.webscene.applicationProperties.Search")],r);var n}(i.declared(p))});