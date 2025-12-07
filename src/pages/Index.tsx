import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Header />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="col-span-12 lg:col-span-10">
            <MainContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
