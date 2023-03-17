// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports"],(function(t,o){var e,r;Object.defineProperty(o,"__esModule",{value:!0}),function(t){t[t.ENTRY=1]="ENTRY",t[t.EXIT=2]="EXIT",t[t.CAP=3]="CAP"}(e=o.VectorRole||(o.VectorRole={})),function(t){t[t.START=1]="START",t[t.END=2]="END"}(r=o.CapPosition||(o.CapPosition={})),o.SYSTEM_MAG_LIMIT=3.8,o.MITER_SAFE_RADS=2*Math.acos(1/o.SYSTEM_MAG_LIMIT);var i=o.SYSTEM_MAG_LIMIT*o.SYSTEM_MAG_LIMIT,s=16/(2*Math.PI);function c(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push(void 0);return e}o.allocTriangles=function(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]}});return e},o.allocExtrudeVectors=function(){var t=function(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]});return e}(30),o={};return o[e.ENTRY]=c(20),o[e.EXIT]=c(20),o[e.CAP]=c(20),{vectors:t,lists:o}},o.copyExtrudeVectors=function(t,o){var r;for(r=0;r<o.vectors.count;++r)t.vectors.items[r].vector[0]=o.vectors.items[r].vector[0],t.vectors.items[r].vector[1]=o.vectors.items[r].vector[1],t.vectors.items[r].texCoords[0]=o.vectors.items[r].texCoords[0],t.vectors.items[r].texCoords[1]=o.vectors.items[r].texCoords[1],t.vectors.items[r].direction[0]=o.vectors.items[r].direction[0],t.vectors.items[r].direction[1]=o.vectors.items[r].direction[1],t.vectors.items[r].base=o.vectors.items[r].base;t.vectors.count=o.vectors.count;var i=o.lists[e.ENTRY],s=t.lists[e.ENTRY],c=o.lists[e.EXIT],n=t.lists[e.EXIT],v=o.lists[e.CAP],d=t.lists[e.CAP];for(r=0;r<i.count;++r)s.items[r]=i.items[r];for(s.count=i.count,r=0;r<c.count;++r)n.items[r]=c.items[r];for(n.count=c.count,r=0;r<v.count;++r)d.items[r]=v.items[r];d.count=v.count,t.capCenter=o.capCenter};var n={vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0],base:void 0};function v(t,o){n.vector[0]=t.vector[0],n.vector[1]=t.vector[1],n.texCoords[0]=t.texCoords[0],n.texCoords[1]=t.texCoords[1],n.direction[0]=t.direction[0],n.direction[1]=t.direction[1],n.base=t.base,t.vector[0]=o.vector[0],t.vector[1]=o.vector[1],t.texCoords[0]=o.texCoords[0],t.texCoords[1]=o.texCoords[1],t.direction[0]=o.direction[0],t.direction[1]=o.direction[1],t.base=o.base,o.vector[0]=n.vector[0],o.vector[1]=n.vector[1],o.texCoords[0]=n.texCoords[0],o.texCoords[1]=n.texCoords[1],o.direction[0]=n.direction[0],o.direction[1]=n.direction[1],o.base=n.base}o.swapExtrudeVectors=v;var d,C=[];for(d=0;d<32;++d)C.push([void 0,void 0]);var a=function(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push([void 0,void 0]);return e}(16);function u(t,o){return t[0]*o[0]+t[1]*o[1]}function m(t){return Math.sqrt(u(t,t))}function x(t,o){var e=m(o);return t[0]=o[0]/e,t[1]=o[1]/e,t}function l(t,o){return t[0]=-o[1],t[1]=o[0],t}function f(t,o){return t[0]*o[1]-t[1]*o[0]}function A(t,o){return t[0]=-o[0],t[1]=-o[1],t}function T(t,o,e){return t[0]=o[0]*e,t[1]=o[1]*e,t}function p(t,o,e){return t[0]=o[0]+e[0],t[1]=o[1]+e[1],t}function h(t,o,e){return function(t,o,e){return(o[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(o[1]-t[1])}(t,o,e)<0}function E(t,o){var e=u(t,o);return e>.999?0:e<-.999?Math.PI:Math.acos(e)}function b(t,o,e,r,i){if(0!==r){var s,c=m(o),n=(i?-1:1)*E(T(C[0],o,1/c),T(C[1],e,1/c))/r,v=Math.cos(n),d=Math.sin(n),a=o[0],u=o[1];for(s=0;s<r-1;++s){var x=a;a=v*x-d*u,u=d*x+v*u,t.items[s][0]=a,t.items[s][1]=u}t.count=r-1}else t.count=0}function M(t){var o,e=t.count,r=Math.floor(e/2);for(o=0;o<r;++o){var i=t.items[o];t.items[o]=t.items[e-o-1],t.items[e-o-1]=i}}o.length=m,o.normalize=x,o.getNumberOfSlices=function(t){return Math.max(Math.round(t*s),1)},o.getRads=E,o.reverse=M;var _=[void 0,void 0],g=[void 0,void 0],I=[0,0],R=[0,0],P=[0,0],Y=[0,0],N=Math.cos(Math.PI/4),X=Math.sin(Math.PI/4),y=Math.sqrt(2),S=function(){function t(t){this._distanceAlongCorrection=t.distanceAlongCorrection}return t.prototype.bridge=function(t,o,r){var i,s,c,n,d=o.vectors,C=o.lists[e.EXIT],a=r.vectors,u=r.lists[e.ENTRY];if(C.count===u.count+1)i=C.items,s=d.items,c=u.items,n=a.items;else if(u.count===C.count+1)i=u.items,s=a.items,c=C.items,n=d.items;else{if(C.count!==u.count)return console.error("Cannot bridge "+C.count+" to "+u.count+"."),void(t.count=0);i=u.items,s=a.items,c=C.items,n=d.items}var m,x=C.count+u.count-2;for(t.count=x,_[0]=i,_[1]=c,g[0]=s,g[1]=n,m=0;m<x;++m){var l=t.items[m],f=(m+0)%2,A=Math.floor((m+0)/2),T=g[f][_[f][A]];l.v1.vector[0]=T.vector[0],l.v1.vector[1]=T.vector[1],l.v1.texCoords[0]=T.texCoords[0],l.v1.texCoords[1]=T.texCoords[1],l.v1.direction[0]=T.direction[0],l.v1.direction[1]=T.direction[1],l.v1.base=T.base;var p=(m+1)%2,E=Math.floor((m+1)/2),b=g[p][_[p][E]];l.v2.vector[0]=b.vector[0],l.v2.vector[1]=b.vector[1],l.v2.texCoords[0]=b.texCoords[0],l.v2.texCoords[1]=b.texCoords[1],l.v2.direction[0]=b.direction[0],l.v2.direction[1]=b.direction[1],l.v2.base=b.base;var M=(m+2)%2,N=Math.floor((m+2)/2),X=g[M][_[M][N]];l.v3.vector[0]=X.vector[0],l.v3.vector[1]=X.vector[1],l.v3.texCoords[0]=X.texCoords[0],l.v3.texCoords[1]=X.texCoords[1],l.v3.direction[0]=X.direction[0],l.v3.direction[1]=X.direction[1],l.v3.base=X.base;var y=l.v1.base&&l.v1.base.point||I,S=l.v2.base&&l.v2.base.point||I,J=l.v3.base&&l.v3.base.point||I;R[0]=y[0]+l.v1.vector[0],R[1]=y[1]+l.v1.vector[1],P[0]=S[0]+l.v2.vector[0],P[1]=S[1]+l.v2.vector[1],Y[0]=J[0]+l.v3.vector[0],Y[1]=J[1]+l.v3.vector[1],h(R,P,Y)||v(l.v2,l.v3)}},t.prototype.pie=function(t,o){if(0!==o.lists[e.CAP].count){if(1===o.lists[e.CAP].count)return console.error("A single vector is not enough to define a pie."),void(t.count=0);var r;for(t.count=o.lists[e.CAP].count-1,r=0;r<t.count;++r){var i=t.items[r],s=o.lists[e.CAP].items[r],c=o.vectors.items[s];i.v1.vector[0]=c.vector[0],i.v1.vector[1]=c.vector[1],i.v1.texCoords[0]=c.texCoords[0],i.v1.texCoords[1]=c.texCoords[1],i.v1.direction[0]=c.direction[0],i.v1.direction[1]=c.direction[1],i.v1.base=c.base;var n=o.lists[e.CAP].items[r+1],d=o.vectors.items[n];i.v2.vector[0]=d.vector[0],i.v2.vector[1]=d.vector[1],i.v2.texCoords[0]=d.texCoords[0],i.v2.texCoords[1]=d.texCoords[1],i.v2.direction[0]=d.direction[0],i.v2.direction[1]=d.direction[1],i.v2.base=d.base;var C=o.capCenter,a=o.vectors.items[C];i.v3.vector[0]=a.vector[0],i.v3.vector[1]=a.vector[1],i.v3.texCoords[0]=a.texCoords[0],i.v3.texCoords[1]=a.texCoords[1],i.v3.direction[0]=a.direction[0],i.v3.direction[1]=a.direction[1],i.v3.base=a.base;var u=i.v1.base&&i.v1.base.point||I,m=i.v2.base&&i.v2.base.point||I,x=i.v3.base&&i.v3.base.point||I;R[0]=u[0]+i.v1.vector[0],R[1]=u[1]+i.v1.vector[1],P[0]=m[0]+i.v2.vector[0],P[1]=m[1]+i.v2.vector[1],Y[0]=x[0]+i.v3.vector[0],Y[1]=x[1]+i.v3.vector[1],h(R,P,Y)||v(i.v2,i.v3)}}else t.count=0},t.prototype.buttCap=function(t,o,e){this.fastMiterJoin(t,o,e)},t.prototype.roundCap=function(t,o,i,s,c,n){void 0===n&&(n=0),this.fastMiterJoin(t,o,i);var v=s===r.START?0:1,d=s===r.START?1:0;t.capCenter=t.vectors.count;var C=t.vectors.items[t.capCenter];C.vector[0]=0,C.vector[1]=0,C.texCoords[0]=0,C.texCoords[1]=0,C.direction[0]=0,C.direction[1]=0,++t.vectors.count,b(a,t.vectors.items[v].vector,t.vectors.items[d].vector,c,!1);var u=t.vectors.count,m=t.lists[e.CAP];m.items[0]=v;var x,l=t.vectors.items[v].texCoords[1],f=t.vectors.items[d].texCoords[1];for(x=0;x<a.count;++x){var A=n*(1-Math.abs(a.count/2-x)/(a.count/2)),T=l+x/(a.count-1)*(f-l),p=a.items[x],h=t.vectors.items[u+x];h.vector[0]=p[0],h.vector[1]=p[1],h.texCoords[0]=A,h.texCoords[1]=T,h.direction[0]=0,h.direction[1]=0,m.items[x+1]=u+x}m.items[a.count+1]=d,m.count=a.count+2,t.vectors.count=u+a.count},t.prototype.squareCap=function(t,o,e,i){this.fastMiterJoin(t,o,e);var s=i===r.START?0:1,c=i===r.START?1:0,n=C[0],v=C[1],d=C[2],a=C[3],u=C[4],m=t.vectors.items[s].vector;n[0]=N*m[0]-X*m[1],n[1]=X*m[0]+N*m[1],T(a,n,y),v[0]=N*n[0]-X*n[1],v[1]=X*n[0]+N*n[1],d[0]=N*v[0]-X*v[1],d[1]=X*v[0]+N*v[1],T(u,d,y);var x=t.vectors.items[s];x.vector[0]=a[0],x.vector[1]=a[1];var l=t.vectors.items[c];l.vector[0]=u[0],l.vector[1]=u[1]},t.prototype.fastMiterJoin=function(t,o,r){var i=l(C[0],r),s=i,c=A(C[1],i),n=t.vectors.items[0];n.vector[0]=s[0],n.vector[1]=s[1],n.texCoords[0]=0,n.texCoords[1]=-1,n.direction[0]=0,n.direction[1]=0;var v=t.vectors.items[1];v.vector[0]=c[0],v.vector[1]=c[1],v.texCoords[0]=0,v.texCoords[1]=1,v.direction[0]=0,v.direction[1]=0,t.vectors.count=2;var d=t.lists[e.ENTRY];d.items[0]=0,d.items[1]=1,d.count=2;var a=t.lists[e.EXIT];a.items[0]=0,a.items[1]=1,a.count=2,t.lists[e.CAP].count=0,t.capCenter=void 0},t.prototype.miterJoin=function(t,o,r){var i=l(C[0],o),s=l(C[1],r),c=C[2];c[0]=i[0]+s[0],c[1]=i[1]+s[1];var n=x(C[3],c),v=u(n,i);n=T(C[4],n,1/v);var d=A(C[5],n);if(this._distanceAlongCorrection){(f=t.vectors.items[0]).vector[0]=n[0],f.vector[1]=n[1],f.texCoords[0]=0,f.texCoords[1]=-1,f.direction[0]=o[0],f.direction[1]=o[1],(p=t.vectors.items[1]).vector[0]=d[0],p.vector[1]=d[1],p.texCoords[0]=0,p.texCoords[1]=1,p.direction[0]=o[0],p.direction[1]=o[1];var a=t.vectors.items[2];a.vector[0]=n[0],a.vector[1]=n[1],a.texCoords[0]=0,a.texCoords[1]=-1,a.direction[0]=r[0],a.direction[1]=r[1];var m=t.vectors.items[3];m.vector[0]=d[0],m.vector[1]=d[1],m.texCoords[0]=0,m.texCoords[1]=1,m.direction[0]=r[0],m.direction[1]=r[1],t.vectors.count=4,(h=t.lists[e.ENTRY]).items[0]=0,h.items[1]=1,h.count=2,(E=t.lists[e.EXIT]).items[0]=2,E.items[1]=3,E.count=2}else{var f,p,h,E;(f=t.vectors.items[0]).vector[0]=n[0],f.vector[1]=n[1],f.texCoords[0]=0,f.texCoords[1]=-1,f.direction[0]=0,f.direction[1]=0,(p=t.vectors.items[1]).vector[0]=d[0],p.vector[1]=d[1],p.texCoords[0]=0,p.texCoords[1]=1,p.direction[0]=0,p.direction[1]=0,t.vectors.count=2,(h=t.lists[e.ENTRY]).items[0]=0,h.items[1]=1,h.count=2,(E=t.lists[e.EXIT]).items[0]=0,E.items[1]=1,E.count=2}t.lists[e.CAP].count=0,t.capCenter=void 0},t.prototype.bevelJoin=function(t,o,r,s){var c=s*s,n=f(o,r),v=n>0?[-1,1]:[1,-1],d=v[0],a=v[1],m=n>0?A(C[0],l(C[1],o)):l(C[2],o),h=n>0?A(C[3],l(C[4],r)):l(C[5],r),E=C[6];E[0]=m[0]+h[0],E[1]=m[1]+h[1];var b=x(C[7],E),_=A(C[8],b),g=u(b,m),I=f(b,m),R=Math.abs(I/g),P=1+R*R,Y=P<i?[R,this._distanceAlongCorrection]:[Math.sqrt(i-1),!0],N=Y[0],X=Y[1],y=P<c?[R,this._distanceAlongCorrection]:[Math.sqrt(c-1),!0],S=y[0],J=y[1];if(J&&X){p((L=t.vectors.items[0]).vector,A(C[9],m),T(C[10],A(C[11],o),N)),L.texCoords[0]=0,L.texCoords[1]=d,L.direction[0]=this._distanceAlongCorrection?o[0]:0,L.direction[1]=this._distanceAlongCorrection?o[1]:0,p((D=t.vectors.items[1]).vector,A(C[12],h),T(C[13],r,N)),D.texCoords[0]=0,D.texCoords[1]=d,D.direction[0]=this._distanceAlongCorrection?r[0]:0,D.direction[1]=this._distanceAlongCorrection?r[1]:0,(w=t.vectors.items[2]).vector[0]=0,w.vector[1]=0,w.texCoords[0]=0,w.texCoords[1]=0,w.direction[0]=0,w.direction[1]=0,p((V=t.vectors.items[3]).vector,m,T(C[14],o,S)),V.texCoords[0]=0,V.texCoords[1]=a,V.direction[0]=this._distanceAlongCorrection?o[0]:0,V.direction[1]=this._distanceAlongCorrection?o[1]:0;var q=t.vectors.items[4];if(p(q.vector,h,T(C[15],A(C[16],r),S)),q.texCoords[0]=0,q.texCoords[1]=a,q.direction[0]=this._distanceAlongCorrection?r[0]:0,q.direction[1]=this._distanceAlongCorrection?r[1]:0,t.vectors.count=5,(O=t.lists[e.ENTRY]).items[0]=0,O.items[1]=2,O.items[2]=3,O.count=3,(j=t.lists[e.EXIT]).items[0]=1,j.items[1]=2,j.items[2]=4,j.count=3,P<c)(G=t.lists[e.CAP]).count=0,t.capCenter=void 0;else(G=t.lists[e.CAP]).items[0]=3,G.items[1]=4,G.count=2,t.capCenter=2}else if(!J&&X){p((L=t.vectors.items[0]).vector,A(C[9],m),T(C[10],A(C[11],o),N)),L.texCoords[0]=0,L.texCoords[1]=d,L.direction[0]=this._distanceAlongCorrection?o[0]:0,L.direction[1]=this._distanceAlongCorrection?o[1]:0,p((D=t.vectors.items[1]).vector,A(C[12],h),T(C[13],r,N)),D.texCoords[0]=0,D.texCoords[1]=d,D.direction[0]=this._distanceAlongCorrection?r[0]:0,D.direction[1]=this._distanceAlongCorrection?r[1]:0,(w=t.vectors.items[2]).vector[0]=0,w.vector[1]=0,w.texCoords[0]=0,w.texCoords[1]=0,w.direction[0]=0,w.direction[1]=0,T((V=t.vectors.items[3]).vector,b,1/g),V.texCoords[0]=0,V.texCoords[1]=a,V.direction[0]=0,V.direction[1]=0,t.vectors.count=4,(O=t.lists[e.ENTRY]).items[0]=0,O.items[1]=2,O.items[2]=3,O.count=3,(j=t.lists[e.EXIT]).items[0]=1,j.items[1]=2,j.items[2]=3,j.count=3,t.lists[e.CAP].count=0,t.capCenter=void 0}else if(J&&!X){var w,V,G;if(T((L=t.vectors.items[0]).vector,_,1/g),L.texCoords[0]=0,L.texCoords[1]=d,L.direction[0]=0,L.direction[1]=0,(D=t.vectors.items[1]).vector[0]=0,D.vector[1]=0,D.texCoords[0]=0,D.texCoords[1]=0,D.direction[0]=0,D.direction[1]=0,p((w=t.vectors.items[2]).vector,m,T(C[9],o,S)),w.texCoords[0]=0,w.texCoords[1]=a,w.direction[0]=this._distanceAlongCorrection?o[0]:0,w.direction[1]=this._distanceAlongCorrection?o[1]:0,p((V=t.vectors.items[3]).vector,h,T(C[10],A(C[11],r),S)),V.texCoords[0]=0,V.texCoords[1]=a,V.direction[0]=this._distanceAlongCorrection?r[0]:0,V.direction[1]=this._distanceAlongCorrection?r[1]:0,t.vectors.count=4,(O=t.lists[e.ENTRY]).items[0]=0,O.items[1]=1,O.items[2]=2,O.count=3,(j=t.lists[e.EXIT]).items[0]=0,j.items[1]=1,j.items[2]=3,j.count=3,P<c)(G=t.lists[e.CAP]).count=0,t.capCenter=void 0;else(G=t.lists[e.CAP]).items[0]=2,G.items[1]=3,G.count=2,t.capCenter=1}else if(!J&&!X){var L,D,O,j;T((L=t.vectors.items[0]).vector,_,1/g),L.texCoords[0]=0,L.texCoords[1]=d,L.direction[0]=0,L.direction[1]=0,T((D=t.vectors.items[1]).vector,b,1/g),D.texCoords[0]=0,D.texCoords[1]=a,D.direction[0]=0,D.direction[1]=0,t.vectors.count=2,(O=t.lists[e.ENTRY]).items[0]=0,O.items[1]=1,O.count=2,(j=t.lists[e.EXIT]).items[0]=0,j.items[1]=1,j.count=2,t.lists[e.CAP].count=0,t.capCenter=void 0}n<0&&(M(t.lists[e.ENTRY]),M(t.lists[e.EXIT]))},t.prototype.roundJoin=function(t,o,r,s){var c=f(o,r),n=c>0?[-1,1]:[1,-1],v=n[0],d=n[1],m=c>0?A(C[0],l(C[1],o)):l(C[2],o),h=c>0?A(C[3],l(C[4],r)):l(C[5],r),E=C[6];E[0]=m[0]+h[0],E[1]=m[1]+h[1];var _=x(C[7],E),g=A(C[8],_),I=u(_,m),R=f(_,m),P=Math.abs(R/I),Y=1+P*P<i?[P,this._distanceAlongCorrection]:[Math.sqrt(i-1),!0],N=Y[0];if(Y[1]){(y=t.vectors.items[0]).vector[0]=m[0],y.vector[1]=m[1],y.texCoords[0]=0,y.texCoords[1]=d,y.direction[0]=0,y.direction[1]=0,(S=t.vectors.items[1]).vector[0]=h[0],S.vector[1]=h[1],S.texCoords[0]=0,S.texCoords[1]=d,S.direction[0]=0,S.direction[1]=0,p((J=t.vectors.items[2]).vector,A(C[9],m),T(C[10],A(C[11],o),N)),J.texCoords[0]=0,J.texCoords[1]=v,J.direction[0]=this._distanceAlongCorrection?o[0]:0,J.direction[1]=this._distanceAlongCorrection?o[1]:0,p((q=t.vectors.items[3]).vector,A(C[12],h),T(C[13],r,N)),q.texCoords[0]=0,q.texCoords[1]=v,q.direction[0]=this._distanceAlongCorrection?r[0]:0,q.direction[1]=this._distanceAlongCorrection?r[1]:0;var X=t.vectors.items[4];X.vector[0]=0,X.vector[1]=0,X.texCoords[0]=0,X.texCoords[1]=0,X.direction[0]=0,X.direction[1]=0,t.vectors.count=5,(w=t.lists[e.ENTRY]).items[0]=2,w.items[1]=4,w.items[2]=0,w.count=3,(V=t.lists[e.EXIT]).items[0]=3,V.items[1]=4,V.items[2]=1,V.count=3,t.capCenter=4}else{var y,S,J,q,w,V;(y=t.vectors.items[0]).vector[0]=m[0],y.vector[1]=m[1],y.texCoords[0]=0,y.texCoords[1]=d,y.direction[0]=0,y.direction[1]=0,(S=t.vectors.items[1]).vector[0]=h[0],S.vector[1]=h[1],S.texCoords[0]=0,S.texCoords[1]=d,S.direction[0]=0,S.direction[1]=0,T((J=t.vectors.items[2]).vector,g,1/I),J.texCoords[0]=0,J.texCoords[1]=v,J.direction[0]=0,J.direction[1]=0,(q=t.vectors.items[3]).vector[0]=0,q.vector[1]=0,q.texCoords[0]=0,q.texCoords[1]=0,q.direction[0]=0,q.direction[1]=0,t.vectors.count=4,(w=t.lists[e.ENTRY]).items[0]=2,w.items[1]=3,w.items[2]=0,w.count=3,(V=t.lists[e.EXIT]).items[0]=2,V.items[1]=3,V.items[2]=1,V.count=3,t.capCenter=3}b(a,m,h,s,c<0);var G,L=t.vectors.count,D=t.lists[e.CAP];for(D.items[0]=0,G=0;G<a.count;++G){var O=a.items[G],j=t.vectors.items[L+G];j.vector[0]=O[0],j.vector[1]=O[1],j.texCoords[0]=0,j.texCoords[1]=d,j.direction[0]=0,j.direction[1]=0,D.items[G+1]=L+G}D.items[a.count+1]=1,D.count=a.count+2,t.vectors.count=L+a.count,c<0&&(M(t.lists[e.ENTRY]),M(t.lists[e.EXIT]))},t.prototype.unitRoundJoin=function(t,o,r,i){var s=f(o,r),c=s>0?[-1,1]:[1,-1],n=c[0],v=c[1],d=s>0?A(C[0],l(C[1],o)):l(C[2],o),u=s>0?A(C[3],l(C[4],r)):l(C[5],r),m=t.vectors.items[0];m.vector[0]=d[0],m.vector[1]=d[1],m.texCoords[0]=0,m.texCoords[1]=v,m.direction[0]=0,m.direction[1]=0;var x=t.vectors.items[1];x.vector[0]=u[0],x.vector[1]=u[1],x.texCoords[0]=0,x.texCoords[1]=v,x.direction[0]=0,x.direction[1]=0;var T=t.vectors.items[2];A(T.vector,d),T.texCoords[0]=0,T.texCoords[1]=n,T.direction[0]=0,T.direction[1]=0;var p=t.vectors.items[3];A(p.vector,u),p.texCoords[0]=0,p.texCoords[1]=n,p.direction[0]=0,p.direction[1]=0;var h=t.vectors.items[4];h.vector[0]=0,h.vector[1]=0,h.texCoords[0]=0,h.texCoords[1]=0,h.direction[0]=0,h.direction[1]=0,t.vectors.count=5;var E=t.lists[e.ENTRY];E.items[0]=2,E.items[1]=0,E.count=2;var _=t.lists[e.EXIT];_.items[0]=3,_.items[1]=1,_.count=2,t.capCenter=4,b(a,d,u,i,s<0);var g,I=t.vectors.count,R=t.lists[e.CAP];for(R.items[0]=0,g=0;g<a.count;++g){var P=a.items[g],Y=t.vectors.items[I+g];Y.vector[0]=P[0],Y.vector[1]=P[1],Y.texCoords[0]=0,Y.texCoords[1]=v,Y.direction[0]=0,Y.direction[1]=0,R.items[g+1]=I+g}R.items[a.count+1]=1,R.count=a.count+2,t.vectors.count=I+a.count,s<0&&(M(t.lists[e.ENTRY]),M(t.lists[e.EXIT]))},t.prototype.rectJoin=function(t,o,r){var i=l(C[0],o),s=l(C[1],r),c=t.vectors.items[0];c.vector[0]=i[0],c.vector[1]=i[1],c.texCoords[0]=0,c.texCoords[1]=-1,c.direction[0]=0,c.direction[1]=0;var n=t.vectors.items[1];n.vector[0]=s[0],n.vector[1]=s[1],n.texCoords[0]=0,n.texCoords[1]=-1,n.direction[0]=0,n.direction[1]=0;var v=t.vectors.items[2];A(v.vector,i),v.texCoords[0]=0,v.texCoords[1]=1,v.direction[0]=0,v.direction[1]=0;var d=t.vectors.items[3];A(d.vector,s),d.texCoords[0]=0,d.texCoords[1]=1,d.direction[0]=0,d.direction[1]=0,t.vectors.count=4;var a=t.lists[e.ENTRY];a.items[0]=0,a.items[1]=2,a.count=2;var u=t.lists[e.EXIT];u.items[0]=1,u.items[1]=3,u.count=2,t.capCenter=void 0},t}();o.Tessellator=S}));