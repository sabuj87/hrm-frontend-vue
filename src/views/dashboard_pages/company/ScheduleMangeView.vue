<template>
  <div class="wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
          <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
        </div> -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper bg-white">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
          
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-primary">
             
             
                <div  class="card-header pc-bg ">
                    <h3 class="card-title">Interview Schedules</h3>
                  </div>

                <form>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Select job</label>
                          <select
                            v-model="jobtitle"
                            class="form-custom-select"
                            style="width: 100%"
                          >
                            <option selected="selected">Job 1</option>
                            <option>Job 2</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Select candidate</label>
                          <select
                            v-model="candidate"
                            class="form-custom-select"
                            style="width: 100%"
                          >
                            <option selected="selected">candidate1</option>
                            <option>candidate2</option>
                          </select>
                        </div>
                      </div>
                     
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Date</label>
                          <input
                            v-model="date"
                            type="date"
                            class="form-control"
                          />
                        </div>
                      </div>
                       
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label>Time</label>
                          <input
                            v-model="time"
                            type="time"
                            class="form-control"
                          />
                        </div>
                      </div>
                     
                      

                      <div class="col-lg-1 pt-1">
                        <button
                          @click="addshe"
                          type="button"
                          class="btn-sc-outline-sm  mb-4"
                        >
                          ADD
                        </button>
                      </div>

                     
                    
                    </div>

                    <table class="table text-center table-striped table-bordered">
                        <thead>
                          <tr>
                            <th style="width: 10px">#</th>
                            <th>Job Title</th>
                            <th>Candidate Name</th>
                            <th>Date</th>
                            <th>Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="she in shes" :key="she">
                            <td>1.</td>
                            <td>{{ she.jobtitle }}</td>
                            <td>
                              {{ she.candidate}}
                            </td>
                            <td>
                              {{ she.date }}
                            </td>
                            <td>
                              {{ she.time }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button type="button" class="btn-sc mt-4 mb-4">
                        Submit
                      </button>
                  </div>

                  <!-- /.card-body -->

                  <div class="bs-stepper"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>
        
        <script>

export default {
  data() {
    return {

        shes:[]

    };
  },
  methods: {
  

    addshe() {
      var she = {
        jobtitle: this.jobtitle,
        candidate: this.candidate,
        date: this.date,
        time: this.time,
     
      };
      this.shes.push(she);
    },
    
  },

  mounted: function () {
   
  },
};
</script>
        