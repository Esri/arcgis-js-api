/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../support/FeatureSet","../support/IdSet","../support/shared","../../../core/promiseUtils"],(function(t,e,n,s,i){"use strict";return function(a){function o(t){var e;return(e=a.call(this,t)||this)._topnum=0,e.declaredClass="esri.arcade.featureset.actions.Top",e._countedin=0,e._maxProcessing=100,e._topnum=t.topnum,e._parent=t.parentfeatureset,e}t._inheritsLoose(o,a);var r=o.prototype;return r._getSet=function(t){return null===this._wset?this._ensureLoaded().then((()=>this._parent._getSet(t))).then((t=>(this._wset=new n(t._candidates.slice(0),t._known.slice(0),!1,this._clonePageDefinition(t.pagesDefinition)),this._setKnownLength(this._wset)>this._topnum&&(this._wset._known=this._wset._known.slice(0,this._topnum)),this._setKnownLength(this._wset)>=this._topnum&&(this._wset._candidates=[]),this._wset))):i.resolve(this._wset)},r._setKnownLength=function(t){return t._known.length>0&&"GETPAGES"===t._known[t._known.length-1]?t._known.length-1:t._known.length},r._isInFeatureSet=function(t){const e=this._parent._isInFeatureSet(t);if(e===s.IdState.NotInFeatureSet)return e;const n=this._idstates[t];return n===s.IdState.InFeatureSet||n===s.IdState.NotInFeatureSet?n:e===s.IdState.InFeatureSet&&void 0===n?this._countedin<this._topnum?(this._idstates[t]=s.IdState.InFeatureSet,this._countedin++,s.IdState.InFeatureSet):(this._idstates[t]=s.IdState.NotInFeatureSet,s.IdState.NotInFeatureSet):s.IdState.Unknown},r._expandPagedSet=function(t,e,n,s,a){if(null===this._parent)return i.reject(new Error("Parent Paging not implemented"));if(e>this._topnum&&(e=this._topnum),this._countedin>=this._topnum&&t.pagesDefinition.internal.set.length<=t.pagesDefinition.resultOffset){let e=t._known.length;return e>0&&"GETPAGES"===t._known[e-1]&&(t._known.length=e-1),e=t._candidates.length,e>0&&"GETPAGES"===t._candidates[e-1]&&(t._candidates.length=e-1),i.resolve("success")}return this._parent._expandPagedSet(t,e,n,s,a).then((e=>(this._setKnownLength(t)>this._topnum&&(t._known.length=this._topnum),this._setKnownLength(t)>=this._topnum&&(t._candidates.length=0),e)))},r._getFeatures=function(t,e,s,a){const o=[],r=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(t,r))return this._expandPagedSet(t,r,0,0,a).then((()=>this._getFeatures(t,e,s,a)));-1!==e&&void 0===this._featureCache[e]&&o.push(e);let _=0;for(let n=t._lastFetchedIndex;n<t._known.length&&(_++,_<=s&&(t._lastFetchedIndex+=1),!(void 0===this._featureCache[t._known[n]]&&(t._known[n]!==e&&o.push(t._known[n]),o.length>r)));n++);if(0===o.length)return i.resolve("success");const u=new n([],o,!1,null),h=Math.min(o.length,s);return this._parent._getFeatures(u,-1,h,a).then((()=>{for(let t=0;t<h;t++){const e=this._parent._featureFromCache(o[t]);void 0!==e&&(this._featureCache[o[t]]=e)}return"success"}))},r._getFilteredSet=function(t,e,s,i,a){return this._ensureLoaded().then((()=>this._getSet(a))).then((t=>new n(t._candidates.slice(0).concat(t._known.slice(0)),[],!1,this._clonePageDefinition(t.pagesDefinition))))},r._refineKnowns=function(t,e){let n=0,i=null;const a=[];for(let o=0;o<t._candidates.length;o++){const r=this._isInFeatureSet(t._candidates[o]);if(r===s.IdState.InFeatureSet){if(t._known.push(t._candidates[o]),n+=1,null===i?i={start:o,end:o}:i.end===o-1?i.end=o:(a.push(i),i={start:o,end:o}),t._known.length>=this._topnum)break}else if(r===s.IdState.NotInFeatureSet)null===i?i={start:o,end:o}:i.end===o-1?i.end=o:(a.push(i),i={start:o,end:o}),n+=1;else if(r===s.IdState.Unknown)break;if(n>=e)break}null!==i&&a.push(i);for(let s=a.length-1;s>=0;s--)t._candidates.splice(a[s].start,a[s].end-a[s].start+1);this._setKnownLength(t)>this._topnum&&(t._known=t._known.slice(0,this._topnum)),this._setKnownLength(t)>=this._topnum&&(t._candidates=[])},r._stat=function(){return i.resolve({calculated:!1})},r._canDoAggregates=function(){return i.resolve(!1)},o.registerAction=function(){e._featuresetFunctions.top=function(t){return new o({parentfeatureset:this,topnum:t})}},o}(e)}));
