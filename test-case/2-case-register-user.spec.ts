import { test, expect } from '@playwright/test';

test.describe('Register User', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://www.automationexercise.com');
  });

  test('Verify that home page is visible successfully', async ({ page }) => {
    await expect(page).toHaveTitle('Automation Exercise');
  });

  test('Verify \'New User Signup!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  });

  test('Verify that \'ENTER ACCOUNT INFORMATION\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[2]').fill('DevWa');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('DevWa@Develop.com');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();
  });

  test('Verify that \'ACCOUNT CREATED!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    // await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[2]').fill('DevWa');
    await page.getByPlaceholder('Name').fill('DevWa');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('DevWa@Develop.com');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();

    
    // await page.locator('//*[@id="id_gender1"]').check();
    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password').fill('p@ssw0rd');
    await page.locator('//*[@id="days"]').selectOption('6');
    await page.locator('//*[@id="months"]').selectOption('12');
    await page.locator('//*[@id="years"]').selectOption('1987');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from our partners!').check();
    await page.getByLabel('First name').fill('Wa');
    await page.getByLabel('Last name').fill('Power18Plus');
    await page.locator('//*[@id="company"]').fill('DevWa');
    await page.locator('//*[@id="address1"]').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Address 2').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Country ').selectOption('Australia');
    await page.locator('//*[@id="state"]').fill('Bangkok');
    await page.locator('//*[@id="city"]').fill('Onnut');
    await page.locator('//*[@id="zipcode"]').fill('10510');
    await page.locator('//*[@id="mobile_number"]').fill('0891234567');

    await page.locator('//*[@id="form"]/div/div/div/div[1]/form/button').click();

    // await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByText('Account Created!')).toBeVisible();
  });

  test('Verify that \'Logged in as username!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    const txtName = 'DevWa02';
    await page.getByPlaceholder('Name').fill(txtName);
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('DevWa02@Develop.com');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();

    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password').fill('p@ssw0rd');
    await page.locator('//*[@id="days"]').selectOption('6');
    await page.locator('//*[@id="months"]').selectOption('12');
    await page.locator('//*[@id="years"]').selectOption('1987');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from our partners!').check();
    await page.getByLabel('First name').fill('Wa');
    await page.getByLabel('Last name').fill('Power18Plus');
    await page.locator('//*[@id="company"]').fill('DevWa');
    await page.locator('//*[@id="address1"]').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Address 2').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Country ').selectOption('Australia');
    await page.locator('//*[@id="state"]').fill('Bangkok');
    await page.locator('//*[@id="city"]').fill('Onnut');
    await page.locator('//*[@id="zipcode"]').fill('10510');
    await page.locator('//*[@id="mobile_number"]').fill('0891234567');

    await page.locator('//*[@id="form"]/div/div/div/div[1]/form/button').click();
    await page.getByText('Continue').click();
    
    await expect(page.getByText(txtName)).toBeVisible();
  });

  test('Verify that \'ACCOUNT DELETED!\' is visible and click \'Continue\' button', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    const txtName = 'DevWa03';
    const txtEmail = 'DevWa03@Develop.com'
    await page.getByPlaceholder('Name').fill(txtName);
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill(txtEmail);
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();

    await page.getByLabel('Mr.').check();
    await page.getByLabel('Password').fill('p@ssw0rd');
    await page.locator('//*[@id="days"]').selectOption('6');
    await page.locator('//*[@id="months"]').selectOption('12');
    await page.locator('//*[@id="years"]').selectOption('1987');
    await page.getByLabel('Sign up for our newsletter!').check();
    await page.getByLabel('Receive special offers from our partners!').check();
    await page.getByLabel('First name').fill('Wa');
    await page.getByLabel('Last name').fill('Power18Plus');
    await page.locator('//*[@id="company"]').fill('DevWa');
    await page.locator('//*[@id="address1"]').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Address 2').fill('95/175 Onnut 17 Rd.');
    await page.getByLabel('Country ').selectOption('Australia');
    await page.locator('//*[@id="state"]').fill('Bangkok');
    await page.locator('//*[@id="city"]').fill('Onnut');
    await page.locator('//*[@id="zipcode"]').fill('10510');
    await page.locator('//*[@id="mobile_number"]').fill('0891234567');

    await page.locator('//*[@id="form"]/div/div/div/div[1]/form/button').click();
    await page.getByText('Continue').click();
    
    await page.getByText('Delete Account').click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
  });
});
