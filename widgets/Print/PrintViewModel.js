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

define(["dojo/_base/lang","./FileLink","../../request","../../core/Accessor","../../core/Collection","../../core/Error","../../core/promiseUtils","../../geometry/Extent","../../Viewpoint","../../views/2d/viewpointUtils","../../tasks/PrintTask","../../tasks/support/PrintTemplate","../../tasks/support/PrintParameters"],function(e,t,i,r,n,a,s,l,o,c,u,d,p){var f={disabled:"disabled",ready:"ready"},v=6e4;return r.createSubclass({declaredClass:"esri.widgets.Print.PrintViewModel",constructor:function(){this.print=this.print.bind(this)},properties:{templates:{type:[d]},view:{},printServiceUrl:{value:null,type:String},_printTask:{dependsOn:["printServiceUrl"],get:function(){return new u(this.printServiceUrl,{updateDelay:this.updateDelay})}},state:{value:f.disabled,get:function(){return this.get("view.ready")?f.ready:f.disabled},dependsOn:["view.ready"],readOnly:!0},updateDelay:{value:1e3,type:Number},scale:{dependsOn:["view.scale"],type:Number,get:function(){return this.view.scale}},exportedLinks:{type:n.ofType(t),value:new n({})}},print:function(t,i){i||(i=this.getExtent(this.view.viewpoint,this.scale,this.view.size));var r=new p({view:this.view,template:t});return this._printTask.execute(e.mixin(r,{extent:i}))},addExportedLinks:function(e){var i=new t({name:e,url:"",state:"pending"});this.exportedLinks.add(i)},getPrintTemplatesFromService:function(){var e=this.printServiceUrl.toLowerCase().split("/"),t=e.indexOf("gpserver");return-1===t?s.reject("Can't fetch print templates information from provided URL"):i(this.printServiceUrl,{callbackParamName:"callback",query:{f:"json"},timeout:v}).then(function(e){var t=e&&e.data;this._printTask.mode=t.executionType.toLowerCase().indexOf("async")>-1?"async":"sync";var i=t&&t.parameters,r={};return i.forEach(function(e){var t,i=e.choiceList&&e.choiceList.slice();if(i&&i.length&&e.defaultValue&&(t=i.indexOf(e.defaultValue)),t>-1&&(i.splice(t,1),i.unshift(e.defaultValue)),"Format"===e.name)r.format={defaultValue:e.defaultValue,choiceList:i};else if("Layout_Template"===e.name){i=i.filter(function(e){return"map_only"!==e.toLowerCase()});var n,a;i.some(function(e,t){var i=e.toLowerCase();return i.indexOf("letter")>-1&&i.indexOf("landscape")>-1?(n=t,!0):i.indexOf("a4")>-1&&i.indexOf("landscape")>-1?(n=t,!1):!1}),n&&(a=i[n],i.splice(n,1),i.unshift(a)),r.layout={defaultValue:i&&i[0]||e.defaultValue,choiceList:i}}}),r}.bind(this),function(e){return s.reject(new a("fetching-print-templates-info-error",e))})},getExtent:function(e,t,i){return c.getExtent(new l,new o({scale:t,targetGeometry:e.targetGeometry}),i)}})});