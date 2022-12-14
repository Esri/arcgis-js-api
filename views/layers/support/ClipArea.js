/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(r,e,s,o,t,c,p){"use strict";let i=function(e){function s(){return e.apply(this,arguments)||this}return r._inheritsLoose(s,e),r._createClass(s,[{key:"version",get:function(){return this.commitVersionProperties(),(this._get("version")||0)+1}}]),s}(s.JSONSupport);e.__decorate([o.property({readOnly:!0})],i.prototype,"version",null),i=e.__decorate([p.subclass("esri.views.layers.support.ClipArea")],i);return i}));
