# 📈 StockNova

<div align="center">

![StockNova Logo](https://img.shields.io/badge/StockNova-Trading%20Platform-blue?style=for-the-badge&logo=chart-line)

**A Modern Full-Stack Stock Trading Platform**

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)

[🚀 Live Demo](https://stocknova-frontend.onrender.com) | [📊 Dashboard](https://stocknova-dashboard.onrender.com) | [📖 Documentation](#documentation)

</div>

---

## 🌟 Overview

StockNova is a comprehensive, modern stock trading platform built with the MERN stack. It provides users with a seamless experience for managing their investments, tracking portfolios, and executing trades through an intuitive interface.

### ✨ Key Features

- 🎯 **Real-time Portfolio Management** - Track holdings, positions, and P&L in real-time
- 📊 **Advanced Charts & Visualization** - Interactive charts powered by Chart.js
- 💰 **Fund Management** - Instant, zero-cost fund transfers with UPI integration
- 🛡️ **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- ⚡ **High Performance** - Fast, modern React applications with optimized backend APIs
- 🔄 **Live Market Data** - Real-time stock prices and market information
- 📈 **Trading Dashboard** - Professional-grade trading interface

---

## 🏗️ Architecture

StockNova follows a modern microservices architecture with three main components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Dashboard     │    │   Backend API   │
│  (Landing Page) │    │ (Trading App)   │    │    (Server)     │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • Marketing     │    │ • Portfolio Mgmt│    │ • Authentication│
│ • User Onboard  │    │ • Trading       │    │ • Data APIs     │
│ • Product Info  │    │ • Charts        │    │ • Order Mgmt    │
│ • Responsive UI │    │ • Fund Transfer │    │ • Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 │
                         ┌───────▼────────┐
                         │    MongoDB     │
                         │   Database     │
                         └────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend Technologies
- **React** - Modern UI library with hooks and functional components
- **React Router** - Client-side routing and navigation
- **Axios** - HTTP client for API communication
- **Bootstrap/CSS** - Responsive styling and components
- **React Toastify** - Elegant notifications and alerts

### Dashboard Technologies
- **React** - Component-based UI development
- **Material-UI** - Professional UI components and theming
- **Chart.js & React-Chart.js-2** - Advanced data visualization
- **React Router** - Single-page application routing

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - Secure token-based authentication
- **bcrypt** - Password hashing and security
- **CORS** - Cross-origin resource sharing

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sharibraza/StockNova.git
cd StockNova
```

2. **Setup Backend**
```bash
cd Backend
npm install

# Create .env file
echo "MONGO_URL=your_mongodb_connection_string
PORT=3002
JWT_SECRET=your_jwt_secret" > .env

# Start the backend server
npm start
```

3. **Setup Frontend (Landing Page)**
```bash
cd ../frontend
npm install

# Start the frontend development server
npm start
```

4. **Setup Dashboard**
```bash
cd ../dashboard
npm install

# Start the dashboard development server
npm start
```

### 🌍 Environment Variables

Create a `.env` file in the Backend directory:

```env
# Database
MONGO_URL=mongodb://localhost:27017/stocknova
# or use MongoDB Atlas
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/stocknova

# Server Configuration
PORT=3002
NODE_ENV=development

# Authentication
JWT_SECRET=your_super_secure_jwt_secret

# Frontend URLs (for CORS)
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
```

---

## 📱 Application Components

### 1. Frontend (Landing Page)
- **Location**: `/frontend`
- **Purpose**: Marketing website and user onboarding
- **Features**:
  - Hero section with call-to-action
  - Product showcase and features
  - Pricing information
  - User registration and login
  - About and support pages

### 2. Dashboard (Trading Application)
- **Location**: `/dashboard`
- **Purpose**: Core trading and portfolio management
- **Features**:
  - Real-time portfolio summary
  - Holdings and positions tracking
  - Order management and execution
  - Fund transfers and account management
  - Interactive charts and analytics
  - Watchlist functionality

### 3. Backend API
- **Location**: `/Backend`
- **Purpose**: Data management and business logic
- **Endpoints**:
  - `/allholdings` - Get user holdings
  - `/allpositions` - Get trading positions
  - `/allorders` - Get order history
  - `/newOrder` - Place new orders
  - Authentication routes for signup/login

---

## 🔧 Development

### Running in Development Mode

1. **Start all services concurrently**:
```bash
# Terminal 1 - Backend
cd Backend && npm start

# Terminal 2 - Frontend
cd frontend && npm start

# Terminal 3 - Dashboard
cd dashboard && npm start
```

2. **Access the applications**:
- Frontend: http://localhost:3000
- Dashboard: http://localhost:3001
- Backend API: http://localhost:3002

### Building for Production

```bash
# Build Frontend
cd frontend && npm run build

# Build Dashboard
cd dashboard && npm run build

# Backend (no build needed - runs directly)
cd Backend && npm start
```

---

## 📊 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Create new user account |
| POST | `/login` | User authentication |

### Trading Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allholdings` | Retrieve user holdings |
| GET | `/allpositions` | Get trading positions |
| GET | `/allorders` | Fetch order history |
| POST | `/newOrder` | Place a new order |

### Example API Usage

```javascript
// Fetch holdings
const response = await axios.get('/allholdings');
const holdings = response.data;

// Place new order
const orderData = {
  name: "AAPL",
  qty: 10,
  price: 150.00,
  mode: "BUY"
};
await axios.post('/newOrder', orderData);
```

---

## 🎨 Features Showcase

### 📊 Portfolio Management
- **Real-time P&L tracking** - Monitor your investments with live updates
- **Holdings overview** with visual charts and analytics  
- **Position monitoring** - Track your open positions and performance
- **Performance analytics** - Detailed insights into your trading performance

### 💹 Trading Interface
- **Order placement and management** - Execute trades with professional tools
- **Market data integration** - Real-time stock prices and market information
- **Watchlist functionality** - Track your favorite stocks and investments
- **Quick buy/sell actions** - Fast execution with intuitive UI

### 💰 Fund Management
- **UPI integration** for instant, zero-cost fund transfers
- **Account balance tracking** - Monitor available funds and margins
- **Transaction history** - Complete record of all fund movements
- **Margin calculations** - Automatic margin requirements and availability

### 🔐 Security Features
- **JWT-based authentication** - Secure token-based user sessions
- **Password encryption** with bcrypt for maximum security
- **Secure API endpoints** - Protected routes and data validation
- **Session management** - Automatic timeout and security controls

## 📷 Screenshots

> *Screenshots coming soon! The application is live and accessible at the demo links above.*

### Landing Page
- Modern, responsive design showcasing platform features
- Clear call-to-action for user registration
- Product information and pricing details

### Trading Dashboard  
- Real-time portfolio overview with interactive charts
- Professional trading interface with order management
- Comprehensive fund management and transfer capabilities

---

## 🚀 Deployment

The application is deployed on Render:

- **Frontend**: https://stocknova-frontend.onrender.com
- **Dashboard**: https://stocknova-dashboard.onrender.com
- **Backend**: Deployed as a web service

### Deployment Configuration

The backend is configured to accept CORS requests from:
- `https://stocknova-frontend.onrender.com`
- `https://stocknova-dashboard.onrender.com`

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the ISC License. See the package.json files for more details.

---

## 👥 Team

Built with ❤️ by the StockNova team.

---

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Sharibraza/StockNova/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

## 🔮 Future Enhancements

- [ ] Real-time WebSocket integration
- [ ] Advanced charting tools
- [ ] Mobile app development
- [ ] AI-powered investment recommendations
- [ ] Social trading features
- [ ] Advanced order types
- [ ] Multi-currency support

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

[Report Bug](https://github.com/Sharibraza/StockNova/issues) | [Request Feature](https://github.com/Sharibraza/StockNova/issues) | [Ask Question](https://github.com/Sharibraza/StockNova/discussions)

</div>