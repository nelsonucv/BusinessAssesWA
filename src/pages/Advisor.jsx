import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const advisorData = {
  areas: [
    { id: 'sales', title: 'Sales & Marketing', icon: 'campaign' },
    { id: 'hr', title: 'Human Resource', icon: 'groups' },
    { id: 'operations', title: 'Operations', icon: 'manufacturing' },
    { id: 'cybersecurity', title: 'Cybersecurity', icon: 'security' },
    { id: 'sustainability', title: 'Sustainability', icon: 'eco' }
  ],
  challenges: {
    'sales': [
      "Can’t keep track of sales leads, set targets, or quickly make quotes and sales reports.",
      "Customers aren’t coming back because there aren’t enough special offers or rewards for them.",
      "Too many customer questions coming in, so we can’t keep up and provide good service.",
      "It's hard to accept different types of payments from customers smoothly."
    ],
    'hr': [
      "Payroll, claims, and staff leave are all handled by hand—it's messy and time-consuming.",
      "Not enough staff to handle HR work smoothly—things get missed and take too long.",
      "It’s tough to keep track of when my staff are working, on leave, or claiming expenses."
    ],
    'operations': [
      "Hard to keep track of what’s sold and what’s in stock, causing daily headaches and lost time.",
      "Manual work makes it tough to keep track of sales and accounts, causing daily hassles and wasted time.",
      "Struggling to keep sales, stock, and accounts organised, causing stress and mistakes."
    ],
    'cybersecurity': [
      "No way to know if harmful viruses or malware are attacking my business devices.",
      "No automatic way to stop outsiders from getting into my company’s network.",
      "Business operations halted if I lose access to important files or data.",
      "No easy way to keep my business safe from viruses, hackers, or losing important files."
    ],
    'sustainability': [
      "Hard to keep track of my business’s carbon footprint using recognised standards, both locally and overseas."
    ]
  },
  features: [
    "Cloud-based access for remote working",
    "Automated reporting and analytics",
    "Mobile application support",
    "Integration with existing software",
    "Compliance with local regulations and ISO standards"
  ]
};

export default function Advisor() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const toggleChallenge = (challenge) => {
    if (selectedChallenges.includes(challenge)) {
      setSelectedChallenges(selectedChallenges.filter(c => c !== challenge));
    } else {
      setSelectedChallenges([...selectedChallenges, challenge]);
    }
  };

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Validation to disable "Next" button
  const isNextDisabled = () => {
    if (currentStep === 1 && !selectedArea) return true;
    if (currentStep === 2 && selectedChallenges.length === 0) return true;
    if (currentStep === 3 && selectedFeatures.length === 0) return true;
    return false;
  };

  const currentAreaObj = advisorData.areas.find(a => a.id === selectedArea);

  return (
    <>
      {/* SideNavBar (Helpful Sidebar) */}
      <aside className="hidden xl:flex fixed right-0 top-1/4 h-fit z-40 flex-col bg-surface-container-high shadow-md w-72 rounded-l-xl overflow-hidden border border-outline-variant border-r-0">
        <div className="p-lg bg-primary-container text-on-primary flex flex-col items-center text-center gap-sm">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest border-2 border-secondary-container overflow-hidden flex items-center justify-center shadow-md">
            <img alt="Digital Advisor Support" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnMaGUXQAc7FF3IEhdJaQxDOsWd1MDzWZ2qFubqGMsFxsn_pAS5o1QS2RchYwLVRtDJeJCierJGuaDgx-OCd7DmTfPy1aNCokI9M-jrIA5WneR9-e-G5mlOCKknHMDcgc3gYcEM_bocdtA9xqD3f40nTwjmJJ0EMznchZI8MccxRYWGZOsNMy5-NnycMHs2wIKFLs9bCjKVgI4QumVpATwDxLW_o4Vtk-7RjUVLtFkP8k_VdWFf8P_ZeCDqvSSs48j3hu4eJR00SN1"/>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md font-bold">Need Help?</h3>
            <p className="font-body-md text-body-md text-on-primary/90 mt-1">We're here to guide you.</p>
          </div>
        </div>
        <nav className="flex flex-col p-sm gap-xs">
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-variant hover:translate-x-[-4px] transition-transform duration-300 rounded-lg" href="#">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="font-label-md text-label-md">Help Center</span>
          </a>
          <a className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container rounded-lg scale-95 origin-left font-bold shadow-sm" href="#">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
            <span className="font-label-md text-label-md">Contact Advisor</span>
          </a>
        </nav>
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
              <div className="absolute top-1/2 left-0 h-[2px] bg-primary -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%` }}></div>
              
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center gap-xs bg-surface px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md font-bold ring-4 ring-surface transition-colors ${step === currentStep ? 'bg-primary-container text-on-primary shadow-sm' : step < currentStep ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                    {step < currentStep ? <span className="material-symbols-outlined text-[16px]">check</span> : step}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between max-w-lg mx-auto mt-2 px-2">
               <span className={`font-label-sm text-label-sm text-center w-12 ${currentStep >= 1 ? 'text-primary-container font-bold' : 'text-on-surface-variant'}`}>Area</span>
               <span className={`font-label-sm text-label-sm text-center w-16 ${currentStep >= 2 ? 'text-primary-container font-bold' : 'text-on-surface-variant'}`}>Challenges</span>
               <span className={`font-label-sm text-label-sm text-center w-16 ${currentStep >= 3 ? 'text-primary-container font-bold' : 'text-on-surface-variant'}`}>Features</span>
               <span className={`font-label-sm text-label-sm text-center w-12 ${currentStep >= 4 ? 'text-primary-container font-bold' : 'text-on-surface-variant'}`}>Results</span>
            </div>
          </div>

          {/* Wizard Content */}
          <div className="p-xl flex flex-col gap-xl min-h-[400px]">
            {/* Step 1: Business Area */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h1 className="font-headline-lg text-headline-lg text-primary-container">Start by choosing the business area to improve:</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-4">
                  {advisorData.areas.map(area => (
                    <label key={area.id} className="relative flex flex-col items-center justify-center p-xl border border-outline-variant rounded-xl cursor-pointer hover:border-secondary-container hover:shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/20 has-[:checked]:ring-1 has-[:checked]:ring-primary-container">
                      <input 
                        className="sr-only" 
                        name="business_area" 
                        type="radio" 
                        value={area.id}
                        checked={selectedArea === area.id}
                        onChange={() => setSelectedArea(area.id)}
                      />
                      <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-3 group-has-[:checked]:text-primary-container">{area.icon}</span>
                      <span className="font-title-md text-title-md text-on-surface text-center font-bold">{area.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Challenges */}
            {currentStep === 2 && currentAreaObj && (
              <div className="flex flex-col gap-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h1 className="font-headline-lg text-headline-lg text-primary-container">What challenges are you experiencing in {currentAreaObj.title}?</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Select all that apply.</p>
                </div>
                <div className="flex flex-col gap-sm mt-4">
                  {advisorData.challenges[selectedArea].map((challenge, idx) => (
                    <label key={idx} className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-sm transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                      <input 
                        className="w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" 
                        type="checkbox" 
                        checked={selectedChallenges.includes(challenge)}
                        onChange={() => toggleChallenge(challenge)}
                      />
                      <span className="ml-md font-body-lg text-body-lg text-on-surface group-has-[:checked]:text-primary-container group-has-[:checked]:font-medium">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Features */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h1 className="font-headline-lg text-headline-lg text-primary-container">Which features would you like your solution to include?</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Select all that apply.</p>
                </div>
                <div className="flex flex-col gap-sm mt-4">
                  {advisorData.features.map((feature, idx) => (
                    <label key={idx} className="relative flex items-center p-md border border-outline-variant rounded-lg cursor-pointer hover:border-secondary-container hover:shadow-sm transition-all bg-surface-container-lowest group has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/10">
                      <input 
                        className="w-5 h-5 rounded-[4px] border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer" 
                        type="checkbox" 
                        checked={selectedFeatures.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                      />
                      <span className="ml-md font-body-lg text-body-lg text-on-surface group-has-[:checked]:text-primary-container group-has-[:checked]:font-medium">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <div className="flex flex-col gap-lg animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                    <span className="material-symbols-outlined text-4xl">task_alt</span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-primary-container">Your Discovery Results</h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm max-w-xl mx-auto">
                    Based on your focus on <strong>{currentAreaObj?.title}</strong>, we have identified tailored digital solutions for you.
                  </p>
                </div>

                <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant mt-sm">
                  <h3 className="font-title-md text-title-md font-bold mb-md">Key Focus Areas:</h3>
                  <ul className="list-disc pl-lg space-y-xs text-on-surface">
                    {selectedChallenges.slice(0, 2).map((c, i) => (
                      <li key={i} className="font-body-md">{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mt-lg">
                   <Link to="/resources" className="inline-flex items-center gap-xs px-xl py-3 bg-primary text-on-primary font-label-lg rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
                     View Matching Solutions
                     <span className="material-symbols-outlined">arrow_forward</span>
                   </Link>
                </div>
              </div>
            )}
          </div>

          {/* Wizard Navigation Footer */}
          <div className="bg-surface-container px-xl py-lg border-t border-outline-variant flex justify-between items-center w-full">
            {currentStep > 1 && currentStep < 4 ? (
              <button onClick={handleBack} className="px-lg py-2 border-2 border-primary-container text-primary-container font-label-md text-label-md rounded-lg hover:bg-primary-container/5 transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none flex items-center gap-xs" type="button">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back
              </button>
            ) : (
               <div /> // Placeholder to keep Next button on the right
            )}
            
            {currentStep < 4 && (
              <button 
                onClick={handleNext}
                disabled={isNextDisabled()}
                className="px-lg py-2.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container/90 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary-container focus:outline-none flex items-center gap-xs disabled:opacity-50 disabled:cursor-not-allowed" 
                type="button"
              >
                {currentStep === 3 ? "Get Results" : "Next Step"}
                {currentStep !== 3 && <span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
              </button>
            )}
          </div>

        </div>
      </main>
    </>
  );
}
