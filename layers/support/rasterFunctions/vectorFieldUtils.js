/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{JSONMap as t}from"../../../core/jsonMap.js";import{isNone as e,unwrap as n}from"../../../core/maybe.js";import r from"../PixelBlock.js";import{isValidPixelBlock as o}from"./pixelUtils.js";const a=new Map;a.set("meter-per-second",1),a.set("kilometer-per-hour",.277778),a.set("knots",.514444),a.set("feet-per-second",.3048),a.set("mile-per-hour",.44704);const s=180/Math.PI,i=5,h=new t({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function l(t,e){return a.get(t)/a.get(e)||1}function c(t){return(450-t)%360}function u(t,e="geographic"){const[n,r]=t,o=Math.sqrt(n*n+r*r);let a=Math.atan2(r,n)*s;return a=(360+a)%360,"geographic"===e&&(a=c(a)),[o,a]}function f(t,e="geographic"){let n=t[1];"geographic"===e&&(n=c(n)),n%=360;const r=t[0];return[r*Math.cos(n/s),r*Math.sin(n/s)]}function p(t,r,a,s="geographic"){if(!o(t)||e(a))return t;const i="vector-magdir"===r?t.clone():n(m(t,r)),h=i.pixels[1];for(let e=0;e<h.length;e++)h[e]="geographic"===s?(h[e]+a[e]+270)%360:(h[e]+360-a[e])%360;return"vector-magdir"===r?i:m(i,"vector-magdir")}function m(t,e,n="geographic",a=1){if(!o(t))return t;const{pixels:s,width:i,height:h}=t,l=i*h,c=s[0],p=s[1],m=t.pixelType.startsWith("f")?t.pixelType:"f32",d=r.createEmptyBand(m,l),M=r.createEmptyBand(m,l);let g=0;for(let r=0;r<h;r++)for(let t=0;t<i;t++)"vector-uv"===e?([d[g],M[g]]=u([c[g],p[g]],n),d[g]*=a):([d[g],M[g]]=f([c[g],p[g]],n),d[g]*=a,M[g]*=a),g++;const x=new r({pixelType:m,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[d,M]});return x.updateStatistics(),x}function d(t,e,n=1){if(1===n||!o(t))return t;const r=t.clone(),{pixels:a,width:s,height:i}=r,h=a[0],l=a[1];let c=0;for(let o=0;o<i;o++)for(let t=0;t<s;t++)"vector-uv"===e?(h[c]*=n,l[c]*=n):h[c]*=n,c++;return r.updateStatistics(),r}function M(t,n,r,o,a){if(e(a)||!a.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(n/o),height:Math.round(r/o),resolution:t.width/n};const s=a.xmin,i=a.ymax,h=(t.xmax-t.xmin)/n*o,l=(t.ymax-t.ymin)/r*o,c=(h+l)/2;return t.xmin=s+Math.floor((t.xmin-s)/h)*h,t.xmax=s+Math.ceil((t.xmax-s)/h)*h,t.ymin=i+Math.floor((t.ymin-i)/l)*l,t.ymax=i+Math.ceil((t.ymax-i)/l)*l,{extent:t,width:Math.round(t.width/h),height:Math.round(t.height/l),resolution:c}}const g=x(0,0,0);function x(t=0,e=0,n=Math.PI,r=!0){r&&(n=(2*Math.PI-n)%(2*Math.PI));const o=r?-1:1,a=13*o,s=-7*o,i=-2*o,h=-16*o,l=21.75,[c,u]=w(0,e+a,n,l),[f,p]=w(t-5.5,e+s,n,l),[m,d]=w(t+5.5,e+s,n,l),[M,g]=w(t-1.5,e+i,n,l),[x,k]=w(t+1.5,e+i,n,l),[y,P]=w(t-1.5,e+h,n,l),[b,I]=w(t+1.5,e+h,n,l);return[c,u,f,p,M,g,x,k,m,d,y,P,b,I]}function k(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));const r=10,o=n?-1:1,a=5*o,s=20*o,h=25*o,l=45,c=0,u=0,f=2,p=0,m=f*o;let[d,M]=[c+r/2,u-s],[g,x]=[d+f,M],[k,y]=[g-p,x+m],[P,b]=[c-r/2,u-h],[I,v]=[P+p,b-m],A=Math.ceil(t/i),_=Math.floor(A/10);A-=8*_;const U=[],S=[];for(let i=0;i<A/2;i++,_--){_<=0&&A%2==1&&i===(A-1)/2&&(P=c,I=P+p,b=(b+M)/2,v=b-m);const[t,n]=w(P,b,e,l);if(_>0){const[r,o]=w(g,b,e,l),[a,s]=w(d,M,e,l);U.push(r),U.push(o),U.push(t),U.push(n),U.push(a),U.push(s)}else{const[r,o]=w(g,x,e,l),[a,s]=w(k,y,e,l),[i,h]=w(I,v,e,l);S.push(t),S.push(n),S.push(i),S.push(h),S.push(a),S.push(s),S.push(r),S.push(o)}b+=a,M+=a,x+=a,y+=a,v+=a}const[D,F]=w(c+r/2,u+s,e,l),j=r/2+f,[N,J]=w(c+j,u+s,e,l),[O,q]=w(c+r/2,u-h,e,l),[B,E]=w(c+j,u-h,e,l);return{pennants:U,barbs:S,shaft:[D,F,N,J,O,q,B,E]}}function w(t,e,n,r=1){const o=Math.sqrt(t*t+e*e)/r,a=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return[o,(2*Math.PI+a-n)%(2*Math.PI)]}const y=[0,1,3,6,10,16,21,27,33,40,47,55,63],P=[0,.5,1,1.5,2],b=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function I(t,e,n,r){const o=l(r||"knots",n);let a;for(a=1;a<e.length;a++)if(a===e.length-1){if(t<e[a]*o)break}else if(t<=e[a]*o)break;return Math.min(a-1,e.length-2)}function v(t,e,n,r,o){let a=0;switch(e){case"beaufort_kn":a=I(t,y,"knots",n);break;case"beaufort_km":a=I(t,y,"kilometer-per-hour",n);break;case"beaufort_ft":a=I(t,y,"feet-per-second",n);break;case"beaufort_m":a=I(t,y,"meter-per-second",n);break;case"classified_arrow":a=I(t,o,r,n);break;case"ocean_current_m":a=I(t,P,"meter-per-second",n);break;case"ocean_current_kn":a=I(t,b,"knots",n)}return a}function A(t,e){const{style:n,inputUnit:r,outputUnit:o,breakValues:a}=e,s=h.fromJSON(r),i=h.fromJSON(o),l=7*6,c=15;let u=0,f=0;const{width:p,height:m,mask:d}=t,M=t.pixels[0],x=t.pixels[1],k=d?d.filter((t=>t>0)).length:p*m,w=new Float32Array(k*l),y=new Uint32Array(c*k);for(let h=0;h<m;h++)for(let t=0;t<p;t++){const e=h*p+t;if(!d||d[h*p+t]){const r=(x[e]+360)%360/180*Math.PI??2*Math.PI*Math.random(),o=v(M[e],n,s,i,a);for(let n=0;n<g.length;n+=2)w[u++]=(t+.5)/p,w[u++]=(h+.5)/m,w[u++]=g[n],w[u++]=g[n+1]+r,w[u++]=o,w[u++]=M[e];const c=7*(u/l-1);y[f++]=c,y[f++]=c+1,y[f++]=c+2,y[f++]=c+0,y[f++]=c+4,y[f++]=c+3,y[f++]=c+0,y[f++]=c+2,y[f++]=c+3,y[f++]=c+2,y[f++]=c+5,y[f++]=c+3,y[f++]=c+5,y[f++]=c+6,y[f++]=c+3}}return{vertexData:w,indexData:y}}const _=[];function U(t,e){if(0===_.length)for(let i=0;i<30;i++)_.push(k(5*i,0));const n=l(h.fromJSON(e.inputUnit),"knots"),{width:r,height:o,mask:a}=t,s=t.pixels[0],c=t.pixels[1],u=6,f=[],p=[];let m=0,d=0;for(let h=0;h<o;h++)for(let t=0;t<r;t++){const e=h*r+t,l=s[e]*n;if((!a||a[h*r+t])&&l>=i){const n=(c[e]+360)%360/180*Math.PI??2*Math.PI*Math.random(),{pennants:a,barbs:s,shaft:i}=_[Math.min(Math.floor(l/5),29)];if(a.length+s.length===0)continue;let M=f.length/u;const g=(t+.5)/r,x=(h+.5)/o;for(let t=0;t<a.length;t+=2)f[m++]=g,f[m++]=x,f[m++]=a[t],f[m++]=a[t+1]+n,f[m++]=0,f[m++]=l;for(let t=0;t<s.length;t+=2)f[m++]=g,f[m++]=x,f[m++]=s[t],f[m++]=s[t+1]+n,f[m++]=0,f[m++]=l;for(let t=0;t<i.length;t+=2)f[m++]=g,f[m++]=x,f[m++]=i[t],f[m++]=i[t+1]+n,f[m++]=0,f[m++]=l;for(let t=0;t<a.length/6;t++)p[d++]=M,p[d++]=M+1,p[d++]=M+2,M+=3;for(let t=0;t<s.length/8;t++)p[d++]=M,p[d++]=M+1,p[d++]=M+2,p[d++]=M+1,p[d++]=M+2,p[d++]=M+3,M+=4;p[d++]=M+0,p[d++]=M+1,p[d++]=M+2,p[d++]=M+1,p[d++]=M+3,p[d++]=M+2,M+=4}}return{vertexData:new Float32Array(f),indexData:new Uint32Array(p)}}function S(t,e){const n=4*6;let r=0,o=0;const{width:a,height:s,mask:c}=t,u=t.pixels[0],f=[],p=[],m=l(h.fromJSON(e.inputUnit),"knots"),d="wind_speed"===e.style?i:Number.MAX_VALUE;for(let i=0;i<s;i++)for(let t=0;t<a;t++){const e=u[i*a+t]*m;if((!c||c[i*a+t])&&e<d){for(let n=0;n<4;n++)f[r++]=(t+.5)/a,f[r++]=(i+.5)/s,f[r++]=n<2?-.5:.5,f[r++]=n%2==0?-.5:.5,f[r++]=0,f[r++]=e;const h=4*(r/n-1);p[o++]=h,p[o++]=h+1,p[o++]=h+2,p[o++]=h+1,p[o++]=h+2,p[o++]=h+3}}return{vertexData:new Float32Array(f),indexData:new Uint32Array(p)}}function D(t,e){return"simple_scalar"===e.style?S(t,e):"wind_speed"===e.style?U(t,e):A(t,e)}function F(t,e,n,o=[0,0],a=.5){const{width:s,height:i,mask:h}=t,[l,c]=t.pixels,[p,m]=o,d=Math.round((s-p)/n),M=Math.round((i-m)/n),g=d*M,x=new Float32Array(g),k=new Float32Array(g),w=new Uint8Array(g),y="vector-uv"===e;for(let r=0;r<M;r++)for(let t=0;t<d;t++){let e=0;const o=r*d+t,M=Math.max(0,r*n+m),g=Math.max(0,t*n+p),P=Math.min(i,M+n),b=Math.min(s,g+n);for(let t=M;t<P;t++)for(let n=g;n<b;n++){const r=t*s+n;if(!h||h[r]){e++;const t=y?[l[r],c[r]]:[l[r],(360+c[r])%360],[n,a]=y?t:f(t);x[o]+=n,k[o]+=a}}if(e>=(P-M)*(b-g)*(1-a)){w[o]=1;const[t,n]=u([x[o]/e,k[o]/e]);x[o]=t,k[o]=n}else w[o]=0,x[o]=0,k[o]=0}const P=new r({width:d,height:M,pixels:[x,k],mask:w});return P.updateStatistics(),P}export{p as convertToLocalDirections,m as convertVectorFieldData,d as convertVectorFieldUnit,D as createVFMesh,S as createVFMeshScalar,l as getUnitConversionFactor,F as sampleVectorField,M as snapImageToSymbolTile,h as unitKebabDict,u as uvComponentToVector};