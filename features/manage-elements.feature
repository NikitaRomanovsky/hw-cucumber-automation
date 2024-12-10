@elements
Feature: Manage elements

  Background:
    Given I am on the "add_remove_elements/" page

  Example: Add elements
    When I click on Add Element button
    Then I should see new elements with Delete button

  Example: Remove elements
    When I click on Add Element button
    And I click on appeared Delete button
    Then I should not see any created element

