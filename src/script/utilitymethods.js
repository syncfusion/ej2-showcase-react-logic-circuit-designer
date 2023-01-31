/**
 *  Home page handler
 */
 import { NodeConstraints, Node } from '@syncfusion/ej2-diagrams';
 import { Ajax } from '@syncfusion/ej2-base';

 export class PaperSize {
 }
 export class UtilityMethods {
     constructor() {
         this.fillColorCode = ['#C4F2E8', '#F7E0B3', '#E5FEE4', '#E9D4F1', '#D4EFED', '#DEE2FF'];
         this.borderColorCode = ['#8BC1B7', '#E2C180', '#ACCBAA', '#D1AFDF', '#90C8C2', '#BBBFD6'];
         
     }
     bindNodeProperties(node, selectedItem) {
         selectedItem.preventPropertyChange = true;
         selectedItem.nodeProperties.offsetX.value = (Math.round(node.offsetX * 100) / 100);
         selectedItem.nodeProperties.offsetY.value = (Math.round(node.offsetY * 100) / 100);
         selectedItem.nodeProperties.width.value = node.width ? (Math.round(node.width * 100) / 100) : (Math.round(node.minWidth * 100) / 100);
         selectedItem.nodeProperties.height.value = node.height ? (Math.round(node.height * 100) / 100) : (Math.round(node.minHeight * 100) / 100);
         selectedItem.nodeProperties.rotateAngle.value = node.rotateAngle;
         selectedItem.nodeProperties.strokeColor.value = this.getHexColor(node.style.strokeColor);
         selectedItem.nodeProperties.strokeStyle.value = node.style.strokeDashArray ? node.style.strokeDashArray : 'None';
         selectedItem.nodeProperties.strokeWidth.value = node.style.strokeWidth;
         selectedItem.nodeProperties.fillColor.value = this.getHexColor(node.style.fill);
         selectedItem.nodeProperties.opacity.value = node.style.opacity * 100;
         selectedItem.nodeProperties.opacityText = selectedItem.nodeProperties.opacity.value + '%';
         selectedItem.nodeProperties.aspectRatio.checked = node.constraints & NodeConstraints.AspectRatio ? true : false;
         selectedItem.nodeProperties.gradient = node.style.gradient.type !== 'None' ? true : false;
         const gradientElement = document.getElementById('gradientStyle');
         if (selectedItem.nodeProperties.gradient) {
             gradientElement.className = 'row db-prop-row db-gradient-style-show';
             selectedItem.nodeProperties.gradientColor.value = node.style.gradient.stops[1].color;
             const gradient = node.style.gradient;
             if (gradient.x1) {
                 selectedItem.nodeProperties.gradientDirection.value = 'North';
             }
             else if (gradient.x2) {
                 selectedItem.nodeProperties.gradientDirection.value = 'East';
             }
             else if (gradient.y1) {
                 selectedItem.nodeProperties.gradientDirection.value = 'West';
             }
             else if (gradient.y2) {
                 selectedItem.nodeProperties.gradientDirection.value = 'South';
             }
         }
         else {
             gradientElement.className = 'row db-prop-row db-gradient-style-hide';
             selectedItem.nodeProperties.gradientColor.value = '#ffffff';
             selectedItem.nodeProperties.gradientDirection.value = 'South';
         }
         selectedItem.preventPropertyChange = false;
     }
     
     bindTextProperties(text, selectedItem) {
         selectedItem.preventPropertyChange = true;
         selectedItem.textProperties.fontColor.value = this.getHexColor(text.color);
         selectedItem.textProperties.fontFamily.value = text.fontFamily;
         selectedItem.textProperties.fontSize.value = text.fontSize;
         selectedItem.textProperties.opacity.value = text.opacity * 100;
         selectedItem.textProperties.opacityText = selectedItem.textProperties.opacity + '%';
         let toolbarTextStyle = document.getElementById('toolbarTextStyle');
         if (toolbarTextStyle) {
             toolbarTextStyle = toolbarTextStyle.ej2_instances[0];
         }
         if (toolbarTextStyle) {
             toolbarTextStyle.items[0].cssClass = text.bold ? 'tb-item-start tb-item-selected' : 'tb-item-start';
             toolbarTextStyle.items[1].cssClass = text.italic ? 'tb-item-middle tb-item-selected' : 'tb-item-middle';
             toolbarTextStyle.items[2].cssClass = text.textDecoration === 'Underline' ? 'tb-item-end tb-item-selected' : 'tb-item-end';
         }
         this.updateTextAlign(text.textAlign);
         selectedItem.preventPropertyChange = false;
     }
     updateTextAlign(textAlign) {
         let toolbarTextSubAlignment = document.getElementById('toolbarTextSubAlignment');
         if (toolbarTextSubAlignment) {
             toolbarTextSubAlignment = toolbarTextSubAlignment.ej2_instances[0];
         }
         if (toolbarTextSubAlignment) {
             for (const toolbarText of toolbarTextSubAlignment.items) {
                 toolbarText.cssClass = toolbarText.cssClass.replace(' tb-item-selected', '');
             }
             const index = textAlign === 'Left' ? 0 : (textAlign === 'Center' ? 1 : 2);
             toolbarTextSubAlignment.items[index].cssClass = toolbarTextSubAlignment.items[index].cssClass + ' tb-item-selected';
         }
     }
     updateHorVertAlign(horizontalAlignment, verticalAlignment) {
         let toolbarHorVerAlignment = document.getElementById('toolbarTextAlignment');
         if (toolbarHorVerAlignment) {
             toolbarHorVerAlignment = toolbarHorVerAlignment.ej2_instances[0];
         }
         if (toolbarHorVerAlignment) {
             for (const toolbarHorVer of toolbarHorVerAlignment.items) {
                 toolbarHorVer.cssClass = toolbarHorVer.cssClass.replace(' tb-item-selected', '');
             }
             let index = horizontalAlignment === 'Right' ? 0 : (horizontalAlignment === 'Center' ? 1 : 2);
             toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
             index = verticalAlignment === 'Bottom' ? 3 : (verticalAlignment === 'Center' ? 4 : 5);
             toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
         }
     }
     bindConnectorProperties(connector, selectedItem) {
         selectedItem.preventPropertyChange = true;
         selectedItem.connectorProperties.lineColor.value = this.getHexColor(connector.style.strokeColor);
         selectedItem.connectorProperties.lineStyle.value = connector.style.strokeDashArray ? connector.style.strokeDashArray : 'None';
         selectedItem.connectorProperties.lineType.value = connector.type;
         selectedItem.connectorProperties.lineWidth.value = connector.style.strokeWidth;
         selectedItem.connectorProperties.sourceType.value = connector.sourceDecorator.shape;
         selectedItem.connectorProperties.targetType.value = connector.targetDecorator.shape;
         selectedItem.connectorProperties.opacity.value = connector.style.opacity * 100;
         selectedItem.connectorProperties.opacityText = selectedItem.connectorProperties.opacity + '%';
         selectedItem.connectorProperties.lineJumpSize.value = connector.bridgeSpace;
         selectedItem.connectorProperties.lineJump.value = connector.constraints ? true : false;
         if (selectedItem.connectorProperties.lineJump.value) {
             document.getElementById('lineJumpSizeDiv').style.display = '';
         }
         else {
             document.getElementById('lineJumpSizeDiv').style.display = 'none';
         }
         selectedItem.connectorProperties.targetSize.value = connector.targetDecorator.width;
         selectedItem.connectorProperties.sourceSize.value = connector.sourceDecorator.width;
         selectedItem.preventPropertyChange = false;
     }
     getHexColor(colorStr) {
         const colors = [];
         // let a: HTMLDivElement = document.createElement('div');
         // a.style.color = colorStr;
         // let colors: number[] = window.getComputedStyle(document.body.appendChild(a)).color.match(/\d+/g).map(
         //     (a: string): number => {
         //         return parseInt(a, 10);
         //     }
         // );
         // document.body.removeChild(a);
         return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : '';
     }
     getOffset(position) {
         switch (position.toLowerCase()) {
             case 'topleft':
                 return { x: 0, y: 0 };
             case 'topcenter':
                 return { x: 0.5, y: 0 };
             case 'topright':
                 return { x: 1, y: 0 };
             case 'middleleft':
                 return { x: 0, y: 0.5 };
             default:
                 return { x: 0.5, y: 0.5 };
             case 'middleright':
                 return { x: 1, y: 0.5 };
             case 'bottomleft':
                 return { x: 0, y: 1 };
             case 'bottomcenter':
                 return { x: 0.5, y: 1 };
             case 'bottomright':
                 return { x: 1, y: 1 };
         }
     }
     getPosition(offset) {
         if (offset.x === 0 && offset.y === 0) {
             return 'TopLeft';
         }
         else if (offset.x === 0.5 && offset.y === 0) {
             return 'TopCenter';
         }
         else if (offset.x === 1 && offset.y === 0) {
             return 'TopRight';
         }
         else if (offset.x === 0 && offset.y === 0.5) {
             return 'MiddleLeft';
         }
         else if (offset.x === 1 && offset.y === 0.5) {
             return 'MiddleRight';
         }
         else if (offset.x === 0 && offset.y === 1) {
             return 'BottomLeft';
         }
         else if (offset.x === 0.5 && offset.y === 1) {
             return 'BottomCenter';
         }
         else if (offset.x === 1 && offset.y === 1) {
             return 'BottomRight';
         }
         else {
             return 'Center';
         }
     }
     hideElements(elementType, diagram, diagramType) {
         const diagramContainer = document.getElementsByClassName('diagrambuilder-container')[0];
         if (diagramContainer.classList.contains(elementType)) {
             if (!(diagramType === 'mindmap-diagram' || diagramType === 'orgchart-diagram')) {
                 diagramContainer.classList.remove(elementType);
             }
         }
         else {
             diagramContainer.classList.add(elementType);
         }
         if (diagram) {
             diagram.updateViewPort();
         }
     }
     objectTypeChange(objectType) {
         document.getElementById('diagramPropertyContainer').style.display = 'none';
         document.getElementById('nodePropertyContainer').style.display = 'none';
         document.getElementById('textPropertyContainer').style.display = 'none';
         document.getElementById('connectorPropertyContainer').style.display = 'none';
         // eslint-disable-next-line
         switch (objectType) {
             case 'diagram':
                 document.getElementById('diagramPropertyContainer').style.display = '';
                 break;
             case 'node':
                 document.getElementById('nodePropertyContainer').style.display = '';
                 break;
             case 'connector':
                 document.getElementById('connectorPropertyContainer').style.display = '';
                 break;
         }
     }
    
    
     readTextFile(file, selectedItem) {
         document.getElementsByClassName('sb-content-overlay')[0].style.display = '';
         const ajax = new Ajax(file, 'GET', true);
         ajax.send().then();
         // let value = '../assets/dbstyle/flowchart_Images/CreditCardFlow.json'
         // let context: any = this;
         ajax.onSuccess = (data) => {
             selectedItem.preventSelectionChange = true;
             selectedItem.isTemplateLoad = true;
             this.page.loadPage(data);
             this.page. Settings();
             selectedItem.isTemplateLoad = false;
            
             selectedItem.preventSelectionChange = false;
             document.getElementsByClassName('sb-content-overlay')[0].style.display = 'none';
         };
         ajax.onFailure = (data) => {
             document.getElementsByClassName('sb-content-overlay')[0].style.display = 'none';
         };
         ajax.onError = (evt) => {
             document.getElementsByClassName('sb-content-overlay')[0].style.display = 'none';
             return {};
         };
     }
     
    
     enableToolbarItems(selectedItems) {
         const toolbarContainer = document.getElementsByClassName('db-toolbar-container')[0];
         let toolbarClassName = 'db-toolbar-container';
         if (toolbarContainer.classList.contains('db-undo')) {
             toolbarClassName += ' db-undo';
         }
         if (toolbarContainer.classList.contains('db-redo')) {
             toolbarClassName += ' db-redo';
         }
         toolbarContainer.className = toolbarClassName;
         if (selectedItems.length === 1) {
             toolbarContainer.className = toolbarContainer.className + ' db-select';
             if (selectedItems[0] instanceof Node) {
                 if (selectedItems[0].children) {
                     if (selectedItems[0].children.length > 2) {
                         toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple db-node db-group';
                     }
                     else {
                         toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-node db-group';
                     }
                 }
                 else {
                     toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                 }
             }
         }
         else if (selectedItems.length === 2) {
             toolbarContainer.className = toolbarContainer.className + ' db-select db-double';
         }
         else if (selectedItems.length > 2) {
             toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple';
         }
         if (selectedItems.length > 1) {
             // let isNodeExist: boolean = false;
             for (const item of selectedItems) {
                 if (item instanceof Node) {
                     toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                     break;
                 }
             }
         }
     }
     enableMenuItems(itemText, selectedItem) {
         if (selectedItem && selectedItem.selectedDiagram) {
             let selectedItems = selectedItem.selectedDiagram.selectedItems.nodes;
             selectedItems = selectedItems.concat(selectedItem.selectedDiagram.selectedItems.connectors);
             if (itemText) {
                 const commandType = itemText.replace(/[' ']/g, '');
                 if (selectedItems.length === 0 || selectedItem.diagramType !== 'GeneralDiagram') {
                    // eslint-disable-next-line
                     switch (commandType.toLowerCase()) {
                         case 'edittooltip':
                             let disable = false;
                             if (!(selectedItems.length === 1)) {
                                 disable = true;
                             }
                             return disable;
                         case 'cut':
                             return true;
                         case 'copy':
                             return true;
                         case 'delete':
                             return true;
                         case 'duplicate':
                             return true;
                     }
                 }
                 if (selectedItems.length > 1) {
                    // eslint-disable-next-line
                     switch (commandType.toLowerCase()) {
                         case 'edittooltip':
                             return true;
                     }
                 }
                 if (selectedItem.pasteData.length === 0 && itemText === 'Paste') {
                     return true;
                 }
                 if (itemText === 'Undo' && selectedItem.selectedDiagram.historyManager.undoStack.length === 0) {
                     return true;
                 }
                 if (itemText === 'Redo' && selectedItem.selectedDiagram.historyManager.redoStack.length === 0) {
                     return true;
                 }
                 if (itemText === 'Select All') {
                     if (selectedItem.diagramType !== 'GeneralDiagram' || (selectedItem.selectedDiagram.nodes.length === 0 && selectedItem.selectedDiagram.connectors.length === 0)) {
                         return true;
                     }
                 }
                 if (selectedItem.diagramType !== 'GeneralDiagram') {
                     if (itemText === 'Themes' || itemText === 'Paste' || itemText === 'Show Rulers' || itemText === 'Show Guides'
                         || itemText === 'Show Grid' || itemText === 'Snap To Grid' || itemText === 'Show Stencil') {
                         return true;
                     }
                 }
             }
         }
         return false;
     }
     enableArrangeMenuItems(selectedItem) {
         // const contextInstance: any = document.getElementById('arrangeContextMenu');
         // const contextMenu: ContextMenu = contextInstance.ej2_instances[0] as ContextMenu;
         const contextMenu = this.arrangeContextMenu;
         let selectedItems = selectedItem.selectedDiagram.selectedItems.nodes;
         selectedItems = selectedItems.concat(selectedItem.selectedDiagram.selectedItems.connectors);
         for (const menuItem of contextMenu.items) {
             contextMenu.enableItems([menuItem.text], false);
         }
         if (selectedItem.diagramType === 'GeneralDiagram') {
             if (selectedItems.length > 1) {
                 contextMenu.enableItems(['Align Objects', 'Distribute Objects', 'Match Size', 'Lock', 'Unlock', 'Group'], true);
             }
             else if (selectedItems.length === 1) {
                 contextMenu.enableItems(['Send To Back', 'Bring To Front', 'Send Backward', 'Bring Forward']);
                 const object = selectedItems[0];
                 if (object instanceof Node) {
                     if (object.children && object.children.length > 0) {
                         contextMenu.enableItems(['Ungroup']);
                     }
                     if (object.constraints & NodeConstraints.Drag) {
                         contextMenu.enableItems(['Lock'], true);
                     }
                     else {
                         contextMenu.enableItems(['Unlock'], true);
                     }
                 }
             }
         }
     }
     getPaperSize(paperName) {
         const paperSize = new PaperSize();
         // eslint-disable-next-line
         switch (paperName) {
             case 'Letter':
                 paperSize.pageWidth = 816;
                 paperSize.pageHeight = 1056;
                 break;
             case 'Legal':
                 paperSize.pageWidth = 816;
                 paperSize.pageHeight = 1344;
                 break;
             case 'Tabloid':
                 paperSize.pageWidth = 1056;
                 paperSize.pageHeight = 1632;
                 break;
             case 'A3':
                 paperSize.pageWidth = 1122;
                 paperSize.pageHeight = 1587;
                 break;
             case 'A4':
                 paperSize.pageWidth = 793;
                 paperSize.pageHeight = 1122;
                 break;
             case 'A5':
                 paperSize.pageWidth = 559;
                 paperSize.pageHeight = 793;
                 break;
             case 'A6':
                 paperSize.pageWidth = 396;
                 paperSize.pageHeight = 559;
                 break;
         }
         return paperSize;
     }
     removeChild(selectedItem) {
         const diagram = selectedItem.selectedDiagram;
         if (diagram.selectedItems.nodes.length > 0) {
             selectedItem.preventPropertyChange = true;
             diagram.historyManager.startGroupAction();
             this.removeSubChild(diagram.selectedItems.nodes[0], selectedItem);
             diagram.historyManager.endGroupAction();
             diagram.doLayout();
             selectedItem.preventPropertyChange = false;
         }
         selectedItem.isModified = true;
     }
     
     hideMenuItems() {
         const btnWindow = document.getElementById('btnWindowMenu');
         btnWindow.ej2_instances[0].items[1].iconCss = '';
         const btnView = document.getElementById('btnViewMenu');
         btnView.ej2_instances[0].items[7].iconCss = '';
     }
     
 }