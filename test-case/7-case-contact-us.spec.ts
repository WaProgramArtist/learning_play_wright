import { test, expect } from '@playwright/test';

test.describe('Contact Us Form', () => {

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://www.automationexercise.com');
  });

  // test.afterEach(async ({ page }) => {
  //   await page.close();
  // });

  test('Verify that home page is visible successfully', async ({ page }) => {
    // await expect(page).toHaveURL('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');
  });

  test('Verify \'GET IN TOUCH\' is visible', async ({ page }) => {
    await page.getByText(' Contact us').click();
    
    await expect(page.getByText('Get In Touch')).toBeVisible();
  });

  test.skip('Verify success message \'Success! Your details have been submitted successfully.\' is visible', async ({ page }) => {
    await page.getByText(' Contact us').click();
    
    const txtUser = 'DevWa01';
    await page.getByPlaceholder('Name').fill(txtUser);
    await page.locator('//*[@id="contact-us-form"]/div[2]/input').fill('DevWa01@Develop.com');
    await page.getByPlaceholder('Subject').fill(`Test Menu Contact us by ${txtUser}`);
    await page.locator('//*[@id="message"]').fill('Test Menu Contact us');
    // Select one file
    // await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

    // await page.getByRole('button', { name: 'Submit' }).click();
    await page.locator('//*[@id="contact-us-form"]/div[6]/input').click();

    page.on('dialog', async (dialog) => {
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Press OK to proceed!");
      await dialog.accept();
      // dialog.dismiss(); 
    });    
    
    // await expect(page.getByText('Success! Your details have been submitted successfully.')).toBeVisible();
  });
});
