1.  Frontend–Backend Integration Issue

Problem: API calls were not working due to incorrect CORS setup.
Solution: Added cors middleware in the backend and ensured the frontend used the correct BASE_URL.

2.  MongoDB Connection Error

Problem: MongoDB Atlas connection failed due to network IP restrictions.
Solution: Whitelisted my local IP and corrected the connection string in .env.

3.  Nested Git Repositories Problem

Problem: Frontend and backend had separate .git folders, preventing proper push.
Solution: Deleted internal .git folders using PowerShell and pushed both folders into one single repo.

4.  Handling API Errors

Problem: App crashed when no title was provided in POST requests.
Solution: Added validation in the controller to ensure title is required before saving to MongoDB.

 Technologies Used

Frontend: React.js, Axios, HTML, CSS
Backend: Node.js, Express.js, Mongoose
Database: MongoDB Atlas
Version Control: Git & GitHub
