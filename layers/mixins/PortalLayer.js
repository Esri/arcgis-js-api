// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/declare","../../core/Accessor","../../core/requireUtils","../../portal/PortalItem","dojo/when"],function(r,e,t,o,l,a,n,p,i){var s=function(e){function a(){e.apply(this,arguments),this.portalItem=null}return t(a,e),a.prototype.loadFromPortal=function(e,t){var o=this;if(void 0===t&&(t=!0),!this.portalItem||!this.portalItem.id)return i(e&&e());var l,a=this,p=t&&!a.url;return e&&!p&&(l=e()),i(l).then(function(){return n.when(r,"../../"+o.portalLoaderModule).then(function(r){var t=new r({instance:o,portalItem:o.portalItem,loadFromService:p?e:null});return t.load().otherwise(function(r){if(p)throw r;console.error(r)})})})},o([l.shared("esri.layers.mixins.PortalLayer")],a.prototype,"declaredClass",void 0),o([l.shared(null)],a.prototype,"portalLoaderModule",void 0),o([l.property({type:p})],a.prototype,"portalItem",void 0),a=o([l.subclass()],a)}(l.declared(a));return s});