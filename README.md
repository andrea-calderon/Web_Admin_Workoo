# React Project with Atomic Design and Feature-Based Architecture

This project follows the Atomic Design methodology and a feature-based architecture to organize components and functionalities.

## Style Guide

- **Atoms:** Basic reusable components like buttons, input fields, labels.
- **Molecules:** Combinations of atoms to form more complex units like form fields.
- **Organisms:** Combinations of molecules and atoms that form complete sections of the interface like complete forms.
- **Templates:** Page layouts that include organisms and other components.
- **Pages:** Full pages of the application that include templates and other components.

### Directory Structure

The directory structure is organized as follows:
src/
assets/
features/
auth/
atoms/
molecules/
organisms/
templates/
pages/
LoginPage.tsx
RegisterPage.tsx
dashboard/
atoms/
SimpleChart.tsx
molecules/
DashboardPanel.tsx
organisms/
Dashboard.tsx
templates/
pages/
DashboardPage.tsx
components/
atoms/
molecules/
organisms/
templates/
pages/
utils/
services/
hooks/
styles/
App.tsx
index.css
main.tsx
vite-env.d.ts

#### Components

##### Auth Feature

**Atoms**

- **AuthButton.tsx:** Reusable button for authentication actions.

**Molecules**

- **FormField.tsx:** Combination of `Label` and `Input` for forms.

**Organisms**

- **LoginForm.tsx:** Login form.
- **RegisterForm.tsx:** Registration form.

**Pages**

- **LoginPage.tsx:** Login page.
- **RegisterPage.tsx:** Registration page.

##### Dashboard Feature

**Atoms**

- **SimpleChart.tsx:** Simple chart using `recharts`.

**Molecules**

- **DashboardPanel.tsx:** Dashboard panel containing a chart.

**Organisms**

- **Dashboard.tsx:** Dashboard that groups multiple panels.

**Pages**

- **DashboardPage.tsx:** Page displaying the complete dashboard.
