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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","./Texture","./ModelContentType","../../../webgl/Texture","../../../webgl/enums"],function(t,e,r,i,u,s){var n=512,a=function(){function t(t){this.textTextures={},this.id=r.idGen.gen(t)}return t.prototype.getId=function(){return this.id},t.prototype.dispose=function(){},t.prototype.deferredLoading=function(){return!1},t.prototype.getWidth=function(){return n},t.prototype.getHeight=function(){return n},t.prototype.initializeThroughRender=function(e,r){var i=t._create2Dcanvas(),s=i.getContext("2d");s.save(),s.clearRect(0,0,n,n),r.wrapMode=33071,r.samplingMode=9729,r.flipped=!0;for(var a in this.textTextures){var h=this.textTextures[a];h.textTexture.renderText(1,h.placement.width,h.placement.height,s,h.placement.atlasOffX,h.placement.atlasOffY)}var c=new u(e,r,i);return s.restore(),c},t.prototype.setUnloadFunc=function(t){this._unloadFunc=t},t.prototype.unload=function(){null!=this._unloadFunc&&(this._unloadFunc(this.id),this._unloadFunc=null)},t._create2Dcanvas=function(){return t._textCanvas2D||(t._textCanvas2D=document.createElement("canvas"),t._textCanvas2D.setAttribute("id","canvas2d"),t._textCanvas2D.setAttribute("width",n.toString()),t._textCanvas2D.setAttribute("height",n.toString()),t._textCanvas2D.setAttribute("style","display:none")),t._textCanvas2D},t}(),h=function(){function t(t,e){this._textureAtlasSubtextures=[],this._curX=0,this._curY=0,this._curLineHeight=0,this._idHint=t,this._stage=e}return t.prototype.dispose=function(){for(var t=0;t<this._textureAtlasSubtextures.length;t++)this._stage.remove(i.TEXTURE,this._textureAtlasSubtextures[t].getId());this._textureAtlasSubtextures=[]},t.prototype.addTextTexture=function(t){for(var e=JSON.stringify(t.getParams())+"_"+t.getString(),r=0;r<this._textureAtlasSubtextures.length;r++){var u=this._textureAtlasSubtextures[r].textTextures[e];if(null!=u)return u.placement}var s=null;0===this._textureAtlasSubtextures.length&&(s=new a(this._idHint),this._textureAtlasSubtextures.push(s));var h,c,o=t.getTextWidth(),_=t.getTextHeight();this._curLineHeight=Math.max(this._curLineHeight,_),this._curX+o<n&&this._curY+this._curLineHeight<n?(h=this._curX,c=this._curY,this._curX+=o):this._curY+this._curLineHeight+_<n?(this._curX=0,this._curY+=this._curLineHeight,this._curLineHeight=_,h=this._curX,c=this._curY,this._curX+=o):(s=new a(this._idHint),this._textureAtlasSubtextures.push(s),this._curX=0,this._curY=0,this._curLineHeight=_,h=this._curX,c=this._curY,this._curX+=o),null!=s&&this._stage.add(i.TEXTURE,s);var x=this._textureAtlasSubtextures[this._textureAtlasSubtextures.length-1],l={uvMinMax:[h/n,1-(c+_)/n,(h+o)/n,1-c/n],atlasOffX:h,atlasOffY:c,width:o,height:_,texture:x};return x.textTextures[e]={placement:l,textTexture:t},l},t}();return h});