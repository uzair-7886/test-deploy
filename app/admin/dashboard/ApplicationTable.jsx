"use client";

import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { useRouter } from 'next/navigation';
import { Search, Filter, Download, ChevronDown, X, Loader } from 'lucide-react';

const INCOMPLETE_STATUSES = ["account_created", "program_selected", "personal_info_submitted"];

const ApplicationTable = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [programFilter, setProgramFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/applications');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter the data for display
  const filteredData = data.filter(item => {
    const name = `${item.account?.firstName || ""} ${item.account?.lastName || ""}`;
    const email = item.account?.email || '';
    const program = item.step1?.program || '';
    const status = item.status || '';
    const paymentStatus = item.payment?.paid ? "Paid" : "Pending";

    const textMatch = 
      name.toLowerCase().includes(filterText.toLowerCase()) ||
      email.toLowerCase().includes(filterText.toLowerCase()) ||
      program.toLowerCase().includes(filterText.toLowerCase()) ||
      status.toLowerCase().includes(filterText.toLowerCase()) ||
      paymentStatus.toLowerCase().includes(filterText.toLowerCase());

    // Updated status filtering:
    const statusMatch = (() => {
      if (!statusFilter) return true;
      if (statusFilter === "Incomplete") {
        return INCOMPLETE_STATUSES.includes(status);
      }
      return status === statusFilter;
    })();

    const programMatch = programFilter ? program === programFilter : true;
    const paymentMatch = paymentFilter ? paymentStatus === paymentFilter : true;

    return textMatch && statusMatch && programMatch && paymentMatch;
  });

  // Generate export data based on filters:
  const getExportData = () => {
    const exportSource = (filterText || statusFilter || programFilter || paymentFilter) ? filteredData : data;
    const headers = ["Name", "Email", "Program", "Status", "Payment Status", "Submitted At"];
    const rows = exportSource.map(item => {
      const name = `${item.account?.firstName || ""} ${item.account?.lastName || ""}`.trim();
      const email = item.account?.email || '';
      const program = item.step1?.program || '';
      const status = item.status;
      const paymentStatus = item.payment?.paid ? "Paid" : "Pending";
      const submittedAt = item.submittedAt;
      return [name, email, program, status, paymentStatus, submittedAt];
    });
    return { headers, rows };
  };

  // CSV download
  const downloadCSV = () => {
    const { headers, rows } = getExportData();
    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "applications_filtered.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Excel download
  const downloadExcel = () => {
    const { headers, rows } = getExportData();
    const worksheetData = [headers, ...rows];
    const ws = XLSX.utils.aoa_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Applications");
    XLSX.writeFile(wb, "applications_filtered.xlsx");
  };

  const resetFilters = () => {
    setFilterText("");
    setStatusFilter("");
    setProgramFilter("");
    setPaymentFilter("");
    setResetPaginationToggle(!resetPaginationToggle);
  };

  // Define the columns for the table
  const columns = [
    {
      name: 'Name',
      selector: row => `${row.account?.firstName || ""} ${row.account?.lastName || ""}`,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Email',
      selector: row => row.account?.email || '',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Program',
      selector: row => row.step1?.program || '',
      sortable: true,
      grow: 2,
      cell: row => (
        <div className="truncate max-w-xs" title={row.step1?.program || ''}>
          {row.step1?.program || ''}
        </div>
      ),
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: row => {
        // Define colors for each status
        const getStatusColor = (status) => {
          switch (status) {
            case 'completed':
              return 'bg-blue-100 text-blue-800';
            case 'fee_submitted':
              return 'bg-green-100 text-green-800';
            case 'account_created':
              return 'bg-gray-100 text-gray-800';
            case 'program_selected':
              return 'bg-purple-100 text-purple-800';
            case 'personal_info_submitted':
              return 'bg-yellow-100 text-yellow-800';
            default:
              return 'bg-gray-100 text-gray-800';
          }
        };
    
        // Format status string for display (e.g. "account_created" becomes "Account Created")
        const formatStatus = (status) => {
          return status
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        };
    
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
            {formatStatus(row.status)}
          </span>
        );
      }
    }
    ,
    {
      name: 'Payment',
      selector: row => row.payment?.paid ? "Paid" : "Pending",
      sortable: true,
      cell: row => {
        const isPaid = row.payment?.paid;
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            isPaid ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {isPaid ? "Paid" : "Pending"}
          </span>
        );
      }
    },
    {
      name: 'Submitted',
      selector: row => row.submittedAt,
      sortable: true,
      cell: row => {
        const date = new Date(row.submittedAt);
        return date.toLocaleDateString('en-GB');
      }
    },
  ];

  // Custom styling for DataTable
  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: '#e2e8f0',
      },
    },
    headCells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
        fontWeight: 600,
        color: '#334155',
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
        cursor: 'pointer',
        minHeight: '60px',
        '&:not(:last-of-type)': {
          borderBottomColor: '#f1f5f9',
        },
      },
      highlightOnHoverStyle: {
        backgroundColor: '#f8fafc',
        borderBottomColor: '#f1f5f9',
        outline: '1px solid #e2e8f0',
        transition: 'all 0.2s ease',
      },
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    pagination: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: '#e2e8f0',
      },
    },
  };

  // Skeleton loader
  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-10 bg-gray-200 rounded w-64 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="h-96 bg-gray-100 rounded animate-pulse flex items-center justify-center">
          <Loader className="h-8 w-8 text-gray-400 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Applications</h2>
        <p className="text-gray-500 text-sm mt-1">
          Manage and track all program applications
        </p>
      </div>
      
      <div className="p-5">
        {/* Search and Actions Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-3 md:space-y-0">
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applications..."
              value={filterText}
              onChange={e => setFilterText(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className={`flex items-center text-sm font-medium px-3 py-2 rounded-md border ${
                (statusFilter || programFilter || paymentFilter) 
                  ? 'text-blue-700 border-blue-300 bg-blue-50' 
                  : 'text-gray-700 border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {(statusFilter || programFilter || paymentFilter) && (
                <span className="ml-2 bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {((statusFilter ? 1 : 0) + (programFilter ? 1 : 0) + (paymentFilter ? 1 : 0))}
                </span>
              )}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
                className="flex items-center text-sm font-medium px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
                <ChevronDown className="h-3 w-3 ml-1" />
              </button>
              {downloadMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => { downloadCSV(); setDownloadMenuOpen(false); }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Download as CSV</span>
                  </button>
                  <button
                    onClick={() => { downloadExcel(); setDownloadMenuOpen(false); }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Download as Excel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Filters Section */}
        {filtersVisible && (
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-700">Filter Applications</h3>
              <div className="flex space-x-2">
                {(statusFilter || programFilter || paymentFilter) && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear filters
                  </button>
                )}
                <button
                  onClick={() => setFiltersVisible(false)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500 py-2"
                >
                  <option value="">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="fee_submitted">Fee Submitted</option>
                  <option value="Incomplete">Incomplete</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Program</label>
                <select
                  value={programFilter}
                  onChange={e => setProgramFilter(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500 py-2"
                >
                  <option value="">All Programs</option>
                  <option value="Oxford Summer Program - £5,999">
                    Oxford Summer Program 
                  </option>
                  <option value="Oxford Executive Leadership Program - £7,999">
                    Oxford Executive Leadership Program 
                  </option>
                  <option value="Oxford China Summer Program - £2,999">
                    Oxford China Summer Program 
                  </option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Payment Status</label>
                <select
                  value={paymentFilter}
                  onChange={e => setPaymentFilter(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500 py-2"
                >
                  <option value="">All Payment Statuses</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* Results Summary */}
        <div className="mb-2 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredData.length}</span> of <span className="font-medium">{data.length}</span> applications
          </div>
        </div>
        
        {/* DataTable */}
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 50]}
          paginationResetDefaultPage={resetPaginationToggle}
          pointerOnHover
          highlightOnHover
          onRowClicked={(row) => router.push(`/cms/structure/application;${row._id}`)}
          noDataComponent={
            <div className="p-10 text-center">
              <p className="text-gray-500">No applications found</p>
            </div>
          }
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default ApplicationTable;
