# CountDown_Timer
A timer website showing the days, hours, minutes and seconds to that particular day
# Coming Soon Website

A modern, responsive landing page that announces an upcoming website launch with a real-time countdown timer.

## Features

- **Countdown Timer**: Displays days, hours, minutes, and seconds until launch
- **Animated Rocket**: Continuous rocket animation that moves across the screen
- **Responsive Design**: Clean, centered layout optimized for visibility
- **Modern UI**: Uses Poppins font and a chocolate-colored accent for the "Launching" text
- **Interactive Button**: "Learn More" button with a triangle icon for user engagement

## Project Structure

```
Coming_Soon_Web_PROJECT-1/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Countdown timer logic
├── logo.png        # Website logo (required)
├── background.png  # Full-screen background image (required)
├── triangle.png    # Icon for the "Learn More" button (required)
└── rocket.png      # Rocket animation image (required)
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Images files: `logo.png`, `background.png`, `triangle.png`, `rocket.png`

### Installation

1. Clone or download this project to your desired location
2. Place all image files in the project directory:
   - `logo.png` - Your website logo
   - `background.png` - Full-screen background image
   - `triangle.png` - Small icon for the button
   - `rocket.png` - Animated rocket image
3. Open `index.html` in your web browser

## How It Works

### Countdown Timer
The countdown timer in `script.js` calculates the time remaining until the launch date (currently set to October 20, 2025) and updates every second:

- Extracts days, hours, minutes, and seconds from the time difference
- Updates the DOM elements with the calculated values
- Console logs the values for debugging purposes

### Animations
- **Rocket Animation**: Continuously moves from bottom to top with opacity fade-in effect
- Uses CSS `@keyframes` for smooth animation over 2 seconds, repeating infinitely

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (Vanilla)** - Countdown timer functionality

## Customization

### Change Launch Date
Edit the date in `script.js`:
```javascript
let setDate = new Date("2025-10-20 00:00:00").getTime();
```
Replace `"2025-10-20 00:00:00"` with your desired launch date and time.

### Modify Colors
Update the CSS variables in `style.css`:
- Change `.content h1 span` color to modify the "Launching" text color
- Update `.container` background-image path if needed

### Customize Text
Edit the text in `index.html`:
- Change the "We're Launching Soon" heading
- Update the "Website is under Maintenance" message
- Modify the "Learn More" button text

## Notes

- The countdown currently targets October 20, 2025 - update this date to your actual launch date
- Ensure all image files are present in the project directory
- The background image uses a relative path (`../background.png`) - adjust if your file structure differs
- Browser console logs countdown values for debugging; remove `console.log()` statements for production

## Browser Compatibility

Works on all modern browsers supporting:
- CSS3 Animations
- ES6 JavaScript (setInterval, getTime, etc.)
- CSS Flexbox

## Future Enhancements

- Add email subscription form
- Implement responsive mobile design improvements
- Add sound effects for countdown milestones
- Create a database connection for dynamic launch date updates
- Add more interactive animations
