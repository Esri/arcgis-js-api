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

define(["require","exports","./CIMSymbolHelper","./Rect","./SDFHelper","./utils"],(function(e,r,t,a,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.dispose=function(){this._rasterizationCanvas=null},e.prototype.rasterizeJSONResource=function(e,r,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var o=t.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style,r),s=o[0];return{size:[o[1],o[2]],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){var l=t.SymbolHelper.rasterizeSimpleLine(e.style,e.cap),m=l[0];return{size:[l[1],l[2]],image:new Uint32Array(m.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var f,h,p;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(f=t.CIMSymbolHelper.fromSimpleMarker(e),p=i.getSDFInfo(f)):"CIMHatchFill"===e.type?(f=t.CIMSymbolHelper.fromCIMHatchFill(e),h=new a.default(f.frame.xmin,-f.frame.ymax,f.frame.xmax-f.frame.xmin,f.frame.ymax-f.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(f=t.CIMSymbolHelper.fromCIMInsidePolygon(e),h=new a.default(f.frame.xmin,-f.frame.ymax,f.frame.xmax-f.frame.xmin,f.frame.ymax-f.frame.ymin)):(f=e,p=i.getSDFInfo(f)),p&&!n){var u=i.buildSDF(p),y=u[0],c=u[1],d=u[2];return y?{size:[c,d],image:new Uint32Array(y.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var g=t.CIMSymbolHelper.rasterize(this._rasterizationCanvas,f,h,!n),v=g[0],C=g[1],w=g[2],S=g[3],z=g[4];return v?{size:[C,w],image:new Uint32Array(v.buffer),sdf:!1,simplePattern:!1,anchorX:S,anchorY:z}:null},e.prototype.rasterizeImageResource=function(e,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e.width,this._rasterizationCanvas.height=e.height;var t=this._rasterizationCanvas.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):(e.setAttribute("width",e.width.toString()),e.setAttribute("height",e.height.toString()),t.drawImage(e,0,0,e.width,e.height));var a,i=t.getImageData(0,0,e.width,e.height),o=new Uint8Array(i.data);if(r)for(var s=0,l=r;s<l.length;s++){var m=l[s];if(m&&m.oldColor&&4===m.oldColor.length&&m.newColor&&4===m.newColor.length){var f=m.oldColor,h=f[0],p=f[1],u=f[2],y=f[3],c=m.newColor,d=c[0],g=c[1],v=c[2],C=c[3];if(h===d&&p===g&&u===v&&y===C)continue;for(var w=0;w<o.length;w+=4)h===o[w]&&p===o[w+1]&&u===o[w+2]&&y===o[w+3]&&(o[w]=d,o[w+1]=g,o[w+2]=v,o[w+3]=C)}}for(w=0;w<o.length;w+=4)a=o[w+3]/255,o[w]=o[w]*a,o[w+1]=o[w+1]*a,o[w+2]=o[w+2]*a;var S=e.width,z=e.height,I=o;if(S>=512||z>=512){var b=e.width/e.height;b>1?(S=512,z=Math.round(512/b)):(z=512,S=Math.round(512*b)),I=new Uint8Array(4*S*z),n.resampleHermite(o,e.width,e.height,new Uint8ClampedArray(I.buffer),S,z,!1)}return{size:[S,z],image:new Uint32Array(I.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e}();r.default=o}));