// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!./templates/RFxJsonFileUploader.html"],(function(e,t,i,n,l){return e([t,i,n],{declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxJsonFileUploader",templateString:l,baseClass:"esri-rfx-json-file-uploader",value:"",fileExtSupported:[],constructor:function(){this.inherited(arguments)},postCreate:function(){this.fileText.value=this.value||"",this.fileExtSupported&&this.fileExtSupported.length>0&&(this.fileInput.accept="."+this.fileExtSupported.join(", ."))},_onFileTextChange:function(e){},_onFileInputChange:function(){if(this.fileInput.files&&!(this.fileInput.files.length<1)){var e=this.fileInput.files[0],t=new FileReader,i=e.name.toLowerCase();this._isFileExtSupported(i)&&(t.onload=function(t){var i=t.target.result;i&&(this.fileText.value=e.name,this.value=e.name,this.emit("change",{value:i}))}.bind(this),t.readAsText(e.blob||e.file||e))}},_isFileExtSupported:function(e){return this.fileExtSupported.some((function(t){return e.indexOf("."+t.toLowerCase())>0}))}})}));