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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix/mat2d","../../../../../../core/libs/gl-matrix/vec2","../../../../../../geometry/support/centroid","../../color","../../enums","../../fontUtils","../../number","../../TextShaping","../../WGLDisplayRecord","../../collisions/BoundingBox","./WGLMeshTemplate","./WGLTextTemplate"],(function(t,e,i,r,o,s,h,n,a,p,l,f,c,u,_,g,m){Object.defineProperty(e,"__esModule",{value:!0});var x=r.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),y=f.i8888to32(255,255,255,255),d={xOffset:0,yOffset:0,width:0,height:0},v=function(t){function e(e,i,r){var s=t.call(this)||this;s.geometryType=p.WGLGeometryType.LABEL,s.vvFlags=0,s._textBoxVerticalOffset=0,s._textBoxHorizontalOffset=0,s._refTemplate=d,s._xOffset=i.xoffset,s._yOffset=-i.yoffset,s._decorationOffset=l.getFontDecorationOffset(i.font);var n=i.haloColor;s._color=0|(i.color&&a.premultiplyAlphaRGBA(i.color));var f=i.xoffset/i.font.size,c=i.yoffset/i.font.size;s._shapingXOffset=24*f,s._shapingYOffset=24*c,s._haloColor=0|(n&&a.premultiplyAlphaRGBA(n)),s._haloSize=10*o.pt2px(o.toPt(i.haloSize||0)),s._textPropSize=o.pt2px(i.font.size),s._textPropAngle=i.angle*Math.PI/180,s._textPropHJustification="left"===i.horizontalAlignment?0:"right"===i.horizontalAlignment?1:.5;var u=0,_=.5;switch(r){case"above-center":case"above-left":case"above-right":u=-.5,_=0;break;case"below-center":case"below-left":case"below-right":u=.5,_=1}var g=0,m=.5;switch(r){case"above-left":case"center-left":case"below-left":g=-.5,m=1;break;case"above-right":case"center-right":case"below-right":g=.5,m=0}return s._textPropHAnchorPlacement=m,s._textPropVAnchorPlacement=_,s._placementDirection=[g,u],s._materialStore=e,s.symbolId=i.id,s.anchor=h.create(),s}return i(e,t),e.fromText=function(t,i,r,o,s,h){return new e(t,r,s)},Object.defineProperty(e.prototype,"bounds",{get:function(){return this._bounds},enumerable:!0,configurable:!0}),e.prototype.computeGlyphs=function(t,e){var i=e.text;if(!i||!i.length)return this._computedGlyphs=[],1;var r=this._shapingXOffset,o=this._shapingYOffset,n=this._computeShaping(t,240,24*1.2,0,r,o,this._textPropHAnchorPlacement,this._textPropVAnchorPlacement,this._textPropHJustification).getShaping(i,e.rtl);isNaN(this._decorationOffset)||c.addDecoration(n,this._decorationOffset);for(var a=new Array(n.length),l=0;l<n.length;l++){var f=this._textPropAngle,u=this._textPropSize,g=this._haloSize,x=n[l].glyphMosaicItem,y=this._materialStore.createGlyphMaterial(x,p.WGLGeometryType.LABEL,this.vvFlags);a[l]=m.ComputedGlyph.from(n[l],y,f,u,g)}if(this._computedGlyphs=a,!n||0===n.length)return 2;var d=c.getBox(n),v=this._textPropSize/24;d.width*=v,d.height*=v,d.x*=v,d.y*=v,this._placementDirection[0]<0?this._textBoxHorizontalOffset=-d.x-d.width:this._placementDirection[0]>0&&(this._textBoxHorizontalOffset=-d.x),this._placementDirection[1]<0?this._textBoxVerticalOffset=-d.y:this._placementDirection[1]>0&&(this._textBoxVerticalOffset=-d.y+d.height);var b=d.width/2,w=d.height/2;if(this._textPropAngle){var O=h.fromValues(-b,-w),A=h.fromValues(b,w),P=s.create();s.rotate(P,P,this._textPropAngle),h.transformMat2d(O,O,P),h.transformMat2d(A,A,P);var G=Math.abs(A[0]-O[0]),T=Math.abs(A[1]-O[1]);d.width=G,d.height=T}var L=new _.default(d.x,d.y,d.width+10,d.height+10);this._bounds=L;var z=this._placementDirection[0]*(this._refTemplate.width+this._bounds.width),S=this._placementDirection[1]*(this._refTemplate.height+this._bounds.height);return this._bounds.center[0]=z+this._xOffset,this._bounds.center[1]=S+this._yOffset,0},e.prototype.bindReferenceTemplate=function(t){this._refTemplate=t||d},e.prototype.computeAnchor=function(t,e){var i=this._refTemplate.xOffset,r=this._refTemplate.yOffset;switch(t){case"esriGeometryPoint":var o=e.geometry,s=o.x,n=o.y;this._setAnchor(s,n);break;case"esriGeometryMultipoint":var a=e.geometry,p=this._computeAnchorMultipoint(a.points);s=p.x,n=p.y;this._setAnchor(s,n);break;case"esriGeometryPolygon":if(e.centroid){var l=e.centroid,f=l.x,c=l.y;this._setAnchor(f,c);break}a=e.geometry;if(!(u=this._computeAnchorRings(a.rings)))break;s=u.x,n=u.y;this._setAnchor(s,n);break;case"esriGeometryPolyline":var u;a=e.geometry;if(!(u=this._computeAnchorRings(a.paths)))break;s=u.x,n=u.y;this._setAnchor(s,n);break;default:x.error("Unable to handle geometryType: "+t)}return h.fromValues(this.anchor[0]+i,this.anchor[1]+r)},e.prototype.writeMesh=function(t,e,i,r,o,s,h){var n=e.indexVector,a=e.get("geometry"),p=e.get("visibility"),l=e.get("visibilityRange"),c=this._getOffset(a),u=this._placementDirection[0]*(this._refTemplate.width+10)+this._textBoxHorizontalOffset,_=this._placementDirection[1]*(this._refTemplate.height+10)+this._textBoxVerticalOffset,g=f.i8888to32(this._refTemplate.xOffset,-this._refTemplate.yOffset,u,_);this._writeVertices(t,n,a,p,l,r,c,g,this.anchor[0],this.anchor[1])},e.prototype._setAnchor=function(t,e){this.anchor[0]=t,this.anchor[1]=e},e.prototype._computeAnchorMultipoint=function(t){return t.length&&t[0].length?{x:t[0][0],y:t[0][1]}:null},e.prototype._computeAnchorRings=function(t){if(!t.length||!t[0].length||!t[0][0].length)return null;var e=n.ringsCentroid(t,!1);return{x:e[0],y:e[1]}},e.prototype._computeShaping=function(t,e,i,r,o,s,h,n,a){return this._shaping=new c([t],240,24*1.2,0,[o,s],h,n,a),this._shaping},e.prototype._getOffset=function(t){return t.length/5},e.prototype._writeVertices=function(t,e,i,r,o,s,h,n,a,p){var l=this._computedGlyphs,c=a,_=p,g=f.i1616to32(2*c,2*_),m=f.i1616to32(2*c+1,2*_),x=0,y=(16711680&s)>>16,d=(65280&s)>>8,v=255&s,b=f.i8888to32(0,y,d,v);if(this._haloSize)for(var w=0;w<l.length;w++,x+=4){var O=l[w].materialId,A=this._materialStore.get(O);(P=new u(s,this.geometryType,O)).vertexFrom=h+x,P.indexFrom=e.length,this._writeGlyph(P,i,r,o,b,m,this._haloColor,n,l[w],A),this._writeIndices(P,e,h+x),t.push(P)}for(w=0;w<l.length;w++,x+=4){var P;O=l[w].materialId,A=this._materialStore.get(O);(P=new u(s,this.geometryType,O)).vertexFrom=h+x,P.indexFrom=e.length,this._writeGlyph(P,i,r,o,b,g,this._color,n,l[w],A),this._writeIndices(P,e,h+x),t.push(P)}},e.prototype._writeGlyph=function(t,e,i,r,o,s,h,n,a,p){e.push(s),e.push(h),e.push(a.vertexOffsetUpperLeft),e.push(a.texFontSizeUpperLeft),e.push(n),e.push(s),e.push(h),e.push(a.vertexOffsetUpperRight),e.push(a.texFontSizeUpperRight),e.push(n),e.push(s),e.push(h),e.push(a.vertexOffsetLowerLeft),e.push(a.texFontSizeLowerLeft),e.push(n),e.push(s),e.push(h),e.push(a.vertexOffsetLowerRight),e.push(a.texFontSizeLowerRight),e.push(n),i.push(4294967295),r.push(y),r.push(y),t.vertexCount+=4},e.prototype._writeIndices=function(t,e,i){e.push(i+0),e.push(i+1),e.push(i+2),e.push(i+1),e.push(i+3),e.push(i+2),t.indexCount+=6},e}(g.default);e.default=v}));