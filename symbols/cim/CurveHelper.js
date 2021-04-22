/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=.03;let n=function(){function t(){this._path=[]}var e=t.prototype;return e.path=function(){return this._path},e.addPath=function(t,e){e||t.reverse(),Array.prototype.push.apply(this._path,t),e||t.reverse()},t.mergePath=function(t,e){e&&Array.prototype.push.apply(t,e)},e.startPath=function(t){this._path.push(t)},e.lineTo=function(t){this._path.push(t)},e.close=function(){const t=this._path;t.length>1&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))},t}(),s=function(){function t(t=0,e=!1){}var e=t.prototype;return e.normalize=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);t[0]/=e,t[1]/=e},e.calculateLength=function(t,e){const n=e[0]-t[0],s=e[1]-t[1];return Math.sqrt(n*n+s*s)},e.calculateSegLength=function(t,e){return this.calculateLength(t[e],t[e+1])},e.calculatePathLength=function(t){let e=0;const n=t?t.length:0;for(let s=0;s<n-1;++s)e+=this.calculateSegLength(t,s);return e},e.calculatePathArea=function(t){let e=0;const n=t?t.length:0;for(let s=0;s<n-1;++s)e+=(t[s+1][0]-t[s][0])*(t[s+1][1]+t[s][1]);return e/2},e.getCoord2D=function(t,e,n){return[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n]},e.getSegCoord2D=function(t,e,n){return this.getCoord2D(t[e],t[e+1],n)},e.getAngle=function(t,e,n){const s=e[0]-t[0],r=e[1]-t[1];return Math.atan2(r,s)},e.getSegAngle=function(t,e,n){return this.getAngle(t[e],t[e+1],n)},e.getAngleCS=function(t,e,n){const s=e[0]-t[0],r=e[1]-t[1],o=Math.sqrt(s*s+r*r);return o>0?[s/o,r/o]:[1,0]},e.getSegAngleCS=function(t,e,n){return this.getAngleCS(t[e],t[e+1],n)},e.cut=function(t,e,n,s){return[n<=0?t[e]:this.getSegCoord2D(t,e,n),s>=1?t[e+1]:this.getSegCoord2D(t,e,s)]},e.addSegment=function(t,e,n){n&&t.push(e[0]),t.push(e[1])},e.getSubCurve=function(t,e,n){const s=[];return this.appendSubCurve(s,t,e,n)?s:null},e.appendSubCurve=function(t,e,n,s){const r=e?e.length-1:0;let o=0,u=!0,i=0;for(;i<r;){const r=this.calculateSegLength(e,i);if(0!==r){if(u){if(o+r>n){const h=(n-o)/r;let c=1,l=!1;o+r>=s&&(c=(s-o)/r,l=!0);const a=this.cut(e,i,h,c);if(a&&this.addSegment(t,a,u),l)break;u=!1}}else{if(o+r>s){const n=this.cut(e,i,0,(s-o)/r);n&&this.addSegment(t,n,u);break}this.addSegment(t,[e[i],e[i+1]],u)}o+=r,++i}else++i}return!0},e.getCIMPointAlong=function(t,e){const n=t?t.length-1:0;let s=0,r=-1;for(;r<n;){++r;const n=this.calculateSegLength(t,r);if(0!==n){if(s+n>e){const o=(e-s)/n;return this.getCoord2D(t[r],t[r+1],o)}s+=n}}return null},e.isEmpty=function(t,e){if(!t||t.length<=1)return!0;const n=t?t.length-1:0;let s=-1;for(;s<n;){if(++s,t[s+1][0]!==t[s][0]||t[s+1][1]!==t[s][1])return!1;if(e&&t[s+1][2]!==t[s][2])return!1}return!0},e.offset=function(t,e,n,s,r){if(!t||t.length<2)return null;let o=t.length;const u=t[0][0]===t[o-1][0]&&t[0][1]===t[o-1][1];if(u){if(t.length<3)return null;--o}const i=[];let h=u?t[o-1]:null,c=t[0];for(let l=0;l<o;l++){const r=l===o-1?u?t[0]:null:t[l+1];if(h)if(r){const t=[r[0]-c[0],r[1]-c[1]];this.normalize(t);const o=[c[0]-h[0],c[1]-h[1]];this.normalize(o);const u=o[0]*t[1]-o[1]*t[0],l=o[0]*t[0]+o[1]*t[1];if(u>=0==e<=0){const n=[t[0]-o[0],t[1]-o[1]];this.normalize(n);const s=Math.sqrt((1+l)/2),r=-Math.abs(e)/s;i.push([c[0]-n[0]*r,c[1]-n[1]*r])}else switch(n){case"Mitered":{const n=Math.sqrt((1+l)/2);if(n>0&&1/n<s){const s=[t[0]-o[0],t[1]-o[1]];this.normalize(s);const r=Math.abs(e)/n;i.push([c[0]-s[0]*r,c[1]-s[1]*r]);break}}case"Bevelled":i.push([c[0]+o[1]*e,c[1]-o[0]*e]),i.push([c[0]+t[1]*e,c[1]-t[0]*e]);break;case"Rounded":{i.push([c[0]+o[1]*e,c[1]-o[0]*e]);const n=5,s=1/n;let r=s;for(let u=1;u<n;u++,r+=s){const n=[o[1]*(1-r)+t[1]*r,-o[0]*(1-r)-t[0]*r];this.normalize(n),i.push([c[0]+n[0]*e,c[1]+n[1]*e])}i.push([c[0]+t[1]*e,c[1]-t[0]*e]);break}case"Square":default:if(u<0)i.push([c[0]+(o[1]+o[0])*e,c[1]+(o[1]-o[0])*e]),i.push([c[0]+(t[1]-t[0])*e,c[1]-(t[0]+t[1])*e]);else{const n=Math.sqrt((1+Math.abs(l))/2),s=[t[0]-o[0],t[1]-o[1]];this.normalize(s);const r=e/n;i.push([c[0]-s[0]*r,c[1]-s[1]*r])}}}else{const t=[c[0]-h[0],c[1]-h[1]];this.normalize(t),i.push([c[0]+t[1]*e,c[1]-t[0]*e])}else{const t=[r[0]-c[0],r[1]-c[1]];this.normalize(t),i.push([c[0]+t[1]*e,c[1]-t[0]*e])}h=c,c=r}return u&&i.push([i[0][0],i[0][1]]),i},t}();t.CurveHelper=s,t.PIXEL_TOLERANCE=e,t.PathHelper=n,Object.defineProperty(t,"__esModule",{value:!0})}));
