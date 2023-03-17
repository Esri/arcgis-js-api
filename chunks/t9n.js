/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./index","./locale"],(function(e,s,n){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const t={};async function a(e,n){const a=`${n}_${e}`;return t[a]||(t[a]=fetch(s.getAssetPath(`./assets/${n}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),t[a]}function c(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function i(e){e.defaultMessages=await u(e,e.effectiveLocale),o(e)}async function u(e,s){const{el:t}=e,c=t.tagName.toLowerCase().replace("calcite-","");return a(n.getSupportedLocale(s,"t9n"),c)}async function f(e,s){e.defaultMessages=await u(e,s),o(e)}function g(e){e.onMessagesChange=d}function r(e){e.onMessagesChange=void 0}function d(){o(this)}e.connectMessages=g,e.disconnectMessages=r,e.setUpMessages=i,e.updateMessages=f}));
