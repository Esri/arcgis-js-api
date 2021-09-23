/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/arrayUtils","../../../core/mathUtils","../../../core/maybe","../../../geometry/support/aaBoundingBox","../support/buffer/glUtil","./PatchGeometryFactory","./TerrainConst","./TextureFader","./TileOverlayData","./tileUtils","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/BufferObject","../../webgl/VertexArrayObject"],(function(e,t,r,i,n,s,a,l,o,u,h,c,m,f,y){"use strict";let g=function(){function e(){this.geometryInfo=new l.PatchGeometry,this.intersectionData=null,this._textureRef=new u((()=>this.tile.surface.textureFadeDuration)),this.overlay=new h}var g=e.prototype;return g.init=function(e){this.tile=e,this.clear();const t=this.geometryInfo;t.indices=null,t.vertexAttributes=null,s.empty(t.boundingBox),t.numSurfaceIndices=0,t.numSkirtIndices=0,t.numWithoutSkirtIndices=0,t.numVertsPerRow=0,this.intersectionData=null,this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1},this.localOrigin=null,this.overlay.clear()},g.clear=function(){this.releaseGeometry(),this.releaseTexture(),this._textureRef.clear()},g.updateGeometry=function(e,t){return!!this._updateGeometryState(t)&&(this._releaseGeometry(),this._createGeometry(e),!0)},g.releaseGeometry=function(){return!!this._releaseGeometry()&&(this.geometryState={numVertsPerRow:0,samplerData:null,clippingArea:null,wireframe:!1},!0)},g.ensureTexture=function(e,t){return n.isSome(this._texture)&&this._texture.descriptor.width!==e&&this.releaseTexture(),n.isNone(this._texture)&&(this._texture=t(),this.tile.setMemoryDirty()),this._texture},g.releaseTexture=function(){n.isSome(this._texture)&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())},g._updateGeometryState=function(e){const t=this._getElevationInfo(),n=this.tile.level;let s=n<8?this.tile.numSubdivisionsAtLevel[n]+1:2;if(t.samplerData){const e=this.tile.vlevel-n,r=Math.max(n-t.maxTileLevel,o.ELEVATION_DESIRED_RESOLUTION_LEVEL-e),a=this.tile.maxTesselation;s=i.clamp(1+(a>>r),2,a+1)}let a=this.tile.clippingArea;this.tile.intersectsClippingArea&&!this.tile.isWithinClippingArea||(a=null);const l=this.geometryState;let u=!1;return l.numVertsPerRow!==s&&(l.numVertsPerRow=s,u=!0),t.changed&&(l.samplerData=t.samplerData,u=!0),r.equals(l.clippingArea,a)||(l.clippingArea=a,u=!0),l.wireframe!==e&&(l.wireframe=e,u=!0),u},g._createGeometry=function(e){this.tile.createGeometry(this.geometryState,this.localOrigin);const t=this.geometryInfo.vertexAttributes,r=this.geometryInfo.indices,i=e.gl;this._vao=new y(e,m.Default3D,{geometry:a.glLayout(t.layout)},{geometry:f.createVertex(e,i.STATIC_DRAW,t.buffer)},f.createIndex(e,i.STATIC_DRAW,r))},g._releaseGeometry=function(){return!!this._vao&&(this._vao.dispose(),this._vao=null,l.releaseGeometry(this.geometryInfo),!0)},g.setTextureReference=function(e,t=0){e!==this._texture&&this.releaseTexture(),this._textureRef.push(e,t)},g._getElevationInfo=function(){const e=this.geometryState.samplerData,t=this.tile.layerInfo[0],r=t.length;let i=new Array(r),n=0,s=0,a=!1;for(let l=0;l<r;l++){const r=t[l];if(r.upsampleInfo){const t=r.upsampleInfo.tile,o=t.layerInfo[0][l].data,u=o&&o.samplerData;e&&e[n]===u||(a=!0),i[n++]=u,s=Math.max(s,t.lij[0])}else if(r.data){const t=this.tile.surface.layerViewByIndex(l,0);if(c.fallsWithinLayer(this.tile,t.layer,!1)){const t=r.data;e&&e[n]===t.samplerData||(a=!0),i[n++]=t.samplerData,s=this.tile.lij[0]}}}return e&&e.length!==n&&(a=!0),n>0?i.length=n:i=null,{changed:a,samplerData:i,maxTileLevel:s}},t._createClass(e,[{key:"vao",get:function(){return this._vao}},{key:"textureReference",get:function(){return this._textureRef.current}},{key:"nextTextureReference",get:function(){return this._textureRef.next}},{key:"textureFadeFactor",get:function(){return this._textureRef.fadeFactor}},{key:"textureIsFading",get:function(){return this._textureRef.isFading}},{key:"estimatedGeometryMemoryUsage",get:function(){return this.geometryInfo.indices.byteLength+this.geometryInfo.vertexAttributes.byteLength}},{key:"textureDescriptor",get:function(){return n.isSome(this._texture)?this._texture.descriptor:null}},{key:"test",get:function(){return{hasTexture:null!=this._texture}}}]),e}();e.PatchRenderData=g,Object.defineProperty(e,"__esModule",{value:!0})}));
