/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,n,x,i,u,o,f){B=0;const l=(i-x)*o,p=u&&u.length,c=p?(u[0]-x)*o:l;let v,s,d,h,Z,a=t(n,x,i,0,c,o,!0);if(a&&a.next!==a.prev){if(p&&(a=y(n,x,i,u,a,o)),l>80*o){v=d=n[0+x*o],s=h=n[1+x*o];for(let e=o;e<c;e+=o){const t=n[e+x*o],r=n[e+1+x*o];v=Math.min(v,t),s=Math.min(s,r),d=Math.max(d,t),h=Math.max(h,r)}Z=Math.max(d-v,h-s),Z=0!==Z?1/Z:0}r(a,e,o,v,s,Z,f,0)}}function t(e,n,t,x,r,i,u){let l;if(u===a(e,n,t,x,r,i)>0)for(let f=x;f<r;f+=i)l=o(f+n*i,e[f+n*i],e[f+1+n*i],l);else for(let f=r-i;f>=x;f-=i)l=o(f+n*i,e[f+n*i],e[f+1+n*i],l);return l&&b(l,l.next)&&(f(l),l=l.next),l}function x(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!b(x,x.next)&&0!==d(x.prev,x,x.next))x=x.next;else{if(f(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function r(e,n,t,o,l,y,p,c){if(!e)return;!c&&y&&(e=v(e,o,l,y));let s=e;for(;e.prev!==e.next;){const v=e.prev,d=e.next;if(y?u(e,o,l,y):i(e))n.push(v.index/t+p),n.push(e.index/t+p),n.push(d.index/t+p),f(e),e=d.next,s=d.next;else if((e=d)===s){c?1===c?r(e=g(e,n,t,p),n,t,o,l,y,p,2):2===c&&k(e,n,t,o,l,y,p):r(x(e),n,t,o,l,y,p,1);break}}}function i(e){const n=e.prev,t=e,x=e.next;if(d(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,w(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&d(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function u(e,n,t,x){const r=e.prev,i=e,u=e.next;if(d(r,i,u)>=0)return!1;const o=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,f=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,l=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,y=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=M(o,f,n,t,x),c=M(l,y,n,t,x);let v=e.prevZ,s=e.nextZ;for(;v&&v.z>=p&&s&&s.z<=c;){if(v!==e.prev&&v!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&d(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,s!==e.prev&&s!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&d(s.prev,s,s.next)>=0)return!1;s=s.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&d(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;s&&s.z<=c;){if(s!==e.prev&&s!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&d(s.prev,s,s.next)>=0)return!1;s=s.nextZ}return!0}function o(e,n,t,x){const r=O.create(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function f(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function l(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function y(e,n,r,i,u,o){const f=new Array;for(let x=0,y=i.length;x<y;x++){const u=t(e,n,r,i[x]*o,x<y-1?i[x+1]*o:r*o,o,!1);u===u.next&&(u.steiner=!0),f.push(l(u))}f.sort(m);for(const t of f)p(t,u),u=x(u,u.next);return u}function p(e,n){if(n=c(e,n)){const t=j(n,e);x(t,t.next)}}function c(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const o=i,f=i.x,l=i.y;let y,p=1/0;for(t=i.next;t!==o;)x>=t.x&&t.x>=f&&x!==t.x&&w(r<l?x:u,r,f,l,r<l?u:x,r,t.x,t.y)&&(y=Math.abs(r-t.y)/(x-t.x),(y<p||y===p&&t.x>i.x)&&z(t,e)&&(i=t,p=y)),t=t.next;return i}function v(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=M(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,v(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,s(e)}function s(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let o=t;for(;u>0||o>0&&x;){let t;0===u?(t=x,x=x.nextZ,o--):0!==o&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,o--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}function d(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function h(e,n,t,x){return!!(b(e,n)&&b(t,x)||b(e,x)&&b(t,n))||d(e,n,t)>0!=d(e,n,x)>0&&d(t,x,e)>0!=d(t,x,n)>0}function Z(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&h(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function a(e,n,t,x,r,i){let u=0;for(let o=x,f=r-i;o<r;o+=i)u+=(e[f+n*i]-e[o+n*i])*(e[o+1+n*i]+e[f+1+n*i]),f=o;return u}function w(e,n,t,x,r,i,u,o){return(r-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(x-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(r-u)*(x-o)>=0}function z(e,n){return d(e.prev,e,e.next)<0?d(e,n,e.next)>=0&&d(e,e.prev,n)>=0:d(e,n,e.prev)<0||d(e,e.next,n)<0}function M(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function b(e,n){return e.x===n.x&&e.y===n.y}function m(e,n){return e.x-n.x}function g(e,n,t,x){let r=e;do{const i=r.prev,u=r.next.next;!b(i,u)&&h(i,r,r.next,u)&&z(i,u)&&z(u,i)&&(n.push(i.index/t+x),n.push(r.index/t+x),n.push(u.index/t+x),f(r),f(r.next),r=e=u),r=r.next}while(r!==e);return r}function k(e,n,t,i,u,o,f){let l=e;do{let e=l.next.next;for(;e!==l.prev;){if(l.index!==e.index&&A(l,e)){let y=j(l,e);return l=x(l,l.next),y=x(y,y.next),r(l,n,t,i,u,o,f,0),void r(y,n,t,i,u,o,f,0)}e=e.next}l=l.next}while(l!==e)}function A(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!Z(e,n)&&z(e,n)&&z(n,e)&&_(e,n)}function _(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}function j(e,n){const t=O.create(e.index,e.x,e.y),x=O.create(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}let O=function(){function e(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}return e.create=function(n,t,x){const r=B<P.length?P[B++]:new e;return r.index=n,r.x=t,r.y=x,r.prev=null,r.next=null,r.z=null,r.prevZ=null,r.nextZ=null,r.steiner=!1,r},e}();const P=new Array,q=8096;let B=0;for(let C=0;C<q;C++)P.push(new O);e.bufcut=n,Object.defineProperty(e,"__esModule",{value:!0})}));
