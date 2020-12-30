import React, { Component } from "react";
import "./CategoryBar.css";

const ctg1 = [
  "Hot Selling Products",
  "Guarante on Supplier",
  "Hot Selling Products",
  "Help",
];

const ctg2 = [
  "Deliver to - Enter Pincode",
  "Bed",
  "Sofa",
  "Chair",
  "Dining Table",
  "Table",
  "Cabinetry",
  "Lights",
  "Modular Furniture",
];

const hover_items = [
  {
    menu_header: "Manufacturers",
    menu_items: [
      {
        menu: "Furniture Manufacturers",
        sub_menus: [
          {
            sub_menu: "Residential Furniture",
            link: "",
          },
          {
            sub_menu: "Commercial Furniture",
            link: "",
          },
          {
            sub_menu: "Out Door Furniture ",
            link: "",
          },
          {
            sub_menu: "Bath Room Furnitures ",
            link: "",
          },
        ],
      },
      {
        menu: "Window and Door manufactures",
        sub_menus: [
          {
            sub_menu: "Solid Wood Doors and Windows",
            link: "",
          },
          {
            sub_menu: "UPVC and PVC Doors and Windows",
            link: "",
          },
          {
            sub_menu: "Steel and MS(Iron) Grills, Doors and Windows",
            link: "",
          },
          {
            sub_menu: "Aluminium Door and Window",
            link: "",
          },
          {
            sub_menu: "Toughned and Design Glass manufactures",
            link: "",
          },
        ],
      },
      {
        menu: "Decore",
        sub_menus: [
          {
            sub_menu: "Curtains and Blinds makers and Fabricator",
            link: "",
          },
          {
            sub_menu: "Mosquito Net Manufactures and Fabrication",
            link: "",
          },
          {
            sub_menu: "Handicraft Makers ",
            link: "",
          },
          {
            sub_menu: "Stone and Wood Art Work manufactures",
            link: "",
          },
          {
            sub_menu: "Design Glass manufactures",
            link: "",
          },
        ],
      },
      {
        menu: "Steel,Iron and Cast Iron",
        sub_menus: [
          {
            sub_menu: "Grill and Gates ",
            link: "",
          },
        ],
      },
      {
        menu: "Floor, Wall and ceiling ",
        sub_menus: [
          {
            sub_menu: "Wooden Flooring and Wall panneling ",
            link: "",
          },
          {
            sub_menu: "Epoxy Flooring and Wall panneling ",
            link: "",
          },
          {
            sub_menu: "Accoustic Wall pannel and ceiling Pannel",
            link: "",
          },
          {
            sub_menu: "Pavement Block manufactures",
            link: "",
          },
        ],
      },
      {
        menu: "Ancillary (OEM Input) Material Manufactures ",
        sub_menus: [
          {
            sub_menu: "Ply Wood Manufactures",
            link: "",
          },
          {
            sub_menu: "Lamiante Manuafactures ",
            link: "",
          },
          {
            sub_menu: "Adhisive Manufactures ",
            link: "",
          },
          {
            sub_menu: "Hardware manuafactures ",
            link: "",
          },
          {
            sub_menu: "Tools Manufactures",
            link: "",
          },
          {
            sub_menu: "Consumables manufactures ",
            link: "",
          },
          {
            sub_menu: "Rubber Wood Figure Joint Board Manufactures",
            link: "",
          },
        ],
      },
      {
        menu: "Raw Materail Suppliery",
        sub_menus: [
          {
            sub_menu: "Saw Mills  Wooden Planks and Slabs ",
            link: "",
          },
          {
            sub_menu: "Brick Manufactures",
            link: "",
          },
          {
            sub_menu: "Concrete Ready Mix Units",
            link: "",
          },
          {
            sub_menu: "Design Glass manufactures",
            link: "",
          },
        ],
      },
      {
        menu: "Startionery and Marketting Material ",
        sub_menus: [
          {
            sub_menu: "Banner and Visiting Card Printers",
            link: "",
          },
          {
            sub_menu: "Papper Suppliers ",
            link: "",
          },
          {
            sub_menu: "Pen and pencil",
            link: "",
          },
          {
            sub_menu: "Gift and Trophy Manufatures ",
            link: "",
          },
        ],
      },
      {
        menu: "Roofing and Fencing",
        sub_menus: [
          {
            sub_menu: "Fence manufactures",
            link: "",
          },
          {
            sub_menu: "Roofing Sheet manufactures ",
            link: "",
          },
          {
            sub_menu: "MS and Aluminium Section Suppliers ",
            link: "",
          },
          {
            sub_menu: "Scuffolding Manufactures and Suppliers ",
            link: "",
          },
        ],
      },
      {
        menu: "Machinerys ",
        sub_menus: [
          {
            sub_menu: "Wood Working Machine Manufactures ",
            link: "",
          },
          {
            sub_menu: "Printing Machine Manufactures ",
            link: "",
          },
          {
            sub_menu: "UPVC Fabrication Machines ",
            link: "",
          },
          {
            sub_menu: "Construction Equipment Manufactures ",
            link: "",
          },
        ],
      },
      {
        menu: "Safety and Maintance",
        sub_menus: [
          {
            sub_menu: "Cameras and CCTV Manuafacturers",
            link: "",
          },
          {
            sub_menu: "Access Control System ",
            link: "",
          },
          {
            sub_menu: "Cleaning Chemical Manufactures",
            link: "",
          },
          {
            sub_menu: "Lubricants Manufactures ",
            link: "",
          },
          {
            sub_menu: "Fire Safety Equipment Manufactures ",
            link: "",
          },
          {
            sub_menu: "Pest Control chemicals ",
            link: "",
          },
          {
            sub_menu: "Deep Cleaninng ",
            link: "",
          },
          {
            sub_menu: "Home Automation",
            link: "",
          },
        ],
      },
      {
        menu: "Packaging materail manufactures ",
        sub_menus: [
          {
            sub_menu: "Corrugated paper and Fiber Board ",
            link: "",
          },
          {
            sub_menu: "Plastic Warp ",
            link: "",
          },
          {
            sub_menu: "Bubble Warp",
            link: "",
          },
        ],
      },
    ],
  },
  {
    menu_header: "Service Providers",
    menu_items: [
      {
        menu: "Architects",
        sub_menus: [
          {
            sub_menu: "Exterior",
            link: "",
          },
          {
            sub_menu: "Interior",
            link: "",
          },
          {
            sub_menu: "Landscaping",
            link: "",
          },
        ],
      },
      {
        menu: "Designers",
        sub_menus: [
          {
            sub_menu: "Interior Designers ",
            link: "",
          },
          {
            sub_menu: "Interior Decorators ",
            link: "",
          },
          {
            sub_menu: "Exterior Designers ",
            link: "",
          },
          {
            sub_menu: "Landscaping designers",
            link: "",
          },
        ],
      },
      {
        menu: "Engineering ",
        sub_menus: [
          {
            sub_menu: "Structural Engineers ",
            link: "",
          },
          {
            sub_menu: "Soil testing",
            link: "",
          },
          {
            sub_menu: "Construction Consultants",
            link: "",
          },
          {
            sub_menu: "Bowering Companies ",
            link: "",
          },
          {
            sub_menu: "Electrical and Plumbing Engineers",
            link: "",
          },
        ],
      },
      {
        menu: "Safety and maintenance ",
        sub_menus: [
          {
            sub_menu: "Fire Extingusher Refilling and maintance ",
            link: "",
          },
          {
            sub_menu: "CCTV and networking Services ",
            link: "",
          },
          {
            sub_menu: "Pest Control Service ",
            link: "",
          },
          {
            sub_menu: "Electrical Services ",
            link: "",
          },
          {
            sub_menu: "Plumbing Service Provider",
            link: "",
          },
          {
            sub_menu: "Painting Services",
            link: "",
          },
        ],
      },
    ],
  },
];

class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: hover_items[0].menu_items[0],
    };
  }

  changeSelectedContent = (i, j) => {
    let s_content = hover_items[i].menu_items[j];
    this.setState({
      selectedContent: s_content,
    });
  };

  render() {
    let menu = hover_items.map((h_item, h_index) => {
      let m_list = h_item.menu_items.map((menu_item, menu_index) => {
        // console.log("menu item", menu_item);
        return (
          <div
            onMouseEnter={() => {
              this.changeSelectedContent(h_index, menu_index);
            }}
            className={
              this.state.selectedContent.menu === menu_item.menu
                ? "sub-menu-selected sub-menu-item"
                : "sub-menu-item"
            }
            key={menu_index}
          >
            {menu_item.menu}
          </div>
        );
      });
      return (
        <div key={h_index} className="h-menu">
          <div className="menu-header">{h_item.menu_header}</div>
          <div className="sub-menu">{m_list}</div>
        </div>
      );
    });

    return (
      <>
        <div className="category-bar mb-hidden">
          <div className="navbar-pad" />
          <div className="cgt-container">
            <div key={""} className="ctg-txt-container ctg-menu rel">
              <span className="clickable cgt-txt">{"Category"}</span>
              <div className="hovermenu">
                <div className="hovermenu_container">{menu}</div>

                <div className="submenu-content">
                  <div className="h-menu">
                    <div className="menu-header">
                      {this.state.selectedContent.menu}
                    </div>
                    <div className="sub-menu">
                      {this.state.selectedContent.sub_menus.map(
                        (menu_item, menu_index) => {
                          //   console.log("menu item", menu_item);
                          return (
                            <div className="sub-menu-item" key={menu_index}>
                              {menu_item.sub_menu}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {ctg1.map((ctg, ctg_key) => {
              return (
                <div key={ctg_key} className="ctg-txt-container">
                  <span className="clickable cgt-txt">{ctg}</span>
                </div>
              );
            })}
          </div>
          <div className="navbar-pad" />
        </div>
        <div className="category-bar btbr mb-hidden">
          <div className="navbar-pad" />
          <div className="cgt-container">
            {ctg2.map((ctg, ctg_key) => {
              return (
                <div key={ctg_key} className="ctg-txt-container">
                  <span className="clickable cgt-txt">{ctg}</span>
                </div>
              );
            })}
          </div>
          <div className="navbar-pad" />
        </div>
      </>
    );
  }
}

export default CategoryBar;
