module.exports = {
	//start test here. FORMAT WILL BE;
	//<title of test>: function();

	"Testing iService website" : function(test){//the test command hold the dalekjs API
		test.open("http://coreproj.azurewebsites.net/index.php/IService_pages/login")    //first step: opening the website with the function .open() passing the string of the website url as a parameter
		.waitForElement('img')
		//.assert.exists('a.dropdown-toggle')
		.assert.text('h3', 'LOG IN')
		.assert.exists('input#email')
		.assert.exists('input#password')
		.screenshot("lib/screenies/loginPage.png")
		.type('#email', 'brian@mail.com')
		.type('#password', 'asdf')
		.click('button#login_button')
		.wait(10000)
		.screenshot("lib/screenies/userHome.png")
		.assert.exists('h3', 'My Devices')
		// .click('.dropdown-toggle')
		// .click('ul.dropdown-menu>li>a:first-child')
		// .wait(5000)
		// .assert.exists('h3', 'Change Password')
		// .screenshot("lib/screenies/changePass.png")
		// .back()
		// .wait(5000)
		// .click('a[href="http://coreproj.azurewebsites.net/index.php/IService_pages/MyProfile"]')
		// .waitForElement('img')
		// .assert.exists('h3', 'My Profile')
		// .screenshot("lib/screenies/MyProfile.png")
		// .click('a[href="http://coreproj.azurewebsites.net/index.php/IService_pages/Messages"]')
		// .waitForElement('img')
		// .assert.text('h3', 'Messages')
		// .screenshot("lib/screenies/Messages.png")
		.done()     //End the test with the .done() function
	}
}