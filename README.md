
🛠️ React Skip Selector UI

A simple React component-based interface for selecting skip sizes and navigating between different steps in a multi-step flow, built with React and Redux.

📁 Project Structure
Components
Header.jsx
Displays a top navigation bar with step buttons.
(I used custom router )

Uses Redux to track the current step (currentIndex) in the flow.

Buttons:

Are active up to the current step.

Allow backward navigation only.

Visually reflect current progress via conditional class names.

Main.jsx
Displays the main content of the page.

Shows a title and a list of selectable skip items.

Each skip item is rendered using the SkipItem component.

Data is sourced from SkipData (imported from a separate data file).

🧠 Key Technologies
React: UI library for rendering components.

Redux: Global state management (used here for step/page tracking).

Tailwind CSS or Custom CSS: Styling is handled through class names (header.css and other custom classes).

🔄 Navigation Logic
The current page index is stored in Redux (state.page.currentIndex).

Clicking on a button:

Will only dispatch an action to update the page if the button is from a previous step.

This is useful for preventing accidental forward navigation unless explicitly allowed.





