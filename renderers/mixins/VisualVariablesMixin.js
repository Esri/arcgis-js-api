/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{reader as s}from"../../core/accessorSupport/decorators/reader.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{writer as e}from"../../core/accessorSupport/decorators/writer.js";import{collectField as t,collectArcadeFieldNames as o}from"../../layers/support/fieldUtils.js";import l from"../visualVariables/ColorVariable.js";import u from"../visualVariables/OpacityVariable.js";import p from"../visualVariables/RotationVariable.js";import V from"../visualVariables/SizeVariable.js";import c from"../visualVariables/VisualVariable.js";import n from"../visualVariables/VisualVariableFactory.js";const b={base:c,key:"type",typeMap:{opacity:u,color:l,rotation:p,size:V}},v=l=>{let u=class extends l{constructor(){super(...arguments),this._vvFactory=new n}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,s){return this._vvFactory.readVariables(r,a,s)}writeVisualVariables(r,a,s,i){a[s]=this._vvFactory.writeVariables(r,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const r of this.visualVariables)if(r.arcadeRequired)return!0;return!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){const s=this.visualVariables;return s?s.filter((s=>s.type===r&&("string"==typeof a?s.target===a:!1!==a||!s.target))):[]}async collectVVRequiredFields(r,a){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&t(r,a,i.field),i.normalizationField&&t(r,a,i.normalizationField),i.valueExpression&&await o(r,a,i.valueExpression))}};return r([a({types:[b],value:null,json:{write:!0}})],u.prototype,"visualVariables",null),r([s("visualVariables",["visualVariables","rotationType","rotationExpression"])],u.prototype,"readVisualVariables",null),r([e("visualVariables")],u.prototype,"writeVisualVariables",null),u=r([i("esri.renderers.mixins.VisualVariablesMixin")],u),u};export{v as VisualVariablesMixin};