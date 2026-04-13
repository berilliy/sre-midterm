# Letterboxd for Music - Backend

A Node.js/Express backend API for a Letterboxd-like application dedicated to reviewing and tracking albums. The frontend integrates with the Last.fm API to fetch album metadata, providing users with a rich experience for discovering music, writing reviews, and seeing what others in the community are listening to.

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: express-validator
- **CORS**: Enabled for frontend integration

### Frontend (React)
- Last.fm API integration for album data and metadata
- Search functionality for albums and artists
- Pagination for browsing reviews and results

## Screenshots

<img width="1908" height="932" alt="Снимок экрана" src="https://github.com/user-attachments/assets/64b3ebdc-e045-4d36-bc1e-08ce738e3f67" />
<img width="1905" height="931" alt="Снимок экрана" src="https://github.com/user-attachments/assets/2addb08b-9924-4cf9-98f6-e22265d193aa" />
<img width="1905" height="924" alt="Снимок экрана" src="https://github.com/user-attachments/assets/52dbf7d6-0055-4bd0-a956-d4843e1700aa" />
<img width="1902" height="930" alt="Снимок экрана" src="https://github.com/user-attachments/assets/aeace74a-02f8-42ec-b87b-b2f189a007bd" />
<img width="1898" height="932" alt="Снимок экрана" src="https://github.com/user-attachments/assets/48f69bdd-9b09-461f-b46c-1fdeecd7417b" />

## Project Structure

```
node-app/
├── app.js                 # Main application entry point
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── controllers/          # Route handlers
│   ├── userController.js # User auth and profile management
│   └── reviewController.js # Review CRUD operations
├── models/               # MongoDB schemas
│   ├── user.js          # User model
│   └── review.js        # Review model
├── utils/               # Utility functions
│   ├── checkAuth.js     # JWT authentication middleware
│   └── handleValidationErrors.js # Validation error handler
└── validations/         # Input validation rules
    └── validations.js   # Validation schemas
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd letterboxdmusic-main/node-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your actual values:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` with your MongoDB URI and JWT secret

## Configuration

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secure_jwt_secret_key
```

## Running the Application

**Development mode** (with auto-reload via nodemon):
```bash
npm run start:dev
```

The server will start on `http://localhost:4444`

**Production mode**:
```bash
node app.js
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user profile (requires auth)

### Users
- `GET /user/:id` - Get user profile by ID
- `GET /user/search/:nickname` - Search users by nickname

### Reviews
- `GET /reviews` - Get all reviews
- `POST /reviews/album` - Get reviews by album
- `POST /reviews/user` - Get reviews by user
- `GET /reviews/:id` - Get specific review
- `POST /reviews` - Create a new review (requires auth)
- `DELETE /reviews/:id` - Delete a review (requires auth)

## Authentication

The API uses JWT-based authentication. Include the token in request headers:

```
Authorization: Bearer <your_jwt_token>
```

Tokens are obtained during login/registration and expire after 30 days.

## Frontend Integration

The backend is configured to work with a React frontend running on `http://localhost:5173`. CORS is enabled for:
- Methods: GET, POST, PUT, DELETE
- Headers: Content-Type, Authorization, x-custom-header

### Frontend Features
- **Last.fm API Integration**: Search and retrieve album metadata, artist information
- **Search**: Find albums, artists, and user reviews
- **Pagination**: Browse through reviews and search results with efficient pagination
- **User Profiles**: View user profiles and their album reviews
- **Review Management**: Create, read, and delete album reviews

## Development Dependencies

- **nodemon** - Auto-reload server during development

## Security Notes

⚠️ **Important**: Never commit `.env` files to version control. Always use `.env.example` as a template for required variables.

- Passwords are hashed using bcrypt with salt rounds of 10
- JWT secrets should be strong and unique
- Keep your MongoDB credentials secure

## Future Enhancements

- Album ratings and metadata
- Review likes/comments
- User follow functionality
- Advanced search and filtering
- Review update endpoint

## License

ISC
