interface ExpectedLocators {
	addElementButton: string;
	deleteElementButton: string;
	checkboxElement: string;
	inputField: string;
	lastEneteredKeyResult: string;
	usernameField: string;
	passwordField: string;
	loginButton: string;
	flashMessage: string;
	userImage: string;
	userPersonalInfo: string;
	userViewProfileLink: string;
}

export const EXPECTED_LOCATORS: ExpectedLocators = {
	addElementButton: "(//div[@class='example']/button)[1]",
	deleteElementButton:
		"(//div[@class='example']//button[@class='added-manually'])",
	checkboxElement: "//form[@id='checkboxes']/input",
	inputField: "//*[@id='target']",
	lastEneteredKeyResult: "//*[@id='result']",
	usernameField: "//*[@id='username']",
	passwordField: "//*[@id='password']",
	loginButton: "//*[@class='radius']",
	flashMessage: "//div[@id='flash']",
	userImage: "(//*[@class='figure'])",
	userPersonalInfo: "(//*[@class='figcaption']/h5)",
	userViewProfileLink: "(//*[@class='figcaption']/a)",
};
