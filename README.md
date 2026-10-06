# Work Requirement 2 PRO2001


## How to run the app

- Clone the repository using URL or download ZIP file: https://github.com/lusarlo/Work_Requirement_2_PRO2001

- Install dependecies on terminal: ```npm install```

- Start development server: ```npm run dev```

## Tools Used

- Visual Studio Code
- React
- TypeScript
- Vite

## Implementation

On the Settings page, you can choose a season and an emoji. The Preview page
then shows “Welcome to [season]” with your chosen emoji and a background color
for that season.

The `Main` component uses the `useStateObject` hook to store your choices and
shares them with both pages using React Router's `Outlet`. When you change a
choice in Settings, the Preview updates. Your choices remain selected as you
move between pages until you change them.