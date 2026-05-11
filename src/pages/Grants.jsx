import React from 'react';

export default function Grants() {
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
                  <input className="w-full pl-10 pr-3 py-2 border border-outline-variant rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-surface-container-lowest" placeholder="Keywords..." type="text"/>
                </div>
              </div>
              {/* Status */}
              <div className="mb-lg border-t border-outline-variant pt-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-sm">Status</h4>
                <div className="flex flex-col gap-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input defaultChecked className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md text-on-surface-variant">Open</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md text-on-surface-variant">Closed</span>
                  </label>
                </div>
              </div>
              {/* Category */}
              <div className="mb-lg border-t border-outline-variant pt-md">
                <h4 className="font-label-md text-label-md text-on-surface mb-sm">Category</h4>
                <div className="flex flex-col gap-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md text-on-surface-variant">Agriculture</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md text-on-surface-variant">Regional</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-outline-variant focus:ring-primary" type="checkbox"/>
                    <span className="font-body-md text-body-md text-on-surface-variant">Sustainability</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Grants List */}
          <div className="flex-grow flex flex-col gap-md">
            <div className="flex justify-between items-end mb-sm">
              <p className="font-body-md text-body-md text-on-surface-variant">Showing 12 opportunities</p>
              <select className="border border-outline-variant rounded py-1 px-3 bg-surface-container-lowest font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sort by: Closing Soon</option>
                <option>Sort by: Newest</option>
                <option>Sort by: A-Z</option>
              </select>
            </div>
            
            {/* Grant Card 1 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col md:flex-row justify-between gap-md mb-md">
                <div>
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded">Agriculture</span>
                    <span className="font-label-sm text-label-sm bg-[#e8f5e9] text-[#1b5e20] px-2 py-1 rounded flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#4caf50]"></span> Open
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-sm">Sustainable Farming Innovation Grant</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Funding to support the adoption of new technologies and sustainable practices in broadacre farming and horticulture. Up to $50,000 in matched funding available.</p>
                </div>
                <div className="flex-shrink-0 text-right md:w-48 bg-surface-container p-sm rounded border border-outline-variant self-start">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Closes</p>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">15 Nov 2024</p>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-md flex justify-between items-center mt-auto">
                <a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors flex items-center gap-xs" href="#">
                  View Guidelines <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button className="bg-[#b58500] text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:bg-secondary transition-colors font-bold">
                  Check Eligibility
                </button>
              </div>
            </article>
            
            {/* Grant Card 2 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col md:flex-row justify-between gap-md mb-md">
                <div>
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed-variant px-2 py-1 rounded">Regional</span>
                    <span className="font-label-sm text-label-sm bg-[#e8f5e9] text-[#1b5e20] px-2 py-1 rounded flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#4caf50]"></span> Open
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-primary mb-sm">Regional Economic Development (RED) Grants</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">State Government initiative investing in community-driven projects that contribute to economic growth in regional Western Australia.</p>
                </div>
                <div className="flex-shrink-0 text-right md:w-48 bg-surface-container p-sm rounded border border-outline-variant self-start">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Closes</p>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">30 Nov 2024</p>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-md flex justify-between items-center mt-auto">
                <a className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors flex items-center gap-xs" href="#">
                  View Guidelines <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <button className="bg-[#b58500] text-on-primary font-label-md text-label-md py-2 px-4 rounded hover:bg-secondary transition-colors font-bold">
                  Check Eligibility
                </button>
              </div>
            </article>
            
          </div>
        </div>
      </main>
    </>
  );
}
