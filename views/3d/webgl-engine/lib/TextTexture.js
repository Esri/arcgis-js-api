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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Texture","./Util","../../../webgl/Texture","../../../webgl/enums"],function(t,e,i,r,n,s){var a=function(){function t(t,e,i){this._idHint=i,this._text=t,this._textLines=t.split(/\r?\n/),this._params=e||{color:[0,0,0]},this._params.size=this._params.size||18,this._params.font=this._params.font||{family:"Arial"},this._params.font.family=this._params.font.family||"Arial",this._params.font.weight=this._params.font.weight||"normal",this._params.font.style=this._params.font.style||"normal",this._fillStyle="rgb("+this._params.color.map(function(t){return Math.floor(255*t)}).toString()+")"}return t.prototype.getId=function(){return null==this._id&&(this._id=i.idGen.gen(this._idHint)),this._id},t.prototype.getParams=function(){return this._params},t.prototype.getString=function(){return this._text},t.prototype.initializeThroughRender=function(t,e){var i=this._create2DCanvas(),s=i.getContext("2d");s.save();var a=this.getTextWidth(),o=this.getTextHeight();i.setAttribute("width",a.toString()),i.setAttribute("height",o.toString()),e.samplingMode=9729,e.wrapMode=33071,e.flipped=!0,this._params.enableMipmapping&&(a=r.nextHighestPowerOfTwo(a),o=r.nextHighestPowerOfTwo(o),e.hasMipmap=!0,e.samplingMode=9985),this.renderText(1,a,o,s);var h=new n(t,e,i);return this._params.enableMipmapping&&this._renderMipmap(h),s.restore(),h},t.prototype.getTextWidth=function(){var t=this._create2DCanvas(),e=t.getContext("2d");this._setTextProperties(e,this._params.size);var i=0;for(var r in this._textLines){var n=e.measureText(this._textLines[r]).width;n>i&&(i=n)}var s=this._params.font;return("italic"===s.style||"oblique"===s.style||"string"==typeof s.weight&&("bold"===s.weight||"bolder"===s.weight)||"number"==typeof s.weight&&s.weight>600)&&(i+=.3*e.measureText("A").width),i},t.prototype.getTextHeight=function(){return this.getLineHeight()*this._textLines.length},t.prototype.getTexcoordScale=function(){if(this._params.enableMipmapping){var t=this.getTextHeight(),e=this.getTextWidth();return[e/r.nextHighestPowerOfTwo(e),t/r.nextHighestPowerOfTwo(t)]}return[1,1]},t.prototype.getLineHeight=function(){return Math.floor(1.275*this._params.size)},t.prototype.setUnloadFunc=function(t){this._unloadFunc=t},t.prototype.unload=function(){this._unloadFunc&&(this._unloadFunc(this._id),this._unloadFunc=null)},t.prototype.renderText=function(t,e,i,r,n,s){void 0===n&&(n=0),void 0===s&&(s=0);var a=this.getLineHeight()*t;this._setTextProperties(r,this._params.size*t);var o="center"===r.textAlign?.5*e:"right"===r.textAlign?e:0;o+=n;var h=0;h+=s;for(var p in this._textLines)r.fillText(this._textLines[p],o,h),h+=a},t.prototype._create2DCanvas=function(){return null==t._textCanvas2D&&(t._textCanvas2D=document.createElement("canvas"),t._textCanvas2D.setAttribute("id","canvas2d"),t._textCanvas2D.setAttribute("width","1024"),t._textCanvas2D.setAttribute("height","1024"),t._textCanvas2D.setAttribute("style","display:none")),t._textCanvas2D},t.prototype._setTextProperties=function(t,e){t.fillStyle=this._fillStyle;var i=this._params.font,n=i.style+" "+i.weight+" "+e+"px "+i.family;t.font=n,t.textAlign="left",t.textBaseline="top",this._params.canvasStyle&&r.mergeObjects(t,this._params.canvasStyle,t)},t.prototype._renderMipmap=function(t){var e=this._create2DCanvas(),i=e.getContext("2d"),r=parseInt(e.getAttribute("width"),10)/2,n=parseInt(e.getAttribute("height"),10)/2,s=.5,a=1;do e.setAttribute("width",r.toString()),e.setAttribute("height",n.toString()),this.renderText(s,r,n,i),t.updateData(a,0,0,r,n,e),s*=.5,r*=.5,n*=.5,a++;while(r>1&&n>1)},t}();return a});