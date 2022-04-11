/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./GPMessage"],(function(e,r,s,o,t,c,p,n,a){"use strict";const i=new s.JSONMap({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let u=function(r){function s(e){var s;return(s=r.call(this,e)||this).type=null,s}return e._inheritsLoose(s,r),s}(a);r.__decorate([o.property({type:String,json:{read:i.read,write:i.write}})],u.prototype,"type",void 0),u=r.__decorate([n.subclass("esri.rest.support.NAMessage")],u);return u}));
