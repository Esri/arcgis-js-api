/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{InputHandler as e}from"../../../input/InputHandler.js";const t=.6;class o extends e{constructor(e,t){super(!0),this.view=e,this._canZoom=!0,this.registerIncoming("mouse-wheel",t,(e=>this._handleMouseWheel(e)))}_handleMouseWheel(e){if(!this.view.navigation.mouseWheelZoomEnabled)return;if(e.preventDefault(),e.stopPropagation(),!this._canZoom)return;const o=this.view.mapViewNavigation,{x:n,y:i,deltaY:s}=e.data,a=1/t**(1/60*s),h=o.zoom(a,[n,i]);h&&(this._canZoom=!1,h.catch((()=>{})).then((()=>{this._canZoom=!0,o.end()})))}}export{o as MouseWheelZoom};
