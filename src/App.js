import React, { useState } from 'react';
// import './App.css';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

function App() {
  const [tableData, setTableData] = useState([
    { name: "Châu Hoài Vũ", Plates: 7894561230, ID: 123456789, Phone: "1234567891011", Location: "102"},
    { name: "Nguyễn Đức Nam",  Plates: 7845621590, ID: 123456789, Phone: "1234567891011", Location: "305" },
    { name: "Trân Triệu Tuân",  Plates: 741852912, ID: 123456789, Phone: "1234567891011", Location: "402" },
    { name: "Lê Quan Thái",  Plates: 9876543210, ID: 123456789, Phone: "1234567891011", Location: "104" },
    { name: "Ktuyt's", Plates: 7845621301, ID: 123456789, Phone: "1234567891011", Location: "202" },
    { name: "Đao Văn Ngọc Hoàng",  Plates: 7845621590, ID: 123456789, Phone: "1234567891011", Location: "505" },
    { name: "Hà Đức Tuấn",  Plates: 741852912, ID: 123456789, Phone: "1234567891011", Location: "506" },
    { name: "Ngô Văn kiều",  Plates: 9876543210, ID: 123456789, Phone: "1234567891011", Location: "303" },
    { name: "Trần Thanh Thoa",  Plates: 7894561230, ID: 123456789, Phone: "1234567891011", Location: "107"},
    { name: "Nguyện Thị Ngọc", Plates: 7845621590, ID: 123456789, Phone: "1234567891011", Location: "207" },
    { name: "Bảo Gia Hân",  Plates: 741852912, ID:123456789 , Phone: "1234567891011", Location: "310" },
    { name: "Trịnh Quốc PHúc",  Plates: 9876543210, ID: 123456789, Phone: "1234567891011", Location: "410" },
  ])
  const columns = [
    { title: "Tên", field: "name",   },
    // { title: "Tên", field: "email", filterPlaceholder: "filter" },
    { title: "License Plates", field: "Plates",  grouping: false },
    {
      title: "identity card number", field: "ID",
      // render: (rowData) => <div style={{ background: row,Data.ID >= 18 ? "#008000aa" : "#f90000aa",borderRadius:"4px",paddingLeft:5 }}>{rowData.age >= 18 ? "18+" : "18-"}</div>,
      //  searchable: false, export: false
    },
    { title: "phone number ", field: "Phone"},
    { title: "Location", field: "Location",filterPlaceholder:"filter" },
    // { title: "Schoo: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    // cellStyle: { background:"#009688" }, headerStyle: { color: "#fff" } },
  ]
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      

      <MaterialTable columns={columns} data={tableData}
      style={{width:"1100px"}}
        editable={{
          // onRowAdd: (newRow) => new Promise((resolve, reject) => {
          //   setTableData([...tableData, newRow])

          //   setTimeout(() => resolve(), 500)
          // }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        // actions={[
        //   {
        //     icon: () => <GetAppIcon />,
        //     tooltip: "Click me",
        //     onClick: (e, data) => console.log(data),
        //     // isFreeAction:true
        //   }
        // ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right",
          
          searchAutoFocus: true, searchFieldVariant: "standard",
          // filtering: true,
          //  paging: true,
          
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,



          paginationType: "stepped", showFirstLastPageButtons: false,
          // paginationPosition: "both",
          
          // exportButton: true,
          // exportAllData: true,
          
          exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, 
          
          
          // selection: true,
          showSelectAllCheckbox: false, showTextRowsSelected: false, selectionProps: rowData => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          // grouping: true,
          // columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          // headerStyle: { background: "#f44336",color:"#fff"}
        }}
        title="Customer  Information"
        />
      
    </div>
  );
}

export default App;
