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

define(["require","exports","./Util"],function(t,e,r){function i(t){switch(t){case 5126:return 4;case 5120:case 5121:return 1;default:return 2}}var s=r.assert,o=r.VertexAttrConstants,a=o.POSITION,n=o.NORMAL,h=o.UV0,l=o.COLOR,b=o.REGION,f=function(){function t(t,e,r){this.stride=0,this.attributes={},this.attrNames=t,this.attrSizes=e,this.attrTypes=r,this.init()}return t.prototype.init=function(){var t=this.attrNames.length;if(s(this.attrSizes.length===t),this.attrTypes)s(this.attrTypes.length===t);else{this.attrTypes=new Array(this.attrNames.length);for(var e=0;e<this.attrTypes.length;e++)this.attrTypes[e]=5126}for(var e=0;t>e;e++){var r={offset:this.stride,size:this.attrSizes[e],type:this.attrTypes[e]};s(r.size*i(this.attrTypes[e])%4===0,"attribute byte length must be a multiple of 4"),this.stride+=this.attrSizes[e]*i(this.attrTypes[e])/4,this.attributes[this.attrNames[e]]=r}},t.prototype.getStride=function(){return this.stride},t.prototype.getAttributes=function(){return this.attributes},t.prototype.hasAttribute=function(t){return t in this.attributes},t.prototype.enableVertexAttribArrays=function(t,e,r){for(var i=0;i<this.attrNames.length;++i){var s=this.attrNames[i],o=this.attributes[s],a=e.getAttribLocation(s);if(a>-1)if(16===o.size)for(var n=0;4>n;n++)t.enableVertexAttribArray(a+n),r&&r.vertexAttribDivisorANGLE(a+n,1);else t.enableVertexAttribArray(a),r&&r.vertexAttribDivisorANGLE(a,1)}},t.prototype.disableVertexAttribArrays=function(t,e,r){for(var i=0;i<this.attrNames.length;++i){var s=this.attrNames[i],o=this.attributes[s],a=e.getAttribLocation(s);if(a>-1)if(16===o.size)for(var n=0;4>n;n++)t.disableVertexAttribArray(a+n),r&&r.vertexAttribDivisorANGLE(a+n,0);else t.disableVertexAttribArray(a),r&&r.vertexAttribDivisorANGLE(a,0)}},t.prototype.setVertexAttribPointers=function(t,e){for(var r=0;r<this.attrNames.length;++r){var i=this.attrNames[r],s=this.attributes[i],o=s.size,a=4*s.offset,n=s.type,h=e.getAttribLocation(i);if(h>-1)if(16===o)for(var l=0;4>l;l++)t.vertexAttribPointer(h+l,4,n,!1,4*this.stride,a+16*l);else t.vertexAttribPointer(h,o,n,!1,4*this.stride,a)}},t.Defaults={Pos:new t([a],[3],void 0),Pos2:new t([a],[2],void 0),PosNorm:new t([a,n],[3,3],void 0),PosTex:new t([a,h],[3,2],void 0),PosColor:new t([a,l],[3,4],[5126,5121]),Pos2Tex:new t([a,h],[2,2],void 0),PosNormTex:new t([a,n,h],[3,3,2],void 0),PosNormCol:new t([a,n,l],[3,3,4],[5126,5126,5121]),PosNormTexCol:new t([a,n,h,l],[3,3,2,4],[5126,5126,5126,5121]),PosNormTexRegion:new t([a,n,h,b],[3,3,2,4],[5126,5126,5126,5123]),PosNormTexRegionCol:new t([a,n,h,b,l],[3,3,2,4,4],[5126,5126,5126,5123,5121]),Model:new t(["model","modelNormal"],[16,16],void 0),ModelCol:new t(["model","modelNormal","instanceColor"],[16,16,4],void 0)},t}();return f});