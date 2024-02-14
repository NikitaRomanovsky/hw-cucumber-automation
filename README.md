# hw-cucumber-automation

This project covers 5 test cases.  
For all test cases a proper gherkin story is written.  
Which then are automated using WDIO.  
  
To make project work run the following commands after clonning the repo:  
- yarn init  
- yarn install  
  
Each feature file has respective @tag to run a specific test case.  
To run a test case with the tag, use the following command (put tag instead of tagName):  
- yarn test "@tagName"  
  
To run all test cases simultaneously, use the following command:  
- yarn wdio  

It is expected that all tests are passed (green).   