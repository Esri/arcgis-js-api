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

define(["../../../../core/declare","./ElevationInfo","../../webgl-engine/Stage","../../support/aaBoundingBox","../../lib/glMatrix"],function(e,t,i,s,n){function a(e,t,i){return i||(i=s.create()),s.setMin(i,e.getBBMin(t)),s.setMax(i,e.getBBMax(t)),i}var r=n.vec3d,o=n.mat4d,u=e(null,{constructor:function(e,t,i,s,n,a,r,o){this.graphics3DSymbolLayer=e,this.uniqueMaterials=s,this.uniqueGeometries=i,this.uniqueTextures=n,this.stageObject=t,this.elevationAligner=a,this.elevationInfo=new g(r),this.stage=null,this.stageLayer=null,this._shown=!1,this._visibilityFlags={},this.visibilityMode=null!=o?o:u.VisibilityModes.HIDE_FACERANGE},initialize:function(e,t){this.stageLayer=e,this.stage=t;var s;if(this.uniqueMaterials)for(s=0;s<this.uniqueMaterials.length;s++)t.add(i.ModelContentType.MATERIAL,this.uniqueMaterials[s]);if(this.uniqueGeometries)for(s=0;s<this.uniqueGeometries.length;s++)t.add(i.ModelContentType.GEOMETRY,this.uniqueGeometries[s]);if(this.uniqueTextures)for(s=0;s<this.uniqueTextures.length;s++)t.add(i.ModelContentType.TEXTURE,this.uniqueTextures[s]);t.add(i.ModelContentType.OBJECT,this.stageObject)},isDraped:function(){return!1},areVisibilityFlagsSet:function(e,t){for(var i=!0,s=Object.keys(this._visibilityFlags),n=0;n<s.length;n++){var a=s[n];if(a!==t){if(a===e)return this._visibilityFlags[a];i=i&&this._visibilityFlags[a]}}return i},setVisibilityFlag:function(e,t){return this._visibilityFlags[e]=t,this._calcAndSetVisibility()},_calcAndSetVisibility:function(){if(null!=this.stage){var e=this.areVisibilityFlagsSet();return this._shown!=e?(this._shown=e,this._shown?this.stageLayer.hasObject(this.stageObject)?this.stageObject.unhideAllFaceRange():this.stageLayer.addObject(this.stageObject):this.visibilityMode===u.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllFaceRanges():this.stageLayer.removeObject(this.stageObject),!0):!1}},destroy:function(){if(this.stageLayer){var e,t=this.stage;if(this.uniqueMaterials)for(e=0;e<this.uniqueMaterials.length;e++)t.remove(i.ModelContentType.MATERIAL,this.uniqueMaterials[e].getId());if(this.uniqueGeometries)for(e=0;e<this.uniqueGeometries.length;e++)t.remove(i.ModelContentType.GEOMETRY,this.uniqueGeometries[e].getId());if(this.uniqueTextures)for(e=0;e<this.uniqueTextures.length;e++)t.remove(i.ModelContentType.TEXTURE,this.uniqueTextures[e].getId())}t.remove(i.ModelContentType.OBJECT,this.stageObject.getId()),this.stageLayer.hasObject(this.stageObject)&&this.stageLayer.removeObject(this.stageObject),this._shown=!1,this.stageLayer=null,this.stage=null},mustAlignToTerrain:function(){return this.elevationInfo.mode!==t.MODES.ABSOLUTE_HEIGHT},alignWithElevation:function(e,t){this.elevationAligner&&this.elevationAligner(this,e,t)},setDrawOrder:function(){},getBSRadius:function(){return this.stageObject.getBSRadius()},getCenterObjectSpace:function(){return this.stageObject.getCenter(!0)},getBoundingBoxObjectSpace:function(e){return a(this.stageObject,!0,e)},getProjectedBoundingBox:function(e,t){var i,n=this.getBoundingBoxObjectSpace(t),a=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];for(i=0;i<a.length;i++){var r=a[i];l[0]=n[r[0]],l[1]=n[r[1]],l[2]=n[r[2]],o.multiplyVec3(this.stageObject.objectTransformation,l),h[3*i+0]=l[0],h[3*i+1]=l[1],h[3*i+2]=l[2]}if(e(h,0,8)){for(s.set(n,s.NEGATIVE_INFINITY),i=0;i<h.length;i+=3)for(var u=0;3>u;u++)n[u]=Math.min(n[u],h[i+u]),n[u+3]=Math.max(n[u+3],h[i+u]);return n}return null},getScreenSize:function(){throw new Error("Not implemented for this symbol layer/graphic type")}});u.VisibilityModes={REMOVE_OBJECT:0,HIDE_FACERANGE:1};var h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=r.create(),g=function(e){t.call(this,e),this.centerPointInElevationSR=null};return g.prototype=new t,g.prototype.constructor=g,u});