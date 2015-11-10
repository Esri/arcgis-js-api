define(["dojo/_base/array","dojo/_base/lang","dojo/_base/Deferred","dojo/has","../kernel","../config","../deferredUtils","./Polyline","./Polygon","./webMercatorUtils","./jsonUtils"],function(e,r,n,t,a,i,o,s,f,c,u){function l(e,r){return Math.ceil((e-r)/(2*r))}function h(e,r){var n,t,a,i=e.paths||e.rings,o=i.length;for(n=0;o>n;n++){var s=i[n];for(a=s.length,t=0;a>t;t++){var f=e.getPoint(n,t);e.setPoint(n,t,f.offset(r,0))}}return e}function p(r,n){if(!(r instanceof s||r instanceof f)){var t="_straightLineDensify: the input geometry is neither polyline nor polygon";throw console.error(t),new Error(t)}var a,i=r instanceof s,o=i?r.paths:r.rings,c=[];return e.forEach(o,function(e){c.push(a=[]),a.push([e[0][0],e[0][1]]);var r,t,i,o,s,f,u,l,h,p,g,d;for(s=0;s<e.length-1;s++){if(r=e[s][0],t=e[s][1],i=e[s+1][0],o=e[s+1][1],u=Math.sqrt((i-r)*(i-r)+(o-t)*(o-t)),l=(o-t)/u,h=(i-r)/u,p=u/n,p>1){for(f=1;p-1>=f;f++){var v=f*n;g=h*v+r,d=l*v+t,a.push([g,d])}var m=(u+Math.floor(p-1)*n)/2;g=h*m+r,d=l*m+t,a.push([g,d])}a.push([i,o])}}),i?new s({paths:c,spatialReference:r.spatialReference}):new f({rings:c,spatialReference:r.spatialReference})}function g(e,r,n){var t=1e6;if(r){var a=p(e,t);e=c.webMercatorToGeographic(a,!0)}return n&&(e=h(e,n)),e}function d(e,r,n){var t,a=e.x||e[0];return a>r?(t=l(a,r),e.x?e=e.offset(-2*t*r,0):e[0]=a+-2*t*r):n>a&&(t=l(a,n),e.x?e=e.offset(-2*t*n,0):e[0]=a+-2*t*n),e}function v(r,n){var t=-1;return e.forEach(n.cutIndexes,function(a,i){var o=n.geometries[i],s=o.rings||o.paths;e.forEach(s,function(r,n){e.some(r,function(e){if(e[0]<180)return!0;var t,a,i=0,s=r.length;for(t=0;s>t;t++)a=r[t][0],i=a>i?a:i;i=Number(i.toFixed(9));var f,c=l(i,180),u=-360*c,h=r.length;for(f=0;h>f;f++){var p=o.getPoint(n,f);o.setPoint(n,f,p.offset(u,0))}return!0})}),a===t?o.rings?e.forEach(o.rings,function(e){r[a]=r[a].addRing(e)}):e.forEach(o.paths,function(e){r[a]=r[a].addPath(e)}):(t=a,r[a]=o)}),r}function m(r,t,a,o){var p=new n;p.addCallbacks(a,o),t=t||i.defaults.geometryService;var m,y,x,b,_,E,w,k,M=[],O=[],j=0;e.forEach(r,function(r){if(!r)return void M.push(r);if(m||(m=r.spatialReference,y=m._getInfo(),x=m._isWebMercator(),b=x?20037508.342788905:180,_=x?-20037508.342788905:-180,E=x?102100:4326,w=new s({paths:[[[b,_],[b,b]]],spatialReference:{wkid:E}}),k=new s({paths:[[[_,_],[_,b]]],spatialReference:{wkid:E}})),!y)return void M.push(r);var n=u.fromJson(r.toJson()),t=r.getExtent();if("point"===r.type)M.push(d(n,b,_));else if("multipoint"===r.type)n.points=e.map(n.points,function(e){return d(e,b,_)}),M.push(n);else if("extent"===r.type){var a=t._normalize(null,null,y);M.push(a.rings?new f(a):a)}else if(t){var i=l(t.xmin,_),o=2*i*b;n=0===o?n:h(n,o),t=t.offset(o,0),t.intersects(w)&&t.xmax!==b?(j=t.xmax>j?t.xmax:j,n=g(n,x),O.push(n),M.push("cut")):t.intersects(k)&&t.xmin!==_?(j=2*t.xmax*b>j?2*t.xmax*b:j,n=g(n,x,360),O.push(n),M.push("cut")):M.push(n)}else M.push(n)});for(var C=new s,P=l(j,b),R=-90,D=P;P>0;){var T=-180+360*P;C.addPath([[T,R],[T,-1*R]]),R=-1*R,P--}return O.length>0&&D>0?t?t.cut(O,C,function(n){O=v(O,n);var a=[];e.forEach(M,function(e,n){if("cut"===e){var t=O.shift();r[n].rings&&r[n].rings.length>1&&t.rings.length>=r[n].rings.length?(M[n]="simplify",a.push(t)):M[n]=x===!0?c.geographicToWebMercator(t):t}}),a.length>0?t.simplify(a,function(r){e.forEach(M,function(e,n){"simplify"===e&&(M[n]=x===!0?c.geographicToWebMercator(r.shift()):r.shift())}),p.callback(M)},function(e){p.errback(e)}):p.callback(M)},function(e){p.errback(e)}):p.errback(new Error("esri.geometry.normalizeCentralMeridian: 'geometryService' argument is missing.")):(e.forEach(M,function(e,r){if("cut"===e){var n=O.shift();M[r]=x===!0?c.geographicToWebMercator(n):n}}),p.callback(M)),p}function y(n,t,a,i){var o,s=!1;r.isObject(n)&&n&&(r.isArray(n)?n.length&&(o=n[0]&&n[0].declaredClass,o&&-1!==o.indexOf("Graphic")?(n=e.map(n,function(e){return e.geometry}),s=n.length?!0:!1):o&&-1!==o.indexOf("esri.geometry.")&&(s=!0)):(o=n.declaredClass,o&&-1!==o.indexOf("FeatureSet")?(n=e.map(n.features||[],function(e){return e.geometry}),s=n.length?!0:!1):o&&-1!==o.indexOf("esri.geometry.")&&(s=!0))),s&&t.push({index:a,property:i,value:n})}function x(n,t){var a=[];return e.forEach(t,function(t){var i,o=t.i,s=n[o],f=t.p;if(r.isObject(s)&&s)if(f)if("*"===f[0])for(i in s)s.hasOwnProperty(i)&&y(s[i],a,o,i);else e.forEach(f,function(e){y(r.getObject(e,!1,s),a,o,e)});else y(s,a,o)}),a}function b(n,t){var a=0,i={};return e.forEach(t,function(e){var t=e.index,o=e.property,s=e.value,f=s.length||1,c=n.slice(a,a+f);r.isArray(s)||(c=c[0]),a+=f,delete e.value,o?(i[t]=i[t]||{},i[t][o]=c):i[t]=c}),i}function _(t){var a=r.isObject(t)?t.prototype:r.getObject(t+".prototype");e.forEach(a.__msigns,function(r){var t=a[r.n];a[r.n]=function(){var a,i=this,s=[],f=new n(o._dfdCanceller);for(r.f&&o._fixDfd(f),a=0;a<r.c;a++)s[a]=arguments[a];var c={dfd:f};s.push(c);var u,l,h=[];return i.normalization&&!i._isTable&&(u=x(s,r.a),e.forEach(u,function(e){h=h.concat(e.value)}),h.length&&(l=m(h))),l?(f._pendingDfd=l,l.addCallbacks(function(e){f.canceled||(c.assembly=b(e,u),f._pendingDfd=t.apply(i,s))},function(e){var n=i.declaredClass;n&&-1!==n.indexOf("FeatureLayer")?i._resolve([e],null,s[r.e],f,!0):i._errorHandler(e,s[r.e],f)})):f._pendingDfd=t.apply(i,s),f}})}var E={normalizeCentralMeridian:m,_foldCutResults:v,_prepareGeometryForCut:g,_offsetMagnitude:l,_pointNormalization:d,_updatePolyGeometry:h,_straightLineDensify:p,_createWrappers:_,_disassemble:x,_addToBucket:y,_reassemble:b};return t("extend-esri")&&r.mixin(r.getObject("geometry",!0,a),E),E});