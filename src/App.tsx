// src/App.tsx
import React, { useState } from 'react';
import OptionSelection from './OptionSelection';
import Summary from './Summary';
import 'lord-icon-element';

type Step = 'type' | 'design' | 'size' | 'payment' | 'integration' | 'login' | 'multilingual' | 'search' | 'seo' | 'stage' | 'summary';

interface Selection {
  type: string;
  design: string;
  size: string;
  payment: string;
  integration: string;
  login: string;
  multilingual: string;
  search: string;
  seo: string;
  stage: string;
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('type');
  const [selection, setSelection] = useState<Selection>({
    type: '',
    design: '',
    size: '',
    payment: '',
    integration: '',
    login: '',
    multilingual: '',
    search: '',
    seo: '',
    stage: '',
  });

  const [total, setTotal] = useState<number>(0);
  const totalSteps = 10;

  const getCurrentStepNumber = (): number => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'payment', 'integration', 'login', 'multilingual', 'search', 'seo', 'stage'];
    return stepOrder.indexOf(step) + 1;
  };


  const handleTypeSelect = (type: string, price: number) => {
    setSelection({ ...selection, type });
    setTotal(total + price);
    setStep('design');
  };


  const handleDesignSelect = (design: string, price: number) => {
    setSelection({ ...selection, design });
    setTotal(total + price);
    setStep('size');
  };

  const handleSizeSelect = (size: string, price: number) => {
    setSelection({ ...selection, size });
    setTotal(total + price);
    setStep('payment');
  };

  const handlePaymentSelect = (payment: string, price: number) => {
    setSelection({ ...selection, payment });
    setTotal(total + price);
    setStep('integration');
  };

  const handleIntegrationSelect = (integration: string, price: number) => {
    setSelection({ ...selection, integration });
    setTotal(total + price);
    setStep('login');
  };

  const handleLoginSelect = (value: string, price: number) => {
    setSelection({ ...selection, login: value });
    setTotal(total + price);
    setStep('multilingual'); // Goes to the next step
  };

  const handleMultilingualSelect = (value: string, price: number) => {
    setSelection({ ...selection, multilingual: value });
    setTotal(total + price);
    setStep('search'); // Goes to the next step
  };

  const handleSearchSelect = (value: string, price: number) => {
    setSelection({ ...selection, search: value });
    setTotal(total + price);
    setStep('seo'); // Goes to the next step
  };

  const handleSEOSelect = (value: string, price: number) => {
    setSelection({ ...selection, seo: value });
    setTotal(total + price);
    setStep('stage'); // Goes to the next step
  };

  const handleStageSelect = (value: string, price: number) => {
    setSelection({ ...selection, stage: value });
    setTotal(total + price);
    setStep('summary'); // Goes to the final summary step
  };

  const handleReset = () => {
    setSelection({ type: '', design: '', size: '', payment: '', integration: '', login: '', multilingual: '', search: '', seo: '', stage: '' });
    setTotal(0);
    setStep('type');
  };

  const typeOptions = [
    { label: 'Ecommerce / Webshop', value: 'Ecommerce / Webshop', price: 3000, lordicon: 'https://cdn.lordicon.com/uktwwckg.json' },
    { label: 'Hjemmeside med blog', value: 'Blog', price: 1000, lordicon: 'https://cdn.lordicon.com/kmifwsos.json' },
    { label: 'Hjemmeside til erhverv', value: 'Business', price: 1750, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
    { label: 'Custom hjemmeside', value: 'Custom website', price: 5000, lordicon: 'https://cdn.lordicon.com/uktwwckg.json' },
  ];

  const designOptions = [
    { label: 'Brug en skabelon', value: 'Template', price: 500, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
    { label: 'Custom design', value: 'Custom design', price: 1500, lordicon: 'https://cdn.lordicon.com/piwupaqb.json' },
    { label: 'Jeg har ikke brug for design', value: 'Nej design', price: 0, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Jeg ved det ikke', value: 'Idk', price: 350, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
  ];

  const sizeOptions = [
    { label: 'Lille: mindre end 3 undersider/50 produkter', value: 'Small', price: 0, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Mellem: mindre end 10 undersider/200 produkter', value: 'Medium', price: 750, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Stor: mere end 10 sider/200 produkter', value: 'Large', price: 1500, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Jeg ved det ikke', value: 'Unknown Size', price: 350, lordicon: 'https://cdn.lordicon.com/rjpgjson.json' },
  ];

  const paymentOptions = [
    { label: 'Ja', value: 'Ja', price: 500, lordicon: 'https://cdn.lordicon.com/vixogsdv.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
    { label: 'Jeg ved det ikke', value: 'Unknown Payment', price: 250, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
  ];

  const integrationOptions = [
    { label: 'Ja', value: 'Ja', price: 2500, lordicon: 'https://cdn.lordicon.com/wvsldibu.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke', value: 'Unknown Integration', price: 250, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
  ];

  const loginOptions = [
    { label: 'Ja', value: 'Ja', price: 500, lordicon: 'https://cdn.lordicon.com/wzwygmng.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/ghhwiltn.json' },
    { label: 'Jeg ved det ikke', value: 'Unknown Login', price: 250, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
  ];

  const multilingualOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/wzwygmng.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-7-2.png' },
    { label: 'Jeg ved det ikke', value: 'Unknown Multilingual', price: 250, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-7-3.png' },
  ];

  const searchOptions = [
    { label: 'Ja', value: 'Ja', price: 350, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-1.png' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-2.png' },
    { label: 'Jeg ved det ikke', value: 'Unknown Search', price: 250, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-3.png' },
  ];

  const seoOptions = [
    { label: 'Ja', value: 'Ja', price: 100, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-1.png' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-2.png' },
    { label: 'Jeg ved det ikke', value: 'Unknown SEO', price: 0, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-3.png' },
  ];

  const stageOptions = [
    { label: 'Det er bare en idé', value: 'Idea', price: 350, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'Jeg har sketches', value: 'Sketches', price: 250, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-2.png' },
    { label: 'Den er under udvikling', value: 'Development', price: 150, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-3.png' },
    { label: 'Den er allerede lavet', value: 'Created', price: 0, lordicon: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-4.png' },
  ];

  const renderCurrentStep = () => {
    switch (step) {
      case 'type':
        return <OptionSelection title="Hvilken type hjemmeside har du brug for?" options={typeOptions} onSelect={handleTypeSelect} />;
      case 'design':
        return <OptionSelection title="Hvilket design ønsker du til din hjemmeside?" options={designOptions} onSelect={handleDesignSelect} />;
      case 'size':
        return <OptionSelection title="Hvor stor skal din hjemmeside være?" options={sizeOptions} onSelect={handleSizeSelect} />;
      case 'payment':
        return <OptionSelection title="Kommer du til at tage imod betaling på din hjemmeside?" options={paymentOptions} onSelect={handlePaymentSelect} />;
      case 'integration':
        return <OptionSelection title="Will the website be integrated with another website, app or ERP?" options={integrationOptions} onSelect={handleIntegrationSelect} />;
      case 'login':
        return <OptionSelection title="Har du brug for et brugerlogin?" options={loginOptions} onSelect={handleLoginSelect} />;
      case 'multilingual':
        return <OptionSelection title="Skal hjemmesiden kunne bruges på flere sprog?" options={multilingualOptions} onSelect={handleMultilingualSelect} />;
      case 'search':
        return <OptionSelection title="Does the website need a directory/type of internal search?" options={searchOptions} onSelect={handleSearchSelect} />;
      case 'seo':
        return <OptionSelection title="Har du brug for SEO tjenester?" options={seoOptions} onSelect={handleSEOSelect} />;
      case 'stage':
        return <OptionSelection title="Hvilket stadie er din hjemmeside på?" options={stageOptions} onSelect={handleStageSelect} />;
      case 'summary':
        return <Summary selection={selection} total={total} onReset={handleReset} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start justify-center h-screen text-white pt-4" style={{ backgroundColor: '#090909' }}>
      <div className="p-32 rounded shadow-lg text-center w-3/4 flex-col items-center" style={{ backgroundColor: '#090909' }}>
        {/* Progress Indicator */}
        <div className="mb-14 mt-2">
          {step !== 'summary' && (
            <p className="text-xl font-semibold">
              {getCurrentStepNumber()}/{totalSteps}
            </p>
          )}
        </div>

        {/* Step Content */}
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default App;