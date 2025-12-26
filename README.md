# M DESIGN STUDIO - Professional Business Website

A modern, responsive MERN stack website for M Design Studio, specializing in Events & Exhibition services.

## Company Details
- **Company Name:** M DESIGN STUDIO
- **Industry:** Events & Exhibition
- **CEO & Founder:** Dheeraj Kumar
- **Contact:** +91 7827202773
- **Address:** GTB Nagar, New Delhi - 110009

## Features

### Frontend (React.js + TypeScript + Tailwind CSS)
- **Responsive Design:** Mobile, tablet, and desktop optimized
- **Modern UI/UX:** Clean, professional design inspired by premium event companies
- **Reusable Components:** Modular component architecture
- **Dynamic Content:** All content can be updated from backend
- **Image Gallery:** Dynamic gallery with category filtering
- **Contact Form:** Functional contact form with validation
- **Smooth Animations:** Professional transitions and hover effects

### Backend (Node.js + Express.js + MongoDB)
- **RESTful API:** Clean API structure for content management
- **MongoDB Integration:** Flexible data storage for content, images, and contacts
- **File Upload:** Image upload functionality for gallery
- **Content Management:** Dynamic content updates without code changes
- **Contact Management:** Store and manage contact form submissions

### Sections Included
1. **Hero Section:** Eye-catching banner with company branding
2. **About Section:** Company information with founder details and stats
3. **Services Section:** Comprehensive service offerings
4. **Gallery Section:** Dynamic image gallery with category filters
5. **Contact Section:** Contact form and company information
6. **Footer:** Complete company details and social links

## Project Structure

```
M_Design_studio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── services/       # API service functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── uploads/            # Uploaded images
│   └── server.js           # Main server file
└── package.json            # Root package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client
```

### 2. Environment Setup

Create `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mdesignstudio
NODE_ENV=development
```

### 3. Start MongoDB
Make sure MongoDB is running on your system.

### 4. Run the Application

```bash
# Run both client and server concurrently
npm run dev

# Or run separately:
# Server only
npm run server

# Client only
npm run client
```

### 5. Access the Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## API Endpoints

### Content Management
- `GET /api/content/:section` - Get content for a specific section
- `PUT /api/content/:section` - Update content for a specific section

### Gallery Management
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery` - Upload new gallery image

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

## Customization Guide

### Updating Content
Content can be updated through API calls or directly in MongoDB:

1. **Hero Section:** Update the 'hero' document
2. **About Section:** Update the 'about' document
3. **Services:** Update the 'services' document

### Adding Gallery Images
Use the gallery API endpoint or add directly to MongoDB Gallery collection.

### Styling Customization
- Colors and fonts are defined in `tailwind.config.js`
- Custom CSS classes are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Adding New Sections
1. Create new component in `src/components/`
2. Add to main `App.tsx`
3. Create corresponding backend model/route if needed

## Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd server
# Set environment variables
# Deploy server directory
```

### Database (MongoDB Atlas)
Update `MONGODB_URI` in environment variables to use cloud database.

## Technologies Used

### Frontend
- React.js 18 with TypeScript
- Tailwind CSS for styling
- Axios for API calls
- Responsive design principles

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- Multer for file uploads
- CORS for cross-origin requests

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features
- Optimized images
- Lazy loading
- Smooth scrolling
- Fast API responses
- Minimal bundle size

## Security Features
- Input validation
- CORS configuration
- File upload restrictions
- Environment variable protection

## Future Enhancements
- Admin dashboard for content management
- User authentication
- Email notifications
- SEO optimization
- Analytics integration
- Multi-language support

## Support
For technical support or customization requests, contact the development team.

## License
This project is proprietary to M Design Studio. All rights reserved.