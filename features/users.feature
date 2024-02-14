@users
Feature: Users


    Scenario Outline: As an admin, I can view created users to check their names and access their profiles

        Given I am on the "hovers" page
        When I hover on user <id>
        Then I should see its name: user<id>
        And I should see view profile link for user <id>

        Examples:
            | id |
            | 1  |
            | 2  |
            | 3  |
