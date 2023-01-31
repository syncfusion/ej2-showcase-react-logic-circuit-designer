import { createElement, closest,formatUnit } from "@syncfusion/ej2-base";
import { DiagramComponent, SelectorConstraints, Overview, SymbolPaletteComponent, Keys, KeyModifiers, DiagramAction, DiagramTools, NodeConstraints, ConnectorConstraints, UndoRedo, DiagramContextMenu, Snapping, DataBinding, PrintAndExport, BpmnDiagrams, HierarchicalTree, MindMap as MindMapTree, ConnectorBridging, LayoutAnimation, SymbolPalette } from "@syncfusion/ej2-react-diagrams";
import { Diagram,SnapConstraints,ControlPointsVisibility ,BezierSmoothness } from "@syncfusion/ej2-react-diagrams";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { DiagramClientSideEvents, OrgChartPropertyBinding } from "./script/events";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ToolbarComponent, ItemsDirective, ItemDirective, ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { Uploader } from '@syncfusion/ej2-react-inputs';
import { RadioButtonComponent, ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { Palettes } from "./script/palettes";
import { DropDownDataSources } from './script/dropdowndatasource';
import { DiagramPropertyBinding } from './script/events';
import { SelectorViewModel } from "./script/selectedItem";
import { PortVisibility, PortConstraints } from '@syncfusion/ej2-diagrams';
import { NumericTextBoxComponent, TicksData } from "@syncfusion/ej2-react-inputs";
Diagram.Inject(UndoRedo, DiagramContextMenu, Snapping, DataBinding);
Diagram.Inject(PrintAndExport, BpmnDiagrams, HierarchicalTree, MindMapTree, ConnectorBridging, LayoutAnimation);
SymbolPalette.Inject(BpmnDiagrams);
var SwitchOffOuterRect = 'M60 27C60 29.7614 62.2386 32 65 32C67.7614 32 70 29.7614 70 27C70 24.2386 67.7614 22 65 22C62.2386 22 60 24.2386 60 27ZM60 27H43M43 27V1H1V53H43V27Z';
 var SwitchOffInnerRect = 'M36 46V8H7V46H36Z';
var SwitchoffButton = 'M33 15L32 12H11L10 15M33 15H10M33 15L31 27M10 15L12 27M31 27H12M31 27V42H12V27';

var SwitchOnOuterRect = 'M60 27C60 29.7614 62.2386 32 65 32C67.7614 32 70 29.7614 70 27C70 24.2386 67.7614 22 65 22C62.2386 22 60 24.2386 60 27ZM60 27H43M43 27V1H1V53H43V27Z';
var SwitchOnInnerRect = 'M36 46V8H7V46H36Z';
var SWitchOnButton = 'M33 39L31.5 42H11L10 39M33 39H10M33 39L31 27M10 39L12 27M12 27H31M12 27V12H31V27';

var PushButtonOuterRect = 'M1 1V0H0V1H1ZM43 1H44V0H43V1ZM43 53V54H44V53H43ZM1 53H0V54H1V53ZM69 27C69 29.2091 67.2091 31 65 31V33C68.3137 33 71 30.3137 71 27H69ZM65 31C62.7909 31 61 29.2091 61 27H59C59 30.3137 61.6863 33 65 33V31ZM61 27C61 24.7909 62.7909 23 65 23V21C61.6863 21 59 23.6863 59 27H61ZM65 23C67.2091 23 69 24.7909 69 27H71C71 23.6863 68.3137 21 65 21V23ZM43 28H60V26H43V28ZM1 2H43V0H1V2ZM43 52H1V54H43V52ZM2 53V1H0V53H2ZM42 1V27H44V1H42ZM42 27V53H44V27H42Z';
var PushButtonInnerCircle = 'M29 27C29 30.866 25.866 34 22 34C18.134 34 15 30.866 15 27C15 23.134 18.134 20 22 20C25.866 20 29 23.134 29 27Z';
var PushButtonOuterCircle = 'M34 27C34 33.6274 28.6274 39 22 39C15.3726 39 10 33.6274 10 27C10 20.3726 15.3726 15 22 15C28.6274 15 34 20.3726 34 27Z';
var orData = 'M70.9412 20L69.9412 20.0012L70.9412 20ZM33.5076 11L34.4744 10.7444L33.5076 11ZM33.7565 29L34.7303 29.2276L33.7565 29ZM29 1L29.0345 0.000594001C28.6575 -0.0124037 28.3053 0.187777 28.1237 0.518291C27.942 0.848804 27.9617 1.25342 28.1747 1.56469L29 1ZM29 40L28.1747 39.4353C27.9617 39.7466 27.942 40.1512 28.1237 40.4817C28.3053 40.8122 28.6575 41.0124 29.0345 40.9994L29 40ZM66.5674 29.1936L67.3548 29.8101L67.3548 29.8101L66.5674 29.1936ZM45.21 39.441L45.2445 40.4404L45.2445 40.4404L45.21 39.441ZM45.6846 1.57533L45.719 0.575923L45.6846 1.57533ZM66.5 11L67.2718 10.3641L66.5 11ZM10 11C10 13.2091 8.20914 15 6 15V17C9.31371 17 12 14.3137 12 11H10ZM6 15C3.79086 15 2 13.2091 2 11H0C0 14.3137 2.68629 17 6 17V15ZM2 11C2 8.79086 3.79086 7 6 7V5C2.68629 5 0 7.68629 0 11H2ZM6 7C8.20914 7 10 8.79086 10 11H12C12 7.68629 9.31371 5 6 5V7ZM10 29C10 31.2091 8.20914 33 6 33V35C9.31371 35 12 32.3137 12 29H10ZM6 33C3.79086 33 2 31.2091 2 29H0C0 32.3137 2.68629 35 6 35V33ZM2 29C2 26.7909 3.79086 25 6 25V23C2.68629 23 0 25.6863 0 29H2ZM6 25C8.20914 25 10 26.7909 10 29H12C12 25.6863 9.31371 23 6 23V25ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM70.9412 21H89V19H70.9412V21ZM11 12H33.5076V10H11V12ZM11 30H33.7565V28H11V30ZM28.9655 1.99941L45.6501 2.57474L45.719 0.575923L29.0345 0.000594001L28.9655 1.99941ZM45.1755 38.4416L28.9655 39.0006L29.0345 40.9994L45.2445 40.4404L45.1755 38.4416ZM65.7801 28.5771C60.9514 34.7438 53.1021 38.1683 45.1755 38.4416L45.2445 40.4404C53.6589 40.1503 62.1031 36.517 67.3548 29.8101L65.7801 28.5771ZM45.6501 2.57474C53.3279 2.83949 60.9322 5.81523 65.7282 11.6359L67.2718 10.3641C62.0267 3.99837 53.8221 0.85534 45.719 0.575923L45.6501 2.57474ZM34.4744 10.7444C33.499 7.05472 31.9517 3.54311 29.8253 0.435311L28.1747 1.56469C30.1606 4.46711 31.6183 7.76579 32.5408 11.2556L34.4744 10.7444ZM29.8253 40.5647C32.1482 37.1698 33.7801 33.2928 34.7303 29.2276L32.7827 28.7724C31.8833 32.6208 30.3442 36.2645 28.1747 39.4353L29.8253 40.5647ZM34.7303 29.2276C36.1399 23.1963 36.055 16.7243 34.4744 10.7444L32.5408 11.2556C34.0374 16.9173 34.1184 23.0575 32.7827 28.7724L34.7303 29.2276ZM65.7282 11.6359C68.669 15.205 69.9383 17.651 69.9412 20.0012L71.9412 19.9988C71.9374 16.896 70.246 13.9738 67.2718 10.3641L65.7282 11.6359ZM69.9412 20.0012C69.944 22.3473 68.6863 24.8654 65.7801 28.5771L67.3548 29.8101C70.2867 26.0656 71.9449 23.0763 71.9412 19.9988L69.9412 20.0012Z';
var andData = 'M29 1C29 0.447715 29.4477 0 30 0H52.5C63.4538 0 72.4534 8.14084 72.976 19H88.083C88.559 16.1623 91.027 14 94 14C97.3137 14 100 16.6863 100 20C100 23.3137 97.3137 26 94 26C91.027 26 88.559 23.8377 88.083 21H72.9761C72.4556 31.8562 63.5176 41 52.5 41H30C29.4477 41 29 40.5523 29 40V30H11.917C11.441 32.8377 8.973 35 6 35C2.68629 35 0 32.3137 0 29C0 25.6863 2.68629 23 6 23C8.973 23 11.441 25.1623 11.917 28H29V12H11.917C11.441 14.8377 8.973 17 6 17C2.68629 17 0 14.3137 0 11C0 7.68629 2.68629 5 6 5C8.973 5 11.441 7.16229 11.917 10H29V1ZM31 2V39H52.5C62.6847 39 71 30.2504 71 20C71 9.81642 62.7516 2 52.5 2H31ZM6 7C3.79086 7 2 8.79086 2 11C2 13.2091 3.79086 15 6 15C8.20914 15 10 13.2091 10 11C10 8.79086 8.20914 7 6 7ZM94 16C91.7909 16 90 17.7909 90 20C90 22.2091 91.7909 24 94 24C96.2091 24 98 22.2091 98 20C98 17.7909 96.2091 16 94 16ZM6 25C3.79086 25 2 26.7909 2 29C2 31.2091 3.79086 33 6 33C8.20914 33 10 31.2091 10 29C10 26.7909 8.20914 25 6 25Z';
var notData = 'M27 1L27.4122 0.0888921C27.1027 -0.0511131 26.7433 -0.0244422 26.4579 0.159712C26.1724 0.343866 26 0.66032 26 1H27ZM27 40H26C26 40.3432 26.176 40.6623 26.4661 40.8456C26.7563 41.0288 27.1201 41.0504 27.4299 40.9029L27 40ZM10 20C10 22.2091 8.20914 24 6 24V26C9.31371 26 12 23.3137 12 20H10ZM6 24C3.79086 24 2 22.2091 2 20H0C0 23.3137 2.68629 26 6 26V24ZM2 20C2 17.7909 3.79086 16 6 16V14C2.68629 14 0 16.6863 0 20H2ZM6 16C8.20914 16 10 17.7909 10 20H12C12 16.6863 9.31371 14 6 14V16ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM74 20C74 21.1046 73.1046 22 72 22V24C74.2091 24 76 22.2091 76 20H74ZM72 22C70.8954 22 70 21.1046 70 20H68C68 22.2091 69.7909 24 72 24V22ZM70 20C70 18.8954 70.8954 18 72 18V16C69.7909 16 68 17.7909 68 20H70ZM72 18C73.1046 18 74 18.8954 74 20H76C76 17.7909 74.2091 16 72 16V18ZM75.5 21H89V19H75.5V21ZM26 1V40H28V1H26ZM27.4299 40.9029L69.4299 20.9029L68.5701 19.0971L26.5701 39.0971L27.4299 40.9029ZM69.4122 19.0889L27.4122 0.0888921L26.5878 1.91111L68.5878 20.9111L69.4122 19.0889ZM11.5 21H26V19H11.5V21Z';
var xorData = 'M70.9412 20L69.9412 20.0012L70.9412 20ZM29 1L29.0345 0.000594001C28.6575 -0.0124037 28.3053 0.187777 28.1237 0.518291C27.942 0.848804 27.9617 1.25342 28.1747 1.56469L29 1ZM29 40L28.1747 39.4353C27.9617 39.7466 27.942 40.1512 28.1237 40.4817C28.3053 40.8122 28.6575 41.0124 29.0345 40.9994L29 40ZM66.5674 29.1936L67.3548 29.8101L67.3548 29.8101L66.5674 29.1936ZM45.21 39.441L45.2445 40.4404L45.2445 40.4404L45.21 39.441ZM45.6846 1.57533L45.719 0.575923L45.6846 1.57533ZM66.5 11L67.2718 10.3641L66.5 11ZM21.1747 39.4353C20.8628 39.8911 20.9795 40.5134 21.4353 40.8253C21.8911 41.1372 22.5134 41.0205 22.8253 40.5647L21.1747 39.4353ZM22.8253 0.435311C22.5134 -0.0204919 21.8911 -0.137173 21.4353 0.174696C20.9795 0.486566 20.8628 1.10889 21.1747 1.56469L22.8253 0.435311ZM10 11C10 13.2091 8.20914 15 6 15V17C9.31371 17 12 14.3137 12 11H10ZM6 15C3.79086 15 2 13.2091 2 11H0C0 14.3137 2.68629 17 6 17V15ZM2 11C2 8.79086 3.79086 7 6 7V5C2.68629 5 0 7.68629 0 11H2ZM6 7C8.20914 7 10 8.79086 10 11H12C12 7.68629 9.31371 5 6 5V7ZM10 29C10 31.2091 8.20914 33 6 33V35C9.31371 35 12 32.3137 12 29H10ZM6 33C3.79086 33 2 31.2091 2 29H0C0 32.3137 2.68629 35 6 35V33ZM2 29C2 26.7909 3.79086 25 6 25V23C2.68629 23 0 25.6863 0 29H2ZM6 25C8.20914 25 10 26.7909 10 29H12C12 25.6863 9.31371 23 6 23V25ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM70.9412 21H89V19H70.9412V21ZM11 12H33.5076V10H11V12ZM11 30H33.7565V28H11V30ZM28.9655 1.99941L45.6501 2.57474L45.719 0.575923L29.0345 0.000594001L28.9655 1.99941ZM45.1755 38.4416L28.9655 39.0006L29.0345 40.9994L45.2445 40.4404L45.1755 38.4416ZM65.7801 28.5771C60.9514 34.7438 53.1021 38.1683 45.1755 38.4416L45.2445 40.4404C53.6589 40.1503 62.1031 36.517 67.3548 29.8101L65.7801 28.5771ZM45.6501 2.57474C53.3279 2.83949 60.9322 5.81523 65.7282 11.6359L67.2718 10.3641C62.0267 3.99837 53.8221 0.85534 45.719 0.575923L45.6501 2.57474ZM22.8253 40.5647C30.6947 29.0635 30.6947 11.9365 22.8253 0.435311L21.1747 1.56469C28.5782 12.385 28.5782 28.615 21.1747 39.4353L22.8253 40.5647ZM65.7282 11.6359C68.669 15.205 69.9383 17.651 69.9412 20.0012L71.9412 19.9988C71.9374 16.896 70.246 13.9738 67.2718 10.3641L65.7282 11.6359ZM69.9412 20.0012C69.944 22.3473 68.6863 24.8654 65.7801 28.5771L67.3548 29.8101C70.2867 26.0656 71.9449 23.0763 71.9412 19.9988L69.9412 20.0012ZM29.8253 40.5647C32.1482 37.1698 33.7801 33.2928 34.7303 29.2276L32.7827 28.7724C31.8833 32.6208 30.3442 36.2645 28.1747 39.4353L29.8253 40.5647ZM34.7303 29.2276C36.1399 23.1963 36.055 16.7243 34.4744 10.7444L32.5408 11.2556C34.0374 16.9173 34.1184 23.0575 32.7827 28.7724L34.7303 29.2276ZM34.4744 10.7444C33.499 7.05472 31.9517 3.54311 29.8253 0.435311L28.1747 1.56469C30.1606 4.46711 31.6183 7.76579 32.5408 11.2556L34.4744 10.7444Z';
var xnorData = 'M27 2L27.0345 1.00059L25.0579 0.932436L26.1747 2.56469L27 2ZM27 41L26.1747 40.4353L25.0579 42.0676L27.0345 41.9994L27 41ZM64.3762 30.3095L65.1636 30.926L65.1636 30.926L64.3762 30.3095ZM43.21 40.441L43.2445 41.4404L43.2445 41.4404L43.21 40.441ZM43.6846 2.57533L43.719 1.57592L43.6846 2.57533ZM64.3088 12.1159L65.0806 11.48L64.3088 12.1159ZM69 18V17H68V18H69ZM75 18H76V17H75V18ZM75 24V25H76V24H75ZM69 24H68V25H69V24ZM10 12C10 14.2091 8.20914 16 6 16V18C9.31371 18 12 15.3137 12 12H10ZM6 16C3.79086 16 2 14.2091 2 12H0C0 15.3137 2.68629 18 6 18V16ZM2 12C2 9.79086 3.79086 8 6 8V6C2.68629 6 0 8.68629 0 12H2ZM6 8C8.20914 8 10 9.79086 10 12H12C12 8.68629 9.31371 6 6 6V8ZM10 30C10 32.2091 8.20914 34 6 34V36C9.31371 36 12 33.3137 12 30H10ZM6 34C3.79086 34 2 32.2091 2 30H0C0 33.3137 2.68629 36 6 36V34ZM2 30C2 27.7909 3.79086 26 6 26V24C2.68629 24 0 26.6863 0 30H2ZM6 26C8.20914 26 10 27.7909 10 30H12C12 26.6863 9.31371 24 6 24V26ZM98 21C98 23.2091 96.2091 25 94 25V27C97.3137 27 100 24.3137 100 21H98ZM94 25C91.7909 25 90 23.2091 90 21H88C88 24.3137 90.6863 27 94 27V25ZM90 21C90 18.7909 91.7909 17 94 17V15C90.6863 15 88 17.6863 88 21H90ZM94 17C96.2091 17 98 18.7909 98 21H100C100 17.6863 97.3137 15 94 15V17ZM74.5 22H89V20H74.5V22ZM11 13H31V11H11V13ZM11 31H31V29H11V31ZM20.8253 41.5647C28.6947 30.0635 28.6947 12.9365 20.8253 1.43531L19.1747 2.56469C26.5782 13.385 26.5782 29.615 19.1747 40.4353L20.8253 41.5647ZM26.9655 2.99941L43.6501 3.57474L43.719 1.57592L27.0345 1.00059L26.9655 2.99941ZM63.537 12.7518C66.4698 16.3112 67.7403 18.7536 67.7499 21.0979C67.7597 23.4494 66.5031 25.9712 63.5889 29.6929L65.1636 30.926C68.1034 27.1714 69.7627 24.1761 69.7499 21.0897C69.7371 17.9961 68.0468 15.0799 65.0806 11.48L63.537 12.7518ZM43.1755 39.4416L26.9655 40.0006L27.0345 41.9994L43.2445 41.4404L43.1755 39.4416ZM27.8253 41.5647C35.6947 30.0635 35.6947 12.9365 27.8253 1.43531L26.1747 2.56469C33.5782 13.385 33.5782 29.615 26.1747 40.4353L27.8253 41.5647ZM63.5889 29.6929C58.7614 35.8581 51.1044 39.1682 43.1755 39.4416L43.2445 41.4404C51.6565 41.1504 59.9106 37.6345 65.1636 30.926L63.5889 29.6929ZM43.6501 3.57474C51.3091 3.83884 58.7311 6.91909 63.537 12.7518L65.0806 11.48C59.8454 5.12625 51.8409 1.85599 43.719 1.57592L43.6501 3.57474ZM69 19H75V17H69V19ZM74 18V24H76V18H74ZM75 23H69V25H75V23ZM70 24V18H68V24H70Z';
var nordata = 'M30.5076 11L31.4744 10.7444L30.5076 11ZM30.7565 29L31.7303 29.2276L30.7565 29ZM26 1L26.0345 0.000594001C25.6575 -0.0124037 25.3053 0.187777 25.1237 0.518291C24.942 0.848804 24.9617 1.25342 25.1747 1.56469L26 1ZM26 40L25.1747 39.4353C24.9617 39.7466 24.942 40.1512 25.1237 40.4817C25.3053 40.8122 25.6575 41.0124 26.0345 40.9994L26 40ZM63.3762 29.3095L64.1636 29.926L64.1636 29.926L63.3762 29.3095ZM42.21 39.441L42.2445 40.4404L42.2445 40.4404L42.21 39.441ZM42.6846 1.57533L42.719 0.575923L42.6846 1.57533ZM63.3088 11.1159L64.0806 10.48L63.3088 11.1159ZM10 11C10 13.2091 8.20914 15 6 15V17C9.31371 17 12 14.3137 12 11H10ZM6 15C3.79086 15 2 13.2091 2 11H0C0 14.3137 2.68629 17 6 17V15ZM2 11C2 8.79086 3.79086 7 6 7V5C2.68629 5 0 7.68629 0 11H2ZM6 7C8.20914 7 10 8.79086 10 11H12C12 7.68629 9.31371 5 6 5V7ZM10 29C10 31.2091 8.20914 33 6 33V35C9.31371 35 12 32.3137 12 29H10ZM6 33C3.79086 33 2 31.2091 2 29H0C0 32.3137 2.68629 35 6 35V33ZM2 29C2 26.7909 3.79086 25 6 25V23C2.68629 23 0 25.6863 0 29H2ZM6 25C8.20914 25 10 26.7909 10 29H12C12 25.6863 9.31371 23 6 23V25ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM73 20C73 21.1046 72.1046 22 71 22V24C73.2091 24 75 22.2091 75 20H73ZM71 22C69.8954 22 69 21.1046 69 20H67C67 22.2091 68.7909 24 71 24V22ZM69 20C69 18.8954 69.8954 18 71 18V16C68.7909 16 67 17.7909 67 20H69ZM71 18C72.1046 18 73 18.8954 73 20H75C75 17.7909 73.2091 16 71 16V18ZM74 21H89V19H74V21ZM11 12H30.5076V10H11V12ZM11 30H30.7565V28H11V30ZM25.9655 1.99941L42.6501 2.57474L42.719 0.575923L26.0345 0.000594001L25.9655 1.99941ZM62.537 11.7518C65.4698 15.3112 66.7403 17.7536 66.7499 20.0979C66.7597 22.4494 65.5031 24.9712 62.5889 28.6929L64.1636 29.926C67.1034 26.1714 68.7627 23.1761 68.7499 20.0897C68.7371 16.9961 67.0468 14.0799 64.0806 10.48L62.537 11.7518ZM42.1755 38.4416L25.9655 39.0006L26.0345 40.9994L42.2445 40.4404L42.1755 38.4416ZM62.5889 28.6929C57.7614 34.8581 50.1044 38.1682 42.1755 38.4416L42.2445 40.4404C50.6565 40.1504 58.9106 36.6345 64.1636 29.926L62.5889 28.6929ZM42.6501 2.57474C50.3091 2.83884 57.7311 5.91909 62.537 11.7518L64.0806 10.48C58.8454 4.12625 50.8409 0.855987 42.719 0.575923L42.6501 2.57474ZM31.4744 10.7444C30.499 7.05472 28.9517 3.54311 26.8253 0.435311L25.1747 1.56469C27.1606 4.46711 28.6183 7.76579 29.5408 11.2556L31.4744 10.7444ZM26.8253 40.5647C29.1482 37.1698 30.7801 33.2928 31.7303 29.2276L29.7828 28.7724C28.8833 32.6208 27.3442 36.2645 25.1747 39.4353L26.8253 40.5647ZM31.7303 29.2276C33.1399 23.1963 33.055 16.7243 31.4744 10.7444L29.5408 11.2556C31.0374 16.9173 31.1184 23.0575 29.7828 28.7724L31.7303 29.2276Z';
var nanddata = 'M27 1V0C26.4477 0 26 0.447715 26 1L27 1ZM27 40H26C26 40.5523 26.4477 41 27 41V40ZM70 17V16H69V17H70ZM76 17H77V16H76V17ZM76 23V24H77V23H76ZM70 23H69V24H70V23ZM10 11C10 13.2091 8.20914 15 6 15V17C9.31371 17 12 14.3137 12 11H10ZM6 15C3.79086 15 2 13.2091 2 11H0C0 14.3137 2.68629 17 6 17V15ZM2 11C2 8.79086 3.79086 7 6 7V5C2.68629 5 0 7.68629 0 11H2ZM6 7C8.20914 7 10 8.79086 10 11H12C12 7.68629 9.31371 5 6 5V7ZM10 29C10 31.2091 8.20914 33 6 33V35C9.31371 35 12 32.3137 12 29H10ZM6 33C3.79086 33 2 31.2091 2 29H0C0 32.3137 2.68629 35 6 35V33ZM2 29C2 26.7909 3.79086 25 6 25V23C2.68629 23 0 25.6863 0 29H2ZM6 25C8.20914 25 10 26.7909 10 29H12C12 25.6863 9.31371 23 6 23V25ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM11 12H27V10H11V12ZM11.5 30H27V28H11.5V30ZM27 2H49.5V0H27V2ZM49.5 39H27V41H49.5V39ZM68 20.5C68 30.7173 59.7173 39 49.5 39V41C60.8218 41 70 31.8218 70 20.5H68ZM49.5 2C59.7173 2 68 10.2827 68 20.5H70C70 9.17816 60.8218 0 49.5 0V2ZM70 18H76V16H70V18ZM76 22H70V24H76V22ZM71 23V17H69V23H71ZM28 40V29H26V40H28ZM28 29V11H26V29H28ZM28 11V1H26V11H28ZM75 17V20H77V17H75ZM75 20V23H77V20H75ZM76 21H89V19H76V21Z';
var buffer = 'M30 1L30.4122 0.0888921C30.1027 -0.0511131 29.7433 -0.0244422 29.4579 0.159712C29.1724 0.343866 29 0.66032 29 1H30ZM30 40H29C29 40.3432 29.176 40.6623 29.4661 40.8456C29.7563 41.0288 30.1201 41.0504 30.4299 40.9029L30 40ZM10 20C10 22.2091 8.20914 24 6 24V26C9.31371 26 12 23.3137 12 20H10ZM6 24C3.79086 24 2 22.2091 2 20H0C0 23.3137 2.68629 26 6 26V24ZM2 20C2 17.7909 3.79086 16 6 16V14C2.68629 14 0 16.6863 0 20H2ZM6 16C8.20914 16 10 17.7909 10 20H12C12 16.6863 9.31371 14 6 14V16ZM98 20C98 22.2091 96.2091 24 94 24V26C97.3137 26 100 23.3137 100 20H98ZM94 24C91.7909 24 90 22.2091 90 20H88C88 23.3137 90.6863 26 94 26V24ZM90 20C90 17.7909 91.7909 16 94 16V14C90.6863 14 88 16.6863 88 20H90ZM94 16C96.2091 16 98 17.7909 98 20H100C100 16.6863 97.3137 14 94 14V16ZM72 21H89V19H72V21ZM30.4299 40.9029L72.4299 20.9029L71.5701 19.0971L29.5701 39.0971L30.4299 40.9029ZM72.4122 19.0889L30.4122 0.0888921L29.5878 1.91111L71.5878 20.9111L72.4122 19.0889ZM11 21H30V19H11V21ZM29 1V20H31V1H29ZM29 20V40H31V20H29Z';
var ClockOuterRectangle = 'M49 22H61M49 22V1H1V43H49V22ZM61 22C61 24.7614 63.2386 27 66 27C68.7614 27 71 24.7614 71 22C71 19.2386 68.7614 17 66 17C63.2386 17 61 19.2386 61 22Z';
var ClockInnerPart = 'M14.5 25.5H10.5V13.5H26.5V26.5H34.5V18.5H38.5V30.5H22.5V17.5H14.5V25.5Z';
var highconstantdata = 'M50 0H0V44H50V23H60.083C60.559 25.8377 63.027 28 66 28C69.3137 28 72 25.3137 72 22C72 18.6863 69.3137 16 66 16C63.027 16 60.559 18.1623 60.083 21H50V0ZM2 42V2H48V42H2ZM62 22C62 19.7909 63.7909 18 66 18C68.2091 18 70 19.7909 70 22C70 24.2091 68.2091 26 66 26C63.7909 26 62 24.2091 62 22ZM20.2759 16.728C21.0972 16.5414 21.6666 16.392 21.9839 16.28V28.068L18.6239 28.348V30H29.2919V28.348L26.0999 28.04V12.64L23.8879 12.332H23.8599C23.1692 12.9107 22.2732 13.4707 21.1719 14.012C20.0892 14.5347 19.0439 14.8987 18.0359 15.104L18.3439 17.064C18.8106 17.008 19.4546 16.896 20.2759 16.728Z';
var lowconstantdata = 'M50 0H0V44H50V23H60.083C60.559 25.8377 63.027 28 66 28C69.3137 28 72 25.3137 72 22C72 18.6863 69.3137 16 66 16C63.027 16 60.559 18.1623 60.083 21H50V0ZM2 42V2H48V42H2ZM62 22C62 19.7909 63.7909 18 66 18C68.2091 18 70 19.7909 70 22C70 24.2091 68.2091 26 66 26C63.7909 26 62 24.2091 62 22ZM18.1081 29.452C19.6201 31.356 21.8974 32.308 24.9401 32.308C26.8254 32.308 28.4961 31.8506 29.9521 30.936C31.4081 30.0213 32.5374 28.7333 33.3401 27.072C34.1614 25.392 34.5721 23.4693 34.5721 21.304C34.5721 18.0373 33.7974 15.4986 32.2481 13.688C30.7174 11.8586 28.4121 10.944 25.3321 10.944C23.4654 10.944 21.8134 11.3826 20.3761 12.26C18.9388 13.1373 17.8188 14.388 17.0161 16.012C16.2321 17.636 15.8401 19.5213 15.8401 21.668C15.8401 24.9533 16.5961 27.548 18.1081 29.452ZM21.6361 14.92C22.4948 13.408 23.6894 12.652 25.2201 12.652C26.7694 12.652 27.9548 13.3706 28.7761 14.808C29.5974 16.2266 30.0081 18.392 30.0081 21.304C30.0081 24.3093 29.5788 26.6146 28.7201 28.22C27.8614 29.8066 26.6761 30.6 25.1641 30.6C23.6148 30.6 22.4201 29.844 21.5801 28.332C20.7588 26.8013 20.3481 24.5706 20.3481 21.64C20.3481 18.672 20.7774 16.432 21.6361 14.92Z';
var BulbCompletePath = 'M9 37.0015H10C10 36.687 9.85204 36.3908 9.60058 36.2019L9 37.0015ZM33 37.0015L32.3994 36.2019C32.148 36.3908 32 36.687 32 37.0015H33ZM11 19L11.6247 18.2191C11.2928 17.9536 10.8292 17.9269 10.469 18.1526C10.1088 18.3783 9.93066 18.8071 10.0249 19.2216L11 19ZM16 23L15.3753 23.7809C15.5866 23.9499 15.8575 24.0261 16.1259 23.992C16.3944 23.958 16.6376 23.8165 16.8 23.6L16 23ZM19 19L19.8 18.4C19.6111 18.1482 19.3148 18 19 18C18.6852 18 18.3889 18.1482 18.2 18.4L19 19ZM22 23L21.2 23.6C21.3889 23.8518 21.6852 24 22 24C22.3148 24 22.6111 23.8518 22.8 23.6L22 23ZM25 19L25.8944 18.5528C25.7394 18.2428 25.435 18.0352 25.0898 18.004C24.7446 17.9729 24.4079 18.1227 24.2 18.4L25 19ZM27 23L26.1056 23.4472C26.2406 23.7173 26.4905 23.9119 26.7855 23.9767C27.0804 24.0415 27.3889 23.9695 27.6247 23.7809L27 23ZM32 19L32.9648 19.2631C33.0787 18.8454 32.9109 18.4019 32.549 18.1642C32.1871 17.9265 31.7134 17.9487 31.3753 18.2191L32 19ZM21 62.5C17.6863 62.5 15 65.1863 15 68.5L17 68.5C17 66.2909 18.7909 64.5 21 64.5L21 62.5ZM15 68.5C15 71.8137 17.6863 74.5 21 74.5L21 72.5C18.7909 72.5 17 70.7091 17 68.5L15 68.5ZM21 74.5C24.3137 74.5 27 71.8137 27 68.5L25 68.5C25 70.7091 23.2091 72.5 21 72.5L21 74.5ZM27 68.5C27 65.1863 24.3137 62.5 21 62.5L21 64.5C23.2091 64.5 25 66.2909 25 68.5L27 68.5ZM22 63.5V55H20V63.5H22ZM2 21C2 10.5066 10.5066 2 21 2V0C9.40202 0 0 9.40202 0 21H2ZM21 2C31.4934 2 40 10.5066 40 21H42C42 9.40202 32.598 0 21 0V2ZM21 54C17.7065 54 14.9584 52.9731 13.0457 51.2436C11.1421 49.5222 10 47.0473 10 44H8C8 47.5801 9.35785 50.6052 11.7043 52.727C14.0416 54.8406 17.2935 56 21 56V54ZM32 44C32 47.0473 30.8579 49.5222 28.9543 51.2436C27.0416 52.9731 24.2935 54 21 54V56C24.7065 56 27.9584 54.8406 30.2957 52.727C32.6421 50.6052 34 47.5801 34 44H32ZM9.60058 36.2019C4.98342 32.7338 2 27.2155 2 21H0C0 27.8711 3.301 33.9715 8.39942 37.801L9.60058 36.2019ZM40 21C40 27.2155 37.0166 32.7338 32.3994 36.2019L33.6006 37.801C38.699 33.9715 42 27.8711 42 21H40ZM10 44V41H8V44H10ZM10 41V37.0015H8V41H10ZM32 37.0015V41H34V37.0015H32ZM32 41V44H34V41H32ZM9 42H33V40H9V42ZM16.9751 40.7784L11.9751 18.7784L10.0249 19.2216L15.0249 41.2216L16.9751 40.7784ZM10.3753 19.7809L15.3753 23.7809L16.6247 22.2191L11.6247 18.2191L10.3753 19.7809ZM16.8 23.6L19.8 19.6L18.2 18.4L15.2 22.4L16.8 23.6ZM18.2 19.6L21.2 23.6L22.8 22.4L19.8 18.4L18.2 19.6ZM22.8 23.6L25.8 19.6L24.2 18.4L21.2 22.4L22.8 23.6ZM24.1056 19.4472L26.1056 23.4472L27.8944 22.5528L25.8944 18.5528L24.1056 19.4472ZM27.6247 23.7809L32.6247 19.7809L31.3753 18.2191L26.3753 22.2191L27.6247 23.7809ZM31.0352 18.7369L25.0352 40.7369L26.9648 41.2631L32.9648 19.2631L31.0352 18.7369ZM33 40H26V42H33V40ZM26 40H16V42H26V40ZM16 40H9V42H16V40Z';
var BulbBlackPart = 'M9 44C9 50.6274 14 55 21 55C28 55 33 50.6274 33 44V41H26H16H9V44Z';
var BulbInnerBluePart = 'M16 41H26L32 19L27 23L25 19L22 23L19 19L16 23L11 19L16 41Z';
var BulbOuterBluePart = 'M21 1C9.9543 1 1 9.9543 1 21C1 27.5433 4.14221 33.3526 9 37.0015V41H16L11 19L16 23L19 19L22 23L25 19L27 23L32 19L26 41H33V37.0015C37.8578 33.3526 41 27.5433 41 21C41 9.9543 32.0457 1 21 1Z';
var pushbuttonport =
    [
        {
            id: 'pushbuttonport1', offset: { x: 0.92, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];
    var DigitPorts =
    [{
        id: 'digitport1', offset: { x: 0.07, y: 0.15 },
        height: 15, width: 13, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'digitport2', offset: { x: 0.07, y: 0.38 },
        height: 15, width: 13, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },

    {
        id: 'digitport3', offset: { x: 0.071, y: 0.62 },
        height: 15, width: 13, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'digitport4', offset: { x: 0.072, y: 0.85 },
        height: 15, width: 13, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    }];
    var andPort =
    [
        {
            id: 'And_port1', offset: { x: 0.05, y: 0.25 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'And_port3', offset: { x: 0.05, y: 0.73 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints:PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'And_port4', offset: { x: 0.94, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];

var notPort =
    [
        {
            id: 'Not_port1', offset: { x: 0.05, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints:PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'Not_port2', offset: { x: 0.94, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];

var orPort =
    [
        {
            id: 'Or_port1', offset: { x: 0.05, y: 0.25 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect |PortConstraints.Draw
        },
        {
            id: 'Or_port3', offset: { x: 0.05, y: 0.73 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'Or_port4', offset: { x: 0.94, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];
    var jkPorts =
    [{
        id: 'jport', offset: { x: 0.06, y: 0.350 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'clkport', offset: { x: 0.06, y: 0.5 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints:PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },

    {
        id: 'kport', offset: { x: 0.06, y: 0.650 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'qport', offset: { x: 0.95, y: 0.430 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    },
    {
        id: 'q1port', offset: { x: 0.95, y: 0.590 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    },
    {
        id: 'preport', offset: { x: 0.5, y: 0.05 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'clrport', offset: { x: 0.5, y: 0.95 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    }];
    var DTPorts =
    [{
        id: 'DTport', offset: { x: 0.053, y: 0.425 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'clkport', offset: { x: 0.053, y: 0.590 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'qport', offset: { x: 0.947, y: 0.425 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    },
    {
        id: 'q1port', offset: { x: 0.947, y: 0.590 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    },

    {
        id: 'preport', offset: { x: 0.5, y: 0.057 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'clrport', offset: { x: 0.5, y: 0.93 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    }];
    var toggleswitchport =
    [
        {
            id: 'toggleport1', offset: { x: 0.92, y: 0.5 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];
    var srPorts =
    [{
        id: 'sport', offset: { x: 0.06, y: 0.25 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'clkport', offset: { x: 0.06, y: 0.5 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },
    {
        id: 'rport', offset: { x: 0.06, y: 0.75 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
    },

    {
        id: 'qport', offset: { x: 0.95, y: 0.39 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    },
    {
        id: 'q1port', offset: { x: 0.95, y: 0.63 },
        height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
    }];
    var otherPort =
    [
        {
            id: 'Other_port1', offset: { x: 0.06, y: 0.30 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'Other_port3', offset: { x: 0.06, y: 0.70 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'Other_port4', offset: { x: 0.94, y: 0.48 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];

var pullPort =
    [
        {
            id: 'Pull_port1', offset: { x: 0.06, y: 0.48 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect | PortConstraints.Draw
        },
        {
            id: 'Pull_port2', offset: { x: 0.94, y: 0.48 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw
        },
    ];
    var bulbport =
    [
        {
            id: 'Bulb_port', offset: { x: 0.5, y: 0.95 },
            height: 12, width: 10, shape: 'Circle', visibility: PortVisibility.Visible,
            constraints: PortConstraints.Default & ~PortConstraints.OutConnect,
        },
    ];
 
    export class PaperSize {
    }
export let diagramName;
export let beforItem;
export let loadDiagram;
export let beforeOpen;
export let designContextMenuOpen;
export let editContextMenuOpen;
export let beforeClose;
export let menuclick;
export let tooledit;
export let zoomTemplate;
export let zoomchange;
export let enableMenuItems;
export let dropElement;
export let createNode;
export let createConnector;
export let nodeY;
export let changeStateTemplate;
export let changeStateChange;
export let  footTemplate;
export let printTemplateChange;
export let setBinaryStateFromInput;
export let RunSimulation;
export let changeState;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.animationSettings = { effect: 'None' };
        this.dropdownListFields = { text: 'text', value: 'value' };
        this.pageSettings = {
            background: { color: '#FFFFFF' }, width: 600, height: 1460, margin: { left: 5, top: 5 },
            orientation: 'Landscape', showPageBreaks: false,
        };
        this.clockinterval = window.setInterval(changeState, 3000);
        this.nodes = [{
            
                id: 'SwOffOuter',
                height: 60,
                width: 80,
                offsetX: 140,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchOffOuterRect },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'SwOffInner',
                height: 50,
                width: 40,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchOffInnerRect },
                style: { strokeColor: 'black', strokeWidth: 2, },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'SwOff',
                height: 40,
                width: 30,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchoffButton },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'SwOn',
                height: 40,
                width: 30,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SWitchOnButton },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
                visible: false,
            },
            {
                id: 'Switch1',
                children: ['SwOffOuter', 'SwOffInner', 'SwOff', 'SwOn'],
                offsetX: 140,
                offsetY: 100,
                ports: toggleswitchport,
                addInfo: { binarystate: 0, controltype: 'inputcontrol' },
                style: { fill: 'transparent', strokeWidth: 0 },
                constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
            },
            {
                id: 'PBOuterRect',
                height: 60,
                width: 80,
                offsetX: 140,
                offsetY: 100,
                shape: { type: 'Path', data: PushButtonOuterRect },
                style: { strokeColor: 'black', strokeWidth: 0, fill: 'black' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'PBOuterCircle',
                height: 40,
                width: 40,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: PushButtonOuterCircle },
                style: { strokeColor: 'black', strokeWidth: 2, fill: 'white' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'PBInnerCircle',
                height: 30,
                width: 30,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: PushButtonInnerCircle },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
            {
                id: 'PushButton1',
                children: ['PBOuterRect', 'PBOuterCircle', 'PBInnerCircle'],
                offsetX: 140,
                offsetY: 270,
                ports: pushbuttonport,
                addInfo: { binarystate: 0, controltype: 'inputcontrol' },
                style: { fill: 'transparent', strokeWidth: 0 },
                constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
            },
            {
                id: 'CLKOuterRect',
                height: 55,
                width: 80,
                offsetX: 140,
                offsetY: 100,
                shape: { type: 'Path', data: ClockOuterRectangle },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'CLKInnerPart',
                height: 30,
                width: 40,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: ClockInnerPart },
                style: { strokeColor: 'black', strokeWidth: 2, fill: 'white' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'Clock',
                children: ['CLKOuterRect', 'CLKInnerPart'],
                offsetX: 140,
                offsetY: 470,
                ports: pushbuttonport,
                addInfo: { binarystate: 0, controltype: 'inputcontrol' },
                style: { fill: 'transparent', strokeWidth: 0 },
                constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
            },
            {
                id: 'SwOffOuter2',
                height: 60,
                width: 80,
                offsetX: 140,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchOffOuterRect },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'SwOffInner2',
                height: 50,
                width: 40,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchOffInnerRect },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'SwOff2',
                height: 40,
                width: 30,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SwitchoffButton },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'SwOn2',
                height: 40,
                width: 30,
                offsetX: 125,
                offsetY: 100,
                shape: { type: 'Path', data: SWitchOnButton },
                style: { strokeColor: 'black', strokeWidth: 2 },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
                visible: false,
            },
    
            {
                id: 'Switch2',
                children: ['SwOffOuter2', 'SwOffInner2', 'SwOff2', 'SwOn2'],
                offsetX: 140,
                offsetY: 630,
                ports: toggleswitchport,
                addInfo: { binarystate: 0, controltype: 'inputcontrol' },
                style: { fill: 'transparent', strokeWidth: 0 },
                constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
            },
            this.createNode('OR1', 350, 350, 40, 100, orData, orPort, '#000000', null, 'gate'),
            this.createNode('AND1', 350, 180, 40, 100, andData, andPort, '#000000', null, 'gate'),
            this.createNode('AND2', 350, 520, 40, 100, andData, andPort, '#000000', null, 'gate'),
            this.createNode('AND3', 550, 440, 40, 100, andData, andPort, '#000000', null, 'gate'),
            this.createNode('OR2', 750, 280, 40, 100, orData, orPort, '#000000', null, 'gate'),
            this.createNode('Not', 750, 520, 40, 100, notData, notPort, '#000000', null, 'gate'),
            this.createNode('XOR', 950, 420, 40, 100, xorData, orPort, '#000000', null, 'gate'),
            {
                id: 'FullPath',
                height: 60,
                width: 40,
                offsetX: 140,
                offsetY: 100,
                shape: { type: 'Path', data: BulbCompletePath },
                style: { strokeColor: 'black', fill: 'black' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'BlackPart',
                height: 12,
                width: 20,
                offsetX: 140,
                offsetY: 110,
                shape: { type: 'Path', data: BulbBlackPart },
                style: { strokeColor: 'black', fill: 'black' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
            },
    
            {
                id: 'InnerBluePart',
                height: 16,
                width: 20,
                offsetX: 140,
                offsetY: 95,
                shape: { type: 'Path', data: BulbInnerBluePart },
                style: { strokeColor: 'black', fill: 'white' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
                visible: false,
            },
    
            {
                id: 'OuterBluePart',
                height: 32,
                width: 36,
                offsetX: 140,
                offsetY: 87,
                shape: { type: 'Path', data: BulbOuterBluePart },
                style: { strokeColor: 'black', fill: 'white' },
                constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
                visible: false,
            },
    
            {
                id: 'Bulb',
                children: ['FullPath', 'BlackPart', 'InnerBluePart', 'OuterBluePart'],
                offsetX: 1050,
                offsetY: 170,
                height: 60,
                width: 40,
                ports: bulbport,
                addInfo: { binarystate: null, controltype: 'outputcontrol' },
                constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
            },
            
        ]
        this.connectors =
        [
            this.createConnector('con1', null, null, 'AND1', 'OR2', 'And_port4', 'Or_port1', 0),
            this.createConnector('con2', null, null, 'OR1', 'AND3', 'Or_port4', 'And_port1', 0),
            this.createConnector('con3', null, null, 'AND2', 'AND3', 'And_port4', 'And_port3', 0),
            this.createConnector('con4', null, null, 'AND3', 'OR2', 'And_port4', 'Or_port3', 0),
            this.createConnector('con5', null, null, 'OR2', 'XOR', 'Or_port4', 'Or_port1', 0),
            this.createConnector('con6', null, null, 'Not', 'XOR', 'Not_port2', 'Or_port3', 0),
            this.createConnector('con7', null, null, 'Switch1', 'AND1', 'toggleport1', 'And_port1', 0),
            this.createConnector('con8', null, null, 'PushButton1', 'AND1', 'pushbuttonport1', 'And_port3', 0),
            this.createConnector('con9', null, null, 'PushButton1', 'OR1', 'pushbuttonport1', 'Or_port1', 0),
            this.createConnector('con10', null, null, 'PushButton1', 'AND2', 'pushbuttonport1', 'And_port1', 0),
            this.createConnector('con11', null, null, 'Clock', 'OR1', 'pushbuttonport1', 'Or_port3', 0),
            this.createConnector('con12', null, null, 'Clock', 'AND2', 'pushbuttonport1', 'And_port3', 0),
            this.createConnector('con13', null, null, 'Switch2', 'Not', 'toggleport1', 'Not_port1', 0),
            this.createConnector('con14', null, null, 'XOR', 'Bulb', 'Or_port4', 'Bulb_port', 0),
        ];
        // this.nodes= [
        //     {
        //                 id: 'CLKOuterRect',
        //                 height: 55,
        //                 width: 80,
        //                 offsetX: 140,
        //                 offsetY: 100,
        //                 shape: { type: 'Path', data: ClockOuterRectangle },
        //                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //             },
            
        //             {
        //                 id: 'CLKInnerPart',
        //                 height: 30,
        //                 width: 40,
        //                 offsetX: 125,
        //                 offsetY: 100,
        //                 shape: { type: 'Path', data: ClockInnerPart },
        //                 style: { strokeColor: 'black', strokeWidth: 2, fill: 'white' },
        //                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //             },
            
        //             {
        //                 id: 'Clock',
        //                 children: ['CLKOuterRect', 'CLKInnerPart'],
        //                 offsetX: 140,
        //                 offsetY: 240,
        //                 ports: pushbuttonport,
        //                 addInfo: { binarystate: 0, controltype: 'inputcontrol' },
        //                 style: { fill: 'transparent', strokeWidth: 0 },
        //                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //             },
        //             {
            
        //                         id: 'SwOffOuter',
        //                         height: 60,
        //                         width: 80,
        //                         offsetX: 140,
        //                         offsetY: 100,
        //                         shape: { type: 'Path', data: SwitchOffOuterRect },
        //                         style: { strokeColor: 'black', strokeWidth: 2 },
        //                         constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                     },
        //                     {
        //                         id: 'SwOffInner',
        //                         height: 50,
        //                         width: 40,
        //                         offsetX: 125,
        //                         offsetY: 100,
        //                         shape: { type: 'Path', data: SwitchOffInnerRect },
        //                         style: { strokeColor: 'black', strokeWidth: 2, },
        //                         constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                     },
        //                     {
        //                         id: 'SwOff',
        //                         height: 40,
        //                         width: 30,
        //                         offsetX: 125,
        //                         offsetY: 100,
        //                         shape: { type: 'Path', data: SwitchoffButton },
        //                         style: { strokeColor: 'black', strokeWidth: 2 },
        //                         constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                     },
        //                     {
        //                         id: 'SwOn',
        //                         height: 40,
        //                         width: 30,
        //                         offsetX: 125,
        //                         offsetY: 100,
        //                         shape: { type: 'Path', data: SWitchOnButton },
        //                         style: { strokeColor: 'black', strokeWidth: 2 },
        //                         constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                         visible: false,
        //                     },
        //                     {
        //                         id: 'Switch1',
        //                         children: ['SwOffOuter', 'SwOffInner', 'SwOff', 'SwOn'],
        //                         offsetX: 140,
        //                         offsetY: 400,
        //                         ports: toggleswitchport,
        //                         addInfo: { binarystate: 0, controltype: 'inputcontrol' },
        //                         style: { fill: 'transparent', strokeWidth: 0 },
        //                         constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                     },
        //                     this.createNode('Not', 260, 120, 40, 100, notData, notPort, '#000000', null, 'gate'),
        //                     this.createNode('AND1', 440, 130, 40, 100, andData, andPort, '#000000', null, 'gate'),
        //                     this.createNode('AND2', 360, 390, 40, 100, andData, andPort, '#000000', null, 'gate'),
        //                     this.createNode('NOR', 610, 160, 40, 100, nordata, orPort, '#000000', null, 'gate'),
        //                     this.createNode('NOR1', 610, 380, 40, 100, nordata, orPort, '#000000', null, 'gate'),
        //                     {
        //                                 id: 'FullPath',
        //                                 height: 60,
        //                                 width: 40,
        //                                 offsetX: 140,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: BulbCompletePath },
        //                                 style: { strokeColor: 'black', fill: 'black' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
                            
        //                             {
        //                                 id: 'BlackPart',
        //                                 height: 12,
        //                                 width: 20,
        //                                 offsetX: 140,
        //                                 offsetY: 110,
        //                                 shape: { type: 'Path', data: BulbBlackPart },
        //                                 style: { strokeColor: 'black', fill: 'black' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
                            
        //                             {
        //                                 id: 'InnerBluePart',
        //                                 height: 16,
        //                                 width: 20,
        //                                 offsetX: 140,
        //                                 offsetY: 95,
        //                                 shape: { type: 'Path', data: BulbInnerBluePart },
        //                                 style: { strokeColor: 'black', fill: 'white' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
                            
        //                             {
        //                                 id: 'OuterBluePart',
        //                                 height: 32,
        //                                 width: 36,
        //                                 offsetX: 140,
        //                                 offsetY: 87,
        //                                 shape: { type: 'Path', data: BulbOuterBluePart },
        //                                 style: { strokeColor: 'black', fill: 'white' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
                            
        //                             {
        //                                 id: 'Bulb',
        //                                 children: ['FullPath', 'BlackPart', 'InnerBluePart', 'OuterBluePart'],
        //                                 offsetX: 780,
        //                                 offsetY: 100,
        //                                 height: 60,
        //                                 width: 40,
        //                                 ports: bulbport,
        //                                 addInfo: { binarystate: null, controltype: 'outputcontrol' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'FullPath1',
        //                                 height: 60,
        //                                 width: 40,
        //                                 offsetX: 140,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: BulbCompletePath },
        //                                 style: { strokeColor: 'black', fill: 'black' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
                            
        //                             {
        //                                 id: 'BlackPart1',
        //                                 height: 12,
        //                                 width: 20,
        //                                 offsetX: 140,
        //                                 offsetY: 110,
        //                                 shape: { type: 'Path', data: BulbBlackPart },
        //                                 style: { strokeColor: 'black', fill: 'black' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
                            
        //                             {
        //                                 id: 'InnerBluePart1',
        //                                 height: 16,
        //                                 width: 20,
        //                                 offsetX: 140,
        //                                 offsetY: 95,
        //                                 shape: { type: 'Path', data: BulbInnerBluePart },
        //                                 style: { strokeColor: 'black', fill: 'white' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
                            
        //                             {
        //                                 id: 'OuterBluePart1',
        //                                 height: 32,
        //                                 width: 36,
        //                                 offsetX: 140,
        //                                 offsetY: 87,
        //                                 shape: { type: 'Path', data: BulbOuterBluePart },
        //                                 style: { strokeColor: 'black', fill: 'white' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
                            
        //                             {
        //                                 id: 'Bulb1',
        //                                 children: ['FullPath1', 'BlackPart1', 'InnerBluePart1', 'OuterBluePart1'],
        //                                 offsetX: 780,
        //                                 offsetY: 320,
        //                                 height: 60,
        //                                 width: 40,
        //                                 ports: bulbport,
        //                                 addInfo: { binarystate: null, controltype: 'outputcontrol' },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                             },
        //                 ]
        // this.connectors =
        // [
        //     this.createConnector('con1', null, null, 'Clock', 'AND1', 'pushbuttonport1', 'And_port3', 0),
        //     this.createConnector('con2', null, null, 'Clock', 'AND2', 'pushbuttonport1', 'And_port1', 0),
        //      this.createConnector('con3', null, null, 'Switch1', 'Not', 'toggleport1', 'Not_port1', 0),
        //     this.createConnector('con4', null, null, 'Not', 'AND1', 'Not_port4', 'And_port1', 0),
        //     this.createConnector('con5', null, null, 'Switch1', 'AND2', 'toggleport1', 'And_port3', 0),
        //      this.createConnector('con6', null, null, 'AND1', 'NOR', 'And_port4', 'Or_port1', 0),
        //     this.createConnector('con7', null, null, 'AND2', 'NOR1', 'And_port4', 'Or_port3', 0),
        //     // this.createConnector('con8', null, null, 'NOR', 'NOR', 'Or_port1', 'Or_port4', 0),
    
        // ];
        // this.nodes =[
        //     {
            
        //                                 id: 'SwOffOuter1',
        //                                 height: 60,
        //                                 width: 80,
        //                                 offsetX: 140,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffOuterRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOffInner1',
        //                                 height: 50,
        //                                 width: 40,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffInnerRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2, },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOff1',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchoffButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOn1',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SWitchOnButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
        //                             {
        //                                 id: 'Switch1',
        //                                 children: ['SwOffOuter1', 'SwOffInner1', 'SwOff1', 'SwOn1'],
        //                                 offsetX: 140,
        //                                 offsetY: 180,
        //                                 ports: toggleswitchport,
        //                                 addInfo: { binarystate: 0, controltype: 'inputcontrol' },
        //                                 style: { fill: 'transparent', strokeWidth: 0 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                             },
        //                             {
            
        //                                 id: 'SwOffOuter2',
        //                                 height: 60,
        //                                 width: 80,
        //                                 offsetX: 140,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffOuterRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOffInner2',
        //                                 height: 50,
        //                                 width: 40,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffInnerRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2, },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOff2',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchoffButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOn2',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SWitchOnButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
        //                             {
        //                                 id: 'Switch2',
        //                                 children: ['SwOffOuter2', 'SwOffInner2', 'SwOff2', 'SwOn2'],
        //                                 offsetX: 140,
        //                                 offsetY: 320,
        //                                 ports: toggleswitchport,
        //                                 addInfo: { binarystate: 0, controltype: 'inputcontrol' },
        //                                 style: { fill: 'transparent', strokeWidth: 0 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                             },  
        //                             {
            
        //                                 id: 'SwOffOuter3',
        //                                 height: 60,
        //                                 width: 80,
        //                                 offsetX: 140,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffOuterRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOffInner3',
        //                                 height: 50,
        //                                 width: 40,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchOffInnerRect },
        //                                 style: { strokeColor: 'black', strokeWidth: 2, },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOff3',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SwitchoffButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                             },
        //                             {
        //                                 id: 'SwOn3',
        //                                 height: 40,
        //                                 width: 30,
        //                                 offsetX: 125,
        //                                 offsetY: 100,
        //                                 shape: { type: 'Path', data: SWitchOnButton },
        //                                 style: { strokeColor: 'black', strokeWidth: 2 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                 visible: false,
        //                             },
        //                             {
        //                                 id: 'Switch3',
        //                                 children: ['SwOffOuter3', 'SwOffInner3', 'SwOff3', 'SwOn3'],
        //                                 offsetX: 140,
        //                                 offsetY: 460,
        //                                 ports: toggleswitchport,
        //                                 addInfo: { binarystate: 0, controltype: 'inputcontrol' },
        //                                 style: { fill: 'transparent', strokeWidth: 0 },
        //                                 constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                             }, 
        //                             this.createNode('XOR', 380, 180, 40, 100, xorData, orPort, '#000000', null, 'gate'),  this.createNode('XOR', 380, 180, 40, 100, xorData, orPort, '#000000', null, 'gate'),   
        //                             this.createNode('XOR1', 600, 180, 40, 100, xorData, orPort, '#000000', null, 'gate'),                    
        //                             this.createNode('AND1', 440,460, 40, 100, andData, andPort, '#000000', null, 'gate'),
        //                          this.createNode('AND2', 600, 320, 40, 100, andData, andPort, '#000000', null, 'gate'),
        //                          this.createNode('OR1', 760, 350, 40, 100, orData, orPort, '#000000', null, 'gate'),
        //                          {
        //                                                             id: 'FullPath',
        //                                                             height: 60,
        //                                                             width: 40,
        //                                                             offsetX: 140,
        //                                                             offsetY: 100,
        //                                                             shape: { type: 'Path', data: BulbCompletePath },
        //                                                             style: { strokeColor: 'black', fill: 'black' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'BlackPart',
        //                                                             height: 12,
        //                                                             width: 20,
        //                                                             offsetX: 140,
        //                                                             offsetY: 110,
        //                                                             shape: { type: 'Path', data: BulbBlackPart },
        //                                                             style: { strokeColor: 'black', fill: 'black' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'InnerBluePart',
        //                                                             height: 16,
        //                                                             width: 20,
        //                                                             offsetX: 140,
        //                                                             offsetY: 95,
        //                                                             shape: { type: 'Path', data: BulbInnerBluePart },
        //                                                             style: { strokeColor: 'black', fill: 'white' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                             visible: false,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'OuterBluePart',
        //                                                             height: 32,
        //                                                             width: 36,
        //                                                             offsetX: 140,
        //                                                             offsetY: 87,
        //                                                             shape: { type: 'Path', data: BulbOuterBluePart },
        //                                                             style: { strokeColor: 'black', fill: 'white' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                             visible: false,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'Bulb',
        //                                                             children: ['FullPath', 'BlackPart', 'InnerBluePart', 'OuterBluePart'],
        //                                                             offsetX: 780,
        //                                                             offsetY: 100,
        //                                                             height: 60,
        //                                                             width: 40,
        //                                                             ports: bulbport,
        //                                                             addInfo: { binarystate: null, controltype: 'outputcontrol' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                                                         },
        //                                                         {
        //                                                             id: 'FullPath1',
        //                                                             height: 60,
        //                                                             width: 40,
        //                                                             offsetX: 140,
        //                                                             offsetY: 100,
        //                                                             shape: { type: 'Path', data: BulbCompletePath },
        //                                                             style: { strokeColor: 'black', fill: 'black' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'BlackPart1',
        //                                                             height: 12,
        //                                                             width: 20,
        //                                                             offsetX: 140,
        //                                                             offsetY: 110,
        //                                                             shape: { type: 'Path', data: BulbBlackPart },
        //                                                             style: { strokeColor: 'black', fill: 'black' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'InnerBluePart1',
        //                                                             height: 16,
        //                                                             width: 20,
        //                                                             offsetX: 140,
        //                                                             offsetY: 95,
        //                                                             shape: { type: 'Path', data: BulbInnerBluePart },
        //                                                             style: { strokeColor: 'black', fill: 'white' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                             visible: false,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'OuterBluePart1',
        //                                                             height: 32,
        //                                                             width: 36,
        //                                                             offsetX: 140,
        //                                                             offsetY: 87,
        //                                                             shape: { type: 'Path', data: BulbOuterBluePart },
        //                                                             style: { strokeColor: 'black', fill: 'white' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.Select & ~NodeConstraints.InConnect,
        //                                                             visible: false,
        //                                                         },
                                                        
        //                                                         {
        //                                                             id: 'Bulb1',
        //                                                             children: ['FullPath1', 'BlackPart1', 'InnerBluePart1', 'OuterBluePart1'],
        //                                                             offsetX: 900,
        //                                                             offsetY: 280,
        //                                                             height: 60,
        //                                                             width: 40,
        //                                                             ports: bulbport,
        //                                                             addInfo: { binarystate: null, controltype: 'outputcontrol' },
        //                                                             constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        //                                                         },
        //                         ]
        this.scrollSettings = { canAutoScroll: true, scrollLimit: 'Infinity', minZoom: 0.25, maxZoom: 30 };
        this.rulerSettings={ showRulers: true, dynamicGrid: true, horizontalRuler: { interval: 10, segmentWidth: 100, thickness: 25, },
                              verticalRuler: { interval: 10, segmentWidth: 100, thickness: 25 }}
        this.selectedItems={constraints: SelectorConstraints.All & ~SelectorConstraints.ResizeAll & ~SelectorConstraints.Rotate}
        this.selectedItem = new SelectorViewModel();
        this.dropDownDataSources = new DropDownDataSources();
        this.palettes = new Palettes();
        this.diagramEvents = new DiagramClientSideEvents(this.selectedItem, this.page);
        this.diagramPropertyBinding = new DiagramPropertyBinding(this.selectedItem, this.page);
        this.diagramEvents.ddlTextPosition = this.ddlTextPosition;
        this.dlgTarget = document.body;
        this.dialogVisibility = false;
        this.isModalDialog = false;
        this.dialogAnimationSettings = { effect: 'None' };
        this.exportingButtons = this.getDialogButtons('export');
        
        this.printingButtons = this.getDialogButtons('print');
        loadDiagram=this.loadDiagram.bind(this);
        beforItem = this.beforeItemRender.bind(this);
        designContextMenuOpen = this.designContextMenuOpen.bind(this);
        editContextMenuOpen = this.editContextMenuOpen.bind(this);
        beforeOpen = this.arrangeMenuBeforeOpen.bind(this);
        beforeClose = this.arrangeMenuBeforeClose.bind(this);
        menuclick = this.menuClick.bind(this);
        dropElement = this.drop.bind(this);
        tooledit = this.toolbarEditorClick.bind(this);
        zoomTemplate = this.zoomTemplate.bind(this);
        changeStateChange=this.changeStateChange.bind(this)
        changeStateTemplate=this.changeStateTemplate.bind(this);
        zoomchange = this.zoomChange.bind(this);
        createNode = this.createNode.bind(this);
        createConnector=this.createConnector.bind(this);
        footTemplate = this.footerTemplate.bind(this);
        printTemplateChange = this.printTemplate.bind(this);
        diagramName = this.diagramNameChange.bind(this);
        setBinaryStateFromInput =this.setBinaryStateFromInput.bind(this);
        RunSimulation= this.RunSimulation.bind(this);
        changeState=this.changeState.bind(this);
    }
    // mouseDown(args) {
    //     // this.inAction = true;
    //     // super.mouseDown(args);

    // }
    // mouseUp(args) {
    //     if (this.inAction) {
    //         const selectedObject = this.commandHandler.getSelectedObject();
    //         if (selectedObject[0]) {
    //             if (selectedObject[0] instanceof Node) {
    //                 this.selectedItem.utilityMethods.removeChild(this.selectedItem);
    //             }
    //         }
    //     }
    //     super.mouseUp(args);
    // }
    componentDidMount() {
        this.generateDiagram();
        this.uploader();
        document.onmouseover = this.menumouseover.bind(this);
        document.getElementById('diagram').onmousedown = function (args) {
            if (args.target.id.indexOf('Push') != -1) {
                var targetid = args.target.id.replace("group_container", "");
                var targetnode = undefined;
                var diagram=document.getElementById("diagram").ej2_instances[0];
                diagram.nodes.forEach(element => {
                    if (element.id == targetid) {
                        targetnode = element;
                    }
                });
        
                if (targetnode != undefined) {
                    var child1 = diagram.getObject(targetnode.children[1]);
                    child1.style.fill = "#05DAC5";
                    targetnode.addInfo.binarystate = 1;
                    setBinaryStateFromInput(targetnode);
                    RunSimulation();
                }
            }
        }
        document.getElementById('diagram').onmouseup = function (args) {
            if (args.target.id.indexOf('Push') != -1) {
                var targetid = args.target.id.replace("group_container", "");
                var targetnode = undefined;
                var diagram=document.getElementById("diagram").ej2_instances[0];
                diagram.nodes.forEach(element => {
                    if (element.id == targetid) {
                        targetnode = element;
                    }
                });
        
                if (targetnode != undefined) {
                    var child1 = diagram.getObject(targetnode.children[1]);
                    child1.style.fill = "white";
                    targetnode.addInfo.binarystate = 0;
                    setBinaryStateFromInput(targetnode);
                    RunSimulation();
                }
            }
        }
    }
    render() {
        return (<div>
            <input type="file" id="fileupload" name="UploadFiles"></input>
            <ContextMenuComponent id='designContextMenu' ref={arrangeContextMenu => (this.arrangeContextMenu) = arrangeContextMenu} animationSettings={this.animationSettings} items={this.dropDownDataSources.designMenuItems} onOpen={designContextMenuOpen} cssClass="designMenu" beforeItemRender={beforItem} select={menuclick} beforeClose={() => this.arrangeMenuBeforeClose}/>
            <ContextMenuComponent id='editContextMenu' ref={editContextMenu => (this.editContextMenu) = editContextMenu} animationSettings={this.animationSettings}   onOpen={editContextMenuOpen} beforeItemRender={beforItem} select={menuclick} items={this.dropDownDataSources.editMenuItems}  cssClass="editMenu" beforeClose={() => this.arrangeMenuBeforeClose} />  
            <div className='diagrambuilder-container' >
                <div className='header navbar'>
                    <div className="db-header-container">
                        <div className="db-diagram-name-container">
                            <span id='diagramName' className="db-diagram-name" style={{
                                width: "250px", overflow: "hidden",
                                textOverflow: "ellipse", whiteSpace: "nowrap"}} onClick={this.renameDiagram}>
                                Untitled Diagram
                            </span>
                            <input id='diagramEditable' type="text" className="db-diagram-name" onFocus={diagramName}/>
                            <span id='diagramreport' className="db-diagram-name db-save-text"/>
                        </div>
                        <div className='db-menu-container'>
                            <div className="db-menu-style">
                                <DropDownButtonComponent id="btnFileMenu" cssClass={"db-dropdown-menu"} content="File" items={this.dropDownDataSources.fileMenuItems}  select={menuclick}
                                beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                                
                            </div>
                            <div className="db-menu-style">
                                < DropDownButtonComponent id="btnEditMenu" cssClass={"db-dropdown-menu"} content="Edit"
                                    items={this.dropDownDataSources.editMenuItems} select={menuclick} target= '.e-contextmenu-wrapper.editMenu'
                                    beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                            </div>
                            <div className="db-menu-style">
                                <DropDownButtonComponent id="btnDesignMenu" cssClass={"db-dropdown-menu"} content="Design" target='.e-contextmenu-wrapper.designMenu' items={this.dropDownDataSources.designMenuItems}  select={menuclick}
                                beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                            </div>
                            <div className="db-menu-style">
                                <DropDownButtonComponent id="btnSelectMenu" cssClass={"db-dropdown-menu"} content="Select" items={this.dropDownDataSources.selectMenuItems}  select={menuclick}
                                beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                            </div>
                            <div className="db-menu-style">
                                <DropDownButtonComponent id="btnToolsMenu" cssClass={"db-dropdown-menu"} content="Tools" items={this.dropDownDataSources.toolsMenuItems}  select={menuclick}
                                beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                            </div>
                            <div className="db-menu-style">
                                <DropDownButtonComponent id="btnViewMenu" cssClass={"db-dropdown-menu"} content="View" items={this.dropDownDataSources.viewMenuItems}  select={menuclick}
                                beforeItemRender={beforItem} beforeOpen={beforeOpen} beforeClose={beforeClose}/>
                                
                            </div>   
                        </div>
                    </div>
                    <div className='db-toolbar-editor'>
                        <div className='db-toolbar-container'>
                        <ToolbarComponent ref={toolbar => (this.toolbarEditor) = toolbar} id='toolbarEditor' overflowMode='Scrollable' clicked={tooledit}>
                            <ItemsDirective>
                                <ItemDirective prefixIcon= 'sf-icon-undo tb-icons' tooltipText= 'Undo' cssClass= 'tb-item-start tb-item-undo'/>
                                <ItemDirective prefixIcon="sf-icon-redo tb-icons" tooltipText="Redo" cssClass="tb-item-end tb-item-redo"/>
                                <ItemDirective type="Separator"/>
                                <ItemDirective prefixIcon= 'sf-icon-pan' tooltipText= 'Pan Tool' cssClass='tb-item-start'/>
                                <ItemDirective prefixIcon= 'sf-icon-pointer' tooltipText= 'Select Tool' cssClass='tb-item-middle tb-item-selected'/>
                                <ItemDirective type="Separator"/>
                                <ItemDirective  template={changeStateTemplate} visible ={false}  tooltipText= 'Signal Duration(ms)' />
                                <ItemDirective cssClass="tb-item-end tb-zoom-dropdown-btn" template={zoomTemplate} align='Right'/>
                            </ItemsDirective>
                        </ToolbarComponent>
                        </div>
                    </div>
                </div>
                <div className='row content'>
                    <div className='sidebar show-overview'>
                        <div className="db-palette-parent">
                            <SymbolPaletteComponent ref={symbolpalette => (this.symbolpalette) = symbolpalette} id="symbolpalette" width="100%" height="100%" 
                            expandMode={this.palettes.expandMode} 
                            palettes={this.palettes.palettes}  
                            symbolPreview={this.palettes.symbolPreview} symbolMargin={this.palettes.symbolMargin} 
                            getSymbolInfo={this.palettes.getSymbolInfo} />
                        </div>
                    </div>
                    <div className='main-content' role='main'>
                        <div className="db-diagram-container">
                            <div id="diagramContainerDiv" className='db-current-diagram-container'>
                                <DiagramComponent ref={diagram => (this.diagram = diagram)} id="diagram" width={"100%"} height={"100%"}
                                scrollSettings={this.scrollSettings} selectedItems={this.selectedItems} rulerSettings={this.rulerSettings}
                                pageSettings={this.pageSettings}  nodes={this.nodes} connectors={this.connectors}  backgroundColor="transparent"
                                selectionChange={this.diagramEvents.selectionChange.bind(this.diagramEvents)}
                                historyChange={this.diagramEvents.historyChange.bind(this.diagramEvents)} created={this.diagramEvents.created.bind(this.diagramEvents)} click={this.click.bind(this)} collectionChange={this.collectionChange.bind(this)}
                                drop={this.drop.bind(this)} scrollChange={this.scrollChange.bind(this)} getConnectorDefaults={this.getConnectorDefaults.bind(this)}
                                elementDraw={this.elementDraw.bind(this)} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <DialogComponent ref={dialog => this.exportDialog = dialog} id="exportDialog" width={"400px"} header='Export Diagram' target={this.dlgTarget} isModal={true} animationSettings={this.dialogAnimationSettings} buttons={this.exportingButtons} showCloseIcon={true} content={footTemplate} visible={this.dialogVisibility}/>
        <DialogComponent id="printDialog" ref={dialog => this.printDialog = dialog} width={"335px"} header='Print Diagram' target={this.dlgTarget} isModal={true} animationSettings={this.dialogAnimationSettings} buttons={this.printingButtons} content={printTemplateChange} visible={this.dialogVisibility}/>
       
        </div>);
    }
    renameDiagram() {
        document.getElementsByClassName('db-diagram-name-container')[0].classList.add('db-edit-name');
        const element = document.getElementById('diagramEditable');
        element.value = document.getElementById('diagramName').innerHTML;
        element.focus();
        element.select();
    }
    diagramNameKeyDown(args) {
        if (args.which === 13) {
            document.getElementById('diagramName').innerHTML = document.getElementById('diagramEditable').value;
            document.getElementsByClassName('db-diagram-name-container')[0].classList.remove('db-edit-name');
        }
    }
    diagramNameChange() {
        document.getElementById('diagramName').innerHTML = document.getElementById('diagramEditable').value;
        document.getElementsByClassName('db-diagram-name-container')[0].classList.remove('db-edit-name');
        this.selectedItem.exportSettings.fileName = document.getElementById('diagramName').innerHTML;
    }
    generateDiagram() {
        this.selectedItem.selectedDiagram = this.diagram;
        
    }
    uploader(){
        let uploadObj = new Uploader({
        asyncSettings: {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
        },
        success: this.onUploadSuccess,
        showFileList:false
      });
      uploadObj.appendTo('#fileupload');
      }
    
        onUploadSuccess(args) {
        var file1 = args.file;
        var file = file1.rawFile;
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = loadDiagram;
      }
      
      //Load the diagraming object.
      loadDiagram(event) {
        let diagrm = document.getElementById('diagram').ej2_instances[0];
        diagrm.loadDiagram(event.target.result);
      }
    beforeItemRender(args) {
        const shortCutText = this.getShortCutKey(args.item.text);
        if (shortCutText) {
            const shortCutSpan = createElement('span');
             const text = args.item.text;
            shortCutSpan.textContent = shortCutText;
            shortCutSpan.style.pointerEvents = 'none';
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class', 'db-shortcut');
        }
        const status = this.enableMenuItems(args.item.text, this.selectedItem);
        if (status) {
            args.element.classList.add('e-disabled');
        }
        else {
            if (args.element.classList.contains('e-disabled')) {
                args.element.classList.remove('e-disabled');
            }
        }
    }
    designContextMenuOpen(args) {
        if (args.element.classList.contains('e-menu-parent')) {
            const popup = document.querySelector('#btnDesignMenu-popup');
            args.element.style.left = formatUnit(parseInt(args.element.style.left, 10) - parseInt(popup.style.left, 10));
            args.element.style.top = formatUnit(parseInt(args.element.style.top, 10) - parseInt(popup.style.top, 10));
        }
    }
    editContextMenuOpen(args) {
        if (args.element.classList.contains('e-menu-parent')) {
            var popup = document.querySelector('#btnEditMenu-popup');
            args.element.style.left = formatUnit(parseInt(args.element.style.left, 10) - parseInt(popup.style.left, 10));
            args.element.style.top = formatUnit(parseInt(args.element.style.top, 10) - parseInt(popup.style.top, 10));
        }
    }
    footerTemplate() {
        return (<div id="exportDialogContent">
                <div className="row">
                    <div className="row">
                        File Name
                </div>
                    <div className="row db-dialog-child-prop-row">
                        <input type="text" id="exportfileName" value={this.selectedItem.exportSettings.fileName}/>
                    </div>
                </div>
                <div className="row db-dialog-prop-row">
                    <div className="col-xs-6 db-col-left">
                        <div className="row">
                            Format
                    </div>
                        <div className="row db-dialog-child-prop-row">
                            <DropDownListComponent id="exportFormat" ref={dropdown => this.ddlTextPosition = dropdown} value={this.selectedItem.exportSettings.format} dataSource={this.dropDownDataSources.fileFormats} fields={this.dropdownListFields}/>

                        </div>
                    </div>
                    <div className="col-xs-6 db-col-right">
                        <div className="row">
                            Region
                    </div>
                        <div className="row db-dialog-child-prop-row">
                            <DropDownListComponent ref={dropdown => this.ddlTextPosition = dropdown} id="exportRegion" value={this.selectedItem.exportSettings.region} dataSource={this.dropDownDataSources.diagramRegions} fields={this.dropdownListFields}/>
                        </div>
                    </div>
                </div>
            </div>);
    }
    printTemplate() {
        return (<div id="printDialogContent">
                <div className="row">
                    <div className="row">
                        Region
                </div>
                    <div className="row db-dialog-child-prop-row">
                        <DropDownListComponent ref={dropdown => this.ddlTextPosition = dropdown} value={this.selectedItem.printSettings.region} dataSource={this.dropDownDataSources.diagramRegions} fields={this.dropdownListFields}/>
                    </div>
                </div>
                <div className="row db-dialog-prop-row">
                    <div className="row">
                        Print Settings
                </div>
                    <div className="row db-dialog-child-prop-row">
                        <DropDownListComponent ref={dropdown => this.ddlTextPosition = dropdown} dataSource={this.dropDownDataSources.paperList} fields={this.dropdownListFields} value={this.selectedItem.pageSettings.paperSize}/>
                    </div>
                </div>
                <div id="printCustomSize" className="row db-dialog-prop-row" style={{ display: "none", height: "28px" }}>
                    <div className="col-xs-6 db-col-left">
                        <div className="db-text-container">
                            <div className="db-text">
                                <span>W</span>
                            </div>
                            <div className="db-text-input">
                                <NumericTextBoxComponent id="printPageWidth" min={100} step={1} format="n0" value={this.selectedItem.printSettings.pageWidth}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 db-col-right">
                        <div className="db-text-container">
                            <div className="db-text">
                                <span>H</span>
                            </div>
                            <div className="db-text-input">
                                <NumericTextBoxComponent id="printPageHeight" min={100} step={1} format="n0" value={this.selectedItem.printSettings.pageHeight}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="printOrientation" className="row db-dialog-prop-row" style={{ height: "28px", padding: "5px 0px" }}>
                    <div className="col-xs-3 db-prop-col-style" style={{ marginRight: "8px" }}>
                        <RadioButtonComponent id='printPortrait' label="Portrait" name="printSettings" checked={this.selectedItem.printSettings.isPortrait}/>
                    </div>
                    <div className="col-xs-3 db-prop-col-style">
                        <RadioButtonComponent id='printLandscape' label="Landscape" name="printSettings" checked={this.selectedItem.printSettings.isLandscape}/>
                    </div>
                </div>
                <div className="row db-dialog-prop-row" style={{ marginTop: "16px" }}>
                    <CheckBoxComponent id='printMultiplePage' label="Scale to fit 1 page" checked={this.selectedItem.printSettings.multiplePage}/>
                </div>
            </div>);
    }
    getDialogButtons(dialogType) {
        const buttons = [];
        // eslint-disable-next-line
        switch (dialogType) {
            case 'export':
                buttons.push({
                    click: this.btnExportClick.bind(this), buttonModel: { content: 'Export', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'print':
                buttons.push({
                    click: this.btnPrintClick.bind(this), buttonModel: { content: 'Print', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            // case 'save':
            //     buttons.push({
            //         click: this.btnSave.bind(this), buttonModel: { content: 'Save', cssClass: 'e-flat e-db-primary', isPrimary: true }
            //     });
            //     break;
            // case 'tooltip':
            //     buttons.push({
            //         click: this.btnTooltip.bind(this), buttonModel: { content: 'Apply', cssClass: 'e-flat e-db-primary', isPrimary: true }
            //     });
            //     break;
            // case 'hyperlink':
            //     buttons.push({
            //         click: this.btnHyperLink.bind(this), buttonModel: { content: 'Apply', cssClass: 'e-flat e-db-primary', isPrimary: true }
            //     });
            //     break;
            // case 'deleteconfirmation':
            //     buttons.push({
            //         click: this.btnDeleteConfirmation.bind(this), buttonModel: { content: 'Ok', cssClass: 'e-flat e-db-primary', isPrimary: true }
            //     });
            //     break;
            // case 'moreshapes':
            //     buttons.push({
            //         click: this.btnMoreShapes.bind(this), buttonModel: { content: 'Apply', cssClass: 'e-flat e-db-primary', isPrimary: true }
            //     });
            //     break;
        }
        buttons.push({
            click: this.btnCancelClick.bind(this), buttonModel: { content: 'Cancel', cssClass: 'e-flat', isPrimary: true }
        });
        return buttons;
    }   
    btnExportClick() {
        const diagram = this.selectedItem.selectedDiagram;
        diagram.exportDiagram({
            fileName: this.selectedItem.exportSettings.fileName,
            format: this.selectedItem.exportSettings.format,
            region: this.selectedItem.exportSettings.region
        });
        this.exportDialog.hide();
    }
    btnPrintClick() {
        let pageWidth = this.selectedItem.printSettings.pageWidth;
        let pageHeight = this.selectedItem.printSettings.pageHeight;
        const paperSize = this.selectedItem.utilityMethods.getPaperSize(this.selectedItem.printSettings.paperSize);
        if (paperSize.pageHeight && paperSize.pageWidth) {
            pageWidth = paperSize.pageWidth;
            pageHeight = paperSize.pageHeight;
        }
        if (this.selectedItem.pageSettings.isPortrait) {
            if (pageWidth > pageHeight) {
                const temp = pageWidth;
                pageWidth = pageHeight;
                pageHeight = temp;
            }
        }
        else {
            if (pageHeight > pageWidth) {
                const temp = pageHeight;
                pageHeight = pageWidth;
                pageWidth = temp;
            }
        }
        const diagram = this.selectedItem.selectedDiagram;
        diagram.print({
            "region": this.selectedItem.printSettings.region,
            "pageHeight": pageHeight, "pageWidth": pageWidth,
            "multiplePage": !this.selectedItem.printSettings.multiplePage,
            "pageOrientation": this.selectedItem.printSettings.isPortrait ? 'Portrait' : 'Landscape'
        });
        this.printDialog.hide();
    }
    btnCancelClick(args) {
        const ss = args.target;
        const key = ss.offsetParent.id;
        // eslint-disable-next-line
        switch (key) {
            case 'exportDialog':
                this.exportDialog.hide();
                break;
            case 'printDialog':
                this.printDialog.hide();
                break;
            // case 'saveDialog':
            //     this.saveDialog.hide();
            //     break;
            // case 'customPropertyDialog':
            //     this.customPropertyDialog.hide();
            //     break;
            // case 'tooltipDialog':
            //     this.tooltipDialog.hide();
            //     break;
            // case 'hyperlinkDialog':
            //     this.hyperlinkDialog.hide();
            //     break;
            
            
        }
    }
    toolbarEditorClick(args) 
        {
            var diagram = this.selectedItem.selectedDiagram;
            var item = args.item.tooltipText;
            switch(item)
            {
                case 'Undo':
                    diagram.undo();
                    break;
                case 'Redo':
                    diagram.redo();
                    break;
                case 'Select Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.Default;
                    break;
                case 'Pan Tool':
                    diagram.clearSelection()
                    diagram.tool = DiagramTools.ZoomPan;
                    break;
            }
            if (item === 'Select Tool' || item === 'Pan Tool'  ) {
                if (args.item.cssClass.indexOf('tb-item-selected') === -1) {
                    this.removeSelectedToolbarItem();
                    args.item.cssClass += ' tb-item-selected';
                }
            }
            diagram.dataBind();
        };
    removeSelectedToolbarItem ()
    {
        var toolbarObj=document.getElementById("toolbarEditor").ej2_instances[0];
        for (var i = 0; i < toolbarObj.items.length; i++) {
            var item = toolbarObj.items[i];
            if (item.cssClass.indexOf('tb-item-selected') !== -1) {
                item.cssClass = item.cssClass.replace(' tb-item-selected', '');
            }
        }
        toolbarObj.dataBind();
        //document.getElementById('conTypeBtn').classList.remove('tb-item-selected');
    };
    zoomTemplate() {
        return (<div id="template_toolbar">
            <DropDownButtonComponent id="btnZoomIncrement" items={this.dropDownDataSources.zoomMenuItems} content={this.selectedItem.scrollSettings.currentZoom} select={zoomchange}/>
        </div>);
    }
    changeStateTemplate(){
        return (<div id="template_toolbar" className="db-text-input"  style={{marginLeft: "10px"}}>
         <NumericTextBoxComponent  min={1000} max={20000} step={1000} format={'###'} value={3000} change={changeStateChange}/>
    </div>);   
    }
    
    createNode(id, offsetX, offsetY, height, width, pathData, ports, fill, binarystate, controltype) {
        var node = {};
        node.id = id;
        node.offsetX = offsetX;
        node.offsetY = offsetY;
        node.height = height;
        node.width = width;
        node.shape = { type: 'Path', data: pathData };
        node.ports = ports;
        node.constraints = NodeConstraints.Default & ~NodeConstraints.InConnect;
        node.ports.forEach(element => {
            element.height = 12;
            element.width = 10;
            element.shape = 'Circle';
            element.visibility = PortVisibility.Visible;
        });
        node.style = { fill: fill, strokeWidth: 0 };
        node.addInfo = { binarystate: binarystate, controltype: controltype };
        return node;
    }
    createConnector(id, sourcePoint, targetPoint, sourceID, targetID, sourcePortID, targetPortID, binarystate) {
        var connector = {};
        connector.id = id;
        if (sourcePoint) {
            connector.sourcePoint = { x: sourcePoint.x, y: sourcePoint.y - nodeY };
        }
        if (targetPoint) {
            connector.targetPoint = { x: targetPoint.x, y: targetPoint.y - nodeY };
        }
        connector.sourceID = sourceID;
        connector.targetID = targetID;
        connector.type = 'Bezier';
        connector.sourceDecorator = { shape: null };
        connector.targetDecorator = { shape: null };
        connector.style = { strokeWidth: 2 };
        connector.sourcePortID = sourcePortID;
        connector.targetPortID = targetPortID;
        connector.addInfo = { binarystate: binarystate };
        return connector;
    }
    changeStateChange(args){
        window.clearInterval(this.clockinterval);
        this.clockinterval = window.setInterval(changeState, args.value);
    }
    changeState() {
        // window.clearInterval(this.clockinterval);
        // this.clockinterval = window.setInterval(this.changeState,args.value);
        var diagram = document.getElementById("diagram").ej2_instances[0];
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.id.indexOf("Clock") != -1) {
                if (element.addInfo.binarystate == 0) {
                    element.addInfo.binarystate = 1;
                    var child = diagram.getObject(element.children[1]);
                    child.style.fill = "#05DAC5";
                    this.setBinaryStateFromInput(element);
                }
                else {
                    element.addInfo.binarystate = 0;
                    var child = diagram.getObject(element.children[1]);
                    child.style.fill = "white";
                    this.setBinaryStateFromInput(element);
                }
            }
        }
    
        this.RunSimulation();
    
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
               
                if (selectedItem.diagramType !== 'GeneralDiagram') {
                    if (itemText === 'Themes' || itemText === 'Paste' || itemText === 'Show Rulers' || itemText === 'Show Guides'
                        || itemText === 'Show Grid' || itemText === 'Show Stencil') {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    zoomChange(args) {
        var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
        var diagram = this.selectedItem.selectedDiagram;
        var currentZoom = diagram.scrollSettings.currentZoom;
        var zoom = {};
        switch (args.item.text) {
            case 'Zoom In':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = (diagram.scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom to Fit':
                diagram.fitToPage({ mode: 'Page', region: 'Content'});
                zoomCurrentValue.content = diagram.scrollSettings.currentZoom;
                break;
            case 'Zoom to 50%':
                zoom.zoomFactor = (0.5 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
            case 'Zoom to 100%':
                zoom.zoomFactor = (1 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
            case 'Zoom to 200%':
                zoom.zoomFactor = (2 / currentZoom) - 1;
                diagram.zoomTo(zoom);
                break;
        }
      
        zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom*100) + ' %';
        
    }
    getShortCutKey(menuItem) {
        let shortCutKey = navigator.platform.indexOf('Mac') > -1 ? 'Cmd' : 'Ctrl';
        // eslint-disable-next-line
        switch (menuItem) {
            case 'New':
              // eslint-disable-next-line
                shortCutKey = 'Shift' + '+N';
                break;
            case 'Open':
                shortCutKey = shortCutKey + '+O';
                break;
            case 'Save':
                shortCutKey = shortCutKey + '+S';
                break;
            case 'Undo':
                shortCutKey = shortCutKey + '+Z';
                break;
            case 'Redo':
                shortCutKey = shortCutKey + '+Y';
                break;
            case 'Cut':
                shortCutKey = shortCutKey + '+X';
                break;
            case 'Copy':
                shortCutKey = shortCutKey + '+C';
                break;
            case 'Paste':
                shortCutKey = shortCutKey + '+V';
                break;
            case 'Delete':
                shortCutKey = 'Delete';
                break;
            case 'Duplicate':
                shortCutKey = shortCutKey + '+D';
                break;
            case 'Select All':
                shortCutKey = shortCutKey + '+A';
                break;
            case 'Zoom In':
                shortCutKey = shortCutKey + '++';
                break;
            case 'Zoom Out':
                shortCutKey = shortCutKey + '+-';
                break;
            case 'Group':
                shortCutKey = shortCutKey + '+G';
                break;
            case 'Ungroup':
                shortCutKey = shortCutKey + '+U';
                break;
            case 'Send To Back':
                shortCutKey = shortCutKey + '+Shift+B';
                break;
            case 'Bring To Front':
                shortCutKey = shortCutKey + '+Shift+F';
                break;
            default:
                shortCutKey = '';
                break;
        }
        return shortCutKey;
    }
    click(args){
        var diagram=this.selectedItem.selectedDiagram;
        let clickedbutton = args.button;
        if (clickedbutton == "Left") {
        diagram.nodes.forEach(element => {
            if (element == args.element) {
                this.OnInputChanged(element,diagram);
            }
        });
        }
    }
    OnInputChanged(args,diagram) {
        if (args.id.indexOf("Switch") != -1) {
            if (args.addInfo.binarystate == 1){
                args.addInfo.binarystate = 0; 
                var diagram=this.selectedItem.selectedDiagram;
                var Child3 = diagram.getObject(args.children[3]);
                var Child2 = diagram.getObject(args.children[2]);
                var Child1 = diagram.getObject(args.children[1]);
                Child3.visible = false;
                Child2.visible = true;
                Child1.style.fill = "white";
            }
            else if (args.addInfo.binarystate == 0) {
                args.addInfo.binarystate = 1;
                var Child3 = diagram.getObject(args.children[3]);
                var Child2 = diagram.getObject(args.children[2]);
                var Child1 = diagram.getObject(args.children[1]);
                Child3.visible = true;
                Child2.visible = false;
                Child3.style.fill = 'white';
                Child3.style.strokeColor = 'black';
                Child3.style.strokeWidth = 2;
                Child1.style.fill = "#05DAC5";
            }
        }
        // else if (args.id.indexOf("Push") != -1) {
        //     var child1 = diagram.getObject(args.children[1]);
        //     child1.style.fill = "#05DAC5";
        //     args.addInfo.binarystate = 1;
        // }
    
        this.RunSimulation();
    }
    RunSimulation() {

        var isFlip= true;
        var regulatednodes = [];
        var diagram = document.getElementById('diagram').ej2_instances[0]; 
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.addInfo != undefined && element.addInfo.controltype == "inputcontrol") {
                regulatednodes.push(element);
            }
        }
    
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.addInfo != undefined && element.addInfo.controltype == "gate") {
                regulatednodes.push(element);
            }
        }
    
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.addInfo != undefined && element.addInfo.controltype == "flipflop") {
                regulatednodes.push(element);
            }
        }
    
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.addInfo != undefined && element.addInfo.controltype == "othercontrol") {
                regulatednodes.push(element);
            }
        }
    
        for (let i = 0; i < diagram.nodes.length; i++) {
            var element = diagram.nodes[i];
            if (element.addInfo != undefined && element.addInfo.controltype == "outputcontrol") {
                regulatednodes.push(element);
            }
        }
        
        for (let i = 0; i < regulatednodes.length; i++) {
            var element = regulatednodes[i];
    
            if (element.addInfo.controltype == "inputcontrol") {
                this.setBinaryStateFromInput(element);
            }
    
            else if (element.addInfo.controltype == "gate") {
                this.GatesOutput(element);
            }
    
            else if (element.addInfo.controltype == "flipflop") {
                this.FlipFlopOutput(element);
            }
    
            else if (element.addInfo.controltype == "othercontrol") {
                this.OtherControl(element);
            }
    
            else if (element.addInfo.controltype == "outputcontrol") {
                this.OutputControl(element);
            }
        }
    
        diagram.dataBind();
        isFlip = true;
    }
    collectionChange(){
        this.RunSimulation();
    }
    scrollChange(args){
        var diagram=this.selectedItem.selectedDiagram;
        if(args.panState !=='Start'){ 
            var btnZoomIncrement = document.getElementById("btnZoomIncrement").ej2_instances[0];
        btnZoomIncrement.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
        }
     }
     elementDraw(args) {
        if (args.state == "Completed" && args.objectType == "Connector") {
            var diagram=this.selectedItem.selectedDiagram;
            var sourcenode = diagram.getObject(args.source.sourceID);
            var targetnode = diagram.getObject(args.source.targetID);
            var sourceport = undefined;
            var targetport = undefined;
            for( var i=0;i<args.source.segments.length;i++)
            {
                args.source.segments[i].isInternalSegment = true;
            }
            if (targetnode != undefined && targetnode.ports.length > 0) {
                targetnode.ports.forEach(element => {
                    if (element.id == args.source.targetPortID) {
                        targetport = element;
                    }
                });
                if (targetport.inEdges.length > 1) {
                // diagram.commandHandler.addObjectToDiagram(diagram.selectedItems.connectors[0]);
                    diagram.remove();
                }
            }
    
            if (args.source.sourcePortID != "" && args.source.targetPortID != ""
                && args.source.sourcePortID != undefined && args.source.targetPortID != undefined
                && sourcenode.addInfo != undefined) {
                if (sourcenode.id.indexOf('Flop') != -1) {
                    if (args.source.sourcePortID.indexOf('q') != -1 && sourcenode.addInfo.binarystate1 != undefined) {
                        args.source.addInfo = { binarystate: sourcenode.addInfo.binarystate1 };
                    }
                    else if (args.source.sourcePortID.indexOf('q1') != -1 && sourcenode.addInfo.binarystate2 != undefined) {
                        args.source.addInfo = { binarystate: sourcenode.addInfo.binarystate2 };
                    }
                }
                else {
                    args.source.addInfo = { binarystate: sourcenode.addInfo.binarystate };
                }
                this.RunSimulation();
            }
            else {
                // diagram.commandHandler.addObjectToDiagram(diagram.selectedItems.connectors[0]);
                diagram.remove();
            }
        }
    }
    OutputControl(element) {
        if (element.id.indexOf("Bulb") != -1) {
            var diagram = document.getElementById("diagram").ej2_instances[0];;
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            if (InputCon1 != undefined && InputCon1.addInfo != undefined) {
                var Inputstate1 = InputCon1.addInfo.binarystate;
                if (Inputstate1 == 0) {
                    var child1 = diagram.getObject(element.children[2]);
                    var child2 = diagram.getObject(element.children[3]);
                    child1.visible = false;
                    child2.visible = false;
                }
                else if (Inputstate1 == 1) {
                    var child1 = diagram.getObject(element.children[2]);
                    var child2 = diagram.getObject(element.children[3]);
                    child1.style.fill = '#05DAC5';
                    child2.style.fill = '#05DAC5';
                    child1.visible = true;
                    child2.visible = true;
                }
                else {
                    var child1 = diagram.getObject(element.children[2]);
                    var child2 = diagram.getObject(element.children[3]);
                    child1.visible = false;
                    child2.visible = false;
                }
            }
            else {
                var child1 = diagram.getObject(element.children[2]);
                var child2 = diagram.getObject(element.children[3]);
                if(child1){
                child1.visible = false;}
                if(child2){
                child2.visible = false;}
            }
        }
    
        else if (element.id.indexOf("Digit") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var InputCon3 = diagram.getObject(element.inEdges[2]);
            var InputCon4 = diagram.getObject(element.inEdges[3]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            var Inputstate3 = 0;
            var Inputstate4 = 0;
            var InputConnectors = [InputCon1, InputCon2, InputCon3, InputCon4];
    
            InputConnectors.forEach(con => {
                if (con != undefined) {
                    if (con.targetPortID == "digitport1") {
                        Inputstate1 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "digitport2") {
                        Inputstate2 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "digitport3") {
                        Inputstate3 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "digitport4") {
                        Inputstate4 = con.addInfo.binarystate;
                    }
                }
    
            });
    
            if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0) {
                element.shape.data = this.zerodata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0) {
                element.shape.data = this.onedata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0) {
                element.shape.data = this.twodata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0) {
                element.shape.data = this.threedata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0) {
                element.shape.data = this.fourdata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0) {
                element.shape.data = this.fivedata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0) {
                element.shape.data = this.sixdata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0) {
                element.shape.data = this.sevendata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1) {
                element.shape.data = this.eightdata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1) {
                element.shape.data = this.ninedata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1) {
                element.shape.data = this.tendata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1) {
                element.shape.data = this.elevendata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1) {
                element.shape.data = this.twelvedata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1) {
                element.shape.data = this.thirteendata;
            }
            else if (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1) {
                element.shape.data = this.fourteendata;
            }
            else if (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1) {
                element.shape.data = this.fifteendata;
            }
        }
    };
    GatesOutput(element) {
        var diagram = document.getElementById("diagram").ej2_instances[0];;
        if (element.id.indexOf("XNOR") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if ((Inputstate1 == 0 && Inputstate2 == 0) || (Inputstate1 == 1 && Inputstate2 == 1)) {
                    state = 1;
                }
                else {
                    state = 0;
                }
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("XOR") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if ((Inputstate1 == 0 && Inputstate2 == 0) || (Inputstate1 == 1 && Inputstate2 == 1)) {
                    state = 0;
                }
                else {
                    state = 1;
                }
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("NOR") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if (Inputstate1 == 0 && Inputstate2 == 0) {
                    state = 1;
                }
                else {
                    state = 0;
                }
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("OR") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if (Inputstate1 == 0 && Inputstate2 == 0) {
                    state = 0;
                }
                else {
                    state = 1;
                }
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("NAND") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if (Inputstate1 == 1 && Inputstate2 == 1) {
                    state = 0;
                }
                else {
                    state = 1;
                }
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("AND") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if (Inputstate1 == 1 && Inputstate2 == 1) {
                    state = 1;
                }
                else {
                    state = 0;
                }
                element.addInfo.binarystate = state;
    
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
        else if (element.id.indexOf("Not") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            if (InputCon1 != undefined) {
                var Inputstate1 = InputCon1.addInfo.binarystate;
                var state = undefined;
                if (Inputstate1 == 0) {
                    element.addInfo.binarystate = 1;
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.addInfo.binarystate = 0;
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("Buffer") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            if (InputCon1 != undefined) {
                var Inputstate1 = InputCon1.addInfo.binarystate;
                var state = undefined;
                if (Inputstate1 == 1) {
                    element.addInfo.binarystate = 1;
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.addInfo.binarystate = 0;
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    };
    setBinaryStateFromInput(element) {
        var diagram = document.getElementById("diagram").ej2_instances[0];;
        if (element.id.indexOf("Switch") != -1 || element.id.indexOf("Push") != -1
            || element.id.indexOf("Constant") != -1 || element.id.indexOf("Clock") != -1) {
            if (element.addInfo.binarystate == 0) {
                element.outEdges.forEach(cons => {
                    var con = diagram.getObject(cons);
                    if (con != undefined) {
                        con.addInfo = { binarystate: 0 };
                        con.style.strokeColor = "black";
                        con.style.strokeWidth = 2;
                    }
                });
            }
            else {
                element.outEdges.forEach(cons => {
                   var diagram=document.getElementById('diagram').ej2_instances[0];
                    var con = diagram.getObject(cons);
                    if (con != undefined) {
                        con.addInfo = { binarystate: 1 };
                        con.style.strokeColor = "#05DAC5";
                        con.style.strokeWidth = 2;
                    }
                });
            }
        }
    };
    FlipFlopOutput(element) {
        if (element.id.indexOf("JK") != -1) {
            var skip = false;
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var InputCon3 = diagram.getObject(element.inEdges[2]);
            var InputCon4 = diagram.getObject(element.inEdges[3]);
            var InputCon5 = diagram.getObject(element.inEdges[4]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            var Inputstate3 = 0;
            var Inputstate4 = 0;
            var Inputstate5 = 0;
            var InputConnectors = [InputCon1, InputCon2, InputCon3, InputCon4, InputCon5];
            var outstate1 = undefined;
            var outstate2 = undefined;
            InputConnectors.forEach(con => {
                if (con != undefined) {
                    if (con.targetPortID == "jport") {
                        Inputstate1 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clkport") {
                        Inputstate2 = con.addInfo?con.addInfo.binarystate:0;
                    }
                    else if (con.targetPortID == "kport") {
                        Inputstate3 = con.addInfo?con.addInfo.binarystate:0;
                    }
                    else if (con.targetPortID == "preport") {
                        Inputstate4 = con.addInfo?con.addInfo.binarystate:0;
                    }
                    else if (con.targetPortID == "clrport") {
                        Inputstate5 = con.addInfo?con.addInfo.binarystate:0;
                    }
                }
            });
            var checkConn = false;
            for(var i=0;i<InputConnectors.length;i++)
            {
                if(InputConnectors[i]!==undefined){
                    checkConn = true;
                    break;
                }
            }
            if(checkConn){
            if((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)||
            (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)){
                outstate1 = 1;
                outstate2 = 1;
            }
            else if((Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)){
                outstate1 = 1;
                outstate2 = 0;
            }
            else if((Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)){
                outstate1 = 0;
                outstate2 = 1;
            }
            else if((Inputstate1 == 0 &&  Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)||
            (Inputstate4 == 1 && Inputstate5 == 0))
            {
                outstate1 = 0;
                outstate2 = 1;
            }
            else if((Inputstate1 == 1 &&  Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 1)
            ||(Inputstate4 == 0 && Inputstate5 == 1))
            {
                outstate1 = 1;
                outstate2 = 0;
            }
            else if( Inputstate4 == 1 && Inputstate5 == 1)
            {
                skip = true;
            }
    
            // if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 0)) {
            //     outstate1 = 0;
            //     outstate2 = 1;
            // }
    
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1 && Inputstate5 == 1)) {
            //     outstate1 = 1;
            //     outstate2 = 0;
            // }
    
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0 && Inputstate5 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0 && Inputstate5 == 0)) {
            //     outstate1 = 1;
            //     outstate2 = 1;
            // }
    
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1 && Inputstate5 == 1)) {
            //     outstate1 = 0;
            //     outstate2 = 0;
            // }
            if(!skip){
    
            element.addInfo.binarystate1 = outstate1;
            element.addInfo.binarystate2 = outstate2;
    
            var con1 = diagram.getObject(element.outEdges[0]);
            var con2 = diagram.getObject(element.outEdges[1]);
            var outconnect1 = undefined;
            var outconnect2 = undefined;
    
            if (con1 != undefined && con1.sourcePortID == "q1port") {
                outconnect2 = con1;
            }
            else if (con1 != undefined && con1.sourcePortID == "qport") {
                outconnect1 = con1;
            }
    
            if (con2 != undefined && con2.sourcePortID == "q1port") {
                outconnect2 = con2;
            }
            else if (con2 != undefined && con2.sourcePortID == "qport") {
                outconnect1 = con2;
            }
    
            if (outstate1 == 1) {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 1 };
                    outconnect1.style.strokeColor = "#05DAC5";
                    outconnect1.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 0 };
                    outconnect1.style.strokeColor = "black";
                    outconnect1.style.strokeWidth = 2;
                }
            }
    
            if (outstate2 == 1) {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 1 };
                    outconnect2.style.strokeColor = "#05DAC5";
                    outconnect2.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 0 };
                    outconnect2.style.strokeColor = "black";
                    outconnect2.style.strokeWidth = 2;
                }
            }
        }
    }
        }
    
        else if (element.id.indexOf("D") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var InputCon3 = diagram.getObject(element.inEdges[2]);
            var InputCon4 = diagram.getObject(element.inEdges[3]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            var Inputstate3 = 0;
            var Inputstate4 = 0;
            var InputConnectors = [InputCon1, InputCon2, InputCon3, InputCon4];
            var outstate1 = undefined;
            var outstate2 = undefined;
            InputConnectors.forEach(con => {
                if (con != undefined) {
                    if (con.targetPortID == "DTport") {
                        Inputstate1 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clkport") {
                        Inputstate2 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "preport") {
                        Inputstate3 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clrport") {
                        Inputstate4 = con.addInfo.binarystate;
                    }
                }
            });
            var checkConn = false;
            for(var i=0;i<InputConnectors.length;i++)
            {
                if(InputConnectors[i]!==undefined){
                    checkConn = true;
                    break;
                }
            }
            if(checkConn){
            if ((Inputstate3 == 0 && Inputstate4 == 0) && (Inputstate1 == 0)){
                outstate1 = 1;
                outstate2 = 1;
            }
            else if((Inputstate3 == 1 && Inputstate4 == 1) && (Inputstate1 == 1))
            {
                outstate1 = 1;
                outstate2 = 0;
            }
            else if((Inputstate3 == 1 && Inputstate4 == 1) && (Inputstate1 == 0))
            {
                outstate1 = 0;
                outstate2 = 1;
            }
            else if((Inputstate3 == 1 && Inputstate4 == 0)){
                outstate1 = 0;
                outstate2 = 1;
            }
            else if((Inputstate3 == 0 && Inputstate4 == 1)){
                outstate1 = 1;
                outstate2 = 0;
            }
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0)) {
            //     outstate1 = 0;
            //     outstate2 = 1;
            // }
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1)) {
            //     outstate1 = 1;
            //     outstate2 = 0;
            // }
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0)) {
            //     outstate1 = 1;
            //     outstate2 = 1;
            // }
            // else if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0) {
            //     outstate1 = 0;
            //     outstate2 = 0;
            // }
    
            element.addInfo.binarystate1 = outstate1;
            element.addInfo.binarystate2 = outstate2;
    
            var con1 = diagram.getObject(element.outEdges[0]);
            var con2 = diagram.getObject(element.outEdges[1]);
            var outconnect1 = undefined;
            var outconnect2 = undefined;
    
    
            if (con1 != undefined && con1.sourcePortID == "q1port") {
                outconnect2 = con1;
            }
            else if (con1 != undefined && con1.sourcePortID == "qport") {
                outconnect1 = con1;
            }
    
            if (con2 != undefined && con2.sourcePortID == "q1port") {
                outconnect2 = con2;
            }
            else if (con2 != undefined && con2.sourcePortID == "qport") {
                outconnect1 = con2;
            }
    
            if (outstate1 == 1) {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 1 };
                    outconnect1.style.strokeColor = "#05DAC5";
                    outconnect1.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 0 };
                    outconnect1.style.strokeColor = "black";
                    outconnect1.style.strokeWidth = 2;
                }
            }
    
            if (outstate2 == 1) {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 1 };
                    outconnect2.style.strokeColor = "#05DAC5";
                    outconnect2.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 0 };
                    outconnect2.style.strokeColor = "black";
                    outconnect2.style.strokeWidth = 2;
                }
            }
        }
        }
    
        else if (element.id.indexOf("T") != -1) {
            var skip = false;
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var InputCon3 = diagram.getObject(element.inEdges[2]);
            var InputCon4 = diagram.getObject(element.inEdges[3]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            var Inputstate3 = 0;
            var Inputstate4 = 0;
            var InputConnectors = [InputCon1, InputCon2, InputCon3, InputCon4];
            var outstate1 = undefined;
            var outstate2 = undefined;
            InputConnectors.forEach(con => {
                if (con != undefined) {
                    if (con.targetPortID == "DTport") {
                        Inputstate1 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clkport") {
                        Inputstate2 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "preport") {
                        Inputstate3 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clrport") {
                        Inputstate4 = con.addInfo.binarystate;
                    }
                }
            });
            var checkConn = false;
            for(i=0;i<InputConnectors.length;i++)
            {
                if(InputConnectors[i]!==undefined){
                    checkConn = true;
                    break;
                }
            }
            
            if(checkConn){
            if((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0)||
            (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0)||
            (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0))
            {
                outstate1 = 1;
                outstate2 = 1;
            }
            else if((Inputstate1 == 1 && Inputstate3 == 1 && Inputstate4 == 1)){
                if(Inputstate2 ===1){
                    let outConnects = [ diagram.getObject(element.outEdges[0]),diagram.getObject(element.outEdges[1])]
                    outConnects.forEach(con => {
                        if (con != undefined) {
                            if (con.sourcePortID == "qport") {
                                this.outState1 = con.addInfo.binarystate;
                            }
                            else if (con.sourcePortID == "q1port") {
                                this.outState2 = con.addInfo.binarystate;
                            }
                        }
                    });
                    // outstate1 = outState1===1?0:1;
                    // outstate2 = outState2===1?0:1;
                    var out1;
                    var out2;
                    outstate1 = out1;
                    outstate2 = out2;
                }
                else if(Inputstate2 === 0 ){
                    skip = true;
                    var el1 = element.addInfo.binarystate1===0?1:0;
                    var el2 = element.addInfo.binarystate2===0?1:0;
                    out1 = 1-out1;
                    out2 = 1-out2;
    
                }
            }
            else if(
            (Inputstate3 == 1 && Inputstate4 == 0))
            {
                outstate1 = 0;
                outstate2 = 1;
            }
            else if((Inputstate3 == 0 && Inputstate4 == 1))
            {
                outstate1 = 1;
                outstate2 = 0;
            }
            else if((Inputstate3 == 1 && Inputstate4 == 1)){
                skip = true;
            }
    
            // if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 0)) {
            //     outstate1 = 0;
            //     outstate2 = 1;
            // }
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 1)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 1 && Inputstate4 == 1)) {
            //     outstate1 = 1;
            //     outstate2 = 0;
            // }
            // else if ((Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0)
            //     || (Inputstate1 == 0 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 0 && Inputstate3 == 0 && Inputstate4 == 0)
            //     || (Inputstate1 == 1 && Inputstate2 == 1 && Inputstate3 == 0 && Inputstate4 == 0)) {
            //     outstate1 = 1;
            //     outstate2 = 1;
            // }
            // else if (Inputstate1 == 0 && Inputstate2 == 0 && Inputstate3 == 1 && Inputstate4 == 1) {
            //     outstate1 = 0;
            //     outstate2 = 0;
            // }
            if(!skip){
            element.addInfo.binarystate1 = outstate1;
            element.addInfo.binarystate2 = outstate2;
            var Odd1 = outstate1;
            var Odd2 = outconnect2;
    
            var con1 = diagram.getObject(element.outEdges[0]);
            var con2 = diagram.getObject(element.outEdges[1]);
            var outconnect1 = undefined;
            var outconnect2 = undefined;
    
    
            if (con1 != undefined && con1.sourcePortID == "q1port") {
                outconnect2 = con1;
            }
            else if (con1 != undefined && con1.sourcePortID == "qport") {
                outconnect1 = con1;
            }
    
            if (con2 != undefined && con2.sourcePortID == "q1port") {
                outconnect2 = con2;
            }
            else if (con2 != undefined && con2.sourcePortID == "qport") {
                outconnect1 = con2;
            }
            if (outstate1 == 1) {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 1 };
                    outconnect1.style.strokeColor = "#05DAC5";
                    outconnect1.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect1 != undefined) {
                    outconnect1.addInfo = { binarystate: 0 };
                    outconnect1.style.strokeColor = "black";
                    outconnect1.style.strokeWidth = 2;
                }
            }
    
            if (outstate2 == 1) {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 1 };
                    outconnect2.style.strokeColor = "#05DAC5";
                    outconnect2.style.strokeWidth = 2;
                }
            }
            else {
                if (outconnect2 != undefined) {
                    outconnect2.addInfo = { binarystate: 0 };
                    outconnect2.style.strokeColor = "black";
                    outconnect2.style.strokeWidth = 2;
                }
            }
        }
    }
        }
    
        else if (element.id.indexOf("SR") != -1) {
            var diagram = this.selectedItem.selectedDiagram;
            var skip = false;
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var InputCon3 = diagram.getObject(element.inEdges[2]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            var Inputstate3 = 0;
            var InputConnectors = [InputCon1, InputCon2, InputCon3];
            var outstate1 = undefined;
            var outstate2 = undefined;
            InputConnectors.forEach(con => {
                if (con != undefined) {
                    if (con.targetPortID == "sport") {
                        Inputstate1 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "clkport") {
                        Inputstate2 = con.addInfo.binarystate;
                    }
                    else if (con.targetPortID == "rport") {
                        Inputstate3 = con.addInfo.binarystate;
                    }
                }
            });
            
            if ((Inputstate1 == 1  && Inputstate3 == 1)) {
                outstate1 = 0;
                outstate2 = 0;
            }
            else if(Inputstate1 == 1 && Inputstate3 == 0)
            {
                outstate1 = 1;
                outstate2 = 0;
            }
            else if(Inputstate1 == 0 && Inputstate3 == 1)
            {
                outstate1 = 0;
                outstate2 = 1;
            }
            else {
                 skip = true
            }
            if(!skip){
                element.addInfo.binarystate1 = outstate1;
                element.addInfo.binarystate2 = outstate2;
    
                var con1 = diagram.getObject(element.outEdges[0]);
                var con2 = diagram.getObject(element.outEdges[1]);
                var outconnect1 = undefined;
                var outconnect2 = undefined;
    
                if (con1 != undefined && con1.sourcePortID == "q1port") {
                    outconnect2 = con1;
                }
                else if (con1 != undefined && con1.sourcePortID == "qport") {
                    outconnect1 = con1;
                }
    
                if (con2 != undefined && con2.sourcePortID == "q1port") {
                    outconnect2 = con2;
                }
                else if (con2 != undefined && con2.sourcePortID == "qport") {
                    outconnect1 = con2;
                }
    
                if (outstate1 == 1) {
                    if (outconnect1 != undefined) {
                        outconnect1.addInfo = { binarystate: 1 };
                        outconnect1.style.strokeColor = "#05DAC5";
                        outconnect1.style.strokeWidth = 2;
                    }
                }
                else {
                    if (outconnect1 != undefined) {
                        outconnect1.addInfo = { binarystate: 0 };
                        outconnect1.style.strokeColor = "black";
                        outconnect1.style.strokeWidth = 2;
                    }
                }
    
                if (outstate2 == 1) {
                    if (outconnect2 != undefined) {
                        outconnect2.addInfo = { binarystate: 1 };
                        outconnect2.style.strokeColor = "#05DAC5";
                        outconnect2.style.strokeWidth = 2;
                    }
                }
                else {
                    if (outconnect2 != undefined) {
                        outconnect2.addInfo = { binarystate: 0 };
                        outconnect2.style.strokeColor = "black";
                        outconnect2.style.strokeWidth = 2;
                    }
                }
            }
        }
    } 
    OtherControl(element) {
        var diagram =document.getElementById("diagram").ej2_instances[0];;
        if (element.id.indexOf("Bus") != -1) {
            var InputCon1 = diagram.getObject(element.inEdges[0]);
            var InputCon2 = diagram.getObject(element.inEdges[1]);
            var Inputstate1 = 0;
            var Inputstate2 = 0;
            if (InputCon1 != undefined && InputCon2 != undefined) {
                if (InputCon1.addInfo != undefined) {
                    Inputstate1 = InputCon1.addInfo.binarystate;
                }
                if (InputCon2.addInfo != undefined) {
                    var Inputstate2 = InputCon2.addInfo.binarystate;
                }
                var state = undefined;
                if (Inputstate1 == 0 && Inputstate2 == 0) {
                    state = 0;
                }
                else if ((Inputstate1 == 1 && Inputstate2 == 0) || (Inputstate1 == 0 && Inputstate2 == 1)) {
                    state = 2;
                }
                else {
                    state = 1;
                }
                element.addInfo.binarystate = state;
    
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else if (state == 2) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 2 };
                            con.style.strokeColor = "grey";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
    
            else if (InputCon2 == undefined && InputCon1 != undefined) {
                var Inputstate1 = InputCon1.addInfo.binarystate;
                var state = Inputstate1;
                element.addInfo.binarystate = state;
    
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
    
            else if (InputCon1 == undefined && InputCon2 != undefined) {
                var Inputstate1 = InputCon2.addInfo.binarystate;
                var state = Inputstate1;
                element.addInfo.binarystate = state;
    
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    
        else if (element.id.indexOf("Pull") != -1) {
            var InputCon = diagram.getObject(element.inEdges[0]);
            if (InputCon != undefined) {
                var Inputstate = InputCon.addInfo.binarystate;
                var state = Inputstate;
                element.addInfo.binarystate = state;
                if (state == 1) {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 0 };
                            con.style.strokeColor = "black";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
                else {
                    element.outEdges.forEach(cons => {
                        var con = diagram.getObject(cons);
                        if (con != undefined) {
                            con.addInfo = { binarystate: 1 };
                            con.style.strokeColor = "#05DAC5";
                            con.style.strokeWidth = 2;
                        }
                    });
                }
            }
        }
    };  
    getConnectorDefaults(connector) {
        connector.type = 'Bezier';
        connector.hitPadding = 20;
        connector.bezierSettings = { controlPointsVisibility: ControlPointsVisibility.Source | ControlPointsVisibility.Target
        ,smoothness: BezierSmoothness.SymmetricDistance }
        connector.constraints = ConnectorConstraints.Default & ~ConnectorConstraints.Drag;
    };
    arrangeMenuBeforeOpen(args) {
        for (var i = 0; i < args.element.children.length; i++) {
            args.element.children[i].style.display = 'block';
        }
        
        if (args.event && closest(args.event.target, '.e-dropdown-btn') !== null) {
            args.cancel = true;
        }
        //     args.element.children[0].style.display = 'block';
        
        // if (args.event && closest(args.event.target, '.e-dropdown-btn') !== null) {
        //     args.cancel = true;
        // }
    }
    arrangeMenuBeforeClose(args) {
        if (args.event && closest(args.event.target, '.e-dropdown-btn') !== null) {
            args.cancel = true;
        }
        if (!args.element) {
            args.cancel = true;
        }
    }
    drop(args) {
        var diagram = this.selectedItem.selectedDiagram; 
        if (args.element.id.indexOf("Switch") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'inputcontrol' };
            args.element.ports = toggleswitchport;
            if(args.element.children){
                for(var i=0;i<args.element.children.length;i++)
                {
                    var ele = diagram.getObject(args.element.children[i]);
                    if(ele.id.indexOf('SwOffOuter')!== -1){
                        ele.width+=15;ele.height+=10;ele.offsetX+=3;
                    }else if(ele.id.indexOf('SwOffInner')!== -1){
                    ele.width+=10; ele.height+=10;
                    }
                    else{
                    ele.width+=10; ele.height+=13;
                    }
                }
            }
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("Clock") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'inputcontrol' };
            args.element.ports = toggleswitchport;
            if(args.element.children){
                for(i=0;i<args.element.children.length;i++)
                {
                    var ele = diagram.getObject(args.element.children[i]);
                    if(ele.id.indexOf('CLKOuterRect')!== -1){
                        ele.width+=15;ele.height+=15;ele.offsetX+=3;
                    }else if(ele.id.indexOf('CLKInnerPart')!== -1){
                    ele.width+=10; ele.height+=10;
                    }
                    // else{
                    // ele.width+=10; ele.height+=10;
                    // }
                }
            }
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("Low") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'inputcontrol' };
            args.element.ports = pushbuttonport;
            args.element.width = 80;
            args.element.height = 60;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("High") != -1) {
            args.element.addInfo = { binarystate: 1, controltype: 'inputcontrol' };
            args.element.ports = pushbuttonport;
            args.element.width = 80;
            args.element.height = 60;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("Push") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'inputcontrol' };
            args.element.ports = pushbuttonport;
            // args.element.width = 80;
            // args.element.height = 60;
            if(args.element.children){
                for(i=0;i<args.element.children.length;i++)
                {
                    var ele = diagram.getObject(args.element.children[i]);
                    if(ele.id.indexOf('PBOuterRect')!== -1){
                        ele.width+=15;ele.height+=10;ele.offsetX+=3;
                    }else if(ele.id.indexOf('PBOuterCircle')!== -1){
                    ele.width+=12; ele.height+=12;
                    }
                    else{
                    ele.width+=9; ele.height+=9
                    }
                }
            }
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.InConnect | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("Gate") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'gate' };
            if (args.element.id.indexOf("OR") != -1) {
                args.element.ports = orPort;
            }
            else if (args.element.id.indexOf("AND") != -1) {
                args.element.ports = andPort;
            }
            else {
                args.element.ports = notPort;
            }
            args.element.width = 100;
            args.element.height = 40;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                if (element.id.indexOf('1') != -1 || element.id.indexOf('3') != -1) {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.OutConnect);
                }
                else {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.InConnect) | PortConstraints.Draw;
                }
    
            });
        }
        else if (args.element.id.indexOf("Flop") != -1) {
            args.element.addInfo = { binarystate1: 0, binarystate2: 0, controltype: 'flipflop' };
            if (args.element.id.indexOf("JK") != -1) {
                args.element.ports = jkPorts;
                args.element.width = 120;
                args.element.height = 120;
            }
            else if (args.element.id.indexOf("T") != -1 || args.element.id.indexOf("D") != -1) {
                args.element.ports = DTPorts;
                args.element.width = 120;
                args.element.height = 120;
            }
            else if (args.element.id.indexOf("SR") != -1) {
                args.element.ports = srPorts;
                args.element.width = 100;
                args.element.height = 80;
            }
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                if (element.id.indexOf('q') != -1 || element.id.indexOf('q1') != -1) {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.InConnect) | PortConstraints.Draw;
                }
                else {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.OutConnect);
                }
            });
        }
        else if (args.element.id.indexOf("Bus") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'othercontrol' };
            args.element.ports = otherPort;
            args.element.width = 100;
            args.element.height = 50;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                if (element.id.indexOf('1') != -1 || element.id.indexOf('3') != -1) {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.OutConnect);
                }
                else {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.InConnect) | PortConstraints.Draw;
                }
            });
        }
        else if (args.element.id.indexOf("Pull") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'othercontrol' };
            args.element.ports = pullPort;
            args.element.width = 100;
            args.element.height = 50;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                if (element.id.indexOf('1') != -1 || element.id.indexOf('3') != -1) {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.OutConnect);
                }
                else {
                    element.constraints = (PortConstraints.Default & ~PortConstraints.InConnect) | PortConstraints.Draw;
                }
            });
        }
        else if (args.element.id.indexOf("Bulb") != -1) {
            args.element.addInfo = { binarystate: 0, controltype: 'outputcontrol' };
            args.element.ports = bulbport;
            args.element.width = 40;
            args.element.height = 60;
            if(args.element.children){
                for(i=0;i<args.element.children.length;i++)
                {
                    var ele = diagram.getObject(args.element.children[i]);
                    if(ele.id.indexOf('FullPath')!== -1){
                        ele.width+=8;ele.height+=26;ele.offsetY+=1.5;
                    }else if(ele.id.indexOf('BlackPart')!== -1){
                    ele.width+=6; ele.height+=6;ele.offsetY+=1.5;
                    }
                    else if(ele.id.indexOf('OuterBluePart')!== -1){
                         ele.height+=4;ele.offsetY-=4; ele.width+=5
                        }
                        else if(ele.id.indexOf('InnerBluePart')!== -1){
                            ele.height+=4;ele.offsetY-=2.2;ele.offsetX+=0.4;
                           }
                    else{
                    // ele.width+=9; ele.height+=9
                    }
                }
            }
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = (PortConstraints.Default & ~PortConstraints.OutConnect) | PortConstraints.Draw;
            });
        }
        else if (args.element.id.indexOf("Digit") != -1) {
            args.element.addInfo = { binarystate1: 0, binarystate2: 0, binarystate3: 0, binarystate4: 0, controltype: 'outputcontrol' };
            args.element.ports = DigitPorts;
            args.element.width = 80;
            args.element.height = 80;
            args.element.ports.forEach(element => {
                element.shape = 'Circle';
                element.visibility = PortVisibility.Visible;
                element.constraints = PortConstraints.Default & ~PortConstraints.OutConnect;
            });
        }
        else if (args.element.id.indexOf("Label") != -1) {
            args.element.width = 80;
            args.element.height = 40;
            args.element.style.fill = 'white';
            args.element.style.color = 'black';
        }
        diagram.dataBind();
    }
    
    menuClick(args) {
        const buttonElement = document.getElementsByClassName('e-btn-hover')[0];
        if (buttonElement) {
            buttonElement.classList.remove('e-btn-hover');
        }
        const diagram = this.selectedItem.selectedDiagram;
        const commandType = args.item.text;
        switch (commandType) {
            case 'New':
                diagram.clear();
                DiagramClientSideEvents.prototype.historyChange();
                break;
            case 'Open':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Save':
                this.download(diagram.saveDiagram());
                break;
            case 'Print':
                this.selectedItem.printSettings.pageHeight = this.selectedItem.pageSettings.pageHeight;
                this.selectedItem.printSettings.pageWidth = this.selectedItem.pageSettings.pageWidth;
                this.selectedItem.printSettings.paperSize = this.selectedItem.pageSettings.paperSize;
                this.selectedItem.printSettings.isPortrait = this.selectedItem.pageSettings.isPortrait;
                this.selectedItem.printSettings.isLandscape = !this.selectedItem.pageSettings.isPortrait;
                this.printDialog.show();
                break;
            case 'Export':
                this.exportDialog.show();
                break;
            case 'Open':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Undo':
                diagram.undo();
                break;
            case 'Redo':
                diagram.redo();
                break;
            case 'Cut':
                diagram.cut();
                break;
            case 'Copy':
                diagram.copy();
                break;
            case 'Paste':
                diagram.paste();
                break;
            case 'Rotate Right 90':
                diagram.rotate(diagram.selectedItems,90);
                break;
            case 'Rotate Left 90':
                diagram.rotate(diagram.selectedItems,-90);
                break;
            case 'Delete':
                diagram.remove();
                case 'Select All':
                    diagram.clearSelection();
                    diagram.selectAll();
                    break;
                case 'Select All Nodes':
                    diagram.clearSelection();
                    diagram.select(diagram.nodes);
                    break;
                case 'Select All Connectors':
                    diagram.clearSelection();
                    diagram.select(diagram.connectors);
                    break;
                case 'Deselect All':
                    diagram.clearSelection();
                    break;
                case 'Selection Tool':
                    diagram.tool = DiagramTools.Default;
                    this.removeSelectedToolbarItem();
                    break;
                case 'Pan Tool':
                    diagram.clearSelection();
                    diagram.tool = DiagramTools.ZoomPan;
                    this.removeSelectedToolbarItem();
                    break;
                case 'Show Lines':
                    diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ SnapConstraints.ShowLines;
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    break;
                case 'Snap To Grid':
                    diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ SnapConstraints.SnapToLines;
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    break;
                case 'Snap To Object':
                    diagram.snapSettings.constraints = diagram.snapSettings.constraints ^ SnapConstraints.SnapToObject;
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    break;
                case 'Show Ruler':
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    diagram.rulerSettings.showRulers = !diagram.rulerSettings.showRulers;
                    break;
                case 'Show Page Breaks':
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    diagram.pageSettings.showPageBreaks = !diagram.pageSettings.showPageBreaks;
                        //showPageBreaks.checked = !showPageBreaks.checked;
                    break;
                case 'Show Multiple page':
                    args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                    diagram.pageSettings.multiplePage = ! diagram.pageSettings.multiplePage;
                    break;
                case 'Fit To Width':
                    diagram.fitToPage({mode:'Width'});
                    break;
                case 'Fit To Page':
                    diagram.fitToPage({ mode: 'Page', region: 'Content'});
                    break;
                    case 'Landscape':
                args.item.parentObj.items[1].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.pageSettings.orientation = 'Landscape';
                break;
            case 'Portrait':
                args.item.parentObj.items[0].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.pageSettings.orientation = 'Portrait';
                break;
            case 'Letter (8.5 in x 11 in)':
            case 'Legal (8.5 in x 14 in)':
            case 'A3 (297 mm x 420 mm)':
            case 'A4 (210 mm x 297 mm)':
            case 'A5 (148 mm x 210 mm)':
            case 'A6 (105 mm x 148 mm)':
            case 'Tabloid (279 mm x 432 mm)':
                this.paperListChange(args,diagram)
                this.updateSelection(args.item);
                this.selectedItem.pageSettings.paperSize = args.item.value;
                break;
        }
        diagram.dataBind();
    }
    paperListChange(args,diagram)
    {
        var value = args.item.value;
        var paperSize = this.getPaperSize(value);
        var pageWidth = paperSize.pageWidth;
        var pageHeight = paperSize.pageHeight;
        if (pageWidth && pageHeight) {
            if (diagram.pageSettings.orientation === 'Portrait') {
                if (pageWidth > pageHeight) {
                    var temp = pageWidth;
                    pageWidth = pageHeight;
                    pageHeight = temp;
                }
            }
            else {
                if (pageHeight > pageWidth) {
                    var temp = pageHeight;
                    pageHeight = pageWidth;
                    pageWidth = temp;
                }
            }
            diagram.pageSettings.width = pageWidth;
            diagram.pageSettings.height = pageHeight;
        }
        else{
            diagram.pageSettings.width = 1460;
            diagram.pageSettings.height = 600;
        }
        this.updatePaperSelection(this.designContextMenu.items[1],args.item.value);
        diagram.dataBind();
    };
    // static openUploadBox(isOpen, extensionType) {
    //     let defaultUpload = document.getElementById('defaultfileupload');
    //     defaultUpload = defaultUpload.ej2_instances[0];
    //     defaultUpload.clearAll();
    //     this.selectedItem.orgDataSettings.extensionType = defaultUpload.allowedExtensions = extensionType;
    //     defaultUpload.dataBind();
    //     this.isOpen = isOpen;
    //     document.getElementsByClassName('e-file-select-wrap')[0].children[0].click();
    // }
    updateSelection(item)
    {
        for(var i=0;i<item.parentObj.items.length;i++)
        {
            if(item.text === item.parentObj.items[i].text){
                item.parentObj.items[i].iconCss = 'sf-icon-check-tick';
            }
            else{
                item.parentObj.items[i].iconCss = '';
            }
        }
    };
    getPaperSize (args)
    {
        var paperSize = new PaperSize();
        switch (args) {
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
            case 'A0':
                paperSize.pageWidth = 3179;
                paperSize.pageHeight = 4494;
                break;
             case 'A1':
                paperSize.pageWidth = 2245;
                paperSize.pageHeight = 3179;
                break;
             case 'A2':
                paperSize.pageWidth = 1587;
                paperSize.pageHeight = 2245;
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
        return paperSize
    };
    download(data)
    {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
            window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
        }
        else {
            var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
            var a = document.createElement('a');
            a.href = dataStr;
            a.download = document.getElementById('diagramName').innerHTML+'.json';
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };
    menumouseover(args) {
        var target = args.target;
        var diagram=this.selectedItem.selectedDiagram;
        if (target && (target.className === 'e-control e-dropdown-btn e-lib e-btn db-dropdown-menu' ||
            target.className === 'e-control e-dropdown-btn e-lib e-btn db-dropdown-menu e-ddb-active')) {
            if (this.buttonInstance && this.buttonInstance.id !== target.id) {
                if (this.buttonInstance.getPopUpElement().classList.contains('e-popup-open')) {
                    this.buttonInstance.toggle();
                    const buttonElement = document.getElementById(this.buttonInstance.element.id);
                    buttonElement.classList.remove('e-btn-hover');
                }
            }
            var button1 = target.ej2_instances[0];
            this.buttonInstance = button1;
            if (button1.getPopUpElement().classList.contains('e-popup-close')) {
                button1.toggle();
                if (button1.element.id === 'btnEditMenu') {
                    this.enableEditMenuItems(diagram);
                }
                const buttonElement = document.getElementById(this.buttonInstance.element.id);
                buttonElement.classList.add('e-btn-hover');
            }
        }
        else {
            if (closest(target, '.e-dropdown-popup') === null && closest(target, '.e-dropdown-btn') === null) {
                if (this.buttonInstance && this.buttonInstance.getPopUpElement().classList.contains('e-popup-open')) {
                    this.buttonInstance.toggle();
                    const buttonElement = document.getElementById(this.buttonInstance.element.id);
                    buttonElement.classList.remove('e-btn-hover');
                }
            }
        }
    }
   enableEditMenuItems(diagram) {
        var contextInstance = document.getElementById('editContextMenu');
        var contextMenu = contextInstance.ej2_instances[0];
        var selectedItems = diagram.selectedItems.nodes;
        selectedItems = selectedItems.concat(diagram.selectedItems.connectors);
        for (var i = 0; i < contextMenu.items.length; i++) {
            contextMenu.enableItems([contextMenu.items[i].text], false);
        }
        var objects = diagram.selectedItems.nodes.concat(diagram.selectedItems.connectors);
        if (objects.length > 0) {
            contextMenu.enableItems(['Cut', 'Copy', 'Delete', 'Order Commands', 'Rotate']);
        }
        if (diagram.historyManager.undoStack.length > 0) {
            contextMenu.enableItems(['Undo']);
        }
        if (diagram.historyManager.redoStack.length > 0) {
            contextMenu.enableItems(['Redo']);
        }
        if ((diagram.commandHandler.clipboardData.pasteIndex !== undefined
            && diagram.commandHandler.clipboardData.clipObject !== undefined)) {
            contextMenu.enableItems(['Paste']);
        }
    }
    

}

export default App;
