declare global {
	namespace WebdriverIO {
		interface Browser {
			HoverMouseOnElement: (locator: string) => Promise<void>;
			VerifyElementExisting: (locator: string) => Promise<void>;
			ClickOnElement: (locator: string) => Promise<void>;
			VerifyElementHasText: (locator: string, text: string) => Promise<void>;
			VerifyElementContainsText: (
				locator: string,
				text: string
			) => Promise<void>;
			VerifyTextElementIsLink: (locator: string, link: string) => Promise<void>;
			VerifyElementNotExisting: (locator: string) => Promise<void>;
			VerifyCheckboxIsSelected: (locator: string) => Promise<void>;
			VerifyCheckboxIsNotSelected: (locator: string) => Promise<void>;
			TypeText: (locator: string, text: string) => Promise<void>;
		}
	}
}

export {};
