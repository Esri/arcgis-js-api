// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","../core/Accessoire","../core/Collection","../processors/Filter"],function(t,r,e,o){var n=t([r],{declaredClass:"esri.processors.Pipeline",classMetadata:{properties:{output:{readOnly:!0},currentStep:{readOnly:!0}}},constructor:function(){this._workflow=[]},destroy:function(){for(var t,r,e,o,s,i=this._workflow.length-1;i>=0;i--)if(t=this._workflow[i],r=t.processor,e=r.input,r.isInstanceOf(n)?(r.destroy(),o=r.output):(o=[{processor:r,collection:r.output}],r.input=null),e&&t.parent&&(e.removeAll(),e=null),o&&t.children.length)for(var u=0,c=o.length;c>u;u++)s=o[u].collection,s=null;this._workflow.splice(0,this._workflow.length),this._currentStep=null,this.notifyChange("currentStep")},_workflow:null,_changeHandler:null,input:null,_inputSetter:function(t){return this._workflow.length&&(this._workflow[0].processor.input=t),t},_outputGetter:function(){var t,r,e=[];if(!this._workflow.length)return e;for(var n=0;n<this._workflow.length;n++)t=this._workflow[n],t.children.length||(r=t.processor,r.isInstanceOf(o)?e.push({collection:r.output,processor:r}):e=e.concat(t.processor.output));return e},_currentStep:null,_currentStepGetter:function(){return this._currentStep},pipe:function(t){if(!t||!t.isInstanceOf(o))throw new TypeError("Invalid value for 'filter' argument");var r,n,s;try{s={processor:t,children:[],parent:null},n=this.currentStep,n?(r=n.processor.output,t.input=r,n.children.push(s),s.parent=n):this.input?s.processor.input=this.input:s.processor.input&&(this.input=s.processor.input),s.processor.output=new e,this._currentStep=s,this.notifyChange("currentStep"),this._workflow.push(s)}catch(i){throw i}return this},branch:function(){var t,r=new n,e=this.currentStep;return e||(this.pipe(new o),e=this.currentStep),t={processor:r,parent:this.currentStep,children:[]},t.processor.input=e.processor.output,e.children.push(t),this._workflow.push(t),r}});return n});