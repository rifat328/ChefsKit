# Chefs Kit : Hungry ? just Generate A Recipe

This project uses the **Hugging Face Inference API** to suggest recipes based on a list of ingredients provided by the user. It leverages the `Mistral-8x7B-Instruct` model to generate responses formatted in markdown for easy rendering.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Accepts a list of ingredients as input.
- Suggests a recipe based on the provided ingredients.
- Allows for the inclusion of additional ingredients where necessary.
- Outputs responses in markdown format.

---

## Technologies Used

- **React** with Vite bundler
- **Hugging Face Inference API**
- **JavaScript ES6**
- **CSS**

---

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rifat328/ChefsKit.git
   cd chefskit

   ```

2. Install Dependencies Ensure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. Set up Environment Variables

- Add your Hugging Face access token on API_KEY.env:
- copy and paste your api key on this field **your_huggingface_access_token**
  ```env
    VITE_HF_ACCESS_TOKEN_2= your_huggingface_access_token
  ```

4. Start the Development Server
   ```bash
   npm run dev
   ```

## Usage

- on input field type your ingredient list and enter
- enter at least 4 ingredient then
- press Generate Button and wait .
- now Scroll and follow alonge the recipe.

## Project Screen Shoot

![Recipe Example](./ai-generated-response-1.png "A Simple Recipe")
![Recipe Example 2](./ai-generated-response-2.png "A Simple Recipe")

## Error Handling

- HTTP 429: Too Many Requests
- Rate limit errors are logged to the console.
  To mitigate, ensure API calls are spaced out or use a caching mechanism.
- API Token Errors
  Ensure the Hugging Face token in the .env file is valid and active.

## License

- This project is licensed under the GNU GENERAL PUBLIC LICENSE
  Version 3. See the LICENSE file for details.
