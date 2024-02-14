// production
// const BASE_URL = 'https://martin-noted-javelin.ngrok-free.app/';
// const SOCKET_URL = 'https://chat.tour27.com';

// development
const BASE_URL = 'https://martin-noted-javelin.ngrok-free.app/';
// const BASE_URL = 'https://voip.bracketsltd.com/';
const SOCKET_URL = 'https://www.dev.chat.tour27.bracketsltd.com';

const APP_ID = 'c47bdce59e284eb78feba48dd6a2643f';

const ENDPOINTS = {
  // auth endpoints
  LOGIN: 'users/login',
  LOGOUT: 'auth/logout',
  SIGNUP: 'sms/request-otp',
  FORGET: 'sms/request-otp',
  VERIFY_OTP: 'sms/verify-otp',
  PASSWORD_CREATION: 'auth/signup',
  PASSWORD_RECREATION: 'auth/change-password',
  DELETE_ACCOUNT: 'auth',

  // profile endpoints
  USER_PROFILE: 'tour-guide/whoami',

  // profile creation endpoints
  USER_PROFILE_CREATION: 'tour-guide/create-profile',

  // profile media endpoints
  USER_PROFILE_MEDIA_CREATION: 'tour-guide/upload_images',

  // reviews endpoints
  USER_REVIEWS_PROFILE: 'reviews/all-reviews',

  // tour history endpoints
  TOUR_HISTORY_LIST: 'tour-guide/tour-history',
  TOUR_HISTORY_DETAIL: 'tour-schedule/',

  // payments endpoint
  EARNING_LIST: '/tour-guide/payments',
  PAYMENTS_LIST: 'payments/connect-account',
  ADD_PAYMENT: 'payments/connect-account',
  // packages endpoints
  PACKAGES_LIST: '/tour-package/list_detailed',
  CREATE_PACKAGE: '/tour-package/create',
  UPLOAD_PACKAGE_IMAGES: '/tour-package/upload-images/',
  PACKAGE: 'tour-package/',
  CANCEL_PACKAGE_IMAGE: 'tour-package/delete-image/',

  // schedules endpoints
  SCHEDULES_LIST: '/tour-schedule/list/',
  CREATE_SCHEDULE_WP: 'tour-schedule/with-package/',
  CREATE_SCHEDULE_WOP: 'tour-schedule/wo-package',
  UPLOAD_SCHEDULE_IMAGES: 'tour-schedule/upload-images/',
  UPDATE_SCHEDULE: 'tour-schedule/',
  CANCEL_SCHEDULE: 'tour-schedule/cancel/',
  COMPLETE_TOUR: 'tour-schedule/complete/',
  COMPLETE_QUICK_TOUR: 'quick-tours/',
  START_TOUR: 'tour-schedule/start-tour/',
  FETCH_MARKED_DATES: 'tour-schedule/my',
  SCHEDULES_ON_DASHBOARD: 'tour-schedule/my',

  // chat endpoints
  THREADS_LIST: '/chat/tour_guide',
  SEARCH_THREADS: '/chat/tour_guide?tourist=',
  DELETE_THREAD: '/chat/',
  CHAT_MESSAGES: '/chat/tourist/',
  SEND_MESSAGE: '/chat/upload-attachment',
  SEND_CONFLICT_MESSAGE: '/conflicts-chat/upload-attachment',

  // coupons endpoints
  GET_COUPONS: 'coupon-codes?status=ACTIVE',
  GET_PACKAGE_SCHEDULE_COUPONS: 'schedule-coupon-code/',
  POST_PACKAGE_SCHEDULE_COUPONS: 'schedule-coupon-code/',
  CREATE_COUPONS: 'schedule-coupon-code',
  DELETE_COUPON: 'coupon-codes/',
  CREATE_COUPON: 'coupon-codes/',
  UPDATE_COUPON: 'coupon-codes/',
  COUPONS_CODES: 'coupon-codes',

  // social media links
  CURRENT_LINKS: 'tour-guide/',
  UPDATE_LINKS: 'tour-guide/links',

  // support ticket
  SUPPORT_TICKETS: 'support-ticket',

  // conflict chat
  CONFLICTS_LIST: 'conflicts/all',
  CONFLICTS_DETAILS: 'conflicts/details',
  CONFLICTS_CHAT_LIST: '/conflicts-chat/chat-tourguide',

  // admin data
  ADMIN_DATA: '/conflicts-chat/',

  // roaming
  ROAMING: 'guide-roaming',

  //Quick Tour
  QUICK_TOUR_LIST: 'quick-tours/list/',
  QUICK_TOUR_RESPONSE: 'quick-tours/res',
  QUICK_TOUR_CANCEL: 'quick-tours/cancel',
  START_QUICK_TOUR: 'quick-tours/start-tour',

  // Reset Password
  VERIFY_PASSWORD: 'auth/verify-password',
  UPDATE_PASSWORD: 'auth/reset-password',

  // customized tour
  CUSTOMIZED_TOUR_LIST: 'customized-tour/list',

  // counties, states and cities
  COUNTRIES: 'CSC/',
  CUSTOMIZED_TOUR_DETAIL: 'customized-tour/detail_of_single_tour/',
  CREATE_CUSTOMIZED_TOUR: 'customized-tour/',
  START_CUSTOMIZED_TOUR: 'customized-tour/start-tour/',
  CANCEL_CUSTOMIZED_TOUR: 'customized-tour/cancel/',
  AGREE_CUSTOMIZED_TOUR: 'customized-tour/agree/',
  COMPLETE_CUSTOMIZED_TOUR: 'customized-tour/complete/',
  DELETE_INTRO_VIDEO: 'tour-guide/intro-video',
  UPDATE_PROFILE_DATA: 'tour-guide/update-profile',
  UPDATE_PROFILE_DATA_IMAGES: 'tour-guide/upload_images',

  // Deactivate Account
  DEACTIVATE_ACCOUNT: 'auth/deactivate',

  //Earning Details
  EARNING_DETAILS: 'tour-guide/total-earnings',

  // Document Upload
  DOCUMENT_UPLOAD: 'tour-guide/Doc',
  ANALYTICS: 'analytics/tour-guide',
};

export {BASE_URL, SOCKET_URL, ENDPOINTS, APP_ID};
