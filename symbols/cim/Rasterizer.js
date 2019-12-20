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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./CIMSymbolHelper","./SDFHelper","./utils"],function(e,r,t,a,i){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.dispose=function(){this._rasterizationCanvas=null},e.prototype.rasterizeJSONResource=function(e,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var i=t.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),n=i[0];return{size:[i[1],i[2]],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){var o=t.SymbolHelper.rasterizeSimpleLine(e.style,e.cap),s=o[0];return{size:[o[1],o[2]],image:new Uint32Array(s.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var l,h;if("simple-marker"===e.type||"esriSMS"===e.type?(l=t.CIMSymbolHelper.fromSimpleMarker(e),h=a.getSDFInfo(l)):(l=e,h=a.getSDFInfo(l)),h&&!r){var f=a.buildSDF(h),p=f[0],u=f[1],m=f[2];return p?{size:[u,m],image:new Uint32Array(p.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var d=t.CIMSymbolHelper.rasterize(this._rasterizationCanvas,l,!r),v=d[0],c=d[1],y=d[2],g=d[3],C=d[4];return v?{size:[c,y],image:new Uint32Array(v.buffer),sdf:!1,simplePattern:!1,anchorX:g,anchorY:C}:null},e.prototype.rasterizeImageResource=function(e,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));var t=e;this._rasterizationCanvas.width=t.width,this._rasterizationCanvas.height=t.height;var a=this._rasterizationCanvas.getContext("2d");a.drawImage(t,0,0,t.width,t.height);var n=a.getImageData(0,0,t.width,t.height),o=new Uint8Array(n.data);if(r)for(var s=0,l=r;s<l.length;s++){var h=l[s];if(h&&h.oldColor&&4===h.oldColor.length&&h.newColor&&4===h.newColor.length){var f=h.oldColor,p=f[0],u=f[1],m=f[2],d=f[3],v=h.newColor,c=v[0],y=v[1],g=v[2],C=v[3];if(p===c&&u===y&&m===g&&d===C)continue;for(var z=0;z<o.length;z+=4)p===o[z]&&u===o[z+1]&&m===o[z+2]&&d===o[z+3]&&(o[z]=c,o[z+1]=y,o[z+2]=g,o[z+3]=C)}}for(var w,z=0;z<o.length;z+=4)w=o[z+3]/255,o[z]=o[z]*w,o[z+1]=o[z+1]*w,o[z+2]=o[z+2]*w;var S=t.width,b=t.height,_=o;if(S>=512||b>=512){var A=t.width/t.height;A>1?(S=512,b=Math.round(512/A)):(b=512,S=Math.round(512*A)),_=new Uint8Array(4*S*b),i.resampleHermite(o,t.width,t.height,new Uint8ClampedArray(_.buffer),S,b,!1)}return{size:[S,b],image:new Uint32Array(_.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e}();r.default=n});