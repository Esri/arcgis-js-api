// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["../core/Accessor","../core/Collection","../processors/Filter"],function(t,r,e){var o=t.createSubclass({declaredClass:"esri.processors.Pipeline",constructor:function(){this._workflow=[]},destroy:function(){for(var t,r,e,n,s,i=this._workflow.length-1;i>=0;i--)if(t=this._workflow[i],r=t.processor,e=r.input,r.isInstanceOf(o)?(r.destroy(),n=r.output):(n=[{processor:r,collection:r.output}],r.input=null),e&&t.parent&&(e.removeAll(),e=null),n&&t.children.length)for(var u=0,c=n.length;c>u;u++)s=n[u].collection,s=null;this._workflow.splice(0,this._workflow.length),this._currentStep=null,this.notifyChange("currentStep")},_workflow:null,_changeHandler:null,_currentStep:null,properties:{input:{value:null,set:function(t){this._workflow.length&&(this._workflow[0].processor.input=t),this._set("input",t)}},output:{readOnly:!0,get:function(){var t,r,o=[];if(!this._workflow.length)return o;for(var n=0;n<this._workflow.length;n++)t=this._workflow[n],t.children.length||(r=t.processor,r.isInstanceOf(e)?o.push({collection:r.output,processor:r}):o=o.concat(t.processor.output));return o}},currentStep:{readOnly:!0,get:function(){return this._currentStep}}},pipe:function(t){if(!t||!t.isInstanceOf(e))throw new TypeError("Invalid value for 'filter' argument");var o,n,s;try{s={processor:t,children:[],parent:null},n=this.currentStep,n?(o=n.processor.output,t.input=o,n.children.push(s),s.parent=n):this.input?s.processor.input=this.input:s.processor.input&&(this.input=s.processor.input),s.processor.output=new r,this._currentStep=s,this.notifyChange("currentStep"),this._workflow.push(s)}catch(i){throw i}return this},branch:function(){var t,r=new o,n=this.currentStep;return n||(this.pipe(new e),n=this.currentStep),t={processor:r,parent:this.currentStep,children:[]},t.processor.input=n.processor.output,n.children.push(t),this._workflow.push(t),r}});return o});