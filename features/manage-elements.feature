@elements
Feature: Manage elements

  Background: 
    Given I am on the "add_remove_elements/" page

  Example: Add one element
    When I click on Add Element button
    Then I should see a new element with Delete button

  Example: Remove one element
    When I click on Add Element button
    And I click on appeared Delete button
    Then I should not see any created element

