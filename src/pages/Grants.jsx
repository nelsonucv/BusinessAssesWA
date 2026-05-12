import React, { useState, useMemo } from 'react';

const grantsData = [
  {
    id: 1,
    title: "Farmers’ Market Grant Scheme",
    category: "Food and beverage",
    status: "Open",
    closes: "31 Dec 2027",
    description: "Funding to support the establishment and expansion of farmers' markets to improve access to local produce."
  },
  {
    id: 2,
    title: "Disaster Recovery Funding Arrangements",
    category: "Emergencies",
    status: "Open",
    closes: "31 Dec 2028",
    description: "Financial assistance for primary producers and communities affected by eligible natural disasters."
  },
  {
    id: 3,
    title: "Gnangara Horticulture Water Use Efficiency Grant",
    category: "Agriculture",
    status: "Open",
    closes: "30 Jun 2026",
    description: "Support for horticulture businesses in the Gnangara groundwater system to improve water use efficiency."
  },
  {
    id: 4,
    title: "Farm Debt Mediation Scheme WA",
    category: "Agriculture",
    status: "Open",
    closes: "30 Jun 2026",
    description: "Provides a structured negotiation process for farmers and lenders to resolve farm debt issues."
  },
  {
    id: 5,
    title: "Regional Economic Development (RED) Grants",
    category: "Regional development",
    status: "Closed",
    closes: "9 Jan 2026",
    description: "State Government initiative investing in community-driven projects that contribute to economic growth in regional Western Australia."
  },
  {
    id: 6,
    title: "John Cripps Horticulture Scholarships",
    category: "Agriculture",
    status: "Closed",
    closes: "13 Feb 2026",
    description: "Scholarships to support individuals pursuing a career in Western Australia's horticulture industry."
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
    'Regional development': false,
    'Emergencies': false,
    'Food and beverage': false
  });

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
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant shadow-sm">
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
                    setCategoryFilter({'Agriculture': false, 'Regional development': false, 'Emergencies': false, 'Food and beverage': false});
                  }}
                  className="mt-md font-label-md text-label-md text-primary hover:underline">
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredGrants.map(grant => (
                <article key={grant.id} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row justify-between gap-md mb-md">
                    <div>
                      <div className="flex flex-wrap items-center gap-sm mb-xs">
                        <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded">{grant.category}</span>
                        <span className={`font-label-sm text-label-sm px-2 py-1 rounded flex items-center gap-1 ${grant.status === 'Open' ? 'bg-[#e8f5e9] text-[#1b5e20]' : 'bg-surface-variant text-on-surface-variant'}`}>
                          {grant.status === 'Open' && <span className="w-2 h-2 rounded-full bg-[#4caf50]"></span>}
                          {grant.status}
                        </span>
                      </div>
                      <h2 className="font-headline-md text-headline-md text-primary mb-sm">{grant.title}</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">{grant.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-right md:w-48 bg-surface-container p-sm rounded border border-outline-variant self-start">
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Closes</p>
                      <p className="font-body-md text-body-md text-on-surface font-semibold">{grant.closes}</p>
                    </div>
                  </div>
                  <div className="border-t border-outline-variant pt-md flex justify-between items-center mt-auto">
                    <a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors flex items-center gap-xs" href="#">
                      View Guidelines <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                    {grant.status === 'Open' && (
                      <button className="bg-[#b58500] text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:bg-secondary transition-colors font-bold">
                        Check Eligibility
                      </button>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}
