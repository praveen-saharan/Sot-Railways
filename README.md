# Project Setup Instructions

## Frontend Setup

### If you have already cloned the repository:

1. **Checkout the working code:**
  ```bash
  git checkout working-code
  ```

2. **Navigate to the frontend directory:**
  ```bash
  cd frontend
  ```

3. **Install the dependencies (including legacy peer dependencies):**
  ```bash
  npm install --legacy-peer-deps
  ```

4. **Start the frontend development server:**
  ```bash
  npm run dev
  ```

### If you haven't cloned the repository yet:

1. **Clone the repository:**
  ```bash
  git clone https://github.com/praveen-saharan/Railways_Ticketing_System.git
  ```

2. **Navigate to the project directory:**
  ```bash
  cd Railways_Ticketing_System
  ```

3. **Go to the frontend directory:**
  ```bash
  cd frontend
  ```

4. **Install the dependencies:**
  ```bash
  npm install --legacy-peer-deps
  ```

5. **Start the development server:**
  ```bash
  npm run dev
  ```

## Backend Setup

### If you haven't cloned the backend repository yet:

1. **Clone the backend repository:**
  ```bash
  git clone https://github.com/praveen-saharan/Backend.git
  ```

2. **Checkout the working code:**
  ```bash
  git checkout working-code
  ```

### If you’ve already cloned the backend repository:

1. **Checkout the working code:**
  ```bash
  git checkout working-code
  ```

## Database Setup

1. **Open MySQL Workbench and clean your database (if necessary):**

  - **Drop the existing `newdb` database:**
    ```sql
    DROP DATABASE newdb;
    ```

  - **Recreate the empty `newdb` database:**
    ```sql
    CREATE DATABASE newdb;
    ```

2. **If you don’t already have the `newdb` database, simply create it by running:**
  ```sql
  CREATE DATABASE newdb;
  ```

3. **Run your project and then go to the admin section to upload the `train.csv` file.**