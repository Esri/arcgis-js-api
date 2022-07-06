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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(e){return{mask:function(e,l){if(e&&e.pixels&&e.pixels.length){var t=this._clonePixelBlock(e),i=l.includedRanges,n=l.noDataInterpretation,r=l.noDataValues;if(null===i&&null===r)return t;var s,a,o,f,h,u,c,p=t.pixels,m=t.mask,x=t.width*t.height,g=p.length;if(null!==r&&r.length!==g)throw"expect "+g+" elements in noDataValues";if(null!==i&&i.length!==2*g)throw"expect "+2*g+" elements in IncludeRanges";if(null==m){for(m=new Uint8Array(x),a=0;a<x;a++)m[a]=1;t.mask=m}if(0===n)for(s=0;s<g;s++)if(h=p[s],o=null===i?null:i[2*s],f=null===i?null:i[2*s+1],u=null===r?null:parseFloat(r[s]),null===o||null===f)for(a=0;a<x;a++)m[a]&&(c=h[a])===u&&(m[a]=0);else if(null===u)for(a=0;a<x;a++)m[a]&&((c=h[a])<o||c>f)&&(m[a]=0);else for(a=0;a<x;a++)m[a]&&((c=h[a])<o||c>f||c===u)&&(m[a]=0);else{var d=new Uint8Array(x);for(a=0;a<x;a++)d[a]=m[a];for(s=0;s<g;s++)if(h=p[s],o=null===i?null:i[2*s],f=null===i?null:i[2*s+1],u=null===r?null:parseFloat(r[s]),null===o||null===f)for(a=0;a<x;a++)d[a]&&(c=h[a])!==u&&(d=0);else if(null===u)for(a=0;a<x;a++)d[a]&&(c=h[a])<=o&&c<=f&&(d=0);else for(a=0;a<x;a++)d[a]&&(c=h[a])<=o&&c<=f&&c!==u&&(d=0);for(a=0;a<x;a++)m[a]&&d[a]&&(m[a]=0)}return t}},calculateStatisticsHistograms:function(e,l){var t,i,n,r,s,a,o,f,h,u,c,p,m,x,g,d,k=this._clonePixelBlock(e),w=k.pixelType,v=k.pixels,y=k.mask,U=v.length,A=[];for(r=0;r<U;r++){if(o=(a={min:-.5,max:255.5,size:256,counts:new Uint32Array(256)}).counts,h=v[r],"U8"===w)if(y)for(s=0;s<k.width*k.height;s++)y[s]&&o[h[s]]++;else for(s=0;s<k.width*k.height;s++)o[h[s]]++;else{if(t=k.statistics[r].minValue,i=k.statistics[r].maxValue,a.min=t,a.max=i,n=(i-t)/256,f=new Uint32Array(257),y)for(s=0;s<k.width*k.height;s++)y[s]&&f[Math.floor((h[s]-t)/n)]++;else for(s=0;s<k.width*k.height;s++)f[Math.floor((h[s]-t)/n)]++;for(s=0;s<255;s++)o[s]=f[s];o[255]=f[255]+f[256]}for(A.push(a),[],t=k.statistics[r].minValue,i=k.statistics[r].maxValue,u=0,c=0,x=0,s=0;s<a.size;s++)u+=o[s],c+=s*o[s];for(g=c/u,s=0;s<a.size;s++)x+=o[s]*Math.pow(s-g,2);d=Math.sqrt(x/(u-1)),p=(g+.5)*(a.max-a.min)/a.size+a.min,m=d*(a.max-a.min)/a.size,k.statistics[r]={min:t,minValue:t,max:i,maxValue:i,mean:p,stddev:m}}return k.histograms=A,k},buildIndexedColormap:function(e,l){if(!e)return null;var t=0;e[0][0]<0&&(t=e[0][0]);var i=Math.max(256,e[e.length-1][0]-t);if(i>65536)return null;var n,r=new Uint8Array(4*i),s=[],a=0,o=5===e[0].length;if(l)for(n=(s=e[a])[0]-t;n<i;n++)r[4*n]=s[1],r[4*n+1]=s[2],r[4*n+2]=s[3],r[4*n+3]=o?s[4]:255,n===s[0]-t&&(s=a===e.length-1?s:e[++a]);else for(n=0;n<e.length;n++)r[a=4*((s=e[n])[0]-t)]=s[1],r[a+1]=s[2],r[a+2]=s[3],r[a+3]=o?s[4]:255;return{indexedColormap:r,offset:t,alphaSpecified:o}},colorize:function(e,l){if(null!==e&&null!==e.pixels){var t,i=this._clonePixelBlock(e),n=i.pixels,r=i.width*i.height,s=n.length,a=i.mask,o=l.indexedColormap,f=l.indexedColormapOffset,h=o&&o.length-1,u=l.indexed2DColormap,c=l.alphaSpecified;if(s>=3)throw"colormap only works on single band image";var p,m=n[0],x=new Uint8Array(m.length),g=new Uint8Array(m.length),d=new Uint8Array(m.length),k=0;if(o)if(a)for(t=0;t<r;t++)a[t]&&((k=4*(m[t]-f))<f||k>h?a[t]=0:(x[t]=o[k],g[t]=o[k+1],d[t]=o[k+2],a[t]=o[k+3]));else{for(a=new Uint8Array(r),t=0;t<r;t++)(k=4*(m[t]-f))<f||k>h?a[t]=0:(x[t]=o[k],g[t]=o[k+1],d[t]=o[k+2],a[t]=o[k+3]);i.mask=a}else if(a)for(t=0;t<r;t++)a[t]&&(p=u[m[t]],x[t]=p[0],g[t]=p[1],d[t]=p[2],a[t]=p[3]);else{for(a=new Uint8Array(r),t=0;t<r;t++)p=u[m[t]],x[t]=p[0],g[t]=p[1],d[t]=p[2],a[t]=p[3];i.mask=a}return i.pixels=[x,g,d],i.statistics=null,i.pixelType="U8",i.maskIsAlpha=c,i}},convolute:function(e,l){var t,i,n,r,s,a,o,f,h=this._clonePixelBlock(e),u=h.pixels,c=h.width,p=h.height,m=c*p,x=u.length,g=[],d=[],k=l.normalizedKernel,w=l.kernelRows,v=l.kernelCols;for(t=0;t<x;t++){for(r=u[t],(s=new Float32Array(m)).set(r),a=1;a<p-1;a++)for(f=a*c,o=1;o<c-1;o++){for(d=0,i=0;i<w;i++)for(n=0;n<v;n++)d+=r[f+o+(i-1)*c+n-1]*k[i*v+n];s[f+o]=d}g.push(s)}return h.pixels=g,h},contrastBrightnessStretch:function(e,l){if(null!==e&&null!==e.pixels){var t,i,n=this._clonePixelBlock(e),r=n.pixels,s=n.mask,a=n.width*n.height,o=r.length,f=l&&l.contrastOffset,h=l&&l.brightnessOffset;if("U8"!==n.pixelType)throw"the contrast and brightness function only supports 8 bit unsigned integer data";var u=this._createContrastBrightnessLUT(f,h);if(null==s)for(i=0;i<a;i++)for(t=0;t<o;t++)r[t][i]=u[r[t][i]];else for(i=0;i<a;i++)if(s[i])for(t=0;t<o;t++)r[t][i]=u[r[t][i]];return n.pixelType="U8",n}},isNull:function(e,l){if(null!==e&&null!==e.pixels){var t,i=this._clonePixelBlock(e),n=i.mask,r=i.pixels[0],s=r.length;if(n){for(t=0;t<s;t++)r[t]=n[t]?0:1;i.mask=null}else if(r.fill)r.fill(0);else for(t=0;t<s;t++)r[t]=0;return i}},setNull:function(e){if(null!==t&&null!==t.pixels){var l,t=this._clonePixelBlock(e),i=t.mask,n=t.pixels[0],r=n.length;for(i=i||new Uint8Array(r),l=0;l<r;l++)i[l]=n[l]?0:1;return t.mask=i,t}},local:function(e,l){if(!l)return e[0];var t=l.rasterCountNeeded,i=l.functor,n=this._clonePixelBlock(e[0]);if(null!==n&&null!==n.pixels){var r,s=n.width*n.height,a=e[1],o=a&&a.pixels[0],f=a&&a.mask,h=n.mask,u=n.pixels[0];if(2===t)if(!h&&f)h=f;else if(h&&f)for(r=0;r<s;r++)h[r]=h[r]&&f[r]?1:0;if(n.mask=h,1===t)if(null==h)for(r=0;r<s;r++)u[r]=i(u[r]);else for(r=0;r<s;r++)h[r]&&(u[r]=i(u[r]));else if(2===t)if(null==h)for(r=0;r<s;r++)u[r]=i(u[r],o[r]);else for(r=0;r<s;r++)h[r]&&(u[r]=i(u[r],o[r]));return n.mask=h,n.calculateStatistics(),n}},remapColor:function(e,l){var t,i,n,r,s,a,o=this._clonePixelBlock(e),f=o.pixels,h=o.width*o.height,u=l.length,c=Math.floor(u/2),p=l[Math.floor(c)],m=l[0].value,x=l[l.length-1].value,g=f[0],d=!1,k=new Uint8Array(h),w=new Uint8Array(h),v=new Uint8Array(h),y=o.mask,U=4===l[0].mappedColor.length;for(y&&0!==y.length||((y=new Uint8Array(h)).fill(U?255:1),o.mask=y),s=0;s<h;s++)if(y[s])if((t=g[s])<m||t>x)k[s]=w[s]=v[s]=y[s]=0;else{for(d=!1,a=c,i=p,n=0,r=u-1;r-n>1;){if(t===i.value){d=!0;break}t>i.value?n=a:r=a,a=Math.floor((n+r)/2),i=l[Math.floor(a)]}d||(i=t===l[r].value?l[r]:l[n]),k[s]=i.mappedColor[0],w[s]=i.mappedColor[1],v[s]=i.mappedColor[2],y[s]=i.mappedColor[3]}return o.pixels=[k,w,v],o.mask=y,o.pixelType="u8",o.maskIsAlpha=U,o},_clonePixelBlock:function(l){if(l.clone)return l.clone();var t,i,n=e.clone(l);if(l.pixels&&l.pixels[0]&&l.pixels[0].length>0&&!(n.pixels&&n.pixels[0]&&n.pixels[0].length>0))for(n.pixels=[],t=l.pixels.length,i=0;i<t;i++)n.pixels[i]=new l.pixels[i].constructor(l.pixels[i]);if(l.statistics)for(n.statistics=[],t=l.statistics.length,i=0;i<t;i++)n.statistics[i]=e.clone(l.statistics[i]);return l.mask&&(n.mask=new Uint8Array(l.mask)),n},_createContrastBrightnessLUT:function(e,l){if(this._contrastCache&&this._contrastCache.contrastOffset===e&&this._contrastCache.brightnessOffset===l)return this._contrastCache.lut;var t,i,n=Math.min(Math.max(e,-100),100),r=Math.min(Math.max(l,-100),100),s=new Uint8Array(256);for(t=0;t<256;t++)n>0&&n<100?i=(200*t-25500+510*r)/(2*(100-n))+128:n<=0&&n>-100?i=(200*t-25500+510*r)*(100+n)/2e4+128:100===n?i=(i=200*t-25500+256*(100-n)+510*r)>0?255:0:-100===n&&(i=128),s[t]=i>255?255:i<0?0:i;return this._contrastCache={contrastOffset:e,brightnessOffset:l,lut:s},s}}}));