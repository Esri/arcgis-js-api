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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./CIMSymbolHelper","./Rect","./SDFHelper","./utils"],(function(e,r,t,a,i,n){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.dispose=function(){this._rasterizationCanvas=null},e.prototype.rasterizeJSONResource=function(e,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var n=t.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),o=n[0];return{size:[n[1],n[2]],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){var l=t.SymbolHelper.rasterizeSimpleLine(e.style,e.cap),s=l[0];return{size:[l[1],l[2]],image:new Uint32Array(s.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var m,f,h;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(m=t.CIMSymbolHelper.fromSimpleMarker(e),h=i.getSDFInfo(m)):"CIMHatchFill"===e.type?(m=t.CIMSymbolHelper.fromCIMHatchFill(e),f=new a.default(m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(m=t.CIMSymbolHelper.fromCIMInsidePolygon(e),f=new a.default(m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):(m=e,h=i.getSDFInfo(m)),h&&!r){var p=i.buildSDF(h),u=p[0],y=p[1],d=p[2];return u?{size:[y,d],image:new Uint32Array(u.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var c=t.CIMSymbolHelper.rasterize(this._rasterizationCanvas,m,f,!r),g=c[0],v=c[1],C=c[2],w=c[3],S=c[4];return g?{size:[v,C],image:new Uint32Array(g.buffer),sdf:!1,simplePattern:!1,anchorX:w,anchorY:S}:null},e.prototype.rasterizeImageResource=function(e,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e.width,this._rasterizationCanvas.height=e.height;var t=this._rasterizationCanvas.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):(e.setAttribute("width",e.width.toString()),e.setAttribute("height",e.height.toString()),t.drawImage(e,0,0,e.width,e.height));var a,i=t.getImageData(0,0,e.width,e.height),o=new Uint8Array(i.data);if(r)for(var l=0,s=r;l<s.length;l++){var m=s[l];if(m&&m.oldColor&&4===m.oldColor.length&&m.newColor&&4===m.newColor.length){var f=m.oldColor,h=f[0],p=f[1],u=f[2],y=f[3],d=m.newColor,c=d[0],g=d[1],v=d[2],C=d[3];if(h===c&&p===g&&u===v&&y===C)continue;for(var w=0;w<o.length;w+=4)h===o[w]&&p===o[w+1]&&u===o[w+2]&&y===o[w+3]&&(o[w]=c,o[w+1]=g,o[w+2]=v,o[w+3]=C)}}for(w=0;w<o.length;w+=4)a=o[w+3]/255,o[w]=o[w]*a,o[w+1]=o[w+1]*a,o[w+2]=o[w+2]*a;var S=e.width,z=e.height,I=o;if(S>=512||z>=512){var b=e.width/e.height;b>1?(S=512,z=Math.round(512/b)):(z=512,S=Math.round(512*b)),I=new Uint8Array(4*S*z),n.resampleHermite(o,e.width,e.height,new Uint8ClampedArray(I.buffer),S,z,!1)}return{size:[S,z],image:new Uint32Array(I.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e}();r.default=o}));