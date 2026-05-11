import React from 'react';
import { Link } from 'react-router-dom';

export default function Advisor() {
  return (
    <>
      {/* SideNavBar (Helpful Sidebar) */}
      <aside className="hidden xl:flex fixed right-0 top-1/4 h-fit z-40 flex-col bg-surface-container-high shadow-md w-72 rounded-l-xl overflow-hidden border border-outline-variant border-r-0">
        {/* Header */}
        <div className="p-lg bg-primary-container text-on-primary flex flex-col items-center text-center gap-sm">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest border-2 border-secondary-container overflow-hidden flex items-center justify-center shadow-md">
            <img alt="Digital Advisor Support" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnMaGUXQAc7FF3IEhdJaQxDOsWd1MDzWZ2qFubqGMsFxsn_pAS5o1QS2RchYwLVRtDJeJCierJGuaDgx-OCd7DmTfPy1aNCokI9M-jrIA5WneR9-e-G5mlOCKknHMDcgc3gYcEM_bocdtA9xqD3f40nTwjmJJ0EMznchZI8MccxRYWGZOsNMy5-NnycMHs2wIKFLs9bCjKVgI4QumVpATwDxLW_o4Vtk-7RjUVLtFkP8k_VdWFf8P_ZeCDqvSSs48j3hu4eJR00SN1"/>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md font-bold">Need Help?</h3>
            <p className="font-body-md text-body-md text-on-primary/90 mt-1">We're here to guide you.</p>
          </div>
        </div>
        {/* Navigation Tabs */}
        <nav className="flex flex-col p-sm gap-xs">
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant hover:translate-x-[-4px] transition-transform duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </a>
          <a className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container rounded-lg scale-95 origin-left font-bold shadow-sm" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
            <span className="font-label-md text-label-md">Contact Advisor</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant hover:translate-x-[-4px] transition-transform duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">description</span>
            <span className="font-label-md text-label-md">Quick Guides</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant hover:translate-x-[-4px] transition-transform duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">rate_review</span>
            <span className="font-label-md text-label-md">Feedback</span>
          </a>
        </nav>
        {/* CTA */}
        <div className="p-md pt-0 mt-sm">
          <button className="w-full py-2 px-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors shadow-sm">
            Check Eligibility
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-xl flex flex-col items-center xl:pr-[320px]">
        {/* Digital Advisor Container */}
        <div className="w-full max-w-3xl bg-surface-container-lowest shadow-[0px_4px_12px_rgba(0,0,0,0.08)] rounded-xl border border-outline-variant overflow-hidden flex flex-col">
          {/* Progress Stepper Header */}
          <div className="bg-surface px-lg py-md border-b border-outline-variant w-full">
            <div className="flex items-center justify-between w-full max-w-lg mx-auto relative">
              {/* Progress Line Background */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -z-10 -translate-y-1/2"></div>
              {/* Active Progress Line */}
              <div className="absolute top-1/2 left-0 w-[0%] h-[2px] bg-primary -z-10 -translate-y-1/2 transition-all duration-500"></div>
              {/* Step 1 (Current) */}
              <div className="flex flex-col items-center gap-xs bg-surface px-2">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md font-bold shadow-sm ring-4 ring-surface">
                  1
                </div>
                <span className="font-label-sm text-label-sm text-primary-container font-bold">Business</span>
              </div>
              {/* Step 2 (Upcoming) */}
              <div className="flex flex-col items-center gap-xs bg-surface px-2">
                <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md ring-4 ring-surface">
                  2
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Readiness</span>
              </div>
              {/* Step 3 (Upcoming) */}
              <div className="flex flex-col items-center gap-xs bg-surface px-2">
                <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md ring-4 ring-surface">
                  3
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Results</span>
              </div>
            </div>
          </div>
          {/* Wizard Step 1 Content */}
          <div className="p-xl flex flex-col gap-xl">
            <div className="text-center">
              <h1 className="font-headline-lg text-headline-lg text-primary-container">Tell us about your business</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-sm max-w-xl mx-auto">
                This helps us tailor our digital recommendations and grant eligibility specifically to your industry and scale.
              </p>
            </div>
            {/* Form Section */}
            <form className="flex flex-col gap-xl w-full">
              {/* Industry Dropdown */}
              <div className="flex flex-col gap-sm">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="industry">Primary Industry</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface text-body-md font-body-md rounded-lg px-md py-3 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary-container shadow-sm cursor-pointer transition-shadow" id="industry" defaultValue="">
                    <option disabled value="">Select an industry...</option>
                    <option value="agriculture">Agriculture &amp; Forestry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail Trade</option>
                    <option value="tech">Technology &amp; Media</option>
                    <option value="tourism">Tourism &amp; Hospitality</option>
                    <option value="other">Other Services</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              {/* Business Size (Radio Tiles) */}
              <div className="flex flex-col gap-sm">
                <label className="font-label-md text-label-md text-on-surface">Business Size (Employees)</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                  {/* Option 1 */}
                  <label className="relative flex flex-col items-center justify-center p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/20 has-[:checked]:ring-1 has-[:checked]:ring-primary-container">
                    <input className="sr-only" name="business_size" type="radio" value="micro"/>
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-has-[:checked]:text-primary-container">person</span>
                    <span className="font-label-md text-label-md text-on-surface text-center">Micro</span>
                    <span className="font-body-md text-[14px] text-on-surface-variant text-center mt-1">1 - 4</span>
                  </label>
                  {/* Option 2 */}
                  <label className="relative flex flex-col items-center justify-center p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/20 has-[:checked]:ring-1 has-[:checked]:ring-primary-container">
                    <input className="sr-only" name="business_size" type="radio" value="small"/>
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-has-[:checked]:text-primary-container">groups</span>
                    <span className="font-label-md text-label-md text-on-surface text-center">Small</span>
                    <span className="font-body-md text-[14px] text-on-surface-variant text-center mt-1">5 - 19</span>
                  </label>
                  {/* Option 3 */}
                  <label className="relative flex flex-col items-center justify-center p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/20 has-[:checked]:ring-1 has-[:checked]:ring-primary-container">
                    <input className="sr-only" name="business_size" type="radio" value="medium"/>
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-has-[:checked]:text-primary-container">corporate_fare</span>
                    <span className="font-label-md text-label-md text-on-surface text-center">Medium</span>
                    <span className="font-body-md text-[14px] text-on-surface-variant text-center mt-1">20 - 199</span>
                  </label>
                </div>
              </div>
              {/* Primary Goals (Checkbox Bento Grid) */}
              <div className="flex flex-col gap-sm">
                <label className="font-label-md text-label-md text-on-surface">What are your primary goals? <span className="text-on-surface-variant font-normal">(Select up to 3)</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {/* Goal 1 */}
                  <label className="relative flex items-start p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                    <input className="mt-1 w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" name="goals" type="checkbox" value="sales"/>
                    <div className="ml-sm flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface group-has-[:checked]:text-primary-container">Increase Sales</span>
                      <span className="font-body-md text-[14px] text-on-surface-variant mt-xs leading-tight">Expand reach through e-commerce and digital marketing.</span>
                    </div>
                  </label>
                  {/* Goal 2 */}
                  <label className="relative flex items-start p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                    <input className="mt-1 w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" name="goals" type="checkbox" value="efficiency"/>
                    <div className="ml-sm flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface group-has-[:checked]:text-primary-container">Improve Efficiency</span>
                      <span className="font-body-md text-[14px] text-on-surface-variant mt-xs leading-tight">Automate workflows and upgrade internal operational tools.</span>
                    </div>
                  </label>
                  {/* Goal 3 */}
                  <label className="relative flex items-start p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                    <input className="mt-1 w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" name="goals" type="checkbox" value="security"/>
                    <div className="ml-sm flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface group-has-[:checked]:text-primary-container">Enhance Cyber Security</span>
                      <span className="font-body-md text-[14px] text-on-surface-variant mt-xs leading-tight">Protect business data and secure customer transactions.</span>
                    </div>
                  </label>
                  {/* Goal 4 */}
                  <label className="relative flex items-start p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                    <input className="mt-1 w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" name="goals" type="checkbox" value="global"/>
                    <div className="ml-sm flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface group-has-[:checked]:text-primary-container">Go Global</span>
                      <span className="font-body-md text-[14px] text-on-surface-variant mt-xs leading-tight">Prepare digital channels for international export and trade.</span>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
          {/* Wizard Navigation Footer */}
          <div className="bg-surface-container px-xl py-lg border-t border-outline-variant flex justify-between items-center w-full">
            <button className="px-lg py-2 border-2 border-primary-container text-primary-container font-label-md text-label-md rounded-lg hover:bg-primary-container/5 transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none flex items-center gap-xs" type="button">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Cancel
            </button>
            <button className="px-lg py-2.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container/90 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary-container focus:outline-none flex items-center gap-xs" type="button">
              Next Step
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
