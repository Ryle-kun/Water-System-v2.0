# Frontend ↔ Backend integration notes

## Development
1. Open two terminals in the project root.
2. Backend: `cd backend`, activate your own Python environment, install `pip install -r requirements.txt`, then run `uvicorn main:app --reload --host 0.0.0.0 --port 8000`.
3. Frontend: `cd frontend`, run `npm install`, then `npm run dev`.
4. Open the Vite URL shown in the terminal (normally `http://localhost:5173`). API requests use the Vite proxy to reach port 8000; WebSocket requests use the `/ws` proxy.
5. Test `http://localhost:8000/docs` and `http://localhost:8000/api/health`.

## Demo data vs. real Arduino data
The backend demo simulator is enabled by default and emits changing sample readings. When the Arduino serial bridge is ready and sending actual sensor data, set `ENABLE_SIMULATOR=false` in the backend environment before starting FastAPI. Otherwise the simulator can make the dashboard show random values.

## Important
- This ZIP omits `.git`, the bundled virtual environment, the local database file, and local `.env` files. Keep a backup of your existing project and database before copying changes.
- Never use the default JWT secret in production; set a strong `SECRET_KEY` in your backend environment.
- The login endpoint returns the token and user role. Existing frontend code stores these values in localStorage.
