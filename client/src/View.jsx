import React, { Component } from "react";
import { Link } from "react-router-dom";
import Model from "react-awesome-modal";
import axios from "axios";
import Select from "react-select";
import web from "./imges/right.jpg";
import "./style.css";
import cross from "../src/imges/cross.jpg";
import right from "../src/imges/right.jpg";
import Button from "@material-ui/core/Button";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import DoneIcon from "@material-ui/icons/Done";
export default class View extends Component {
  state = {
    name: [],
    newname: [],
    flag: true,
    visible: false,
    close: true,
  };
  cityoption = [
    { value: "surat", label: "Surat" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "nagpur" },
    { value: "kanpur", label: "kanpur" },
    { value: "lucknow", label: "lucknow" },
    { value: "Delhi", label: "Delhi" },
  ];
  stateoption = [
    { value: "Gujarat", label: "Gujarat" },
    { value: "Maharatra", label: "Maharatra" },
    { value: "UP", label: "UP" },
  ];
  aboutoption = [
    { value: "internet", label: "Internet" },
    { value: "newspaper", label: "Newspaper" },
  ];
  openModel = () => {
    this.setState({ visible: true });
  };
  closeModel = () => {
    this.setState({ visible: false });
    this.setState({ close: true });
  };
  componentWillMount() {
    this.loadmore();
  }
  loadmore = () => {
    axios.get("http://localhost:3050/form").then((response) => {
      this.setState({ name: response.data });
    });
  };
  deleteitem = (e) => {};
  ondeleteRequest = (e) => {
    this.setState({ close: false });
    // setInterval(this.deleteitem(e), 2000);
    const id = e.target.id;

    axios
      .delete(`http://localhost:3050/form//${id}`)
      .then((res) => {
        console.log("Deleted successfully........", res);
        this.loadmore(res);
      })

      .catch(function (error) {
        console.log(error);
      });
    // this.closeModel();
  };

  handleEdit = (e) => {
    e.preventDefault();
    const id = this.state.newname._id;
    console.log(id);
    const Form = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      gender: this.state.gender,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.stata,
      pincode: this.state.pincode,
      mobile: this.state.mobile,
      about: this.state.about,
      feedback: this.state.feedback,
      suggestion: this.state.suggestion,
    };
    // console.log(this.state.gender);
    axios
      .put(`http://localhost:3050/form/${id}`, Form)
      .then((res) => {
        this.props.history.push("/");
        this.loadmore();
        this.flagtoggleon();

        // this.setState({ flag: "1" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  flagtoggleoff = () => {
    this.setState({ flag: false });
  };
  flagtoggleon = () => {
    this.setState({ flag: true });
  };

  submitEditRequest = (e) => {
    const id = e.target.id;
    console.log(`${id}`);

    axios
      .get(`http://localhost:3050/form/${id}`)
      .then((res) => {
        console.log("asa", res.data.fname);

        this.setState({
          // cricket:
          newname: res.data,
          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          gender: res.data.gender,
          hobbies: res.data.hobbies,
          address1: res.data.address1,
          address2: res.data.address2,
          city: res.data.city,
          stata: res.data.states,
          pincode: res.data.pincode,
          mobile: res.data.mobile,
          about: res.data.about,
          feedback: res.data.feedback,
          suggestion: res.data.suggestion,
        });
        this.flagtoggleoff();
        console.log("61", this.state.hobbies);
        console.log("61", this.state.city);
        console.log("61", this.state.gender);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  closetoggle = () => {
    this.setState({ flag: true });
  };

  render() {
    // console.log("67", this.state.newname);
    // console.log(this.state.name.state);
    console.log(this.state.hobbies);
    return (
      <div>
        {this.state.flag ? (
          <div id="login">
            <div className="container">
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
                <div id="login-column">
                  <div id="login-box">
                    <center>
                      <div className="btn">
                        <Link to="/sign">
                          <button className="btn btn-primary" type="submit">
                            Create{" "}
                            <i
                              className="fa fa-database"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </Link>
                      </div>
                    </center>
                    <table className="table table-hover table-responsive">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Images</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Hobbies</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Pincode</th>
                          <th>Mobile</th>
                          <th>About</th>
                          <th>Feedback</th>
                          <th>Suggestions</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      {this.state.name.map((item, i) => {
                        return (
                          <tbody>
                            <tr>
                              <td>{item._id}</td>
                              {/* <td>{item.dp}</td> */}
                              <td>
                                <img
                                  height="70px"
                                  width="70px"
                                  src={`./imges/${item.dp}`}
                                  alt="Test"
                                />
                              </td>
                              <td>{item.fname}</td>
                              <td>{item.lname}</td>
                              <td>{item.email}</td>
                              <td>{item.gender}</td>
                              <td>{item.hobbies}</td>
                              <td>
                                {item.address1},{item.address2}
                              </td>
                              <td>{item.city.value}</td>
                              <td>{item.states.value}</td>
                              <td>{item.pincode}</td>
                              <td>{item.mobile}</td>
                              <td>{item.about.value}</td>
                              <td>{item.feedback}</td>
                              <td>{item.suggestion}</td>
                              <td>
                                <Link to="/">
                                  <button
                                    type="button"
                                    color="primary"
                                    class="btn btn-primary"
                                    id={item._id}
                                    onClick={this.submitEditRequest}
                                  >
                                    Edit
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  style={{ background: "red" }}
                                  color="primary"
                                  class="btn btn-primary"
                                  id={item._id}
                                  onClick={this.openModel}
                                >
                                  Delete
                                </button>

                                <Model
                                  visible={this.state.visible}
                                  width="400"
                                  height="300"
                                  effect="fadeInUp"
                                  onClickAway={this.closeModel}
                                >
                                  <div className="box">
                                    <center>
                                      {this.state.close ? (
                                        <img
                                          src={cross}
                                          alt=""
                                          height="10%"
                                          width="30%"
                                        />
                                      ) : (
                                        <img
                                          src={right}
                                          alt=""
                                          height="10%"
                                          width="30%"
                                        />
                                      )}
                                      {this.state.close ? (
                                        <p
                                          style={{
                                            fontSize: "150%",
                                            color: "red",
                                          }}
                                        >
                                          Are Your sure ?
                                        </p>
                                      ) : (
                                        <p
                                          style={{
                                            fontSize: "150%",
                                            color: "green",
                                          }}
                                        >
                                          Delete successfully.....
                                        </p>
                                      )}
                                      <button
                                        type="button"
                                        color="primary"
                                        class="btn btn-primary"
                                        id={item._id}
                                        onClick={this.ondeleteRequest}
                                      >
                                        <i
                                          class="fa fa-trash"
                                          id={item._id}
                                        ></i>
                                      </button>{" "}
                                      <button
                                        type="button"
                                        color="primary"
                                        class="btn btn-primary"
                                        id={item._id}
                                        onClick={this.closeModel}
                                      >
                                        <i
                                          class="fa fa-window-close"
                                          id={item._id}
                                        ></i>
                                      </button>
                                    </center>
                                  </div>
                                </Model>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="login">
            <div className="container">
              <div
                id="login-row"
                className="row justify-content-center align-items-center"
              >
                <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12">
                    <form
                      id="login-form"
                      className="form"
                      autoCapitalize="off"
                      name="formdata"
                    >
                      <h3 className="text-center text-info">Edit Data</h3>
                      <div className="form-group">
                        <label className="text-info">Firstname:</label>
                        <br />
                        <input
                          type="text"
                          name="fname"
                          value={this.state.fname}
                          placeholder="Firstname"
                          id="fname"
                          className="form-control"
                          autoFocus
                          onChange={(e) => {
                            this.setState({ fname: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="lname" className="text-info">
                          Lastname:
                        </label>
                        <br />
                        <input
                          type="text"
                          name="lname"
                          value={this.state.lname}
                          placeholder="Lastname"
                          id="lname"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({ lname: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Email:
                        </label>
                        <br />
                        <input
                          type="text"
                          name="email"
                          value={this.state.email}
                          placeholder="@gmail.com"
                          id="email"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Gender:
                        </label>
                        <br />

                        <div
                          name="gender"
                          onChange={(e) => {
                            this.setState({ gender: e.target.value });
                          }}
                        >
                          <input
                            type="radio"
                            value="Male"
                            name="gender"
                            checked={this.state.gender == "Male" ? true : false}
                          />{" "}
                          Male{" "}
                          <input
                            type="radio"
                            value="Female"
                            name="gender"
                            checked={
                              this.state.gender == "Female" ? true : false
                            }
                          />{" "}
                          Female{" "}
                          <input
                            type="radio"
                            value="Other"
                            name="gender"
                            checked={
                              this.state.gender == "Other" ? true : false
                            }
                          />{" "}
                          Other{" "}
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Hobbies:
                        </label>
                        <br />

                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultchecked={this.state.hobbies.map(
                                (item, i) => {
                                  return item == "cricket" ? true : false;
                                }
                              )}
                            />

                            <h5>Cricket</h5>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              defaultchecked={this.state.hobbies.map(
                                (item, i) => {
                                  return <>{item == "movies" ? true : false}</>;
                                }
                              )}
                              className="form-check-input"
                            />
                            Watching Movies
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              defaultchecked={this.state.hobbies.map(
                                (item, i) => {
                                  return (
                                    <>{item == "reading" ? true : false}</>
                                  );
                                }
                              )}
                              className="form-check-input"
                            />
                            Reading Book
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Address:-
                        </label>
                        <br />
                        <input
                          type="text"
                          name="address1"
                          value={this.state.address1}
                          placeholder="Street Address"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({ address1: e.target.value });
                          }}
                        />
                        <p></p>
                        <input
                          type="text"
                          name="address2"
                          value={this.state.address2}
                          placeholder="Street Adress line2"
                          className="form-control"
                          onChange={(e) => {
                            this.setState({ address2: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-info">City:</label>
                        <Select
                          value={this.state.city}
                          options={this.cityoption}
                          onChange={(citys) => {
                            this.setState({ city: citys });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-info">State:</label>
                        <Select
                          value={this.state.stata}
                          options={this.stateoption}
                          onChange={(stat) => {
                            this.setState({ stata: stat });
                          }}
                        />

                        <br />
                        <label className="text-info">Pincode:</label>
                        <input
                          type="text"
                          id="fname"
                          name="pincode"
                          value={this.state.pincode}
                          className="form-control"
                          placeholder="postal/Zip Code"
                          onChange={(e) => {
                            this.setState({ pincode: e.target.value });
                          }}
                        />
                        <p></p>
                        <label className="text-info">Mobiel number:</label>
                        <input
                          type="text"
                          id="fname"
                          name="mobile"
                          className="form-control"
                          value={this.state.mobile}
                          placeholder="(000) 000-000"
                          onChange={(e) => {
                            this.setState({ mobile: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          How did you hear about us?
                        </label>
                        <br />
                      </div>
                      <div className="form-group">
                        <Select
                          value={this.state.about}
                          options={this.aboutoption}
                          onChange={(abouts) => {
                            this.setState({ about: abouts });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Feedback about us
                        </label>
                        <br />
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="feedback"
                          value={this.state.feedback}
                          onChange={(e) => {
                            this.setState({ feedback: e.target.value });
                          }}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="email" className="text-info">
                          Suggestions if any for further improvement:
                        </label>
                        <br />
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="suggestion"
                          value={this.state.suggestion}
                          onChange={(e) => {
                            this.setState({ suggestion: e.target.value });
                          }}
                        ></textarea>
                      </div>
                      <div className="submit">
                        <center>
                          <button
                            className="btn btn-success"
                            onClick={this.handleEdit}
                          >
                            Update
                          </button>{" "}
                          <Link to="/">
                            <button
                              className="btn btn-secondary"
                              onClick={this.closetoggle}
                            >
                              Close
                            </button>
                          </Link>
                        </center>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
