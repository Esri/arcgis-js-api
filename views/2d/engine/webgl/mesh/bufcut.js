/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e,t,r,i,u,l,o){D=0;const f=(i-r)*l,p=u&&u.length,c=p?(u[0]-r)*l:f;let v,s,h,d,Z,a=n(t,r,i,0,c,l,!0);if(a&&a.next!==a.prev){if(p&&(a=y(t,r,i,u,a,l)),f>80*l){v=h=t[0+r*l],s=d=t[1+r*l];for(let e=l;e<c;e+=l){const n=t[e+r*l],x=t[e+1+r*l];v=Math.min(v,n),s=Math.min(s,x),h=Math.max(h,n),d=Math.max(d,x)}Z=Math.max(h-v,d-s),Z=0!==Z?1/Z:0}x(a,e,l,v,s,Z,o,0)}}function n(e,n,t,x,r,i,o){let y;if(o===Z(e,n,t,x,r,i)>0)for(let l=x;l<r;l+=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);else for(let l=r-i;l>=x;l-=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);return y&&M(y,y.next)&&(l(y),y=y.next),y}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!M(x,x.next)&&0!==s(x.prev,x,x.next))x=x.next;else{if(l(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,o,y,f,p,v){if(!e)return;!v&&f&&(e=c(e,o,y,f));let s=e;for(;e.prev!==e.next;){const c=e.prev,h=e.next;if(f?i(e,o,y,f):r(e))n.push(c.index/u+p),n.push(e.index/u+p),n.push(h.index/u+p),l(e),e=h.next,s=h.next;else if((e=h)===s){v?1===v?x(e=b(e,n,u,p),n,u,o,y,f,p,2):2===v&&g(e,n,u,o,y,f,p):x(t(e),n,u,o,y,f,p,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(s(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,a(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&s(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(s(r,i,u)>=0)return!1;const l=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,o=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,y=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,f=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=z(l,o,n,t,x),c=z(y,f,n,t,x);let v=e.prevZ,h=e.nextZ;for(;v&&v.z>=p&&h&&h.z<=c;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;h&&h.z<=c;){if(h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,t,x){const r=q.create(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function l(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function o(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function y(e,x,r,i,u,l){const y=new Array;for(let t=0,f=i.length;t<f;t++){const u=n(e,x,r,i[t]*l,t<f-1?i[t+1]*l:r*l,l,!1);u===u.next&&(u.steiner=!0),y.push(o(u))}y.sort(m);for(const n of y)f(n,u),u=t(u,u.next);return u}function f(e,n){if(n=p(e,n)){const x=j(n,e);t(x,x.next)}}function p(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const l=i,o=i.x,y=i.y;let f,p=1/0;for(t=i.next;t!==l;)x>=t.x&&t.x>=o&&x!==t.x&&a(r<y?x:u,r,o,y,r<y?u:x,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(x-t.x),(f<p||f===p&&t.x>i.x)&&w(t,e)&&(i=t,p=f)),t=t.next;return i}function c(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=z(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,c(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,v(e)}function v(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let l=t;for(;u>0||l>0&&x;){let t;0===u?(t=x,x=x.nextZ,l--):0!==l&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,l--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}function s(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function h(e,n,t,x){return!!(M(e,n)&&M(t,x)||M(e,x)&&M(t,n))||s(e,n,t)>0!=s(e,n,x)>0&&s(t,x,e)>0!=s(t,x,n)>0}function d(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&h(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function Z(e,n,t,x,r,i){let u=0;for(let l=x,o=r-i;l<r;l+=i)u+=(e[o+n*i]-e[l+n*i])*(e[l+1+n*i]+e[o+1+n*i]),o=l;return u}function a(e,n,t,x,r,i,u,l){return(r-u)*(n-l)-(e-u)*(i-l)>=0&&(e-u)*(x-l)-(t-u)*(n-l)>=0&&(t-u)*(i-l)-(r-u)*(x-l)>=0}function w(e,n){return s(e.prev,e,e.next)<0?s(e,n,e.next)>=0&&s(e,e.prev,n)>=0:s(e,n,e.prev)<0||s(e,e.next,n)<0}function z(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function M(e,n){return e.x===n.x&&e.y===n.y}function m(e,n){return e.x-n.x}function b(e,n,t,x){let r=e;do{const i=r.prev,u=r.next.next;!M(i,u)&&h(i,r,r.next,u)&&w(i,u)&&w(u,i)&&(n.push(i.index/t+x),n.push(r.index/t+x),n.push(u.index/t+x),l(r),l(r.next),r=e=u),r=r.next}while(r!==e);return r}function g(e,n,r,i,u,l,o){let y=e;do{let e=y.next.next;for(;e!==y.prev;){if(y.index!==e.index&&k(y,e)){let f=j(y,e);return y=t(y,y.next),f=t(f,f.next),x(y,n,r,i,u,l,o,0),void x(f,n,r,i,u,l,o,0)}e=e.next}y=y.next}while(y!==e)}function k(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!d(e,n)&&w(e,n)&&w(n,e)&&A(e,n)}function A(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}function j(e,n){const t=q.create(e.index,e.x,e.y),x=q.create(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class q{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,n,t){const x=D<B.length?B[D++]:new q;return x.index=e,x.x=n,x.y=t,x.prev=null,x.next=null,x.z=null,x.prevZ=null,x.nextZ=null,x.steiner=!1,x}}const B=new Array,C=8096;let D=0;for(let E=0;E<C;E++)B.push(new q);export{e as bufcut};