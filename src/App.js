import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import LeakChart from './LeakChart';
import DataLeakTable from './DataLeakTable';
import './App.css';

function App() {
  // Refs for chart and table sections to capture them in the PDF
  const chartRef = useRef();
  const tableRef = useRef();

  // Function to handle PDF export
  const handleExport = async () => {
    const doc = new jsPDF();

    // Capture the chart
    const chartCanvas = await html2canvas(chartRef.current);
    const chartImgData = chartCanvas.toDataURL('image/png');
    doc.addImage(chartImgData, 'PNG', 10, 10, 180, 90); // Chart position and size on the PDF

    // Add a space between chart and table
    doc.addPage();

    // Capture the table
    const tableCanvas = await html2canvas(tableRef.current);
    const tableImgData = tableCanvas.toDataURL('image/png');
    doc.addImage(tableImgData, 'PNG', 10, 10, 180, 90); // Table position and size on the PDF

    // Save the generated PDF
    doc.save('data-leakage-report.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Data Leakage Detection System</h1>
          <button
            onClick={handleExport}
            className="bg-white text-blue-600 py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            Export All Data
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="p-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Chart 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6" ref={chartRef}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Leak Chart Overview</h2>
            <LeakChart />
          </div>

          {/* Chart 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6" ref={chartRef}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Leak Chart - Copy</h2>
            <LeakChart />
          </div>

        </div>

        {/* Data Table Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8" ref={tableRef}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Leak Data Table</h2>
          <DataLeakTable />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center p-6">
        <p className="text-sm">© {new Date().getFullYear()} Munene Evanson Murimi — React Projects Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
