<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
      </div> -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper bg-white pc">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <!-- <div class="col-sm-6">
              <h1 class="m-0">Profile</h1>
            </div> -->
            <!-- /.col -->

            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class=""></div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Basic Information
                </button>
              </h2>

              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            @input="clearError('company_name')"
                            v-model="basic_information.company_name"
                            class="form-control"
                          />
                          <span id="company_name" class="error"></span>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Company_category</label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="profile.company_cetegory"
                          > 
                            <option disable  value="null" >Select a category</option>
                            <option value="Service" >Service</option>
                            <option value="Technology" >Technology</option>
                            <option value="Finance" >Finance</option>
                          </select>
                          <span id="company_cetegory" class="error"></span>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Registration Number</label>

                          <input
                            type="number"
                            v-model="basic_information.registration_number"
                            min="0"
                            class="form-control"
                          />
                          <span id="registration_number" class="error"></span>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label> Contact Number*</label>
                          <input
                            type="number"
                            @input="clearError('contact_number')"
                            v-model="basic_information.contact_number"
                            min="0"
                            class="form-control"
                          />
                          <span id="contact_number" class="error"></span>
                        </div>
                      </div>
          
                      <div class="col-lg-5">
                        <div class="form-group">
                          <label> Company email* </label>
                          <input
                            type="email"
                            v-model="basic_information.company_email"
                            min="0"
                            class="form-control"
                          />
                          <span id="company_email" class="error"></span>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label> Web link </label>
                          <input
                            type="text"
                            v-model="basic_information.website"
                            min="0"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label> Telephone Number </label>
                          <input
                            type="text"
                            v-model="basic_information.telephone_number"
                            min="0"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="form-group">
                          <label>Name of Trading</label>
                          <input
                            type="text"
                            v-model="basic_information.name_of_trading"
                            min="0"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Period in Trading </label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            v-model="basic_information.period_of_trading"
                          >
                            <option selected="selected">Trading 1</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="form-group">
                          <label>Name of sector</label>
                          <select
                            v-model="basic_information.name_of_sector"
                            class="form-custom-select"
                            style="width: 100%"
                          > 
                          <option :value="null" >Select a sector</option>

                            <option
                              :value="ICT"
                           
                            >
                              Information and communication
                            </option>
                            <option
                              :value="Foods"
                           
                            >
                            Food and grocary
                            </option>
                          </select>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Changed orgnization</label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            value="basic_information.changed_organization"
                          > 
                          <option disable value="null">Select</option>
                            <option value="Yes">No</option>
                            <option value="No">Yes</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Details info </label>
                          <input
                            v-model="basic_information.details_info"
                            type="text"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Faced Penalty?</label>
                          <select
                            v-model="faced_penalty"
                            class="form-custom-select"
                            style="width: 100%"
                          >
                            <option disable value="null">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label for="exampleInputFile">Logo</label>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                id="exampleInputFile"
                              />
                              <label
                                class="custom-file-label"
                                for="exampleInputFile"
                                >Choose file</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        @click.prevent="addbasicinfo"
                        class="btn-sc-wd btn-primary mr-2"
                      >
                        Save
                      </button>
                      <button class="btn-pc-wd btn-warning">Next</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Authorised Person Details
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>First name* </label>
                        <input
                          type="text"
                          v-model="auth_first_name"
                          class="form-control"
                        />
                        <span id="auth_first_name" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input
                          v-model="auth_last_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>Designation </label>
                        <input
                          v-model="auth_designation"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No* </label>
                        <input
                          v-model="auth_phone_no"
                          type="number"
                          min="0"
                          class="form-control"
                        />
                        <span id="auth_phone_no" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input
                          v-model="auth_email"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addauthperson"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Key contact
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>First name* </label>
                        <input
                          v-model="key_first_name"
                          type="text"
                          class="form-control"
                        />
                        <span id="key_first_name" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input
                          v-model="key_last_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Designation </label>
                        <input
                          v-model="key_designation"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No* </label>
                        <input
                          v-model="key_phone_no"
                          type="number"
                          min="0"
                          class="form-control"
                        />
                        <span id="key_phone_no" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input
                          v-model="key_email"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Any Criminal History</label>
                        <select class="form-custom-select" style="width: 100%">
                          <option
                            value="key_criminal_history"
                            selected="selected"
                          >
                            Yes
                          </option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addKeyContact"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Lavel 1 user
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>First name* </label>
                        <input
                          v-model="lavel_first_name"
                          type="text"
                          class="form-control"
                        />
                        <span id="lavel_first_name" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input
                          v-model="level_last_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Designation </label>
                        <input
                          v-model="level_designation"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No </label>
                        <input
                          v-model="level_phone_no"
                          type="number"
                          min="0"
                          class="form-control"
                        />
                        <span id="level_phone_no" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Email </label>
                        <input
                          v-model="level_email"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Any Criminal History</label>
                        <select
                          v-model="level_criminal_history"
                          class="form-custom-select"
                          style="width: 100%"
                        >
                          <option value="Yes" selected="selected">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">Photo</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addlavelone"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Company Address
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Post Code*</label>
                        <input
                          v-model="post_code"
                          type="text"
                          class="form-control"
                        />
                        <span id="post_code" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>Address line 1* </label>
                        <input
                          v-model="address_line_1"
                          type="text"
                          class="form-control"
                        />
                        <span id="address_line_1" class="error"></span>
                      </div>
                    </div>

                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Address line 2 </label>
                        <input
                          v-model="address_line_2"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Address line 3 </label>
                        <input
                          v-model="address_line_3"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>City/county*</label>
                        <input
                          v-model="city"
                          type="text"
                          class="form-control"
                        />
                        <span id="city" class="error"></span>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Country*</label>
                        <select
                          class="form-custom-select"
                          style="width: 100%"
                          v-model="country"
                        >
                          <option value="BD" selected="selected">BD</option>
                          <option value="UK">UK</option>
                        </select>
                        <span id="country" class="error"></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addCompanyAddress"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Trading Hour
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Day</label>
                        <input
                          v-model="trade_day"
                          type="text"
                          class="form-control"
                        />
                        <span id="trade_day" class="error"></span>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Status</label>
                        <select
                          class="form-custom-select"
                          style="width: 100%"
                          v-model="trade_status"
                        >
                          <option value="Open" selected="selected">Open</option>
                          <option value="Close">Close</option>
                        </select>
                        <span id="trade_status" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Opening Time</label>
                        <input
                          v-model="trade_opening_time"
                          type="time"
                          class="form-control"
                        />
                        <span id="trade_opening_time" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Closing Time</label>
                        <input
                          v-model="trade_closing_time"
                          type="time"
                          class="form-control"
                        />
                        <span id="trade_closing_time" class="error"></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addtradinghour"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Upload documents
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Document Name </label>
                        <input
                          v-model="doc_name"
                          type="text"
                          class="form-control"
                        />
                        <span id="doc_name" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">File</label>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="exampleInputFile"
                            />
                            <label
                              class="custom-file-label"
                              for="exampleInputFile"
                              >Choose file</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="addocuments"
                      class="btn-sc-wd btn-primary mr-2"
                    >
                      Save
                    </button>
                    <button class="btn-pc-wd btn-warning">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
import { Validator } from "@/other/Validator";
import $ from "jquery";
import axios from "axios";

export default {
  data() {
    return {
      profile: "",
      uuid: "",
      email: "",
      basic_information: "",
      auth_person: "",
      key_person: "",
      levelone: "",
      address: "",
      trade_day: "",
      


    };
  },

  methods: {
    // Creating Feature list
    addbasicinfo() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "company_name", value:this.basic_information.company_name, type: "required" },
        {
          field: "contact_number",
          value: this.contact_number,
          type: "required",
        },
        {
          field: "company_email",
          value: this.company_email,
          type: "required|email",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var basic_information = {
          company_name: this.basic_information.company_name,
          company_type: this.company_type,
          registration_number: this.registration_number,
          contact_number: this.contact_number,
          sigin_email: this.sigin_email,
          company_email: this.company_email,
          website: this.website,
          telephone_number: this.telephone_number,
          name_of_trading: this.name_of_trading,
          period_of_trading: this.period_of_trading,
          changed_organization: this.changed_organization,
          details_info: this.details_info,
          name_of_sector: this.name_of_sector,
          faced_penalty: this.faced_penalty,
          logo: "",
        };

        axios
          .put("/company/profiles/"+this.uuid, {
            
            basic_information: JSON.stringify(basic_information),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addauthperson() {
      var validator = new Validator();
      var error = validator.validated([
        {
          field: "auth_first_name",
          value: this.auth_first_name,
          type: "required",
        },
        { field: "auth_phone_no", value: this.auth_phone_no, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        var auth_person = {
          auth_first_name: this.auth_first_name,
          auth_last_name: this.auth_last_name,
          auth_designation: this.auth_designation,
          logo: "",
        };

        axios
        .put("/company/profiles/"+this.uuid, {
            
            authorised_person_details: JSON.stringify(auth_person),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addKeyContact() {
      var validator = new Validator();
      var error = validator.validated([
        {
          field: "key_first_name",
          value: this.key_first_name,
          type: "required",
        },
        { field: "key_phone_no", value: this.key_phone_no, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        var key_person = {
          key_first_name: this.key_first_name,
          key_last_name: this.key_last_name,
          key_designation: this.key_designation,
          key_phone_no: this.key_phone_no,
          key_email: this.key_email,
          key_criminal_history: this.key_criminal_history,
          logo: "",
        };

        axios
        .put("/company/profiles/"+this.uuid, {
          
            key_contact: JSON.stringify(key_person),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addlavelone() {
      var validator = new Validator();
      var error = validator.validated([
        {
          field: "lavel_first_name",
          value: this.lavel_first_name,
          type: "required",
        },
        {
          field: "level_phone_no",
          value: this.level_phone_no,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var levelone = {
          lavel_first_name: this.lavel_first_name,
          level_last_name: this.level_last_name,
          level_phone_no: this.level_phone_no,
          level_email: this.level_email,
          level_designation: this.level_designation,
          level_criminal_history: this.level_criminal_history,
          logo: "",
        };

        axios
        .put("/company/profiles/"+this.uuid, {
           
            lavel_one_user: JSON.stringify(levelone),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addCompanyAddress() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "post_code", value: this.post_code, type: "required" },
        {
          field: "address_line_1",
          value: this.address_line_1,
          type: "required",
        },
        { field: "city", value: this.city, type: "required" },
        { field: "country", value: this.country, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        var address = {
          post_code: this.post_code,
          address_line_1: this.address_line_1,
          address_line_2: this.address_line_2,
          address_line_3: this.address_line_3,
          city: this.city,
          country: this.country,
        };

        axios
        .put("/company/profiles/"+this.uuid, {
            
            company_address: JSON.stringify(address),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addtradinghour() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "trade_day", value: this.trade_day, type: "required" },
        { field: "trade_status", value: this.trade_status, type: "required" },
        {
          field: "trade_opening_time",
          value: this.trade_opening_time,
          type: "required",
        },
        {
          field: "trade_closing_time",
          value: this.trade_closing_time,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var trade = {
          trade_day: this.trade_day,
          trade_status: this.trade_status,
          trade_opening_time: this.trade_opening_time,
          trade_closing_time: this.trade_closing_time,
        };

        axios
        .put("/company/profiles/"+this.uuid, {
           
            trading_hour: JSON.stringify(trade),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    addocuments() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "doc_name", value: this.doc_name, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        var doc = {
          doc_name: this.doc_name,
        };

        axios
          .put("/company/profiles/2", {
            user_id: "2",
            documents: JSON.stringify(doc),
          })
          .then((response) => {
            if (response) {
              alert(response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },


    getProfile(uuid) {
      if (uuid) {
        axios
          .get("company/profiles/" + uuid)
          .then((response) => {
            if (response) {
              this.profile = response.data.company;
              this.basic_information = JSON.parse(
                this.profile.basic_information
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },

  mounted: function () {

    this.uuid = JSON.parse(localStorage.getItem("user")).user.uuid;
    this.getProfile(this.uuid);


  },
};
</script>

