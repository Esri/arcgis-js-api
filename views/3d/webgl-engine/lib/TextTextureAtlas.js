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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./Texture","./ModelContentType","../../../webgl/Texture","../../../webgl/enums"],function(t,e,r,i,u,s){var n=512,a=function(){function t(t){this.textTextures={},this.dirty=!1,this._glTexture=null,this.id=r.idGen.gen(t)}return t.prototype.getId=function(){return this.id},t.prototype.dispose=function(){},t.prototype.deferredLoading=function(){return!1},t.prototype.getWidth=function(){return n},t.prototype.getHeight=function(){return n},t.prototype.initializeThroughRender=function(t,e){e.wrapMode=33071,e.samplingMode=9987,e.flipped=!0,e.preMultiplyAlpha=!0,e.hasMipmap=!0;var r=this._drawToCanvas();return this._glTexture=new u(t,e,r),this.dirty=!1,this._glTexture},t.prototype.redraw=function(){if(this.dirty&&this._glTexture){var t=this._drawToCanvas();this._glTexture.setData(t),this.dirty=!1}},t.prototype.setUnloadFunc=function(t){this._unloadFunc=t},t.prototype.unload=function(){null!=this._unloadFunc&&(this._unloadFunc(this.id),this._unloadFunc=null)},t.prototype._drawToCanvas=function(){var e=t._create2Dcanvas(),r=e.getContext("2d");r.clearRect(0,0,n,n);for(var i in this.textTextures){var u=this.textTextures[i];u.textTexture.renderText(1,u.placement.width,u.placement.height,r,u.placement.atlasOffX,u.placement.atlasOffY)}return e},t._create2Dcanvas=function(){return t._textCanvas2D||(t._textCanvas2D=document.createElement("canvas"),t._textCanvas2D.setAttribute("id","canvas2d"),t._textCanvas2D.setAttribute("width",n.toString()),t._textCanvas2D.setAttribute("height",n.toString()),t._textCanvas2D.setAttribute("style","display:none")),t._textCanvas2D},t}(),h=function(){function t(t,e){this._textureAtlasSubtextures=[],this._curX=0,this._curY=0,this._curLineHeight=0,this._idHint=t,this._stage=e}return t.prototype.dispose=function(){for(var t=0;t<this._textureAtlasSubtextures.length;t++)this._stage.remove(i.TEXTURE,this._textureAtlasSubtextures[t].getId());this._textureAtlasSubtextures=[]},t.prototype.addTextTexture=function(t){for(var e=JSON.stringify(t.getParams())+"_"+t.getString(),r=0;r<this._textureAtlasSubtextures.length;r++){var u=this._textureAtlasSubtextures[r].textTextures[e];if(null!=u)return u.placement}var s=null;0===this._textureAtlasSubtextures.length&&(s=new a(this._idHint),this._textureAtlasSubtextures.push(s));var h,o,c=2,_=2,l=t.getTextWidth(),x=t.getTextHeight(),d=l+_,p=x+_+c;this._curLineHeight=Math.max(this._curLineHeight,p),this._curX+d<n&&this._curY+this._curLineHeight<n?(h=this._curX,o=this._curY,this._curX+=d):this._curY+this._curLineHeight+p<n?(this._curX=0,this._curY+=this._curLineHeight,h=this._curX,o=this._curY,this._curX+=d):(s=new a(this._idHint),this._textureAtlasSubtextures.push(s),this._curX=0,this._curY=0,this._curLineHeight=p,h=this._curX,o=this._curY,this._curX+=d),null!=s&&this._stage.add(i.TEXTURE,s);var g=this._textureAtlasSubtextures[this._textureAtlasSubtextures.length-1],f={uvMinMax:[h/n,1-(o+x)/n,(h+l)/n,1-o/n],atlasOffX:h,atlasOffY:o,width:l,height:x,texture:g};return g.textTextures[e]={placement:f,textTexture:t},g.dirty=!0,f},t}();return h});