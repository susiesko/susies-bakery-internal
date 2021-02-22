import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import ingredientsList from './ingredients-data';

const Ingredients = () => {
  // get ingredients list (temporarily dummy data from JS file)

  return (
    <React.Fragment>
      <DataTable 
        value={ingredientsList} 
        dataKey="id" 
        rowHover   
        rows={10} 
        emptyMessage="No ingredients found" 
        //currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        //paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
        rowsPerPageOptions={[10,25,50]}
      >
        <Column field="name" header="Name" />
      </DataTable>
    </React.Fragment>
  );
}

export default Ingredients;
