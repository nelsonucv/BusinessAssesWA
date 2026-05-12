import React, { useState, useMemo } from 'react';

const grantsData = [
  {
    id: 1,
    title: `Community Stewardship Grants`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '12 March 2026',
    endDate: '29 April 2026',
    closes: '29 April 2026',
    description: `Detailed information regarding the Community Stewardship Grants. This funding opportunity opens on 12 March 2026 and closes on 29 April 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 2,
    title: `Feral Cat Management Grants`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '12 March 2026',
    endDate: '29 April 2026',
    closes: '29 April 2026',
    description: `Detailed information regarding the Feral Cat Management Grants. This funding opportunity opens on 12 March 2026 and closes on 29 April 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 3,
    title: `WaterSmart Farms voucher program`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '7 March 2026',
    endDate: '3 May 2026',
    closes: '3 May 2026',
    description: `Detailed information regarding the WaterSmart Farms voucher program. This funding opportunity opens on 7 March 2026 and closes on 3 May 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 4,
    title: `Supply Chain Capacity Program`,
    category: 'Regional',
    status: 'Closed',
    startDate: '27 February 2026',
    endDate: '24 April 2026',
    closes: '24 April 2026',
    description: `Detailed information regarding the Supply Chain Capacity Program. This funding opportunity opens on 27 February 2026 and closes on 24 April 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 5,
    title: `Noongar Regional Corporations Economic Foundations Grants`,
    category: 'Regional',
    status: 'Open',
    startDate: '16 February 2026',
    endDate: '30 June 2026',
    closes: '30 June 2026',
    description: `Detailed information regarding the Noongar Regional Corporations Economic Foundations Grants. This funding opportunity opens on 16 February 2026 and closes on 30 June 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 6,
    title: `Building Better Aboriginal Business Supply Chain Voucher`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '3 December 2025',
    endDate: '2 February 2026',
    closes: '2 February 2026',
    description: `Detailed information regarding the Building Better Aboriginal Business Supply Chain Voucher. This funding opportunity opens on 3 December 2025 and closes on 2 February 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 7,
    title: `John Cripps Horticulture Scholarships`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '22 October 2025',
    endDate: '13 February 2026',
    closes: '13 February 2026',
    description: `Detailed information regarding the John Cripps Horticulture Scholarships. This funding opportunity opens on 22 October 2025 and closes on 13 February 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 8,
    title: `Regional Economic Development (RED) Grants`,
    category: 'Regional',
    status: 'Closed',
    startDate: '17 October 2025',
    endDate: '9 January 2026',
    closes: '9 January 2026',
    description: `Detailed information regarding the Regional Economic Development (RED) Grants. This funding opportunity opens on 17 October 2025 and closes on 9 January 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 9,
    title: `Regional Roads Australia Mobile Program Pilot`,
    category: 'Regional',
    status: 'Closed',
    startDate: '2 October 2025',
    endDate: '28 November 2025',
    closes: '28 November 2025',
    description: `Detailed information regarding the Regional Roads Australia Mobile Program Pilot. This funding opportunity opens on 2 October 2025 and closes on 28 November 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 10,
    title: `Animal Welfare Grant Program`,
    category: 'Sustainability',
    status: 'Closed',
    startDate: '2 September 2025',
    endDate: '29 September 2025',
    closes: '29 September 2025',
    description: `Detailed information regarding the Animal Welfare Grant Program. This funding opportunity opens on 2 September 2025 and closes on 29 September 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 11,
    title: `Carbon for Farmers Voucher Program`,
    category: 'Sustainability',
    status: 'Closed',
    startDate: '30 July 2025',
    endDate: '19 September 2025',
    closes: '19 September 2025',
    description: `Detailed information regarding the Carbon for Farmers Voucher Program. This funding opportunity opens on 30 July 2025 and closes on 19 September 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 12,
    title: `Farmers’ Market Grant Scheme`,
    category: 'Food and beverage',
    status: 'Open',
    startDate: '20 July 2025',
    endDate: '31 December 2027',
    closes: '31 December 2027',
    description: `Detailed information regarding the Farmers’ Market Grant Scheme. This funding opportunity opens on 20 July 2025 and closes on 31 December 2027. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 13,
    title: `Agrifood and Beverage Voucher Program`,
    category: 'Food and beverage',
    status: 'Closed',
    startDate: '8 July 2025',
    endDate: '26 August 2025',
    closes: '26 August 2025',
    description: `Detailed information regarding the Agrifood and Beverage Voucher Program. This funding opportunity opens on 8 July 2025 and closes on 26 August 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 14,
    title: `Southern Rangelands Revitalisation Program`,
    category: 'Emergencies',
    status: 'Closed',
    startDate: '14 November 2024',
    endDate: '14 November 2024',
    closes: '14 November 2024',
    description: `Detailed information regarding the Southern Rangelands Revitalisation Program. This funding opportunity opens on 14 November 2024 and closes on 14 November 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 15,
    title: `Kimberley flood recovery assistance`,
    category: 'Emergencies',
    status: 'Closed',
    startDate: '19 September 2024',
    endDate: '30 April 2025',
    closes: '30 April 2025',
    description: `Detailed information regarding the Kimberley flood recovery assistance. This funding opportunity opens on 19 September 2024 and closes on 30 April 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 16,
    title: `Surf Beaches Mobile Coverage Grants Program`,
    category: 'Emergencies',
    status: 'Closed',
    startDate: '11 September 2024',
    endDate: '8 November 2024',
    closes: '8 November 2024',
    description: `Detailed information regarding the Surf Beaches Mobile Coverage Grants Program. This funding opportunity opens on 11 September 2024 and closes on 8 November 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 17,
    title: `Disaster Recovery Funding Arrangements`,
    category: 'Agriculture',
    status: 'Open',
    startDate: '23 August 2024',
    endDate: '31 December 2028',
    closes: '31 December 2028',
    description: `Detailed information regarding the Disaster Recovery Funding Arrangements. This funding opportunity opens on 23 August 2024 and closes on 31 December 2028. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 18,
    title: `Horticulture Netting Infrastructure Program`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '24 June 2024',
    endDate: '30 April 2026',
    closes: '30 April 2026',
    description: `Detailed information regarding the Horticulture Netting Infrastructure Program. This funding opportunity opens on 24 June 2024 and closes on 30 April 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 19,
    title: `Gnangara Horticulture Water Use Efficiency voucher`,
    category: 'Agriculture',
    status: 'Open',
    startDate: '24 June 2024',
    endDate: '30 June 2026',
    closes: '30 June 2026',
    description: `Detailed information regarding the Gnangara Horticulture Water Use Efficiency voucher. This funding opportunity opens on 24 June 2024 and closes on 30 June 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 20,
    title: `Gnangara Horticulture Water Use Efficiency Grant`,
    category: 'Agriculture',
    status: 'Open',
    startDate: '24 June 2024',
    endDate: '30 June 2026',
    closes: '30 June 2026',
    description: `Detailed information regarding the Gnangara Horticulture Water Use Efficiency Grant. This funding opportunity opens on 24 June 2024 and closes on 30 June 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 21,
    title: `Southern Rangelands Aboriginal Corporate Governance Development Targeted Grant Round`,
    category: 'Regional',
    status: 'Closed',
    startDate: '24 June 2024',
    endDate: '23 May 2020',
    closes: '23 May 2020',
    description: `Detailed information regarding the Southern Rangelands Aboriginal Corporate Governance Development Targeted Grant Round. This funding opportunity opens on 24 June 2024 and closes on 23 May 2020. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 22,
    title: `Value Add Investment Grants Program - Feasibility Stream`,
    category: 'Food and beverage',
    status: 'Closed',
    startDate: '21 June 2024',
    endDate: '30 June 2025',
    closes: '30 June 2025',
    description: `Detailed information regarding the Value Add Investment Grants Program - Feasibility Stream. This funding opportunity opens on 21 June 2024 and closes on 30 June 2025. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 23,
    title: `Drought Response: Interest-Free Loans`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '1 June 2024',
    endDate: '30 November 2024',
    closes: '30 November 2024',
    description: `Detailed information regarding the Drought Response: Interest-Free Loans. This funding opportunity opens on 1 June 2024 and closes on 30 November 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 24,
    title: `Farm Debt Mediation Scheme WA`,
    category: 'Agriculture',
    status: 'Open',
    startDate: '8 May 2024',
    endDate: '30 June 2026',
    closes: '30 June 2026',
    description: `Detailed information regarding the Farm Debt Mediation Scheme WA. This funding opportunity opens on 8 May 2024 and closes on 30 June 2026. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 25,
    title: `Southern Forests Infrastructure Support Scheme`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '19 April 2024',
    endDate: '11 July 2024',
    closes: '11 July 2024',
    description: `Detailed information regarding the Southern Forests Infrastructure Support Scheme. This funding opportunity opens on 19 April 2024 and closes on 11 July 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 26,
    title: `Value Add Investment Grants program - Capital Investment Stream`,
    category: 'Regional',
    status: 'Closed',
    startDate: '22 March 2024',
    endDate: '3 May 2024',
    closes: '3 May 2024',
    description: `Detailed information regarding the Value Add Investment Grants program - Capital Investment Stream. This funding opportunity opens on 22 March 2024 and closes on 3 May 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 27,
    title: `Carbon Farming and Land Restoration Program`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '7 March 2024',
    endDate: '20 May 2024',
    closes: '20 May 2024',
    description: `Detailed information regarding the Carbon Farming and Land Restoration Program. This funding opportunity opens on 7 March 2024 and closes on 20 May 2024. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 28,
    title: `Native Seed and Nursery Development Program Grants`,
    category: 'Agriculture',
    status: 'Closed',
    startDate: '28 October 2022',
    endDate: '9 December 2022',
    closes: '9 December 2022',
    description: `Detailed information regarding the Native Seed and Nursery Development Program Grants. This funding opportunity opens on 28 October 2022 and closes on 9 December 2022. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  },
  {
    id: 29,
    title: `Building Better Aboriginal Businesses Goldfields Grant`,
    category: 'Regional',
    status: 'Closed',
    startDate: '4 March 2022',
    endDate: '28 April 2022',
    closes: '28 April 2022',
    description: `Detailed information regarding the Building Better Aboriginal Businesses Goldfields Grant. This funding opportunity opens on 4 March 2022 and closes on 28 April 2022. Eligibility criteria apply. Please refer to the official DPIRD guidelines for full application requirements, matching funding ratios, and submission procedures.`
  }
];

export default function Grants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState({
    Open: true,
    Closed: false
  });
  
  const [categoryFilter, setCategoryFilter] = useState({
    'Agriculture': false,
    'Regional': false,
    'Emergencies': false,
    'Food and beverage': false,
    'Sustainability': false
  });

  const [expandedGrantId, setExpandedGrantId] = useState(null);

  const handleStatusChange = (status) => {
    setStatusFilter(prev => ({ ...prev, [status]: !prev[status] }));
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredGrants = useMemo(() => {
    return grantsData.filter(grant => {
      // Search filter
      const searchMatch = grant.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          grant.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Status filter
      const statusMatch = statusFilter[grant.status];

      // Category filter (if none selected, show all. If some selected, must match one)
      const activeCategories = Object.keys(categoryFilter).filter(k => categoryFilter[k]);
      const categoryMatch = activeCategories.length === 0 || activeCategories.includes(grant.category);

      return searchMatch && statusMatch && categoryMatch;
    });
  }, [searchQuery, statusFilter, categoryFilter]);

  const toggleExpand = (id) => {
    setExpandedGrantId(prev => prev === id ? null : id);
  };

  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed right-0 top-1/4 h-fit z-40 flex-col bg-surface-container-high shadow-md docked w-72 rounded-l-xl hidden xl:flex">
        <div className="p-lg border-b border-outline-variant">
          <h2 className="font-headline-md text-headline-md text-primary font-bold">Need Help?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-sm">We're here to guide you.</p>
        </div>
        <nav className="flex flex-col p-sm gap-sm">
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            Help Center
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">chat</span>
            Contact Advisor
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">description</span>
            Quick Guides
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-md text-label-md transition-colors" href="#">
            <span className="material-symbols-outlined">rate_review</span>
            Feedback
          </a>
        </nav>
        <div className="p-md mt-auto">
          <button className="w-full bg-secondary-container text-on-secondary-container font-label-md text-label-md py-sm px-md rounded-lg font-bold hover:opacity-90 transition-opacity">
            Check Eligibility
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="bg-primary-container text-on-primary rounded-xl p-xl relative overflow-hidden shadow-sm" style={{minHeight: '200px'}}>
          <div className="relative z-10 max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl mb-md">Grants and Support for WA Businesses</h1>
            <p className="font-body-lg text-body-lg opacity-90">Discover funding opportunities and expert support tailored to Western Australian primary industries and regional development.</p>
          </div>
          {/* Decorative background pattern could go here, using CSS gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-surface-tint opacity-80 z-0"></div>
        </section>

        <div className="flex flex-col md:flex-row gap-xl">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-lg">
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant shadow-sm sticky top-xl">
              <h3 className="font-headline-md text-headline-md mb-md text-on-surface">Filters</h3>
              {/* Search */}
              <div className="mb-lg">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Search</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                  <input 
                    className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface-container-lowest" 
                    placeholder="Keywords..." 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              {/* Status */}
              <div className="mb-lg border-t border-outline-variant pt-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-sm">Status</h4>
                <div className="flex flex-col gap-sm">
                  {Object.keys(statusFilter).map(status => (
                    <label key={status} className="flex items-center gap-sm cursor-pointer">
                      <input 
                        className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" 
                        type="checkbox"
                        checked={statusFilter[status]}
                        onChange={() => handleStatusChange(status)}
                      />
                      <span className="font-body-md text-body-md text-on-surface-variant">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Category */}
              <div className="mb-lg border-t border-outline-variant pt-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-sm">Category</h4>
                <div className="flex flex-col gap-sm">
                  {Object.keys(categoryFilter).map(category => (
                    <label key={category} className="flex items-center gap-sm cursor-pointer">
                      <input 
                        className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" 
                        type="checkbox"
                        checked={categoryFilter[category]}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="font-body-md text-body-md text-on-surface-variant">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          
          {/* Grants List */}
          <div className="flex-grow flex flex-col gap-md">
            <div className="flex justify-between items-end mb-sm">
              <p className="font-body-md text-body-md text-on-surface-variant">Showing {filteredGrants.length} opportunit{filteredGrants.length === 1 ? 'y' : 'ies'}</p>
              <select className="border border-outline-variant rounded py-1 px-3 bg-surface-container-lowest font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sort by: Closing Soon</option>
                <option>Sort by: Newest</option>
                <option>Sort by: A-Z</option>
              </select>
            </div>
            
            {filteredGrants.length === 0 ? (
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-xl text-center">
                <p className="font-body-lg text-body-lg text-on-surface-variant">No grants match your current filters.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter({Open: true, Closed: true});
                    setCategoryFilter({'Agriculture': false, 'Regional': false, 'Emergencies': false, 'Food and beverage': false, 'Sustainability': false});
                  }}
                  className="mt-md font-label-md text-label-md text-primary hover:underline cursor-pointer">
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredGrants.map(grant => {
                const isExpanded = expandedGrantId === grant.id;
                
                return (
                  <article 
                    key={grant.id} 
                    className={`bg-surface-container-lowest border border-outline-variant rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer ${isExpanded ? 'ring-2 ring-primary border-primary' : ''}`}
                    onClick={() => toggleExpand(grant.id)}
                  >
                    <div className="p-lg flex flex-col md:flex-row justify-between gap-md">
                      <div>
                        <div className="flex flex-wrap items-center gap-sm mb-xs">
                          <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded">{grant.category}</span>
                          <span className={`font-label-sm text-label-sm px-2 py-1 rounded flex items-center gap-1 ${grant.status === 'Open' ? 'bg-[#e8f5e9] text-[#1b5e20]' : 'bg-surface-variant text-on-surface-variant'}`}>
                            {grant.status === 'Open' && <span className="w-2 h-2 rounded-full bg-[#4caf50]"></span>}
                            {grant.status}
                          </span>
                        </div>
                        <h2 className="font-headline-md text-headline-md text-primary mb-sm">{grant.title}</h2>
                      </div>
                      <div className="flex-shrink-0 text-right md:w-48 bg-surface-container p-sm rounded border border-outline-variant self-start flex items-center justify-between md:flex-col md:items-end">
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide md:text-right text-left">Closes</p>
                          <p className="font-body-md text-body-md text-on-surface font-semibold">{grant.closes}</p>
                        </div>
                        <span className={`material-symbols-outlined transition-transform duration-300 md:mt-2 text-outline ${isExpanded ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </div>
                    </div>

                    {/* Expandable Body */}
                    <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="p-lg pt-0 border-t border-outline-variant bg-surface-container-lowest">
                        <div className="my-md flex flex-wrap gap-lg">
                           <div className="bg-surface-container p-sm rounded">
                             <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Start Date</span>
                             <span className="font-body-md text-body-md text-on-surface font-semibold">{grant.startDate}</span>
                           </div>
                           <div className="bg-surface-container p-sm rounded">
                             <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">End Date</span>
                             <span className="font-body-md text-body-md text-on-surface font-semibold">{grant.endDate}</span>
                           </div>
                           <div className="bg-surface-container p-sm rounded">
                             <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Status</span>
                             <span className={`font-body-md text-body-md font-semibold ${grant.status === 'Open' ? 'text-[#1b5e20]' : 'text-on-surface'}`}>{grant.status}</span>
                           </div>
                        </div>

                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl mb-lg leading-relaxed">
                          {grant.description}
                        </p>

                        <div className="flex justify-between items-center mt-auto">
                          <button 
                            className="font-label-md text-label-md text-primary hover:bg-primary-container py-2 px-4 rounded transition-colors flex items-center gap-xs cursor-pointer" 
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Full Guidelines <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </button>
                          {grant.status === 'Open' && (
                            <button 
                              className="bg-[#b58500] text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:bg-secondary transition-colors font-bold shadow-sm cursor-pointer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Check Eligibility
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
}
