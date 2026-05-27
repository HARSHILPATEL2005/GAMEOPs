# GAMEOPZ - Gaming Review Platform

A comprehensive gaming review platform where gamers can discover, review, and discuss video games. Built with modern web technologies for scalability and performance.

## Features

- **Game Database**: Browse thousands of games with detailed information
- **User Reviews & Ratings**: Submit and read detailed game reviews with 1-5 star ratings
- **Community Discussions**: Forum-style discussions for each game
- **User Profiles**: Track your reviews, favorite games, and follow other gamers
- **Advanced Search & Filtering**: Find games by genre, platform, release year, rating
- **Admin Dashboard**: Manage games, users, and content moderation
- **Responsive Design**: Mobile-friendly interface
- **Real-time Notifications**: Get updates on replies to your reviews

## Tech Stack

### Frontend
- **React 18+**: Modern UI library
- **Next.js**: Server-side rendering and optimization
- **TailwindCSS**: Utility-first styling
- **Redux Toolkit**: State management
- **Axios**: HTTP client

### Backend
- **Node.js + Express**: RESTful API server
- **MongoDB**: NoSQL database for flexible data structure
- **JWT**: Secure authentication
- **Mongoose**: ODM for MongoDB
- **Multer**: File upload handling for game covers

### DevOps & Tools
- **Docker**: Containerization
- **Jest**: Testing framework
- **ESLint & Prettier**: Code quality
- **GitHub Actions**: CI/CD pipeline

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB 4.4+
- Docker (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/HARSHILPATEL2005/GAMEOPs.git
cd GAMEOPs
```

2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000` and backend at `http://localhost:5000`

### Using Docker
```bash
docker-compose up
```

## License

MIT License - see LICENSE file for details

---

**Happy Gaming & Reviewing!** 🎮⭐
