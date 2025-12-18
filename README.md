# Elysian Bites - A Roman Culinary Experience

This is a Next.js project built in Firebase Studio.

## How to run this project locally

To start the development server, run the following commands in the terminal:

```bash
npm install
npm run dev
```

## How to transfer this code to your local machine

The best way to get this code from the Firebase Studio environment to your local computer is by using Git and a service like GitHub.

### Step 1: Set up a Git repository

1.  **Initialize Git in this project:**
    Open the terminal in Firebase Studio and run these commands to set up your name and email (only needs to be done once per environment).
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    ```

2.  **Create the first commit:**
    Now, let's save the current state of your project.
    ```bash
    git init -b main
    git add .
    git commit -m "Initial commit"
    ```

### Step 2: Create a new repository on GitHub

1.  Go to [GitHub](https://github.com) and log in.
2.  Click the `+` icon in the top right corner and select **"New repository"**.
3.  Give your repository a name (e.g., `elysian-bites`).
4.  Make sure the repository is set to **Private** or **Public** as you prefer.
5.  **Do not** initialize it with a README, .gitignore, or license. It should be completely empty.
6.  Click **"Create repository"**.

### Step 3: Push your code to GitHub

1.  On the new GitHub repository page, you'll see a section titled **"...or push an existing repository from the command line"**. Copy the two lines of commands. They will look something like this:

    ```bash
    git remote add origin https://github.com/your-username/your-repo-name.git
    git push -u origin main
    ```

2.  Run those two commands in the Firebase Studio terminal. This will upload all your project files to your new GitHub repository.

### Step 4: Clone the repository to your local machine

1.  On your local computer, open your terminal or command prompt.
2.  Navigate to the directory where you want to store the project.
3.  Go back to your GitHub repository page and click the green **"<> Code"** button. Copy the HTTPS URL.
4.  Run the `git clone` command with the URL you just copied:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

That's it! The entire project is now on your local machine. You can open it in your favorite code editor, run `npm install`, and then `npm run dev` to start the local server.