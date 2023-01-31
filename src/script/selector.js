import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Node, NodeConstraints, Connector, ConnectorConstraints } from '@syncfusion/ej2-diagrams';
/* tslint:disable: name-of-rule-to-disable */
export class NodeProperties {
    constructor() {
        this.opacityText = '100%';
        this.mOffsetX = 0;
        this.mOffsetY = 0;
        this.mWidth = 0;
        this.mHeight = 0;
        this.mRotateAngle = 0;
        this.mFillColor = '#ffffff';
        this.mStrokeColor = '#000000';
        this.mStrokeStyle = 'None';
        this.mStrokeWidth = 1;
        this.mOpacity = 0;
        this.mAspectRatio = false;
        this.mGradient = false;
        this.mGradientDirection = 'BottomToTop';
        this.mGradientColor = '#ffffff';
    }
    get offsetX() {
        return this.mOffsetX;
    }
    set offsetX(offsetX) {
        if (this.mOffsetX !== offsetX) {
            this.mOffsetX = offsetX;
            this.triggerPropertyChange('offsetX', offsetX);
        }
    }
    get offsetY() {
        return this.mOffsetY;
    }
    set offsetY(offsetY) {
        if (this.mOffsetY !== offsetY) {
            this.mOffsetY = offsetY;
            this.triggerPropertyChange('offsetY', offsetY);
        }
    }
    get width() {
        return this.mWidth;
    }
    set width(width) {
        if (this.mWidth !== width) {
            this.mWidth = width || 3;
            this.triggerPropertyChange('width', width);
        }
    }
    get height() {
        return this.mHeight;
    }
    set height(height) {
        if (this.mHeight !== height) {
            this.mHeight = height || 3;
            this.triggerPropertyChange('height', height);
        }
    }
    get rotateAngle() {
        return this.mRotateAngle;
    }
    set rotateAngle(rotateAngle) {
        if (this.mRotateAngle !== rotateAngle) {
            this.mRotateAngle = rotateAngle;
            this.triggerPropertyChange('rotateAngle', rotateAngle);
        }
    }
    get fillColor() {
        return this.mFillColor;
    }
    set fillColor(fillColor) {
        if (this.mFillColor !== fillColor) {
            this.mFillColor = fillColor;
            this.triggerPropertyChange('fillColor', fillColor);
        }
    }
    get strokeColor() {
        return this.mStrokeColor;
    }
    set strokeColor(strokeColor) {
        if (this.mStrokeColor !== strokeColor) {
            this.mStrokeColor = strokeColor;
            this.triggerPropertyChange('strokeColor', strokeColor);
        }
    }
    get strokeStyle() {
        return this.mStrokeStyle;
    }
    set strokeStyle(strokeStyle) {
        if (this.mStrokeStyle !== strokeStyle) {
            this.mStrokeStyle = strokeStyle;
            this.triggerPropertyChange('strokeStyle', strokeStyle);
        }
    }
    get strokeWidth() {
        return this.mStrokeWidth;
    }
    set strokeWidth(strokeWidth) {
        if (this.mStrokeWidth !== strokeWidth) {
            this.mStrokeWidth = strokeWidth;
            this.triggerPropertyChange('strokeWidth', strokeWidth);
        }
    }
    get opacity() {
        return this.mOpacity;
    }
    set opacity(opacity) {
        if (this.mOpacity !== opacity) {
            this.mOpacity = opacity;
            this.triggerPropertyChange('opacity', opacity);
        }
    }
    get aspectRatio() {
        return this.mAspectRatio;
    }
    set aspectRatio(aspectRatio) {
        if (this.mAspectRatio !== aspectRatio) {
            this.mAspectRatio = aspectRatio;
            this.triggerPropertyChange('aspectRatio', aspectRatio);
        }
    }
    get gradient() {
        return this.mGradient;
    }
    set gradient(gradient) {
        if (this.mGradient !== gradient) {
            this.mGradient = gradient;
            const gradientElement = document.getElementById('gradientStyle');
            if (gradient) {
                gradientElement.className = 'row db-prop-row db-gradient-style-show';
            }
            else {
                gradientElement.className = 'row db-prop-row db-gradient-style-hide';
            }
            this.triggerPropertyChange('gradient', gradient);
        }
    }
    get gradientDirection() {
        return this.mGradientDirection;
    }
    set gradientDirection(gradientDirection) {
        if (this.mGradientDirection !== gradientDirection) {
            this.mGradientDirection = gradientDirection;
            this.triggerPropertyChange('gradient', true);
        }
    }
    get gradientColor() {
        return this.mGradientColor;
    }
    set gradientColor(gradientColor) {
        if (this.mGradientColor !== gradientColor) {
            this.mGradientColor = gradientColor;
            this.triggerPropertyChange('gradient', true);
        }
    }
    triggerPropertyChange(propName, propValue) {
        if (!isNullOrUndefined(this.propertyChange)) {
            this.propertyChange.call(this, { propertyName: propName, propertyValue: propValue });
        }
    }
    getGradient(node) {
        const gradientValue = this.getGradientDirectionValue(this.gradientDirection.value);
        node.style.gradient = {
            type: 'Linear',
            x1: gradientValue.x1, x2: gradientValue.x2, y1: gradientValue.y1, y2: gradientValue.y2,
            stops: [
                { color: node.style.fill, offset: 0 },
                { color: this.getColor(this.gradientColor.value), offset: 1 }
            ]
        };
    }
    getGradientDirectionValue(direction) {
        let gradientValue = {};
        let x1 = 0;
        let x2 = 0;
        let y1 = 0;
        let y2 = 0;
        if (direction === 'LeftToRight') {
            x1 = 100;
        }
        else if (direction === 'BottomToTop') {
            y2 = 100;
        }
        else if (direction === 'RightToLeft') {
            x2 = 100;
        }
        else {
            y1 = 100;
        }
        gradientValue = { 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 };
        return gradientValue;
    }
    getColor(colorName) {
        if (window.navigator && colorName.length === 9) {
            return colorName.substring(0, 7);
        }
        return colorName;
    }
}
export class ConnectorProperties {
    constructor() {
        this.opacityText = '100%';
        this.mLineColor = '#ffffff';
    }
    get lineColor() {
        return this.mLineColor;
    }
    set lineColor(lineColor) {
        if (this.mLineColor !== lineColor) {
            this.mLineColor = lineColor;
            this.triggerPropertyChange('lineColor', lineColor);
        }
    }
    get lineWidth() {
        return this.mLineWidth;
    }
    set lineWidth(lineWidth) {
        if (this.mLineWidth !== lineWidth) {
            this.mLineWidth = lineWidth;
            this.triggerPropertyChange('lineWidth', lineWidth);
        }
    }
    get lineStyle() {
        return this.mLineStyle;
    }
    set lineStyle(lineStyle) {
        if (this.mLineStyle !== lineStyle) {
            this.mLineStyle = lineStyle;
            this.triggerPropertyChange('lineStyle', lineStyle);
        }
    }
    get lineType() {
        return this.mLineType;
    }
    set lineType(lineType) {
        if (this.mLineType !== lineType) {
            this.mLineType = lineType;
            this.triggerPropertyChange('lineType', lineType);
        }
    }
    get lineJump() {
        return this.mLineJump;
    }
    set lineJump(lineJump) {
        if (this.mLineJump !== lineJump) {
            this.mLineJump = lineJump;
            if (lineJump) {
                document.getElementById('lineJumpSizeDiv').style.display = '';
            }
            else {
                document.getElementById('lineJumpSizeDiv').style.display = 'none';
            }
            this.triggerPropertyChange('lineJump', lineJump);
        }
    }
    get lineJumpSize() {
        return this.mLineJumpSize;
    }
    set lineJumpSize(lineJumpSize) {
        if (this.mLineJumpSize !== lineJumpSize) {
            this.mLineJumpSize = lineJumpSize;
            this.triggerPropertyChange('lineJumpSize', lineJumpSize);
        }
    }
    get sourceType() {
        return this.mSourceType;
    }
    set sourceType(sourceType) {
        if (this.mSourceType !== sourceType) {
            this.mSourceType = sourceType;
            this.triggerPropertyChange('sourceType', sourceType);
        }
    }
    get targetType() {
        return this.mTargetType;
    }
    set targetType(targetType) {
        if (this.mTargetType !== targetType) {
            this.mTargetType = targetType;
            this.triggerPropertyChange('targetType', targetType);
        }
    }
    get sourceSize() {
        return this.mSourceSize;
    }
    set sourceSize(sourceSize) {
        if (this.mSourceSize !== sourceSize) {
            this.mSourceSize = sourceSize;
            this.triggerPropertyChange('sourceSize', sourceSize);
        }
    }
    get targetSize() {
        return this.mTargetSize;
    }
    set targetSize(targetSize) {
        if (this.mTargetSize !== targetSize) {
            this.mTargetSize = targetSize;
            this.triggerPropertyChange('targetSize', targetSize);
        }
    }
    get opacity() {
        return this.mOpacity;
    }
    set opacity(opacity) {
        if (this.mOpacity !== opacity) {
            this.mOpacity = opacity;
            this.triggerPropertyChange('opacity', opacity);
        }
    }
    triggerPropertyChange(propName, propValue) {
        if (!isNullOrUndefined(this.propertyChange)) {
            this.propertyChange.call(this, { "propertyName": propName, "propertyValue": propValue });
        }
    }
}
export class TextProperties {
    constructor() {
        this.opacityText = '100%';
        this.textPositionDataSource = this.getNodeTextPositions();
        this.mTextPosition = '';
        this.mFontFamily = 'Arial';
        this.mFontColor = '#000000';
    }
    get textPosition() {
        return this.mTextPosition;
    }
    set textPosition(textPosition) {
        if (this.mTextPosition !== textPosition) {
            this.mTextPosition = textPosition;
            this.triggerPropertyChange('textPosition', textPosition);
        }
    }
    get fontFamily() {
        return this.mFontFamily;
    }
    set fontFamily(fontFamily) {
        if (this.mFontFamily !== fontFamily) {
            this.mFontFamily = fontFamily;
            this.triggerPropertyChange('fontFamily', fontFamily);
        }
    }
    get fontSize() {
        return this.mFontSize;
    }
    set fontSize(fontSize) {
        if (this.mFontSize !== fontSize) {
            this.mFontSize = fontSize;
            this.triggerPropertyChange('fontSize', fontSize);
        }
    }
    get fontColor() {
        return this.mFontColor;
    }
    set fontColor(fontColor) {
        if (this.mFontColor !== fontColor) {
            this.mFontColor = fontColor;
            this.triggerPropertyChange('fontColor', fontColor);
        }
    }
    get opacity() {
        return this.mOpacity;
    }
    set opacity(opacity) {
        if (this.mOpacity !== opacity) {
            this.mOpacity = opacity;
            this.triggerPropertyChange('opacity', opacity);
        }
    }
    getNodeTextPositions() {
        return [
            { text: 'TopLeft', value: 'TopLeft' }, { text: 'TopCenter', value: 'TopCenter' },
            { text: 'TopRight', value: 'TopRight' }, { text: 'MiddleLeft', value: 'MiddleLeft' },
            { text: 'Center', value: 'Center' }, { text: 'MiddleRight', value: 'MiddleRight' },
            { text: 'BottomLeft', value: 'BottomLeft' }, { text: 'BottomCenter', value: 'BottomCenter' },
            { text: 'BottomRight', value: 'BottomRight' },
        ];
    }
    getConnectorTextPositions() {
        return [
            { text: 'Before', value: 'Before' }, { text: 'Center', value: 'Center' },
            { text: 'After', value: 'After' },
        ];
    }
    triggerPropertyChange(propName, propValue) {
        if (!isNullOrUndefined(this.propertyChange)) {
            this.propertyChange.call(this, { "propertyName": propName, "propertyValue": propValue });
        }
    }
}
export class ExportSettings {
    constructor() {
        this.mFileName = 'Diagram';
        this.mFormat = 'JPG';
        this.mRegion = 'PageSettings';
    }
    get fileName() {
        return this.mFileName;
    }
    set fileName(fileName) {
        this.mFileName = fileName;
    }
    get format() {
        return this.mFormat;
    }
    set format(format) {
        this.mFormat = format;
    }
    get region() {
        return this.mRegion;
    }
    set region(region) {
        this.mRegion = region;
    }
}
export class PrintSettings {
    constructor() {
        this.mRegion = 'PageSettings';
        this.mPageWidth = 0;
        this.mPageHeight = 0;
        this.mIsPortrait = true;
        this.mIsLandscape = false;
        this.mMultiplePage = false;
        this.mPaperSize = 'Letter';
    }
    get region() {
        return this.mRegion;
    }
    set region(region) {
        this.mRegion = region;
    }
    get pageWidth() {
        return this.mPageWidth;
    }
    set pageWidth(pageWidth) {
        this.mPageWidth = pageWidth;
    }
    get pageHeight() {
        return this.mPageHeight;
    }
    set pageHeight(pageHeight) {
        this.mPageHeight = pageHeight;
    }
    get isPortrait() {
        return this.mIsPortrait;
    }
    set isPortrait(isPortrait) {
        this.mIsPortrait = isPortrait;
    }
    get isLandscape() {
        return this.mIsLandscape;
    }
    set isLandscape(isLandscape) {
        this.mIsLandscape = isLandscape;
    }
    get multiplePage() {
        return this.mMultiplePage;
    }
    set multiplePage(multiplePage) {
        this.mMultiplePage = multiplePage;
    }
    get paperSize() {
        return this.mPaperSize;
    }
    set paperSize(paperSize) {
        this.mPaperSize = paperSize;
        document.getElementById('printCustomSize').style.display = 'none';
        document.getElementById('printOrientation').style.display = 'none';
        if (paperSize === 'Custom') {
            document.getElementById('printCustomSize').style.display = '';
        }
        else {
            document.getElementById('printOrientation').style.display = '';
        }
    }
}
export class PageSettings {
    constructor() {
        this.pageWidth = 1056;
        this.pageHeight = 816;
        this.backgroundColor = '#ffffff';
        this.isPortrait = false;
        this.isLandscape = true;
        this.paperSize = 'Letter';
        this.pageBreaks = false;
    }
}
export class ScrollSettings {
    constructor() {
        this.currentZoom = '100%';
    }
}

export class OrgDataSettings {
    constructor() {
        this.dataSourceColumns = [];
        this.id = '';
        this.parent = '';
        this.nameField = '';
        this.bindingFields = [];
        this.imageField = '';
        this.additionalFields = [];
        this.fileformat = '';
        this.extensionType = '.csv';
        this.buttonContent = 'Download Example CSV';
    }
}
export class SelectorViewModel {
    constructor() {
        this.isCopyLayoutElement = false;
        this.currentDiagramName = '';
        this.preventPropertyChange = false;
        this.isModified = false;
        this.preventSelectionChange = false;
        this.pasteData = [];
        this.isLoading = false;
        this.isTemplateLoad = false;
        this.nodeProperties = new NodeProperties();
        this.textProperties = new TextProperties();
        this.connectorProperties = new ConnectorProperties();
        this.exportSettings = new ExportSettings();
        this.printSettings = new PrintSettings();
        this.pageSettings = new PageSettings();
        this.scrollSettings = new ScrollSettings();
        this.nodeProperties.propertyChange = this.nodePropertyChange.bind(this);
        this.connectorProperties.propertyChange = this.connectorPropertyChange.bind(this);
        this.textProperties.propertyChange = this.textPropertyChange.bind(this);
        
    }
    randomIdGenerator() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }
    getAbsolutePath() {
        return window.location.pathname;
    }
    nodePropertyChange(args) {
        if (!this.preventPropertyChange) {
            const diagram = this.selectedDiagram;
            if (diagram) {
                if (diagram.selectedItems.nodes.length > 0) {
                    const selectedNodes = this.selectedDiagram.selectedItems.nodes;
                    for (const value of selectedNodes) {
                        const node = value;
                        const propertyName1 = args.propertyName.toString().toLowerCase();
                        // eslint-disable-next-line
                        switch (propertyName1) {
                            case 'offsetx':
                                node.offsetX = this.nodeProperties.offsetX.value;
                                break;
                            case 'offsety':
                                node.offsetY = this.nodeProperties.offsetY.value;
                                break;
                            case 'width':
                                node.width = this.nodeProperties.width.value;
                                break;
                            case 'height':
                                node.height = this.nodeProperties.height.value;
                                break;
                            case 'rotateangle':
                                node.rotateAngle = this.nodeProperties.rotateAngle.value;
                                break;
                            case 'aspectratio':
                                node.constraints = node.constraints ^ NodeConstraints.AspectRatio;
                                break;
                        }
                        if (!node.children) {
                            this.applyNodeStyle(propertyName1, node, args.propertyValue);
                        }
                        else {
                            for (const value1 of node.children) {
                                this.applyNodeStyle(propertyName1, diagram.getObject(value1), args.propertyValue);
                            }
                        }
                    }
                    this.isModified = true;
                }
                if (diagram.connectors.length > 0) {
                   // eslint-disable-next-line
                    switch (args.propertyName.toString().toLowerCase()) {
                        case 'strokecolor':
                            this.connectorProperties.lineColor = this.getColor(this.nodeProperties.strokeColor);
                            break;
                        case 'strokewidth':
                            this.connectorProperties.lineWidth = this.nodeProperties.strokeWidth;
                            break;
                        case 'strokestyle':
                            this.connectorProperties.lineStyle = this.nodeProperties.strokeStyle;
                            break;
                        case 'opacity':
                            this.connectorProperties.opacity = this.nodeProperties.opacity;
                            break;
                    }
                    this.isModified = true;
                }
                diagram.dataBind();
            }
        }
    }
    connectorPropertyChange(args) {
        if (!this.preventPropertyChange) {
            const diagram = this.selectedDiagram;
            if (diagram && diagram.selectedItems.connectors.length > 0) {
                const selectedNodes = diagram.selectedItems.connectors;
                for (const value of selectedNodes) {
                    const connector = value;
                    // eslint-disable-next-line
                    switch (args.propertyName.toString().toLowerCase()) {
                        case 'linecolor':
                            connector.style.strokeColor = this.getColor(this.connectorProperties.lineColor.value);
                            connector.sourceDecorator.style = { fill: connector.style.strokeColor, strokeColor: connector.style.strokeColor };
                            connector.targetDecorator.style = { fill: connector.style.strokeColor, strokeColor: connector.style.strokeColor };
                            break;
                        case 'linewidth':
                            connector.style.strokeWidth = this.connectorProperties.lineWidth.value;
                            if (connector.sourceDecorator.style) {
                                connector.sourceDecorator.style.strokeWidth = connector.style.strokeWidth;
                            }
                            else {
                                connector.sourceDecorator.style = { strokeWidth: connector.style.strokeWidth };
                            }
                            if (connector.targetDecorator.style) {
                                connector.targetDecorator.style.strokeWidth = connector.style.strokeWidth;
                            }
                            else {
                                connector.targetDecorator.style = { strokeWidth: connector.style.strokeWidth };
                            }
                            break;
                        case 'linestyle':
                            connector.style.strokeDashArray = this.connectorProperties.lineStyle.value;
                            break;
                        case 'linetype':
                            connector.type = this.connectorProperties.lineType.value;
                            break;
                        case 'sourcetype':
                            connector.sourceDecorator.shape = this.connectorProperties.sourceType.value;
                            break;
                        case 'targettype':
                            connector.targetDecorator.shape = this.connectorProperties.targetType.value;
                            break;
                        case 'sourcesize':
                            connector.sourceDecorator.width = connector.sourceDecorator.height = this.connectorProperties.sourceSize.value;
                            break;
                        case 'targetsize':
                            connector.targetDecorator.width = connector.targetDecorator.height = this.connectorProperties.targetSize.value;
                            break;
                        case 'opacity':
                            connector.style.opacity = this.connectorProperties.opacity.value / 100;
                            connector.targetDecorator.style.opacity = connector.style.opacity;
                            connector.sourceDecorator.style.opacity = connector.style.opacity;
                            document.getElementById('connectorOpacitySliderText').value = this.connectorProperties.opacity.value + '%';
                            break;
                        case 'linejump':
                            if (this.connectorProperties.lineJump.value) {
                                connector.constraints = connector.constraints | ConnectorConstraints.Bridging;
                            }
                            else {
                                connector.constraints = connector.constraints & ~ConnectorConstraints.Bridging;
                            }
                            break;
                        case 'linejumpsize':
                            connector.bridgeSpace = this.connectorProperties.lineJumpSize.value;
                            break;
                    }
                }
                diagram.dataBind();
                this.isModified = true;
            }
        }
    }
    textPropertyChange(args) {
        if (!this.preventPropertyChange) {
            const diagram = this.selectedDiagram;
            if (diagram) {
                let selectedanys = diagram.selectedItems.nodes;
                selectedanys = selectedanys.concat(diagram.selectedItems.connectors);
                const propertyName = args.propertyName.toString().toLowerCase();
                if (selectedanys.length > 0) {
                    for (const value1 of selectedanys) {
                        const node = value1;
                        if (node instanceof Node || node instanceof Connector) {
                            if (node.annotations.length > 0) {
                                for (const value of node.annotations) {
                                    const annotation = value.style;
                                    this.updateTextProperties(propertyName, annotation);
                                }
                            }
                            else if (node.shape && node.shape.type === 'Text') {
                                this.updateTextProperties(propertyName, node.style);
                            }
                        }
                    }
                    diagram.dataBind();
                    this.isModified = true;
                }
            }
        }
    }
    updateTextProperties(propertyName, annotation) {
       // eslint-disable-next-line
        switch (propertyName) {
            case 'fontfamily':
                annotation.fontFamily = this.textProperties.fontFamily.value;
                break;
            case 'fontsize':
                annotation.fontSize = this.textProperties.fontSize.value;
                break;
            case 'fontcolor':
                annotation.color = this.getColor(this.textProperties.fontColor.value);
                break;
            case 'opacity':
                annotation.opacity = this.textProperties.opacity.value / 100;
                document.getElementById('textOpacityText').value = this.textProperties.opacity.value + '%';
                break;
        }
    }
    
   
    getColor(colorName) {
        if (window.navigator && colorName.length === 9) {
            return colorName.substring(0, 7);
        }
        return colorName;
    }
    applyNodeStyle(propertyName, node, value) {
        // const addInfo: any = node.addInfo || {};
        // eslint-disable-next-line
        switch (propertyName) {
            case 'fillcolor':
                node.style.fill = this.getColor(value);
                if (this.nodeProperties.gradient) {
                    this.nodeProperties.getGradient(node);
                }
                break;
            case 'strokecolor':
                node.style.strokeColor = this.getColor(this.nodeProperties.strokeColor.value);
                break;
            case 'strokewidth':
                node.style.strokeWidth = this.nodeProperties.strokeWidth.value;
                break;
            case 'strokestyle':
                node.style.strokeDashArray = this.nodeProperties.strokeStyle.value;
                break;
            case 'opacity':
                node.style.opacity = this.nodeProperties.opacity.value / 100;
                document.getElementById('nodeOpacitySliderText').value = (this.nodeProperties.opacity.value) + '%';
                break;
            case 'gradient':
                if (value && !value.checked) {
                    node.style.gradient.type = 'None';
                }
                else {
                    this.nodeProperties.getGradient(node);
                }
                break;
            case 'gradientdirection':
            case 'gradientcolor':
                this.nodeProperties.getGradient(node);
                break;
        }
    }
}