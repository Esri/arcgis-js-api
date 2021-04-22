/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","./labelUtils"],(function(e,r,o,t,s,p,i,n,l,c,u,a,d,v){"use strict";var y;let _=y=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).expression=null,e.title=null,e.value=null,e}e._inheritsLoose(o,r);var t=o.prototype;return t.readExpression=function(e,r){return r.value?v.convertTemplatedStringToArcade(r.value):e},t.writeExpression=function(e,r,o){null!=this.value&&(e=v.convertTemplatedStringToArcade(this.value)),r[o]=e},t.clone=function(){return new y({expression:this.expression,title:this.title,value:this.value})},o}(d.JSONSupport);return r.__decorate([p.property({type:String,json:{write:{allowNull:!0}}})],_.prototype,"expression",void 0),r.__decorate([i.reader("expression",["expression","value"])],_.prototype,"readExpression",null),r.__decorate([l.writer("expression")],_.prototype,"writeExpression",null),r.__decorate([p.property({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],_.prototype,"title",void 0),r.__decorate([p.property({json:{read:!1,write:!1}})],_.prototype,"value",void 0),_=y=r.__decorate([n.subclass("esri.layers.support.LabelExpressionInfo")],_),_}));
