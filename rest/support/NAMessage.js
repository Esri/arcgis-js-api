/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./GPMessage"],(function(e,r,s,t,o,c,p,n){"use strict";const a=new s.JSONMap({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let i=function(r){function s(e){var s;return(s=r.call(this,e)||this).type=null,s}return e._inheritsLoose(s,r),s}(n);r.__decorate([t.property({type:String,json:{read:a.read,write:a.write}})],i.prototype,"type",void 0),i=r.__decorate([p.subclass("esri.rest.support.NAMessage")],i);return i}));
