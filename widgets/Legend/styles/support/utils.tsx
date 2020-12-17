// esri.core
import { pt2px } from "esri/core/screenUtils";

// esri.libs.maquette
import { createProjector, Projector } from "esri/libs/maquette/index";

// esri.symbols.support
import { RectDescriptor } from "esri/symbols/support/interfaces";
import {
  generateFillAttributes,
  generateStrokeAttributes,
  renderDef,
  renderShape,
  getTransformMatrix,
  computeBBox,
  getBoundingBox,
  BBox
} from "esri/symbols/support/svgUtils";
import { renderColorRampPreviewHTML } from "esri/symbols/support/symbolUtils";

// esri.widgets
import {
  RelationshipRampElement,
  SizeRampElement,
  ColorRampElement,
  UnivariateAboveAndBelowRampElement
} from "esri/interfaces";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { classes, tsx } from "esri/support/widget";

const projector: Projector = createProjector();
const separatorWidth = 10;
const separatorHeight = 20;
const aboveAndBelowSymbolPadding = 10;
const aboveAndBelowCardStylePadding = 20;
const svgNS = "http://www.w3.org/2000/svg";

const CSS = {
  // relationship diamond
  diamondContainer: "esri-relationship-ramp--diamond__container",
  diamondLeftCol: "esri-relationship-ramp--diamond__left-column",
  diamondRightCol: "esri-relationship-ramp--diamond__right-column",
  diamondMidCol: "esri-relationship-ramp--diamond__middle-column",
  diamondMidColLabel: "esri-relationship-ramp--diamond__middle-column--label",
  diamondMidColRamp: "esri-relationship-ramp--diamond__middle-column--ramp",
  // relationship square
  squareTable: "esri-relationship-ramp--square__table",
  squareTableRow: "esri-relationship-ramp--square__table-row",
  squareTableCell: "esri-relationship-ramp--square__table-cell",
  squareTableLabel: "esri-relationship-ramp--square__table-label",
  squareTableLabelLeftBottom: "esri-relationship-ramp--square__table-label--left-bottom",
  squareTableLabelRightBottom: "esri-relationship-ramp--square__table-label--right-bottom",
  squareTableLabelLeftTop: "esri-relationship-ramp--square__table-label--left-top",
  squareTableLabelRightTop: "esri-relationship-ramp--square__table-label--right-top",
  // univariate above-and-below
  univariateAboveAndBelowSymbol: "esri-univariate-above-and-below-ramp__symbol",
  colorRamp: "esri-legend__color-ramp"
};

export function renderRelationshipRamp(
  legendElement: RelationshipRampElement,
  id: string,
  opacity: number
): VNode {
  const { focus, labels } = legendElement;
  const isDiamond = !!focus;
  const rampDiv = renderRamp(legendElement, id, opacity);

  if (isDiamond) {
    return (
      <div class={CSS.diamondContainer}>
        <div class={CSS.diamondLeftCol}>{labels.left}</div>
        <div class={CSS.diamondMidCol}>
          <div class={CSS.diamondMidColLabel}>{labels.top}</div>
          {rampDiv}
          <div class={CSS.diamondMidColLabel}>{labels.bottom}</div>
        </div>
        <div class={CSS.diamondRightCol}>{labels.right}</div>
      </div>
    );
  }

  return (
    <div class={CSS.squareTable}>
      <div class={CSS.squareTableRow}>
        <div
          class={classes(
            CSS.squareTableCell,
            CSS.squareTableLabel,
            CSS.squareTableLabelRightBottom
          )}
        >
          {labels.left}
        </div>
        <div class={CSS.squareTableCell} />
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelLeftBottom)}
        >
          {labels.top}
        </div>
      </div>
      <div class={CSS.squareTableRow}>
        <div class={CSS.squareTableCell} />
        {rampDiv}
        <div class={CSS.squareTableCell} />
      </div>
      <div class={CSS.squareTableRow}>
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelRightTop)}
        >
          {labels.bottom}
        </div>
        <div class={CSS.squareTableCell} />
        <div
          class={classes(CSS.squareTableCell, CSS.squareTableLabel, CSS.squareTableLabelLeftTop)}
        >
          {labels.right}
        </div>
      </div>
    </div>
  );
}

function getLineMarkers(
  side: "left" | "right",
  focus: string,
  id: string
): { markerStart: string; markerEnd: string } {
  const startId = `${id}_arrowStart`;
  const endId = `${id}_arrowEnd`;
  const isLeftSide = side === "left";
  const result: { markerStart: string; markerEnd: string } = { markerStart: null, markerEnd: null };

  switch (focus) {
    case "HL":
      if (isLeftSide) {
        result.markerStart = `url(#${endId})`;
      } else {
        result.markerEnd = `url(#${startId})`;
      }
      break;
    case "LL":
      result.markerStart = `url(#${endId})`;
      break;
    case "LH":
      if (isLeftSide) {
        result.markerEnd = `url(#${startId})`;
      } else {
        result.markerStart = `url(#${endId})`;
      }
      break;
    default:
      result.markerEnd = `url(#${startId})`;
      break;
  }

  return result;
}

function renderRamp(
  legendElement: RelationshipRampElement,
  id: string,
  opacity: number,
  size: number = 60
): VNode {
  const { focus, numClasses, colors, rotation } = legendElement;
  const isDiamond = !!focus;
  const surfaceSize = Math.sqrt(Math.pow(size, 2) + Math.pow(size, 2)) + (isDiamond ? 0 : 5); // diagonal length + 5px padding for arrows
  let opacityStyle: string = null;

  if (opacity != null) {
    opacityStyle = `opacity: ${opacity}`;
  }

  const defs: VNode[] = [];
  const squares: VNode[] = [];
  const bboxes: BBox[] = [];
  const groupSize = size || 75;
  const cellSize = groupSize / numClasses;

  for (let i = 0; i < numClasses; i++) {
    const y = i * cellSize;

    for (let j = 0; j < numClasses; j++) {
      const x = j * cellSize;

      const fillAttrs = generateFillAttributes(colors[i][j]);
      const strokeAttrs = generateStrokeAttributes(null);
      const shape: RectDescriptor = {
        type: "rect",
        x,
        y,
        width: cellSize,
        height: cellSize
      };

      defs.push(renderDef(fillAttrs));
      squares.push(renderShape(shape, fillAttrs.fill, strokeAttrs, null));
      bboxes.push(getBoundingBox(shape));
    }
  }

  const leftPaddingX = 10;
  const leftPaddingY = 15;
  const rightPaddingX = 15;
  const rightPaddingY = 10;

  let svgStyle: string = null;

  if (!isDiamond) {
    svgStyle = "margin: -15px -15px -18px -15px";
  }

  const leftMarkers = getLineMarkers("left", focus, id);
  const rightMarkers = getLineMarkers("right", focus, id);

  const bbox = computeBBox(bboxes);
  const rectMatrix = getTransformMatrix(bbox, surfaceSize, surfaceSize, 0, false, rotation);
  const arrowMatrix = getTransformMatrix(
    bbox,
    surfaceSize,
    surfaceSize,
    0,
    false,
    isDiamond ? -45 : null
  );

  return (
    <div style={opacityStyle} class={isDiamond ? CSS.diamondMidColRamp : CSS.squareTableCell}>
      <svg xmlns={svgNS} width={surfaceSize} height={surfaceSize} style={svgStyle}>
        <defs>
          <marker
            id={`${id}_arrowStart`}
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            markerUnits="strokeWidth"
            orient="auto"
          >
            <polyline points="0,0 5,5 0,10" fill="none" stroke="#555555" stroke-width="1" />
          </marker>
          <marker
            id={`${id}_arrowEnd`}
            markerWidth="10"
            markerHeight="10"
            refX="0"
            refY="5"
            markerUnits="strokeWidth"
            orient="auto"
          >
            <polyline points="5,0 0,5 5,10" fill="none" stroke="#555555" stroke-width="1" />
          </marker>
          {defs}
        </defs>
        <g transform={rectMatrix}>{squares}</g>
        <g transform={arrowMatrix}>
          <line
            fill="none"
            stroke="#555555"
            stroke-width="1"
            marker-start={leftMarkers.markerStart}
            marker-end={leftMarkers.markerEnd}
            x1={-leftPaddingX}
            y1={size - leftPaddingY}
            x2={-leftPaddingX}
            y2={leftPaddingY}
          />
          <line
            fill="none"
            stroke="#555555"
            stroke-width="1"
            marker-start={rightMarkers.markerStart}
            marker-end={rightMarkers.markerEnd}
            x1={rightPaddingX}
            y1={size + rightPaddingY}
            x2={size - rightPaddingX}
            y2={size + rightPaddingY}
          />
        </g>
      </svg>
    </div>
  );
}

function renderSeparator(rampAlignment: "horizontal" | "vertical" = "vertical"): VNode {
  const style = "stroke:rgb(200, 200, 200);stroke-width:1";

  return rampAlignment === "vertical" ? (
    <svg height="4" width="10">
      <line x1="0" y1="2" x2="10" y2="2" style={style} />
    </svg>
  ) : (
    <svg height="10" width="10">
      <line x1="5" y1="0" x2="5" y2="10" style={style} />
    </svg>
  );
}

function getSeparatorPreview(
  opacity: number,
  rampAlignment: "horizontal" | "vertical" = "vertical"
): HTMLElement {
  const separator = document.createElement("div");
  separator.style.height = `${separatorHeight}px`;
  separator.className = CSS.univariateAboveAndBelowSymbol;

  if (opacity != null) {
    separator.style.opacity = opacity.toString();
  }

  projector.append(separator, renderSeparator.bind(null, rampAlignment));
  return separator;
}

function updateUnivariateAboveAndBelowSizeRampElement(
  sizeRampElement: SizeRampElement,
  opacity: number,
  rampAlignment: "horizontal" | "vertical" = "vertical"
): void {
  sizeRampElement.infos.forEach((stop, index) => {
    // Replace middle stop preview with separator
    if (index === 2) {
      stop.preview = getSeparatorPreview(opacity, rampAlignment);
    } else {
      const previewSize =
        pt2px(stop.size) +
        (rampAlignment === "horizontal"
          ? aboveAndBelowCardStylePadding
          : aboveAndBelowSymbolPadding);
      const isPreviewDiv = stop.preview.tagName.toLowerCase() === "div";
      const preview = isPreviewDiv ? stop.preview : document.createElement("div");
      preview.className = CSS.univariateAboveAndBelowSymbol;

      if (rampAlignment === "horizontal") {
        preview.style.width = `${previewSize}px`;
      } else {
        preview.style.height = `${previewSize}px`;
      }

      if (!isPreviewDiv) {
        preview.appendChild(stop.preview);
      }

      stop.preview = preview;
    }
  });
}

// Used to align the colorRamp at the middle of first size symbol
export function getUnivariateAboveAndBelowColorRampMargin(
  sizeRampElement: SizeRampElement,
  style: "classic" | "card" = "classic"
): number {
  const stops = sizeRampElement.infos;

  if (style === "classic") {
    return (pt2px(stops[0].size) + aboveAndBelowSymbolPadding) / 2;
  }

  return (stops[0].size - stops[stops.length - 1].size) / 2;
}

export function getUnivariateAboveAndBelowColorRampPreview(
  colorRampElement: ColorRampElement,
  options: {
    width?: number;
    height?: number;
    rampAlignment: "horizontal" | "vertical";
    opacity: number;
    type: "above" | "below" | "full";
  }
): HTMLElement {
  if (!colorRampElement) {
    return null;
  }

  const colors = colorRampElement.infos.map((stop) => stop.color);
  const colorRampDiv = renderColorRampPreviewHTML(
    options.type === "full"
      ? colors
      : options.type === "above"
      ? colors.slice(0, 3) // First 3 colors
      : colors.slice(2, 5), // Last 3 colors
    { width: options.width, height: options.height, align: options.rampAlignment }
  );

  colorRampDiv.className = CSS.colorRamp;

  if (options.opacity != null) {
    colorRampDiv.style.opacity = options.opacity.toString();
  }

  return colorRampDiv;
}

export function getUnivariateAboveAndBelowSizeRampSize(
  sizeRampElement: SizeRampElement,
  type: "above" | "below" | "full",
  rampAlignment: "horizontal" | "vertical" = "vertical"
): number {
  let sizeRampHeight = 0;

  const stops = sizeRampElement.infos;
  const startIndex = type === "full" || type === "above" ? 0 : 2;
  const endIndex = type === "full" || type === "below" ? 4 : 2;

  for (let index = startIndex; index <= endIndex; index++) {
    if (index === 2) {
      sizeRampHeight += rampAlignment === "horizontal" ? separatorWidth : separatorHeight;
    } else {
      const previewSize =
        pt2px(stops[index].size) +
        (rampAlignment === "horizontal"
          ? aboveAndBelowCardStylePadding
          : aboveAndBelowSymbolPadding);

      sizeRampHeight += previewSize;
    }
  }

  return sizeRampHeight;
}

export function getUnivariateAboveAndBelowColorRampSize(
  sizeRampElement: SizeRampElement,
  type: "above" | "below" | "full",
  rampAlignment: "horizontal" | "vertical" = "vertical"
): number {
  const sizeRampSize = getUnivariateAboveAndBelowSizeRampSize(sizeRampElement, type, rampAlignment);
  const stops = sizeRampElement.infos;
  const startIndex = type === "full" || type === "above" ? 0 : 2;
  const endIndex = type === "full" || type === "below" ? 4 : 2;
  const symbolSize =
    type === "full"
      ? stops[startIndex].size + stops[endIndex].size
      : type === "above"
      ? stops[startIndex].size
      : stops[endIndex].size;

  return (
    sizeRampSize -
    (pt2px(symbolSize / 2) +
      (rampAlignment === "vertical"
        ? aboveAndBelowSymbolPadding / 2 + separatorHeight / 2
        : aboveAndBelowCardStylePadding / 2 + separatorWidth / 2))
  );
}

export function getUnivariateAboveAndBelowRampElements(
  legendElement: UnivariateAboveAndBelowRampElement,
  opacity: number,
  rampAlignment: "horizontal" | "vertical" = "vertical"
): { sizeRampElement: SizeRampElement; colorRampElement: ColorRampElement } {
  const elements = legendElement.infos;
  let sizeRampElement = elements.filter(({ type }) => type === "size-ramp")[0] as SizeRampElement;
  let colorRampElement = elements.filter(
    ({ type }) => type === "color-ramp"
  )[0] as ColorRampElement;

  if (sizeRampElement) {
    sizeRampElement = { ...sizeRampElement };
    sizeRampElement.infos = [...sizeRampElement.infos];
  }

  if (colorRampElement) {
    colorRampElement = { ...colorRampElement };
    colorRampElement.infos = [...colorRampElement.infos];
  }

  updateUnivariateAboveAndBelowSizeRampElement(sizeRampElement, opacity, rampAlignment);

  // For card style
  if (rampAlignment === "horizontal") {
    sizeRampElement.infos.reverse();
    colorRampElement?.infos.reverse();
  }

  return { sizeRampElement, colorRampElement };
}
