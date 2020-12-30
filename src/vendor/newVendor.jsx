import React, { Component } from "react";
import axios from "axios";
import "./vendor.css";

const states = [
  "Andhra Pradesh",
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Telungana",
];
const districts = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
  "District 6",
  "District 7",
  "District 8",
  "District 9",
  "District 10",
];

class NewVendor extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      state: "Select State",
      district: "Select District",
      name: "",
      contact: "",
      mobile: "",
      address: "",
      pincode: "",
      industryType: "",
      factoryType: "",
      factorySize: "",
      showroom: "",
      showroomSize: "",
      employeeCount: "",
    };
  }

  componentDidMount() {
    this.onBack();
  }

  handleMenuClicked = (e) => {
    let menus = document.getElementsByClassName("dropdown-menu");
    for (let i = 0; i < menus.length; i++) {
      if (menus[i]["previousElementSibling"]["name"] !== e.target.name)
        document.getElementsByClassName("dropdown-menu")[i]["style"][
          "display"
        ] = "none";
    }
    let menu = e.target["nextElementSibling"];
    if (
      menu["style"]["display"] === "" ||
      menu["style"]["display"] === "none"
    ) {
      e.target["nextElementSibling"]["style"]["display"] = "block";
    } else {
      e.target["nextElementSibling"]["style"]["display"] = "none";
    }
  };

  onStateSelect = (e) => {
    let state = e.target["textContent"];
    e.target["parentElement"]["style"]["display"] = "none";
    this.setState({ state });
  };

  onDistrictSelect = (e) => {
    let district = e.target["textContent"];
    e.target["parentElement"]["style"]["display"] = "none";
    this.setState({ district });
  };

  handleChange = ({ target }) => {
    var reg = /^\d+$/;

    const val = target.value;
    if (target["attributes"]["data-value"]["value"] === "number") {
      if (val.match(reg) || val === "") this.setState({ [target.name]: val });
    } else {
      this.setState({ [target.name]: val });
    }
  };

  initializeCardTop() {
    let card = document.getElementById("vendor-card");
    card.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  onNext = () => {
    let card = document.getElementById("vendor-card");
    card.scrollTo({
      behavior: "smooth",
      top: 750,
    });
  };

  onBack = () => {
    let card = document.getElementById("vendor-card");
    card.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  handleFactoryVideo = (e) => {
    const type = "factory";
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState(
        {
          [type]: {
            file: file,
            imagePreviewUrl: reader.result,
          },
        },
        () => {
          this.uploadContent(file, reader.result, type);
        }
      );
    };
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log("reader error");
      console.log(err);
    }
  };

  handleShowroomVideo = (e) => {
    const type = "showroom";
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState(
        {
          [type]: {
            file: file,
            imagePreviewUrl: reader.result,
          },
        },
        () => {
          this.uploadContent(file, reader.result, type);
        }
      );
    };
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      console.log("reader error");
      console.log(err);
    }
  };

  uploadContent = (f, i, type) => {
    this.setState({
      [type]: {
        loading: true,
        progress: 0,
      },
    });

    const fd = new FormData();
    fd.append("image", f, f.name);
    axios
      .post("https://backend.gou/image-upload", fd, {
        onUploadProgress: (pEvent) => {
          let progress = Math.round((pEvent.loaded / pEvent.total) * 100);
          this.setState({
            progress: progress - 1,
          });
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          [type]: {
            file: f,
            imagePreviewUrl: res.data.imageUrl,
            content: res.data.imageUrl,
            loading: false,
          },
        });
      });
  };

  handleSubmit = () => {};

  render() {
    const { state, district } = this.state;
    return (
      <div className="new-vendor-page">
        <div className="container">
          <form>
            <div className="card vendor-card" id="vendor-card">
              <div className="vendor-details" id="vendor-details">
                <div className="page-title">Vendor Details</div>
                <div className="border" />
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input
                    type="text"
                    data-value="text"
                    name="name"
                    className="form-control"
                    placeholder="Vendor Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    data-value="number"
                    name="contact"
                    className="form-control"
                    placeholder="Contact Number"
                    value={this.state.contact}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    data-value="number"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile Number"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    data-value="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <div className="btn-group">
                    <button
                      type="button"
                      name="state"
                      className="btn btn-chocolate dropdown-toggle"
                      data-toggle="dropdown-menu"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={(e) => this.handleMenuClicked(e)}
                      value={state}
                    >
                      {state}
                    </button>

                    <ul
                      className="dropdown-menu scrollable-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {states.map((st, i) => {
                        return (
                          <li
                            key={i}
                            className="dropdown-item"
                            onClick={(e) => this.onStateSelect(e)}
                          >
                            {st}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <label>District</label>
                  <div className="btn-group">
                    <button
                      type="button"
                      name="district"
                      className="btn btn-chocolate dropdown-toggle"
                      data-toggle="dropdown-menu"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={(e) => this.handleMenuClicked(e)}
                      value={district}
                    >
                      {district}
                    </button>

                    <ul
                      className="dropdown-menu scrollable-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {districts.map((dt, i) => {
                        return (
                          <li
                            key={i}
                            className="dropdown-item"
                            onClick={(e) => this.onDistrictSelect(e)}
                          >
                            {dt}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    data-value="number"
                    name="pincode"
                    className="form-control"
                    placeholder="Pincode"
                    value={this.state.pincode}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark-chocolate next-page"
                  onClick={this.onNext}
                >
                  Next
                </button>
              </div>
              <div className="factory-details" id="factory-details">
                <div className="page-title">Factory Details</div>
                <div className="border" />
                <div className="form-group">
                  <label>Industry Type</label>
                  <input
                    type="text"
                    data-value="text"
                    name="industryType"
                    className="form-control"
                    placeholder="Industry Type"
                    value={this.state.industryType}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type of Factory</label>
                  <input
                    type="text"
                    data-value="text"
                    name="factoryType"
                    className="form-control"
                    placeholder="Factory Type"
                    value={this.state.factoryType}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Size / Area of Factory</label>
                  <input
                    type="text"
                    data-value="number"
                    name="factorySize"
                    className="form-control"
                    placeholder="Size / Area of Factory"
                    value={this.state.factorySize}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>No of Show Rooms</label>
                  <input
                    type="text"
                    data-value="number"
                    name="showroom"
                    className="form-control"
                    placeholder="No of Show Rooms"
                    value={this.state.showroom}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Size / Area of Show Rooms</label>
                  <input
                    type="text"
                    data-value="number"
                    name="showroomSize"
                    className="form-control"
                    placeholder="Size / Area of Show Rooms"
                    value={this.state.showroomSize}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Video of Factory</label>
                  <div className="btn-group">
                    <label class="file">
                      <input
                        type="file"
                        id="file"
                        aria-label="File browser example"
                        accept="video/*"
                        onChange={this.handleFactoryVideo}
                      />
                      <span class="file-custom"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Video of Show Room</label>
                  <div className="btn-group">
                    <label class="file">
                      <input
                        type="file"
                        id="file"
                        aria-label="File browser example"
                        accept="video/*"
                        onChange={this.handleShowroomVideo}
                      />
                      <span class="file-custom"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>No of Employees</label>
                  <input
                    type="text"
                    data-value="number"
                    name="employeeCount"
                    className="form-control"
                    placeholder="No of Employee"
                    value={this.state.employeeCount}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark-chocolate back-page"
                  onClick={this.onBack}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-dark-chocolate submit-page"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewVendor;
