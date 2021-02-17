import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Select from "react-select";
import { Link, Redirect } from "react-router-dom";
const Form2 = () => {
  const [name, setname] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    address1: "",
    address2: "",
    pincode: "",
    mobile: "",
    feedback: "",
    suggestion: "",
  });
  const [citys, setcity] = useState("surat");
  const [states, setstate] = useState("gujrat");
  const [abouts, setabout] = useState("about");
  const [cricket, setcricket] = useState(false);
  const [movies, setmovies] = useState(false);
  const [reading, setreading] = useState(false);
  const [redirect, setredirect] = useState(false);
  const [fnameerror, setfnameerror] = useState([]);
  const [lnameerror, setlnameerror] = useState([]);
  const [emailerror, setemailerror] = useState([]);
  const [gendererror, setgendererror] = useState([]);
  const [checkboxerror, setcheckboxerror] = useState([]);
  const [addresserror, setaddresserror] = useState([]);
  const [cityerror, setcityerror] = useState([]);
  const [stateerror, setstateerror] = useState([]);
  const [pincodeerror, setpincodeerror] = useState([]);
  const [mobileerror, setmobileerror] = useState([]);
  const [abouterror, setabouterror] = useState([]);
  const [feedbackrror, setfeedbackrror] = useState([]);
  const [suggestionrror, setsuggestionrror] = useState([]);
  const [file, setfile] = useState(null);

  const cityoption = [
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
  const stateoption = [
    { value: "Gujarat", label: "Gujarat" },
    { value: "Maharatra", label: "Maharatra" },
    { value: "UP", label: "UP" },
  ];
  const aboutoption = [
    { value: "internet", label: "Internet" },
    { value: "newspaper", label: "Newspaper" },
  ];
  const handleSelect = (selectedOption) => {
    setcity({ selectedOption });
  };
  console.log(citys.selectedOption && citys.selectedOption.value);
  const handlestate = (selectedOption) => {
    setstate({ selectedOption });
  };
  console.log(states.selectedOption && states.selectedOption.value);
  const handleabout = (selectedOption) => {
    setabout({ selectedOption });
  };
  console.log(abouts.selectedOption && abouts.selectedOption.value);

  const InputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setname((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const cricketcheck = () => {
    setcricket((initialState) => ({
      cricket: !initialState.cricket,
    }));
  };
  const moviescheck = () => {
    setmovies((initialState) => ({
      movies: !initialState.movies,
    }));
  };
  const readingcheck = () => {
    setreading((initialState) => ({
      reading: !initialState.reading,
    }));
  };
  console.log(cricket, movies, reading);

  const formValidation = () => {
    if (name.fname == "") {
      setfnameerror(["Enter Firstname"]);
    } else {
      setfnameerror([" "]);
    }

    if (name.lname == "") {
      setlnameerror(["Enter Lastname"]);
    } else {
      setlnameerror([" "]);
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        name.email
      )
    ) {
      setemailerror(["Enter valid email id"]);
    } else {
      setemailerror([" "]);
    }
    if (name.gender == "") {
      setgendererror(["please select"]);
    } else {
      setgendererror([" "]);
    }

    if (name.address1 == "") {
      setaddresserror(["Enter address"]);
    } else {
      setaddresserror([" "]);
    }

    if (!citys.selectedOption) {
      setcityerror(["select one city"]);
    } else {
      setcityerror([""]);
    }
    if (!states.selectedOption) {
      setstateerror(["select one state"]);
    } else {
      setstateerror([""]);
    }
    if (!/^(\d{4}|^\d{6})$/.test(name.pincode)) {
      setpincodeerror(["Enter valid pincode"]);
    } else {
      setpincodeerror([""]);
    }
    if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(name.mobile)
    ) {
      setmobileerror(["Enter valid mobile number"]);
    } else {
      setmobileerror([""]);
    }
    if (!abouts.selectedOption) {
      setabouterror(["select one"]);
    } else {
      setabouterror([""]);
    }
    if (name.feedback == "") {
      setfeedbackrror(["Give your feedback"]);
    } else {
      setfeedbackrror([""]);
    }
    if (name.suggestion == "") {
      setsuggestionrror(["Give your suggestion"]);
    } else {
      setsuggestionrror([""]);
    }
  };

  const onsubmit = (e) => {
    console.log(name);
    e.preventDefault();

    let checkArray = [];
    var i = "";
    for (i in cricket) {
      if (cricket[i] === true) {
        checkArray.push(i);
      }
    }
    for (i in movies) {
      if (movies[i] === true) {
        checkArray.push(i);
      }
    }
    for (i in reading) {
      if (reading[i] === true) {
        checkArray.push(i);
      }
    }

    const signformdata = {
      dp: file,
      fname: name.fname,
      lname: name.lname,
      email: name.email,
      gender: name.gender,
      hobbies: checkArray,
      address1: name.address1,
      address2: name.address2,
      city: citys.selectedOption,
      states: states.selectedOption,
      pincode: name.pincode,
      mobile: name.mobile,
      about: abouts.selectedOption,
      feedback: name.feedback,
      suggestion: name.suggestion,
    };
    console.log(checkArray.toString());
    formValidation(e);

    if (
      !name.fname == "" &&
      !name.lname == "" &&
      !name.email == "" &&
      !name.gender == "" &&
      !name.address1 == "" &&
      !name.address2 == "" &&
      !citys.selectedOption == "" &&
      !states.selectedOption == "" &&
      !name.pincode == "" &&
      !name.mobile == "" &&
      !abouts.selectedOption == "" &&
      !name.feedback == "" &&
      !name.suggestion == ""
    ) {
      axios.post("http://localhost:3050/form", signformdata).then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            setredirect({ redirect: true });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(signformdata);
  };
  const uploadfile = async (e) => {
    const files = e.target.files;
    setfile(files[0].name);

    const data = new FormData();
    data.append("file", files[0]);
    // data.append("upload_preset", "darwin");
    axios.post("http://localhost:3050/form/img", data).then(
      (response) => {
        console.log(response);
        if (response.status === 200) {
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  console.log(file && file);

  return (
    <>
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
                  <h3 className="text-center text-info">Insert Data </h3>
                  <div className="form-group">
                    <label for="formFileDisabled" class="form-label">
                      Insert photo
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      name="file"
                      id="formFileDisabled"
                      onChange={uploadfile}
                    />
                  </div>

                  <div className="form-group">
                    <label for="username" className="text-info">
                      Firstname:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="fname"
                      value={name.fname}
                      placeholder="Firstname"
                      className="form-control"
                      autoFocus
                      onChange={InputEvent}
                    />

                    <p>{fnameerror}</p>
                  </div>
                  <div className="form-group">
                    <label for="lname" className="text-info">
                      Lastname:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lname"
                      value={name.lname}
                      placeholder="Lastname"
                      id="lname"
                      className="form-control"
                      onChange={InputEvent}
                    />
                    {/* {Object.keys(lnameerror).map((val) => {
                      return (
                        <div style={{ color: "red" }}>{lnameerror[val]}</div>
                      );
                    })} */}
                    <p>{lnameerror}</p>
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={name.email}
                      placeholder="@gmail.com"
                      id="email"
                      className="form-control"
                      onChange={InputEvent}
                    />
                    {/* {Object.keys(emailerror).map((val) => {
                      return (
                        <div style={{ color: "red" }}>{emailerror[val]}</div>
                      );
                    })} */}
                    <p>{emailerror}</p>
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      Gender:
                    </label>
                    <br />

                    <div name="gender" onChange={InputEvent}>
                      <input type="radio" value="Male" name="gender" /> Male{" "}
                      <input type="radio" value="Female" name="gender" /> Female{" "}
                      <input type="radio" value="Other" name="gender" /> Other{" "}
                    </div>
                    <p>{gendererror}</p>
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
                          // checked={cricket}
                          onChange={cricketcheck}
                          className="form-check-input"
                        />
                        <h5>Cricket</h5>
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          // checked={movies}
                          onChange={moviescheck}
                          className="form-check-input"
                        />
                        Watching Movies
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          // checked={reading}
                          onChange={readingcheck}
                          className="form-check-input"
                        />
                        Reading Book
                      </label>
                    </div>
                    <p>{checkboxerror}</p>
                  </div>

                  <div className="form-group">
                    <label for="email" className="text-info">
                      Address:-
                    </label>
                    <br />
                    <input
                      type="text"
                      name="address1"
                      value={name.address1}
                      placeholder="Street Address"
                      className="form-control"
                      onChange={InputEvent}
                    />
                    <p></p>
                    <input
                      type="text"
                      name="address2"
                      value={name.address2}
                      placeholder="Street Adress line2"
                      className="form-control"
                      onChange={InputEvent}
                    />
                    <p>{addresserror}</p>
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      City:-
                    </label>
                    <Select
                      value={citys.selectedOption}
                      options={cityoption}
                      onChange={handleSelect}
                    />
                    <p>{cityerror}</p>
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      State:-
                    </label>
                    <Select
                      value={states.selectedOption}
                      options={stateoption}
                      onChange={handlestate}
                    />
                    <p>{stateerror}</p>
                    <br />
                    <label for="email" className="text-info">
                      Pincode:-
                    </label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="pincode"
                      value={abouts.pincode}
                      className="form-control"
                      placeholder="postal/Zip Code"
                      onChange={InputEvent}
                    />
                    <p>{pincodeerror}</p>
                    <label for="email" className="text-info">
                      Mobile:-
                    </label>

                    <input
                      type="text"
                      id="fname"
                      name="mobile"
                      className="form-control"
                      placeholder="(000) 000-000"
                      onChange={InputEvent}
                    />
                    <p>{mobileerror}</p>
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      How did you hear about us?
                    </label>
                    <br />
                  </div>
                  <div className="form-group">
                    <Select
                      value={abouts.selectedOption}
                      options={aboutoption}
                      onChange={handleabout}
                    />
                    <p>{abouterror}</p>
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
                      value={name.feedback}
                      onChange={InputEvent}
                    ></textarea>
                    <p>{feedbackrror}</p>
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
                      onChange={InputEvent}
                    ></textarea>
                    <p>{suggestionrror}</p>
                  </div>

                  <div className="submit">
                    <center>
                      {!redirect ? (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={onsubmit}
                        >
                          Add
                        </button>
                      ) : (
                        <Redirect to="/" />
                      )}{" "}
                      <Link to="/">
                        <button className="btn btn-secondary">Close</button>
                      </Link>
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form2;
