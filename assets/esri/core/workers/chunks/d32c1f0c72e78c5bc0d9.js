self.webpackChunkRemoteClient([32],{244:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return m})),r.d(t,"g",(function(){return y})),r.d(t,"h",(function(){return x})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return p})),r.d(t,"k",(function(){return o})),r.d(t,"l",(function(){return v}));var i=r(174);function n(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function a(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function c(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function u(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function l(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function d(e,t){const r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],o=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+o*o)}function f(e,t){const r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],o=t[3]-e[3];return r*r+i*i+n*n+o*o}function h(e){const t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)}function m(e){const t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n}function p(e,t){const r=t[0],i=t[1],n=t[2],o=t[3];let a=r*r+i*i+n*n+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=r*a,e[1]=i*a,e[2]=n*a,e[3]=o*a),e}function b(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function g(e,t,r,i){const n=t[0],o=t[1],a=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=o+i*(r[1]-o),e[2]=a+i*(r[2]-a),e[3]=s+i*(r[3]-s),e}function v(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*a,e[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*a,e[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*a,e[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*a,e}function y(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function x(e,t){const r=e[0],n=e[1],o=e[2],a=e[3],s=t[0],c=t[1],u=t[2],l=t[3];return Math.abs(r-s)<=i.a*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-c)<=i.a*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(o-u)<=i.a*Math.max(1,Math.abs(o),Math.abs(u))&&Math.abs(a-l)<=i.a*Math.max(1,Math.abs(a),Math.abs(l))}let O=s,_=c,T=u,w=d,S=f,j=h,M=m;Object.freeze({__proto__:null,copy:n,set:o,add:a,subtract:s,multiply:c,divide:u,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:l,scaleAndAdd:function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e},distance:d,squaredDistance:f,length:h,squaredLength:m,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:p,dot:b,lerp:g,random:function(e,t){let r,n,o,a,s,c;t=t||1;do{r=2*Object(i.b)()-1,n=2*Object(i.b)()-1,s=r*r+n*n}while(s>=1);do{o=2*Object(i.b)()-1,a=2*Object(i.b)()-1,c=o*o+a*a}while(c>=1);const u=Math.sqrt((1-s)/c);return e[0]=t*r,e[1]=t*n,e[2]=t*o*u,e[3]=t*a*u,e},transformMat4:v,transformQuat:function(e,t,r){const i=t[0],n=t[1],o=t[2],a=r[0],s=r[1],c=r[2],u=r[3],l=u*i+s*o-c*n,d=u*n+c*i-a*o,f=u*o+a*n-s*i,h=-a*i-s*n-c*o;return e[0]=l*u+h*-a+d*-c-f*-s,e[1]=d*u+h*-s+f*-a-l*-c,e[2]=f*u+h*-c+l*-s-d*-a,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:y,equals:x,sub:O,mul:_,div:T,dist:w,sqrDist:S,len:j,sqrLen:M})},254:function(e,t,r){"use strict";function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o}));const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:i,clone:n,fromValues:function(e,t,r,i,n,o,a,s,c,u,l,d,f,h,m,p){return[e,t,r,i,n,o,a,s,c,u,l,d,f,h,m,p]},createView:o,IDENTITY:a})},255:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return u}));r(81),r(91),r(210),r(383);var i=r(413);r(226),r(244);Object(i.a)();class n{constructor(e){this.message=e}toString(){return"AssertException: "+this.message}}const o={POSITION:"position",NORMAL:"normal",UV0:"uv0",UVMAPSPACE:"uvMapSpace",MEANVERTEXPOSITION:"meanVertexPosition",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",BOUND1:"bound1",BOUND2:"bound2",BOUND3:"bound3",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",TANGENT:"tangent"};function a(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new n(t)}}function s(e){return e[function(e){for(const t in e)return t}(e)]}function c(e,t,r,i){e[12]=t,e[13]=r,e[14]=i}function u(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*l[i];return r}const l=[1/256,1/65536,1/16777216,1/4294967296];u(new Uint8ClampedArray([255,255,255,255]))},274:function(e,t,r){"use strict";function i(){return[1,0,0,0,1,0,0,0,1]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,i,n,o,a,s,c){return[e,t,r,i,n,o,a,s,c]},createView:n})},307:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return x})),r.d(t,"c",(function(){return U})),r.d(t,"d",(function(){return H})),r.d(t,"e",(function(){return F})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return v})),r.d(t,"i",(function(){return y})),r.d(t,"j",(function(){return A})),r.d(t,"k",(function(){return E})),r.d(t,"l",(function(){return w})),r.d(t,"m",(function(){return h})),r.d(t,"n",(function(){return O})),r.d(t,"o",(function(){return V})),r.d(t,"p",(function(){return q})),r.d(t,"q",(function(){return z})),r.d(t,"r",(function(){return C})),r.d(t,"s",(function(){return I})),r.d(t,"t",(function(){return S})),r.d(t,"u",(function(){return m})),r.d(t,"v",(function(){return _})),r.d(t,"w",(function(){return k})),r.d(t,"x",(function(){return W})),r.d(t,"y",(function(){return N})),r.d(t,"z",(function(){return P})),r.d(t,"A",(function(){return L})),r.d(t,"B",(function(){return j})),r.d(t,"C",(function(){return p})),r.d(t,"D",(function(){return T})),r.d(t,"E",(function(){return G})),r.d(t,"F",(function(){return $})),r.d(t,"G",(function(){return D})),r.d(t,"H",(function(){return B})),r.d(t,"I",(function(){return R})),r.d(t,"J",(function(){return M}));class i{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=9;const o=this.TypedArrayConstructor;void 0===i&&(i=9*o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r+e];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r+e]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer,o=e*this.typedBufferStride,a=r*t.typedBufferStride;for(let e=0;e<9;++e)i[o+e]=n[a+e]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=9;class n{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=16;const o=this.TypedArrayConstructor;void 0===i&&(i=16*o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r+e];return t}setMat(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r+e]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer,o=e*this.typedBufferStride,a=r*t.typedBufferStride;for(let e=0;e<16;++e)i[o+e]=n[a+e]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class o{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=1;const o=this.TypedArrayConstructor;void 0===i&&(i=o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=1;var a=r(226);class s{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=2;const o=this.TypedArrayConstructor;void 0===i&&(i=2*o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(a.l)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer,o=e*this.typedBufferStride,a=r*t.typedBufferStride;i[o]=n[a],i[o+1]=n[a+1]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=2;var c=r(103);class u{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=3;const o=this.TypedArrayConstructor;void 0===i&&(i=3*o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(c.r)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,i){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=i}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer,o=e*this.typedBufferStride,a=r*t.typedBufferStride;i[o]=n[a],i[o+1]=n[a+1],i[o+2]=n[a+2]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=3;var l=r(244);class d{constructor(e,t,r=0,i,n){this.TypedArrayConstructor=e,this.elementCount=4;const o=this.TypedArrayConstructor;void 0===i&&(i=4*o.BYTES_PER_ELEMENT);const a=0===t.byteLength?0:r;this.typedBuffer=null==n?new o(t,a):new o(t,a,(n-r)/o.BYTES_PER_ELEMENT),this.typedBufferStride=i/o.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,t){return Object(l.k)(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])}setVec(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,i,n){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=i,this.typedBuffer[e*this.typedBufferStride+3]=n}copyFrom(e,t,r){const i=this.typedBuffer,n=t.typedBuffer,o=e*this.typedBufferStride,a=r*t.typedBufferStride;i[o]=n[a],i[o+1]=n[a+1],i[o+2]=n[a+2],i[o+3]=n[a+3]}get buffer(){return this.typedBuffer.buffer}}d.ElementCount=4;class f extends o{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new f(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}f.ElementType="f32";class h extends s{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class m extends u{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f32";class p extends d{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends i{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class g extends i{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class v extends n{constructor(e,t=0,r,i){super(Float32Array,e,t,r,i),this.elementType="f32"}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="f32";class y extends n{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f64";class x extends o{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="f64";class O extends s{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class _ extends u{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="f64";class T extends d{constructor(e,t=0,r,i){super(Float64Array,e,t,r,i),this.elementType="f64"}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class w extends o{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class S extends s{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class j extends u{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u8";class M extends d{constructor(e,t=0,r,i){super(Uint8Array,e,t,r,i),this.elementType="u8"}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class A extends o{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u16";class C extends s{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class P extends u{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class B extends d{constructor(e,t=0,r,i){super(Uint16Array,e,t,r,i),this.elementType="u16"}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u16";class E extends o{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u32";class I extends s{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class L extends u{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u32";class R extends d{constructor(e,t=0,r,i){super(Uint32Array,e,t,r,i),this.elementType="u32"}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class F extends o{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="i8";class z extends s{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i8";class N extends u{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="i8";class D extends d{constructor(e,t=0,r,i){super(Int8Array,e,t,r,i),this.elementType="i8"}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i8";class U extends o{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class V extends s{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class k extends u{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class G extends d{constructor(e,t=0,r,i){super(Int16Array,e,t,r,i),this.elementType="i16"}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i16";class H extends o{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class q extends s{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class W extends u{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class $ extends d{constructor(e,t=0,r,i){super(Int32Array,e,t,r,i),this.elementType="i32"}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32"},323:function(e,t,r){"use strict";function i(){return[0,0,0,1]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,i){return[e,t,r,i]},createView:n,IDENTITY:[0,0,0,1]})},332:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));var i=r(82);const n=.1,o=.001;function a(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.a.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(i.a`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.a`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},333:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(1),o=r(91),a=r(103),s=r(82);function c(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=s.a`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,i=s.a`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,n=t.sliceHighlightDisabled?s.a`#define highlightSlice(_color_, _pos_) (_color_)`:s.a`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=s.a`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}(i=c||(c={})).bindUniformsWithOrigin=function(e,t,r){i.bindUniforms(e,t,r.slicePlane,r.origin)},i.bindUniforms=function(e,t,r,i){t.slicePlaneEnabled&&(Object(n.g)(r)?(i?(Object(a.g)(u,r.origin,i),e.setUniform3fv("slicePlaneOrigin",u)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",o.b),e.setUniform3fv("slicePlaneBasis2",o.b),e.setUniform3fv("slicePlaneOrigin",o.b)))};const u=Object(o.e)()},334:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.a`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(i.a`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(i.a`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${t.vvInstancingEnabled?i.a`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.a`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(n||(n={}))},335:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i,n=r(82),o=r(519);function a(e){e.fragment.include(o.a),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(n.a`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}(i=a||(a={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},i.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},i.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},336:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(i.a`
      void forwardTextureCoordinates() {}
    `)}},337:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(82);function n(e){const t=i.a`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function o(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i.a`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return a}));r(7);function i(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function n(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function a(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i,n=r(91),o=r(82),a=r(479),s=r(439);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[o.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,o.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?o.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,o.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,o.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?o.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:o.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(i=c||(c={})).Uniforms=class{},i.bindCustomOrigin=function(e,t){Object(a.b)(t,u,l,3),e.setUniform3fv("viewOriginHi",u),e.setUniform3fv("viewOriginLo",l)};const u=Object(n.e)(),l=Object(n.e)()},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(82),n=r(387),o=r(537);Object(n.b)(0,.6,.2);function a(e,t){const r=e.fragment,n=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&n&&e.include(o.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(i.a`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(i.a`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(i.a`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(i.a`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(i.a`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(i.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(i.a`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(a||(a={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},366:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){t.linearDepth?e.vertex.code.add(i.a`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(i.a`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},367:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(i.a`
    vec3 positionModel() { return position; }
  `)}},368:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.a`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(i.a`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(82),n=r(438);function o(e){e.vertex.code.add(i.a`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(i.a`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(i.a`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(i.a`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(i.a`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(i.a`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(i.a`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?i.a`vec3 worldNormal = normalize(worldPos + localOrigin);`:i.a`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?i.a`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:i.a`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(i.a`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}(o||(o={})).bindUniforms=function(e,t){if(t.screenSizePerspective){Object(n.a)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;Object(n.a)(r,e,"screenSizePerspectiveAlignment")}},function(e){e.bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=s){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}}(a||(a={}));const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},374:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(82),n=r(523);function o(e){const t=e.fragment.code;t.add(i.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function a(e,t){const r=e.fragment.code;e.include(n.a),3===t.pbrMode||4===t.pbrMode?(r.add(i.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(o),r.add(i.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(307),n=r(340);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,i.m,t),this}vec2f64(e,t){return this.appendField(e,i.n,t),this}vec3f(e,t){return this.appendField(e,i.u,t),this}vec3f64(e,t){return this.appendField(e,i.v,t),this}vec4f(e,t){return this.appendField(e,i.C,t),this}vec4f64(e,t){return this.appendField(e,i.D,t),this}mat3f(e,t){return this.appendField(e,i.f,t),this}mat3f64(e,t){return this.appendField(e,i.g,t),this}mat4f(e,t){return this.appendField(e,i.h,t),this}mat4f64(e,t){return this.appendField(e,i.i,t),this}vec4u8(e,t){return this.appendField(e,i.J,t),this}f32(e,t){return this.appendField(e,i.a,t),this}f64(e,t){return this.appendField(e,i.b,t),this}u8(e,t){return this.appendField(e,i.l,t),this}u16(e,t){return this.appendField(e,i.j,t),this}i8(e,t){return this.appendField(e,i.e,t),this}vec2i8(e,t){return this.appendField(e,i.q,t),this}vec2i16(e,t){return this.appendField(e,i.o,t),this}vec2u8(e,t){return this.appendField(e,i.t,t),this}vec4u16(e,t){return this.appendField(e,i.H,t),this}u32(e,t){return this.appendField(e,i.k,t),this}appendField(e,t,r){const i=t.ElementCount*Object(n.a)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},386:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return l}));var i=r(91),n=r(174),o=r(103),a=r(274),s=r(323),c=r(244);function u(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function l(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>n.a?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function d(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=r[0],c=r[1],u=r[2],l=r[3];return e[0]=i*l+a*s+n*u-o*c,e[1]=n*l+a*c+o*s-i*u,e[2]=o*l+a*u+i*c-n*s,e[3]=a*l-i*s-n*c-o*u,e}function f(e,t,r,i){const o=t[0],a=t[1],s=t[2],c=t[3];let u,l,d,f,h,m=r[0],p=r[1],b=r[2],g=r[3];return l=o*m+a*p+s*b+c*g,l<0&&(l=-l,m=-m,p=-p,b=-b,g=-g),1-l>n.a?(u=Math.acos(l),d=Math.sin(u),f=Math.sin((1-i)*u)/d,h=Math.sin(i*u)/d):(f=1-i,h=i),e[0]=f*o+h*m,e[1]=f*a+h*p,e[2]=f*s+h*b,e[3]=f*c+h*g,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function m(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,o=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*o+o]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*n+o]-t[3*o+n])*i,e[n]=(t[3*n+r]+t[3*r+n])*i,e[o]=(t[3*o+r]+t[3*r+o])*i}return e}const p=c.c,b=c.k,g=c.a,v=d,y=c.b,x=c.d,O=c.i,_=c.e,T=_,w=c.f,S=w,j=c.j,M=c.g,A=c.h;const C=Object(i.e)(),P=Object(i.g)(1,0,0),B=Object(i.g)(0,1,0);const E=Object(s.a)(),I=Object(s.a)();const L=Object(a.a)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:u,getAxisAngle:l,multiply:d,rotateX:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+a*s,e[1]=n*c+o*s,e[2]=o*c-n*s,e[3]=a*c-i*s,e},rotateY:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c-o*s,e[1]=n*c+a*s,e[2]=o*c+i*s,e[3]=a*c-n*s,e},rotateZ:function(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=i*c+n*s,e[1]=n*c-i*s,e[2]=o*c+a*s,e[3]=a*c-o*s,e},calculateW:function(e,t){const r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e},slerp:f,random:function(e){const t=Object(n.b)(),r=Object(n.b)(),i=Object(n.b)(),o=Math.sqrt(1-t),a=Math.sqrt(t);return e[0]=o*Math.sin(2*Math.PI*r),e[1]=o*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*i),e[3]=a*Math.cos(2*Math.PI*i),e},invert:function(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r*r+i*i+n*n+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=o*s,e},conjugate:h,fromMat3:m,fromEuler:function(e,t,r,i){const n=.5*Math.PI/180;t*=n,r*=n,i*=n;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),u=Math.sin(i),l=Math.cos(i);return e[0]=o*c*l-a*s*u,e[1]=a*s*l+o*c*u,e[2]=a*c*u-o*s*l,e[3]=a*c*l+o*s*u,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:p,set:b,add:g,mul:v,scale:y,dot:x,lerp:O,length:_,len:T,squaredLength:w,sqrLen:S,normalize:j,exactEquals:M,equals:A,rotationTo:function(e,t,r){const i=Object(o.e)(t,r);return i<-.999999?(Object(o.d)(C,P,t),Object(o.k)(C)<1e-6&&Object(o.d)(C,B,t),Object(o.o)(C,C),u(e,C,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(o.d)(C,t,r),e[0]=C[0],e[1]=C[1],e[2]=C[2],e[3]=1+i,j(e,e))},sqlerp:function(e,t,r,i,n,o){return f(E,t,n,o),f(I,r,i,o),f(e,E,I,2*o*(1-o)),e},setAxes:function(e,t,r,i){const n=L;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=i[0],n[4]=i[1],n[7]=i[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],j(e,m(e,n))}})},387:function(e,t,r){"use strict";function i(){return new Float32Array(3)}function n(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function o(){return i()}function a(){return n(1,1,1)}function s(){return n(1,0,0)}function c(){return n(0,1,0)}function u(){return n(0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const l=o(),d=a(),f=s(),h=c(),m=u();Object.freeze({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:n,createView:function(e,t){return new Float32Array(e,t,3)},zeros:o,ones:a,unitX:s,unitY:c,unitZ:u,ZEROS:l,ONES:d,UNIT_X:f,UNIT_Y:h,UNIT_Z:m})},413:function(e,t,r){"use strict";function i(){return[0,0,0,0]}function n(e,t,r,i){return[e,t,r,i]}function o(e,t){return new Float64Array(e,t,4)}function a(){return n(1,1,1,1)}function s(){return n(1,0,0,0)}function c(){return n(0,1,0,0)}function u(){return n(0,0,1,0)}function l(){return n(0,0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o}));const d=a(),f=s(),h=c(),m=u(),p=l();Object.freeze({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:n,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:o,zeros:function(){return[0,0,0,0]},ones:a,unitX:s,unitY:c,unitZ:u,unitW:l,ZEROS:[0,0,0,0],ONES:d,UNIT_X:f,UNIT_Y:h,UNIT_Z:m,UNIT_W:p})},414:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const i=r(3).a.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class n{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&i.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class o extends n{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new u,this.varyings=new l,this.extensions=new d,this.defines=new f}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?m:h,c=this.defines.generateSource().concat(n.defines.generateSource());return`\n${t.join("\n")}\n\n${c.join("\n")}\n\n${s}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class a{constructor(){this._entries=new Array,this._set=new Set}add(e,t,r){const i=`${e}_${t}_${r}`;return this._set.has(i)||(this._entries.push([e,t,r]),this._set.add(i)),this}generateSource(){return this._entries.map(e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t})}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends n{constructor(){super(...arguments),this.uniforms=new a,this.code=new s,this.defines=new f}get builder(){return this}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map(e=>`attribute ${e[1]} ${e[0]};`)}}class l{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(e=>t.includes(e)).map(e=>`#extension ${e} : enable`)}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=new Map}addInt(e,t){const r=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,r)}addFloat(e,t){const r=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,r)}generateSource(){return Array.from(this._entries,([e,t])=>`#define ${e} ${t}`)}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",m="precision highp float;\nprecision highp sampler2D;"},415:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.a`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(i.a`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(i.a`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},416:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(i.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.a`
      void forwardLinearDepth() {}
    `)}},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e){e.vertex.code.add(i.a`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},432:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r(82),n=r(523),o=r(335),a=r(374),s=r(368);function c(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(i.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(i.a`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function u(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(i.a`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function l(e,t){const r=e.fragment;e.include(u),e.include(s.a,t),0!==t.pbrMode&&e.include(a.a,t),e.include(c,t),t.receiveShadows&&e.include(o.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(n.a),r.code.add(i.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(i.a`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(i.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(i.a`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(i.a`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(i.a`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(i.a`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(i.a`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(i.a`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(i.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?i.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return M})),r.d(t,"f",(function(){return w}));var i=r(1),n=r(81),o=r(91),a=r(103),s=r(194),c=r(255),u=r(517);function l(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return h.scale=Math.min(i.divisor/(t-i.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h.minPixelSize=i.minPixelSize,h.paddingPixels=n,h}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function f(e,t){return Math.max(Object(n.g)(e*t.scale,e,t.factor),d(e,t))}Object(n.d)(10),Object(n.d)(12),Object(n.d)(70),Object(n.d)(40);const h={scale:0,factor:0,minPixelSize:0,paddingPixels:0},m=Object(s.b)(),p=c.a;function b(e,t,r,n,o,l,d){const f=Object(u.b)(t),h=r.tolerance;if(!f)if(e.boundingInfo)Object(c.b)("triangle"===e.data.primitiveType),function e(t,r,n,o,c,u){const l=function(e,t,r){return Object(a.r)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(r,n,g);if(Object(s.l)(m,t.getBBMin()),Object(s.k)(m,t.getBBMax()),Object(i.g)(c)&&c.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const u=(e[1]-i-t[1])*r[1],l=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(u,l)),c<0)return!1;if(s=Math.max(s,Math.min(u,l)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],f=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,f)),!(c<0)&&(s=Math.max(s,Math.min(d,f)),!(s>c)&&s<n)}(e,t,r,i,1/0)}(m,r,l,o)){const i=t.getPrimitiveIndices(),a=t.getIndices(),s=t.getPosition(),l=i?i.length:a.length/3;if(l>P){const i=t.getChildren();if(void 0!==i){for(let t=0;t<8;++t)void 0!==i[t]&&e(i[t],r,n,o,c,u);return}}x(r,n,0,l,a,s,i,c,u)}}(e.boundingInfo,n,o,h,l,d);else{const t=e.getIndices(p.POSITION),r=e.getAttribute(p.POSITION);x(n,o,0,t.length/3,t,r,void 0,l,d)}}const g=Object(o.e)();const v=2**-52,y=Object(o.e)();function x(e,t,r,n,o,a,s,c,u){if(s)return function(e,t,r,n,o,a,s,c,u){const{data:l,offsetIdx:d,strideIdx:f}=a,h=e[0],m=e[1],p=e[2],b=t[0]-h,g=t[1]-m,x=t[2]-p;for(let e=r;e<n;++e){const t=s[e];let r=3*t,n=d+f*o[r++],a=l[n++],O=l[n++],_=l[n];n=d+f*o[r++];let w=l[n++],S=l[n++],j=l[n];n=d+f*o[r];let M=l[n++],A=l[n++],C=l[n];Object(i.g)(c)&&([a,O,_]=c.applyToVertex(a,O,_,e),[w,S,j]=c.applyToVertex(w,S,j,e),[M,A,C]=c.applyToVertex(M,A,C,e));const P=w-a,B=S-O,E=j-_,I=M-a,L=A-O,R=C-_,F=g*R-L*x,z=x*I-R*b,N=b*L-I*g,D=P*F+B*z+E*N;if(Math.abs(D)<=v)continue;const U=h-a,V=m-O,k=p-_,G=U*F+V*z+k*N;if(D>0){if(G<0||G>D)continue}else if(G>0||G<D)continue;const H=V*E-B*k,q=k*P-E*U,W=U*B-P*V,$=b*H+g*q+x*W;if(D>0){if($<0||G+$>D)continue}else if($>0||G+$<D)continue;const X=(I*H+L*q+R*W)/D;X>=0&&u(X,T(P,B,E,I,L,R,y),t)}}(e,t,r,n,o,a,s,c,u);const{data:l,offsetIdx:d,strideIdx:f}=a,h=e[0],m=e[1],p=e[2],b=t[0]-h,g=t[1]-m,x=t[2]-p;for(let e=r,t=3*r;e<n;++e){let r=d+f*o[t++],n=l[r++],a=l[r++],s=l[r];r=d+f*o[t++];let O=l[r++],_=l[r++],w=l[r];r=d+f*o[t++];let S=l[r++],j=l[r++],M=l[r];Object(i.g)(c)&&([n,a,s]=c.applyToVertex(n,a,s,e),[O,_,w]=c.applyToVertex(O,_,w,e),[S,j,M]=c.applyToVertex(S,j,M,e));const A=O-n,C=_-a,P=w-s,B=S-n,E=j-a,I=M-s,L=g*I-E*x,R=x*B-I*b,F=b*E-B*g,z=A*L+C*R+P*F;if(Math.abs(z)<=v)continue;const N=h-n,D=m-a,U=p-s,V=N*L+D*R+U*F;if(z>0){if(V<0||V>z)continue}else if(V>0||V<z)continue;const k=D*P-C*U,G=U*A-P*N,H=N*C-A*D,q=b*k+g*G+x*H;if(z>0){if(q<0||V+q>z)continue}else if(q>0||V+q<z)continue;const W=(B*k+E*G+I*H)/z;W>=0&&u(W,T(A,C,P,B,E,I,y),e)}}const O=Object(o.e)(),_=Object(o.e)();function T(e,t,r,i,n,o,s){return Object(a.r)(O,e,t,r),Object(a.r)(_,i,n,o),Object(a.d)(s,O,_),Object(a.o)(s,s),s}function w(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=function(e,t,r,i){return f(e,l(t,r,i))}(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Object(n.e)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function S(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function j(e,t){const r=t?j(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=A(i)),null==i&&t in r||(r[t]=i)}return r}function M(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function A(e){const t=[];return e.forEach(e=>t.push(e)),t}const C={multiply:1,ignore:2,replace:3,tint:4},P=1e3},439:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var i=r(7),n=r(82),o=r(1),a=(r(81),r(91)),s=r(483),c=r(255),u=r(520),l=r(521),d=r(479),f=r(489);r(529);class h{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(Object(o.f)(this._doublePrecisionRequiresObfuscation)){const e=p(this.context,!1),t=p(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let m=null;function p(e,t){const r=new f.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),i=u.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new l.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),o=Object(a.g)(5633261.287538229,2626832.878767164,1434988.0495278358),h=Object(a.g)(5633271.46742708,2626873.6381334523,1434963.231608387),m=function(r,i){const n=new s.a(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),o=new Float32Array(6);Object(d.a)(r,o,3);const a=new Float32Array(6);return Object(d.a)(i,a,3),e.bindProgram(n),n.setUniform3f("u_highA",o[0],o[2],o[4]),n.setUniform3f("u_lowA",o[1],o[3],o[5]),n.setUniform3f("u_highB",a[0],a[2],a[4]),n.setUniform3f("u_lowB",a[1],a[3],a[5]),n}(o,h),p=e.getBoundFramebufferObject(),{x:b,y:g,width:v,height:y}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const x=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,x),m.dispose(),n.dispose(!1),i.dispose(),r.dispose(),e.setViewport(b,g,v,y),e.bindFramebuffer(p);const O=(o[2]-h[2])/25,_=Object(c.e)(x);return Math.abs(O-_)}function b({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.a`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(n.a`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function g(e){return!!Object(i.a)("force-double-precision-obfuscation")||(t=e,(Object(o.f)(m)||m.context!==t)&&(m=new h(t)),m).doublePrecisionRequiresObfuscation;var t}},440:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(82);function n(e){e.vertex.code.add(i.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function o(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(i.a`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(i.a`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},441:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var i=r(82),n=r(366),o=r(333),a=r(518),s=r(334),c=r(332),u=r(519);function l(e,t){e.fragment.include(u.a),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(i.a`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}var d=r(336),f=r(337),h=r(492);function m(e,t){const r=e.vertex.code,u=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.a,{linearDepth:!0}),e.include(d.a,t),e.include(s.a,t),e.include(l,t),e.include(o.a,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.a,t),u.add(i.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(f.a,t),e.include(h.a,t),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?i.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),u.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?i.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:i.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.a,{linearDepth:!1}),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(i.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.a,t),e.include(c.a,t),e.include(a.a),u.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},442:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(82);function n(e){e.code.add(i.a`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}function o(e){e.include(n),e.code.add(i.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${i.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},479:function(e,t,r){"use strict";function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)o[0]=e[s],i(o,a,1),t[s]=a[0],r[s]=a[1]}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const o=new Float64Array(1),a=new Float32Array(2)},480:function(e,t,r){"use strict";r.d(t,"a",(function(){return P})),r.d(t,"b",(function(){return C}));var i=r(82),n=r(366),o=r(414),a=r(333),s=r(334),c=r(332),u=r(373),l=r(415),d=r(335),f=r(416),h=r(374),m=r(364),p=r(336),b=r(365),g=r(417),v=r(337),y=r(367),x=r(440),O=r(492),_=r(441),T=r(524),w=r(368),S=r(432),j=r(525),M=r(526),A=r(442);function C(e){const t=new o.a,r=t.vertex.code,C=t.fragment.code;return t.include(M.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.a),t.varyings.add("vpos","vec3"),t.include(s.a,e),t.include(m.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(v.a,e),t.include(n.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g.a),t.include(T.a,e),t.include(O.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(p.a,e),t.include(f.a,e),t.include(x.a,e),t.include(l.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.a.float(c.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?i.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(a.a,e),t.include(c.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.a),C.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(S.a,e),t.include(w.a,e),t.include(c.a,e),e.receiveShadows&&t.include(d.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(h.a,e),t.fragment.include(A.a),t.include(j.a,e),C.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?i.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:i.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?i.a`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(_.a,e),t}var P=Object.freeze({__proto__:null,build:C})},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return S}));var i=r(82),n=r(366),o=r(414),a=r(333),s=r(334),c=r(332),u=r(373),l=r(415),d=r(335),f=r(416),h=r(374),m=r(364),p=r(336),b=r(365),g=r(417),v=r(337),y=r(367),x=r(440),O=r(441),_=r(368),T=r(432),w=r(442);function S(e){const t=new o.a,r=t.vertex.code,S=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.a),t.varyings.add("vpos","vec3"),t.include(s.a,e),t.include(m.a,e),t.include(u.a,e),0!==e.output&&7!==e.output||(t.include(v.a,e),t.include(n.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(g.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(p.a,e),t.include(f.a,e),t.include(x.a,e),t.include(l.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(i.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.a.float(c.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(a.a,e),t.include(c.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w.a),S.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(a.a,e),t.include(T.a,e),t.include(_.a,e),t.include(c.a,e),e.receiveShadows&&t.include(d.a,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(h.a,e),t.fragment.include(w.a),S.add(i.a`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?i.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:i.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?i.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${i.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?i.a`vec3 normalGround = normalize(vpos + localOrigin);`:i.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i.a``}
        ${1===e.pbrMode||2===e.pbrMode?i.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(O.a,e),t}var j=Object.freeze({__proto__:null,build:S})},483:function(e,t,r){"use strict";r(7);var i=r(1),n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],o=r(494),a=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function s(e){return t=e,r=function(){var e,t,r,i=0,n=0,s=999,c=[],u=[],l=1,d=0,f=0,h=!1,m=!1,p="";return function(o){return u=[],null!==o?function(o){var a;for(i=0,r=(p+=o).length;e=p[i],i<r;){switch(a=i,s){case 0:i="/"===e&&"*"===t?(c.push(e),b(c.join("")),s=999,i+1):(c.push(e),t=e,i+1);break;case 1:case 2:i=g();break;case 3:i=v();break;case 4:i="."===e||/[eE]/.test(e)?(c.push(e),s=5,t=e,i+1):"x"===e&&1===c.length&&"0"===c[0]?(s=11,c.push(e),t=e,i+1):/[^\d]/.test(e)?(b(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 11:i=/[^a-fA-F0-9]/.test(e)?(b(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 5:"f"===e&&(c.push(e),t=e,i+=1),i=/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(c.push(e),t=e,i+1):/[^\d]/.test(e)?(b(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 9999:i=x();break;case 9:i=/[^\s]/g.test(e)?(b(c.join("")),s=999,i):(c.push(e),t=e,i+1);break;case 999:c=c.length?[]:c,i="/"===t&&"*"===e?(f=n+i-1,s=0,t=e,i+1):"/"===t&&"/"===e?(f=n+i-1,s=1,t=e,i+1):"#"===e?(s=2,f=n+i,i):/\s/.test(e)?(s=9,f=n+i,i):(h=/\d/.test(e),m=/[^\w_]/.test(e),f=n+i,s=h?4:m?3:9999,i)}if(a!==i)switch(p[a]){case"\n":d=0,++l;break;default:++d}}return n+=i,p=p.slice(i),u}(o.replace?o.replace(/\r\n/g,"\n"):o):(c.length&&b(c.join("")),s=10,b("(eof)"),u)};function b(e){e.length&&u.push({type:a[s],data:e,position:f,line:l,column:d})}function g(){return"\r"!==e&&"\n"!==e||"\\"===t?(c.push(e),t=e,i+1):(b(c.join("")),s=999,i)}function v(){if("."===t&&/\d/.test(e))return s=5,i;if("/"===t&&"*"===e)return s=0,i;if("/"===t&&"/"===e)return s=1,i;if("."===e&&c.length){for(;y(c););return s=5,i}if(";"===e||")"===e||"("===e){if(c.length)for(;y(c););return b(e),s=999,i+1}var r=2===c.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;y(c););return s=999,i}return c.push(e),t=e,i+1}function y(e){for(var t,r,i=0;;){if(t=o.c.indexOf(e.slice(0,e.length+i).join("")),r=o.c[t],-1===t){if(i--+e.length>0)continue;r=e.slice(0,1).join("")}return b(r),f+=r.length,(c=c.slice(r.length)).length}}function x(){if(/[^\d\w_]/.test(e)){var r=c.join("");return s=o.b.indexOf(r)>-1?8:o.a.indexOf(r)>-1?7:6,b(c.join("")),s=999,i}return c.push(e),t=e,i+1}}(),[].concat(r(t)).concat(r(null));var t,r}const c=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function u(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function l(e,t,r,i){i=i||r;for(const n of e)if("ident"===n.type&&n.data===r)return i in t?t[i]++:t[i]=0,l(e,t,i+"_"+t[i],i);return r}function d(e,t,r="afterVersion"){function i(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const n={data:"\n",type:"whitespace"},o=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let a=function(e){let t=-1,n=0,o=-1;for(let a=0;a<e.length;a++){const s=e[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=i(e,a);if(null===t)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,t)}t<o&&0===n&&(t=a)}return t+1}(e);o(a-1)&&e.splice(a++,0,n);for(const r of t)e.splice(a++,0,r);o(a-1)&&o(a)&&e.splice(a,0,n)}function f(e,t,r,i="lowp"){d(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function h(e,t,r,i,n="lowp"){d(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function m(e,t){let r,i,n=-1;for(let o=t;o<e.length;o++){const t=e[o];if("operator"===t.type&&("["===t.data&&(r=o),"]"===t.data)){i=o;break}"integer"===t.type&&(n=parseInt(t.data,10))}return r&&i&&e.splice(r,i-r+1),n}class p{constructor(e,t,r,i,n={}){if(this._context=null,this._glName=null,this._locations={},this.id=g++,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),e.instanceCounter.increment(3,this),this._context=e,this._vertexShaderSource=t,this._fragmentShaderSource=r,Array.isArray(n))for(const e of n)this._defines[e]="1";else this._defines=n;this._locations=i}get glName(){return this._glName}get locations(){return this._locations}getDefine(e){return this._defines[e]}dispose(){if(!this._context)return;const e=this._context.gl;if(this._vShader){const t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){const t=this._fShader;e.deleteShader(t),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const e=this._context.gl,t=e.createProgram();e.attachShader(t,this._vShader),e.attachShader(t,this._fShader);for(const r in this._locations){const i=this._locations[r];e.bindAttribLocation(t,i,r)}e.linkProgram(t),this._glName=t,this._initialized=!0}getUniformLocation(e){return this.initialize(),void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this.getUniformLocation(e)}getAttribLocation(e){return this.initialize(),void 0===this._nameToAttribLocation[e]&&(this._nameToAttribLocation[e]=this._context.gl.getAttribLocation(this._glName,e)),this._nameToAttribLocation[e]}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const r=this._nameToUniform1v[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform2iv(e,t){const r=this._nameToUniform2[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform3iv(e,t){const r=this._nameToUniform3[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform4iv(e,t){const r=this._nameToUniform4[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const r=this._nameToUniform1v[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform2f(e,t,r){const i=this._nameToUniform2[e];void 0!==i&&t===i[0]&&r===i[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(e),t,r),void 0===i?this._nameToUniform2[e]=[t,r]:(i[0]=t,i[1]=r))}setUniform2fv(e,t){const r=this._nameToUniform2[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform3f(e,t,r,i){const n=this._nameToUniform3[e];void 0!==n&&t===n[0]&&r===n[1]&&i===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(e),t,r,i),void 0===n?this._nameToUniform3[e]=[t,r,i]:(n[0]=t,n[1]=r,n[2]=i))}setUniform3fv(e,t){const r=this._nameToUniform3[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniform4f(e,t,r,i,n){const o=this._nameToUniform4[e];void 0!==o&&t===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(e),t,r,i,n),void 0===o?this._nameToUniform4[e]=[t,r,i,n]:(o[0]=t,o[1]=r,o[2]=i,o[3]=n))}setUniform4fv(e,t){const r=this._nameToUniform4[e];b(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=p._arrayCopy(t):p._arrayAssign(t,r))}setUniformMatrix3fv(e,t,r=!1){const n=this._nameToUniformMatrix3[e];(function(e,t){return!!Object(i.f)(e)||(9!==e.length?b(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])})(n,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(e),r,t),void 0===n?this._nameToUniformMatrix3[e]=p._arrayCopy(t):p._arrayAssign(t,n))}setUniformMatrix4fv(e,t,r=!1){const n=this._nameToUniformMatrix4[e];(function(e,t){return!!Object(i.f)(e)||(16!==e.length?b(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])})(n,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(e),r,t),void 0===n?this._nameToUniformMatrix4[e]=p._arrayCopy(t):p._arrayAssign(t,n))}assertCompatibleVertexAttributeLocations(e){const t=e.locations===this.locations;return t||console.error("VertexAttributeLocations are incompatible"),t}static _padToThree(e){let t=e.toString();return e<1e3&&(t=("  "+e).slice(-3)),t}_addLineNumbers(e){let t=2;return e.replace(/\n/g,()=>"\n"+p._padToThree(t++)+":")}_loadShader(e){const t=35633===e;let r=t?this._vertexShaderSource:this._fragmentShaderSource,i="";for(const e in this._defines)i+=`#define ${e} ${this._defines[e]}\n`;r=i+r,"webgl2"===this._context.contextVersion&&(r=function(e,t){const r=s(e);if("300 es"===function(e,t="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of e)if("preprocessor"===n.type){const e=i.exec(n.data);if(e){const i=e[1].replace(/\s\s+/g," ");if(i===r)return i;if(i===t)return n.data="#version "+r,t;throw new Error("unknown glsl version: "+i)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let i=null,o=null;const a={},d={};for(let e=0;e<r.length;++e){const s=r[e];switch(s.type){case"keyword":"vertex"===t&&"attribute"===s.data?s.data="in":"varying"===s.data&&(s.data="vertex"===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===s.data&&(i||(i=l(r,a,"fragColor"),f(r,i,"vec4")),s.data=i),"fragment"===t&&"gl_FragData"===s.data){const t=m(r,e+1),i=l(r,a,"fragData");h(r,i,"vec4",t,"mediump"),s.data=i}else"fragment"===t&&"gl_FragDepthEXT"===s.data&&(o||(o=l(r,a,"gl_FragDepth")),s.data=o);break;case"ident":if(n.indexOf(s.data)>=0){if("vertex"===t&&u(r,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in d||(d[s.data]=l(r,a,s.data)),s.data=d[s.data]}}}for(let e=r.length-1;e>=0;--e){const t=r[e];if("preprocessor"===t.type){const i=t.data.match(/\#extension\s+(.*)\:/);if(i&&i[1]&&c.indexOf(i[1].trim())>=0){const t=r[e+1];r.splice(e,t&&"whitespace"===t.type?2:1)}const n=t.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&c.indexOf(n[1].trim())>=0&&(t.data="#if 1");const o=t.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&c.indexOf(o[1].trim())>=0&&(t.data="#if 0")}}return r.map(e=>"eof"!==e.type?e.data:"").join("")}(r,t?"vertex":"fragment"));const o=this._context.gl,a=o.createShader(e);return o.shaderSource(a,r),o.compileShader(a),a}static _arrayCopy(e){const t=[];for(let r=0;r<e.length;++r)t.push(e[r]);return t}static _arrayAssign(e,t){for(let r=0;r<e.length;++r)t[r]=e[r]}}function b(e,t){if(Object(i.f)(e)||e.length!==t.length)return!0;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}let g=0;t.a=p},492:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i,n=r(82),o=r(337),a=r(91),s=r(274),c=r(254),u=r(439),l=r(367);function d(e,t){e.include(l.a),e.vertex.include(u.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(n.a`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(n.a`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function f(e,t){0===t.normalType||1===t.normalType?(e.include(o.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(n.a`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(n.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?n.a`normalize(vPositionWorldCameraRelative);`:n.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(n.a`
      void forwardNormal() {}
    `)}(i=d||(d={})).ModelTransform=class{constructor(){this.worldFromModel_RS=Object(s.a)(),this.worldFromModel_TH=Object(a.e)(),this.worldFromModel_TL=Object(a.e)()}},i.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(a.e)(),this.worldFromView_TL=Object(a.e)(),this.viewFromCameraRelative_RS=Object(s.a)(),this.projFromView=Object(c.b)()}},i.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},i.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(f||(f={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},517:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var i=r(1),n=(r(210),r(254));r(255),r(479);function o(e,t){return Object(i.f)(e)&&(e=[]),e.push(t),e}function a(e,t){if(Object(i.f)(e))return e;const r=e.filter(e=>e!==t);return 0===r.length?null:r}function s(e){return!!Object(i.g)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),Object(n.b)()},518:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(i.a`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}(n||(n={})).bindOutputHighlight=function(e,t,r){e.bindTexture(r.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,r.inverseViewport[0],r.inverseViewport[1])}},519:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e){e.code.add(i.a`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},520:function(e,t,r){"use strict";var i=r(13);class n{constructor(e,t,r,i,n){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this.id=o++,e.instanceCounter.increment(1,this),this._context=e,this._bufferType=t,this._usage=r,this._glName=this._context.gl.createBuffer(),i&&this.setData(i,n)}static createIndex(e,t,r,i){return new n(e,34963,t,r,i)}static createVertex(e,t,r){return new n(e,34962,t,r)}get glName(){return this._glName}get size(){return this._size}get usage(){return this._usage}get bufferType(){return this._bufferType}get indexType(){return this._indexType}get byteSize(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(e,t){if(!e)return;if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{let t=e.byteLength;Object(i.i)(e)&&(t/=2,this._indexType=5123),Object(i.j)(e)&&(t/=4,this._indexType=5125),this._size=t}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this._bufferType,e,this._usage),this._context.bindVAO(r)}setSubData(e,t=0,r=0,n){if(!e)return;(t<0||t>=this._size)&&console.error("offset is out of range!");let o=t,a=r,s=n,c=e.byteLength;Object(i.i)(e)&&(c/=2,o*=2,a*=2,s*=2),Object(i.j)(e)&&(c/=4,o*=4,a*=4,s*=4),void 0===n&&(n=c-1),r>=n&&console.error("end must be bigger than start!"),t+r-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const u=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const l=this._context.gl,d=ArrayBuffer.isView(e)?e.buffer:e;l.bufferSubData(this._bufferType,o,d.slice(a,s)),this._context.bindVAO(u)}}let o=0;t.a=n},521:function(e,t,r){"use strict";var i=r(522);let n=0;t.a=class{constructor(e,t,r,i,o){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this.id=n++,this._initialized=!1,e.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,t)=>e+this._buffers[t].size,this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return;const t=this._context.capabilities.vao;if(t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const e=this._buffers,t=!!this._context.capabilities.vao,r=this._layout,n=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const t in e){const n=e[t];n||console.error("Vertex buffer is uninitialized!");const o=r[t];o||console.error("Vertex element descriptor is empty!"),Object(i.a)(this._context,this._locations,n,o)}n&&(t?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.glName):this._context.bindBuffer(n))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(const r in e){const n=e[r];n||console.error("Vertex buffer is uninitialized!");const o=t[r];Object(i.b)(this._context,this._locations,n,o)}const r=this._indexBuffer;r&&this._context.unbindBuffer(r.bufferType)}}},522:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}));r(7),r(1);function i(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function n(e,t,r,i,n){const o=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t[e.name],i=(n||(0+e.baseInstance?e.baseInstance:0))*e.stride;if(void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`),e.baseInstance&&!e.divisor&&console.error(`Vertex attribute '${e.name}' uses baseInstanceOffset without divisor.`),e.count<=4)o.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),o.enableVertexAttribArray(r),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)o.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)o.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),o.enableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function o(e,t,r,i){const n=e.gl,o=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t[e.name];if(e.count<=4)n.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&o&&o.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(34962)}},523:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e){e.vertex.code.add(i.a`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(i.a`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},524:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(82),n=r(537);function o(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(i.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(i.a`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(n.a,t),r.code.add(i.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},525:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(82);function n(e,t){const r=e.fragment;r.code.add(i.a`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(i.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},526:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(7);var i=r(82);function n(e,t){i.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},537:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r(82),n=r(336);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.a`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function a(e,t){e.include(n.a,t),e.fragment.code.add(i.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(i.a`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(o),e.fragment.code.add(i.a`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},665:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return Xn})),r.d(t,"gltfToEngineResources",(function(){return Jn})),r.d(t,"parseUrl",(function(){return Yn}));var i=r(1),n=r(91),o=r(103),a=r(210),s=r(394),c=r(274),u=r(254),l=r(452),d=r(307),f=r(3);const h=f.a.getLogger("esri.views.3d.support.buffer.math");function m(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[4],c=r[5],u=r[6],l=r[8],d=r[9],f=r[10],m=r[12],p=r[13],b=r[14],g=e.typedBuffer,v=e.typedBufferStride,y=t.typedBuffer,x=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*v,r=e*x,i=y[r],h=y[r+1],O=y[r+2];g[t]=n*i+s*h+l*O+m,g[t+1]=o*i+c*h+d*O+p,g[t+2]=a*i+u*h+f*O+b}}function p(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],u=r[5],l=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,b=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*p,r=e*g,i=b[r],h=b[r+1],v=b[r+2];m[t]=n*i+s*h+l*v,m[t+1]=o*i+c*h+d*v,m[t+2]=a*i+u*h+f*v}}function b(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=r*a[i],n[t+1]=r*a[i+1],n[t+2]=r*a[i+2]}}Object.freeze({__proto__:null,transformMat4:m,transformMat3:p,scale:b,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=a[i]>>r,n[t+1]=a[i+1]>>r,n[t+2]=a[i+2]>>r}}});var g=r(194),v=r(33);class y{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=v.a.before(()=>this.reset()),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.k)(this.tickHandle)),this.items=Object(i.k)(this.items)}get(){return 0===this.itemsPtr&&Object(v.a)(()=>{}),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*x);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,x));e++)this.items.push(this.allocator())}}const x=1024;var O=r(226),_=r(323),T=r(383),w=r(413);class S{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=v.a.before(()=>this.reset())}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(i.k)(this.tickHandle)),this.itemsPtr=0,this.items=Object(i.k)(this.items),this.buffers=Object(i.k)(this.buffers)}get(){0===this.itemsPtr&&Object(v.a)(()=>{});const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=j){return new S(16,T.b,e)}static createVec3f64(e=j){return new S(24,n.c,e)}static createVec4f64(e=j){return new S(32,w.c,e)}static createMat3f64(e=j){return new S(72,c.b,e)}static createMat4f64(e=j){return new S(128,u.d,e)}static createQuatf64(e=j){return new S(32,_.b,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const j=4096,M=(S.createVec2f64(),S.createVec3f64()),A=S.createVec4f64(),C=(S.createMat3f64(),S.createMat4f64());S.createQuatf64();var P=r(81);function B(e){return e?{origin:Object(n.d)(e.origin),vector:Object(n.d)(e.vector)}:{origin:Object(n.e)(),vector:Object(n.e)()}}function E(e,t){const r=N.get();return r.origin=e,r.vector=t,r}function I(e,t,r=B()){return Object(o.h)(r.origin,e),Object(o.h)(r.vector,t),r}function L(e,t){const r=Object(o.g)(M.get(),t,e.origin),i=Object(o.e)(e.vector,r),n=Object(o.e)(e.vector,e.vector),a=Object(P.c)(i/n,0,1),s=Object(o.g)(M.get(),Object(o.b)(M.get(),e.vector,a),r);return Object(o.e)(s,s)}function R(e,t,r,i,n){const{vector:a,origin:s}=e,c=Object(o.g)(M.get(),t,s),u=Object(o.m)(a),l=Object(o.e)(a,c)/u;return Object(o.b)(n,a,Object(P.c)(l,r,i)),Object(o.c)(n,n,e.origin)}function F(e,t,r,i){const n=1e-6,a=e.origin,s=Object(o.c)(M.get(),a,e.vector),c=t.origin,u=Object(o.c)(M.get(),c,t.vector),l=M.get(),d=M.get();if(l[0]=a[0]-c[0],l[1]=a[1]-c[1],l[2]=a[2]-c[2],d[0]=u[0]-c[0],d[1]=u[1]-c[1],d[2]=u[2]-c[2],Math.abs(d[0])<n&&Math.abs(d[1])<n&&Math.abs(d[2])<n)return!1;const f=M.get();if(f[0]=s[0]-a[0],f[1]=s[1]-a[1],f[2]=s[2]-a[2],Math.abs(f[0])<n&&Math.abs(f[1])<n&&Math.abs(f[2])<n)return!1;const h=l[0]*d[0]+l[1]*d[1]+l[2]*d[2],m=d[0]*f[0]+d[1]*f[1]+d[2]*f[2],p=l[0]*f[0]+l[1]*f[1]+l[2]*f[2],b=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],g=(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*b-m*m;if(Math.abs(g)<n)return!1;let v=(h*m-p*b)/g,y=(h+m*v)/b;r&&(v=Object(P.c)(v,0,1),y=Object(P.c)(y,0,1));const x=M.get(),O=M.get();return x[0]=a[0]+v*f[0],x[1]=a[1]+v*f[1],x[2]=a[2]+v*f[2],O[0]=c[0]+y*d[0],O[1]=c[1]+y*d[1],O[2]=c[2]+y*d[2],i.tA=v,i.tB=y,i.pA=x,i.pB=O,i.distance2=Object(o.i)(x,O),!0}const z={tA:0,tB:0,pA:Object(n.e)(),pB:Object(n.e)(),distance2:0},N=new y(()=>({origin:null,vector:null}));Object.freeze({__proto__:null,create:B,wrap:E,copy:function(e,t=B()){return I(e.origin,e.vector,t)},fromValues:I,fromPoints:function(e,t,r=B()){return Object(o.h)(r.origin,e),Object(o.g)(r.vector,t,e),r},distance2:L,distance:function(e,t){return Math.sqrt(L(e,t))},projectPoint:function(e,t,r){return R(e,t,0,1,r)},pointAt:function(e,t,r){return Object(o.c)(r,e.origin,Object(o.b)(r,e.vector,t))},projectPointClamp:R,closestRayDistance2:function(e,t){if(F(e,E(t.origin,t.direction),!1,z)){const{tA:t,pB:r,distance2:i}=z;if(t>=0&&t<=1)return i;if(t<0)return Object(o.i)(e.origin,r);if(t>1)return Object(o.i)(Object(o.c)(M.get(),e.origin,e.vector),r)}return null},closestLineSegmentPoint:function(e,t,r){return!!F(e,t,!0,z)&&(Object(o.h)(r,z.pA),!0)},closestLineSegmentDistance2:function(e,t){return F(e,t,!0,z)?z.distance2:null}});function D(e){return e?{p0:Object(n.d)(e.p0),p1:Object(n.d)(e.p1),p2:Object(n.d)(e.p2)}:{p0:Object(n.e)(),p1:Object(n.e)(),p2:Object(n.e)()}}function U(e,t,r,i=D()){return Object(o.h)(i.p0,e),Object(o.h)(i.p1,t),Object(o.h)(i.p2,r),i}function V(e,t,r){const i=Object(O.i)(e,t),n=Object(O.i)(t,r),o=Object(O.i)(r,e),a=(i+n+o)/2,s=a*(a-i)*(a-n)*(a-o);return s<=0?0:Math.sqrt(s)}function k(e,t,r){return Object(o.g)(q,t,e),Object(o.g)(W,r,e),Object(o.m)(Object(o.d)(q,q,W))/2}const G=new y(B),H=new y(()=>({p0:null,p1:null,p2:null})),q=Object(n.e)(),W=Object(n.e)();Object.freeze({__proto__:null,create:D,wrap:function(e,t,r){const i=H.get();return i.p0=e,i.p1=t,i.p2=r,i},copy:function(e,t=D()){return U(e.p0,e.p1,e.p2,t)},fromValues:U,distance2:function(e,t){const r=e.p0,i=e.p1,n=e.p2,a=Object(o.g)(M.get(),i,r),s=Object(o.g)(M.get(),n,i),c=Object(o.g)(M.get(),r,n),u=Object(o.g)(M.get(),t,r),l=Object(o.g)(M.get(),t,i),d=Object(o.g)(M.get(),t,n),f=Object(o.d)(a,a,c),h=Object(o.e)(Object(o.d)(M.get(),a,f),u),m=Object(o.e)(Object(o.d)(M.get(),s,f),l),p=Object(o.e)(Object(o.d)(M.get(),c,f),d);if(h>0&&m>0&&p>0){const e=Object(o.e)(f,u);return e*e/Object(o.e)(f,f)}const b=L(I(r,a,G.get()),t),g=L(I(i,s,G.get()),t),v=L(I(n,c,G.get()),t);return Math.min(b,g,v)},intersectRay:function(e,t,r){const i=1e-5,{direction:n,origin:a}=t,{p0:s,p1:c,p2:u}=e,l=c[0]-s[0],d=c[1]-s[1],f=c[2]-s[2],h=u[0]-s[0],m=u[1]-s[1],p=u[2]-s[2],b=n[1]*p-m*n[2],g=n[2]*h-p*n[0],v=n[0]*m-h*n[1],y=l*b+d*g+f*v;if(y>-i&&y<i)return!1;const x=1/y,O=a[0]-s[0],_=a[1]-s[1],T=a[2]-s[2],w=x*(O*b+_*g+T*v);if(w<0||w>1)return!1;const S=_*f-d*T,j=T*l-f*O,M=O*d-l*_,A=x*(n[0]*S+n[1]*j+n[2]*M);return!(A<0||w+A>1)&&(r&&(Object(o.b)(r,n,x*(h*S+m*j+p*M)),Object(o.c)(r,a,r)),!0)},areaPoints2d:V,area2d:function(e){return V(e.p0,e.p1,e.p2)},areaPoints3d:k});let $=1,X=null;const Y=new Uint32Array([0]);function J(e){if(1===e)return Y;if(e>$||null==X){for(;e>$;)$*=2;X=new Uint32Array($);for(let e=0;e<$;e++)X[e]=e}return new Uint32Array(X.buffer,0,e)}let Z=0;const Q=Object(n.e)(),K=Object(n.e)(),ee=Object(n.e)(),te=Object(n.e)();var re=r(255);class ie{constructor(e,t=ie.DefaultIndices,r="triangle"){this.initialize(e,t,r)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const e=Object(re.c)(this._indices);return null==e?0:e.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(e,t=ie.DefaultIndices,r="triangle"){const i={};for(const t in e){const{data:r,size:n}=e[t];i[t]={data:r,size:n,offsetIdx:0,strideIdx:n}}if(t===ie.DefaultIndices){const e=J(function(e){const t=Object(re.c)(e);return null==t?0:t.data.length/t.size}(i));t={};for(const r in i)t[r]=e}this._id=Z++,this._vertexAttributes=i,this._indices=t,this._primitiveType=r}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(e){return this._indices[e]}getAttribute(e){return this._vertexAttributes[e]}estimateGpuMemoryUsage(){let e=0;if(this._indices[re.a.POSITION]){const t=3;e+=this._indices[re.a.POSITION].length*t*4}if(this._indices[re.a.NORMAL]){const t=3;e+=this._indices[re.a.NORMAL].length*t*4}if(this._indices[re.a.UV0]){const t=2;e+=this._indices[re.a.UV0].length*t*4}if(this._indices[re.a.COLOR]){const t=1;e+=this._indices[re.a.COLOR].length*t*4}return e}}ie.DefaultIndices={};class ne{constructor(){this._count=0}gen(e){return null==e&&(e="a"),e+"_"+this._count++}}var oe=r(17);class ae{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this._position=i,this.center=Object(n.e)(),Object(re.b)(e.length>=1),Object(re.b)(r.length%this._numIndexPerPrimitive==0),Object(re.b)(r.length>=e.length*this._numIndexPerPrimitive),Object(re.b)(3===this._position.size||4===this._position.size);const{data:a,offsetIdx:s,strideIdx:c}=this._position;let u=0;const l=e.length;let d=s+c*r[this._numIndexPerPrimitive*e[u]];for(ae.tmpIndices.clear(),ae.tmpIndices.push(d),this.bbMin=Object(n.g)(a[d],a[d+1],a[d+2]),this.bbMax=Object(n.d)(this.bbMin);u<l;++u){const t=this._numIndexPerPrimitive*e[u];for(let e=0;e<this._numIndexPerPrimitive;++e){d=s+c*r[t+e],ae.tmpIndices.push(d);let i=a[d];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=a[d+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=a[d+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}Object(o.f)(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let f=this.bsRadius*this.bsRadius;for(u=0;u<ae.tmpIndices.length;++u){d=ae.tmpIndices.data[u];const e=a[d]-this.center[0],t=a[d+1]-this.center[1],r=a[d+2]-this.center[2],i=e*e+t*t+r*r;if(i<=f)continue;const n=Math.sqrt(i),o=.5*(n-this.bsRadius);this.bsRadius=this.bsRadius+o,f=this.bsRadius*this.bsRadius;const s=o/n;this.center[0]+=e*s,this.center[1]+=t*s,this.center[2]+=r*s}ae.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(Object(o.i)(this.bbMin,this.bbMax)>1){const e=Object(o.f)(Object(n.e)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:a,offsetIdx:s,strideIdx:c}=this._position;for(let n=0;n<t;++n){let t=0;const o=this._numIndexPerPrimitive*this.primitiveIndices[n];let u=s+c*this.indices[o],l=a[u],d=a[u+1],f=a[u+2];for(let e=1;e<this._numIndexPerPrimitive;++e){u=s+c*this.indices[o+e];const t=a[u],r=a[u+1],i=a[u+2];t<l&&(l=t),r<d&&(d=r),i<f&&(f=i)}l<e[0]&&(t|=1),d<e[1]&&(t|=2),f<e[2]&&(t|=4),r[n]=t,++i[t]}let u=0;for(let e=0;e<8;++e)i[e]>0&&++u;if(u<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==l[e]&&(this._children[e]=new ae(l[e],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}(ae||(ae={})).tmpIndices=new oe.a({deallocator:null});var se=ae;class ce{constructor(e,t){this._boundingInfo=null,this._id=ce.__idGen.gen(t),this._data=e}get id(){return this._id}get data(){return this._data}getIndices(e){return this.data.getIndices(e)}get indexCount(){return this.data.indexCount}getAttribute(e){return this.data.getAttribute(e)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return Object(i.f)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.getIndices(re.a.POSITION);return function(e,t,r){if(!e)return!1;const{strideIdx:i,offsetIdx:n,data:a}=e;Object(o.r)(r,0,0,0),Object(o.r)(te,0,0,0);let s=0,c=0;for(let e=0;e<t.length-2;e+=3){const u=t[e+0]*i+n,l=t[e+1]*i+n,d=t[e+2]*i+n;Object(o.r)(Q,a[u+0],a[u+1],a[u+2]),Object(o.r)(K,a[l+0],a[l+1],a[l+2]),Object(o.r)(ee,a[d+0],a[d+1],a[d+2]);const f=k(Q,K,ee);f?(Object(o.c)(Q,Q,K),Object(o.c)(Q,Q,ee),Object(o.b)(Q,Q,1/3*f),Object(o.c)(r,r,Q),s+=f):(Object(o.c)(te,te,Q),Object(o.c)(te,te,K),Object(o.c)(te,te,ee),c+=3)}return!(0===c&&0===s||(0!==s?(Object(o.b)(r,r,1/s),0):0===c||(Object(o.b)(r,te,1/c),0)))}(this.getAttribute(re.a.POSITION),t,e)}computeAttachmentOriginPoints(e){const t=this.getIndices(re.a.POSITION);return function(e,t,r){if(!e||!t)return!1;const{strideIdx:i,offsetIdx:n,data:a}=e;Object(o.r)(r,0,0,0);let s=-1,c=0;for(let e=0;e<t.length;e++){const o=t[e]*i+n;s!==o&&(r[0]+=a[o+0],r[1]+=a[o+1],r[2]+=a[o+2],c++),s=o}return c>1&&Object(o.b)(r,r,1/c),c>0}(this.getAttribute(re.a.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let e=this.data.getIndices(re.a.POSITION);const t=this.data.getAttribute(re.a.POSITION),r="triangle"===this.data.primitiveType?3:1;if(0===e.length){e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t}const i=e.length;Object(re.b)(i%r==0,"Indexing error: "+i.toFixed(0)+" not divisible by "+r.toFixed(0));const n=J(i/r);return new se(n,r,e,t)}}ce.__idGen=new ne;var ue=ce,le=r(382),de=r(244),fe=r(386),he=r(387),me=(r(7),r(317));function pe(e,t){return Object(o.e)(e,t)/Object(o.m)(e)}function be(e,t){const r=Object(o.e)(e,t)/(Object(o.m)(e)*Object(o.m)(t));return-Object(P.a)(r)}const ge=Object(n.e)(),ve=Object(n.e)();Object.freeze({__proto__:null,projectPoint:function(e,t,r){const i=Object(o.e)(e,t)/Object(o.e)(e,e);return Object(o.b)(r,e,i)},projectPointSignedLength:pe,angle:be,angleAroundAxis:function(e,t,r){Object(o.o)(ge,e),Object(o.o)(ve,t);const i=Object(o.e)(ge,ve),n=Object(P.a)(i),a=Object(o.d)(ge,ge,ve);return Object(o.e)(a,r)<0?2*Math.PI-n:n}});function ye(e=$e){return[e[0],e[1],e[2],e[3]]}function xe(e,t,r,i){return _e(e,t,r,i,A.get())}function Oe(e,t=ye()){return _e(e[0],e[1],e[2],e[3],t)}function _e(e,t,r,i,n=ye()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}function Te(e,t,r=ye()){Object(o.h)(r,t);const i=Object(o.e)(t,t);return Math.abs(i-1)>1e-5&&i>1e-12&&Object(o.b)(r,r,1/Math.sqrt(i)),Ee(r,e,r),r}function we(e,t,r,i=ye()){return Ie(Object(o.g)(M.get(),e,t),Object(o.g)(M.get(),r,t),e,i)}function Se(e,t,r,i,n){if(e.count<3)return!1;e.getVec(r,Me);let a=i,s=!1;for(;a<e.count-1&&!s;)e.getVec(a,Ae),a++,s=!Object(o.n)(Me,Ae);if(!s)return!1;for(a=Math.max(a,n),s=!1;a<e.count&&!s;)e.getVec(a,Ce),a++,Object(o.g)(Pe,Me,Ae),Object(o.o)(Pe,Pe),Object(o.g)(Be,Ae,Ce),Object(o.o)(Be,Be),s=!Object(o.n)(Me,Ce)&&!Object(o.n)(Ae,Ce)&&Math.abs(Object(o.e)(Pe,Be))<je;return s?(we(Me,Ae,Ce,t),!0):(0!==r||1!==i||2!==n)&&Se(e,t,0,1,2)}const je=.99619469809,Me=Object(n.e)(),Ae=Object(n.e)(),Ce=Object(n.e)(),Pe=Object(n.e)(),Be=Object(n.e)();function Ee(e,t,r){return e!==r&&Oe(e,r),r[3]=-Object(o.e)(r,t),r}function Ie(e,t,r,i=ye()){return Te(r,Object(o.d)(M.get(),t,e),i)}function Le(e,t,r){return!!Object(i.g)(t)&&qe(e,t.origin,t.direction,!0,!1,r)}function Re(e,t,r){return qe(e,t.origin,t.vector,!1,!1,r)}function Fe(e,t,r){return qe(e,t.origin,t.vector,!1,!0,r)}function ze(e,t){const{center:r,radius:i}=t;return He(e,r)-i>=0}function Ne(e,t){return He(e,t)>=0}function De(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=t[4],s=t[5];return e[0]*(e[0]>0?r:o)+e[1]*(e[1]>0?i:a)+e[2]*(e[2]>0?n:s)+e[3]>=0}function Ue(e,t){const r=Object(o.e)(e,t.ray.direction),i=-He(e,t.ray.origin);if(i<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return i>0;if((i<0||r<0)&&!(i<0&&r<0))return!0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function Ve(e,t){const r=Object(o.e)(e,t.ray.direction),i=-He(e,t.ray.origin);if(r>-1e-6&&r<1e-6)return i>0;const n=i/r;return r>0?n<t.c1&&(t.c1=n):n>t.c0&&(t.c0=n),t.c0<=t.c1}function ke(e,t,r){const i=Object(o.b)(M.get(),e,-e[3]),n=Ge(e,Object(o.g)(M.get(),t,i),M.get());return Object(o.c)(r,n,i),r}function Ge(e,t,r){const i=Object(o.b)(M.get(),e,Object(o.e)(e,t));return Object(o.g)(r,t,i),r}function He(e,t){return Object(o.e)(e,t)+e[3]}function qe(e,t,r,i,n,a){const s=Object(o.e)(e,r);if(0===s)return!1;let c=-(Object(o.e)(e,t)+e[3])/s;return n&&(c=i?Math.max(0,c):Object(P.c)(c,0,1)),!(c<0||!i&&c>1||(Object(o.c)(a,t,Object(o.b)(a,r,c)),0))}function We(e){return e}const $e=[0,0,1,0];Object.freeze({__proto__:null,create:ye,wrap:xe,copy:Oe,fromValues:_e,fromNormalAndOffset:function(e,t,r=ye()){return Object(o.h)(r,e),r[3]=t,r},fromPositionAndNormal:Te,fromPoints:we,fromManyPoints:function(e,t){return Se(e,t,0,1,2)},fromManyPointsSampleAt:Se,setOffsetFromPoint:Ee,negate:function(e,t){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},fromVectorsAndPoint:Ie,intersectRay:Le,intersectLineSegment:Re,intersectLineSegmentClamp:Fe,isSphereFullyInside:ze,isSphereFullyOutside:function(e,t){const{center:r,radius:i}=t;return He(e,r)+i<0},isPointInside:Ne,isPointOutside:function(e,t){return He(e,t)<0},isAABBFullyInside:De,clip:Ue,clipInfinite:Ve,projectPoint:ke,projectVector:Ge,distance:function(e,t){return Math.abs(He(e,t))},signedDistance:He,normal:We,UP:$e});var Xe=r(62);function Ye(e){return e?{origin:Object(n.d)(e.origin),direction:Object(n.d)(e.direction)}:{origin:Object(n.e)(),direction:Object(n.e)()}}function Je(e,t=Ye()){return Ze(e.origin,e.direction,t)}function Ze(e,t,r=Ye()){return Object(o.h)(r.origin,e),Object(o.h)(r.direction,t),r}function Qe(e,t,r=Ye()){const n=Object(Xe.a)(Object(O.c)(M.get(),t));if(n[2]=0,!e.unprojectFromRenderScreen(n,r.origin))return null;const a=Object(Xe.a)(Object(O.c)(M.get(),t));a[2]=1;const s=e.unprojectFromRenderScreen(a,M.get());return Object(i.f)(s)?null:(Object(o.g)(r.direction,s,r.origin),r)}function Ke(e,t,r=Ye()){return et(e,e.screenToRender(t,Object(Xe.a)(M.get())),r)}function et(e,t,r=Ye()){Object(o.h)(r.origin,e.eye);const n=Object(o.r)(M.get(),t[0],t[1],1),a=e.unprojectFromRenderScreen(n,M.get());return Object(i.f)(a)?null:(Object(o.g)(r.direction,a,r.origin),r)}function tt(e,t){const r=Object(o.d)(M.get(),Object(o.o)(M.get(),e.direction),Object(o.g)(M.get(),t,e.origin));return Object(o.e)(r,r)}function rt(e,t,r){const i=Object(o.e)(e.direction,Object(o.g)(r,t,e.origin));return Object(o.c)(r,e.origin,Object(o.b)(r,e.direction,i)),r}function it(){return{origin:null,direction:null}}const nt=new y(it);Object.freeze({__proto__:null,create:Ye,wrap:function(e,t){const r=nt.get();return r.origin=e,r.direction=t,r},copy:Je,fromPoints:function(e,t,r=Ye()){return Object(o.h)(r.origin,e),Object(o.g)(r.direction,t,e),r},fromValues:Ze,fromScreen:function(e,t,r=Ye()){return Qe(e,e.screenToRender(t,Object(Xe.a)(M.get())),r)},fromRender:Qe,fromScreenAtEye:Ke,fromRenderAtEye:et,distance2:tt,distance:function(e,t){return Math.sqrt(tt(e,t))},closestPoint:rt,createWrapper:it});const ot=f.a.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function at(e=St){return{plane:ye(e.plane),origin:Object(n.d)(e.origin),basis1:Object(n.d)(e.basis1),basis2:Object(n.d)(e.basis2)}}function st(e,t=at()){return ct(e.origin,e.basis1,e.basis2,t)}function ct(e,t,r,i=at()){return Object(o.h)(i.origin,e),Object(o.h)(i.basis1,t),Object(o.h)(i.basis2,r),ut(i),function(e,t){Math.abs(Object(o.e)(e.basis1,e.basis2)/(Object(o.m)(e.basis1)*Object(o.m)(e.basis2)))>1e-6&&ot.warn(t,"Provided basis vectors are not perpendicular"),Math.abs(Object(o.e)(e.basis1,xt(e)))>1e-6&&ot.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(o.e)(xt(e),e.origin)-e.plane[3])>1e-6&&ot.warn(t,"Plane offset is not consistent with plane origin")}(i,"fromValues()"),i}function ut(e){Ie(e.basis2,e.basis1,e.origin,e.plane)}function lt(e,t,r){e!==r&&st(e,r);const i=Object(o.b)(M.get(),xt(e),t);return Object(o.c)(r.origin,r.origin,i),r.plane[3]-=t,r}function dt(e,t=at()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return Object(o.r)(t.origin,e[0]+r,e[1]+i,0),Object(o.r)(t.basis1,r,0,0),Object(o.r)(t.basis2,0,i,0),_e(0,0,1,0,t.plane),t}function ft(e,t,r){return!!Le(e.plane,t,r)&&Ot(e,r)}function ht(e,t,r){const i=jt.get();wt(e,t,i,jt.get());let n=Number.POSITIVE_INFINITY;for(const a of Pt){const s=Tt(e,a,Mt.get()),c=M.get();if(Re(i,s,c)){const e=Object(me.c)(M.get(),t.origin,c),i=Math.abs(Object(P.a)(Object(o.e)(t.direction,e)));i<n&&(n=i,Object(o.h)(r,c))}}return n===Number.POSITIVE_INFINITY?mt(e,t,r):r}function mt(e,t,r){if(ft(e,t,r))return r;const i=jt.get(),n=jt.get();wt(e,t,i,n);let a=Number.POSITIVE_INFINITY;for(const s of Pt){const c=Tt(e,s,Mt.get()),u=M.get();if(Fe(i,c,u)){const e=tt(t,u);if(!Ne(n,u))continue;e<a&&(a=e,Object(o.h)(r,u))}}return gt(e,t.origin)<a&&pt(e,t.origin,r),r}function pt(e,t,r){const i=ke(e.plane,t,M.get()),n=R(_t(e,e.basis1),i,-1,1,M.get()),a=R(_t(e,e.basis2),i,-1,1,M.get());return Object(o.g)(r,Object(o.c)(M.get(),n,a),e.origin),r}function bt(e,t,r){const{origin:i,basis1:n,basis2:a}=e,s=Object(o.g)(M.get(),t,i),c=pe(n,s),u=pe(a,s),l=pe(xt(e),s);return Object(o.r)(r,c,u,l)}function gt(e,t){const r=bt(e,t,M.get()),{basis1:i,basis2:n}=e,a=Object(o.m)(i),s=Object(o.m)(n),c=Math.max(Math.abs(r[0])-a,0),u=Math.max(Math.abs(r[1])-s,0),l=r[2];return c*c+u*u+l*l}function vt(e,t){return Ne(e.plane,t)&&Ot(e,t)}function yt(e,t){const r=-e.plane[3];return pe(xt(e),t)-r}function xt(e){return e.plane}function Ot(e,t){const r=Object(o.g)(M.get(),t,e.origin),i=Object(o.p)(e.basis1),n=Object(o.p)(e.basis2),a=Object(o.e)(e.basis1,r),s=Object(o.e)(e.basis2,r);return-a-i<0&&a-i<0&&-s-n<0&&s-n<0}function _t(e,t){const r=Mt.get();return Object(o.h)(r.origin,e.origin),Object(o.h)(r.vector,t),r}function Tt(e,t,r){const{basis1:i,basis2:n,origin:a}=e,s=Object(o.b)(M.get(),i,t.origin[0]),c=Object(o.b)(M.get(),n,t.origin[1]);Object(o.c)(r.origin,s,c),Object(o.c)(r.origin,r.origin,a);const u=Object(o.b)(M.get(),i,t.direction[0]),l=Object(o.b)(M.get(),n,t.direction[1]);return Object(o.b)(r.vector,Object(o.c)(u,u,l),2),r}function wt(e,t,r,i){const n=xt(e);Ie(n,t.direction,t.origin,r),Ie(r,n,t.origin,i)}const St={plane:ye(),origin:Object(n.g)(0,0,0),basis1:Object(n.g)(1,0,0),basis2:Object(n.g)(0,1,0)},jt=new y(ye),Mt=new y(B),At=Object(n.e)(),Ct=new y(()=>({origin:null,basis1:null,basis2:null,plane:null})),Pt=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Bt=Object(u.b)(),Et=Object(u.b)();Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=ye(),this.origin=Object(n.e)(),this.basis1=Object(n.e)(),this.basis2=Object(n.e)()}},create:at,wrap:function(e,t,r){const i=Ct.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=xe(0,0,0,0),ut(i),i},copy:st,fromValues:ct,updateUnboundedPlane:ut,elevate:lt,setExtent:function(e,t,r){return dt(t,r),lt(r,yt(e,e.origin),r),r},fromAABoundingRect:dt,intersectRay:ft,intersectRayClosestSilhouette:function(e,t,r){if(ft(e,t,r))return r;const i=ht(e,t,M.get());return Object(o.c)(r,t.origin,Object(o.b)(M.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:ht,closestPoint:mt,projectPoint:pt,projectPointLocal:bt,distance2:gt,distance:function(e,t){return Math.sqrt(gt(e,t))},distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of Pt){const n=L(Tt(e,i,Mt.get()),t);n>r&&(r=n)}return Math.sqrt(r)},extrusionContainsPoint:vt,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case 0:Object(o.h)(r,e.basis1),Object(o.o)(r,r);break;case 1:Object(o.h)(r,e.basis2),Object(o.o)(r,r);break;case 2:Object(o.h)(r,xt(e))}return r}(e,r,i)},altitudeAt:yt,setAltitudeAt:function(e,t,r,i){const n=yt(e,t),a=Object(o.b)(At,xt(e),r-n);return Object(o.c)(i,t,a),i},equals:function(e,t){return Object(o.n)(e.basis1,t.basis1)&&Object(o.n)(e.basis2,t.basis2)&&Object(o.n)(e.origin,t.origin)},transform:function(e,t,r){return e!==r&&st(e,r),Object(a.a)(Bt,t),Object(a.b)(Bt,Bt),Object(o.j)(r.basis1,e.basis1,Bt),Object(o.j)(r.basis2,e.basis2,Bt),Object(o.j)(r.plane,e.plane,Bt),Object(o.j)(r.origin,e.origin,t),Ee(r.plane,r.origin,r.plane),r},rotate:function(e,t,r,i){return e!==i&&st(e,i),Object(a.g)(Et,Object(a.d)(Et),t,r),Object(o.j)(i.basis1,e.basis1,Et),Object(o.j)(i.basis2,e.basis2,Et),ut(i),i},normal:xt,UP:St});const It=f.a.getLogger("esri.views.3d.support.geometryUtils.sphere");function Lt(e){return e?{radius:e.radius,center:Object(n.d)(e.center)}:{radius:1,center:Object(n.e)()}}function Rt(e,t=Lt()){return Ft(e.radius,e.center,t)}function Ft(e,t,r=Lt()){return Object(o.h)(r.center,t),r.radius=e,r}function zt(e,t,r){if(Object(i.f)(t))return!1;const n=Object(o.g)(M.get(),t.origin,e.center),a=Object(o.e)(t.direction,t.direction),s=2*Object(o.e)(t.direction,n),c=s*s-4*a*(Object(o.e)(n,n)-e.radius*e.radius);if(c<0)return!1;const u=Math.sqrt(c);let l=(-s-u)/(2*a);const d=(-s+u)/(2*a);return(l<0||d<l&&d>0)&&(l=d),!(l<0||(r&&Object(o.c)(r,t.origin,Object(o.b)(M.get(),t.direction,l)),0))}function Nt(e,t,r){const i=M.get(),n=C.get();Object(o.d)(i,t.origin,t.direction),Object(o.d)(r,i,t.origin),Object(o.b)(r,r,1/Object(o.m)(r)*e.radius);const s=Ut(e,t.origin),c=be(t.origin,r);return Object(a.d)(n),Object(a.g)(n,n,c+s,i),Object(o.j)(r,r,n),r}function Dt(e,t,r){const i=Object(o.g)(M.get(),t,e.center),n=Object(o.b)(M.get(),i,e.radius/Object(o.m)(i));return Object(o.c)(r,n,e.center)}function Ut(e,t){const r=Object(o.g)(M.get(),t,e.center),i=Object(o.m)(r),n=e.radius+Math.abs(e.radius-i);return Object(P.a)(e.radius/n)}const Vt=Object(n.e)();function kt(e,t,r,i){const n=Object(o.g)(Vt,t,e.center);switch(r){case 0:{const e=Object(me.a)(n,Vt)[2];return Object(o.r)(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=Object(me.a)(n,Vt),t=e[1],r=e[2],a=Math.sin(t);return Object(o.r)(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return Object(o.o)(i,n);default:return}}function Gt(e,t){const r=Object(o.g)($t,t,e.center);return Object(o.m)(r)-e.radius}const Ht=new y(()=>({center:null,radius:0})),qt=Ye(),Wt=Object(n.e)(),$t=Object(n.e)();Object.freeze(Wt);Object.freeze({__proto__:null,create:Lt,wrap:function(e,t){const r=Ht.get();return r.radius=e,r.center=t||Wt,r},copy:Rt,fromValues:Ft,elevate:function(e,t,r){return e!==r&&Object(o.h)(r.center,e.center),r.radius=e.radius+t,r},setExtent:function(e,t,r){return It.error("sphere.setExtent is not yet supported"),e===r?r:Rt(e,r)},intersectRay:zt,intersectScreen:function(e,t,r,i){return zt(e,Ke(t,r,qt),i)},intersectsRay:function(e,t){return zt(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(zt(e,t,r))return r;const i=Nt(e,t,M.get());return Object(o.c)(r,t.origin,Object(o.b)(M.get(),t.direction,Object(o.l)(t.origin,i)/Object(o.m)(t.direction))),r},closestPointOnSilhouette:Nt,closestPoint:function(e,t,r){return zt(e,t,r)?r:(rt(t,e.center,r),Dt(e,r,r))},projectPoint:Dt,distanceToSilhouette:function(e,t){const r=Object(o.g)(M.get(),t,e.center),i=Object(o.p)(r),n=e.radius*e.radius;return Math.sqrt(Math.abs(i-n))},angleToSilhouette:Ut,axisAt:kt,altitudeAt:Gt,setAltitudeAt:function(e,t,r,i){const n=Gt(e,t),a=kt(e,t,2,$t),s=Object(o.b)($t,a,r-n);return Object(o.c)(i,t,s),i}});function Xt(e=Jt){return[e[0],e[1],e[2],e[3]]}function Yt(e,t,r,i,n=Xt()){return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n}const Jt=[0,0,1,0];Object.freeze({__proto__:null,create:Xt,wrap:function(e,t,r,i){return Yt(e,t,r,i,A.get())},wrapAxisAngle:function(e,t){return Yt(e[0],e[1],e[2],t,A.get())},copy:function(e,t=Xt()){return Yt(e[0],e[1],e[2],e[3],t)},fromValues:Yt,fromAxisAndAngle:function(e,t,r=Xt()){return Object(o.h)(r,e),r[3]=t,r},fromPoints:function(e,t,r=Xt()){return Object(o.d)(r,e,t),Object(o.o)(r,r),r[3]=be(e,t),r},axis:function(e){return e},UP:Jt});function Zt(e){return e?{ray:Ye(e.ray),c0:e.c0,c1:e.c1}:{ray:Ye(),c0:0,c1:Number.MAX_VALUE}}function Qt(e,t,r,i=Zt()){return Je(e,i.ray),i.c0=t,i.c1=r,i}function Kt(e,t=Zt()){return Je(e,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function er(e,t,r=Zt()){const i=Object(o.m)(e.vector);return Ze(e.origin,t,r.ray),r.c0=0,r.c1=i,r}function tr(e,t,r){return Object(o.c)(r,e.ray.origin,Object(o.b)(r,e.ray.direction,t))}const rr=new y(()=>({c0:0,c1:0,ray:null}));Object.freeze({__proto__:null,create:Zt,wrap:function(e,t,r){const i=rr.get();return i.ray=e,i.c0=t,i.c1=r,i},copy:function(e,t=Zt()){return Qt(e.ray,e.c0,e.c1,t)},fromValues:Qt,fromRay:Kt,fromLineSegment:function(e,t=Zt()){return er(e,Object(o.o)(M.get(),e.vector),t)},fromLineSegmentAndDirection:er,getStart:function(e,t){return tr(e,e.c0,t)},getEnd:function(e,t){return tr(e,e.c1,t)},getAt:tr});function ir(e){if(e){const{planes:t,points:r}=e;return{planes:[ye(t[0]),ye(t[1]),ye(t[2]),ye(t[3]),ye(t[4]),ye(t[5])],points:[Object(n.d)(r[0]),Object(n.d)(r[1]),Object(n.d)(r[2]),Object(n.d)(r[3]),Object(n.d)(r[4]),Object(n.d)(r[5]),Object(n.d)(r[6]),Object(n.d)(r[7])]}}return{planes:[ye(),ye(),ye(),ye(),ye(),ye()],points:[Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)(),Object(n.e)()]}}function nr(e,t,r=ir()){for(let t=0;t<6;t++)Oe(e[t],r.planes[t]);for(let e=0;e<8;e++)Object(o.h)(r.points[e],t[e]);return r}function or(e){const{planes:t,points:r}=e;we(r[4],r[0],r[3],t[0]),we(r[1],r[5],r[6],t[1]),we(r[4],r[5],r[1],t[2]),we(r[3],r[2],r[6],t[3]),we(r[0],r[1],r[2],t[4]),we(r[5],r[4],r[7],t[5])}function ar(e,t){for(let r=0;r<6;r++)if(!Ue(e[r],t))return!1;return!0}const sr=[Object(w.b)(-1,-1,-1,1),Object(w.b)(1,-1,-1,1),Object(w.b)(1,1,-1,1),Object(w.b)(-1,1,-1,1),Object(w.b)(-1,-1,1,1),Object(w.b)(1,-1,1,1),Object(w.b)(1,1,1,1),Object(w.b)(-1,1,1,1)],cr=new y(Zt);Object.freeze({__proto__:null,create:ir,copy:function(e,t=ir()){return nr(e.planes,e.points,t)},fromValues:nr,fromMatrix:function(e,t,r=ir()){const{points:i}=r,n=Object(a.f)(C.get(),t,e);Object(a.a)(n,n);for(let e=0;e<8;++e){const t=Object(de.l)(A.get(),sr[e],n);Object(o.r)(i[e],t[0]/t[3],t[1]/t[3],t[2]/t[3])}return or(r),r},recomputePlanes:or,intersectsSphere:function(e,t){for(let r=0;r<6;r++)if(ze(e[r],t))return!1;return!0},intersectsRay:function(e,t){return ar(e,Kt(t,cr.get()))},intersectClipRay:function(e,t){for(let r=0;r<6;r++){if(!Ve(e[r],t))return!1}return!0},intersectsLineSegment:function(e,t,r){return ar(e,er(t,r,cr.get()))},intersectsPoint:function(e,t){for(let r=0;r<6;r++)if(He(e[r],t)>0)return!1;return!0},intersectsAABB:function(e,t){for(let r=0;r<6;r++)if(De(e[r],t))return!1;return!0},planePointIndices:{bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]}});var ur=r(22);class lr{acquire(e,t,r,i,n,o){this.id=lr._idGen.gen(e&&e.id),this.geometry=e,this.material=t,this.transformation=r,this.instanceParameters=i,this.origin=n,this.shaderTransformation=o}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(e){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,e):this.geometry.computeAttachmentOrigin(e))&&(Object(o.j)(e,e,this.getStaticTransformation()),!0)}}lr._idGen=new ne,lr.pool=new ur.a(lr);var dr=lr;const fr=new ne;function hr(e){const t=0===e?"highlight":"occludee";return{id:fr.gen(t),channel:e}}var mr=r(517);class pr{constructor(e={}){this._objectTransformation=Object(u.b)(),this._bvObjectSpace=new gr,this._bvWorldSpace=new gr,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.id=pr._idGen.gen(e.idHint),this.castShadow=null==e.castShadow||e.castShadow,this.metadata=e.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new br),this.objectTransformation=Object(u.b)(),this._initializeGeometryRecords(e.geometries,e.materials,e.transformations,e.origins)}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get objectTransformation(){return this._objectTransformation}set objectTransformation(e){Object(a.c)(this._objectTransformation,e),this._invalidateBoundingVolume(),this._notifyDirty("objTransformation")}dispose(){for(const e of this._geometryRecords)dr.pool.release(e);this._geometryRecords=null,this._geometries=null}_initializeGeometryRecords(e,t,r,i){if(!Array.isArray(e))return this._geometryRecords=[],void(this._geometries=[]);Object(re.b)(t.length===e.length,"Object3D: materials don't match geometries"),Object(re.b)(r.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords=new Array(e.length),this._geometries=e.slice();for(let n=0;n<e.length;n++){const o={highlights:null,occludees:null,visible:!0};this._geometryRecords[n]=dr.pool.acquire(e[n],t[n],Object(u.c)(r[n]),o,i&&i[n])}this._hasVolatileTransformation=!1}get parentLayer(){return this._parentLayer}set parentLayer(e){Object(re.b)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}getNumGeometryRecords(){return this._geometryRecords.length}getGeometryRecord(e){return Object(re.b)(e>=0&&e<this._geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range"),this._geometryRecords[e]}addGeometry(e,t,r,i,n,o){r=r||u.a,this._geometries.push(e);const a=dr.pool.acquire(e,t,r,i||{highlights:null,occludees:null,visible:!0},n,o);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._geometryRecords.some(e=>!!e.shaderTransformation),this._notifyDirty("objGeometryAdded",a),this._invalidateBoundingVolume(),a}removeGeometry(e){const t=this._geometryRecords.splice(e,1)[0];return dr.pool.release(t),this._hasVolatileTransformation=this._geometryRecords.some(e=>!!e.shaderTransformation),this._geometries.splice(e,1),this._notifyDirty("objGeometryRemoved",t),this._invalidateBoundingVolume(),t}removeAllGeometries(){for(;this.getNumGeometryRecords()>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._notifyDirty("vertexAttrsUpdated",this._geometryRecords[e]),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(e){this._visible=e;for(const e of this._geometryRecords)e.instanceParameters.visible=this._visible;this._notifyDirty("visibilityChanged")}maskOccludee(){const e=hr(1);for(const t of this._geometryRecords)t.instanceParameters.occludees=Object(mr.a)(t.instanceParameters.occludees,e);return this._notifyDirty("occlusionChanged"),e}removeOcclude(e){for(const t of this._geometryRecords)t.instanceParameters.occludees=Object(mr.c)(t.instanceParameters.occludees,e);this._notifyDirty("occlusionChanged")}highlight(){const e=hr(0);for(const t of this._geometryRecords)t.instanceParameters.highlights=Object(mr.a)(t.instanceParameters.highlights,e);return this._notifyDirty("highlightChanged"),e}removeHighlight(e){for(const t of this._geometryRecords)t.instanceParameters.highlights=Object(mr.c)(t.instanceParameters.highlights,e);this._notifyDirty("highlightChanged")}getCombinedStaticTransformation(e,t){return Object(a.f)(Object(i.n)(t,Object(u.b)()),this.objectTransformation,e.getStaticTransformation())}getCombinedShaderTransformation(e,t){return t=t||Object(u.b)(),Object(a.f)(t,this.objectTransformation,e.getShaderTransformation()),t}hasVolativeTransformation(){return this._hasVolatileTransformation}getBBMin(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin}getBBMax(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax}getCenter(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.center:this._bvWorldSpace.center}getBSRadius(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let e=0;e<this._geometryRecords.length;++e){const t=this._geometries[e],r=this._geometryRecords[e],i=t.boundingInfo;this._calculateTransformedBoundingVolume(i,this._bvObjectSpace,r.getShaderTransformation()),this._calculateTransformedBoundingVolume(i,this._bvWorldSpace,this.getCombinedShaderTransformation(r))}Object(o.f)(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5),Object(o.f)(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);const e=Object(n.e)(),t=Object(n.e)(),r=Object(me.d)(this.objectTransformation);for(let i=0;i<this._geometryRecords.length;++i){const n=this._geometries[i],a=this._geometryRecords[i].getShaderTransformation(),s=Object(me.d)(a),c=n.boundingInfo;Object(o.j)(e,c.getCenter(),a);const u=Object(o.l)(e,this._bvObjectSpace.center),l=c.getBSRadius()*s;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,u+l),Object(o.j)(t,e,this.objectTransformation);const d=Object(o.l)(t,this._bvWorldSpace.center),f=l*r;this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,d+f)}this._bvDirty=!1}_calculateTransformedBoundingVolume(e,t,r){const i=e.getBBMin(),a=e.getBBMax(),s=Object(n.d)(i),c=Object(n.d)(a);Object(o.j)(s,s,r),Object(o.j)(c,c,r);for(let e=0;e<3;++e)t.bbMin[e]=Math.min(t.bbMin[e],s[e],c[e]),t.bbMax[e]=Math.max(t.bbMax[e],s[e],c[e]);for(let e=0;e<3;++e){Object(o.h)(s,i),Object(o.h)(c,a),s[e]=a[e],c[e]=i[e],Object(o.j)(s,s,r),Object(o.j)(c,c,r);for(let e=0;e<3;++e)t.bbMin[e]=Math.min(t.bbMin[e],s[e],c[e]),t.bbMax[e]=Math.max(t.bbMax[e],s[e],c[e])}}_invalidateBoundingVolume(){this._bvDirty=!0,this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})}_notifyDirty(e,t,r,i){if(this._parentLayer){r=r||1;const n=i||this;this._parentLayer.notifyDirty(e,t,r,n)}}get test(){const e=this;return{hasGeometry:t=>e._geometries.indexOf(t)>-1,getGeometryIndex:t=>e._geometries.indexOf(t)}}}pr._idGen=new ne;class br{constructor(){this.bbMin=Object(n.g)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.bbMax=Object(n.g)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.bbMax[0]<this.bbMin[0]&&this.bbMax[1]<this.bbMin[1]&&this.bbMax[2]<this.bbMin[2]}}class gr extends br{constructor(){super(),this.center=Object(n.e)(),this.bsRadius=0}init(){Object(o.r)(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Object(o.r)(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),Object(o.r)(this.center,0,0,0),this.bsRadius=0}getCenter(){return this.center}getBSRadius(){return this.bsRadius}}const vr=new class{constructor(e=0){this.offset=e,this.sphere=Lt(),this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*n+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*n+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e,t){const r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/r;return this.sphere.center[0]=t[0]+t[0]*i,this.sphere.center[1]=t[1]+t[1]*i,this.sphere.center[2]=t[2]+t[2]*i,this.sphere.radius=e+e*this.offset/r,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(n.e)(),this.mbs=Object(w.a)(),this.obb={center:Object(n.e)(),halfSize:Object(he.a)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(o.q)(this.obb.halfSize,e.halfSize,e.quaternion),Object(o.c)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,Object(o.g)(this.obb.halfSize,this.obb.halfSize,e.center),Object(fe.a)(yr,e.quaternion),Object(o.q)(this.obb.halfSize,this.obb.halfSize,yr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(n.e)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const c=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*c,e[4]+=o*c,e[5]+=a*c,e}};Object(n.e)(),Object(n.e)(),Object(w.a)();const yr=Object(_.a)(),xr=0,Or=1,_r=2,Tr=3,wr=4,Sr=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class jr extends(Sr(class{})){}var Mr=class extends jr{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}},Ar=class extends Mr{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach(e=>this._textureRepository.release(e)),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){Object(i.g)(this._texture)&&(t.setUniform1i("tex",xr),e.bindTexture(this._texture.glTexture,xr)),Object(i.g)(this._textureNormal)&&(t.setUniform1i("normalTexture",Or),e.bindTexture(this._textureNormal.glTexture,Or)),Object(i.g)(this._textureEmissive)&&(t.setUniform1i("texEmission",_r),e.bindTexture(this._textureEmissive.glTexture,_r)),Object(i.g)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",Tr),e.bindTexture(this._textureOcclusion.glTexture,Tr)),Object(i.g)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",wr),e.bindTexture(this._textureMetallicRoughness.glTexture,wr))}bindTextureScale(e,t){const r=Object(i.g)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!Object(i.f)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}},Cr=r(438);const Pr={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};class Br{constructor(e,t,r){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Pr,this.id=Br._idGen.gen(e),this._params=Object(Cr.c)(t,r),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(e){Object(Cr.e)(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(i.g)(this.materialRepository)&&this.materialRepository.materialChanged(this)}}Br._idGen=new ne;function Er(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let r=0;r<s;++r){const n=2*e[r];o[i]=t[n],o[i+1]=t[n+1],i+=a}else for(let r=0;r<s;++r){const s=2*e[r];for(let e=0;e<n;++e)o[i]=t[s],o[i+1]=t[s+1],i+=a}}function Ir(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let r=0;r<s;++r){const n=3*e[r];o[i]=t[n],o[i+1]=t[n+1],o[i+2]=t[n+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<n;++e)o[i]=t[s],o[i+1]=t[s+1],o[i+2]=t[s+2],i+=a}}function Lr(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let r=0;r<s;++r){const n=4*e[r];o[i]=t[n],o[i+1]=t[n+1],o[i+2]=t[n+2],o[i+3]=t[n+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<n;++e)o[i]=t[s],o[i+1]=t[s+1],o[i+2]=t[s+2],o[i+3]=t[s+3],i+=a}}function Rr(e,t,r,i,n,o){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,u=e.length;if(n*=c,null==o||1===o)for(let r=0;r<u;++r){const i=3*e[r],o=t[i],u=t[i+1],l=t[i+2];s[n]=a[0]*o+a[4]*u+a[8]*l+a[12],s[n+1]=a[1]*o+a[5]*u+a[9]*l+a[13],s[n+2]=a[2]*o+a[6]*u+a[10]*l+a[14],n+=c}else for(let r=0;r<u;++r){const i=3*e[r],u=t[i],l=t[i+1],d=t[i+2],f=a[0]*u+a[4]*l+a[8]*d+a[12],h=a[1]*u+a[5]*l+a[9]*d+a[13],m=a[2]*u+a[6]*l+a[10]*d+a[14];for(let e=0;e<o;++e)s[n]=f,s[n+1]=h,s[n+2]=m,n+=c}}else Ir(e,t,i,n,o)}function Fr(e,t,r,i,n,o){if(r){const a=r,s=i.typedBuffer,c=i.typedBufferStride,u=e.length,l=a[0],d=a[1],f=a[2],h=a[4],m=a[5],p=a[6],b=a[8],g=a[9],v=a[10],y=Math.abs(1-l*l+h*h+b*b)>1e-5||Math.abs(1-d*d+m*m+g*g)>1e-5||Math.abs(1-f*f+p*p+v*v)>1e-5;if(n*=c,null==o||1===o)for(let r=0;r<u;++r){const i=3*e[r],o=t[i],a=t[i+1],u=t[i+2];let x=l*o+h*a+b*u,O=d*o+m*a+g*u,_=f*o+p*a+v*u;if(y){const e=x*x+O*O+_*_;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);x/=t,O/=t,_/=t}}s[n+0]=x,s[n+1]=O,s[n+2]=_,n+=c}else for(let r=0;r<u;++r){const i=3*e[r],a=t[i],u=t[i+1],x=t[i+2];let O=l*a+h*u+b*x,_=d*a+m*u+g*x,T=f*a+p*u+v*x;if(y){const e=O*O+_*_+T*T;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);O/=t,_/=t,T/=t}}for(let e=0;e<o;++e)s[n+0]=O,s[n+1]=_,s[n+2]=T,n+=c}}else Ir(e,t,i,n,o)}function zr(e,t,r,i,n,o){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,null==o||1===o){if(4===r)for(let r=0;r<c;++r){const i=4*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}else if(4===r)for(let r=0;r<c;++r){const i=4*e[r];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}else if(3===r)for(let r=0;r<c;++r){const i=3*e[r];for(let e=0;e<o;++e)a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}var Nr=r(332),Dr=r(453);const Ur=Object(Dr.e)(770,1,771,771),Vr=Object(Dr.f)(1,1),kr=Object(Dr.f)(0,771);const Gr={factor:-1,units:-2};function Hr(e){return e?Gr:null}function qr(e){return 3===e||2===e?513:515}var Wr=r(18);class $r{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Xr(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Object(P.h)(a)),c=null!=(n=t._parameterBits)?n:[0];let u=0;for(;c[u]+s>16;)u++,u>=c.length&&c.push(0);t._parameterBits=c;const l=c[u],d=(1<<s)-1<<l;c[u]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[u]=this._parameterBits[u]&~d|+e<<l&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration values must be booleans or numbers!"}})}}var Yr=r(483);function Jr(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}const Zr=Jr();var Qr;Object.freeze({__proto__:null,create:Jr,clone:function(e){const t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},fromValues:function(e,t,r,i,n,o,a,s,c,u,l,d,f,h,m,p){const b=new Float32Array(16);return b[0]=e,b[1]=t,b[2]=r,b[3]=i,b[4]=n,b[5]=o,b[6]=a,b[7]=s,b[8]=c,b[9]=u,b[10]=l,b[11]=d,b[12]=f,b[13]=h,b[14]=m,b[15]=p,b},createView:function(e,t){return new Float32Array(e,t,16)},IDENTITY:Zr});!function(e){function t(e,t,r){Object(a.i)(Kr,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Kr)}e.bindCamPosition=function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])},e.bindProjectionMatrix=function(e,t){e.setUniformMatrix4fv("proj",t)},e.bindNearFar=function(e,t){e.setUniform2fv("nearFar",t)},e.bindViewCustomOrigin=t,e.bindView=function(e,r){t(e,r.origin,r.camera.viewMatrix)},e.bindViewport=function(e,t){e.setUniform4fv("viewport",t.camera.fullViewport)}}(Qr||(Qr={}));const Kr=Jr();var ei=r(333),ti=r(518),ri=r(334),ii=r(373);const ni={mask:255},oi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},ai={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var si=r(335),ci=r(439),ui=r(364),li=r(365),di=r(480);class fi extends class{constructor(e,t){t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t,r){}bindMaterial(e,t,r){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=fi.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ci.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Yr.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}bindPass(e,t,r){Qr.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const i=this.configuration.output;7===i&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Cr.b[t.colorMixMode])),0===i?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",Cr.b[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&li.a.bindUniforms(this.program,t,this.configuration.isSchematic)):1===i||3===i?this.program.setUniform2fv("nearFar",r.camera.nearFar):4===i&&ti.a.bindOutputHighlight(e,this.program,r),ri.a.bindUniformsForSymbols(this.program,t),ii.a.bindUniforms(this.program,t,r),Object(Cr.a)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(n.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Qr.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Qr.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ui.a.bindCustomOrigin(this.program,t),ei.a.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&si.a.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,n=2===e;return Object(Dr.d)({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?Ur:(o=e,2===o?null:1===o?kr:Vr),culling:hi(r),depthTest:{func:qr(e)},depthWrite:i||n?r.writeDepth&&Dr.c:null,colorWrite:Dr.b,stencilWrite:r.sceneHasOcludees?ni:null,stencilTest:r.sceneHasOcludees?t?ai:oi:null,polygonOffset:i||n?null:Hr(r.enableOffset)});var o}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}fi.shader=new $r(di.a,()=>r.e(207).then(r.bind(null,662)));const hi=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class mi extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map(()=>0)}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}Object(Wr.a)([Xr({count:8})],mi.prototype,"output",void 0),Object(Wr.a)([Xr({count:4})],mi.prototype,"alphaDiscardMode",void 0),Object(Wr.a)([Xr({count:3})],mi.prototype,"doubleSidedMode",void 0),Object(Wr.a)([Xr()],mi.prototype,"isSchematic",void 0),Object(Wr.a)([Xr()],mi.prototype,"vertexColors",void 0),Object(Wr.a)([Xr()],mi.prototype,"offsetBackfaces",void 0),Object(Wr.a)([Xr()],mi.prototype,"symbolColors",void 0),Object(Wr.a)([Xr()],mi.prototype,"vvSize",void 0),Object(Wr.a)([Xr()],mi.prototype,"vvColor",void 0),Object(Wr.a)([Xr()],mi.prototype,"verticalOffset",void 0),Object(Wr.a)([Xr()],mi.prototype,"receiveShadows",void 0),Object(Wr.a)([Xr()],mi.prototype,"slicePlaneEnabled",void 0),Object(Wr.a)([Xr()],mi.prototype,"sliceHighlightDisabled",void 0),Object(Wr.a)([Xr()],mi.prototype,"receiveAmbientOcclusion",void 0),Object(Wr.a)([Xr()],mi.prototype,"screenSizePerspective",void 0),Object(Wr.a)([Xr()],mi.prototype,"textureAlphaPremultiplied",void 0),Object(Wr.a)([Xr()],mi.prototype,"hasColorTexture",void 0),Object(Wr.a)([Xr()],mi.prototype,"usePBR",void 0),Object(Wr.a)([Xr()],mi.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(Wr.a)([Xr()],mi.prototype,"hasEmissionTexture",void 0),Object(Wr.a)([Xr()],mi.prototype,"hasOcclusionTexture",void 0),Object(Wr.a)([Xr()],mi.prototype,"hasNormalTexture",void 0),Object(Wr.a)([Xr()],mi.prototype,"instanced",void 0),Object(Wr.a)([Xr()],mi.prototype,"instancedColor",void 0),Object(Wr.a)([Xr()],mi.prototype,"instancedDoublePrecision",void 0),Object(Wr.a)([Xr()],mi.prototype,"vertexTangents",void 0),Object(Wr.a)([Xr()],mi.prototype,"normalsTypeDerivate",void 0),Object(Wr.a)([Xr()],mi.prototype,"writeDepth",void 0),Object(Wr.a)([Xr()],mi.prototype,"sceneHasOcludees",void 0),Object(Wr.a)([Xr()],mi.prototype,"transparent",void 0),Object(Wr.a)([Xr()],mi.prototype,"enableOffset",void 0),Object(Wr.a)([Xr({count:3})],mi.prototype,"cullFace",void 0),Object(Wr.a)([Xr({count:4})],mi.prototype,"transparencyPassType",void 0);var pi=r(481);class bi extends fi{initializeProgram(e){const t=bi.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(ci.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new Yr.a(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Pr)}}bi.shader=new $r(pi.a,()=>r.e(206).then(r.bind(null,663)));class gi extends Br{constructor(e,t){super(t,e,yi),this.supportsEdges=!0,this.techniqueConfig=new mi,this.vertexBufferLayout=gi.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?gi.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||i)?!!a||s:r?a?c:s:n||o||i?!!a||s:a?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,n,a,s,c){if(null!==this.params.verticalOffset){const e=n.camera;Object(o.r)(ji,r[12],r[13],r[14]);let t=null;switch(n.viewingMode){case 1:t=Object(o.o)(wi,ji);break;case 2:t=Object(o.h)(wi,Ti)}let i=0;if(null!==this.params.verticalOffset){const r=Object(o.g)(Mi,ji,e.eye),n=Object(o.m)(r),a=Object(o.b)(r,r,1/n);let s=null;this.params.screenSizePerspective&&(s=Object(o.e)(t,a)),i+=Object(Cr.f)(e,n,this.params.verticalOffset,s,this.params.screenSizePerspective)}Object(o.b)(t,t,i),Object(o.s)(Si,t,n.transform.inverseRotation),a=Object(o.g)(Oi,a,Si),s=Object(o.g)(_i,s,Si)}Object(Cr.d)(e,t,n,a,s,function(e){return Object(i.g)(e)?(vr.offset=e,vr):null}(n.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new vi(e)}createBufferWriter(){return new xi(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(le.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(le.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class vi extends Ar{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(bi,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(fi,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const yi={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Nr.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,renderOccluded:1};class xi{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,r,i){!function(e,t,r,i,n,o){for(const a of t.fieldNames){const t=e.vertexAttr[a],s=e.indices[a];if(t&&s)switch(a){case re.a.POSITION:{Object(re.b)(3===t.size);const e=n.getField(a,d.u);e&&Rr(s,t.data,r,e,o);break}case re.a.NORMAL:{Object(re.b)(3===t.size);const e=n.getField(a,d.u);e&&Fr(s,t.data,i,e,o);break}case re.a.UV0:{Object(re.b)(2===t.size);const e=n.getField(a,d.m);e&&Er(s,t.data,e,o);break}case re.a.UVMAPSPACE:{Object(re.b)(4===t.size);const e=n.getField(a,d.C);e&&Lr(s,t.data,e,o);break}case re.a.MEANVERTEXPOSITION:{Object(re.b)(3===t.size);const e=n.getField(a,d.u);e&&Rr(s,t.data,r,e,o);break}case re.a.BOUND1:case re.a.BOUND2:case re.a.BOUND3:{Object(re.b)(3===t.size);const e=n.getField(a,d.u);e&&Rr(s,t.data,r,e,o);break}case re.a.COLOR:{Object(re.b)(3===t.size||4===t.size);const e=n.getField(a,d.J);e&&zr(s,t.data,t.size,e,o);break}case re.a.SYMBOLCOLOR:{Object(re.b)(3===t.size||4===t.size);const e=n.getField(a,d.J);e&&zr(s,t.data,t.size,e,o);break}case re.a.TANGENT:{Object(re.b)(4===t.size);const e=n.getField(a,d.C);e&&Lr(s,t.data,e,o);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Oi=Object(n.e)(),_i=Object(n.e)(),Ti=Object(n.g)(0,0,1),wi=Object(n.e)(),Si=Object(n.e)(),ji=Object(n.e)(),Mi=Object(n.e)();var Ai=r(79),Ci=r(13),Pi=r(14),Bi=r(24),Ei=r(2),Ii=r(88),Li=r(379),Ri=r(55);async function Fi(e,t){const{data:r}=await Object(Ri.default)(e,{responseType:"image",...t});return r}var zi=r(343),Ni=r(522),Di=r(520),Ui=r(521);const Vi=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],ki=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var Gi=r(489),Hi=r(290);const qi=f.a.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Wi(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const $i=Wi("DXT1"),Xi=Wi("DXT3"),Yi=Wi("DXT5");function Ji(e,t,r,i){const{textureData:n,internalFormat:o,width:a,height:s}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return qi.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return qi.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let n,o;switch(i){case $i:n=8,o=33776;break;case Xi:n=16,o=33778;break;case Yi:n=16,o=33779;break;default:return qi.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],u=r[3];0==(3&c)&&0==(3&u)||(qi.warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,u=u+3&-4);const l=c,d=u;let f,h;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||Object(P.f)(c)&&Object(P.f)(u)||(qi.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let m=r[1]+4;const p=[];for(let t=0;t<s;++t)h=(c+3>>2)*(u+3>>2)*n,f=new Uint8Array(e,m,h),p.push(f),m+=h,c=Math.max(1,c>>1),u=Math.max(1,u>>1);return{textureData:{type:"compressed",levels:p},internalFormat:o,width:l,height:d}}(r,i);t.samplingMode=n.levels.length>1?9987:9729,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s;const c=new zi.a(e,t,n);return e.bindTexture(c,0),c}class Zi{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new Ii.a,this.data=e,this.id=Zi.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Zi.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(i.f)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(Bi.t)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(Bi.u)(e.src)||Object(Bi.t)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(Object(i.f)(e))return 0;if(Object(Ci.c)(e)||Object(Ci.k)(e))return e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Zi.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if(Object(i.g)(this.glTexture))return this.glTexture;if(Object(i.g)(this.loadingPromise))return this.loadingPromise;const r=this.data;return Object(i.f)(r)?(this.glTexture=new zi.a(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(Object(Ci.c)(r)||Object(Ci.k)(r))&&this.params.encoding===Zi.DDS_ENCODING?this.loadFromDDSData(e,r):Object(Ci.k)(r)?this.loadFromPixelData(e,r):Object(Ci.c)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(i.f)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(i.g)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this.powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,i,n,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Ji(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){Object(re.b)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new zi.a(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=Object(Ei.d)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync(async i=>{const n=await Fi(r,{signal:i});return this.loadFromImage(e,n,t)})}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync(async i=>{const n=await Object(Li.a)(r,r.src,!1,i);return this.loadFromImage(e,n,t)})}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync(n=>Object(Ei.c)((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",u),Object(i.g)(l)&&l.remove()},c=()=>{r.readyState>=2&&(s(),o(this.loadFromImage(e,r,t)))},u=e=>{s(),a(e||new Pi.a("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",u);const l=Object(Ei.p)(n,()=>u(Object(Ei.e)()))}))}loadFromImage(e,t,r){const i=Zi.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||Object(P.f)(i.width)&&Object(P.f)(i.height)?(n.width=i.width,n.height=i.height,this.glTexture=new zi.a(e,n,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,n,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(Hi.a)(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=Object(P.i)(o),c=Object(P.i)(a);let u;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[o/s,a/c],u=new zi.a(e,i),u.updateData(0,0,0,o,a,t);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,t,i,n);break;default:Object(Ai.a)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,t,r,i){const n=new zi.a(e,r),o=new Gi.a(e,{colorTarget:0,depthStencilTarget:0},n),a=new zi.a(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Vi,r=Pr,i=-1,n=1){let o=null;switch(t){case ki:o=new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]);break;case Vi:default:o=new Float32Array([i,i,n,i,i,n,n,n])}return new Ui.a(e,r,{geometry:t},{geometry:Di.a.createVertex(e,35044,o)})}(e);return this.drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),e.bindFramebuffer(null),o.dispose()),n}drawStretchedTexture(e,t,r,i,n,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(n,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(Ni.c)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if(Object(i.g)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(i.g)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(i.g)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Zi.idGen=new ne,Zi.DDS_ENCODING="image/vnd-ms.dds";var Qi=Zi,Ki=r(105);class en{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(Bi.u)(e)?(Object(Ei.u)(t),Object(Bi.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(i.f)(this.streamDataRequester))return(await Object(Ri.default)(t,{responseType:tn[e]})).data;const n=await Object(Ki.c)(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw Object(Ei.t)(n.error),new Pi.a("","Request for resource failed: "+n.error)}}const tn={image:"image",binary:"array-buffer",json:"json"};var rn=r(340);function nn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[u],i[c+1]=o[u+1],c+=n,u+=a}function on(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;if(Object(rn.b)(t.elementType)){const e=Object(rn.d)(t.elementType);if(Object(rn.c)(t.elementType))for(let t=0;t<s;++t)i[c]=Math.max(o[u]/e,-1),i[c+1]=Math.max(o[u+1]/e,-1),c+=n,u+=a;else for(let t=0;t<s;++t)i[c]=o[u]/e,i[c+1]=o[u+1]/e,c+=n,u+=a}else nn(e,t,r);return e}Object.freeze({__proto__:null,copy:nn,normalizeIntegerBuffer:on});function an(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[u],i[c+1]=o[u+1],i[c+2]=o[u+2],c+=n,u+=a}Object.freeze({__proto__:null,copy:an});function sn(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[u],i[c+1]=o[u+1],i[c+2]=o[u+2],i[c+3]=o[u+3],c+=n,u+=a}function cn(e,t,r,i,n,o){const a=e.typedBuffer,s=e.typedBufferStride,c=o?o.count:e.count;let u=(o&&o.dstIndex?o.dstIndex:0)*s;for(let e=0;e<c;++e)a[u]=t,a[u+1]=r,a[u+2]=i,a[u+3]=n,u+=s}Object.freeze({__proto__:null,copy:sn,fill:cn});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<9;++e)i[c+e]=o[u+e];c+=n,u+=a}}});Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e){for(let e=0;e<16;++e)i[c+e]=o[u+e];c+=n,u+=a}}});function un(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let i=0;i<r;i++)t[i]=e.get(i);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*n,u=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[c]=o[u],c+=n,u+=a},makeDense:un});function ln(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(rn.a)(e.ElementType)))}const dn=f.a.getLogger("esri.views.3d.glTF");class fn{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new Pi.a(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new fn(this.major,this.minor,this._context)}static parse(e,t=""){const[r,i]=e.split("."),n=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(n))throw new Pi.a((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!i||!i.match||!i.match(n))throw new Pi.a((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const o=parseInt(r,10),a=parseInt(i,10);return new fn(o,a,t)}}class hn{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const mn={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},pn={pbrMetallicRoughness:mn,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},bn={ESRI_externalColorMixMode:"tint"},gn=(e={})=>{const t={...mn,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(Ai.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...bn,...e.extras});return{...pn,...e,pbrMetallicRoughness:t,extras:r}},vn={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class yn{constructor(e,t,r,i,n){this.context=e,this.errorContext=t,this.uri=r,this.json=i,this.glbBuffer=n,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,i,n)=>(t=i||"",r=n||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==i.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==i.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==i.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,i){if(Object(Bi.u)(r)){const i=Object(Bi.i)(r);if("model/gltf-binary"!==i.mediaType)try{const n=JSON.parse(i.isBase64?atob(i.data):i.data);return new yn(e,t,r,n)}catch{}const n=Object(Bi.j)(r);if(yn.isGLBData(n))return this.fromGLBData(e,t,r,n)}if(r.endsWith(".gltf")){const n=await e.loadJSON(r,i);return new yn(e,t,r,n)}const n=await e.loadBinary(r,i);if(yn.isGLBData(n))return this.fromGLBData(e,t,r,n);const o=await e.loadJSON(r,i);return new yn(e,t,r,o)}static isGLBData(e){const t=new hn(e);return t.remainingBytes()>=4&&1179937895===t.readUint32()}static async fromGLBData(e,t,r,i){const n=await yn.parseGLBData(t,i);return new yn(e,t,r,n.json,n.binaryData)}static async parseGLBData(e,t){const r=new hn(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const i=r.readUint32(),n=r.readUint32(),o=r.readUint32();e.assert(1179937895===i,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==n,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),i=r.readUint32();0===c?(e.assert(1313821514===i,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await Sn(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==i,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],i=this.errorContext;if(null==r.uri)return i.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let n=this.bufferCache.get(e);if(!n){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);n=new Uint8Array(o),this.bufferCache.set(e,n),i.assert(n.byteLength===r.byteLength,"Buffer byte lengths should match.")}return n}async getAccessor(e,t){const r=this.json.accessors[e],i=this.errorContext;i.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),i.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),a=Tn[r.type],s=wn[r.componentType],c=a*s,u=n.byteStride||c;return{raw:o.buffer,byteStride:u,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:u===c,componentCount:a,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return un(this.wrapAccessor(d.l,r));case 5123:return un(this.wrapAccessor(d.j,r));case 5125:return un(this.wrapAccessor(d.k,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const i=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"POSITION vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.u,i)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const i=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(3!==i.componentCount,"NORMAL vertex attribute must have 3 components, but found "+i.componentCount.toFixed()),this.wrapAccessor(d.u,i)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const i=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==i.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+jn[i.componentType]),r.errorUnsupportedIf(4!==i.componentCount,"TANGENT vertex attribute must have 4 components, but found "+i.componentCount.toFixed()),new d.C(i.raw,i.byteOffset,i.byteStride,i.byteOffset+i.byteStride*i.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const i=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==i.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+i.componentCount.toFixed()),5126===i.componentType?this.wrapAccessor(d.m,i):(r.errorUnsupportedIf(!i.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new d.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new d.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new d.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new d.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new d.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new d.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(Ai.a)(e.componentType)}}(i))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const i=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==i.componentCount&&3!==i.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+i.componentCount.toFixed()),4===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.C,i);if(5121===i.componentType)return this.wrapAccessor(d.J,i);if(5123===i.componentType)return this.wrapAccessor(d.H,i)}else if(3===i.componentCount){if(5126===i.componentType)return this.wrapAccessor(d.u,i);if(5121===i.componentType)return this.wrapAccessor(d.B,i);if(5123===i.componentType)return this.wrapAccessor(d.z,i)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+jn[i.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let i=this.materialCache.get(e.material);if(!i){const n=null!=e.material?gn(this.json.materials[e.material]):gn(),o=n.pbrMetallicRoughness,a=this.hasVertexColors(e);let s,c,u,l,d;o.baseColorTexture&&(r.errorUnsupportedIf(0!==(o.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(o.baseColorTexture.index,t)),n.normalTexture&&(0!==(n.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(n.normalTexture.index,t)),n.occlusionTexture&&(0!==(n.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):u=await this.getTexture(n.occlusionTexture.index,t)),n.emissiveTexture&&(0!==(n.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):l=await this.getTexture(n.emissiveTexture.index,t)),o.metallicRoughnessTexture&&(0!==(o.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(o.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;i={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:o.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:s,normalTexture:c,name:n.name,id:f,occlusionTexture:u,emissiveTexture:l,emissiveFactor:n.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode}}return i}async getTexture(e,t){const r=this.errorContext,i=this.json.textures[e],n=(e=>({...vn,...e}))(null!=i.sampler?this.json.samplers[i.sampler]:{});r.errorUnsupportedIf(null==i.source,"Source is expected to be defined for a texture.");const o=this.json.images[i.source];let a=this.textureCache.get(e);if(!a){let i;if(o.uri)i=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],n=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),i=await async function(e,t){return Object(Ei.c)((r,i)=>{const n=new Blob([e],{type:t}),o=URL.createObjectURL(n),a=new Image;a.addEventListener("load",()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>r(a),()=>r(a)):r(a)}),a.addEventListener("error",e=>{URL.revokeObjectURL(o),i(e)}),a.src=o})}(new Uint8Array(n.buffer,n.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}a={data:i,wrapS:n.wrapS,wrapT:n.wrapT,minFilter:n.minFilter,name:o.name,id:e},this.textureCache.set(e,a)}return a}getNodeTransform(e){if(void 0===e)return On;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),i=this.json.nodes[e];i.matrix?t=Object(a.f)(Object(u.b)(),r,i.matrix):i.translation||i.rotation||i.scale?(t=Object(u.c)(r),i.translation&&Object(a.i)(t,t,i.translation),i.rotation&&(_n[3]=Object(fe.b)(_n,i.rotation),Object(a.g)(t,t,_n[3],_n)),i.scale&&Object(a.h)(t,t,i.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(Bi.y)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=fn.parse(this.json.asset.version,"glTF");xn.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const xn=new fn(2,0,"glTF"),On=Object(a.e)(Object(u.b)(),Math.PI/2),_n=Object(_.a)(),Tn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},wn={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Sn(e){return Object(Ei.c)((t,r)=>{const i=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{r(e)},n.readAsText(i)})}const jn={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let Mn=0;function An(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(i.g)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}function Cn(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Pn(e,t,r){const i=t=>{const i=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(i)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Bn(t.wrapS),t:Bn(t.wrapT)},mipmap:In.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(i,r)}return i},n=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?i(t.colorTexture):void 0,textureNormal:t.normalTexture?i(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?i(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?i(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?i(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,r)}return n}function Bn(e){if(33071===e||33648===e||10497===e)return e;En.error("Unexpected TextureSampler WrapMode: "+e)}const En=new class{error(e){throw new Pi.a("gltf-loader-error",e)}errorUnsupported(e){throw new Pi.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){dn.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},In=[9987,9985],Ln=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];function Rn(e){return"number"==typeof e?function(e){return J(e)}(e):Object(Ci.i)(e)||Object(Ci.k)(e)?new Uint32Array(e):e}var Fn=r(5);const zn=f.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Nn(e){throw new Pi.a("","Request for object resource failed: "+e)}function Dn(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(zn.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(zn.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(zn.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(zn.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else zn.warn("Indexed geometries must specify faces"),i=!1;break}default:zn.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(zn.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(zn.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Un(e){const t=Object(g.c)();return e.forEach(e=>{const r=e.boundingInfo;Object(g.g)(t,r.getBBMin()),Object(g.g)(t,r.getBBMax())}),t}async function Vn(e,t){const r=[];for(const n in e){const o=e[n],a=o.images[0].data;if(!a){zn.warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+a,c="/textureDefinitions/"+n,u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},l=Object(i.g)(t)&&t.disableTextures?Object(Ei.s)(null):Fi(s,t);r.push(l.then(e=>({refId:c,image:e,params:u,alphaChannelUsage:"rgba"===o.channels?o.alphaChannelUsage||"transparency":"none"})))}const n=await Object(Ei.b)(r),o={};for(const e of n)o[e.refId]=e;return o}function kn(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function Gn(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function Hn(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const qn=new fn(1,2,"wosr");function Wn(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],u=r[5],l=r[6],d=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,b=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*p,r=e*g,i=b[r],h=b[r+1],v=b[r+2],y=b[r+3];m[t]=n*i+s*h+l*v,m[t+1]=o*i+c*h+d*v,m[t+2]=a*i+u*h+f*v,m[t+3]=y}}function $n(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=r*a[i],n[t+1]=r*a[i+1],n[t+2]=r*a[i+2],n[t+3]=r*a[i+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void h.error("source and destination buffers need to have the same number of elements");const i=e.count,n=r[0],o=r[1],a=r[2],s=r[3],c=r[4],u=r[5],l=r[6],d=r[7],f=r[8],m=r[9],p=r[10],b=r[11],g=r[12],v=r[13],y=r[14],x=r[15],O=e.typedBuffer,_=e.typedBufferStride,T=t.typedBuffer,w=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*_,r=e*w,i=T[r],h=T[r+1],S=T[r+2],j=T[r+3];O[t]=n*i+c*h+f*S+g*j,O[t+1]=o*i+u*h+m*S+v*j,O[t+2]=a*i+l*h+p*S+y*j,O[t+3]=s*i+d*h+b*S+x*j}},transformMat3:Wn,scale:$n,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*o,i=e*s;n[t]=a[i]>>r,n[t+1]=a[i+1]>>r,n[t+2]=a[i+2]>>r,n[t+3]=a[i+3]>>r}}});async function Xn(e,t){const r=Yn(Object(s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=Object(i.g)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await Object(Ki.c)(t.request(e,"json",r));return!0===i.ok?i.value:(Object(Ei.t)(i.error),void Nn(i.error.details.url))}(e,r,t);const n=await Object(Ki.c)(Object(Ri.default)(e,Object(i.m)(t)));return!0===n.ok?n.value.data:(Object(Ei.t)(n.error),void Nn(n.error))}(e,t);return{resource:r,textures:await Vn(r.textureDefinitions,t)}}(r.url,t)),o=function(e,t){const r=[],o=[],a=[],s=[],c=e.resource,u=fn.parse(c.version||"1.0","wosr");qn.validate(u);const l=c.model.name,d=c.model.geometries,f=c.materialDefinitions,h=e.textures;let m=0;const p=new Map;for(let e=0;e<d.length;e++){const c=d[e];if(!Dn(c))continue;const u=Gn(c),b=c.params.vertexAttributes,g={};for(const e in b){const t=b[e],r=t.values;g[e]={data:r,size:t.valuesPerElement}}const v={};if("PerAttributeArray"===c.params.topology){const e=Hn(g.position.data.length/g.position.size);for(const t in g)v[t]=e}else{const e=c.params.faces;for(const t in e)v[t]=new Uint32Array(e[t].values)}const y=h&&h[u.texture];if(y&&!p.has(u.texture)){const{image:e,params:t}=y,r=new Qi(e,l,t);s.push(r),p.set(u.texture,r)}const x=p.get(u.texture),O=x?x.id:void 0;let _=a[u.material]?a[u.material][u.texture]:null;if(!_){const e=f[u.material.substring(u.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=y&&y.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:Object(n.f)(e.diffuse),diffuse:Object(n.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:y?kn(y.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(i.g)(t)&&t.materialParamsMixin&&Object(Fn.d)(s,t.materialParamsMixin),_=new gi(s,l),a[u.material]||(a[u.material]={}),a[u.material][u.texture]=_}o.push(_);const T=new ue(new ie(g,v),l);m+=v.position?v.position.length:0,r.push(T)}return{name:l,stageResources:{textures:s,materials:o,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:Un(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t):async function(e,t,r={}){const n=await yn.load(e,En,t,r),o="gltf_"+Mn++,a={lods:[],materials:new Map,textures:new Map,meta:An(n)},s=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,i=r.scenes[r.scene||0].nodes,n=i.length>1;for(const e of i){const t=r.nodes[e],i=[o(e,0)];if(Cn(t)&&!n){const e=t.extensions.MSFT_lod.ids;i.push(...e.map((e,t)=>o(e,t+1)))}await Object(Ei.b)(i)}async function o(i,n){const a=r.nodes[i],s=e.getNodeTransform(i);if(En.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)await t(r,s,n,e.name)}for(const e of a.children||[])await o(e,n)}}(n,async(e,t,s,c)=>{const l=void 0!==e.mode?e.mode:4,d=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(l);if(Object(i.f)(d))return void En.warnUnsupported("Unsupported primitive mode ("+Ln[l]+"). Skipping primitive.");if(!n.hasPositions(e))return void En.warn("Skipping primitive without POSITION vertex attribute.");const f=await n.getMaterial(e,r),h={transform:Object(u.c)(t),attributes:{position:await n.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await n.getIndexData(e,r),primitiveType:d,material:Pn(a,f,o)};n.hasNormals(e)&&(h.attributes.normal=await n.getNormalData(e,r)),n.hasTangents(e)&&(h.attributes.tangent=await n.getTangentData(e,r)),n.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await n.getTextureCoordinates(e,r)),n.hasVertexColors(e)&&(h.attributes.color=await n.getVertexColors(e,r));let m=null;Object(i.g)(a.meta)&&Object(i.g)(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(m=a.meta.ESRI_lod.thresholds[s]),a.lods[s]=a.lods[s]||{parts:[],name:c,lodThreshold:m},a.lods[s].parts.push(h)}),{model:a,meta:{isEsriSymbolResource:s,uri:n.uri},customMeta:{}}}(new en(t.streamDataRequester),r.url,t)),l=Object(i.e)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(i.g)(l)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(i.f)(s))return;const l=c.attributes.position,f=l.count,h=Object(n.e)(),m=Object(n.e)(),p=Object(n.e)(),b=ln(d.J,f),g=ln(d.u,f),v=Object(a.a)(Object(u.b)(),c.transform);for(let i=0;i<f;i++){l.getVec(i,m),s.getVec(i,h),Object(o.j)(m,m,c.transform),Object(o.g)(p,m,t.center),Object(o.a)(p,p,t.radius);const n=p[2],a=Object(o.m)(p),u=Math.min(.45+.55*a*a,1);Object(o.a)(p,p,t.radius),Object(o.j)(p,p,v),Object(o.o)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(o.f)(p,p,h,n>-1?.2:Math.min(-4*n-3.8,1)),g.setVec(i,p),b.set(i,0,255*u),b.set(i,1,255*u),b.set(i,2,255*u),b.set(i,3,255)}c.attributes.normal=g,c.attributes.color=b}}}(c,l);const f=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Jn(c,f,h,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Jn(c,f,h,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const m=Jn(c,f,h);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function Yn(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Jn(e,t,r,n){const o=e.model,a=Object(c.a)(),s=new Array,u=new Map,f=new Map;return o.lods.forEach((e,c)=>{if(void 0!==n&&c!==n)return;let h=0;const v={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(i.g)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(g.c)()};s.push(v),e.parts.forEach(n=>{const s=n.material+(n.attributes.normal?"_normal":"")+(n.attributes.color?"_color":"")+(n.attributes.texCoord0?"_texCoord0":"")+(n.attributes.tangent?"_tangent":""),c=o.materials.get(n.material),y=Object(i.g)(n.attributes.texCoord0),x=Object(i.g)(n.attributes.normal);if(!u.has(s)){if(y){if(Object(i.g)(c.textureColor)&&!f.has(c.textureColor)){const e=o.textures.get(c.textureColor),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureColor,new Qi(e.data,c.textureColor,t))}if(Object(i.g)(c.textureNormal)&&!f.has(c.textureNormal)){const e=o.textures.get(c.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureNormal,new Qi(e.data,c.textureNormal,t))}if(Object(i.g)(c.textureOcclusion)&&!f.has(c.textureOcclusion)){const e=o.textures.get(c.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureOcclusion,new Qi(e.data,c.textureOcclusion,t))}if(Object(i.g)(c.textureEmissive)&&!f.has(c.textureEmissive)){const e=o.textures.get(c.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureEmissive,new Qi(e.data,c.textureEmissive,t))}if(Object(i.g)(c.textureMetallicRoughness)&&!f.has(c.textureMetallicRoughness)){const e=o.textures.get(c.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};f.set(c.textureMetallicRoughness,new Qi(e.data,c.textureMetallicRoughness,t))}}const e=Math.pow(c.color[0],1/2.1),a=Math.pow(c.color[1],1/2.1),l=Math.pow(c.color[2],1/2.1),d=Math.pow(c.emissiveFactor[0],1/2.1),h=Math.pow(c.emissiveFactor[1],1/2.1),m=Math.pow(c.emissiveFactor[2],1/2.1);u.set(s,new gi({...t,transparent:"BLEND"===c.alphaMode,textureAlphaMode:Zn(c.alphaMode),textureAlphaCutoff:c.alphaCutoff,diffuse:[e,a,l],ambient:[e,a,l],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?0:2,vertexColors:!!n.attributes.color,vertexTangents:!!n.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(i.g)(c.textureColor)&&y?f.get(c.textureColor).id:void 0,colorMixMode:c.colorMixMode,normalTextureId:Object(i.g)(c.textureNormal)&&y?f.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(i.g)(c.textureOcclusion)&&y?f.get(c.textureOcclusion).id:void 0,emissiveTextureId:Object(i.g)(c.textureEmissive)&&y?f.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(i.g)(c.textureMetallicRoughness)&&y?f.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[d,h,m],mrrFactors:[c.metallicFactor,c.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r},s))}const O=function(e,t){switch(t){case 4:return Rn(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(i[e++]=t,i[e++]=t+1,i[e++]=t+2):(i[e++]=t+1,i[e++]=t,i[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)if(n%2==0){const r=e[n],o=e[n+1],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}else{const r=e[n+1],o=e[n],a=e[n+2];i[t++]=r,i[t++]=o,i[t++]=a}}return i}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,i=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)i[e++]=0,i[e++]=t+1,i[e++]=t+2;return i}{const t=e[0];let n=e[1],o=0;for(let a=0;a<r;++a){const r=e[a+2];i[o++]=t,i[o++]=n,i[o++]=r,n=r}return i}}(e)}}(n.indices||n.attributes.position.count,n.primitiveType),_={},T={},w=n.attributes.position.count,S=ln(d.u,w);if(m(S,n.attributes.position,n.transform),T.position={data:S.typedBuffer,size:S.elementCount},_.position=O,Object(i.g)(n.attributes.normal)){const e=ln(d.u,w);Object(l.e)(a,n.transform),p(e,n.attributes.normal,a),T.normal={data:e.typedBuffer,size:e.elementCount},_.normal=O}if(Object(i.g)(n.attributes.tangent)){const e=ln(d.C,w);Object(l.e)(a,n.transform),Wn(e,n.attributes.tangent,a),T.tangent={data:e.typedBuffer,size:e.elementCount},_.tangent=O}if(Object(i.g)(n.attributes.texCoord0)){const e=ln(d.m,w);on(e,n.attributes.texCoord0),T.uv0={data:e.typedBuffer,size:e.elementCount},_.uv0=O}if(Object(i.g)(n.attributes.color)){const e=ln(d.J,w);if(4===n.attributes.color.elementCount)n.attributes.color instanceof d.C?$n(e,n.attributes.color,255):n.attributes.color instanceof d.J?sn(e,n.attributes.color):n.attributes.color instanceof d.H&&$n(e,n.attributes.color,1/256);else{cn(e,255,255,255,255);const t=new d.B(e.buffer,0,4);n.attributes.color instanceof d.u?b(t,n.attributes.color,255):n.attributes.color instanceof d.B?an(t,n.attributes.color):n.attributes.color instanceof d.z&&b(t,n.attributes.color,1/256)}T.color={data:e.typedBuffer,size:e.elementCount},_.color=O}const j=new ue(new ie(T,_),`gltf_${e.name}_${h++}`);v.stageResources.geometries.push(j),v.stageResources.materials.push(u.get(s)),y&&(Object(i.g)(c.textureColor)&&v.stageResources.textures.push(f.get(c.textureColor)),Object(i.g)(c.textureNormal)&&v.stageResources.textures.push(f.get(c.textureNormal)),Object(i.g)(c.textureOcclusion)&&v.stageResources.textures.push(f.get(c.textureOcclusion)),Object(i.g)(c.textureEmissive)&&v.stageResources.textures.push(f.get(c.textureEmissive)),Object(i.g)(c.textureMetallicRoughness)&&v.stageResources.textures.push(f.get(c.textureMetallicRoughness))),v.numberOfVertices+=w;const M=j.boundingInfo;Object(g.g)(v.boundingBox,M.getBBMin()),Object(g.g)(v.boundingBox,M.getBBMax())})}),s}function Zn(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},82:function(e,t,r){"use strict";function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,"a",(function(){return i})),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(i||(i={}))}});