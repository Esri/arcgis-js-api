/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=16,n=8,o=4,r=2,h=1,c=new Float64Array(2),s=new Float64Array(2),a=-90,f=90,l=-180,u=180,i="0123456789bcdefghjkmnpqrstuvwxyz";function M(t){return t<=57?t-48:t<=104?t-88:t<=107?t-89:t<=110?t-90:t-91}function g(t){return i[t]}function d(t){return(t[0]+t[1])/2}function G(t,e,n){return t[0]=e,t[1]=n,t}function b(t,e){const n=d(t),o=e,r=!e;t[0]=r*t[0]+o*n,t[1]=r*n+o*t[1]}function X(t,e){const n=e>d(t);return b(t,n),n}function Y(t,i){const g=G(c,a,f),X=G(s,l,u);for(let c=0;c<i.length;c++){const t=M(i.charCodeAt(c));c%2==0?(b(X,!!(e&t)),b(X,!!(o&t)),b(X,!!(h&t)),b(g,!!(n&t)),b(g,!!(r&t))):(b(g,!!(e&t)),b(g,!!(o&t)),b(g,!!(h&t)),b(X,!!(n&t)),b(X,!!(r&t)))}return t[0]=d(g),t[1]=d(X),t}function p(t,e){let n=0,o=0,r=30,h=30;for(let c=0;c<e.length;c++){const t=M(e.charCodeAt(c)),s=c%2==0;r-=s?3:2,h-=s?2:3,n|=x(t,s)<<r,o|=k(t,s)<<h}return{geohashX:n,geohashY:o}}function A(t,e){let n=-90,o=90,r=-180,h=180;for(let c=0;c<e;c++){const e=Math.ceil((c+1)/2),s=Math.floor((c+1)/2),a=1-c%2,f=30-(3*e+2*s),l=30-(2*e+3*s),u=3*a+2*(1-a),i=2*a+3*(1-a),M=3*a+7*(1-a)<<l,g=(7*a+3*(1-a)<<f&t.geohashX)>>f,d=(M&t.geohashY)>>l;for(let t=u-1;t>=0;t--){const e=(r+h)/2,n=g&1<<t?1:0;r=(1-n)*r+n*e,h=(1-n)*e+n*h}for(let t=i-1;t>=0;t--){const e=(n+o)/2,r=d&1<<t?1:0;n=(1-r)*n+r*e,o=(1-r)*e+r*o}}return[r,n,h,o]}function m(t,e,n,o){o%2&&(o+=1);let r=0,h=0,c=-90,s=90,a=-180,f=180;for(let l=0;l<o/2;l++){for(let t=0;t<5;t++){const e=(a+f)/2,o=n>e?1:0;r|=o<<29-(t+5*l),a=(1-o)*a+o*e,f=(1-o)*e+o*f}for(let t=0;t<5;t++){const n=(c+s)/2,o=e>n?1:0;h|=o<<29-(t+5*l),c=(1-o)*c+o*n,s=(1-o)*n+o*s}}t.geohashX=r,t.geohashY=h}function y(t,e,n,o,r){r%2&&(r+=1);let h=0,c=0,s=-90,a=90,f=-180,l=180;for(let u=0;u<r/2;u++){for(let t=0;t<5;t++){const e=(f+l)/2,n=o>e?1:0;h|=n<<29-(t+5*u),f=(1-n)*f+n*e,l=(1-n)*e+n*l}for(let t=0;t<5;t++){const e=(s+a)/2,o=n>e?1:0;c|=o<<29-(t+5*u),s=(1-o)*s+o*e,a=(1-o)*e+o*a}}t[2*e]=h,t[2*e+1]=c}function B(t,e,n){let o="";const r=G(c,-90,90),h=G(s,-180,180);for(let c=0;c<n;c++){let n=0;!(c%2)?(n|=X(h,e)<<4,n|=X(r,t)<<3,n|=X(h,e)<<2,n|=X(r,t)<<1,n|=X(h,e)<<0):(n|=X(r,t)<<4,n|=X(h,e)<<3,n|=X(r,t)<<2,n|=X(h,e)<<1,n|=X(r,t)<<0),o+=g(n)}return o}function C(t){const e=Math.floor(5*t/2);return(f-a)/2**e}function v(t){const e=Math.ceil(5*t/2);return(u-l)/2**e}function w(t,e,n){return n?t&h|(e&h)<<1|(t&r)<<1|(e&r)<<2|(t&o)<<2:e&h|(t&h)<<1|(e&r)<<1|(t&r)<<2|(e&o)<<2}function x(t,c){return c?h&t|(o&t)>>1|(e&t)>>2:(r&t)>>1|(n&t)>>2}function k(t,c){return c?(r&t)>>1|(n&t)>>2:h&t|(o&t)>>1|(e&t)>>2}function P(t,c,s){const a=!((t.length-1)%2),f=t.substring(0,t.length-1),l=M(t.charCodeAt(t.length-1));let u=0,i=0,d=0,G=0;a?(u=8,i=4,d=h&l|(o&l)>>1|(e&l)>>2,G=(r&l)>>1|(n&l)>>2):(u=4,i=8,G=h&l|(o&l)>>1|(e&l)>>2,d=(r&l)>>1|(n&l)>>2);const b=d+c,X=G+s,Y=Math.floor(b/u),p=Math.floor(X/i),A=g(w(b-Y*u,X-p*i,a));return t.length>1&&(Y||p)?P(f,Y,p)+A:f+A}function j(t,e,n,o,r){const h=Math.abs(n-t),c=Math.abs(o-e),s=C(r),a=v(r),f=Math.ceil(c/a),l=Math.ceil(h/s),u=B(t,e,r),i=new Array;for(let M=0;M<f;M++)for(let t=0;t<l;t++)i.push(P(u,M,t));return i}function D(t,e,n,o,r,h){const c=Math.abs(n-t),s=Math.abs(o-e),a=C(r),f=v(r),l=Math.ceil(s/f),u=Math.ceil(c/a),i=B(t,e,r);for(let M=0;M<l;M++)for(let r=0;r<u;r++){const c=P(i,M,r),[s,l]=Y([0,0],c),u=s-a/2,g=l-f/2,d=s+a/2,G=l+f/2,b=a*f,X=Math.max(t,u),p=Math.max(e,g),A=Math.min(n,d)-X,m=Math.min(o,G)-p;h(c,Math.abs(A*m)/b)}}t.convertGeohash32ToXY=p,t.decodeBase32Char=M,t.decodeGeohash=Y,t.decodeGeohashXY=A,t.encodeBase32Char=g,t.encodeGeohash=B,t.forEachIntersectingGeohash=D,t.getIntersectingGeohashes=j,t.getRelativeGeohash=P,t.latDistPerGeohash=C,t.lonDistPerGeohash=v,t.setGeohashBuf=y,t.setGeohashXY=m,t.unpackXBits=x,t.unpackYBits=k,Object.defineProperty(t,"__esModule",{value:!0})}));
