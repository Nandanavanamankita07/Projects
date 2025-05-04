
[eslint] 
src\components\DataFetcher.tsx
  Line 2:17:  'useState' is defined but never used  @typescript-eslint/no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint] 
src\components\DataFetcher.tsx
  Line 2:17:  'useState' is defined but never used  @typescript-eslint/no-unused-vars

webpack compiled with 1 warning
ERROR in src/App.tsx:40:59
TS2345: Argument of type '(prev: OceanData[]) => OceanData[]' is not assignable to parameter of type 'SetStateAction<OceanData[]>'.     
  Type '(prev: OceanData[]) => OceanData[]' is not assignable to type '(prevState: OceanData[]) => OceanData[]'.
    Type 'OceanData[]' is not assignable to type 'OceanData[]'. Two different types with this name exist, but they are unrelated.       
      Property 'time' is missing in type 'OceanData' but required in type 'OceanData'.
    38 |       <h1 className="title">🌊 OceanEye: Real-time Oceanography Dashboard</h1>
    39 |       <div className="content">
  > 40 |         <DataFetcher onDataUpdate={(data) => setOceanData((prev) => [...prev.slice(-19), data])} />
       |                                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    41 |         <OceanVisualization data={oceanData} />
    42 |       </div>
    43 |     </div>
