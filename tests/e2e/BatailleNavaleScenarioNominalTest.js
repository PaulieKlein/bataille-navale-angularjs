describe('Bataille Naval Scénario Nominal',function(){
	it("lorsque je clique sur New Game alors la page de création d'un nouveau jeu",function(){
		browser.get('http://localhost:3000');
		expect(browser.getLocationAbsUrl()).toEqual('/');
		element(by.linkText('Nouveau jeu')).click();
		expect(browser.getLocationAbsUrl()).toEqual('/new');

		element(by.model('newctrl.game.name')).sendKeys('Nom Game');
		element(by.model('newctrl.game.user1.email')).sendKeys('hubert@gmail.com');
		element(by.buttonText('Créer jeu')).click();
		element(by.linkText('Home')).click();
		expect(browser.getLocationAbsUrl()).toEqual('/');
	});
});