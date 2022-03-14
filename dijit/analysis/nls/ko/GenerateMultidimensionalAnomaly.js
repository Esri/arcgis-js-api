// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define({toolDefine:"다차원 이상치 생성",outputLayerName:"${layername}_anomaly",variablesLabel:"이상치가 생성될 변수 선택",variablesListLabel:"변수[차원 정보](설명)",methodLabel:"이상치를 생성할 방법 선택",calculationIntervalLabel:"평균을 계산할 시간 간격 선택",differenceFromMean:"평균과의 차이",percentDifferenceFromMean:"평균과의 백분율 차이",percentOfMean:"평균 백분율",zScore:"Z-Score",differenceFromMedian:"중앙값과의 차이",percentDifferenceFromMedian:"중앙값과의 백분율 차이",percentOfMedian:"중앙값 백분율",all:"모두",yearly:"매년",recurringMonthly:"매월 반복",recurringWeekly:"매주 반복",recurringDaily:"매일 반복",hourly:"매시간",externalRaster:"외부 래스터",meanRaster:"평균의 영상 레이어를 참조로 선택",ignoreNodataLabel:"계산 내 누락 값 무시",ignore:"생략",analysisLayerLabel:"이상치를 생성할 다차원 영상 레이어 선택",itemDescription:"다차원 이상치 생성을 통해 생성된 분석 이미지 서비스",itemTags:"레스터 분석 결과, 다차원 이상치 생성, ${layername}",itemSnippet:"다차원 이상치 생성을 통해 생성된 분석 이미지 서비스"});