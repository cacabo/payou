module.exports = {
  HOME_ROUTE: '/',
  ABOUT_ROUTE: '/about',
  EMPLOYERS_ROUTE: '/employers',
  PRIVACY_ROUTE: '/privacy',
  WILD_ROUTE: '*',

  NEW_APPLICATION_ROUTE: '/applications/new',
  APPLICATION_ROUTE: '/applications/:step',
  applicationRoute: step => `/applications/${step}`,

  POST_APPLICATION_ROUTE: '/api/application/:step',
  postApplicationRoute: step => `/api/application/${step}`,

  NEW_EMPLOYER_LEAD_ROUTE: '/api/leads/employer',
  NEW_EMPLOYEE_LEAD_ROUTE: '/api/leads/employee',
}
