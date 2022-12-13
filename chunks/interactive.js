/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.0-beta.97
   */function t(){}function i(e,i=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=t);e.el.click=HTMLElement.prototype.click,"function"==typeof i?e.el.setAttribute("tabindex",i.call(e)?"0":"-1"):!0===i?e.el.setAttribute("tabindex","0"):!1===i&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}e.updateHostInteraction=i}));
