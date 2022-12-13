// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/declare","dojox/mvc/Templated","esri/tasks/geoenrichment/RingBuffer","esri/tasks/geoenrichment/DriveBuffer","esri/tasks/geoenrichment/DriveUnits","dojo/text!./templates/BufferOptions.html","dojo/i18n!esri/nls/jsapi","./NumberSpinner","dijit/form/Select"],(function(e,i,t,s,n,r,a){return e("esri.dijit.geoenrichment.BufferOptions",[i],{templateString:r,nls:a=a.geoenrichment.dijit.BufferOptions,geomType:"",_distRadius:null,_timeRadius:null,buildRendering:function(){this.inherited(arguments);var e=[];function i(i){e.push({value:i,label:a.units[i]})}i(n.MILES),i(n.KILOMETERS),i(n.FEET),i(n.METERS),this.unitsSelect.set("options",e),this._updateUI("Ring",1,n.MILES)},_setGeomTypeAttr:function(e){switch(e){case"point":this.radiusTr.style.display=this.studyAreaTr.style.display="";break;case"polyline":this.studyAreaTr.style.display="none",this.radiusTr.style.display="",this.radiusLabel.innerHTML=a.buffer;break;case"polygon":this.radiusTr.style.display=this.studyAreaTr.style.display="none",this.radiusLabel.innerHTML=a.buffer}this.geomType=e},_getBufferAttr:function(){var e=this._getRadius(),i=this.unitsSelect.get("value");switch(this.typeSelect.get("value")){case"Ring":return new t({radius:e,units:i});case"DriveTime":return new s({radius:e});case"DriveDistance":return new s({radius:e,units:i})}},_setBufferAttr:function(e){if(this._buffer!==e){var i,r=e.radii[0];if(e instanceof t)i="Ring",this._distRadius=r;else{if(!(e instanceof s))throw new Error("Unexpected buffer type");e.units==n.MINUTES?(i="DriveTime",this._timeRadius=r):(i="DriveDistance",this._distRadius=r)}this._updateUI(i,r,e.units)}},_getRadius:function(){switch(this.typeSelect.get("value")){case"Ring":case"DriveDistance":if(this._distRadius)return this._distRadius;break;case"DriveTime":return this._timeRadius||5}switch(this.unitsSelect.get("value")){case n.MILES:case n.KILOMETERS:return 1;case n.FEET:return 1500;case n.METERS:return 500}},_updateUI:function(e,i,t){var s,r;if(e?this.typeSelect.set("value",e):e=this.typeSelect.get("value"),i?this.radiusSpinner.set("value",i):i=this.radiusSpinner.get("value"),t?this.unitsSelect.set("value",t):t=this.unitsSelect.get("value"),"DriveTime"===e?(this.minutesSpan.style.display="",this.unitsSelect.domNode.style.display="none"):(this.minutesSpan.style.display="none",this.unitsSelect.domNode.style.display=""),"DriveTime"===e)s=1,r=300;else{var a="Ring"===e;switch(t){case n.MILES:s=.25,r=a?1e3:300;break;case n.KILOMETERS:s=.4,r=a?1600:450;break;case n.FEET:s=1300,r=a?528e4:15e5;break;case n.METERS:s=400,r=a?1609e3:45e4}}this.radiusSpinner.set("constraints",{min:s,max:r}),i<s?this.radiusSpinner.set("value",s):i>r&&this.radiusSpinner.set("value",r)},_typeChange:function(e){this._updateUI(null,this._getRadius(),null)},_unitsChange:function(){this._updateUI(null,null,null),this._onChange()},_radiusChange:function(){if(this.radiusSpinner.isValid()){var e=this.radiusSpinner.get("value");switch(this.typeSelect.get("value")){case"Ring":case"DriveDistance":this._distRadius=e;break;case"DriveTime":this._timeRadius=e}this._onChange()}else this._onError()},_onChange:function(){this.onChange()},onChange:function(){},_onError:function(){this.onError()},onError:function(){}})}));