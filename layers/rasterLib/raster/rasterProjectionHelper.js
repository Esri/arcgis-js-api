// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/sniff","../../../kernel","../../../geometry/Extent","../../../geometry/projection","../../../geometry/webMercatorUtils","../../../SpatialReference","../../../geometry/Point"],(function(e,r,o,s,i,t,n,a,l,c){var d={requirePE:function(e,r){return!(e.equals(r.spatialReference)||e._canProject(r))},load:function(){var e=new o;if(!this._loadPromise)if(n.isSupported())this._loadPromise=n.load();else{var s=new o;s.reject("projection engine is not supported on this version of the browser, please try with a modern browser"),this._loadPromise=s.promise}return this._loadPromise.isFulfilled()?this._loadPromise.isResolved()?e.resolve():this._loadPromise.isRejected()&&e.resolve():(this._pendingdfds=this._pendingdfds||[],this._pendingdfds.push(e),this._loadPromise.then(r.hitch(this,(function(){this._pendingdfds.forEach((function(e){e.isFulfilled()||e.resolve()}))})),r.hitch(this,(function(){this._pendingdfds.forEach((function(e){e.isFulfilled()||e.reject()}))})))),e.promise},computeError:function(e,r){var o=(e[0]+e[4]+e[4*r.rows]+e[4*r.rows+4])/4,s=(e[1]+e[5]+e[4*r.rows+1]+e[4*r.rows+5])/4;return[Math.abs(o-e[2*r.rows+2]),Math.abs(s-e[2*r.rows+3])]},project:function(e,r){if(!r||e.spatialReference.wkid===r.wkid)return e;var o=n.isLoaded()?n:a;"esri.geometry.Extent"===e.declaredClass?e=new t(e.toJson()):"esri.geometry.Point"===e.declaredClass&&(e=new c(e.toJson())),r=new l(r.toJson());var s=o.project(e,r);return s&&"esri.geometry.Extent"===s.declaredClass?s=new t(s.toJson()):s&&"esri.geometry.Point"===s.declaredClass&&(s=new c(s.toJson())),s},projectResolution:function(e,r,o){var s=o.xmin+(o.xmax-o.xmin)/2,i=o.ymin+(o.ymax-o.ymin)/2,n=new t(s,i,s+e.x,i+e.y,e.spatialReference),a=this.project(n,r);return new c(a.xmax-a.xmin,a.ymax-a.ymin,r)},getProjectionOffsetGrid:function(e,r,o,s,i,t){null==t&&(t=[32,32]);var l,d,f,m,p,h,u,w=e.xmin,x=e.ymin,y=e.xmax,g=e.ymax,j=e.spatialReference,v=r.spatialReference,_=n.isLoaded()?n:a,P=r.spatialReference._getInfo(),R=P&&P.valid[0],b=P&&P.valid[1],E=t[0]*o.x,F=t[1]*o.y,J={cols:Math.ceil((y-w)/E-.1)+1,rows:Math.ceil((g-x)/F-.1)+1},M=[];for(f=0;f<J.cols;f++)for(h=u,u=[],m=0;m<J.rows;m++)l=new c({x:w+E*f,y:x+F*m,spatialReference:j}),d=_.project(l,v),u.push(d),f>0&&P&&d.x<h[m].x&&(d.x+=b-R),M.push((d.x-r.xmin)/(r.xmax-r.xmin)),M.push((d.y-r.ymin)/(r.ymax-r.ymin));var C=this.computeError(M,J),k=new Float32Array((J.cols-1)*(J.rows-1)*2*6),A=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),L=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(f=0;f<J.cols-1;f++)for(m=0;m<J.rows-1;m++){var q=f*J.rows*2+2*m,O=M[q],S=M[q+1],z=M[q+2],D=M[q+3],G=M[q+=2*J.rows],H=M[q+1],I=M[q+2],U=M[q+3],B=0,K=12*(m*(J.cols-1)+f);for(p=0;p<3;p++)k[K++]=A[B++]*O+A[B++]*z+A[B++]*I;for(B=0,p=0;p<3;p++)k[K++]=A[B++]*S+A[B++]*D+A[B++]*U;for(B=0,p=0;p<3;p++)k[K++]=L[B++]*O+L[B++]*G+L[B++]*I;for(B=0,p=0;p<3;p++)k[K++]=L[B++]*S+L[B++]*H+L[B++]*U}return{offsets:M,error:C,coefficients:k,spacing:t,size:[J.cols-1,J.rows-1]}}};return s("extend-esri")&&r.setObject("layers.rasterLib.raster.rasterProjectionHelper",d,i),d}));