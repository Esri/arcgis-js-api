/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./directionsUtils","./RouteSection"],(function(e,t,r,o,s,c,n,i,u,a){"use strict";let p=function(t){function r(e){var r;return(r=t.call(this,e)||this).routePath=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o._createSections=function(e){const t=(e=this._filterDuplicateStops(e)).map(((e,t)=>u.getAssociatedStop(e)?t:-1)).filter((e=>e>-1));return t.map(((r,o)=>{const s=u.getAssociatedStop(e[r]).attributes.Name,c=o===t.length-1?[]:e.slice(t[o]+1,t[o+1]);return new a({name:s,maneuvers:c,open:0===o})}))},o._filterDuplicateStops=function(e){let t;return e.filter((e=>{const r=u.getAssociatedStop(e),o=r===t;return t=r,!r||!o}))},e._createClass(r,[{key:"sections",get:function(){const e=this.routePath;return e?this._createSections(e):[]}}]),r}(r);return t.__decorate([o.property()],p.prototype,"routePath",void 0),t.__decorate([o.property({readOnly:!0})],p.prototype,"sections",null),p=t.__decorate([i.subclass("esri.widgets.Directions.support.RouteSections")],p),p}));
