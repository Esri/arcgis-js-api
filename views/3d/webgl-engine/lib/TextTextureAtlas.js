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

define(["require","exports","./Texture","./ModelContentType"],function(t,e,r,i){var u=512,n=function(){function t(t){this.textTextures={},this.id=r.idGen.gen(t)}return t.prototype.getId=function(){return this.id},t.prototype.dispose=function(){},t.prototype.deferredLoading=function(){return!1},t.prototype.getWidth=function(){return u},t.prototype.getHeight=function(){return u},t.prototype.renderGl=function(t,e){this._createTextTexture(t,e),e._isTracingEnabled&&(t._debugTracingType="TextTextureAtlas")},t.prototype._createTextTexture=function(e,r){var i=t._create2Dcanvas(),n=i.getContext("2d");n.save(),n.clearRect(0,0,u,u),r.bindTexture(r.TEXTURE_2D,e);for(var s in this.textTextures){var a=this.textTextures[s];a.textTexture.renderText(1,a.placement.width,a.placement.height,n,a.placement.atlasOffX,a.placement.atlasOffY)}r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.bindTexture(r.TEXTURE_2D,null),n.restore()},t.prototype.setUnloadFunc=function(t){this._unloadFunc=t},t.prototype.unload=function(){null!=this._unloadFunc&&(this._unloadFunc(this.id),this._unloadFunc=null)},t._create2Dcanvas=function(){return t._textCanvas2D||(t._textCanvas2D=document.createElement("canvas"),t._textCanvas2D.setAttribute("id","canvas2d"),t._textCanvas2D.setAttribute("width",u.toString()),t._textCanvas2D.setAttribute("height",u.toString()),t._textCanvas2D.setAttribute("style","display:none")),t._textCanvas2D},t}(),s=function(){function t(t,e){this._textureAtlasSubtextures=[],this._curX=0,this._curY=0,this._curLineHeight=0,this._idHint=t,this._stage=e}return t.prototype.dispose=function(){for(var t=0;t<this._textureAtlasSubtextures.length;t++)this._stage.remove(i.TEXTURE,this._textureAtlasSubtextures[t].getId());this._textureAtlasSubtextures=[]},t.prototype.addTextTexture=function(t){for(var e=JSON.stringify(t.getParams())+"_"+t.getString(),r=0;r<this._textureAtlasSubtextures.length;r++){var s=this._textureAtlasSubtextures[r].textTextures[e];if(null!=s)return s.placement}var a=null;0===this._textureAtlasSubtextures.length&&(a=new n(this._idHint),this._textureAtlasSubtextures.push(a));var h,_,c=t.getTextWidth(),x=t.getTextHeight();this._curLineHeight=Math.max(this._curLineHeight,x),this._curX+c<u&&this._curY+this._curLineHeight<u?(h=this._curX,_=this._curY,this._curX+=c):this._curY+this._curLineHeight+x<u?(this._curX=0,this._curY+=this._curLineHeight,this._curLineHeight=x,h=this._curX,_=this._curY,this._curX+=c):(a=new n(this._idHint),this._textureAtlasSubtextures.push(a),this._curX=0,this._curY=0,this._curLineHeight=x,h=this._curX,_=this._curY,this._curX+=c),null!=a&&this._stage.add(i.TEXTURE,a);var o=this._textureAtlasSubtextures[this._textureAtlasSubtextures.length-1],T={uvMinMax:[h/u,1-(_+x)/u,(h+c)/u,1-_/u],atlasOffX:h,atlasOffY:_,width:c,height:x,texture:o};return o.textTextures[e]={placement:T,textTexture:t},T},t}();return s});