ERROR in src/App.tsx:42:10
TS2741: Property 'onDataUpdate' is missing in type '{}' but required in type 'DataFetcherProps'.
    40 |       <h1 style={styles.title}>🌊 OceanEye: Real-time Oceanography Dashboard</h1>
    41 |       <div style={styles.content}>
  > 42 |         <DataFetcher />
       |          ^^^^^^^^^^^
    43 |         <OceanVisualization data={oceanData} />
    44 |       </div>
    45 |     </div>

Compiled successfully!

You can now view ocean-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
ERROR in src/App.tsx:42:10
TS2741: Property 'onDataUpdate' is missing in type '{}' but required in type 'DataFetcherProps'.
    40 |       <h1 style={styles.title}>🌊 OceanEye: Real-time Oceanography Dashboard</h1>
    41 |       <div style={styles.content}>
  > 42 |         <DataFetcher />
       |          ^^^^^^^^^^^
    43 |         <OceanVisualization data={oceanData} />
    44 |       </div>
    45 |     </div>

ERROR in src/pages/Dashboard.tsx:9:8
TS2741: Property 'onDataUpdate' is missing in type '{}' but required in type 'DataFetcherProps'.
     7 |     <div style={{ padding: '2rem' }}>
     8 |       <h2>Live Ocean Data Dashboard</h2>
  >  9 |       <DataFetcher />
       |        ^^^^^^^^^^^
    10 |       <OceanVisualization data={[]} /> {/* Pass your real-time data here */}
    11 |     </div>
    12 |   );
