@keys
Feature: Keys


  Scenario Outline: As a user, I can see the message with last pressed keyboard key

    Given I am on the "key_presses?" page
    When I enter "<word>" into input field
    Then I should see a last pressed key - <key>

    Examples:
      | word      | key   |
      | dog       | G     |
      | big house | E     |
      | .;/       | SLASH |