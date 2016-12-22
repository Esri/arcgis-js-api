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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(t,e,s,i,o){var h=function(t){function e(e){t.call(this),this.shape=i.getDefault("Polyline"),this.rawNode=e}return s(e,t),e.prototype.setShape=function(t,e){Array.isArray(t)?(this.shape=i.makeParameters(this.shape,{points:t}),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=i.makeParameters(this.shape,t),this.bbox=null,this._normalizePoints();for(var s=[],o=this.shape.points,h=0;h<o.length;++h)s.push(o[h].x.toFixed(8),o[h].y.toFixed(8));return this.rawNode.setAttribute("points",s.join(" ")),this},e.prototype.getBoundingBox=function(){if(!this.bbox&&this.shape.points.length){for(var t=this.shape.points,e=t.length,s=t[0],i={l:s.x,t:s.y,r:s.x,b:s.y},o=1;e>o;++o)s=t[o],i.l>s.x&&(i.l=s.x),i.r<s.x&&(i.r=s.x),i.t>s.y&&(i.t=s.y),i.b<s.y&&(i.b=s.y);this.bbox={x:i.l,y:i.t,width:i.r-i.l,height:i.b-i.t}}return this.bbox},e.prototype._normalizePoints=function(){var t=this.shape.points,e=t&&t.length;if(e&&"number"==typeof t[0]){for(var s=[],i=0;e>i;i+=2)s.push({x:t[i],y:t[i+1]});this.shape.points=s}},e.nodeType="polyline",e}(o["default"]);e.Polyline=h});