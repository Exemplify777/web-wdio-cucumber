Feature: Login Functionality

  Scenario Outline: Wrong password login
    Given I am on the login page
    When I enter valid email address "<email>"
    And I enter an invalid password "<password>"
    And I click the login button
    Then I should see the "Incorrect username or password" error message

    Examples:
      | email                | password    |
      | john.doe@example.com | wrongpass   |
      | jane.smith@example.com | pass123   |

  Scenario: Empty email login
    Given I am on the login page
    When I leave the email field empty
    And I enter a valid password "password123"
    And I click the login button
    Then I should see an error message for the email field

  Scenario: Empty password login
    Given I am on the login page
    When I enter a valid email address "john.doe@example.com"
    And I leave the password field empty
    And I click the login button
    Then I should see an error message for the password field

  Scenario: Invalid email format login
    Given I am on the login page
    When I enter an invalid email address "john.doe"
    And I enter a valid password "password123"
    And I click the login button
    Then I should see an error message for the email field

  Scenario: Locked account login
    Given I am on the login page
    When I enter a locked email address "john.doe@example.com"
    And I enter a valid password "password123"
    And I click the login button
    Then I should see an error message for the locked account

  Scenario: Account not activated login
    Given I am on the login page
    When I enter an inactive email address "john.doe@example.com"
    And I enter a valid password "password123"
    And I click the login button
    Then I should see an error message for the inactive account
