
# Habit Tracker Web App

A web application that allows users to create, track, and manage daily habits to build streaks and boost productivity. Track your habits, see your progress, and stay motivated!

## Live Site
[https://habit-tracker-by-aliraj.netlify.app/](https://habit-tracker-by-aliraj.netlify.app/)

---

## Features

- **User Authentication**: Register and login using Email/Password and Google Sign-In.
- **Add Habits**: Users can add habits with title, description, category, reminder time, and an optional image.
- **My Habits Dashboard**: View all your habits in a table with the ability to update, delete, or mark habits complete.
- **Task Completion & Streaks**: Mark habits as completed, automatically update streaks, and see progress instantly.
- **Browse Public Habits**: View habits created by other users with category-based filtering and search functionality.
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop devices.
- **Animations & Interactivity**: Includes Framer Motion animations and Lottie React icons for better user experience.
- **Toast Notifications**: All success and error messages are displayed via SweetAlert2 / Toast, avoiding default browser alerts.
- **Protected Routes**: Add Habit and My Habits pages are private and only accessible to logged-in users.
- **Hero Banner & Featured Habits**: Home page includes a slider, featured habits, and sections highlighting the benefits of habit building.

---

## Pages

1. **Home Page**
   - Hero banner with carousel
   - Featured Habits (6 newest habits)
   - Why Build Habits section
   - How It Works
   - Success Stories

2. **Login / Signup**
   - Email/Password login
   - Google login
   - Form validations for secure passwords

3. **Add Habit** *(Private)*
   - Add habit form with category, reminder time, and optional image upload

4. **My Habits** *(Private)*
   - Table of user habits
   - Update, Delete, Mark Complete options
   - Streak display and progress tracking

5. **Browse Public Habits**
   - Filter by category
   - Search by habit title or keyword
   - See habit details with creator info

6. **Habit Details** *(Private)*
   - View habit title, description, image, category
   - Progress bar for completion
   - Mark Complete button with instant UI update

7. **404 Page**
   - Custom Not Found page

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, DaisyUI, Framer Motion, Lottie React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth (Email/Password + Google)
- **Notifications**: React-Hot-Toast
- **Deployment**: Netlify (Client), Vercel/render.com (Server)

---

## Author

- Md. Ali Raj
- Email: aliraj532ms@gmail.com
- GitHub: [https://github.com/aliraj15dev](https://github.com/aliraj15dev)
