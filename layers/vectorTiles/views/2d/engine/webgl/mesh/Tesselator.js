// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/libs/libtess/libtess"],(function(e,t,n,i){Object.defineProperty(t,"__esModule",{value:!0});var s=n.getLogger("esri.views.2d.engine.webgl.mesh.templates.Tesselator"),l=function(){function e(){this._currentVertexIndex=0,this._indexCounter=0,this._triangleIndices=[-1,-1,-1],this.glu=new i.GluTesselator,this.glu.gluTessCallback(i.gluEnum.GLU_TESS_BEGIN,this._begincallback.bind(this)),this.glu.gluTessCallback(i.gluEnum.GLU_TESS_VERTEX_DATA,this._vertexCallback.bind(this)),this.glu.gluTessCallback(i.gluEnum.GLU_TESS_END,this._endcallback.bind(this)),this.glu.gluTessCallback(i.gluEnum.GLU_TESS_COMBINE,this._combinecallback.bind(this)),this.glu.gluTessCallback(i.gluEnum.GLU_TESS_ERROR,this._errorcallback.bind(this)),this.glu.gluTessCallback(i.gluEnum.GLU_TESS_EDGE_FLAG,this._edgeCallback.bind(this)),this.glu.gluTessProperty(i.gluEnum.GLU_TESS_WINDING_RULE,i.windingRule.GLU_TESS_WINDING_ODD)}return e.prototype.beginPolygon=function(e,t){this._triangleIndices[0]=-1,this._triangleIndices[1]=-1,this._triangleIndices[2]=-1,this._currentVertexIndex=0,this._indexCounter=0,this.glu.gluTessBeginPolygon(e),this._indices=t},e.prototype.endPolygon=function(){this.glu.gluTessEndPolygon()},e.prototype.beginContour=function(){this.glu.gluTessBeginContour()},e.prototype.endContour=function(){this.glu.gluTessEndContour()},e.prototype.addVertex=function(e,t){this.glu.gluTessVertex(e,t)},e.prototype._vertexCallback=function(e,t){if(t[t.length]=e[0],t[t.length]=e[1],this._triangleIndices[this._currentVertexIndex]=-1,this._currentVertexIndex>=2){for(var n=0;n<3;n++)-1===this._triangleIndices[n]&&(this._triangleIndices[n]=this._indexCounter++),this._indices[this._indices.length]=this._triangleIndices[n];this._currentVertexIndex=0}else this._currentVertexIndex++},e.prototype._begincallback=function(e){this._triangleIndices[0]=-1,this._triangleIndices[1]=-1,this._triangleIndices[2]=-1,this._currentVertexIndex=0},e.prototype._endcallback=function(){this._currentVertexIndex=0},e.prototype._errorcallback=function(e){s.error("Encountered error during tesselation: "+e)},e.prototype._combinecallback=function(e,t,n){return[e[0],e[1],e[2]]},e.prototype._edgeCallback=function(e){},e}();t.default=l}));