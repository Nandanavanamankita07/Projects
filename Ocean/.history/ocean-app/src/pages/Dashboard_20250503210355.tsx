// src/pages/Dashboard.tsx
import DataFetcher from '../components/DataFetcher';
import OceanVisualization from '../components/OceanVisualization';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Live Ocean Data Dashboard</h2>
      <DataFetcher />
      <OceanVisualization data={[]} /> {/* Pass your real-time data here */}
    </div>
  );
}
