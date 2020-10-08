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

define(["require","exports","tslib","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../../layers/graphics/featureConversionUtils","../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper","../../enums","../../number"],(function(t,e,s,i,r,o,h,n,a,p,u,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){return function(t){function e(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];var i=t.apply(this,e)||this;return i.angle=0,i.xOffset=0,i.yOffset=0,i.width=0,i.height=0,i.boundsType="square",i._anchorX=0,i._anchorY=0,i._computedWidth=0,i._computedHeight=0,i.geometryType=l.WGLGeometryType.MARKER,i}return s.__extends(e,t),e.prototype.writeMeshWithGeometry=function(t,e,s,r,o,h){var n=this,a=e.indexVector,u=e.get("geometry"),l=e.getVector("geometry"),c=l.vertexCount,f=c,_=a.length;if(i.isSome(this._markerPlacement)){var m=null!=h?h:s.readLegacyGeometry();this._writePlacedMarkers(u,a,c,o,m)}else{if(!(m=h?p.deltaDecodeGeometry(p.convertFromGeometry(h),2):"esriGeometryPolygon"===r?s.readCentroid():s.readUnquantizedGeometry()))return;if(m.isPoint){var d=m.coords,y=d[0],g=d[1];this._writeVertices(u,o,this._getPos(y,g)),this._writeIndices(a,c)}else m.forEachVertex((function(t,e){var s=l.vertexCount;n._writeVertices(u,o,n._getPos(t,e)),n._writeIndices(a,s)}))}var v=e.getVector("geometry").vertexCount-f,x=a.length-_;t.writeDisplayRecord(this.geometryType,this._materialKey,f,v,_,x)},e.prototype._applyTransformation=function(t,e,s){void 0===s&&(s=0),o.mat2d.identity(t),o.mat2d.translate(t,t,a.vec2f32.fromValues(this.xOffset,-this.yOffset)),this.angle+s!==0&&o.mat2d.rotate(t,t,3.14159265359/180*(this.angle+s));var i=this._computedWidth,r=this._computedHeight,h=(this._anchorX-.5)*i,p=(this._anchorY-.5)*r;n.vec2.set(e,h,p),n.vec2.transformMat2d(e,e,t),this._offsetUpperLeft=c.i1616to32(16*e[0],16*e[1]),n.vec2.set(e,h+i,p),n.vec2.transformMat2d(e,e,t),this._offsetUpperRight=c.i1616to32(16*e[0],16*e[1]),n.vec2.set(e,h,p+r),n.vec2.transformMat2d(e,e,t),this._offsetBottomLeft=c.i1616to32(16*e[0],16*e[1]),n.vec2.set(e,h+i,p+r),n.vec2.transformMat2d(e,e,t),this._offsetBottomRight=c.i1616to32(16*e[0],16*e[1])},e.prototype._writePlacedMarkers=function(t,e,s,o,n){var p=u.CIMMarkerPlacementHelper.getPlacement(n,i.unwrap(this._markerPlacement),r.pt2px(1));if(p)for(var l=a.vec2f32.create(),c=h.mat2df32.create(),f=0,_=p.next();null!=_;)_.tx>=-128&&_.tx<=640&&_.ty>=-128&&_.ty<=640&&(this._applyTransformation(c,l,_.getAngle()/(3.14159265359/180)),this._writeVertices(t,o,this._getPos(_.tx,_.ty)),this._writeIndices(e,s+f),f+=4),_=p.next()},e.prototype._getPos=function(t,e){return c.i1616to32(Math.round(8*t),Math.round(8*e))},e.prototype._writeVertices=function(t,e,s){t.push(s),t.push(this._offsetUpperLeft),t.push(this._texUpperLeft),t.push(this._bitestAndDistRatio),t.push(e),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetUpperRight),t.push(this._texUpperRight),t.push(this._bitestAndDistRatio),t.push(e),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetBottomLeft),t.push(this._texBottomLeft),t.push(this._bitestAndDistRatio),t.push(e),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetBottomRight),t.push(this._texBottomRight),t.push(this._bitestAndDistRatio),t.push(e),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth)},e.prototype._writeIndices=function(t,e){var s=e;t.push(s+0),t.push(s+1),t.push(s+2),t.push(s+1),t.push(s+3),t.push(s+2)},e}(t)}}));