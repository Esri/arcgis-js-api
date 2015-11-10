define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../deferredUtils","../urlUtils","../Evented"],function(e,r,t,s,n,i,o,a){var l=e(a,{declaredClass:"esri.tasks._Task",_eventMap:{error:["error"],complete:["result"]},constructor:function(e,t){e&&r.isString(e)&&(this._url=o.urlToObject(this.url=e)),t&&t.requestOptions&&(this.requestOptions=t.requestOptions),this.normalization=!0,this._errorHandler=r.hitch(this,this._errorHandler),this.registerConnectEvents()},_useSSL:function(){var e=this._url,r=/^http:/i,t="https:";this.url&&(this.url=this.url.replace(r,t)),e&&e.path&&(e.path=e.path.replace(r,t))},_encode:function(e,s,n){var i,o,a,l,c,u={};for(a in e)if("declaredClass"!==a&&(i=e[a],o=typeof i,null!==i&&void 0!==i&&"function"!==o))if(r.isArray(i))for(u[a]=[],c=i.length,l=0;c>l;l++)u[a][l]=this._encode(i[l]);else if("object"===o){if(i.toJson){var h=i.toJson(n&&n[a]);"esri.tasks.FeatureSet"===i.declaredClass&&h.spatialReference&&(h.sr=h.spatialReference,delete h.spatialReference),u[a]=s?h:t.toJson(h)}}else u[a]=i;return u},_successHandler:function(e,r,t,s){r&&this[r].apply(this,e),t&&t.apply(null,e),s&&i._resDfd(s,e)},_errorHandler:function(e,r,t){this.onError(e),r&&r(e),t&&t.errback(e)},setNormalization:function(e){this.normalization=e},onError:function(){}});return s("extend-esri")&&(n.Task=l),l});