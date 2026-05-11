import React from 'react';

export default function Resources() {
  return (
    <>
      {/* Page Header & Global Search */}
      <div className="bg-surface-container-low border-b border-outline-variant py-xl w-full">
        <div className="max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Industry Resources &amp; Tools</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            Explore curated Industry Digital Plans, software tools, and expert guides designed to accelerate the growth and efficiency of your business.
          </p>
          <div className="relative w-full max-w-2xl">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline text-[28px]">search</span>
            <input className="w-full pl-[56px] pr-32 py-md border border-outline-variant rounded-xl bg-surface-container-lowest text-body-lg font-body-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow" placeholder="Search for tools, digital plans, or topics..." type="text"/>
            <button className="absolute right-sm top-1/2 -translate-y-1/2 bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
              Find Resources
            </button>
          </div>
        </div>
      </div>

      {/* Main Directory Layout */}
      <main className="flex-1 max-w-container-max mx-auto w-full px-gutter py-xl flex flex-col md:flex-row gap-xl relative">
        {/* Left Sidebar: Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-lg">
          {/* Filter Group: Categories */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
            <h2 className="font-label-md text-label-md text-primary font-bold mb-md pb-xs border-b border-outline-variant tracking-wide">CATEGORIES</h2>
            <ul className="flex flex-col gap-sm">
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">E-commerce</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors font-semibold text-primary">HR &amp; Payroll</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Customer Engagement</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Cybersecurity</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Data Analytics</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Inventory Management</span>
                </label>
              </li>
            </ul>
          </div>
          {/* Filter Group: Resource Type */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
            <h2 className="font-label-md text-label-md text-primary font-bold mb-md pb-xs border-b border-outline-variant tracking-wide">RESOURCE TYPE</h2>
            <ul className="flex flex-col gap-sm">
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input defaultChecked className="border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" name="resource_type" type="radio"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">All Types</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" name="resource_type" type="radio"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Industry Digital Plan (IDP)</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" name="resource_type" type="radio"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Software Tool</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input className="border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" name="resource_type" type="radio"/>
                  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Guide / Blueprint</span>
                </label>
              </li>
            </ul>
          </div>
          <button className="w-full py-sm border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-variant transition-colors">
            Clear Filters
          </button>
        </aside>

        {/* Right Content: Grid */}
        <section className="flex-1 flex flex-col gap-lg">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-sm bg-surface-container-lowest p-sm px-md rounded-lg border border-outline-variant shadow-sm">
            <span className="font-body-md text-body-md text-on-surface-variant">Showing <strong className="text-on-surface">12</strong> resources for <strong className="text-on-surface">HR &amp; Payroll</strong></span>
            <div className="flex items-center gap-sm w-full sm:w-auto">
              <span className="font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Sort by:</span>
              <select className="border border-outline-variant rounded-lg bg-surface-container-lowest text-body-md font-body-md py-xs pl-sm pr-xl focus:ring-2 focus:ring-primary focus:outline-none w-full sm:w-auto">
                <option>Recommended</option>
                <option>Newest Added</option>
                <option>A-Z</option>
              </select>
            </div>
          </div>
          {/* Bento Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-lg">
            {/* Card 1 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
              <div className="h-48 w-full bg-cover bg-center relative overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBIjxh5XhQNuJ4N80pGE3slA00SS5XpgebW-1wFAbu4sQ_wPDDqjx-GRpXbPzhfodyHjiirotdZHCAAF7Evu3yJWASpLJljlF3r57mBKI9dNwnDgV44TXtlrNwlJb7pxZwSaQKC0fAB_UC5PHGTdb-WfArGBE-G1L1Na9YPmgM-iZb35CPzxFNfOcQ3fc0zb5rsXZQkekOLgfGV8zJhH_QWbN8z-TMkyaHjktSuk5GmIjIJv33HJ6AV1WjQPDre1T4Sjb74mmWy6aS')"}}>
                <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded text-primary font-label-sm text-label-sm font-bold border border-outline-variant">
                  Industry Digital Plan
                </div>
              </div>
              <div className="p-lg flex flex-col flex-1 border-t border-outline-variant">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">HR Management IDP</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1 line-clamp-3">A complete roadmap for digitizing your human resources operations. Includes maturity assessments and recommended digital solutions for core HR, payroll, and talent management.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-sm py-xs rounded">Guide</span>
                  <a className="inline-flex items-center justify-center border border-primary text-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </article>
            {/* Card 2 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
              <div className="h-48 w-full bg-cover bg-center relative overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIR3YRevo1yzOQoKWDH_ai7Tu22WkYQxUjxoYRjf4l8IGzrvTqkHviFQ6HamkZdB47eBj0Wv0hUIeezwJmKA3XQhtkUZ2KVbWd43AGDlKMoRbb_NKaeO__nq8SiUa6hfMU2W-zhUqqb0p0PQfGQmFx5c491RrtmAbAU2vg33FK3jW98sZLQI1yHk_-uN8RBx8MsN-v1ZJbVvlJJGcEtkdIXI-9NPYXvIq8M-8z5_RoLyUJG-zZF5Bo0WyU6fDfhD4SX77mMfbos_aQ')"}}>
                <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded text-secondary font-label-sm text-label-sm font-bold border border-outline-variant">
                  Software Tool
                </div>
              </div>
              <div className="p-lg flex flex-col flex-1 border-t border-outline-variant">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">Automated Payroll Systems</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1 line-clamp-3">Discover evaluated payroll software solutions tailored for WA small businesses. Compare features like Single Touch Payroll (STP) compliance, automated superannuation, and employee self-service portals.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-sm py-xs rounded">Tool Comparison</span>
                  <a className="inline-flex items-center justify-center border border-primary text-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors" href="#">
                    View Tools
                  </a>
                </div>
              </div>
            </article>
            {/* Card 3 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
              <div className="h-48 w-full bg-cover bg-center relative overflow-hidden flex items-center justify-center bg-primary-fixed-dim">
                <span className="material-symbols-outlined text-[64px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>fact_check</span>
                <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded text-primary font-label-sm text-label-sm font-bold border border-outline-variant">
                  Readiness Check
                </div>
              </div>
              <div className="p-lg flex flex-col flex-1 border-t border-outline-variant">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">Digital Readiness Assessment</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1 line-clamp-3">Take a 5-minute interactive assessment to evaluate your current HR and operational digital maturity. Receive a customized list of recommended tools and next steps based on your score.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-sm py-xs rounded">Interactive Tool</span>
                  <a className="inline-flex items-center justify-center bg-secondary text-on-secondary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm" href="#">
                    Start Assessment
                  </a>
                </div>
              </div>
            </article>
            {/* Card 4 */}
            <article className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 group">
              <div className="h-48 w-full bg-cover bg-center relative overflow-hidden" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPEO_rzRhe_Y33WV7Ac84aLh-h66y9vK3riz2VsCJLxH-Z6pCCDiWOFbkAgP_v1WkuZQtrck0H_agWf2_nCQv9ByRP7noz5Zqg44fPMhvXUqtEICbQd45mF3cxjs66zMDl5DfI3X30GcGVziAXnWNabq5r66TbgcLWxevL42v0JjFIWliLg63mgKxm8FHPXU1lmwjHabIaUzonTB3aEVwtAnaL5kXWTSHfY0C26ygaDihFbgHZAWdqmXniZfWRSIxw0u1585r-mwoS')"}}>
                <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-sm py-xs rounded text-secondary font-label-sm text-label-sm font-bold border border-outline-variant">
                  Software Tool
                </div>
              </div>
              <div className="p-lg flex flex-col flex-1 border-t border-outline-variant">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">Employee Engagement Platforms</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg flex-1 line-clamp-3">Explore platforms designed to boost morale and retention. Features include pulse surveys, peer recognition tools, and unified internal communications suitable for remote and hybrid teams.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-variant px-sm py-xs rounded">Directory</span>
                  <a className="inline-flex items-center justify-center border border-primary text-primary px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors" href="#">
                    View Tools
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-xl gap-sm">
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-lg font-label-md">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface hover:bg-surface-variant transition-colors font-label-md">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface hover:bg-surface-variant transition-colors font-label-md">3</button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
        
        {/* SideNavBar (Shared Component - Help Widget) */}
        <div className="hidden xl:flex fixed right-0 top-1/4 h-fit z-40 flex-col w-72 rounded-l-xl shadow-md bg-surface-container-high border-y border-l border-outline-variant overflow-hidden">
          <div className="p-md bg-primary text-on-primary flex flex-col gap-xs">
            <span className="font-headline-md text-headline-md">Need Help?</span>
            <span className="font-body-md text-body-md text-on-primary/90">We're here to guide you.</span>
          </div>
          <div className="flex flex-col py-sm">
            <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">support_agent</span>
              <span className="font-label-md text-label-md">Help Center</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">chat</span>
              <span className="font-label-md text-label-md">Contact Advisor</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">description</span>
              <span className="font-label-md text-label-md">Quick Guides</span>
            </a>
            <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-variant transition-colors group" href="#">
              <span className="material-symbols-outlined group-hover:text-primary">rate_review</span>
              <span className="font-label-md text-label-md">Feedback</span>
            </a>
          </div>
          <div className="p-md border-t border-outline-variant bg-surface-container-lowest">
            <button className="w-full bg-secondary text-on-secondary py-sm rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm">
              Check Eligibility
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
