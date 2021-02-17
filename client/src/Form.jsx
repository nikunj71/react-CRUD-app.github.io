// import React, { useState, Component, useEffect } from "react";
// import "./style.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const Form2 = (props) => {
//   // const [show, setshow] = useState([]);
//   const [name, setname] = useState([]);
//   const loadmore = () => {
//     axios.get("http://localhost:3050/form").then((response) => {
//       setname({ name: response.data });
//     });
//   };

//   const ondeleteRequest = (e) => {
//     const id = e.target.id;
//     axios
//       .delete(`http://localhost:3050/form//${id}`)
//       .then((res) => {
//         console.log("Deleted successfully........", res);
//         this.loadmore(res);
//       })

//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   useEffect(loadmore(), []);

//   // const [flag, setFlag] = useState("1");
//   const InputEvent = (e) => {
//     const { name, value } = e.target;
//     setname((pre) => {
//       return { ...pre, [name]: value };
//     });
//   };
//   // console.log("fname",name.fname)
//   const signformdata = {
//     fname: name.fname,
//     lname: name.lname,
//     email: name.email,
//   };
//   console.log("data", signformdata);

//   const onsubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3050/form", signformdata).then(
//       (response) => {
//         console.log(response);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//     // props.history.push("/view");
//     setname({ fname: "", lname: "", email: "" });
//   };

//   return (
//     <>
//       <div id="login">
//         <div className="container">
//           <div
//             id="login-row"
//             className="row justify-content-center align-items-center"
//           >
//             <div id="login-column" className="col-md-6">
//               <div id="login-box" className="col-md-12">
//                 <form
//                   id="login-form"
//                   className="form"
//                   autoCapitalize="off"
//                   name="formdata"
//                 >
//                   <h3 className="text-center text-info">Insert Data </h3>
//                   <div className="form-group">
//                     <label for="username" className="text-info">
//                       Firstname:
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       name="fname"
//                       value={name.fname}
//                       placeholder="Firstname"
//                       id="fname"
//                       className="form-control"
//                       onChange={InputEvent}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label for="lname" className="text-info">
//                       Lastname:
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       name="lname"
//                       value={name.lname}
//                       placeholder="Lastname"
//                       id="lname"
//                       className="form-control"
//                       onChange={InputEvent}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label for="email" className="text-info">
//                       Email:
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       name="email"
//                       value={name.email}
//                       placeholder="@gmail.com"
//                       id="email"
//                       className="form-control"
//                       onChange={InputEvent}
//                     />
//                   </div>
//                   <div className="submit">
//                     <center>
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={onsubmit}
//                       >
//                         Add
//                       </button>{" "}
//                     </center>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="login">
//         <div className="container">
//           <div
//             id="login-row"
//             className="row justify-content-center align-items-center"
//           >
//             <div id="login-column" className="col-md-6">
//               <div id="login-box" className="col-md-12">
//                 <div className="btn">
//                   <Link to="/">
//                     <button className="btn btn-primary" type="submit">
//                       Create{" "}
//                       <i className="fa fa-database" aria-hidden="true"></i>
//                     </button>
//                   </Link>
//                 </div>
//                 <table className="table table-hover table-responsive">
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>First Name</th>
//                       <th>Last Name</th>
//                       <th>Email</th>
//                       <th>Edit</th>
//                       <th>Delete</th>
//                     </tr>
//                   </thead>
//                   {name.map((item, i) => {
//                     return (
//                       <tbody>
//                         <tr>
//                           <td>{item._id}</td>
//                           <td>{item.fname}</td>
//                           <td>{item.lname}</td>
//                           <td>{item.email}</td>
//                           <td>
//                             <Link to="/edit">
//                               <button
//                                 type="button"
//                                 data-toggle="modal"
//                                 data-target="#edit"
//                                 data-uid="1"
//                                 id={item._id}
//                                 // onClick={this.submitEditRequest}
//                                 className="update btn btn-warning btn-sm"
//                               >
//                                 <span className="glyphicon glyphicon-pencil"></span>
//                               </button>
//                             </Link>
//                           </td>
//                           <td>
//                             <button
//                               type="button"
//                               data-toggle="modal"
//                               data-target="#delete"
//                               data-uid="1"
//                               className="delete btn btn-danger btn-sm"
//                               id={item._id}
//                               // onClick={this.ondeleteRequest}
//                             >
//                               <span className="glyphicon glyphicon-trash"></span>
//                             </button>
//                           </td>
//                         </tr>
//                       </tbody>
//                     );
//                   })}
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Form2;

// class View extends Component {
//   state = { name: [], newname: [] };
//   componentWillMount() {
//     this.loadmore();
//   }

//   // editRequest = (data) => {
//   //   const form = document.forms.formdata;
//   //   form.fname.value = data.fname;
//   //   form.lname.value = data.lname;
//   //   form.email.value = data.email;
//   //   // setFlag({ flag: data._id });
//   // };
//   // handleEdit = (e) => {
//   //   e.preventDefault();
//   //   const form = document.forms.formdata;
//   //   const Form = {
//   //     fname: form.fname.value,
//   //     lname: form.lname.value,
//   //     email: form.email.value,
//   //   };
//   //   axios
//   //     .put("http://localhost:3050/form" + flag, Form)
//   //     .then((res) => {
//   //       loadData();
//   //       this.setState({ flag: "1" });
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };
//   submitEditRequest = (e) => {
//     const id = e.target.id;
//     console.log(`${id}`);
//     axios
//       .get(`http://localhost:3050/form/${id}`)
//       .then((res) => {
//         this.setState({ newname: res.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     console.log("61", this.state.newname);
//   };

//   render() {
//     // console.log("67", this.state.newname);
//     console.log(this.state.newname.fname);

//     return (
//       <div>
//         {/* <Edit
//           fname={this.state.newname.fname}
//           lname={this.state.newname.lname}
//           email={this.state.newname.email}
//         /> */}

//         <div id="delete" className="modal fade" role="dialog">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                 ></button>
//                 <h4 className="modal-title">Delete Data</h4>
//               </div>
//               <div className="modal-body">
//                 <strong>Deleted successfully.........</strong>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   id="del"
//                   className="btn btn-danger"
//                   data-dismiss="modal"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // https://www.voot.com/shows/bigg-boss/14/978245/salman-ka-gussa/1083509
// // https://www.voot.com/shows/bigg-boss/14/978245/salman-lambasts-rubina/1083724
