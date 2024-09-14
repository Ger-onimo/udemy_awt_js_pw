# udemy_awt_js_pw

UDEMY COURSE:
Automated Web Testing with JavaScript and Playwright: https://www.udemy.com/course/automated-web-testing/learn/lecture/35748862#questions/19203146

RESOURCES
The Shopping Store Website runs from the following file:

- shopping-store-mac-amd64

  > go to where it's been downloaded, or moved to if moved from the download folder
  > double click on it
  > OR

  - to run from the terminal (use mac terminal) for zsh (the shell I use), follow this instruction:
    "Once your script is saved, you will need to make it executable by running the command “chmod +x [scriptname]” in the terminal. To run the script, you can use the terminal command “./[scriptname]”"

  

  - WORK mac:
    > chmod +x shopping-store-mac-arm64
    > ~ /Users/gerry.waterston/Learning/Playwright/Udemy-Playwright/code/udemy_awt_js_pw/./shopping-store-mac-arm64

  - PERSONAL mac:
    > chmod +x shopping-store-mac-amd64
    > ~ /Users/gerrywaterston/Learning/Playwright/Udemy-Playwright/code/udemy_awt_js_pw/./shopping-store-mac-amd64

WEBSITE URL:

- localhost:2221

NODE:

> Download latest node.js from: https://nodejs.org/en

- Choose the LTS option

VISUAL STUDI CODE:

- Download VS code: https://code.visualstudio.com/download

Command to run a test:

> npm run test - or - npm test

Quit command:

> ctrl c

Casing examples:

- Folders > Lowercase, hyphen between each word
- page-objects folder files/classes > Pascal Case e.g. ProductPage.js
- tests folder files > Snake Case > e.g. product_page_add_item.spec.js
- methods and variables > Camel Case > e.g. productPage

UNIQUE EMAILS & PASSWORDS
Add UUID generator to generate unique IDs for email addresses and passwords:

- https://www.npmjs.com/package/uuid
- Note the command as npm install uuid. In practise use:
  > npm install --save uuid
- The course uses a specific/fixed version, so adds in @9.0.0 - probs use latest on new projects.
