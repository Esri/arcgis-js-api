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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'CalciteWebCoreIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'esri-icon-close': '&#xe600;',
		'esri-icon-drag-horizontal': '&#xe601;',
		'esri-icon-drag-vertical': '&#xe602;',
		'esri-icon-handle-horizontal': '&#xe603;',
		'esri-icon-handle-vertical': '&#xe604;',
		'esri-icon-check-mark': '&#xe605;',
		'esri-icon-left-triangle-arrow': '&#xe606;',
		'esri-icon-right-triangle-arrow': '&#xe607;',
		'esri-icon-down-arrow': '&#xe608;',
		'esri-icon-up-arrow': '&#xe609;',
		'esri-icon-overview-arrow-bottom-left': '&#xe60a;',
		'esri-icon-overview-arrow-bottom-right': '&#xe60b;',
		'esri-icon-overview-arrow-top-left': '&#xe60c;',
		'esri-icon-overview-arrow-top-right': '&#xe60d;',
		'esri-icon-maximize': '&#xe60e;',
		'esri-icon-minimize': '&#xe60f;',
		'esri-icon-checkbox-unchecked': '&#xe610;',
		'esri-icon-checkbox-checked': '&#xe611;',
		'esri-icon-radio-unchecked': '&#xe612;',
		'esri-icon-radio-checked': '&#xe613;',
		'esri-icon-up-arrow-circled': '&#xe614;',
		'esri-icon-down-arrow-circled': '&#xe615;',
		'esri-icon-left-arrow-circled': '&#xe616;',
		'esri-icon-right-arrow-circled': '&#xe617;',
		'esri-icon-zoom-out-fixed': '&#xe618;',
		'esri-icon-zoom-in-fixed': '&#xe619;',
		'esri-icon-refresh': '&#xe61a;',
		'esri-icon-edit': '&#xe61b;',
		'esri-icon-authorize': '&#xe61c;',
		'esri-icon-map-pin': '&#xe61d;',
		'esri-icon-blank-map-pin': '&#xe61e;',
		'esri-icon-table': '&#xe61f;',
		'esri-icon-plus': '&#xe620;',
		'esri-icon-minus': '&#xe621;',
		'esri-icon-beginning': '&#xe622;',
		'esri-icon-reverse': '&#xe623;',
		'esri-icon-pause': '&#xe624;',
		'esri-icon-play': '&#xe625;',
		'esri-icon-forward': '&#xe626;',
		'esri-icon-end': '&#xe627;',
		'esri-icon-erase': '&#xe628;',
		'esri-icon-up-down-arrows': '&#xe629;',
		'esri-icon-left': '&#xe62a;',
		'esri-icon-right': '&#xe62b;',
		'esri-icon-announcement': '&#xe62c;',
		'esri-icon-notice-round': '&#xe62d;',
		'esri-icon-notice-triangle': '&#xe62e;',
		'esri-icon-home': '&#xe62f;',
		'esri-icon-locate': '&#xe630;',
		'esri-icon-expand': '&#xe631;',
		'esri-icon-collapse': '&#xe632;',
		'esri-icon-layer-list': '&#xe633;',
		'esri-icon-basemap': '&#xe634;',
		'esri-icon-globe': '&#xe635;',
		'esri-icon-applications': '&#xe636;',
		'esri-icon-arrow-up-circled': '&#xe637;',
		'esri-icon-arrow-down-circled': '&#xe638;',
		'esri-icon-arrow-left-circled': '&#xe639;',
		'esri-icon-arrow-right-circled': '&#xe63a;',
		'esri-icon-minus-circled': '&#xe63b;',
		'esri-icon-plus-circled': '&#xe63c;',
		'esri-icon-add-attachment': '&#xe63d;',
		'esri-icon-attachment': '&#xe63e;',
		'esri-icon-calendar': '&#xe63f;',
		'esri-icon-close-circled': '&#xe640;',
		'esri-icon-browser': '&#xe641;',
		'esri-icon-collection': '&#xe642;',
		'esri-icon-comment': '&#xe643;',
		'esri-icon-configure-popup': '&#xe644;',
		'esri-icon-contact': '&#xe645;',
		'esri-icon-dashboard': '&#xe646;',
		'esri-icon-deny': '&#xe647;',
		'esri-icon-description': '&#xe648;',
		'esri-icon-directions': '&#xe649;',
		'esri-icon-directions2': '&#xe64a;',
		'esri-icon-documentation': '&#xe64b;',
		'esri-icon-duplicate': '&#xe64c;',
		'esri-icon-review': '&#xe64d;',
		'esri-icon-environment-settings': '&#xe64e;',
		'esri-icon-error': '&#xe64f;',
		'esri-icon-error2': '&#xe650;',
		'esri-icon-experimental': '&#xe651;',
		'esri-icon-feature-layer': '&#xe652;',
		'esri-icon-filter': '&#xe653;',
		'esri-icon-grant': '&#xe654;',
		'esri-icon-group': '&#xe655;',
		'esri-icon-key': '&#xe656;',
		'esri-icon-labels': '&#xe657;',
		'esri-icon-tag': '&#xe658;',
		'esri-icon-layers': '&#xe659;',
		'esri-icon-left-arrow': '&#xe65a;',
		'esri-icon-right-arrow': '&#xe65b;',
		'esri-icon-link-external': '&#xe65c;',
		'esri-icon-link': '&#xe65d;',
		'esri-icon-loading-indicator': '&#xe65e;',
		'esri-icon-maps': '&#xe65f;',
		'esri-icon-marketplace': '&#xe660;',
		'esri-icon-media': '&#xe661;',
		'esri-icon-media2': '&#xe662;',
		'esri-icon-menu': '&#xe663;',
		'esri-icon-mobile': '&#xe664;',
		'esri-icon-phone': '&#xe665;',
		'esri-icon-navigation': '&#xe666;',
		'esri-icon-pan': '&#xe667;',
		'esri-icon-printer': '&#xe668;',
		'esri-icon-pie-chart': '&#xe669;',
		'esri-icon-chart': '&#xe66a;',
		'esri-icon-line-chart': '&#xe66b;',
		'esri-icon-question': '&#xe66c;',
		'esri-icon-resend-invitation': '&#xe66d;',
		'esri-icon-rotate': '&#xe66e;',
		'esri-icon-save': '&#xe66f;',
		'esri-icon-settings': '&#xe670;',
		'esri-icon-settings2': '&#xe671;',
		'esri-icon-share': '&#xe672;',
		'esri-icon-sign-out': '&#xe673;',
		'esri-icon-support': '&#xe674;',
		'esri-icon-user': '&#xe675;',
		'esri-icon-time-clock': '&#xe676;',
		'esri-icon-trash': '&#xe677;',
		'esri-icon-upload': '&#xe678;',
		'esri-icon-download': '&#xe679;',
		'esri-icon-zoom-in-magnifying-glass': '&#xe67a;',
		'esri-icon-search': '&#xe67b;',
		'esri-icon-zoom-out-magnifying-glass': '&#xe67c;',
		'esri-icon-locked': '&#xe67d;',
		'esri-icon-unlocked': '&#xe67e;',
		'esri-icon-favorites': '&#xe67f;',
		'esri-icon-compass': '&#xe680;',
		'esri-icon-down': '&#xe681;',
		'esri-icon-up': '&#xe682;',
		'esri-icon-chat': '&#xe683;',
		'esri-icon-dock-bottom': '&#xe684;',
		'esri-icon-dock-left': '&#xe685;',
		'esri-icon-dock-right': '&#xe686;',
		'esri-icon-organization': '&#xe687;',
		'esri-icon-north-navigation': '&#xe688;',
		'esri-icon-locate-circled': '&#xe689;',
		'esri-icon-dial': '&#xe68a;',
		'esri-icon-polygon': '&#xe68b;',
		'esri-icon-polyline': '&#xe68c;',
		'esri-icon-visible': '&#xe68d;',
		'esri-icon-non-visible': '&#xe68e;',
		'esri-icon-link-vertical': '&#xe68f;',
		'esri-icon-unlocked-link-vertical': '&#xe690;',
		'esri-icon-link-horizontal': '&#xe691;',
		'esri-icon-unlocked-link-horizontal': '&#xe692;',
		'esri-icon-swap': '&#xe693;',
		'esri-icon-cta-link-external': '&#xe694;',
		'esri-icon-reply': '&#xe695;',
		'esri-icon-public': '&#xe696;',
		'esri-icon-share2': '&#xe697;',
		'esri-icon-launch-link-external': '&#xe698;',
		'esri-icon-rotate-back': '&#xe699;',
		'esri-icon-pan2': '&#xe69a;',
		'esri-icon-tracking': '&#xe69b;',
		'esri-icon-expand2': '&#xe69c;',
		'esri-icon-arrow-down': '&#xe69d;',
		'esri-icon-arrow-up': '&#xe69e;',
		'esri-icon-hollow-eye': '&#xe69f;',
		'esri-icon-play-circled': '&#xe6a0;',
		'esri-icon-volume-off': '&#xe6a1;',
		'esri-icon-volume-on': '&#xe6a2;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/esri-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
