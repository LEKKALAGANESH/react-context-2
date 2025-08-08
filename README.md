# React Context API - Dynamic Layout Configuration 🎨

A React application demonstrating advanced usage of the Context API for managing dynamic layout configurations. This project showcases how to create a flexible, customizable layout system using React Context and Consumer patterns.

## 🌟 Project Overview

This application implements a dynamic layout system where users can toggle different sections of the page (content, left navbar, right navbar) in real-time. It serves as an excellent example of React Context API usage for state management across components without prop drilling.

## 🚀 Features

- **Dynamic Layout Control**: Toggle visibility of content and navigation sections
- **Context API Implementation**: Efficient state management using React Context
- **Real-time Updates**: Instant UI updates without page refresh
- **Responsive Design**: Clean and modern UI with CSS styling
- **Component Architecture**: Well-structured component hierarchy

## 🛠️ Technology Stack

- **React.js** - Frontend framework
- **React Context API** - State management
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
react-context-2/
├── public/
├── src/
│   ├── components/
│   │   ├── Body/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── ConfigurationController/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Footer/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Header/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   └── Layout/
│   │       ├── index.js
│   │       └── index.css
│   ├── context/
│   │   └── ConfigurationContext.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── Work Images/
└── README.md
```

## 🎯 Context API Implementation

### ConfigurationContext
The heart of this application is the `ConfigurationContext` which manages:
- `showContent`: Controls visibility of main content
- `showLeftNavbar`: Controls visibility of left navigation
- `showRightNavbar`: Controls visibility of right sidebar
- Toggle functions for each section

### State Management Flow
```
App.js (Provider) → ConfigurationContext → Consumer Components
```

## 🖥️ Components Overview

### 1. ConfigurationController
- **Purpose**: Control panel for toggling layout sections
- **Features**: Checkbox controls for each layout section
- **Location**: Top of the application

### 2. Layout Component
- **Purpose**: Main layout container
- **Structure**: Houses Header, Body, and Footer components
- **Styling**: Responsive flexbox layout

### 3. Body Component
- **Purpose**: Main content area with conditional rendering
- **Sections**:
  - Left Navbar: Navigation menu items
  - Content: Main content area
  - Right Navbar: Advertisement placeholders

### 4. Header & Footer
- **Purpose**: Consistent page structure elements
- **Styling**: Clean, modern design

## 🎮 Usage Guide

### Running the Application

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd react-context-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Using the Application

1. **Toggle Layout Sections**: Use the checkboxes in the Configuration Controller
2. **Real-time Updates**: See changes instantly as you toggle options
3. **Responsive Design**: Works on desktop and mobile devices

## 📸 Work Images

### Application Screenshots

| Configuration | Screenshot |
|---------------|------------|
| **Show All** | ![Show All](./Work%20Images/ShowAll.png) |
| **Show Content Only** | ![Show Content](./Work%20Images/ShowContent.png) |
| **Show Left & Right Navbar** | ![Show Left & Right Navbar](./Work%20Images/ShowLeftAndRightNavbar.png) |
| **Show Left Navbar Only** | ![Show Left Navbar](./Work%20Images/ShowLeftNavbar.png) |
| **Show Right Navbar Only** | ![Show Right Navbar](./Work%20Images/ShowRightNavbar.png) |
| **Hide All** | ![Hide All](./Work%20Images/UnShowAll.png) |

## 🔍 Key Learning Points

### Context API Benefits
- **Avoid Prop Drilling**: No need to pass props through multiple levels
- **Global State**: Shared state across all components
- **Performance**: Efficient re-rendering only when necessary
- **Scalability**: Easy to extend with additional features

### Best Practices Demonstrated
- **Separation of Concerns**: Clear separation between state management and UI
- **Component Reusability**: Modular components that can be reused
- **Clean Architecture**: Well-organized file structure
- **Responsive Design**: Mobile-first approach

## 🚀 Future Enhancements

- [ ] Add theme switching (light/dark mode)
- [ ] Implement layout presets
- [ ] Add animation transitions
- [ ] Save user preferences to localStorage
- [ ] Add drag-and-drop layout customization
- [ ] Implement responsive breakpoints

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React Team for the amazing Context API
- CSS3 for styling capabilities
- The open-source community for inspiration

---

**Happy Coding!** 🎉

*This project demonstrates the power of React Context API for creating dynamic, interactive user interfaces with minimal prop drilling and maximum flexibility.*
