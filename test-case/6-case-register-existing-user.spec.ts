import { test, expect } from '@playwright/test';

test.describe('Register User with existing email', () => {

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

  test('Verify that \'Email Address already exist!\' is visible', async ({ page }) => {
    await page.getByText(' Signup / Login').click();
    
    await page.getByPlaceholder('Name').fill('DevWa01');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('DevWa01@Develop.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
  });
});
