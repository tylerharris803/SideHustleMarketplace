function AddEmployee() {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="breadcrumb breadcrumb-style ">
                <li className="breadcrumb-item">
                  <h4 className="page-title">Employees</h4>
                </li>
                <li className="breadcrumb-item bcrumb-1">
                  <a href="../../index.html">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li className="breadcrumb-item bcrumb-2">
                  <a href="#" onclick="return false;">
                    Employees
                  </a>
                </li>
                <li className="breadcrumb-item active">Add Employee</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="header">
                <h2>
                  <strong>Add</strong> Employee
                </h2>
                <ul className="header-dropdown m-r--5">
                  <li className="dropdown">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <ul className="dropdown-menu float-end">
                      <li>
                        <a href="javascript:void(0);">Action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Another action</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          id="email"
                          type="email"
                          className="validate form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Joining Date"
                        name="date1"
                        id="date1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Designation"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-float">
                      <div className="form-line">
                        <select className="col-12 m-t-20 p-l-0">
                          <option disabled="" selected="">
                            Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Birth Date"
                        name="date2"
                        id="date2"
                      />
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="form-line">
                        <textarea
                          rows={4}
                          className="form-control no-resize"
                          placeholder="Address"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label col-md-3">
                      Upload Your Profile Photo
                    </label>
                    <form
                      action="/"
                      id="frmFileUpload"
                      className="dropzone"
                      method="post"
                      encType="multipart/form-data"
                    >
                      <div className="dz-message">
                        <div className="drag-icon-cph">
                          <i className="material-icons">touch_app</i>
                        </div>
                        <h3>Drop files here or click to upload.</h3>
                        <em>
                          (This is just a demo dropzone. Selected files are
                          <strong>not</strong>
                          actually uploaded.)
                        </em>
                      </div>
                      <div className="fallback">
                        <input name="file" type="file" multiple="" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20 text-center">
                  <button
                    type="button"
                    className="btn btn-primary waves-effect m-r-15"
                  >
                    Submit
                  </button>
                  <button type="button" className="btn btn-danger waves-effect">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddEmployee;
