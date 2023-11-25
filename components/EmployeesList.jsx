"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const EmployeesList = ({ data, vehicleList, noOfRecords, showPagination }) => {
  // const [displayData, setDisplayData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const vehcileNames = vehicleList;

  // useEffect(() => {
  //   const sortedData = data?.sort(
  //     (recent, old) => new Date(old.date) - new Date(recent.date)
  //   );
  //   const displayDataArray = noOfRecords
  //     ? sortedData.slice(0, noOfRecords)
  //     : sortedData;

  //   setDisplayData(displayDataArray);
  // }, []);
  const displayData = [{img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000},
  {img: '', empName: 'Ali Saif Ali Saif Ali Saif Ali Saif Ali Saif', age: 23, salary: 4000}]
  const updatePageNumber = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex relative overflow-x-auto rounded-lg">
      {displayData.length > 0 ? (
        <div className="flex flex-col w-full">
          <table className="text-xs text-center text-gray-500 border ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Profile Image
                </th>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Name
                </th>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Salary
                </th>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Age
                </th>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Edit
                </th>
                <th scope="col" className="px-[2.5%] py-[1.875%]">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {displayData
                .slice(currentPage * 5, (currentPage + 1) * 5)
                .map((record, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <th
                      scope="row"
                      className="px-[2.5%] py-[1.875%] font-medium text-gray-900 whitespace-nowrap"
                      align="center"
                    >
                      <Avatar alt="sample" src="./vercel.svg"/>
                    </th>
                    <th
                      scope="row"
                      className="px-[2.5%] py-[1.875%] font-medium text-gray-900 whitespace-nowrap"
                    >
                      {record.empName.substring(0,25)}...
                    </th>
                    <td className="px-[2.5%] py-[1.875%]">
                      {
                        record.salary
                      }
                    </td>
                    <td className="px-[2.5%] py-[1.875%]">
                      {record.age}
                    </td>
                    <td className="px-[2.5%] py-[1.875%]">
                      <BorderColorIcon />
                    </td>
                    <td className="px-[2.5%] py-[1.875%]">
                      <DeleteIcon />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            noOfPages={Math.ceil(displayData.length / 5)}
            updatePage={updatePageNumber}
            currentPage={currentPage}
            showPagination={showPagination}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EmployeesList;
