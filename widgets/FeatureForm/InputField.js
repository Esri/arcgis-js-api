/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../intl","../../core/Accessor","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../layers/support/CodedValueDomain","../../layers/support/domains","../../layers/support/fieldUtils","../../intl/substitute"],(function(e,t,i,r,o,n,l,a,u,s,d,p,c){"use strict";const y={type:"number"},f={type:"number",intlOptions:{notation:"scientific"}},_={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}};let h=function(t){function i(e){var i;return(i=t.call(this,e)||this).arcade=null,i.config=null,i.feature=null,i.field=null,i.initialFeature=null,i.layer=null,i.description=null,i.editorType=null,i.error=null,i.format=null,i.group=null,i.hint=null,i.messages=null,i.name=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r._isDomainCompatible=function(e){const{field:t}=this;if("coded-value"===(null==e?void 0:e.type)){const i=typeof e.codedValues[0].code;if("string"===i&&p.isStringField(t)||"number"===i&&p.isNumericField(t))return!0}return!!("range"===(null==e?void 0:e.type)&&p.isNumericField(t)||p.isDateField(t))},r._validate=function(){const{domain:e,field:t,initialFeature:i,minLength:r,required:o,type:n,valid:l,value:a}=this,u=o&&null===a,s=void 0!==l;return!u&&i.getAttribute(t.name)===a&&s?null:"text"===n&&r>-1&&"string"==typeof a&&a.length<r?"length-validation-error::too-short":e?null!==a||o?d.validateDomainValue(e,a):null:u?p.TypeValidationError.INVALID_TYPE:p.validateFieldValue(t,a)},r._shownByDefault=function(){var e;const t=null==(e=this.field)?void 0:e.type;return"oid"!==t&&"global-id"!==t&&!this._isGeometryField()},r._isEditorField=function(){return p.getFeatureEditFields(this.layer).indexOf(this.name)>-1},r._isGeometryField=function(){return p.getFeatureGeometryFields(this.layer).indexOf(this.name)>-1},r._toErrorMessage=function(){const{domain:e,field:t,messages:i,minLength:r,value:o,required:n,type:l}=this,a=this.error;if(n&&null===o)return i.validationErrors.cannotBeNull;if(a===d.DomainValidationError.VALUE_OUT_OF_RANGE||a===p.NumericRangeValidationError.OUT_OF_RANGE){const r=d.getDomainRange(e)||p.getFieldRange(t);return c.substitute(i.validationErrors.outsideRange,r,{format:{max:"date"===l?_:r.isInteger?y:f,min:"date"===l?_:r.isInteger?y:f}})}return a===d.DomainValidationError.INVALID_CODED_VALUE?i.validationErrors.invalidCodedValue:a===p.TypeValidationError.INVALID_TYPE?i.validationErrors.invalidType:"length-validation-error::too-short"===a?c.substitute(i.validationErrors.tooShort,{min:r}):null},e._createClass(i,[{key:"compiledFunc",get:function(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.visibilityExpression)}},{key:"compiledRequiredFunc",get:function(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.requiredExpression)}},{key:"evaluatedRequirement",get:function(){const e=this.compiledRequiredFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"evaluatedVisibility",get:function(){const e=this.compiledFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}},{key:"domain",get:function(){var e,t;const{typeIdField:i}=this.layer,r=i===this.name,o=null==(e=this.field)?void 0:e.domain;if(r&&!o)return new s({name:"__internal-type-based-coded-value-domain__",codedValues:this.layer.types.map((({id:e,name:t})=>({code:e,name:t})))});const{feature:n}=this,l=i&&this.layer.getFieldDomain(this.name,{feature:n})||o,a=null==(t=this.config)?void 0:t.domain;return this._isDomainCompatible(a)?a:l}},{key:"editable",get:function(){var e;return this.layer.capabilities.operations.supportsEditing&&this.field.editable&&!1!==(null==(e=this.config)?void 0:e.editable)}},{key:"errorMessage",get:function(){return this._toErrorMessage()}},{key:"includeTime",get:function(){var e;const t=null==(e=this.config)?void 0:e.includeTime;return void 0===t||t}},{key:"label",get:function(){var e;return(null==(e=this.config)?void 0:e.label)||this.field.alias||this.field.name}},{key:"maxLength",get:function(){var e,t;const i=-1;if("date"===this.type)return i;const r=null==(e=this.field)?void 0:e.length,o=null==(t=this.config)?void 0:t.maxLength;return!isNaN(o)&&o>=i&&(r===i||o<=r)?o:r}},{key:"minLength",get:function(){var e,t;const i=-1;if("date"===this.type)return i;const r=null==(e=this.field)?void 0:e.length,o=null==(t=this.config)?void 0:t.minLength;return!isNaN(o)&&o>=i&&(r===i||o<=r)?o:i}},{key:"required",get:function(){var e,t;if(!this.editable)return!1;if(!(null==(e=this.field)?void 0:e.nullable))return!0;if("boolean"==typeof this.evaluatedRequirement)return this.evaluatedRequirement;return!0===(null==(t=this.config)?void 0:t.required)}},{key:"type",get:function(){const{field:e}=this;return p.isNumericField(e)?"number":p.isStringField(e)?"text":p.isDateField(e)?"date":"unsupported"}},{key:"valid",get:function(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}},{key:"value",get:function(){return this._get("value")},set:function(e){this.notifyChange("evaluatedVisibility"),this._set("value",e)}},{key:"visible",get:function(){if(this._isEditorField())return!1;return"boolean"==typeof this.evaluatedVisibility?this.evaluatedVisibility:!!this.config||this._shownByDefault()}}]),i}(r);return t.__decorate([o.property()],h.prototype,"arcade",void 0),t.__decorate([o.property()],h.prototype,"compiledFunc",null),t.__decorate([o.property()],h.prototype,"compiledRequiredFunc",null),t.__decorate([o.property()],h.prototype,"config",void 0),t.__decorate([o.property()],h.prototype,"evaluatedRequirement",null),t.__decorate([o.property()],h.prototype,"evaluatedVisibility",null),t.__decorate([o.property()],h.prototype,"feature",void 0),t.__decorate([o.property()],h.prototype,"field",void 0),t.__decorate([o.property()],h.prototype,"initialFeature",void 0),t.__decorate([o.property()],h.prototype,"layer",void 0),t.__decorate([o.property({aliasOf:"config.description"})],h.prototype,"description",void 0),t.__decorate([o.property()],h.prototype,"domain",null),t.__decorate([o.property()],h.prototype,"editable",null),t.__decorate([o.property({aliasOf:"config.editorType"})],h.prototype,"editorType",void 0),t.__decorate([o.property({readOnly:!0})],h.prototype,"error",void 0),t.__decorate([o.property({dependsOn:["error","messages","value"]})],h.prototype,"errorMessage",null),t.__decorate([o.property({aliasOf:"config.format"})],h.prototype,"format",void 0),t.__decorate([o.property()],h.prototype,"group",void 0),t.__decorate([o.property({aliasOf:"config.hint"})],h.prototype,"hint",void 0),t.__decorate([o.property()],h.prototype,"includeTime",null),t.__decorate([o.property()],h.prototype,"label",null),t.__decorate([o.property()],h.prototype,"maxLength",null),t.__decorate([o.property()],h.prototype,"minLength",null),t.__decorate([o.property()],h.prototype,"messages",void 0),t.__decorate([o.property({aliasOf:"field.name"})],h.prototype,"name",void 0),t.__decorate([o.property()],h.prototype,"required",null),t.__decorate([o.property()],h.prototype,"type",null),t.__decorate([o.property()],h.prototype,"valid",null),t.__decorate([o.property({value:null})],h.prototype,"value",null),t.__decorate([o.property()],h.prototype,"visible",null),h=t.__decorate([u.subclass("esri.widgets.FeatureForm.InputField")],h),h}));
