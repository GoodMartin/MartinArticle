
    //Input:  template Name
    //Return: template String
    function getStackItemContent(expr,inObj){
        let ItemContent="";
        console.log(expr);
        switch(expr) {
            case 'template1':
                ItemContent=getTemplate1(inObj);
                console.log("switch to template1");
                console.log(ItemContent);
                return ItemContent;
                break;
            case 'template2':
                ItemContent=getTemplate2(inObj);
                console.log("switch to template2");
                console.log(ItemContent);
                return ItemContent;
                break;
            default:
            console.log("expr is wrong,return default! ")
                return '';
        }
    }

    function getTemplate2(inObj){
        let templateContent = `
        <DIV class="panel-container">
            <DIV class="panel-title">LINE 1</DIV>
            <DIV class="panel-content">
                <div class="ChartDefaultSize" id="chartdiv10">
                    <div class="PanelContainer">\
                        <div class="PanelHeader">${inObj.eqpid}</div>\
                            <div class="PanelAlarm">警報</div>\
                            <div class="PanelKPIContainer">\
                                <div class="PanelKPIItem">\
                                    <div class="PanelKPIName">${inObj.PanelKPIItem1_KPIName}</div>\
                                    <div class="PanelKPIUnit">${inObj.PanelKPIItem1_KPIUnit}</div>\
                                    <div class="PanelKPIValue">${inObj.PanelKPIItem1_KPIValue}</div>\
                                </div>\
                                <div class="PanelKPIItem">\
                                    <div class="PanelKPIName">${inObj.PanelKPIItem2_KPIName}</div>\
                                    <div class="PanelKPIUnit">${inObj.PanelKPIItem2_KPIUnit}</div>\
                                    <div class="PanelKPIValue">${inObj.PanelKPIItem2_KPIValue}</div>\
                                </div>\
                                <div class="PanelKPIItem">\
                                    <div class="PanelKPIName">${inObj.PanelKPIItem3_KPIName}</div>\
                                    <div class="PanelKPIUnit">${inObj.PanelKPIItem3_KPIUnit}</div>\
                                    <div class="PanelKPIValue">${inObj.PanelKPIItem3_KPIValue}</div>\
                                </div>\
                            </div>\
                        
                        </div>\
                    </div>\
                </div>
            </div>
        </div>
        `
        return templateContent;
    }

    function getTemplate1(inObj){

        let templateContent = `
        <DIV class="panel-container">\
            <DIV class="panel-title">${inObj.panel_title}</DIV>
            <DIV class="panel-content">
                <DIV class="ChartDefaultSize" id="${inObj.panel_id}"></DIV>
            </DIV>
        </DIV>
        `
        console.log(templateContent);
        return templateContent;
    }

    function Create1(){
        let templateData={
            panel_title:"0,0",
            panel_id:"chartdiv1"
        }

        var StackItemContentTemplate_1 ="";
        StackItemContentTemplate_1=getStackItemContent("template1",templateData);
        grid.addWidget({w: 8,h: 4,x: 0,y: 1,content: StackItemContentTemplate_1});
    }

    function Create2(){
        let templateData2={
            eqpid:"EQP1",
            PanelKPIItem1_KPIName:"稼動率",
            PanelKPIItem1_KPIUnit:"%",
            PanelKPIItem1_KPIValue:"99",
            PanelKPIItem2_KPIName:"良率",
            PanelKPIItem2_KPIUnit:"%",
            PanelKPIItem2_KPIValue:"78",
            PanelKPIItem3_KPIName:"達成率",
            PanelKPIItem3_KPIUnit:"%",
            PanelKPIItem3_KPIValue:"56"

        }


        var StackItemContentTemplate_2 ="";
        StackItemContentTemplate_2=getStackItemContent("template2",templateData2);    
        grid.addWidget({w: 6,h: 4,x: 8,y: 1,content: StackItemContentTemplate_2});
    }
    
