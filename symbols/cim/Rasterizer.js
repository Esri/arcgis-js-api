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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./CIMSymbolHelper","./SDFHelper","./utils"],(function(e,t,r,a,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.dispose=function(){this._rasterizationCanvas=null},e.prototype.rasterizeJSONResource=function(e,t){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var i=r.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),n=i[0];return{size:[i[1],i[2]],image:new Uint32Array(n.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){var o=r.SymbolHelper.rasterizeSimpleLine(e.style,e.cap),s=o[0];return{size:[o[1],o[2]],image:new Uint32Array(s.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var l,h;if("simple-marker"===e.type||"esriSMS"===e.type?(l=r.CIMSymbolHelper.fromSimpleMarker(e),h=a.getSDFInfo(l)):(l=e,h=a.getSDFInfo(l)),h&&!t){var f=a.buildSDF(h),u=f[0],p=f[1],m=f[2];return u?{size:[p,m],image:new Uint32Array(u.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var d=r.CIMSymbolHelper.rasterize(this._rasterizationCanvas,l,!t),g=d[0],c=d[1],v=d[2],y=d[3],w=d[4];return g?{size:[c,v],image:new Uint32Array(g.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:w}:null},e.prototype.rasterizeImageResource=function(e,t){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e.width,this._rasterizationCanvas.height=e.height;var r=this._rasterizationCanvas.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):(e.setAttribute("width",e.width.toString()),e.setAttribute("height",e.height.toString()),r.drawImage(e,0,0,e.width,e.height));var a,n=r.getImageData(0,0,e.width,e.height),o=new Uint8Array(n.data);if(t)for(var s=0,l=t;s<l.length;s++){var h=l[s];if(h&&h.oldColor&&4===h.oldColor.length&&h.newColor&&4===h.newColor.length){var f=h.oldColor,u=f[0],p=f[1],m=f[2],d=f[3],g=h.newColor,c=g[0],v=g[1],y=g[2],w=g[3];if(u===c&&p===v&&m===y&&d===w)continue;for(var C=0;C<o.length;C+=4)u===o[C]&&p===o[C+1]&&m===o[C+2]&&d===o[C+3]&&(o[C]=c,o[C+1]=v,o[C+2]=y,o[C+3]=w)}}for(C=0;C<o.length;C+=4)a=o[C+3]/255,o[C]=o[C]*a,o[C+1]=o[C+1]*a,o[C+2]=o[C+2]*a;var S=e.width,z=e.height,b=o;if(S>=512||z>=512){var _=e.width/e.height;_>1?(S=512,z=Math.round(512/_)):(z=512,S=Math.round(512*_)),b=new Uint8Array(4*S*z),i.resampleHermite(o,e.width,e.height,new Uint8ClampedArray(b.buffer),S,z,!1)}return{size:[S,z],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e}();t.default=n}));