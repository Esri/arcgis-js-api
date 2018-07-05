// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../geometry/support/aaBoundingBox","./featureExpressionInfoUtils","./Graphics3DGraphicElevationContext","./graphicUtils","../../lib/glMatrix","../../webgl-engine/lib/HighlightUtils"],function(e,t,n,i,r,o,a,s,l,h,c){var d=function(){function e(e,t,n,i){this.type="lod-instance",this.alignedTerrainElevation=0,this.needsElevationUpdates=!1,this.graphics3DSymbolLayer=e,this.instanceIndex=t,this.elevationAligner=n,this.elevationContext=new s(i)}return e.prototype.initialize=function(e,t){},e.prototype.setVisibility=function(e){var t=this.lodRenderer.instanceData;return e!==t.getVisible(this.instanceIndex)&&(t.setVisible(this.instanceIndex,e),!0)},e.prototype.destroy=function(){null!=this.instanceIndex&&(this.lodRenderer.instanceData.removeInstance(this.instanceIndex),this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))},e.prototype.alignWithElevation=function(e,t,n){if(this.elevationAligner){a.setContextFeature(this.elevationContext.featureExpressionInfoContext,n);var i=this.elevationAligner(this,this.elevationContext,e,t);null!=i&&(this.alignedTerrainElevation=i)}},e.prototype.getBSRadius=function(){var e=this.lodRenderer;return e.baseBoundingSphere.radius*e.instanceData.getScaleFactor(this.instanceIndex)},e.prototype.getCenterObjectSpace=function(){return this.lodRenderer.baseBoundingSphere.center},e.prototype.getBoundingBoxObjectSpace=function(e){return e=e||o.create(),o.set(e,this.lodRenderer.baseBoundingBox),e},e.prototype.getProjectedBoundingBox=function(e,t,n,a){return r(this,void 0,void 0,function(){var r,s,c,d,x,y,d,b,B,I,m;return i(this,function(i){switch(i.label){case 0:for(r=this.getBoundingBoxObjectSpace(n),s=f,c=o.isPoint(r)?1:s.length,this.lodRenderer.instanceData.getTransform(this.instanceIndex,v),d=0;d<c;d++)x=s[d],g[0]=r[x[0]],g[1]=r[x[1]],g[2]=r[x[2]],h.mat4d.multiplyVec3(v,g),u[3*d+0]=g[0],u[3*d+1]=g[1],u[3*d+2]=g[2];if(!e(u,0,c))return[2,null];for(o.empty(r),y=null,this.calculateRelativeScreenBounds&&(y=this.calculateRelativeScreenBounds()),d=0;d<3*c;d+=3){for(b=0;b<3;b++)r[b]=Math.min(r[b],u[d+b]),r[b+3]=Math.max(r[b+3],u[d+b]);y&&a.push({location:u.slice(d,d+3),screenSpaceBoundingRect:y})}if(!t)return[3,5];if(o.center(r,p),"absolute-height"===this.elevationContext.mode)return[3,5];B=void 0,I=l.demResolutionForBoundingBox(r,t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.service.queryElevation(p[0],p[1],I)];case 2:return B=i.sent(),[3,4];case 3:return m=i.sent(),B=null,[3,4];case 4:null!=B&&o.offset(r,0,0,-this.alignedTerrainElevation+B),i.label=5;case 5:return[2,r]}})})},e.prototype.addHighlight=function(e,t){var n=this;this.highlightId=c.generateHighlightId(),this.lodRenderer.instanceData.setHighlight(this.instanceIndex,!0),e.addExternal(function(e){n.lodRenderer.instanceData.setHighlight(n.instanceIndex,!1),n.highlightId=null},this.highlightId)},e.prototype.removeHighlight=function(e){this.highlightId&&e.remove(this.highlightId)},Object.defineProperty(e.prototype,"lodRenderer",{get:function(){return this.graphics3DSymbolLayer.lodRenderer},enumerable:!0,configurable:!0}),e}(),u=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],g=h.vec3d.create(),p=h.vec3d.create(),f=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],v=h.mat4d.create();return d});