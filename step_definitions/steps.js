const { I } = inject();
// Add in your custom step files
Given('I Login into Evlo time application', async () => {
  // Implement login steps here if needed
  I.amOnPage('https://evlotime-demo.web.app/login');
  I.fillField('Email', 'intern@yopmail.com');
  I.fillField('Password', 'omni@123');
  I.waitForElement('#root > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div > div > button > span.MuiIconButton-label > svg > path', 5);
  I.click('#root > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div > form > div:nth-child(3) > div > div > button > span.MuiIconButton-label > svg > path');
  I.wait(5);
  I.click('button[type="submit"]');
  I.wait(5);
});
// // //profile edit-----------------------------------------------------------------------------------------------------------
Then('I click the Profile',() => {
  I.click({xpath:'//img[@alt="user pic"]'});
   I.wait(5);
   I.click('Profile');
  I.wait(5);
    I.click({xpath:'//body/div[@id="root"]/div[@class="App"]/div[@class="container-fluid"]/main[@class="row"]/div[@class="col-12"]/main/div/div[@class="row"]/div[@class="col"]/div/div[@class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-1okfn8i"]/div[@class="row"]/div[@class="col-md-2"]/img[1]'});
    I.wait(5);
  I.clearField('Company Name*');
  I.fillField('Company Name*','Acrien');
  I.click({xpath:'//div[@id="mui-component-select-Country"]'});
  I.click({xpath:'//li[normalize-space()="USA"]'});
  I.clearField('License Count*');
  I.fillField('License Count*','3');
  I.click({xpath:'//div[@id="businessType"]'});
  I.click({xpath:'//li[normalize-space()="Healthcare service"]'});
  I.wait(5);
 I.clearField('Mobile Number*');
  I.fillField('Mobile Number*','9444328879');
  I.clearField('Alternative Mobile Number');
  I.fillField('Alternative Mobile Number','565454464');
  I.clearField('Monthly Leave Allowance*');
  I.fillField('Monthly Leave Allowance*','3');
  I.click('Update');
  I.wait(10);
});
// //  //manager-------------------------------------------------------------------------------------------------------
 Then('I click ADD Manager',() => {
 I.amOnPage('https://evlotime-demo.web.app/org-dashboard'); 
 I.wait(5);
 I.click('Add Manager');
 I.wait(5);  
   I.fillField('First Name*','seeu');
   I.wait(3);
   I.fillField('Last Name*','sree');
   I.wait(3);
   I.fillField('Email Address*','srinisree@yopmail.com');
   I.wait(3);
   I.click('button[type="submit"]');
   I.wait(10);
 });

//  //Add Client--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 
 Then('I Select Clients Field',() => { 
  I.click({xpath:'//p[normalize-space()="Clients"]'});
  I.wait(3);
  I.click('Add Client');
  I.wait(3);
    I.fillField('Client Name*','mom');
    I.wait(3);
    I.fillField('Email*','woowmummy@yopmail.com');
    I.wait(3);
    I.fillField('Mobile Number*','9889489484');
    I.wait(3);
    I.fillField('Client Address*','TN');
    I.wait(3);
    I.click({xpath:'//div[@id="status"]'});
    I.click({xpath:'//li[normalize-space()="Active"]'});
    I.wait(3);
    I.click('Submit');
    I.wait(10);
  });

// //edit client field-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   Then('I Edit the client field',() => { 
    I.click({xpath:'//p[normalize-space()="Clients"]'});
    I.wait(3);
      I.click({xpath:'//body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/div[1]/img[1]'});
      I.wait(5);
      I.clearField('Client Name*');
      I.fillField('Client Name*','rani');
      I.wait(3);
      I.clearField('Email*');
      I.fillField('Email*','chumaorutry@yopmail.com');
      I.wait(3);
      I.clearField('Mobile Number*');
      I.fillField('Mobile Number*','6546465545');
      I.wait(3);
      I.clearField('Client Address*');
      I.fillField('Client Address*','TN');
      I.wait(3);
      I.click({xpath:'//div[@id="status"]'});
      I.click({xpath:'//li[normalize-space()="Active"]'});
      I.wait(3);
      I.click('Submit');
      I.wait(5);
    });

//   //update privileges------------------------------------------------------------------------------------------------------------------------------------------------------------------
Then('I edits Assign Privileges', async () => {
  I.click({xpath:'//p[normalize-space()="Assign Privileges"]'}); // Assuming 'Assign Privileges' is a link or button
  I.wait(3);
  I.amOnPage('https://evlotime-demo.web.app/view-transfer/'); // Assuming 'Assign Privileges' is a link or button
  I.wait(3);
  I.click({xpath:'/html/body/div[1]/div/div/main/div/div[2]/div/div[2]/div[1]/div[1]/div/div/div[2]/img'}); // Assuming 'Assign Privileges' is a link or button
  I.wait(3);
  I.click({xpath:'//*[@id="root"]/div/div/main/div/div[2]/div/div[2]/form/div[1]/div/div/div/div[8]/span[1]'}); // Assuming 'Assign Privileges' is a link or button
  I.wait(3);
  I.click('Update'); // Assuming 'Assign Privileges' is a link or button
  I.wait(3);
});

// //Delete Privileges-------------------------------------------------------------------------------------------------------------------------------------------------------------

When('user delete the Assign Privileges', async () => {
  I.click({xpath:'//p[normalize-space()="Assign Privileges"]'}); 
  I.wait(3);
  I.click({xpath:'/html/body/div[1]/div/div/main/div/div[2]/div/div[2]/div[1]/div[1]/div/div/div[2]/img[2]'});
  I.wait(5);
  I.click('OK'); 
  I.wait(3);
});

// // //Holiday Calender India----------------------------------------------------------------------------------------------------------------------------------------------
When('user goes to Holiday Calendar', async () => {
  I.click({xpath:'//p[normalize-space()="Holiday Calendar"]'}); 
  I.wait(3);
  I.amOnPage('https://evlotime-demo.web.app/holiday-calendar'); 
  I.wait(3);
});

// // //Holiday Calendar USA----------------------------------------------------------------------------------------------------------------------------------------
Then('user goes to USA Holiday Calendar', async () => {
  I.click({xpath:'//p[normalize-space()="Holiday Calendar"]'}); 
  I.wait(3);
  I.click({xpath:'/html/body/div[1]/div/div/main/div[1]/div[2]/div/div[1]/div/div/div'}); 
  I.wait(3);
  I.click({xpath:'//li[normalize-space()="USA"]'}); 
  I.wait(3);
})

// // // ADD Holiday Calender-----------------------------------------------------------------------------------------------------------------------------------------
Then('user Add Holiday in india Calendar', async () => {
  I.click({xpath:'//p[normalize-space()="Holiday Calendar"]'}); 
  I.wait(3);
  I.click("Add"); 
  I.fillField('Holiday Date*', '05/20/2024');
  I.fillField('Holiday Name*', 'fake leave');
  I.fillField({xpath:'/html/body/div[3]/div/div/div[2]/div/form/div[2]/div/div/input'},"suma oru try");
  I.fillField('About*', 'fake');  
  I.click('Submit');
  I.wait(3);
});

// // //Delete holiday calender----------------------------------------------------------------------------------------------------------------------------------
Then('user should delete the calender', async () => {
  I.amOnPage('https://evlotime-demo.web.app/holiday-calendar'); 
  I.wait(3);
  I.click({xpath:'//p[normalize-space()="Holiday Calendar"]'}); 
  I.wait(3);
  I.amOnPage('https://evlotime-demo.web.app/holiday-calendar'); 
  I.wait(3);
  I.click({xpath:'/html/body/div/div/div/main/div[1]/div[2]/div/div[6]/div/table/tbody/tr[1]/td[4]/div/div[2]/img'});
  I.wait(3);
})

// // //import holiday calendar--------------------------------------------------------------------------------------------------------
Then('user import holiday calendar', async () => {
  I.amOnPage('https://evlotime-demo.web.app/holiday-calendar'); 
  I.wait(3);
  I.click({xpath:'//p[normalize-space()="Holiday Calendar"]'}); 
  I.wait(3);
  I.amOnPage('https://evlotime-demo.web.app/holiday-calendar'); 
  I.wait(3);
  I.click('Import');
  I.wait(3);
});


// // //leave approvals----------------------------------------------------------------------------------------------------------------------------------
Then('user click to leave approval', async () => {
  I.click({xpath:'//p[normalize-space()="Leave Approval"]'}); 
  I.wait(3);
  I.see('Employee Leaves'); 
  I.wait(3); 
  I.click('Pending');
  I.fillField({xpath:'/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/div/form/div/div/input'},'srini');
  I.wait(10);
  I.click('Approved')
  I.fillField({xpath:'/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/div/form/div/div/input'},'srini');
  I.wait(10);
  I.click('Rejected')
  I.fillField({xpath:'/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/div/form/div/div/input'},'srini');
  I.wait(10);
  I.click('Leave balance')
  I.fillField({xpath:'/html/body/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/div/form/div/div/input'},'srini');
  I.wait(10);
});


//Timesheet------------------------------------------------------------------------------------------------------------------------------------------
Then('user click the timesheet', async () => {
   I.click({xpath:'//p[normalize-space()="Timesheet Approvals"]'}); 
  I.wait(3);
I.click('Pending')
I.wait(2)
  I.click('Notify All');
  I.wait(5);
  I.see('These Employees are not yet registered with Evlotime app');
  I.wait(5);
  I.click('Cancel')
  I.click('Approved');
  I.wait(10);
  I.click('Rejected');
  I.wait(10);
});

//invoice
Then('user click the Invoice', async () => {
  I.click({xpath:'//p[normalize-space()="Invoice"]'}); 
  I.wait(10);
 I.click({xpath:'/html/body/div/div/div/main/div/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[8]/a'})
 I.wait(10);
});