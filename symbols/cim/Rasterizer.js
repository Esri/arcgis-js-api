// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./CIMSymbolHelper","./SDFHelper","./utils"],function(e,r,t,i,a){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.dispose=function(){this._rasterizationCanvas=null},e.prototype.rasterizeJSONResource=function(e,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var a=t.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),n=a[0];return{size:[a[1],a[2]],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0}}if("simple-line"===e.type||"esriSLS"===e.type){var s=t.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,e.style,e.cap),o=s[0];return{size:[s[1],s[2]],image:new Uint32Array(o.buffer),sdf:!0,simplePattern:!0}}var l,f;if("simple-marker"===e.type||"esriSMS"===e.type?(l=t.CIMSymbolHelper.fromSimpleMarker(e),f=i.getSDFInfo(l)):(l=e,f=i.getSDFInfo(l)),f&&!r){var h=i.buildSDF(f),p=h[0],u=h[1],m=h[2];return p?{size:[u,m],image:new Uint32Array(p.buffer),sdf:!0,simplePattern:!0}:null}var v=t.CIMSymbolHelper.rasterize(this._rasterizationCanvas,l,!r),d=v[0],y=v[1],g=v[2];return d?{size:[y,g],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!1}:null},e.prototype.rasterizeImageResource=function(e,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));var t=e;this._rasterizationCanvas.width=t.width,this._rasterizationCanvas.height=t.height;var i=this._rasterizationCanvas.getContext("2d");i.drawImage(t,0,0,t.width,t.height);var n=i.getImageData(0,0,t.width,t.height),s=new Uint8Array(n.data);if(r)for(var o=0,l=r;o<l.length;o++){var f=l[o];if(f&&f.oldColor&&4===f.oldColor.length&&f.newColor&&4===f.newColor.length){var h=f.oldColor,p=h[0],u=h[1],m=h[2],v=h[3],d=f.newColor,y=d[0],g=d[1],C=d[2],z=d[3];if(p===y&&u===g&&m===C&&v===z)continue;for(var w=0;w<s.length;w+=4)p===s[w]&&u===s[w+1]&&m===s[w+2]&&v===s[w+3]&&(s[w]=y,s[w+1]=g,s[w+2]=C,s[w+3]=z)}}for(var S,w=0;w<s.length;w+=4)S=s[w+3]/255,s[w]=s[w]*S,s[w+1]=s[w+1]*S,s[w+2]=s[w+2]*S;var c=t.width,b=t.height,_=s;if(c>=512||b>=512){var A=t.width/t.height;A>1?(c=512,b=Math.round(512/A)):(b=512,c=Math.round(512*A)),_=new Uint8Array(4*c*b),a.resampleHermite(s,t.width,t.height,new Uint8ClampedArray(_.buffer),c,b,!1)}return{size:[c,b],image:new Uint32Array(_.buffer),sdf:!1,simplePattern:!1}},e}();r.default=n});