/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../layers/support/fieldUtils","../visualVariables/ColorVariable","../visualVariables/OpacityVariable","../visualVariables/RotationVariable","../visualVariables/SizeVariable","../visualVariables/VisualVariable","../visualVariables/VisualVariableFactory"],(function(e,a,r,i,s,t,l,o,u,n,c,V,p,b,y,v,d){"use strict";const h={base:v,key:"type",typeMap:{opacity:p,color:V,rotation:b,size:y}},f=e=>{let s=function(e){function r(){var a;return(a=e.apply(this,arguments)||this)._vvFactory=new d,a}a._inheritsLoose(r,e);var i=r.prototype;return i.readVisualVariables=function(e,a,r){return this._vvFactory.readVariables(e,a,r)},i.writeVisualVariables=function(e,a,r,i){a[r]=this._vvFactory.writeVariables(e,i)},i.hasVisualVariables=function(e,a){return e?this.getVisualVariablesForType(e,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0},i.getVisualVariablesForType=function(e,a){const r=this.visualVariables;return r?r.filter((r=>r.type===e&&("string"==typeof a?r.target===a:!1!==a||!r.target))):[]},i.collectVVRequiredFields=function(){var e=a._asyncToGenerator((function*(e,a){let r=[];this.visualVariables&&(r=r.concat(this.visualVariables));for(const i of r)i&&(i.field&&c.collectField(e,a,i.field),i.normalizationField&&c.collectField(e,a,i.normalizationField),i.valueExpression&&(yield c.collectArcadeFieldNames(e,a,i.valueExpression)))}));function r(a,r){return e.apply(this,arguments)}return r}(),a._createClass(r,[{key:"visualVariables",set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}},{key:"arcadeRequiredForVisualVariables",get:function(){if(!this.visualVariables)return!1;for(const e of this.visualVariables)if(e.arcadeRequired)return!0;return!1}}]),r}(e);return r.__decorate([i.property({types:[h],value:null,json:{write:!0}})],s.prototype,"visualVariables",null),r.__decorate([o.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],s.prototype,"readVisualVariables",null),r.__decorate([n.writer("visualVariables")],s.prototype,"writeVisualVariables",null),s=r.__decorate([u.subclass("esri.renderers.mixins.VisualVariablesMixin")],s),s};e.VisualVariablesMixin=f,Object.defineProperty(e,"__esModule",{value:!0})}));
