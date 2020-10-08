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

define(["require","exports","tslib","../../../../../geometry/support/jsonUtils","../../../../../layers/graphics/featureConversionUtils","./FeatureSetReader","./FeatureSetReaderJSON"],(function(e,r,t,n,o,i,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.GraphicsReader=void 0;var a=function(e){function r(r,t){return e.call(this,r,t,null)||this}return t.__extends(r,e),r.from=function(e){for(var t=i.FeatureSetReader.createInstance(),u=[],a=0,s=e;a<s.length;a++){var c=s[a],p=n.getJsonType(c.geometry);o.convertFromGraphics(u,[c],p,!1,!1,"uid")}return new r(t,u)},Object.defineProperty(r.prototype,"geometryType",{get:function(){var e=this._current;return e?e.geometryType:null},enumerable:!1,configurable:!0}),r.prototype.readGraphic=function(){return this._current},r.prototype.getCursor=function(){return this.copy()},r.prototype.copy=function(){var e=new r(this.instance,this._features);return this.copyInto(e),e},r}(u.FeatureSetReaderJSON);r.GraphicsReader=a}));