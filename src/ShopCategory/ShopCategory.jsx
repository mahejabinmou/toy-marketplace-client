import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Shop from './shop';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('Disney princes');
  const [singleData,setSingleData]=useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/all-products/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
         console.log(result);
        setToys(result);
      });
  }, [activeTab]);

  console.log(activeTab);

  

  const handleSingleData=id=>{
    console.log(id);
    fetch(`http://localhost:5000/toy/${id}`)
    .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSingleData(result);
      });
  } 

  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName);
}

    
return (

        <Tabs>
        <TabList>
          <Tab onClick={()=>handleTabClick('Disney princes')}>Disney princes</Tab>
          <Tab onClick={()=>handleTabClick('frozen dolls')}>frozen dolls</Tab>
          <Tab onClick={()=>handleTabClick('animation characters')}>animation characters</Tab>
          <Tab onClick={()=>handleTabClick('All')}>All</Tab>
          

        </TabList>
    
        <TabPanel>
          {/* {
            toys.map(toy=><p>{toy.sub_category}</p>)
          } */}

          {
            toys.map(toy=><Shop
            key={toy._id}
            toy={toy}
            
            ></Shop>)
          }
        </TabPanel>
        <TabPanel>
        {
            toys.map(toy=><Shop
            key={toy._id}
            toy={toy}
            
            ></Shop>)
          }
        </TabPanel>
        <TabPanel>
        {
            toys.map(toy=><Shop
            key={toy._id}
            toy={toy}
            
            ></Shop>)
          }
        </TabPanel>
        <TabPanel>
        {
            toys.map(toy=><Shop
            key={toy._id}
            toy={toy}
            
            ></Shop>)
          }
        </TabPanel>
        
      </Tabs>
        
    
  );


        };


export default ShopCategory;