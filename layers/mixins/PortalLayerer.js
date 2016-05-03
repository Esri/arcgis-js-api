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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessoireSupport/typescript","../../core/Accessoire","../../core/requireUtils","../../portal/PortalItem","dojo/when"],function(r,e,t,o,n,a,i,l,p){var s=function(e){function a(){e.apply(this,arguments),this.portalItem=null}return t(a,e),a.prototype.loadFromPortal=function(e,t){var o=this;if(void 0===t&&(t=!0),!this.portalItem||!this.portalItem.id)return p(e&&e());var n,a=this,l=t&&!a.url;return e&&!l&&(n=e()),p(n).then(function(){return i.when(r,"../../"+o.portalLoaderModule).then(function(r){var t=new r({instance:o,portalItem:o.portalItem,loadFromService:l?e:null});return t.load().otherwise(function(r){if(l)throw r;console.error(r)})})})},o([n.shared("esri.layers.mixins.PortalLayer")],a.prototype,"declaredClass",void 0),o([n.shared(null)],a.prototype,"portalLoaderModule",void 0),o([n.property({type:l})],a.prototype,"portalItem",void 0),a=o([n.subclass()],a)}(a);return s});