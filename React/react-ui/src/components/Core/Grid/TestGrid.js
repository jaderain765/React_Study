import React, { useEffect } from 'react';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';
import axios from 'axios';

const pageSizes = [10, 25, 50, 100];

const TestGrid = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_RESOURCE_URI + '/page1');
  });

  return (
    <DataGrid
      dataSource={dataSource}
      allowColumnReordering={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
      showColumnLines={true}
      showRowLines={true}
      showBorders={true}
      rowAlternationEnabled={true}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />
      <Grouping autoExpandAll={false} />

      <Column dataField='Product' groupIndex={0} />
      <Column
        dataField='Amount'
        caption='Sale Amount'
        dataType='number'
        format='currency'
        alignment='right'
      />
      <Column dataField='SaleDate' dataType='date' />
      <Column dataField='Region' dataType='string' />
      <Column dataField='Sector' dataType='string' />
      <Column dataField='Channel' dataType='string' />
      <Column dataField='Customer' dataType='string' width={150} />

      <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
      <Paging defaultPageSize={10} />
    </DataGrid>
  );
};

export default TestGrid;
