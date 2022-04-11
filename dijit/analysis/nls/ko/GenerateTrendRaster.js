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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({toolDefine:"추세 래스터 생성",outputLayerName:"${layername}_trend",dimensionLabel:"변수 추세를 분석할 차원 선택",variablesLabel:"추세를 분석할 변수 선택",variablesListLabel:"변수[차원 정보](설명)",trendLineTypeLabel:"차원에 따라 변수 값에 맞는 라인 유형 선택",linear:"선형",harmonic:"조화",polynomial:"다항식",mannKendall:"Mann-Kendall",seasonalKendall:"Seasonal-Kendall",seasonalPeriod:"계절 기간의 길이에 대한 시간 단위 지정",cycleLength:"조화 주기의 길이 지정",cycleUnit:"조화 주기 길이의 시간 단위 선택",years:"년",days:"일",months:"월",frequencyLabel:"조화 추세 맞춤의 빈도 수 지정",polynomialOrderLabel:"추세 맞춤의 다항식 차수 지정",modelStatistics:"추세 래스터에 포함할 모델 통계 선택",rmse:"RMSE",r2:"결정계수",slopePValue:"경사 계수의 P 값",ignoreNodataLabel:"계산 내 누락 값 무시",ignore:"무시",analysisLayerLabel:"추세를 분석할 다차원 영상 레이어 선택",itemDescription:"추세 래스터 생성에서 생성된 분석 이미지 서비스",itemTags:"래스터 분석 결과, 추세 래스터 생성, ${layername}",itemSnippet:"추세 래서트 생성에서 생성된 분석 이미지 서비스"});