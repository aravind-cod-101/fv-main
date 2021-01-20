import React, { Component } from 'react';
// import { Grid,Row,Col } from 'react-bootstrap';
import { Button,Checkbox,FormGroup } from 'react-bootstrap';

class AppLeftSidebar extends Component {
    constructor() {
        super();
        this.state = {
          buttonColorActive: false,
          buttonFilterActive: false,
          buttonPriceActive: false,
          value: 300,
          sideView: true,
          colorValue: ""
        };
        this.onColorButtonClick = this.onColorButtonClick.bind(this);
        this.onFilterButtonClick = this.onFilterButtonClick.bind(this);
        this.onPriceButtonClick = this.onPriceButtonClick.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.onSideViewClick = this.onSideViewClick.bind(this);

        this.handleColorValueChange = this.handleColorValueChange.bind(this);
        this.handleColorReset = this.handleColorReset.bind(this);
    }

    onColorButtonClick() {
        this.setState({
            buttonColorActive: !this.state.buttonColorActive
        });
    }

    onFilterButtonClick() {
        this.setState({
            buttonFilterActive: !this.state.buttonFilterActive
        });
    }

    onPriceButtonClick() {
        this.setState({
            buttonPriceActive: !this.state.buttonPriceActive
        });
    }

    handleSliderChange(e){
        this.setState({value: e.target.value});
    }

    onSideViewClick(){
        this.setState({
            sideView: !this.state.sideView
        });
    }

    handleColorValueChange(e){
        let clickedLink = e.currentTarget;
        let data = clickedLink.getAttribute('data-value');
        this.setState({colorValue: data});
    }

    handleColorReset(){
        this.setState({colorValue: ""});
    }

    render() {
        let ColorsContentClass="";
        let FiltersContentClass="";
        let PriceContentClass="";
        let ColorsIconClass="";
        let FiltersIconClass="";
        let PriceIconClass="";
        let LeftSideClass="";
        if(this.state.buttonColorActive){
            ColorsIconClass = "fas fa-plus text-muted make-small";
            ColorsContentClass = "hide";
        }
        else{
            ColorsIconClass = "fas fa-minus text-muted make-small"
            ColorsContentClass = "Colors";
        }
        if(this.state.buttonFilterActive){
            FiltersIconClass = "fas fa-plus text-muted make-small";
            FiltersContentClass = "hide";
        }
        else{
            FiltersIconClass = "fas fa-minus text-muted make-small"
            FiltersContentClass = "Filters";
        }
        if(this.state.buttonPriceActive){
            PriceIconClass = "fas fa-plus text-muted make-small";
            PriceContentClass = "hide";
        }
        else{
            PriceIconClass = "fas fa-minus text-muted make-small"
            PriceContentClass = "Price";
        }
        if(this.state.sideView){
            LeftSideClass = "AppLeftSidebar"
        }
        else{
            LeftSideClass = "AppLeftSidebarRemove"
        }
        return (
        <div>
            <div>
                <Button className="clickButton" onClick={this.onSideViewClick}>Filters</Button>
            </div>
            <div className={LeftSideClass}>
                <Button onClick={this.onSideViewClick} className="pull-right Filter-Close"><i style={{color:"red"}} className="fas fa-times"></i></Button>
                <h1 className="SidebarColorsHeading text-muted" onClick={this.onColorButtonClick}>Colors
                    <div className="SidebarButton">
                        <Button className="ColorButton">
                            <i className={ColorsIconClass}></i>
                        </Button>
                    </div>
                </h1>
                {/* eslint-disable */}
                <div className={ColorsContentClass}>
                    <div className="ColorIcons Icon-Row-1">
                        <a href="javascript:void(0)" data-value="1" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "1" ? "activeCircle" : "")}
                                style={{color:"rgb(241, 101, 101)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="2" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "2" ? "activeCircle" : "")}
                                style={{color:"rgb(116, 174, 230)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="3" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "3" ? "activeCircle" : "")}
                                style={{color:"rgb(129, 230, 116)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="4" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "4" ? "activeCircle" : "")}
                                style={{color:"rgb(105, 148, 241)"}}></i>
                        </a>
                    </div>
                    <div className="ColorIcons">
                        <a href="javascript:void(0)" data-value="5" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "5" ? "activeCircle" : "")}
                                style={{color:"rgb(241, 159, 105)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="6" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "6" ? "activeCircle" : "")}
                                style={{color:"rgb(243, 131, 224)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="7" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "7" ? "activeCircle" : "")}
                                style={{color:"rgb(188, 130, 255)"}}></i>
                        </a>
                        <a href="javascript:void(0)" data-value="8" onBlur={this.handleColorReset} onClick={this.handleColorValueChange}>
                            <i className={"fas fa-circle " + (this.state.colorValue === "8" ? "activeCircle" : "")}
                                style={{color:"rgb(240, 76, 76)"}}></i>
                        </a>
                    </div>
                </div>
                {/* eslint-enable */}
                <div className="SidebarSeparator"> </div>

                <h1 className="SidebarFiltersHeading text-muted" onClick={this.onFilterButtonClick}>Filters
                    <div className="SidebarFilterButton">
                        <Button className="FilterButton">
                            <i className={FiltersIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className={FiltersContentClass}>
                    {/* FilterContentClass -> hide or Filters */}
                    <h4 className="text-muted">New In</h4>
                    <h4 className="materials">Materials</h4>
                    <FormGroup className="checkbox-group">
                        <Checkbox className="checkboxes text-muted">Synthetic skin(6)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Metal(88)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Wooden(158)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Fabric(294)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Polyurathano(25)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Viscoelastic(36)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Natural Fiber(17)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Synthetic Fiber(20)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Natural skin(7)</Checkbox>
                        <Checkbox className="checkboxes text-muted">Foam(77)</Checkbox>
                    </FormGroup>
                </div>
                <div className="SidebarSeparator"></div>

                <h1 className="SidebarColorsHeading text-muted">Sell Off
                    <div className="SidebarButton">
                        <Button style={{opacity:"0"}} className="ColorButton">
                            <i className={ColorsIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className="SidebarSeparator"></div>

                <h1 className="SidebarPriceHeading text-muted" onClick={this.onPriceButtonClick}>Price
                    <div className="SidebarPriceButton">
                        <Button className="PriceButton">
                            <i className={PriceIconClass}></i>
                        </Button>
                    </div>
                </h1>
                <div className={PriceContentClass}>
                    <div className="AppSlider">
                        <div className="d-flex">
                            <div className="p-2" style={{display:'inline-block',float:'left'}}>1</div>
                            <div>
                                <input
                                id="myRange"
                                className="mySlider"
                                type="range"
                                min="0" max="300"
                                value={this.state.value}
                                onChange={this.handleSliderChange}
                                step="1"/>
                            </div>
                            <div className="p-2" style={{display:'inline-block',float:'left'}}>
                                {this.state.value}{"\u20AC"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ClearAll">
                    {/* eslint-disable  */}
                    <a href="#">CLEAR ALL&nbsp;&nbsp;<i className="fas fa-times"></i></a>
                    {/* eslint-enable */}
                </div>
            </div>
        </div>
        );
    }
}

export default AppLeftSidebar;
