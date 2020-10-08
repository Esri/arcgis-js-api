// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../CIMPlacements"],(function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.PlacementInsidePolygon=void 0;var e=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,i,s){return new n(t,i,s)},t.instance=null,t}();i.PlacementInsidePolygon=e;var n=function(){function t(t,i,e){if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._stepX=(void 0!==i.stepX?Math.abs(i.stepX):16)*e,this._stepY=(void 0!==i.stepY?Math.abs(i.stepY):16)*e,0!==this._stepX&&0!==this._stepY&&t&&void 0!==t.rings&&t.rings){if(this._gridType=void 0!==i.gridType?i.gridType:"Fixed","Random"===this._gridType)this._randomness=void 0!==i.randomness?i.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0;else{if(this._randomness=0,this._gridAngle=void 0!==i.gridAngle?i.gridAngle:0,this._shiftOddRows=void 0!==i.shiftOddRows&&i.shiftOddRows,this._offsetX=void 0!==i.offsetX?i.offsetX*e:0,this._offsetY=void 0!==i.offsetY?i.offsetY*e:0,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginX=0,this._graphicOriginY=0,this._internalPlacement=new s.Placement,this._calculateMinMax(t),this._geometry=t}}return t.prototype.next=function(){return this._geometry?this._nextInside():null},t.prototype._calculateMinMax=function(t){var i,s,e,n,h,r,_,o;this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,h=r=Number.MAX_VALUE,_=o=-Number.MAX_VALUE;for(var a=0,f=t.rings;a<f.length;a++)for(var c=f[a],g=c?c.length:0,d=0;d<g;++d)i=c[d][0]-this._graphicOriginX-this._offsetX,s=c[d][1]-this._graphicOriginY-this._offsetY,e=this._cosAngle*i-this._sinAngle*s,n=this._sinAngle*i+this._cosAngle*s,h=Math.min(h,e),_=Math.max(_,e),r=Math.min(r,n),o=Math.max(o,n);h+=this._graphicOriginX,_+=this._graphicOriginX,r+=this._graphicOriginY,o+=this._graphicOriginY,this._xMin=Math.round(h/this._stepX),this._xMax=Math.round(_/this._stepX),this._yMin=Math.round(r/this._stepY),this._yMax=Math.round(o/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1},t.prototype._nextInside=function(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null;this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}var t=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(t+=.5*this._stepX);var i=this._currentY*this._stepY+this._offsetY;this._currentX++;var s=void 0,e=void 0;return"Random"===this._gridType?(s=this._graphicOriginX+t+this._stepX*this._randomness*(.5-Math.random())*2/3,e=this._graphicOriginY+i+this._stepY*this._randomness*(.5-Math.random())*2/3):(s=this._graphicOriginX+this._cosAngle*t+this._sinAngle*i,e=this._graphicOriginY-this._sinAngle*t+this._cosAngle*i),this._internalPlacement.setTranslate(s,e),this._internalPlacement}},t}()}));