/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/CircularArray","../../../../../core/maybe","../support/FeatureSetReaderJSON","../support/UpdateToken"],(function(e,t,s,i,n,d){"use strict";let r=function(){function e(e){this.requests={done:new Array,stream:new s(10)},this._edits=null,this._abortController=new AbortController,this._done=!1,this.didSend=!1,this.tile=e}var r=e.prototype;return r.end=function(){this._done=!0},r.clear=function(){this.requests.done=[]},r.applyUpdate=function(e){this.requests.done.forEach((t=>t.message.status.unset(e))),i.isSome(this._edits)&&this._edits.status.unset(e)},r.add=function(e){var t;e.message.status=null!=(t=e.message.status)?t:d.UpdateToken.empty(),e.message.end&&this.requests.done.forEach((e=>{i.isSome(e.message)&&e.message.end&&(e.message.end=!1)})),this.requests.done.push(e)},r.edit=function(e,t){const s=e.getQuantizationTransform(),r=e.geometryType,o=Array.from(e.features()),a=[...t,...o.map((e=>e.objectId))];if(this.removeIds(a),this._invalidate(),i.isNone(this._edits))return void(this._edits={type:"append",addOrUpdate:n.FeatureSetReaderJSON.fromOptimizedFeatures(o,r,i.unwrap(s)),id:this.tile.id,status:d.UpdateToken.empty(),end:!0});this.requests.done.forEach((e=>e.message.end=!1));i.unwrap(this._edits.addOrUpdate).append(e.features())},r.readers=function*(){for(const{message:e}of this.requests.done)i.isSome(e.addOrUpdate)&&(yield e.addOrUpdate);i.isSome(this._edits)&&i.isSome(this._edits.addOrUpdate)&&(yield this._edits.addOrUpdate)},r._invalidate=function(){for(const e of this.requests.done)e.message.status=d.UpdateToken.empty();i.isSome(this._edits)&&(this._edits.status=d.UpdateToken.empty())},r.removeIds=function(e){this._invalidate();for(const{message:t}of this.requests.done){const s=t.addOrUpdate;i.isSome(s)&&(s.removeIds(e),s.isEmpty&&(t.addOrUpdate=null))}i.isSome(this._edits)&&i.isSome(this._edits.addOrUpdate)&&this._edits.addOrUpdate.removeIds(e),this.requests.done=this.requests.done.filter((e=>e.message.addOrUpdate||e.message.end))},r.abort=function(){this._abortController.abort()},t._createClass(e,[{key:"signal",get:function(){return this._abortController.signal}},{key:"options",get:function(){return{signal:this._abortController.signal}}},{key:"empty",get:function(){return!this.requests.done.length}},{key:"edits",get:function(){return this._edits}},{key:"done",get:function(){return this._done}}]),e}();e.DataTileSubscription=r,Object.defineProperty(e,"__esModule",{value:!0})}));
