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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","../../core/promiseUtils","../../core/Accessoire","../../core/AccessoirePromise","dojo/_base/lang","dojo/Deferred"],function(e,t,i,s,r,a){var h=e([i,s],{constructor:function(){this._featuresByTime={},this._lastEndTimeCheck=null,this._trackIds={},this._affectedTrackIds=[],this._doTimePurge=!1,this._doTrackPurge=!1,this._watchHandlers=[],this._processQueue=[],this._flushQueueTimer=null},normalizeCtorArgs:function(e){return e=e||{},e.controller||(e={controller:e}),e},getDefaults:function(){return r.mixin(this.inherited(arguments),{idField:"id",parentField:"parent"})},initialize:function(){var e;if(this.controller)try{this.graphics=this.controller.graphics,this.layer=this.controller.layer,this.layer.trackIdField&&(this.trackIdField=this.layer.trackIdField,this._doTrackPurge=!0),this.maximumTrackPoints=this.layer.maximumTrackPoints,this._watchHandlers.push(this.layer.watch("maximumTrackPoints",function(e){var t=this.maximumTrackPoints;this.maximumTrackPoints=e,this._doTrackPurge&&(0===t||0!==e&&t>e)&&this._purgeByTracks()}.bind(this))),this.maxFeatureAge=0,this.get("layer.purgeOptions.age")&&(this.maxFeatureAge=Math.ceil(60*this.layer.purgeOptions.age*1e3)),(this.get("layer.timeInfo.endTimeField")||this.maxFeatureAge)&&(this._doTimePurge=!0,this._lastEndTimeCheck=1e3*Math.ceil(Date.now()/1e3)),this.displayCount=this.layer.purgeOptions&&this.layer.purgeOptions.displayCount,this._watchHandlers.push(this.layer.watch("purgeOptions",function(e){var t=this.displayCount;e.hasOwnProperty("displayCount")&&e.displayCount!==t&&(this.displayCount=e.displayCount,this.displayCount<t&&this._purgeByDisplayCount()),e.hasOwnProperty("age")&&(this.maxFeatureAge=Math.ceil(6e4*e.age),this.maxFeatureAge?(this._doTimePurge=!0,this._lastEndTimeCheck=1e3*Math.ceil(Date.now()/1e3)):this._doTimePurge=!1)}.bind(this)))}catch(t){e=new a,this.addResolvingPromise(e.promise),e.reject(t)}else e=new a,this.addResolvingPromise(e.promise),e.reject(new Error("Controller is not optional argument for StreamPurger constructor"))},destroy:function(){this._flushQueueTimer&&(clearTimeout(this._flushQueueTimer),this._flushQueueTimer=null),this._processQueue=null,this._affectedTrackIds=null;for(var e=0,t=this._watchHandlers.length;t>e;e++)this._watchHandlers[e].remove()},addMany:function(e){var t,i,s,r,a,h,n=this._featuresByTime;for(this._numAdded+=e.length,t=0,i=e.length;i>t;t++)a=null,s=e[t],this._doTrackPurge&&(a=s.attributes[this.trackIdField],s[this.parentField]=a,this._trackIds.hasOwnProperty(a)?this._trackIds[a]+=1:this._trackIds[a]=1,-1===this._affectedTrackIds.indexOf(a)&&this._affectedTrackIds.push(a)),this._doTimePurge&&(h=this._getExpireTimeOfItem(s),h&&(r={id:s.id},null!==a&&(r.trackId=a),h=1e3*Math.ceil(h/1e3),n[h]?n[h].push(r):n[h]=[r],this._numTimeCalced+=1)),this._processQueue.push(s);this._flushQueueTimer||(this._flushQueueTimer=setTimeout(this._flushProcessQueue.bind(this),200))},purge:function(e){this._doTimePurge&&this._purgeByTime(),this._doTrackPurge&&this._purgeByTracks(e),this._purgeByDisplayCount()},_flushProcessQueue:function(){return clearTimeout(this._flushQueueTimer),this._flushQueueTimer=null,t.resolve(this._processQueue.splice(0)).then(function(e){this.graphics.addMany(e);var t=this._affectedTrackIds.splice(0);return this.purge(t)}.bind(this))},_getExpireTimeOfItem:function(e){var t,i=this.layer.timeInfo||{};return t=i.endTimeField&&e.attributes[i.endTimeField],!t&&this.maxFeatureAge&&(t=i.startTimeField&&e.attributes[i.startTimeField]?e.attributes[i.startTimeField]+this.maxFeatureAge:Date.now()+this.maxFeatureAge),t},_getIndexOfItem:function(e){var t,i,s=this.idField;return t="object"==typeof e?e[s]:e,i=function(e){return e[s]===t},this.graphics.findIndex(i,this)},_getItemsByParent:function(e){var t,i=function(t){return t[this.parentField]===e};return t=this.graphics.filter(i,this)},_processRemovedTrackFeatures:function(e){if(this._doTrackPurge&&e&&e.length)for(var t,i=0,s=e.length;s>i;i++)t=e[i],this._trackIds[t]-=1,0===this._trackIds[t]&&delete this._trackIds[t]},_purgeByDisplayCount:function(){var e,t,i=[],s=this.displayCount;if(e=this.graphics.length-s,e>0){for(var r=0;e>r;r++)this._doTrackPurge&&(t=this.graphics.getItemAt(0)[this.parentField],i.push(t)),this.graphics.removeAt(0);this._processRemovedTrackFeatures(i)}},_purgeByTime:function(){if(this._featuresByTime&&0!==Object.getOwnPropertyNames(this._featuresByTime).length){var e,t,i,s,r=this.layer,a=r.timeInfo||{},h=a.endTimeField,n=[],u=[];if((h||this.maxFeatureAge)&&(e=1e3*Math.floor(this._lastEndTimeCheck/1e3),t=1e3*Math.ceil(Date.now()/1e3),this._lastEndTimeCheck=t,e&&e!==t)){for(s=this._featuresByTime,i=e;t>=i;i+=1e3)s[i]&&(n=n.concat(s[i]),delete s[i]);for(var o=0,c=n.length;c>o;o++){var l=n[o],d=this._getIndexOfItem(l.id);-1!==d&&(this.graphics.removeAt(d),(l.trackId||0===l.trackId)&&u.push(l.trackId))}this._processRemovedTrackFeatures(u)}}},_purgeByTracks:function(e){function t(e){var t,i;if(t=this._getItemsByParent(e),i=t.length-s,i>0){for(var r=0;i>r;r++)this._removeItemFromCollection(t.getItemAt(r));this._trackIds[e]=s}}if(e=e||[],this.maximumTrackPoints){var i,s=this.maximumTrackPoints;if(e.length)for(var r=0,a=e.length;a>r;r++)i=e[r],this._trackIds[i]>s&&t.call(this,i);else{e=this._trackIds;for(i in e)e[i]>s&&t.call(this,i)}}},_removeItemFromCollection:function(e){var t,i=e[this.idField];return t=this._getIndexOfItem(e),-1!==t&&this.graphics.removeAt(t),{index:t,id:i,parent:e[this.parentField]}}});return h});