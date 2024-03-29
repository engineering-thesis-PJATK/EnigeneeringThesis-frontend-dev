//jacques

export const Environment = {
    baseUrl: 'https://localhost:44330/api',
    production: false
};
/*
//pedro
/*
export const Environment = {
  baseUrl: 'https://localhost:5001/api',
  production: false
};
*/

export enum ApiPaths {
  Login = '/login',
  Company = '/company',  
  Customer = '/customer',
  CustomerCompanyName = '/customer/companyname',
  CustomerSelect = '/customer2',
  Employee = '/employee',
  EmployeePrivilege = '/employee/privilege',
  Team = '/employee/team',
  Project = '/project',
  ProjectExtended = '/project/companyteamnames',
  ProjectTasks = '/project/task',
  Ticket = "/ticket",
  CustomTicket= "/Ticket/CustomTicket",
  Kanban = '/kanban',
  ForgotPassword = '/Auth/ForgotPassword',
  RemindPassword ='/Auth/RemindPassword',
  Address = '/Addresses'
}