/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./CodedValue","./Domain"],(function(e,o,r,t,s,c,a,n,u,d,l){"use strict";var i;let p=i=function(o){function t(e){var r;return(r=o.call(this,e)||this).codedValues=null,r.type="coded-value",r}e._inheritsLoose(t,o);var s=t.prototype;return s.getName=function(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)))}return o},s.clone=function(){return new i({codedValues:r.clone(this.codedValues),name:this.name})},t}(l);return o.__decorate([t.property({type:[d.default],json:{write:!0}})],p.prototype,"codedValues",void 0),o.__decorate([n.enumeration({codedValue:"coded-value"})],p.prototype,"type",void 0),p=i=o.__decorate([u.subclass("esri.layers.support.CodedValueDomain")],p),p}));
