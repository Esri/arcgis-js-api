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

define(["dojo/_base/lang","./Property","./PropertyNotifier","./merge"],function(e,r,t,n){var i=function(e){return Object.create(void 0===e?null:e)},o=/^_([a-zA-Z0-9]+)(Getter|Setter|Reader)$/,a=/^_(set|get)([a-zA-Z0-9]+)Attr$/,s=function(e){return e&&null!=u(e)},p=function(e){var r=e._meta?e:e.constructor;return r},u=function(e){return p(e)._meta},c=function(e){return null!=p(e)._esriMeta},f=function(e){return y(e).classMetadata.properties},l=Object.prototype.hasOwnProperty,d=function(e){if(!s(e))return null;var t=y(e),p=t.mixin;if(p)return p;var u=e.prototype,c=l.call(u,"classMetadata")?u.classMetadata:i();p=t.mixin={declaredClass:u.declaredClass,properties:c.properties?n(i(),c.properties):i(),reader:c.reader?n(i(),c.reader):i(),notifiers:[]};var f=p.properties,d=function(e){return e=e.split(".")[0],f[e]||(f[e]={}),f[e]};return Object.getOwnPropertyNames(u).forEach(function(e){var r,t,n,i,s=u[e];(r=o.exec(e))?(t=r[1],n=r[2]):(r=a.exec(e))&&(t=r[2][0].toLowerCase()+r[2].substr(1),n=r[1]+"ter"),t&&n&&(i=d(t),i[n.toLowerCase()]=s)}),v(e),Object.getOwnPropertyNames(f).forEach(function(e){w(u,e)&&(f[e].value=u[e])}),p.properties=Object.getOwnPropertyNames(f).reduce(function(e,t){return e[t]=new r(t,f[t]),e},{}),p},v=function(e){var n,o,a,s,p,u,c,f,l=y(e),d=l.mixin,v=d.properties,O=i();if(v){for(o in v)if(n=v[o].dependsOn)for(f=0;a=n[f];f++)O[a]?-1===O[a].indexOf(o)&&O[a].push(o):O[a]=[o];p=[];for(o in O){for(s=[],u=i(),p.push(o);p.length;)a=p.shift(),u[a]||(u[a]=!0,s.push(a),c=O[a],c&&Array.prototype.push.apply(p,c));if(s.shift(),o.indexOf(".")>-1&&(d.notifiers||(d.notifiers=[]),d.notifiers.push(new t(o,s)),o=o.split(".")[0]),v[o])v[o].chain=s;else{var h=g(e,o);h?y(h).mixin.properties[o]||(y(h).mixin.properties[o]=new r(o,{value:m(e,o),chain:s})):d.properties[o]=new r(o,{chain:s})}}}},y=function(e){if(!s(e))return null;var t=p(e),i=t._esriMeta;if(i)return i;i=t._esriMeta={};var o,a=u(e).bases,c=i.mixins=[];for(l=a.length-1;l>=0;l--)o=d(a[l]),o&&c.unshift(o);var f,l,v=i.classMetadata={declaredClass:t.prototype.declaredClass,notifiers:[],properties:{},reader:{}},y=v.properties;for(l=c.length-1;l>=0;l--){o=c[l];for(f in o.properties)x(t,f),y[f]?y[f].mixIn(o.properties[f]):(y[f]=new r(f,o.properties[f]),!y[f].hasOwnProperty("value")&&g(t,f)&&(y[f].value=m(t,f)),Object.defineProperty(t.prototype,f,y[f].getDescriptor()));v.notifiers=v.notifiers.concat(i.mixins[l].notifiers),v.reader=n(v.reader,i.mixins[l].reader)}return i},O=function(e,r){if(e){var t=Object.getOwnPropertyDescriptor(e.prototype,r);return t?t.value:e.prototype[r]}},h=function(e){var r=y(e).classMetadata.notifiers;return r?r.map(function(e){return e.install(this)},e):[]},m=function(e,r){if(l.call(e,r))return e[r];var t=g(e,r);return O(t,r)},w=function(e,r){var t;return l.call(e,r)&&(!(t=Object.getOwnPropertyDescriptor(e,r))||l.call(t,"value"))},g=function(e,r){for(var t,n,i,o=u(e),a=o.bases,s=0,p=a.length;p>s;s++){if(t=a[s],n=y(t),i=n&&n.mixin.properties[r],w(t.prototype,r))return t;if(i&&l.call(i,"value"))return t}return null},x=function(e,t){var n,i=p(e),o=y(i).classMetadata.properties,a=g(i,t)||i,s=a?y(a).mixin.properties:{},u=s[t];return a&&!u&&(u=s[t]=new r(t,{value:O(a,t)}),y(a).mixin.properties[t]=new r(t,u),n=y(a).classMetadata.properties,n[t]?n[t].value=u.value:(n[t]=u,Object.defineProperty(a.prototype,t,u.getDescriptor()))),i!==a&&(o[t]?o[t].value=u.value:(o[t]=new r(t,u),Object.defineProperty(i.prototype,t,u.getDescriptor()))),u};return e.mixin(function(e){return y(e)},{getProperties:f,isIntrospected:c,getPropertyOwnerValue:m,getPropertyOwner:g,installPropertyNotifiers:h,defineProperty:x})});