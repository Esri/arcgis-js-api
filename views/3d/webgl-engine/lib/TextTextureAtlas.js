// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Texture","./TextTexture","./ModelContentType","../../../webgl/Texture","../../../webgl/enums"],function(t,e,r,i,u,s,n){var a=i.preferredAtlasSize(),h=function(){function t(t){this.textTextures={},this.dirty=!1,this._glTexture=null,this.id=r.idGen.gen(t)}return t.prototype.getId=function(){return this.id},t.prototype.dispose=function(){},t.prototype.deferredLoading=function(){return!1},t.prototype.getWidth=function(){return a},t.prototype.getHeight=function(){return a},t.prototype.initializeThroughRender=function(t,e){e.wrapMode=33071,e.samplingMode=9987,e.flipped=!0,e.preMultiplyAlpha=!0,e.hasMipmap=!0;var r=this._drawToCanvas();return this._glTexture=new s(t,e,r),this.dirty=!1,this._glTexture},t.prototype.redraw=function(){if(this.dirty&&this._glTexture){var t=this._drawToCanvas();this._glTexture.setData(t),this.dirty=!1}},t.prototype.setUnloadFunc=function(t){this._unloadFunc=t},t.prototype.unload=function(){null!=this._unloadFunc&&(this._unloadFunc(this.id),this._unloadFunc=null)},t.prototype._drawToCanvas=function(){var e=t._create2Dcanvas(),r=e.getContext("2d");r.clearRect(0,0,a,a);for(var i in this.textTextures){var u=this.textTextures[i];u.textTexture.renderText(u.placement.width,u.placement.height,r,u.placement.atlasOffX,u.placement.atlasOffY)}return e},t._create2Dcanvas=function(){return t._textCanvas2D||(t._textCanvas2D=document.createElement("canvas"),t._textCanvas2D.setAttribute("id","canvas2d"),t._textCanvas2D.setAttribute("width",a.toString()),t._textCanvas2D.setAttribute("height",a.toString()),t._textCanvas2D.setAttribute("style","display:none")),t._textCanvas2D},t}(),o=function(){function t(t,e){this._textureAtlasSubtextures=[],this._curX=0,this._curY=0,this._curLineHeight=0,this._idHint=t,this._stage=e}return t.prototype.dispose=function(){for(var t=0;t<this._textureAtlasSubtextures.length;t++)this._stage.remove(u.TEXTURE,this._textureAtlasSubtextures[t].getId());this._textureAtlasSubtextures=[]},t.prototype.canHoldTextTexture=function(t){return t.getRenderedWidth()<=a&&t.getRenderedHeight()<=a},t.prototype.addTextTexture=function(t){for(var e=JSON.stringify(t.getParams())+"_"+t.getText(),r=0;r<this._textureAtlasSubtextures.length;r++){var i=this._textureAtlasSubtextures[r].textTextures[e];if(null!=i)return i.placement}var s=null;0===this._textureAtlasSubtextures.length&&(s=new h(this._idHint),this._textureAtlasSubtextures.push(s));var n,o,c=2,_=2,l=t.getRenderedWidth(),x=t.getRenderedHeight(),d=l+_,p=x+_+c;this._curLineHeight=Math.max(this._curLineHeight,p),this._curX+d<a&&this._curY+this._curLineHeight<a?(n=this._curX,o=this._curY,this._curX+=d):this._curY+this._curLineHeight+p<a?(this._curX=0,this._curY+=this._curLineHeight,n=this._curX,o=this._curY,this._curX+=d):(s=new h(this._idHint),this._textureAtlasSubtextures.push(s),this._curX=0,this._curY=0,this._curLineHeight=p,n=this._curX,o=this._curY,this._curX+=d),null!=s&&this._stage.add(u.TEXTURE,s);var g=this._textureAtlasSubtextures[this._textureAtlasSubtextures.length-1],f={uvMinMax:[n/a,1-(o+x)/a,(n+l)/a,1-o/a],atlasOffX:n,atlasOffY:o,width:l,height:x,texture:g};return g.textTextures[e]={placement:f,textTexture:t},g.dirty=!0,f},t}();return o});