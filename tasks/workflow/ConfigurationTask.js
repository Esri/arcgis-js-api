// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../../request","../../core/lang","./WMBaseTask","./support/Enum","./support/Util"],function(e,t,s,r,n){var a=new r,i=new n;return s.createSubclass({declaredClass:"esri.tasks.workflow.ConfigurationTask",properties:{url:{}},getServiceInfo:function(s){var r=this.parsedUrl.path,n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),i=this._generateOptions(n,s);return e(r,i).then(function(e){for(var t=e.data.jobTypes,s=0;s<t.length;s++)t[s].state&&(t[s].state=a.jobTypeStateJsonDict.fromJSON(t[s].state));return e.data})},getJobTypeDetails:function(s,r){var n=this.parsedUrl.path+"/jobTypes/"+s,o=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),u=this._generateOptions(o,r);return e(n,u).then(function(e){var t=e.data;return t.state&&(t.state=a.jobTypeStateJsonDict.fromJSON(t.state)),t.defaultAssignedType&&(t.defaultAssignedType=a.jobAssignmentTypeJsonDict.fromJSON(t.defaultAssignedType)),t.defaultStartDate&&(t.defaultStartDate=i._convertToDate(t.defaultStartDate)),t.defaultDueDate&&(t.defaultDueDate=i._convertToDate(t.defaultDueDate)),t})},getVisibleJobTypes:function(s,r){var n=this.parsedUrl.path+"/visibleJobTypes",o={user:i._formatDomainUsername(s),f:"json"},u=this._encode(t.mixin({},this.parsedUrl.query,o)),p=this._generateOptions(u,r);return e(n,p).then(function(e){for(var t=e.data.jobTypes,s=0;s<t.length;s++)t[s].state&&(t[s].state=a.jobTypeStateJsonDict.fromJSON(t[s].state));return e.data.jobTypes})},getDataWorkspaceDetails:function(e,t){var s={user:i._formatDomainUsername(e.user)};return this._sendRequest(s,"/dataWorkspaces/"+e.dataWorkspaceId+"/info",t)},getTableRelationshipsDetails:function(s){var r=this.parsedUrl.path+"/tableRelationships",n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),a=this._generateOptions(n,s);return e(r,a).then(function(e){return e.data.tableRelationships})},getPublicJobQueryDetails:function(e,t){var s={};return this._sendRequest(s,"/publicQueries/"+e,t)},getUserJobQueryDetails:function(e,t){var s={};return this._sendRequest(s,"/community/users/"+i._formatDomainUsername(e.user)+"/queries/"+e.queryId,t)},getAllUsers:function(s){var r=this.parsedUrl.path+"/community/users",n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),a=this._generateOptions(n,s);return e(r,a).then(function(e){return e.data.users})},getUser:function(e,t){var s={};return this._sendRequest(s,"/community/users/"+i._formatDomainUsername(e),t)},getAllGroups:function(s){var r=this.parsedUrl.path+"/community/groups",n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),a=this._generateOptions(n,s);return e(r,a).then(function(e){return e.data.groups})},getGroup:function(e,t){var s={};return this._sendRequest(s,"/community/groups/"+e,t)}})});