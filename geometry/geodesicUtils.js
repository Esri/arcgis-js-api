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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","./Point","./Polyline","./Polygon"],(function(e,a,r,t,s,i,n,o){var h={esriMeters:1,esriKilometers:1e3,esriYards:.9144,esriFeet:.3048,esriMiles:1609.344,esriNauticalMiles:1852,esriInches:.0254,esriDecimeters:.1,esriCentimeters:.01,esriMillimeters:.001,esriSquareMeters:1,esriSquareKilometers:1e6,esriSquareYards:.83612736,esriSquareFeet:.09290304,esriSquareMiles:2589988.110336,esriAcres:4046.8564224,esriHectares:1e4,esriAres:100,esriSquareInches:64516e-8,esriSquareMillimeters:1e-6,esriSquareCentimeters:1e-4,esriSquareDecimeters:.01},u=Math.PI/180,c={4326:{a:6378137,b:6356752.31424518,f:1/298.257223563,eSq:.006694379990197414,radius:6371008.771415059},104900:{a:2439700,b:2439700,f:0,eSq:0,radius:2439700},104901:{a:6051e3,b:6051e3,f:0,eSq:0,radius:6051e3},104902:{a:6051800,b:6051800,f:0,eSq:0,radius:6051800},104903:{a:1737400,b:1737400,f:0,eSq:0,radius:1737400},104904:{a:3393400,b:3375730,f:1/192.04301075,eSq:.01038722,radius:3387510},104905:{a:3396190,b:3376200,f:1/169.89444722,eSq:.01173737,radius:3389526.6666666665},104906:{a:6200,b:6200,f:0,eSq:0,radius:6200},104907:{a:11100,b:11100,f:0,eSq:0,radius:11100},104912:{a:2409300,b:2409300,f:0,eSq:0,radius:2409300},104915:{a:1562090,b:1562090,f:0,eSq:0,radius:1562090},104916:{a:2632345,b:2632345,f:0,eSq:0,radius:2632345},104918:{a:1821460,b:1821460,f:0,eSq:0,radius:1821460},104929:{a:249400,b:249400,f:0,eSq:0,radius:249400},104943:{a:2575e3,b:2575e3,f:0,eSq:0,radius:2575e3},104971:{a:3396190,b:3396190,f:0,eSq:0,radius:3396190},104972:{a:47e4,b:47e4,f:0,eSq:0,radius:47e4},104973:{a:255e3,b:255e3,f:0,eSq:0,radius:255e3},104974:{a:2439400,b:2439400,f:0,eSq:0,radius:2439400}};function f(e){return!!(e&&e.wkid&&c[e.wkid])}function M(e){return f(e)?c[e.wkid]:c[4326]}function d(e){var a,r=e.spatialReference,t=M(r),s=t.a,n=t.eSq,o=Math.sqrt(n),h=s*e.x*u,c=Math.sin(e.y*u);n>0?a=s*((1-n)*(c/(1-n*(c*c))-1/(2*o)*Math.log((1-o*c)/(1+o*c))))*.5:a=s*c;return new i(h,a,r)}function l(e,a,r,t,s){for(var n,o,h,c=M(s),f=c.a,d=c.b,l=c.f,q=Math.sin(r),S=Math.cos(r),v=(1-l)*Math.tan(e),b=1/Math.sqrt(1+v*v),g=v*b,p=Math.atan2(v,S),y=b*q,m=y*y,w=1-m,x=w*(f*f-d*d)/(d*d),D=1+x/16384*(4096+x*(x*(320-175*x)-768)),E=x/1024*(256+x*(x*(74-47*x)-128)),R=t/(d*D),_=2*Math.PI;Math.abs(R-_)>1e-12;)h=Math.cos(2*p+R),_=R,R=t/(d*D)+E*(n=Math.sin(R))*(h+E/4*((o=Math.cos(R))*(2*h*h-1)-E/6*h*(4*n*n-3)*(4*h*h-3)));var P=g*n-b*o*S,A=Math.atan2(g*o+b*n*S,(1-l)*Math.sqrt(m+P*P)),I=Math.atan2(n*q,b*o-g*n*S),j=l/16*w*(4+l*(4-3*w));return new i((a+(I-(1-j)*l*y*(R+j*n*(h+j*o*(2*h*h-1)))))/u,A/u,s)}function q(e,a,r,t,s){var i,n,o,h,u,c,f,d,l,q,S=M(s),v=S.a,b=S.b,g=S.f,p=t-a,y=Math.atan((1-g)*Math.tan(e)),m=Math.atan((1-g)*Math.tan(r)),w=Math.sin(y),x=Math.cos(y),D=Math.sin(m),E=Math.cos(m),R=p,_=1e3;do{if(f=Math.sin(R),d=Math.cos(R),0===(o=Math.sqrt(E*f*(E*f)+(x*D-w*E*d)*(x*D-w*E*d))))return 0;u=w*D+x*E*d,c=Math.atan2(o,u),h=u-2*w*D/(n=1-(l=x*E*f/o)*l),isNaN(h)&&(h=0),i=R,R=p+(1-(q=g/16*n*(4+g*(4-3*n))))*g*l*(c+q*o*(h+q*u*(2*h*h-1)))}while(Math.abs(R-i)>1e-12&&--_>0);if(0===_){var P=S.radius,A=Math.acos(Math.sin(e)*Math.sin(r)+Math.cos(e)*Math.cos(r)*Math.cos(t-a))*P,I=t-a,j=Math.sin(I)*Math.cos(r),k=Math.cos(e)*Math.sin(r)-Math.sin(e)*Math.cos(r)*Math.cos(I);return{azimuth:Math.atan2(j,k),geodesicDistance:A}}var z=n*(v*v-b*b)/(b*b),N=z/1024*(256+z*(z*(74-47*z)-128)),C=b*(1+z/16384*(4096+z*(z*(320-175*z)-768)))*(c-N*o*(h+N/4*(u*(2*h*h-1)-N/6*h*(4*o*o-3)*(4*h*h-3))));return{azimuth:Math.atan2(E*Math.sin(R),x*D-w*E*Math.cos(R)),geodesicDistance:C,reverseAzimuth:Math.atan2(x*Math.sin(R),x*D*Math.cos(R)-w*E)}}function S(a,r){if(!(a instanceof n||a instanceof o)){var t="_geodesicDensify: the input geometry is neither polyline nor polygon";throw console.error(t),new Error(t)}var s=a.spatialReference,i=M(s).radius/1e4;r<i&&(r=i);var h,c=a instanceof n,f=c?a.paths:a.rings,d=[];return e.forEach(f,(function(e){var a,t,i,n,o,c;for(d.push(h=[]),h.push([e[0][0],e[0][1]]),a=e[0][0]*u,t=e[0][1]*u,o=0;o<e.length-1;o++)if(i=e[o+1][0]*u,n=e[o+1][1]*u,a!==i||t!==n){var f=q(t,a,n,i,s),M=f.azimuth,S=f.geodesicDistance,v=S/r;if(v>1){for(c=1;c<=v-1;c++){var b=l(t,a,M,c*r,s);h.push([b.x,b.y])}var g=l(t,a,M,(S+Math.floor(v-1)*r)/2,s);h.push([g.x,g.y])}var p=l(t,a,M,S,s);h.push([p.x,p.y]),a=p.x*u,t=p.y*u}})),c?new n({paths:d,spatialReference:s}):new o({rings:d,spatialReference:s})}var v={isSupported:f,getSpheroidInfo:M,geodesicDensify:S,geodesicLengths:function(a,r){var t=[];return e.forEach(a,(function(a,s){var i=0,n=a.spatialReference;e.forEach(a.paths,(function(e,a){var r,t,s,o,h,c=0;for(r=1;r<e.length;r++)t=e[r-1][0]*u,s=e[r][0]*u,(o=e[r-1][1]*u)===(h=e[r][1]*u)&&t===s||(c+=q(o,t,h,s,n).geodesicDistance);i+=c})),i/=h[r],t.push(i)})),t},geodesicAreas:function(a,r){var t=[],s=[];return e.forEach(a,(function(e,a){var r=.0015696101447650193*M(e.spatialReference).radius;t.push(S(e,r))})),e.forEach(t,(function(a,t){var n=0,o=a.spatialReference;e.forEach(a.rings,(function(e,a){var r,t=d(new i(e[0][0],e[0][1],o)),s=d(new i(e[e.length-1][0],e[e.length-1][1],o)),h=s.x*t.y-t.x*s.y;for(r=0;r<e.length-1;r++)t=d(new i(e[r+1][0],e[r+1][1],o)),h+=(s=d(new i(e[r][0],e[r][1],o))).x*t.y-t.x*s.y;n+=h})),n/=h[r],s.push(n/-2)})),s},_unitsDictionary:h,_toEqualAreaPoint:d,_directGeodeticSolver:l,_inverseGeodeticSolver:q};return r("extend-esri")&&a.mixin(a.getObject("geometry",!0,t),v),v}));