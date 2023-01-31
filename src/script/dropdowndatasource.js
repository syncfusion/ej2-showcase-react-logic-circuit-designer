export class DropDownDataSources {
    constructor() {
        this.fileMenuItems = this.getFileMenuItems();
        this.editMenuItems = this.getEditMenuItems();
        this.viewMenuItems = this.getViewMenuItems();
        this.designMenuItems = this.getDesignMenuItems();
        this.selectMenuItems = this.getSelectMenuItems();
        this.toolsMenuItems = this.getToolsMenuItems();
        this.fileFormats = [
            { text: 'JPG', value: 'JPG' }, { text: 'PNG', value: 'PNG' },
            { text: 'SVG', value: 'SVG' }
        ];
        this.diagramRegions = [
            { text: 'Content', value: 'Content' }, { text: 'PageSettings', value: 'PageSettings' }
        ];
        this.importFormat = [
            { text: 'CSV', value: 'CSV' }, { text: 'XML', value: 'XML' }, { text: 'JSON', value: 'JSON' }
        ];
        this.borderStyles = [
            { text: 'None', value: 'None', className: 'ddl-svg-style ddl_linestyle_none' },
            { text: '1,2', value: '1,2', className: 'ddl-svg-style ddl_linestyle_one_two' },
            { text: '3,3', value: '3,3', className: 'ddl-svg-style ddl_linestyle_three_three' },
            { text: '5,3', value: '5,3', className: 'ddl-svg-style ddl_linestyle_five_three' },
            { text: '4,4,1', value: '4,4,1', className: 'ddl-svg-style ddl_linestyle_four_four_one' }
        ];
        this.fontFamilyList = [
            { text: 'Arial', value: 'Arial' },
            { text: 'Aharoni', value: 'Aharoni' },
            { text: 'Bell MT', value: 'Bell MT' },
            { text: 'Fantasy', value: 'Fantasy' },
            { text: 'Times New Roman', value: 'Times New Roman' },
            { text: 'Segoe UI', value: 'Segoe UI' },
            { text: 'Verdana', value: 'Verdana' },
        ];
        this.decoratorList = [
            { text: 'None', value: 'None' },
            { text: 'Arrow', value: 'Arrow' },
            { text: 'Diamond', value: 'Diamond' },
            { text: 'OpenArrow', value: 'OpenArrow' },
            { text: 'Circle', value: 'Circle' },
            { text: 'Square', value: 'Square' },
            { text: 'Fletch', value: 'Fletch' },
            { text: 'OpenFetch', value: 'OpenFetch' },
            { text: 'IndentedArrow', value: 'IndentedArrow' },
            { text: 'OutdentedArrow', value: 'OutdentedArrow' },
            { text: 'DoubleArrow', value: 'DoubleArrow' }
        ];
        this.lineTypes = [
            { text: 'Straight', value: 'Straight' }, { text: 'Orthogonal', value: 'Orthogonal' },
            { text: 'Bezier', value: 'Bezier' }
        ];
        this.gradientDirections = [
            { text: 'BottomToTop', value: 'BottomToTop' }, { text: 'TopToBottom', value: 'TopToBottom' },
            { text: 'RightToLeft', value: 'RightToLeft' }, { text: 'LeftToRight', value: 'LeftToRight' }
        ];
        this.drawShapesList = [
            { iconCss: 'sf-icon-Square', text: 'Rectangle' },
            { iconCss: 'sf-icon-Ellipse', text: 'Ellipse' },
            { iconCss: 'sf-icon-Triangle', text: 'Polygon' }
        ];
        this.drawConnectorsList = [
            { iconCss: 'sf-icon-StraightLine', text: 'Straight Line' },
            { iconCss: 'sf-icon-ConnectorMode', text: 'Orthogonal Line' },
            { iconCss: 'sf-icon-BeizerLine', text: 'Bezier' }
        ];
        this.orderCommandsList = [
            { iconCss: 'sf-icon-Sendback', text: 'Send To Back' },
            { iconCss: 'sf-icon-BringFront', text: 'Bring To Front' },
            { iconCss: 'sf-icon-SendBackward', text: 'Send Backward' },
            { iconCss: 'sf-icon-BringForward', text: 'Bring Forward' },
        ];
        this.mindmapLevels = [
            { text: 'Root', value: 'Level0' }, { text: 'Level1', value: 'Level1' },
            { text: 'Level2', value: 'Level2' }, { text: 'Level3', value: 'Level3' },
            { text: 'Level4', value: 'Level4' }, { text: 'Level5', value: 'Level5' },
        ];
        this.zoomMenuItems = [
            { text: 'Zoom In' },{ text: 'Zoom Out' },{ text: 'Zoom to Fit' },{ text: 'Zoom to 50%' },
            { text: 'Zoom to 100%' },{ text: 'Zoom to 200%' },
        ];
        this.paperList = [
            { text: 'Letter (8.5 in x 11 in)', value: 'Letter' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
            { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
            { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
            { text: 'A6 (105 mm x 148 mm)', value: 'A6' }, { text: 'Custom', value: 'Custom' },
        ];
        
        this.listViewData = [
            { text: 'Flow', id: 'flowShapes', checked: true },
            { text: 'Basic', id: 'basicShapes', checked: true },
            { text: 'BPMN', id: 'bpmnShapes', checked: true },
            { text: 'Connectors', id: 'connectorsShapes', checked: true },
            { text: 'Electrical', id: 'electricalShapes', checked: false },
            { text: 'Network', id: 'networkShapes', checked: false },
            { text: 'Floorplan', id: 'floorShapes', checked: false },
        ];
    }
    getFileMenuItems() {
        const menuItems = [
            { text: 'New', iconCss: 'sf-icon-new' },
                { text: 'Open', iconCss: 'sf-icon-open' },
                { separator: true },
                { text: 'Save', iconCss: 'sf-icon-save' },
                { separator: true },
                { text: 'Export', iconCss: 'sf-icon-export'},
                { text: 'Print', iconCss: 'sf-icon-print' },
        ];
        return menuItems;
    }
    getEditMenuItems() {
        const menuItems = [
            { text: 'Undo', iconCss: 'sf-icon-undo' },
            { text: 'Redo', iconCss: 'sf-icon-redo' },
            { separator: true },
            { text: 'Cut', iconCss: 'sf-icon-cut' },
            { text: 'Copy', iconCss: 'sf-icon-copy' },
            { text: 'Paste', iconCss: 'sf-icon-paste' },
            { separator: true },
            { text: 'Rotate',iconCss:'sf-icon-rotate', items:[
                { text: 'Rotate Right 90', iconCss: 'sf-icon-rotate-clockwise' },
                { text: 'Rotate Left 90', iconCss: 'sf-icon-rotate-counter-clockwise' },
                // { text: 'Flip Vertical', iconCss: 'sf-icon-flip-vertical' },
                // { text: 'Flip Horizontal', iconCss: 'sf-icon-flip-horizontal' },
            ]},
            { text: 'Delete', iconCss: 'sf-icon-delete' },
            { separator: true },
        ];
        return menuItems;
    }
    getViewMenuItems() {
        const menuItems = [
            { text: 'Show Lines',iconCss: 'sf-icon-check-tick'},
            { text: 'Snap To Grid',iconCss : 'sf-icon-check-tick'},
            { text: 'Snap To Object',iconCss : 'sf-icon-check-tick'},
            { text: 'Show Ruler',iconCss: 'sf-icon-check-tick'},
            { text: 'Show Page Breaks',iconCss: ''},
            { text: 'Show Multiple page',iconCss: ''},
            { separator: true },
            { text: 'Fit To Width'},
            { text: 'Fit To Page'},
        ];
        return menuItems;
    }
    getDesignMenuItems() {
        const menuItems1 = [
            { text: 'Orientation',iconCss: 'sf-icon-page_orientation',
            items:[
                { text: 'Landscape', iconCss: 'sf-icon-check-tick' },
                { text: 'Portrait', iconCss: '' }
            ]    
            },
            { text: 'Size', iconCss: 'em-icons e-copy',
            items:this.paperList()
            },
        ];
        return menuItems1;
    }
    paperList(){
        var items =[
            { text: 'Letter (8.5 in x 11 in)', value: 'Letter' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
            { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
            { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
            { text: 'A6 (105 mm x 148 mm)', value: 'A6' }
        ]
        return items;
    }
    getSelectMenuItems() {
        const menuItems = [
            { text: 'Select All', iconCss: 'em-icons e-cut' },
            { text: 'Select All Nodes', iconCss: 'em-icons e-copy' },
            { text: 'Select All Connectors', iconCss: 'em-icons e-paste' },
            { text: 'Deselect All', iconCss: 'em-icons e-paste' }
        ];
        return menuItems;
    }
    getToolsMenuItems() {
        const menuItems = [
            { text: 'Selection Tool',iconCss: 'sf-icon-pointer' },
            { text: 'Pan Tool', iconCss: 'sf-icon-pan tb-icons' },
        ];
        return menuItems;
    }
}