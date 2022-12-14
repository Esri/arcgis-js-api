/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{removeMaybe as e,isSome as s,isNone as o}from"../../../../core/maybe.js";import{addFrameTask as d}from"../../../../core/scheduling.js";import{FadeDirection as i}from"../support/I3SLayerView.js";class t{constructor(){this.lodCrossfadeSignedDuration=0}}class a{constructor(e){this.view=e,this._preRenderFrameTaskHandle=null,this._currentFrameStartTime=null,this._numFadingNodes=0}get updating(){return this._numFadingNodes>0}stopNodeFading(s){null!=s.lodCrossfadeProgress&&(this._numFadingNodes--,s.lodCrossfadeProgress=null,0===this._numFadingNodes&&(null!=this._preRenderFrameTaskHandle&&(this._preRenderFrameTaskHandle=e(this._preRenderFrameTaskHandle)),this.view.notifyLODUpdate(),this.view.notifyUpdate()))}_startNodeFading(e,s,o){0===this._numFadingNodes&&(this._preRenderFrameTaskHandle=d({preRender:e=>this._updateAllNodeFading(e)}),this.view.notifyLODUpdate()),null==e.lodCrossfadeProgress&&(this._numFadingNodes++,this.view.notifyUpdate()),e.lodCrossfadeSignedDuration=o,e.lodCrossfadeProgress=s}_updateAllNodeFading(e){const o=this.view.nodeCrossfadingEnabled;this.view.foreachCrossfadeNode(((d,i)=>{if(s(i)&&s(i.lodCrossfadeProgress)){const s=i.lodCrossfadeSignedDuration,t=s>0?this.view.fullOpacity:0,a=e.deltaTime/s,r=i.lodCrossfadeProgress+Math.abs(a),n=!o||r>=1||0===s,l=t-(n?0:s>0?1:-1)*(1-r);n?(this.stopNodeFading(i),s<0&&this.view.markNodeToRemove(d)):i.lodCrossfadeProgress=r,this.view.setNodeOpacityByIndex(d,l)}})),this.view.removeMarkedNodes()}stopAllNodeFading(){this.view.foreachCrossfadeNode(((e,o)=>{if(s(o)&&s(o.lodCrossfadeProgress)){this.stopNodeFading(o);const s=o.lodCrossfadeSignedDuration;s<0&&this.view.markNodeToRemove(e);const d=s>0?this.view.fullOpacity:0;this.view.setNodeOpacityByIndex(e,d)}})),this.view.removeMarkedNodes()}fadeNode(e,s,o,d){null==this._currentFrameStartTime&&(this._currentFrameStartTime=Date.now());const t=this.view,a=t.nodeCrossfadingEnabled,n=o===i.FadeIn?t.fullOpacity:0,l=a?d?o===i.FadeIn?t.lodCrossfadeinDuration:t.lodCrossfadeoutDuration:t.lodCrossfadeUncoveredDuration:0,h=this.view.getNodeOpacityByIndex(e);if(a&&h!==n&&l>0){const e=1-Math.abs(n-h);this._startNodeFading(s,e,r(o)*l)}else this.stopNodeFading(s),this.view.setNodeOpacityByIndex(e,n),o===i.FadeOut&&this.view.removeNode(e)}isNodeFullyFadedIn(e){const s=this.view.getNodeCrossfadeMetaData(e);return o(s)||null==s.lodCrossfadeProgress&&this.view.getNodeOpacityByIndex(e)===this.view.fullOpacity}}function r(e){return e===i.FadeIn?1:-1}export{a as I3SCrossfadeHelper,t as NodeCrossfadeMetaData};