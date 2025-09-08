import { test, expect } from '@playwright/test';

test.describe('Logout User', () => {

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

  test('Verify that \'Logged in as username!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill('DevWa01@Develop.com');
    await page.getByPlaceholder('Password').fill('p@ssw0rd');
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByText('DevWa01')).toBeVisible();
  });

  test('Verify that user is navigated to login page', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill('DevWa01@Develop.com');
    await page.getByPlaceholder('Password').fill('p@ssw0rd');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a/i').click();
    
    await expect(page.getByText(' Signup / Login')).toBeVisible();
  });
});
