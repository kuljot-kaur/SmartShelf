# SmartShelf Project

SmartShelf is a full-stack inventory management and analytics platform designed to optimize shelf health, inventory forecasting, and stock redistribution for retail environments. The project is organized into three main components:

## Project Structure

```
lumina_veridian/
  DESIGN.md
smartshelf-backend/
  app.py
  forecast.py
  logic.py
  requirements.txt
  supabase_client.py
  test_ml.py
  data/
    inventory.csv
  ml/
  routes/
smartshelf-frontend/
  api.js
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  src/
    api.js
    App.jsx
    index.css
    main.jsx
    components/
      Dashboard/
        AIInsightCard.jsx
        InventoryControls.jsx
        InventoryTable.jsx
        ShelfHealthOverview.jsx
        StockEntryForm.jsx
      Layout/
        Footer.jsx
        Header.jsx
        Sidebar.jsx
      Views/
        DashboardView.jsx
        LandingPageView.jsx
        PlannerView.jsx
        RedistributionView.jsx
        RegistrationView.jsx
        ReportsView.jsx
        SettingsView.jsx
```

## Backend (`smartshelf-backend`)
- **Language:** Python
- **Key files:**
  - `app.py`: Main API server (likely using FastAPI or Flask)
  - `forecast.py`: Inventory forecasting logic
  - `logic.py`: Core business logic
  - `supabase_client.py`: Integration with Supabase (database)
  - `test_ml.py`: Machine learning tests
  - `data/inventory.csv`: Sample inventory data
  - `ml/`: Machine learning models and scripts
  - `routes/`: API route definitions
- **Dependencies:** See `requirements.txt`

## Frontend (`smartshelf-frontend`)
- **Language:** JavaScript (React)
- **Key files:**
  - `src/App.jsx`: Main React app
  - `src/components/`: UI components (Dashboard, Layout, Views)
  - `src/api.js`: API integration
  - `index.html`, `main.jsx`, `index.css`: App entry point and styles
  - `package.json`: Project dependencies
  - `tailwind.config.js`, `postcss.config.js`: Styling configuration (Tailwind CSS)
  - `vite.config.js`: Build configuration (Vite)

## Documentation (`lumina_veridian`)
- `DESIGN.md`: System design and architecture documentation

## Getting Started

### Backend
1. Navigate to `smartshelf-backend`:
   ```sh
   cd smartshelf-backend
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```sh
   python app.py
   ```

### Frontend
1. Navigate to `smartshelf-frontend`:
   ```sh
   cd smartshelf-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Features
- Inventory tracking and management
- AI-powered inventory forecasting
- Shelf health analytics
- Stock redistribution planning
- User-friendly dashboard and reports

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License.

---
For more details, see the `DESIGN.md` in the `lumina_veridian` folder.
