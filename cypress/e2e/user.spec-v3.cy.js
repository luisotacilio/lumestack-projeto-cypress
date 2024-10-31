import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage  from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const loginPage = new LoginPage();
const dashBoardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {
   
    it.only('User Info Update - Sucess', () => {

      loginPage.accessLoginPage();
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
      dashBoardPage.checkDashBoardPage();
      menuPage.acessMyInfo();

    })
   
  })