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
              <h2 class="accordion-header" id="headingZero">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseZero"
                  aria-expanded="false"
                  aria-controls="collapseZero"
                >
                  Company Logo
                </button>
              </h2>
              <div
                id="collapseZero"
                class="accordion-collapse collapse"
                aria-labelledby="headingZero"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col-lg-3">
                      <label
                        @mouseover="mouseOver()"
                        @mouseleave="mouseleave()"
                        for="file-input"
                        style="height: 100px; width: 100px; position: relative"
                      >
                        <img
                          cursor="pointer"
                          title="Upload Logo"
                          onerror="this.onerror=null;this.src='/assets/images/logo/user.png';"
                          :src="imageUrl"
                          class=" "
                          alt="User Image"
                          style="
                            height: 100px;
                            width: 100px;
                            position: absolute;
                            border-radius: 50%;
                            top: 0;
                            left: 0;
                          "
                        />

                        <div
                          v-show="active"
                          id="shadow"
                          style="
                            height: 100px;
                            width: 100px;
                            position: absolute;
                            cursor: pointer;

                            background-color: rgba(15, 14, 14, 0.385);

                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            top: 0;
                            left: 0;
                          "
                        >
                          <i
                            style="font-size: 200%"
                            class="fa-solid fa-camera text-white"
                          ></i>
                        </div>
                      </label>
                      <input
                        @change="handleImageSelect"
                        style="display: none"
                        id="file-input"
                        type="file"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      @click.prevent="uploadCompanyLogo"
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
                          {{ profile.company_cetegory }}
                          <label>Company category</label>
                          <select
                            class="form-custom-select"
                            style="width: 100%"
                            @change="
                              getCompanySector(profile.company_category_id)
                            "
                            v-model="profile.company_category_id"
                          >
                            <option disabled value="null">
                              Select a category
                            </option>

                            <option
                              :value="category.id"
                              v-for="category in company_categories"
                              :key="category"
                            >
                              {{ category.name }}
                            </option>
                          </select>
                          <span id="company_cetegory" class="error"></span>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label>Sector</label>
                          <select
                            v-model="profile.company_sector_id"
                            class="form-custom-select"
                            style="width: 100%"
                          >
                            <option disabled value="null">
                              Select a sector
                            </option>
                            <option
                              :value="sector.id"
                              v-for="sector in company_sectors"
                              :key="sector"
                            >
                              {{ sector.name }}
                            </option>
                          </select>
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

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label>Details info </label>

                          <div class="mt-2">
                            <ckeditor
                              :editor="editor"
                              v-model="basic_information.details_info"
                              :config="editorConfig"
                            ></ckeditor>
                          </div>
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

                      <div class="col-lg-4">
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
                          v-model="auth_person.auth_first_name"
                          class="form-control"
                        />
                        <span id="auth_first_name" class="error"></span>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Last name </label>
                        <input
                          v-model="auth_person.auth_last_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-5">
                      <div class="form-group">
                        <label>Designation </label>
                        <input
                          v-model="auth_person.auth_designation"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Phone No* </label>
                        <input
                          v-model="auth_person.auth_phone_no"
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
                          v-model="auth_person.auth_email"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <label
                      for="file-input"
                      style="height: 100px; width: 100px; position: relative"
                    >
                      <img
                        onerror="this.onerror=null;this.src='/assets/images/logo/user.png';"
                        :src="authPersonImageUrl"
                        class=" "
                        alt="User Image"
                        style="
                          height: 100px;
                          width: 100px;
                          position: absolute;
                          top: 0;
                          left: 0;
                        "
                      />
                    </label>
                    <input
                      @change="handleImageSelect"
                      style="display: none"
                      id="file-input"
                      type="file"
                    />
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

            <!-- <div class="accordion-item">
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
            </div> -->
            <!-- <div class="accordion-item">
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
                              class=""
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
            </div> -->

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
                          v-model="company_address.post_code"
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
                          v-model="company_address.address_line_1"
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
                          v-model="company_address.address_line_2"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Address line 3 </label>
                        <input
                          v-model="company_address.address_line_3"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>City/county*</label>
                        <input
                          v-model="company_address.city"
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
                          v-model="company_address.country_id"
                        >
                          <option disabled value="null">
                            Select a country
                          </option>
                          <option
                            :value="country.id"
                            v-for="country in countries"
                            :key="country"
                          >
                            {{ country.country_name }}
                          </option>
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
                  Compnay hour
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
                        <label>Opening Time</label>
                        <input
                          v-model="company_hour.opening_time"
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
                          v-model="company_hour.closing_time"
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
                          v-model="document_name"
                          type="text"
                          class="form-control"
                        />
                        <span id="doc_name" class="error"></span>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="form-group">
                        <label>Document Type</label>
                        <select
                          v-model="document_type"
                          class="form-custom-select"
                          style="width: 100%"
                        >
                          <option disabled value="">Select a type</option>
                          <option>Trade licence</option>
                          <option>BIN Certificate</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label for="exampleInputFile">File</label>

                        <input
                          type="file"
                          @change="handleMultipleFileUpload"
                          class="form-control"
                          id="exampleInputFile"
                        />
                      </div>
                    </div>

                    <div class="col-1 pt-1">
                      <button
                        @click="createDocument"
                        type="button"
                        class="btn btn-default btn-sm mt-4 mb-4"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <p>New file</p>

                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Document name</th>
                        <th>Document Type</th>
                        <th>Date</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="doc in docs" :key="doc">
                        <td>{{ doc.document_name }}</td>
                        <td>{{ doc.document_type }}</td>
                        <td>{{ doc.date }}</td>

                        <td>
                          <a href="">
                            <img
                              style="height: 50px; width: 50px"
                              src="/assets/images/resource/pdf.png"
                              alt=""
                            />
                            <p>{{ doc.file.name }}</p>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Exiting file</p>

                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Document name</th>
                        <th>Document Type</th>
                        <th>Date</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="pdoc in pdocs" :key="pdoc">
                        <td>{{ pdoc.name }}</td>
                        <td>{{ pdoc.type }}</td>
                        <td>{{ pdoc.date }}</td>

                        <td>
                          <a href="">
                            <img
                              style="height: 50px; width: 50px"
                              src="/assets/images/resource/pdf.png"
                              alt=""
                            />
                            <p></p>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="mt-2">
                    <button
                      @click.prevent="uploadDocuments"
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Constant from "@/other/Constant";

export default {
  data() {
    return {
      profile: {},

      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },

      uuid: "",
      email: "",
      basic_information: {},
      auth_person: {},
      key_person: "",
      levelone: "",
      company_address: {},
      trade_day: "",
      company_categories: "",
      company_sectors: "",
      countries: "",
      company_hour: {},
      file: "",
      mfile: "",
      imageUrl: "",
      authPersonImageUrl: "",
      document_name: "",
      document_type: "",
      pdocs: [],
      docs: [],
      images: [],
      isDragging: false,
      active: false,
    };
  },

  methods: {
    mouseOver() {
      this.active = true;
    },
    mouseleave() {
      this.active = false;
    },
    selectFiles() {
      this.$refs.fileInput.click();
    },
    onFileSelect(event) {
      const files = event.target.files;
      if (files.length === 0) {
        return;
      }

      for (let i = 0; i < files.length; i++) {
        if (!this.docs.some((e) => e.name === files[i].name)) {
          var doc = {
            name: files[i].name,
            file: files[i],
            type: "document",
            document_type: "document",
            document_name: "company documents",
            url: URL.createObjectURL(files[i]),
          };
          this.docs.push(doc);
        }
      }
    },

    onDragOver(event) {
      event.preventDefault();
      this.isDragging = true;
      event.dataTransfer.dropEffect = "copy";
    },
    onDragLeave(event) {
      event.preventDefault();
      this.isDragging = false;
    },

    onDrop(event) {
      event.preventDefault();
      this.isDragging = false;
      const files = event.dataTransfer.files;

      for (let i = 0; i < files.length; i++) {
        if (!this.docs.some((e) => e.name === files[i].name)) {
          var doc = {
            name: files[i].name,
            file: files[i],
            type: "document",
            document_type: "document",
            document_name: "company documents",
            url: URL.createObjectURL(files[i]),
          };
          this.docs.push(doc);
        }
      }
    },

    deleteimage(index) {
      this.docs.splice(index, 1);
    },

    // Creating Feature list
    addbasicinfo() {
      alert(this.editorData);
      var validator = new Validator();
      var error = validator.validated([
        {
          field: "company_name",
          value: this.basic_information.company_name,
          type: "required",
        },
        {
          field: "contact_number",
          value: this.basic_information.contact_number,
          type: "required",
        },
        {
          field: "company_email",
          value: this.basic_information.company_email,
          type: "required|email",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var basic_information = {
          company_name: this.basic_information.company_name,
          company_category_id: this.profile.company_category_id,
          company_sector_id: this.profile.company_sector_id,
          registration_number: this.basic_information.registration_number,
          contact_number: this.basic_information.contact_number,
          company_email: this.basic_information.company_email,
          website: this.basic_information.website,
          telephone_number: this.basic_information.telephone_number,
          details_info: this.basic_information.details_info,
        };

        axios
          .put("/company/profiles/" + this.uuid, {
            basic_information: JSON.stringify(basic_information),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },

    handleFileUpload(event) {
      this.file = event.target.files[0];
    },

    handleImageSelect(event) {
      this.file = event.target.files[0];

      if (this.file) {
        // Use FileReader to read file and generate a preview
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };

        reader.readAsDataURL(this.file);
      }
    },

    uploadCompanyLogo() {
      if (this.file) {
        var formData = new FormData();

        formData.append("file", this.file);
        formData.append("type", "image");
        formData.append("document_type", "logo");
        formData.append("document_name", "company_logo");
        formData.append("_method", "put");

        axios
          .post("/company/profiles/" + this.uuid, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    addauthperson() {
      var validator = new Validator();
      var error = validator.validated([
        {
          field: "auth_first_name",
          value: this.auth_person.auth_first_name,
          type: "required",
        },
        {
          field: "auth_phone_no",
          value: this.auth_person.auth_phone_no,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var auth_person = {
          auth_first_name: this.auth_person.auth_first_name,
          auth_last_name: this.auth_person.auth_last_name,
          auth_email: this.auth_person.auth_email,
          auth_phone_no: this.auth_person.auth_phone_no,
          auth_designation: this.auth_person.auth_designation,
        };

        axios
          .put("/company/profiles/" + this.uuid, {
            authorised_person_details: JSON.stringify(auth_person),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
              this.uploadAuthPersonPhoto();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    handleMultipleFileUpload(event) {
      this.mfile = event.target.files[0];
    },
    createDocument() {
      if (this.mfile) {
        var doc = {
          file: this.mfile,
          type: "document",
          document_type: this.document_type,

          document_name: this.document_name,
          date:
            new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear(),
        };

        this.docs.push(doc);
      } else {
        alert("select the file");
      }
    },

    uploadDocuments() {
      if (this.docs.length > 0) {
        var formData = new FormData();

        for (var i = 0; i < this.docs.length; i++) {
          formData.append("files[]", this.docs[i].file);
          formData.append("types[]", this.docs[i].type);
          formData.append("document_types[]", this.docs[i].document_type);
          formData.append("document_names[]", this.docs[i].document_name);
        }

        formData.append("_method", "put");

        axios
          .post("/company/profiles/" + this.uuid, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("select the file");
      }
    },

    uploadAuthPersonPhoto() {
      if (this.file) {
        var formData = new FormData();

        formData.append("file", this.file);
        formData.append("type", "image");
        formData.append("document_type", "logo");
        formData.append("document_name", "auth_person_logo");
        formData.append("_method", "put");

        axios
          .post("/company/profiles/" + this.uuid, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
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
          .put("/company/profiles/" + this.uuid, {
            key_contact: JSON.stringify(key_person),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
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
          .put("/company/profiles/" + this.uuid, {
            lavel_one_user: JSON.stringify(levelone),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
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
        {
          field: "post_code",
          value: this.company_address.post_code,
          type: "required",
        },
        {
          field: "address_line_1",
          value: this.company_address.address_line_1,
          type: "required",
        },
        { field: "city", value: this.company_address.city, type: "required" },
        {
          field: "country",
          value: this.company_address.country_id,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var address = {
          post_code: this.company_address.post_code,
          address_line_1: this.company_address.address_line_1,
          address_line_2: this.company_address.address_line_2,
          address_line_3: this.company_address.address_line_3,
          city: this.company_address.city,
          country_id: this.company_address.country_id,
        };

        axios
          .put("/company/profiles/" + this.uuid, {
            company_address: JSON.stringify(address),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
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
        {
          field: "trade_opening_time",
          value: this.company_hour.opening_time,
          type: "required",
        },
        {
          field: "trade_closing_time",
          value: this.company_hour.closing_time,
          type: "required",
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        var trade = {
          opening_time: this.company_hour.opening_time,
          closing_time: this.company_hour.closing_time,
        };

        axios
          .put("/company/profiles/" + this.uuid, {
            trading_hour: JSON.stringify(trade),
          })
          .then((response) => {
            if (response) {
              this.$emit("get_message", response.data.message);
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
              this.$emit("get_message", response.data.message);
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
              this.getCompanySector(this.profile.company_category_id);
              if (this.profile.basic_information != null) {
                this.basic_information = JSON.parse(
                  this.profile.basic_information
                );
              }
              if (this.profile.logo != null) {
                this.imageUrl =
                  Constant.filebaseurl + this.profile.logo.file.path;

                var user = JSON.parse(localStorage.getItem("user")).user;
                user.logo.file = this.profile.logo.file;
                var data = {
                  succes: true,
                  message: "Data retrive sucessfully",
                  user: user,
                };

                localStorage.setItem("user", JSON.stringify(data));
              }

              if (this.profile.auth_person_logo != null) {
                this.authPersonImageUrl =
                  Constant.filebaseurl +
                  this.profile.auth_person_logo.file.path;
              }

              if (this.profile.authorised_person_details != null) {
                this.auth_person = JSON.parse(
                  this.profile.authorised_person_details
                );
              }
              if (this.profile.company_address != null) {
                this.company_address = JSON.parse(this.profile.company_address);
              }
              if (this.profile.trading_hour != null) {
                this.company_hour = JSON.parse(this.profile.trading_hour);
              }
              if (this.profile.files != null) {
                for (var i = 0; i < this.profile.files.length; i++) {
                  var pdoc = {
                    name: this.profile.files[i].document_name,
                    type: this.profile.files[i].document_type,
                    date: this.profile.files[i].created_at,
                    path: this.profile.files[i].file.path,
                    ext: this.profile.files[i].file.ext,
                  };
                  this.pdocs.push(pdoc);
                }
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    getCompanyCategory() {
      axios
        .get("public/company_categories")
        .then((response) => {
          this.company_categories = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCompanySector(categoryid) {
      if (categoryid) {
        axios
          .get("public/sector/category/" + categoryid)
          .then((response) => {
            this.company_sectors = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getCountry() {
      axios
        .get("public/countries")
        .then((response) => {
          this.countries = response.data.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },

  mounted: function () {
    this.uuid = JSON.parse(localStorage.getItem("user")).user.uuid;
    this.getProfile(this.uuid);
    this.getCompanyCategory();
    this.getCountry();
  },
};
</script>
<style>
.ck-content {
  min-height: 150px !important;
}
.ck-powered-by__label {
  display: none !important;
}
.ck.ck-balloon-panel.ck-powered-by-balloon[class*="position_border"] {
  display: none !important;
}
</style>

