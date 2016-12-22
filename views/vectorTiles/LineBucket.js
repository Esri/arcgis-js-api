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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket","./style/StyleLayer"],function(t,e,n,r,o,i){var a=function(t){function e(e,n,r,o,i){t.call(this,e,n),this.lineVertexBuffer=r,this.lineIndexBuffer=o,this.joinsVertexBuffer=i}return n(e,t),Object.defineProperty(e.prototype,"triangleIndexStart",{get:function(){return this.triangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"triangleIndexCount",{get:function(){return this.triangleElementsCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectorStart",{get:function(){return this.pointConnectorStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectorCount",{get:function(){return this.pointConnectorCount},enumerable:!0,configurable:!0}),e.prototype.assignBufferInfo=function(t){var e=t;e.triangleElementsStart=this.triangleElementsStart,e.triangleElementsCount=this.triangleElementsCount,e.pointConnectorStart=this.pointConnectorStart,e.pointConnectorCount=this.pointConnectorCount},e.prototype.processFeatures=function(t,e){this.triangleElementsStart=this.lineIndexBuffer.index,this.triangleElementsCount=0,this.pointConnectorStart=this.joinsVertexBuffer.index,this.pointConnectorCount=0,t&&t.setExtent(this.layerExtent);for(var n=new i.LineLayout(this.layer,this.zoom),r=0,o=this._features;r<o.length;r++){var a=o[r],s=a.getGeometry(t);this._processFeature(n,s)}},e.prototype._processFeature=function(t,e){if(e)for(var n=e.length,r=0;n>r;r++)this._processGeometry(e[r],t)},e.prototype._processGeometry=function(t,e){for(var n=t.length;n>=2&&t[n-1].isEqual(t[n-2]);)n--;if(!(2>n)){var r=t[0],o=t[n-1],i=r.isEqual(o);if(!i||2!==n){var a,s,d,u,f,l,c,p,h,y,x=e.cap,g=e.join,m=Math.min(e.miterLimit,4),C=Math.min(e.roundLimit,1.4142),v=2/C*Math.sqrt(1-1/C/C),b=-1,E=-1,S=-1,B=1,j=0;if(i){s=t[n-2];var q=o.x-s.x,M=o.y-s.y;l=Math.sqrt(q*q+M*M),h=q/l,y=M/l}for(var I=this.lineVertexBuffer,L=this.lineIndexBuffer,V=this.joinsVertexBuffer,_=L.index,O=V.index,P=0;n>P;P++)if(void 0!==h&&(c=-h,p=-y),s&&(d=s,f=l),s=t[P],a=g,d&&(j+=f),u=n>P+1?t[P+1]:void 0,i&&!u&&(u=t[1]),!u||!s.isEqual(u)){if(u){var q=u.x-s.x,M=u.y-s.y;l=Math.sqrt(q*q+M*M),h=q/l,y=M/l}else h=-c,y=-p;void 0===c&&(c=-h,p=-y);var F=c+h,G=p+y,H=h*G-y*F;F/=H,G/=H;var k=Math.sqrt(F*F+G*G);2!==a&&Math.abs(H)<v&&m>k&&(a=2),d||2!==x?u||2!==x?2===a?(Math.abs(H)<.01?(F=-y,G=h):k>m&&(F=(c-h)/H,G=(p-y)/H),k>m&&(B=-B),S=I.add(s.x,s.y,F*B,G*B,0,0,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S,S=I.add(s.x,s.y,-F*B,-G*B,0,1,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S,d&&u||1!==x||V.add(s.x,s.y)):(d&&(S=I.add(s.x,s.y,p*B,-c*B,0,0,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S,S=I.add(s.x,s.y,-p*B,c*B,0,1,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S),d&&u||1!==x||(b=I.add(s.x,s.y,p*B,-c*B,0,0,j),V.add(s.x,s.y)),B=1,1===a&&(d&&u&&(!i||P>0)&&V.add(s.x,s.y),b=-1,E=-1,S=-1),u&&(S=I.add(s.x,s.y,-y*B,h*B,0,0,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S,S=I.add(s.x,s.y,y*B,-h*B,0,1,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S)):(S=I.add(s.x,s.y,h-y*B,y+h*B,0,0,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S,S=I.add(s.x,s.y,h+y*B,y-h*B,0,1,j),b>=0&&E>=0&&S>=0&&L.add(b,E,S),b=E,E=S):(S=I.add(s.x,s.y,c+B*p,p-c*B,0,0,j),b=E,E=S,S=I.add(s.x,s.y,c-p*B,p+c*B,0,1,j),b=E,E=S)}this.triangleElementsCount+=3*(L.index-_),this.pointConnectorCount+=V.index-O}}},e}(o);return a});