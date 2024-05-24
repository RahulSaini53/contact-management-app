# contact-management-app

<p>The Contact Management App is a robust, user-friendly application designed to manage personal and professional contacts efficiently. It allows users to add, edit, delete, and view a list of contacts. Each contact entry includes essential details like first name, last name, and status (active/inactive). Additionally, the app features a comprehensive COVID-19 dashboard that presents real-time data through interactive charts and maps.</p>

<h2>Key Features</h2>

 <ol>
        <li><strong>Contact Management:</strong>
            <ul>
                <li><strong>Add Contacts:</strong> Users can add new contacts by providing first name, last name, and status (active/inactive).</li>
                <li><strong>Edit Contacts:</strong> Users can update existing contact information as needed.</li>
                <li><strong>Delete Contacts:</strong> Users can remove contacts from the list with a simple click.</li>
                <li><strong>View Contacts:</strong> The app displays a list of all added contacts with options to edit or delete each contact.</li>
            </ul>
        </li>
        <li><strong>COVID-19 Dashboard:</strong>
            <ul>
                <li><strong>Line Chart:</strong> Displays the fluctuation of COVID-19 cases over time. The chart is interactive and shows data for cases, deaths, and recoveries.</li>
                <li><strong>Interactive Map:</strong> A world map highlighting COVID-19 statistics by country. Users can view detailed information about active, recovered, and total cases in each country by clicking on the markers.</li>
            </ul>
        </li>
</ol>

<h2>Technology Stack</h2>

 <ul>
        <li><strong>React:</strong> A powerful JavaScript library for building user interfaces.</li>
        <li><strong>TypeScript:</strong> Adds static typing to JavaScript, enhancing code quality and maintainability.</li>
        <li><strong>Redux Toolkit:</strong> Manages the state of contacts and sidebar visibility efficiently.</li>
        <li><strong>TailwindCSS:</strong> A utility-first CSS framework that allows for rapid styling of the app.</li>
        <li><strong>React Router v6:</strong> Facilitates smooth navigation between different pages of the app.</li>
        <li><strong>React Query (Tanstack Query):</strong> Manages data fetching and caching, ensuring the app performs efficiently even with frequent data updates.</li>
        <li><strong>Chart.js:</strong> A flexible library for rendering interactive charts.</li>
        <li><strong>React Leaflet:</strong> Integrates Leaflet maps into React applications, providing a dynamic map experience.</li>
        <li><strong>LocalStorage:</strong> Persists contact data.</li>
 </ul>

<h2>Setup Instructions</h2>

<ol>
        <li><strong>Clone the repository:</strong></li>
    </ol>

<pre><code>git clone https://github.com/yourusername/contact-management-app.git
cd contact-management-app</code></pre>

<ol start="2">
        <li><strong>Install dependencies:</strong></li>
  </ol>

<pre><code>npm install</code></pre>

<ol start="3">
        <li><strong>Run the application:</strong></li>
  </ol>

<pre><code>npm start</code></pre>

<p>The application will start on <code>http://localhost:3000</code>.</p>

<h2>Folder Structure</h2>

<pre><code>contact-management-app/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── app/
  │   │   ├── store.ts
  │   │   └── ...
  │   ├── components/
  │   │   ├── ContactForm.tsx
  │   │   ├── ContactsList.tsx
  │   │   ├── Header.tsx
  │   │   ├── Sidebar.tsx
  │   │   ├── CasesChart.tsx
  │   │   └── CountriesMap.tsx
  │   ├── features/
  │   │   ├── contacts/
  │   │   │   ├── contactsSlice.ts
  │   │   │   └── ...
  │   │   └── sidebar/
  │   │       ├── sidebarSlice.ts
  │   │       └── ...
  │   ├── App.tsx
  │   ├── index.tsx
  │   └── ...
  ├── package.json
  └── ...
</code></pre>

<h2>Usage</h2>

  <ol>
        <li><strong>Add a Contact:</strong></li>
    </ol>

   <p>Click on the "Add Contact" button in the sidebar.
        Fill in the contact details and submit the form.</p>

<ol start="2">
<li><strong>Edit a Contact:</strong></li>
</ol>

<p>Click the "Edit" button next to the contact you want to edit.
    Update the contact details and save changes.</p>

<ol start="3">
    <li><strong>Delete a Contact:</strong></li>
</ol>

<p>Click the "Delete" button next to the contact you want to delete.</p>

<ol start="4">
    <li><strong>View COVID-19 Dashboard:</strong></li>
</ol>

<p>Navigate to the dashboard to view the line chart and map.</p>

<h2>Deployment</h2>

<p>To deploy the app on a platform like Vercel, GitHub Pages, or Heroku, follow the specific instructions for each platform. For example, to deploy on Vercel:</p>

<ol>
    <li><strong>Install Vercel CLI:</strong></li>
</ol>

<pre><code>npm install -g vercel</code></pre>

<ol start="2">
    <li><strong>Deploy:</strong></li>
</ol>

<pre><code>vercel</code></pre>

<p>Follow the prompts to complete the deployment.</p>

<h2>License</h2>

<p>This project is licensed under the MIT License.</p>

<p>Feel free to customize the above content based on your actual repository URL, email address, and any additional details specific to your project. This README provides a clear and structured guide for anyone who wants to understand, set up, and use your Contact Management App.</p>

<hr>

<h3>Contact</h3>

<p>For any inquiries or issues, please reach out to [your email address].</p>

