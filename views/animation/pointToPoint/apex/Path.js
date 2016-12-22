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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../easing","../Path","../Segment","./planning"],function(i,e,t,n,o,s,a){var d=function(i){function e(e,t){i.call(this),this._preallocSegments=[new s["default"],new s["default"],new s["default"]],this.update(e,t)}return t(e,i),e.prototype.update=function(i,e){if(i){this.definition?this.definition.copyFrom(i):this.definition=i.clone();var t=null;e&&e.apex&&(t=a.optimalDistance(i,e.apex)),this.segments.length=0,this._ascensionSegment=null,this._descensionSegment=null,null==t?this._updateWithoutApex():this._updateWithApex(t,e.apex)}},e.prototype.segmentInterpolateComponentsAt=function(i,e,t){return t=i.interpolateComponentsAt(e,t),i===this._ascensionSegment?t.zoom=n.outQuad(t.zoom):i===this._descensionSegment&&(t.zoom=n.inQuad(t.zoom)),t},e.prototype._updateWithApex=function(i,e){var t=this._preallocSegments,n=t[0],o=t[1],s=t[2],a=null!=e.ascensionFactor?e.ascensionFactor:.5,d=Math.min(1-a,null!=e.ascensionFactor?e.descensionFactor:.5),p=1-a-d;n.definition?n.definition.copyFrom(this.definition):n.definition=this.definition.clone(),n.definition.compared.targetZoom=i,n.definition.compared.pan=this.definition.compared.pan*a,n.definition.compared.rotate=this.definition.compared.rotate*a,n.update(),this._ascensionSegment=n,this.segments.push(n),p>0&&(o.definition?o.definition.copyFrom(this.definition):o.definition=this.definition.clone(),o.definition.copyFrom(this.definition),o.definition.compared.sourceZoom=i,o.definition.compared.targetZoom=i,o.definition.compared.pan=this.definition.compared.pan*p,o.definition.compared.rotate=this.definition.compared.rotate*p,o.update(),this.segments.push(o)),s.definition?s.definition.copyFrom(this.definition):s.definition=this.definition.clone(),s.definition.compared.sourceZoom=i,s.definition.compared.pan=this.definition.compared.pan*d,s.definition.compared.rotate=this.definition.compared.rotate*d,s.update(),this._descensionSegment=s,this.segments.push(s)},e.prototype._updateWithoutApex=function(){var i=this._preallocSegments[0];i.update(this.definition),this.segments.push(i)},e}(o["default"]);e.Path=d,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=d});