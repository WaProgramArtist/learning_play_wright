import { test, expect } from '@playwright/test';

test.describe('Login User with correct email and password', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://www.automationexercise.com');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Verify that home page is visible successfully', async ({ page }) => {
    // await expect(page).toHaveURL('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');
  });

  test('Verify \'Login to your account\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    await expect(page.getByText('New User Signup!')).toBeVisible();
  });

  test('Verify that \'Logged in as username\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill('DevWa02@Develop.com');
    await page.getByPlaceholder('Password').fill('p@ssw0rd');
    
    // await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();
    // await page.getByText('Login').click();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByText('DevWa02')).toBeVisible();
  });

  test('Verify that \'ACCOUNT DELETED!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill('DevWa02@Develop.com');
    await page.getByPlaceholder('Password').fill('p@ssw0rd');
    
    // await page.locator('//*[@id="form"]/div/div/div[3]/div/form/button').click();
    // await page.getByText('Login').click();
    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.getByText('Delete Account').click();
    await expect(page.getByText('Account Deleted!')).toBeVisible();
  });
});
