import * as React from 'react';
import BasicTabs from '../components/BasicTabs';
import { dashboard } from '../MockData/dashboard-data';


export default function Dashboard() {
 
  return (
    <BasicTabs tabData={dashboard} />
  );
}
