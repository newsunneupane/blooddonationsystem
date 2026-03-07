# Blood Donation System

A full-stack web application for managing blood donors and donations. This system allows users to add, view, update, and delete donor information in a centralized database.

## Features

- ✅ **Donor Management**: Add, view, edit, and delete donor records
- ✅ **Responsive UI**: Modern React-based frontend with intuitive navigation
- ✅ **REST API**: PHP backend with RESTful API endpoints
- ✅ **Database Integration**: MySQL database for persistent data storage
- ✅ **Form Validation**: Input validation for donor information
- ✅ **Routing**: Client-side routing with React Router for seamless navigation

## Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool and dev server
- **React Router** 7.13.1 - Client-side routing
- **Axios** 1.13.6 - HTTP client for API requests
- **JavaScript** - Programming language

### Backend
- **PHP** - Server-side scripting
- **MySQL** - Database management system
- **REST API** - API architecture

## Project Structure

```
Blood Donation system/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Forms/
│   │   │   │   └── AddDonorForm.jsx
│   │   │   └── Navigation/
│   │   │       ├── Navigation.jsx
│   │   │       └── Navigation.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── DonorsList.jsx
│   │   │   └── DonorsList.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── server/
│   └── blood-donation-api/         # PHP API endpoints
│       ├── db.php                  # Database connection
│       ├── addDonor.php            # Create donor
│       ├── getDonors.php           # Retrieve all donors
│       ├── updateDonor.php         # Update donor info
│       └── deleteDonor.php         # Delete donor
├── SQLdatabase/                     # Database schema & scripts
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PHP (v7.4 or higher)
- MySQL Server
- A local server environment (Apache, Nginx, or PHP built-in server)

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Backend Setup

1. Ensure your MySQL server is running

2. Configure the database connection in `server/blood-donation-api/db.php`:
```php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "blood_donation_system";
```

3. Run the database schema from `SQLdatabase/` to create necessary tables

4. Start a local PHP server:
```bash
cd server
php -S localhost:8000
```

5. Update the API base URL in your React app if using a different port/host

## API Endpoints

All endpoints are located in `server/blood-donation-api/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/addDonor.php` | Add a new donor |
| GET | `/getDonors.php` | Retrieve all donors |
| PUT | `/updateDonor.php` | Update donor information |
| DELETE | `/deleteDonor.php` | Delete a donor |

### Example Request

```bash
# Get all donors
curl http://localhost:8000/blood-donation-api/getDonors.php

# Add a new donor
curl -X POST http://localhost:8000/blood-donation-api/addDonor.php \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","bloodType":"O+","age":25}'
```

## Usage

1. **Home Page**: Landing page with system overview
2. **Donors List**: View all registered donors and manage their records
3. **Add Donor**: Use the form to add new donors to the system
4. **Update/Delete**: Edit or remove donor information from the donors list

## Available Scripts

### Frontend

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Database Schema

Ensure your MySQL database includes a `donors` table with the following structure:

```sql
CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bloodType VARCHAR(5) NOT NULL,
    age INT NOT NULL,
    phoneNumber VARCHAR(15),
    email VARCHAR(100),
    lastDonationDate DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- 📱 Mobile app version
- 📊 Analytics and reporting dashboard
- 🔔 Notification system for donation reminders
- 🔐 User authentication and authorization
- 🗺️ Blood bank locator feature
- 📈 Donor statistics and insights
- 🔄 Integration with blood bank management systems

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

## Author

Created as a blood donation management system project.

---

**Last Updated**: March 2026
