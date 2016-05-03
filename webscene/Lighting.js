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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupporter","../core/accessoireSupport/typescript"],function(e,t,i,a,d,n){var s=14264208e5,l=function(e){function t(t){e.call(this,t),this.date=null,this.directShadowsEnabled=null,this.ambientOcclusionEnabled=null,this.displayUTCOffset=null}return i(t,e),t.prototype.clone=function(){return new t({date:null!=this.date?new Date(this.date.getTime()):null,directShadowsEnabled:this.directShadowsEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null})},t.prototype.toJSON=function(){var e={},t=this.date?this.date.getTime():null;return t!==s&&(e.datetime=t),this.directShadowsEnabled&&(e.directShadows=!0),this.ambientOcclusionEnabled&&(e.ambientOcclusion=!0),null!=this.displayUTCOffset&&(e.displayUTCOffset=this.displayUTCOffset),e},t.sanitizeJSON=function(e){var t={datetime:e.datetime};return void 0!==e.directShadows&&(t.directShadows=!!e.directShadows),void 0!==e.ambientOcclusion&&(t.ambientOcclusion=!!e.ambientOcclusion),void 0!==e.displayUTCOffset&&(t.displayUTCOffset=e.displayUTCOffset),t},a([n.shared("esri.webscene.Lighting")],t.prototype,"declaredClass",void 0),a([n.shared({reader:{exclude:["datetime","ambientOcclusion","directShadows"],add:["date","ambientOcclusionEnabled","directShadowsEnabled"]}})],t.prototype,"classMetadata",void 0),a([n.property({type:Date,value:null,reader:function(e,t){return null!=t.datetime&&new Date(t.datetime)||null}})],t.prototype,"date",void 0),a([n.property({value:!1,reader:function(e,t){return!!t.directShadows}})],t.prototype,"directShadowsEnabled",void 0),a([n.property({value:!1,reader:function(e,t){return!!t.ambientOcclusion}})],t.prototype,"ambientOcclusionEnabled",void 0),a([n.property({value:null})],t.prototype,"displayUTCOffset",void 0),t=a([n.subclass()],t)}(d);return l});