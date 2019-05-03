module.exports = {
  HOME_ROUTE: '/',
  ABOUT_ROUTE: '/about',
  EMPLOYERS_ROUTE: '/employers',
  PRIVACY_ROUTE: '/privacy',
  WILD_ROUTE: '*',

  ADMIN_LOGIN_ROUTE: '/admin/login',

  NEW_APPLICATION_ROUTE: '/applications/new',
  APPLICATION_ROUTE: '/applications/:step',
  applicationRoute: step => `/applications/${step}`,

  getApplicationRoute: id => `/api/applications/${id}`,
  POST_APPLICATION_ROUTE: '/api/applications/:step',
  postApplicationRoute: step => `/api/applications/${step}`,

  NEW_EMPLOYER_LEAD_ROUTE: '/api/leads/employer',
  NEW_EMPLOYEE_LEAD_ROUTE: '/api/leads/employee',
}
