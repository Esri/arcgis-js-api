/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Basemap","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass"],(function(e,r,s,o,t,c,a,p,n){"use strict";const u=t.ofType(s);let l=function(r){function s(e){var s;return(s=r.call(this,e)||this).basemaps=new u,s}return e._inheritsLoose(s,r),s.prototype.refresh=function(){},e._createClass(s,[{key:"state",get:function(){return"ready"}}]),s}(o);r.__decorate([c.property({type:u})],l.prototype,"basemaps",void 0),r.__decorate([c.property({readOnly:!0})],l.prototype,"state",null),l=r.__decorate([n.subclass("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],l);return l}));
