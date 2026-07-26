<div align="center">

<img src="public/assets/logo1.png" alt="Octal Logo" width="220"/>

# 🚗 Octal — Car Price Estimation System

**A smart platform for estimating the market value of vehicles, built to support insurance underwriting, policy pricing, and claims settlement in the Egyptian market**

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

[Overview](#-overview) •
[Features](#-features) •
[Screenshots](#-screenshots) •
[Tech Stack](#️-tech-stack) •
[Getting Started](#-getting-started) •
[Project Structure](#-project-structure) •
[Team](#-team)

</div>

---

## 📖 Overview

**Octal** is an interactive web platform that gives customers and insurance brokers an **instant, reliable estimate of a vehicle's market value**, based on its technical and commercial specifications.

The system simplifies the initial vehicle appraisal process and supports:

- 🛡️ **Comprehensive insurance** operations and premium calculation
- 📝 **Policy underwriting**
- 💰 **Claims settlement**
- ⚡ Faster preliminary appraisals without an immediate field inspection
- 📏 Standardized pricing criteria across all branches and points of sale

The **frontend** is built with **Angular 22**, and it connects to a **FastAPI** backend pricing engine powered by a machine learning model trained on Egyptian used-car market data.

---

## ✨ Features

### 🔢 Search by Vehicle Specifications
The user selects **9 vehicle data points** through interactive, cascading dropdowns:

| # | Field |
|---|---|
| 1 | Model Year |
| 2 | Make |
| 3 | Model |
| 4 | Trim |
| 5 | Body Type |
| 6 | Engine Capacity |
| 7 | Transmission |
| 8 | Fuel Type |
| 9 | Drivetrain + Mileage |

Once all fields are filled, the app sends the data to the linear pricing model (`/predict/linear`) and displays the estimated price in EGP, converted using the live USD exchange rate.

### 🔍 Search by VIN
Lets users enter a **Vehicle Identification Number (VIN)** along with trim, transmission, and mileage. The system automatically fetches the vehicle's details and calculates the estimated price via `/predict/from-vin` — with automatic VIN format validation (17 characters, excluding I, O, Q).

### 📊 Admin Dashboard
A protected page (secured with an `X-API-KEY`) that displays the system's **operations log**, including:
- Filtering by operation type (VIN / Linear) and success status
- Search by date
- Quick stats (total operations, success rate, failed operations)

### 💵 Automatic Exchange Rate Updates
The app connects to the [Frankfurter API](https://frankfurter.dev/) to fetch the live USD → EGP exchange rate, automatically converting model predictions (trained in USD) into Egyptian Pounds.

### 🌐 Additional Pages
- **About**: A detailed explanation of the system's methodology and goals
- **Team**: Introduces the team members and their roles

---

## 🖼️ Screenshots

> Add real screenshots of the app here to document the main screens (home page, VIN search, admin dashboard).

```
docs/screenshots/
├── home.png
├── vin-search.png
└── dashboard.png
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Angular 22** | Core framework (Standalone Components + Signals) |
| **TypeScript** | Programming language |
| **RxJS** | Handling async HTTP requests |
| **Bootstrap 5** | Styling and responsive layout |
| **Font Awesome / Bootstrap Icons** | Icons |
| **Vitest** | Unit testing |

### Backend — separate repository
| Technology | Purpose |
|---|---|
| **FastAPI** | API server |
| **Machine Learning Model** | Linear regression model for price prediction |
| **X-API-KEY Auth** | Protects admin endpoints |

> 🔗 Current API base URL: `https://api-car-prediction-main-a3411d6d.fastapicloud.dev`

---

## 📂 Project Structure

```
Octal/
├── public/
│   └── assets/
│       ├── car_dependency_map.json   # Make/model/spec dependency map
│       ├── logo1.png / logo2.png
│       └── ...
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home-padge/           # Home page
│   │   │   ├── main-head/            # Spec-based search form
│   │   │   ├── car-evaluation/       # Displays the estimation result
│   │   │   ├── searchByVin/          # VIN-based search
│   │   │   │   ├── by-vin-padge/
│   │   │   │   ├── by-vine-inputs/
│   │   │   │   └── by-vine-details/
│   │   │   ├── data/                 # Admin dashboard
│   │   │   │   ├── login-form/
│   │   │   │   ├── opreations/       # Operations log table
│   │   │   │   └── data-page/
│   │   │   ├── dash-board/
│   │   │   ├── about/                # About page
│   │   │   ├── team/                 # Team page
│   │   │   ├── nav-bar/
│   │   │   ├── upper-head/
│   │   │   └── footer/
│   │   ├── services/
│   │   │   ├── CarsService.service.ts        # Fetches the car dependency map
│   │   │   ├── sentYoModel.service.ts         # Sends data to the pricing model
│   │   │   ├── carDetailsInVin.service.ts     # VIN-based pricing
│   │   │   ├── dollarPrice.service.ts         # USD exchange rate
│   │   │   └── years.service.ts               # Model year list
│   │   ├── app.routes.ts
│   │   └── app.ts
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (a version compatible with Angular 22)
- npm 11+
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AbdelrhmanAboelfadl111/Octal.git
cd Octal

# 2. Install dependencies
npm install

# 3. Run the local dev server
npm start
# or
ng serve
```

Once running, open your browser at:

```
http://localhost:4200
```

The app will automatically reload whenever you modify a source file.

### Other Useful Commands

```bash
# Production build
ng build

# Run unit tests with Vitest
ng test

# Generate a new component
ng generate component component-name
```

---

## 🔌 API Endpoints

| Purpose | Method | Path |
|---|---|---|
| Price by specifications | `POST` | `/predict/linear` |
| Price by VIN | `POST` | `/predict/from-vin` |
| Operations log (Admin) | `GET` | `/logs` — requires `X-API-KEY` |

---

## 👥 Team & Contributions

Octal was developed as a collaborative, multidisciplinary project, bringing together frontend development, backend engineering, artificial intelligence, and data analysis.

### Abdelrhman Abo Elfadl — Frontend Developer
- Led and developed the complete frontend architecture of the Octal platform using Angular and TypeScript.
- Designed and implemented the application's user interface and responsive layouts.
- Built reusable and modular Angular components to maintain a scalable and maintainable codebase.
- Developed and integrated Angular Services for handling application logic, data management, and communication with backend APIs.
- Implemented and configured the application's routing and navigation system using Angular Router.
- Managed frontend data flow and API integration between the client-side application and backend services.
- Implemented loading states, error handling, and user feedback mechanisms to improve the overall user experience.
- Ensured the application was fully responsive and optimized across different screen sizes and devices.
- Worked on frontend performance, code organization, and overall application structure.
- Integrated the frontend with the backend and AI-powered services to provide a seamless end-to-end user experience.


### Eyad — Backend Developer & AI Engineer
- Contributed to the development of the backend architecture and supporting services.
- Worked on the integration of Artificial Intelligence capabilities into the Octal platform.
- Developed and integrated AI-powered functionality and model-related services.
- Worked on connecting AI components with the backend infrastructure and frontend application.
- Contributed to data processing and the overall AI pipeline to ensure smooth interaction between the platform's different layers.


### Khaled — Data Analyst
- Responsible for the data analysis aspects of the Octal project.
- Analyzed and interpreted project-related datasets to extract meaningful insights.
- Prepared and processed data to support the project's analytical and AI-related requirements.
- Contributed to identifying patterns and trends within the available data.
- Supported the technical team with data-driven insights that helped improve the project's overall functionality and decision-making process.


### Seif — Backend Developer
- Developed and maintained the backend infrastructure supporting the Octal platform.
- Designed and implemented backend APIs required for communication with the Angular frontend.
- Handled server-side application logic and data processing.
- Managed the integration between backend services and the application's data sources.
- Ensured reliable communication between the frontend and backend layers.



---

## 🤝 Contributing

Contributions are welcome! To add an improvement or fix a bug:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private — all rights reserved to the Octal team, unless a different license is specified later.

---

<div align="center">

Made with ❤️ by the **Octal Team**

</div>
