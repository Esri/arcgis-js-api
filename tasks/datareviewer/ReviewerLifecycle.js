// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(E,s,e,t){var i={declaredClass:"esri.tasks.datareviewer.ReviewerLifecycle",UNKNOWN:0,REVIEWED:1,RESOLVED:2,MARK_AS_EXCPETION:3,ACCEPTABLE:4,UNRESOLVED_EXCEPTION:5,UNACCEPTABLE:6,UNRESOLVED_UNACCEPTABLE:7,UNRESOLVED_ACCEPTABLE:8,EXCEPTION:9,NEW:10,PASSED:11,FAILED:12,REVIEW:2,CORRECTION:4,VERIFICATION:6,LIFECYCLESTATUS_DESCRIPTIONS:{0:"Unknown",1:"Reviewed",2:"Resolved",3:"Mark As Exception",4:"Acceptable",6:"Unacceptable",9:"Exception",10:"New",11:"Passed",12:"Failed"},LIFECYCLEPHASE_DESCRIPTIONS:{2:"Review",4:"Correction",6:"Verification"},getLifecycleInfo:function(E){if(null===E||0===E.length)return null;E.sort();var s=[];s=this._getNextStatus(E[0]);for(var e=1;e<E.length;e++){for(var t=this._getNextStatus(E[e]),i=[],h=0;h<t.length;h++)-1!=s.indexOf(t[h])&&i.push(t[h]);if(!(i.length>0)){s.length=0;break}s=i}var a=null;return s.length>0&&(a={nextLifecycleStatus:s,nextLifecyclePhase:this._getNextLifecyclePhase(s[0])}),a},toLifecycleStatusString:function(E){return isNaN(E)||!1===this.LIFECYCLESTATUS_DESCRIPTIONS.hasOwnProperty(E)?null:this.LIFECYCLESTATUS_DESCRIPTIONS[E]},toLifecyclePhaseString:function(E){return isNaN(E)||!1===this.LIFECYCLEPHASE_DESCRIPTIONS.hasOwnProperty(E)?null:this.LIFECYCLEPHASE_DESCRIPTIONS[E]},getCurrentLifecyclePhase:function(E){if(isNaN(E)||!1===this.LIFECYCLESTATUS_DESCRIPTIONS.hasOwnProperty(E))return null;var s=-1;switch(E){case this.UNKNOWN:case this.REVIEWED:case this.UNACCEPTABLE:case this.UNRESOLVED_UNACCEPTABLE:case this.NEW:s=this.REVIEW;break;case this.RESOLVED:case this.MARK_AS_EXCPETION:s=this.CORRECTION;break;case this.ACCEPTABLE:case this.EXCEPTION:case this.UNRESOLVED_EXCEPTION:case this.UNRESOLVED_ACCEPTABLE:case this.PASSED:case this.FAILED:s=this.VERIFICATION}return this.LIFECYCLEPHASE_DESCRIPTIONS[s]},_getNextStatus:function(E){var s=[];switch(E){case this.UNKNOWN:s.push(this.RESOLVED),s.push(this.MARK_AS_EXCPETION),s.push(this.PASSED),s.push(this.FAILED);break;case this.REVIEWED:s.push(this.RESOLVED),s.push(this.MARK_AS_EXCPETION);break;case this.NEW:s.push(this.PASSED),s.push(this.FAILED);break;case this.UNACCEPTABLE:case this.UNRESOLVED_UNACCEPTABLE:s.push(this.RESOLVED),s.push(this.MARK_AS_EXCPETION);break;case this.RESOLVED:s.push(this.ACCEPTABLE),s.push(this.UNACCEPTABLE);break;case this.MARK_AS_EXCPETION:case this.UNRESOLVED_EXCEPTION:case this.UNRESOLVED_ACCEPTABLE:s.push(this.EXCEPTION),s.push(this.UNACCEPTABLE);break;case this.ACCEPTABLE:case this.EXCEPTION:s.push(this.UNACCEPTABLE);break;case this.PASSED:s.push(this.FAILED);break;case this.FAILED:s.push(this.PASSED)}return s},_getNextLifecyclePhase:function(E){var s=-1;switch(E){case this.UNKNOWN:case this.REVIEWED:case this.UNACCEPTABLE:case this.UNRESOLVED_UNACCEPTABLE:s=this.CORRECTION;break;case this.NEW:case this.RESOLVED:case this.MARK_AS_EXCPETION:case this.PASSED:case this.FAILED:s=this.VERIFICATION;break;case this.ACCEPTABLE:case this.EXCEPTION:case this.UNRESOLVED_EXCEPTION:case this.UNRESOLVED_ACCEPTABLE:s=this.REVIEW}return s}};return s("extend-esri")&&e.setObject("tasks.datareviewer.ReviewerLifecycle",i,t),i});