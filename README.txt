# Advanced Tax Calculator

## Overview
This advanced tax calculator is a web application that calculates tax based on user's income, deductions, and age group. It incorporates specific tax rules for different age groups and income thresholds.

## Features
- Input fields for income and deductions with error validation.
- A dropdown menu for selecting the age group.
- Dynamic tax calculation based on age and income.
- Error icons with tooltips for input validation.
- A modal window that displays the calculated tax.

## Technologies Used
- HTML
- CSS
- JavaScript

## Setup
Clone the GitHub repository and open the `index.html` file in a web browser to run the project locally.

## Usage
1. Enter your income in the income field.
2. Enter any deductions in the deductions field.
3. Select your age group from the dropdown menu.
4. Click on the 'Calculate' button to perform the tax calculation.
5. If there are no input errors, a modal will display your calculated tax.
6. Close the modal by clicking the '×' button.

## Tax Calculation Rules
- Income under ₹8 Lakhs (after deductions) is not taxed.
- Income over ₹8 Lakhs is taxed at:
    - 30% for age < 40
    - 40% for age ≥ 40 & < 60
    - 10% for age ≥ 60
- Example: Age = 34, Income = ₹40 Lakhs, no deductions, tax = 30% of (₹40 Lakhs - ₹8 Lakhs) = ₹9.6 Lakhs

## Input Validation
- The calculator does not restrict the user from entering incorrect values.
- Error icons appear next to the input fields if invalid data is entered.
- Hovering over the error icon displays the error message.
- The age group field is mandatory; an error icon appears if it is not selected.

## Contributing
Contributions are welcome. Please open an issue to discuss your ideas or submit a pull request.

## License
This project is open source and available under the MIT License.
