import React, { useEffect, useState } from 'react';
import AllToys from '../AllToys/AllToys';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Disney princes");

  useEffect(() => {
    fetch(`https://assignment-11-server-side-blush.vercel.app/alltoys/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
}
    return (

        <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        
      </Tabs>
        
    
  );
};

   


export default ShopCategory;