// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","./Point","./Extent","./mathUtils","../srUtils"],function(e,t,n,i,r,s,a,o,h,l,c,g){var u={type:"polygon",rings:null},f=e(o,{declaredClass:"esri.geometry.Polygon",constructor:function(e){n.mixin(this,u),this.rings=[],this._ring=0,e&&(n.isArray(e)?this.rings=n.isArray(e[0][0])?e:[e]:e.rings?n.mixin(this,e):this.spatialReference=e,this.spatialReference&&(this.spatialReference=g.createSpatialReference(this.spatialReference))),this.verifySR()},addRing:function(e){return this.clearCache(),this._ring=this.rings.length,this.rings[this._ring]=[],n.isArray(e[0])?t.forEach(e,this._addPointArr,this):t.forEach(e,this._addPoint,this),this},_addPointArr:function(e){this.rings[this._ring].push(e)},_addPoint:function(e){this.rings[this._ring].push([e.x,e.y])},_insertPoints:function(e,n){this.clearCache(),this._ring=n,this.rings[this._ring]||(this.rings[this._ring]=[]),t.forEach(e,this._addPoint,this)},_validateInputs:function(e,t){return null!==e&&void 0!==e&&(0>e||e>=this.rings.length)?!1:null!==t&&void 0!==e&&(0>t||t>=this.rings[e].length)?!1:!0},getPoint:function(e,t){return this._validateInputs(e,t)?new h(this.rings[e][t],this.spatialReference):void 0},setPoint:function(e,t,n){return this._validateInputs(e,t)?(this.clearCache(),this.rings[e][t]=[n.x,n.y],this):void 0},insertPoint:function(e,t,n){return this._validateInputs(e)&&s.isDefined(t)&&t>=0&&t<=this.rings[e].length?(this.clearCache(),this.rings[e].splice(t,0,[n.x,n.y]),this):void 0},removeRing:function(e){if(this._validateInputs(e,null)){this.clearCache();var t,n=this.rings.splice(e,1)[0],i=n.length,r=this.spatialReference;for(t=0;i>t;t++)n[t]=new h(n[t],r);return n}},removePoint:function(e,t){return this._validateInputs(e,t)?(this.clearCache(),new h(this.rings[e].splice(t,1)[0],this.spatialReference)):void 0},getExtent:function(){var e,t=this.getCacheValue("_extent"),n=this.getCacheValue("_partwise");if(t)return e=new l(t),e._partwise=n,e;var i=this.rings,r=i.length;if(r&&i[0].length){var s,a,o,h,c,g,u,f,p,d,y,x,m,v=c=i[0][0][0],_=g=i[0][0][1],R=Math.min,C=Math.max,P=this.spatialReference,w=[];for(u=0;r>u;u++){for(s=i[u],d=y=s[0]&&s[0][0],x=m=s[0]&&s[0][1],p=s.length,f=0;p>f;f++)a=s[f],o=a[0],h=a[1],v=R(v,o),_=R(_,h),c=C(c,o),g=C(g,h),d=R(d,o),x=R(x,h),y=C(y,o),m=C(m,h);w.push(new l({xmin:d,ymin:x,xmax:y,ymax:m,spatialReference:P?P.toJson():null}))}return t={xmin:v,ymin:_,xmax:c,ymax:g,spatialReference:P?P.toJson():null},n=w.length>1?w:null,this.setCacheValue("_extent",t),this.setCacheValue("_partwise",n),e=new l(t),e._partwise=n,e}},contains:function(e){var t,n,i,r,s,a,o,l,c=this.rings,g=!1,u=c.length,f=this.spatialReference,p=e.spatialReference,d=e.x,y=e.y;for(f&&p&&!f.equals(p)&&f._canProject(p)&&(l=f.isWebMercator()?h.lngLatToXY(d,y):h.xyToLngLat(d,y,!0),d=l[0],y=l[1]),o=0;u>o;o++)for(t=c[o],r=t.length,s=0,a=0;r>a;a++)s++,s===r&&(s=0),n=t[a],i=t[s],(n[1]<y&&i[1]>=y||i[1]<y&&n[1]>=y)&&n[0]+(y-n[1])/(i[1]-n[1])*(i[0]-n[0])<d&&(g=!g);return g},getCentroid:function(){var e=this.getCacheValue("_centroid");if(void 0!==e)return e;var n,i,r,s,a,o,l=this.rings,c=[],g=1/0,u=-(1/0),f=1/0,p=-(1/0);if(t.forEach(l,function(e){n=i=r=0,t.forEach(e,function(t,s){s<e.length-1&&(a=e[s+1],o=t[0]*a[1]-a[0]*t[1],n+=(t[0]+a[0])*o,i+=(t[1]+a[1])*o,r+=o,t[0]<g&&(g=t[0]),t[0]>u&&(u=t[0]),t[1]<f&&(f=t[1]),t[1]>p&&(p=t[1]))}),r>0&&(r*=-1),r&&c.push([n,i,r/2])}),c.sort(function(e,t){return e[2]-t[2]}),n=i=void 0,c[0]&&(s=6*c[0][2],n=c[0][0]/s,i=c[0][1]/s,(g>n||n>u||f>i||i>p)&&(n=i=void 0)),void 0===n||void 0===i){var d=l[0]&&l[0].length?this._getLineCentroid(l[0]):null;d&&(n=d.x,i=d.y)}return e=isNaN(n)||isNaN(i)?null:new h(n,i,this.spatialReference),this.setCacheValue("_centroid",e),e},_getLineCentroid:function(e){var t,n,i,r,s,a,o=0,h=0,l=0,g={x:0,y:0},u={x:0,y:0},f=e.length;for(r=0;f-1>r;r++)n=e[r],i=e[r+1],n&&i&&(g.x=n[0],g.y=n[1],u.x=i[0],u.y=i[1],t=c.getLength(g,u),t>0&&(o+=t,s=c.getMidpoint(n,i),h+=t*s[0],l+=t*s[1]));return o>0?a={x:h/o,y:l/o}:e[0]&&(a={x:e[0][0],y:e[0][1]}),a},isClockwise:function(e){var t,i=0,r=e.length,s=n.isArray(e[0])?function(e,t){return e[0]*t[1]-t[0]*e[1]}:function(e,t){return e.x*t.y-t.x*e.y};for(t=0;r>t;t++)i+=s(e[t],e[(t+1)%r]);return 0>=i/2},isSelfIntersecting:function(e){e=e||this;var t,n,i,r,s,a,o,h,l,g=e.rings.length;for(i=0;g>i;i++){for(t=0;t<e.rings[i].length-1;t++)for(s=[[e.rings[i][t][0],e.rings[i][t][1]],[e.rings[i][t+1][0],e.rings[i][t+1][1]]],n=i+1;g>n;n++)for(r=0;r<e.rings[n].length-1;r++)if(a=[[e.rings[n][r][0],e.rings[n][r][1]],[e.rings[n][r+1][0],e.rings[n][r+1][1]]],o=c._getLineIntersection2(s,a),o&&!(o[0]===s[0][0]&&o[1]===s[0][1]||o[0]===a[0][0]&&o[1]===a[0][1]||o[0]===s[1][0]&&o[1]===s[1][1]||o[0]===a[1][0]&&o[1]===a[1][1]))return!0;if(h=e.rings[i].length,!(4>=h))for(t=0;h-3>t;t++)for(l=h-1,0===t&&(l=h-2),s=[[e.rings[i][t][0],e.rings[i][t][1]],[e.rings[i][t+1][0],e.rings[i][t+1][1]]],n=t+2;l>n;n++)if(a=[[e.rings[i][n][0],e.rings[i][n][1]],[e.rings[i][n+1][0],e.rings[i][n+1][1]]],o=c._getLineIntersection2(s,a),o&&!(o[0]===s[0][0]&&o[1]===s[0][1]||o[0]===a[0][0]&&o[1]===a[0][1]||o[0]===s[1][0]&&o[1]===s[1][1]||o[0]===a[1][0]&&o[1]===a[1][1]))return!0}return!1},toJson:function(){var e={rings:n.clone(this.rings)},t=this.spatialReference;return t&&(e.spatialReference=t.toJson()),e}});return f.defaultProps=u,f.createEllipse=function(e){var t,n,i,r,s,a=e.center.x,o=e.center.y,h=e.longAxis,l=e.shortAxis,c=e.numberOfPoints,g=e.map,u=[],p=2*Math.PI/c;for(n=0;c>n;n++)i=Math.cos(n*p),r=Math.sin(n*p),t=g.toMap({x:h*i+a,y:l*r+o}),u.push(t);return u.push(u[0]),s=new f(g.spatialReference),s.addRing(u),s},f.createCircle=function(e){var t={center:e.center,longAxis:e.r,shortAxis:e.r,numberOfPoints:e.numberOfPoints,map:e.map},n=f.createEllipse(t);return n},f.fromExtent=function(e){var n=e.normalize(),i=e.spatialReference;return new f({rings:t.map(n,function(e){return[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]}),spatialReference:i?i.toJson():null})},i("extend-esri")&&(n.setObject("geometry.Polygon",f,r),r.geometry.defaultPolygon=u,r.geometry.createEllipse=f.createEllipse,r.geometry.createCircle=f.createCircle,r.geometry.isClockwise=f.prototype.isClockwise,r.geometry.polygonSelfIntersecting=f.prototype.isSelfIntersecting),f});