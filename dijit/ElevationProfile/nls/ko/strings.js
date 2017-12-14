// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define({display:{elevationProfileTitle:"고도 프로파일",showMe:"표시",selectLine:"맵에서 피처를 <b>선택</b>하세요.",popupRequirement:"참고: 팝업을 활성화하려면 레이어에 피처가 있어야 합니다.",digitizeDistanceMeasureTool:"<b>측정</b> 도구를 사용하세요.",selectFeatureHelpUrl:"http://help.arcgis.com/ko/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",measureToolHelpUrl:"http://help.arcgis.com/ko/arcgisonline/help/index.html#//010q00000096000000",hoverOver:"고도 프로파일 차트 위에 마우스를 놓거나 터치하면 고도가 나타나고 맵에 위치가 표시됩니다.",directionLabel:"프로파일 방향"},buttons:{measureLabel:"측정",helpLabel:"도움말",profileForward:"순방향",profileReverse:"반전",flipProfileTitle:"프로파일 방향을 뒤집으려면 클릭",aggregationShowLabel:"집약 정보 보기",aggregationHideLabel:"집약 정보 숨기기",aggregateElevationGainForward:"순방향 고도 증가 집약",aggregateElevationLossForward:"순방향 고도 감소 집약",aggregateElevationGainReverse:"역방향 고도 증가 집약",aggregateElevationLossReverse:"역방향 고도 감소 집약"},chart:{title:"고도 프로파일",demResolution:"DEM 해상도",elevationTitleTemplate:"언덕({0})",distanceTitleTemplate:"거리({0})",gainLossTemplate:"분:{min}   최대:{max}   시작:{start}   종료:{end}   변경:{gainloss}"},errors:{MissingConstructorParameters:"생성자 매개변수가 누락되었습니다.",InvalidConfiguration:"잘못된 구성입니다.",UnableToProcessResults:"분석 결과를 처리할 수 없습니다.",UnableToNormalizeGeometry:"입력 폴리라인 지오메트리를 정규화할 수 없습니다.",NullGeometry:"입력 폴리라인 지오메트리가 null입니다. 프로파일을 업데이트할 수 없습니다.",InvalidProfileResults:"ProfileChart.update(...)에서 'profileResults' 매개변수가 누락되었습니다."}});