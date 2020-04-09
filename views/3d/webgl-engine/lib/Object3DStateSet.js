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

define(["require","exports","./IdGen"],(function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=new o.IdGen;t.generateObject3DStateId=function(e){var t=0===e?"highlight":"occludee";return{id:r.gen(t),channel:e}};var i=function(){function e(){this.items=[]}return e.prototype.addObject=function(e,t){this.items.push({type:0,objectStateId:t,object:e})},e.prototype.addRenderGeometry=function(e,t,o){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:o})},e.prototype.addExternal=function(e,t){this.items.push({type:2,objectStateId:t,remove:e})},e.prototype.remove=function(e){for(var t=this.items.length-1;t>=0;--t){var o=this.items[t];o.objectStateId===e&&(this._removeObjectStateItem(o),this.items.splice(t,1))}},e.prototype.removeObject=function(e){for(var t=this.items.length-1;t>=0;--t){var o=this.items[t];0===o.type&&o.object===e&&(this._removeObjectStateItem(o),this.items.splice(t,1))}},e.prototype.removeRenderGeometry=function(e){for(var t=this.items.length-1;t>=0;--t){var o=this.items[t];1===o.type&&o.renderGeometry===e&&(this._removeObjectStateItem(o),this.items.splice(t,1))}},e.prototype.removeAll=function(){var e=this;this.items.forEach((function(t){e._removeObjectStateItem(t)})),this.items=[]},e.prototype._removeObjectStateItem=function(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}},e}();t.Object3DStateSet=i}));