@checkbox
Feature: Checkbox

  Scenario Outline: As a user, I can check or uncheck boxes

    Given I am on the "checkboxes" page
    When I click on <state> box
    Then I should see checkbox to be <status>

    Examples:
      | state     | status        |
      | unchecked | checkmarked   |
      | checked   | uncheckmarked |