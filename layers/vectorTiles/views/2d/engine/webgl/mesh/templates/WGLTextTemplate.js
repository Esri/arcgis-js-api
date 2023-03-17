// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../color","../../definitions","../../enums","../../Geometry","../../number","../../TextShaping","../../WGLDisplayRecord","../../collisions/BoundingBox","./WGLMeshTemplate","../../util/BidiText"],(function(t,e,i,o,r,h,s,n,p,a,l,u,f,x,g){Object.defineProperty(e,"__esModule",{value:!0});var y=o.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),c=function(){function t(t,e,i,o,r,h,s,n,p){this.materialId=t,this.vertexOffsetUpperLeft=e,this.vertexOffsetUpperRight=i,this.vertexOffsetLowerLeft=o,this.vertexOffsetLowerRight=r,this.texFontSizeUpperLeft=h,this.texFontSizeUpperRight=s,this.texFontSizeLowerLeft=n,this.texFontSizeLowerRight=p}return t.from=function(e,i,o,r,h){var s,n,l=e.glyphMosaicItem,u=l.rect,f=l.metrics,x=Math.round(u.x/4),g=Math.round(u.y/4),y=x+Math.round(u.width/4),c=g+Math.round(u.height/4);if(e.codePoint){var m=e.x+0+f.left,v=e.y+-17-f.top;s=new p.Point(m-4,v-4),n=new p.Point(s.x+u.width,s.y+u.height)}else{m=e.x,v=e.y;s=new p.Point(m,v),n=new p.Point(s.x+f.width,s.y+f.height)}var w=new p.Point(s.x,n.y),d=new p.Point(n.x,s.y);if(o){var _=Math.cos(o),S=Math.sin(o);s.rotate(_,S),n.rotate(_,S),w.rotate(_,S),d.rotate(_,S)}return new t(i,a.i1616to32(8*s.x,8*s.y),a.i1616to32(8*d.x,8*d.y),a.i1616to32(8*w.x,8*w.y),a.i1616to32(8*n.x,8*n.y),a.i8888to32(x,g,r,h),a.i8888to32(y,g,r,h),a.i8888to32(x,c,r,h),a.i8888to32(y,c,r,h))},t}();e.ComputedGlyph=c;var m=function(t){function e(e,i,o){var p=t.call(this)||this;p.geometryType=n.WGLGeometryType.TEXT;var a=o.haloColor;p.color=0|(o.color&&h.premultiplyAlphaRGBA(o.color)),p.textSize=r.pt2px(o.font.size);var l=o.xoffset/o.font.size,u=o.yoffset/o.font.size;return p.shapingXOffset=24*l,p.shapingYOffset=24*u,p.haloColor=0|(a&&h.premultiplyAlphaRGBA(a)),p.haloSize=10*r.pt2px(r.toPt(o.haloSize||0)),p.textPropColor=p.color||s.PICTURE_FILL_COLOR,p.textPropSize=r.pt2px(o.font.size),p.textPropAngle=o.angle*Math.PI/180,p.xOffset=r.pt2px(o.xoffset),p.yOffset=r.pt2px(o.yoffset),p.textPropHAnchor="left"===o.horizontalAlignment?0:"right"===o.horizontalAlignment?1:.5,p.textPropVAnchor="top"===o.verticalAlignment?0:"bottom"===o.verticalAlignment?1:.5,p.textPropHaloColor=p.haloColor||4294967295,p.textPropHaloSize=r.pt2px(r.toPt(o.haloSize||0)),p._materialStore=e,p.vvFlags=i,p}return i(e,t),e.fromText=function(t,i,o,r,h){var s=new e(t,i,o);return s.computeGlyphs(h,o.text,!1),s},e.prototype.writeMesh=function(t,e,i,o,r,h,s){var n=e.indexVector,p=e.get("geometry"),a=e.get("visibility"),l=this._getOffset(p);switch(i){case"esriGeometryPoint":var u=r.geometry,f=u.x,x=u.y;return void this._writeVertices(t,n,p,a,l,o,f,x,s);case"esriGeometryPolygon":if(r.centroid){var g=r.centroid;f=g.x,x=g.y;return void this._writeVertices(t,n,p,a,l,o,f,x,s)}default:y.error("Unable to handle geometryType: "+i)}},e.prototype.computeGlyphs=function(t,e,i){if(!e||!e.length)return this._computedGlyphs=[],null;for(var o=this.shapingXOffset,r=this.shapingYOffset,h=this.textPropHAnchor,s=this.textPropVAnchor,p=this._computeShaping(t,240,24*1.2,0,o,r,h,s,.5),a=g.bidiText(e),u=a[0],x=a[1],y=p.getShaping(u,x),m=new Array(y.length),v=0;v<y.length;v++){var w=this.textPropAngle,d=this.textSize,_=this.haloSize,S=y[v].glyphMosaicItem,V=this._materialStore.createGlyphMaterial(S,n.WGLGeometryType.TEXT,this.vvFlags);m[v]=c.from(y[v],V,w,d,_)}if(this._computedGlyphs=m,!i)return null;var L=l.getBox(y);return L.width*=this.textSize/24,L.height*=this.textSize/24,new f.default(L.x,L.y,L.width,L.height)},e.prototype._computeShaping=function(t,e,i,o,r,h,s,n,p){return this._shaping=new l([t],240,24*1.2,0,[r,h],s,n,.5),this._shaping},e.prototype._getOffset=function(t){var e=!!this.vvFlags?9:5;return t.length/e},e.prototype._writeVertices=function(t,e,i,o,r,h,s,n,p){var l=this._computedGlyphs,f=s,x=n,g=a.i1616to32(2*f,2*x),y=a.i1616to32(2*f+1,2*x),c=0;if(this.haloSize)for(var m=0;m<l.length;m++,c+=4){var v=l[m].materialId,w=this._materialStore.get(v);(d=new u(h,this.geometryType,v)).vertexFrom=r,d.indexFrom=e.length,this._writeVertex(d,i,o,h,y,this.haloColor,l[m],w,p),this._writeIndices(d,e,r+c),t.push(d)}for(m=0;m<l.length;m++,c+=4){var d;v=l[m].materialId,w=this._materialStore.get(v);(d=new u(h,this.geometryType,v)).vertexFrom=r,d.indexFrom=e.length,this._writeVertex(d,i,o,h,g,this.color,l[m],w,p),this._writeIndices(d,e,r+c),t.push(d)}},e.prototype._writeVertex=function(t,e,i,o,r,h,s,n,p){e.push(r),e.push(o),e.push(h),e.push(s.vertexOffsetUpperLeft),e.push(s.texFontSizeUpperLeft),this._writeVV(e,p,n),e.push(r),e.push(o),e.push(h),e.push(s.vertexOffsetUpperRight),e.push(s.texFontSizeUpperRight),this._writeVV(e,p,n),e.push(r),e.push(o),e.push(h),e.push(s.vertexOffsetLowerLeft),e.push(s.texFontSizeLowerLeft),this._writeVV(e,p,n),e.push(r),e.push(o),e.push(h),e.push(s.vertexOffsetLowerRight),e.push(s.texFontSizeLowerRight),this._writeVV(e,p,n),i.push(4294967295),t.vertexCount+=4},e.prototype._writeVV=function(t,e,i){i.materialKeyInfo.hasVV()&&(t.push(e[n.VVType.SIZE]),t.push(e[n.VVType.COLOR]),t.push(e[n.VVType.OPACITY]),t.push(e[n.VVType.ROTATION]))},e.prototype._writeIndices=function(t,e,i){e.push(i+0),e.push(i+1),e.push(i+2),e.push(i+1),e.push(i+3),e.push(i+2),t.indexCount+=6},e}(x.default);e.default=m}));