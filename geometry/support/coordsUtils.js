// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define([],function(){var n=function(n,r){var t=r[0]-n[0],e=r[1]-n[1],i=0;return n.length>1&&r.length>1&&(i=n[2]-r[2]),Math.sqrt(t*t+e*e+i*i)},r=function(n,r,t){var e=n[0]+t*(r[0]-n[0]),i=n[1]+t*(r[1]-n[1]);return n.length>2&&r.length>2?[e,i,n[2]+t*(r[2]-n[2])]:[e,i]},t=function(n,t){return r(n,t,.5)},e=function(n,r,t){for(var e,i,l,u,a=t[0],h=t[1],f=0,o=0,g=r.length;g>o;o++)f++,f===g&&(f=0),e=r[o][0],i=r[f][0],l=r[o][1],u=r[f][1],(h>l&&u>=h||h>u&&l>=h)&&a>e+(h-l)/(u-l)*(i-e)&&(n=!n);return n},i=function(n,r){if(!n)return!1;if(!Array.isArray(n[0][0]))return e(!1,n,r);for(var t=!1,i=0,l=n.length;l>i;i++)t=e(t,n[i],r);return t},l=function(n,r,t){for(var e,i,l,u,a,h,f,o,g,m=0,s=0,c=0,y=0,p=0,v=0,x=r.length-1;x>v;v++)e=r[v],i=e[0],l=e[1],u=e[2],a=r[v+1],h=a[0],f=a[1],o=a[2],g=i*f-h*l,y+=g,m+=(i+h)*g,s+=(l+f)*g,t&&e.length>2&&a.length>2&&(g=i*o-h*u,c+=(u+o)*g,p+=g);return y>0&&(y*=-1),p>0&&(p*=-1),y?(n[0]=m,n[1]=s,n[2]=.5*y,t?(n[3]=c,n[4]=.5*p):n.length=3):n.length=0,n},u=function(r,e){for(var i,l,u,a,h=0,f=0,o=0,g=0,m=e?[0,0,0]:[0,0],s=e?[0,0,0]:[0,0],c=0,y=r.length;y-1>c;c++)i=r[c],l=r[c+1],i&&l&&(m[0]=i[0],m[0]=i[1],s[0]=l[0],s[0]=l[1],e&&i.length>2&&l.length>2&&(m[2]=i[2],s[2]=l[2]),a=n(m,s),a&&(h+=a,u=t(i,l),f+=a*u[0],o+=a*u[1],e&&u.length>2&&(g+=a*u[2])));return h>0?e?[f/h,o/h,g/h]:[f/h,o/h]:r.length?r[0]:null},a=function(n,r,t){for(var e,i,a=[],h=0,f=r.length;f>h;h++)e=l([],r[h],t),e.length&&a.push(e);if(a.sort(function(n,r){var e=n[2]-r[2];return 0===e&&t&&(e=n[4]-r[4]),e}),t?n.length=3:n.length=2,a.length)i=6*a[0][2],n[0]=a[0][0]/i,n[1]=a[0][1]/i,t&&(n[2]=a[0][3]/(6*a[0][4]));else{var o=r[0]&&r[0].length?u(r[0]):null;o&&(n[0]=o[0],n[1]=o[1],t&&o.length>2&&(n[2]=o[2]))}return n},h=function(n){for(var r=0,t=0,e=t+1,i=n.length;i>t;t++,e+=1%i)r+=n[t][0]*n[e][1]-n[e][0]*n[t][1];return 0>=.5*r},f=function(n){if(!n)return null;if(Array.isArray(n))return n;var r=n.hasZ,t=n.hasM;if("point"===n.type)return t&&r?[n.x,n.y,n.z,n.m]:r?[n.x,n.y,n.z]:t?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.path.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var e=n.clone().normalize();return e?(r=t=!1,e.map(function(n){n.hasZ&&(r=!0),n.hasM&&(t=!0)}),e.map(function(n){var e=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(r&&n.hasZ)for(var i=.5*(n.zmax-n.zmin),l=0;l<e.length;l++)e[l].push(i);if(t&&n.hasM){var u=.5*(n.mmax-n.mmin);for(l=0;l<e.length;l++)e[l].push(u)}return e})):null}return null};return{fromGeom:f,contains:i,centroid:a,isClockwise:h}});