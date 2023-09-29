<template>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <!-- Brand Logo -->
          <a href="index3.html" class="brand-link">
            <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
            <p class="brand-text text-center font-weight-light">H R M</p>
          </a>
        
          <!-- Sidebar -->
          <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            
            <a href="#" class="mb-4 mt-3 d-block text-center">Super Admin</a>
            
    
    
    
        
            <!-- SidebarSearch Form -->
            <div class="form-inline">
             
            </div>
        
            <!-- Sidebar Menu -->
            <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                  <a href="#" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    
                   
                   
                  </ul>
                </li>
              
              
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-chart-pie"></i>
                    <p>
                    Manage Company
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="/companies" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Companies</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="/pendingcompanies" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Pending</p>
                      </a>
                    </li>
                   
                   
                    
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-tree"></i>
                    <p>
                     Manage Price Plan
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                   
                   
                  
                   
                    <li class="nav-item">
                      <a href="/prices" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Price Plans</p>
                      </a>
                    </li>
                    
                  
                  </ul>
                </li>

                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-table"></i>
                    <p>
                     Roles Permissions
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="pages/tables/simple.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Simple Tables</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/tables/data.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>DataTables</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/tables/jsgrid.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>jsGrid</p>
                      </a>
                    </li>
                  </ul>
                </li>
             
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-table"></i>
                    <p>
                      Settings
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="pages/tables/simple.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Simple Tables</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/tables/data.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>DataTables</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/tables/jsgrid.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>jsGrid</p>
                      </a>
                    </li>
                  </ul>
                </li>
    
             
              
              </ul>
            </nav>
            <!-- /.sidebar-menu -->
          </div>
          <!-- /.sidebar -->
        </aside>
      
    </template>
    
    <script>
    export default {
        name:"SidebarView"
    
    }
    </script>
    
    <style>
    
    </style>