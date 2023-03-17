/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Clonable","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","./geotriggersInfo/support/geotriggerTypes"],(function(e,r,o,s,t,c,i,p,n){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).geotriggers=null,o}return e._inheritsLoose(o,r),o}(o.ClonableMixin(s.JSONSupport));r.__decorate([t.property({types:[n.types],json:{write:{isRequired:!0}}})],u.prototype,"geotriggers",void 0),u=r.__decorate([p.subclass("esri.webdoc.GeotriggersInfo")],u);return u}));
