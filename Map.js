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

define(["require","exports","./core/tsSupport/extendsHelper","./core/tsSupport/decorateHelper","./core/Accessoire","./AllLayersCollection","./core/Evented","./LayersMixin","./support/basemapUtils","./support/groundUtils","./core/accessoireSupport/typescript"],function(e,r,t,o,n,s,p,u,a,i,l){function c(){return n}var d=function(e){function r(){e.call(this),this.allLayers=null,this.basemap=null,this.ground=null}return t(r,e),r.prototype.dojoConstructor=function(){this._basemapCache=a.createCache()},r.prototype.getDefaults=function(e){return e&&e.ground?{}:{ground:{}}},o([l.shared("esri.Map")],r.prototype,"declaredClass",void 0),o([l.property({readOnly:!0,getter:function(){return new s({source:this})}})],r.prototype,"allLayers",void 0),o([l.property({value:null,setter:function(e){return a.ensureType(e,this._basemapCache)}})],r.prototype,"basemap",void 0),o([l.property({value:null,setter:function(e){return i.ensureType(e)}})],r.prototype,"ground",void 0),r=o([l.subclass([p,u])],r)}(c());return d});